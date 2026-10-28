import { useEffect, useState } from 'react';

/**
 * Tracks which section of the home page is currently in view.
 * Returns the section id (e.g. "services", "contact") or null if none / not home.
 *
 * @param {string} pathname  The current route pathname
 * @param {string[]} sectionIds  The ids of the sections to observe
 * @param {number} offset  How many px from the top count as "in view" (defaults to 100)
 */
export function useActiveSection(pathname, sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Only observe on the home page
    if (pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that's currently intersecting and closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else {
          setActiveSection(null);
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname, sectionIds, offset]);

  return activeSection;
}