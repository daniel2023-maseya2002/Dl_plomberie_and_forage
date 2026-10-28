/**
 * Navigate to a section of a page.
 * If we're already on the target path, just scroll (and push a fresh hash
 * so the user can see it in the URL and the scroll fires).
 * Otherwise, go to the path first, then the hash-scroll hook takes over.
 */
export function navigateToSection(navigate, pathname, currentPath, sectionId) {
  const targetPath = pathname || '/';
  const targetHash = sectionId ? `#${sectionId}` : '';

  if (currentPath === targetPath) {
    // Same page — scroll directly, don't touch the router
    const el = document.getElementById(sectionId);
    if (el) {
      const NAV_OFFSET = 72 + 8;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
  }

  // Different page — let the router navigate; the hash-scroll hook handles it
  navigate(`${targetPath}${targetHash}`);
}