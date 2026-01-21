/**
 * Helper to resolve asset paths for GitHub Pages subdirectories.
 * @param {string} path 
 * @returns {string}
 */
export function getAssetUrl(path) {
  if (!path) return '';
  
  // If it's an external URL or already relative, return as is
  if (path.startsWith('http') || !path.startsWith('/')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;
}
