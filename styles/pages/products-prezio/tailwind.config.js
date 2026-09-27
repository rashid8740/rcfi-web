// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#003221",
            "primary-container": "#0b4a34",
            "secondary": "#006c49",
            "secondary-container": "#6cf8bb",
            "secondary-fixed": "#6ffbbe",
            "secondary-fixed-dim": "#4edea3",
            "on-secondary-fixed": "#002113",
            "on-secondary-fixed-variant": "#005236",
            "on-secondary-container": "#00714d",
            "tertiary": "#1b2f28",
            "tertiary-container": "#31453e",
            "tertiary-fixed": "#d1e8dd",
            "tertiary-fixed-dim": "#b5ccc2",
            "on-tertiary-container": "#9cb2a8",
            "surface": "#f8f9ff",
            "surface-dim": "#ccdbf3",
            "surface-bright": "#f8f9ff",
            "surface-container-lowest": "#ffffff",
            "surface-container-low": "#eff4ff",
            "surface-container": "#e6eeff",
            "surface-container-high": "#dce9ff",
            "surface-container-highest": "#d5e3fc",
            "on-surface": "#0d1c2e",
            "on-surface-variant": "#404943",
            "outline": "#707973",
            "outline-variant": "#c0c9c2",
            "inverse-surface": "#233144",
            "inverse-on-surface": "#eaf1ff",
            "inverse-primary": "#98d3b5",
            "background": "#f8f9ff",
            "on-background": "#0d1c2e",
            "on-primary": "#ffffff",
            "on-primary-container": "#7fb99c",
            "error": "#ba1a1a",
            "error-container": "#ffdad6",
            "on-error-container": "#93000a"
          },
          fontFamily: {
            "sans": ["Plus Jakarta Sans", "sans-serif"],
            "body-md": ["Plus Jakarta Sans", "sans-serif"]
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/products/prezio/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
