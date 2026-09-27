// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#003221",
            "primary-container": "#0b4a34",
            "primary-fixed": "#b4f0d1",
            "primary-fixed-dim": "#98d3b5",
            "secondary": "#006c49",
            "secondary-container": "#6cf8bb",
            "secondary-fixed": "#6ffbbe",
            "secondary-fixed-dim": "#4edea3",
            "on-primary": "#ffffff",
            "on-primary-container": "#7fb99c",
            "on-secondary": "#ffffff",
            "on-secondary-container": "#00714d",
            "surface": "#f8f9ff",
            "surface-bright": "#f8f9ff",
            "surface-dim": "#ccdbf3",
            "surface-container-lowest": "#ffffff",
            "surface-container-low": "#eff4ff",
            "surface-container": "#e6eeff",
            "surface-container-high": "#dce9ff",
            "surface-container-highest": "#d5e3fc",
            "on-surface": "#0d1c2e",
            "on-surface-variant": "#404943",
            "outline": "#707973",
            "outline-variant": "#c0c9c2",
            "tertiary": "#1b2f28",
            "tertiary-container": "#31453e",
            "tertiary-fixed": "#d1e8dd",
            "tertiary-fixed-dim": "#b5ccc2",
            "error": "#ba1a1a",
            "error-container": "#ffdad6"
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "sans-serif"],
            "headline-sm": ["Plus Jakarta Sans"],
            "headline-md": ["Plus Jakarta Sans"],
            "headline-lg": ["Plus Jakarta Sans"],
            "display-lg": ["Plus Jakarta Sans"],
            "title-md": ["Plus Jakarta Sans"],
            "body-md": ["Plus Jakarta Sans"],
            "body-lg": ["Plus Jakarta Sans"],
            "label-sm": ["Plus Jakarta Sans"],
            "label-md": ["Plus Jakarta Sans"]
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/careers/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
