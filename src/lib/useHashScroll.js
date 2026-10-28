import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles hash-based scrolling on route change.
 * - When the URL hash changes (e.g. "/#services"), scroll to that element.
 * - Waits one animation frame so the target section is mounted first.
 * - Accounts for the sticky header (72px + a small gap).
 */
export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const NAV_OFFSET = 72 + 8; // sticky header height + breathing room

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    // Wait for the DOM to actually have the target element
    const raf = requestAnimationFrame(() => {
      // Try immediately; if the element isn't there yet (route just mounted),
      // retry a few frames until it appears (max ~500ms).
      let attempts = 0;
      const tryScroll = () => {
        if (document.getElementById(id)) {
          scrollToTarget();
          return;
        }
        if (attempts++ < 30) {
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.hash, location.key]);
}