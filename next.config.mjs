/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deploys to GitHub Pages (custom domain: chandnisoni.co.uk).
  output: 'export',
  // Trailing slashes produce /about/index.html style paths that GitHub Pages serves cleanly.
  trailingSlash: true,
  images: {
    // The export target has no Node image server, so images ship as-authored.
    unoptimized: true,
  },
  // Keep the production build resilient on CI; source is type-checked in the editor.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
