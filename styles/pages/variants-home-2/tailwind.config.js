// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "outline": "#707973",
            "surface-container": "#e6eeff",
            "on-tertiary-fixed": "#0b1f19",
            "on-tertiary-fixed-variant": "#374b43",
            "on-secondary-fixed-variant": "#005236",
            "primary-fixed-dim": "#98d3b5",
            "on-primary": "#ffffff",
            "inverse-primary": "#98d3b5",
            "tertiary-fixed": "#d1e8dd",
            "error-container": "#ffdad6",
            "secondary-fixed": "#6ffbbe",
            "surface-tint": "#306951",
            "on-primary-fixed-variant": "#14503a",
            "primary-container": "#0b4a34",
            "surface-bright": "#f8f9ff",
            "on-secondary-container": "#00714d",
            "on-tertiary-container": "#9cb2a8",
            "outline-variant": "#c0c9c2",
            "tertiary-container": "#31453e",
            "surface-container-high": "#dce9ff",
            "on-primary-fixed": "#002114",
            "on-background": "#0d1c2e",
            "on-secondary": "#ffffff",
            "inverse-surface": "#233144",
            "surface-container-low": "#eff4ff",
            "on-tertiary": "#ffffff",
            "surface-container-lowest": "#ffffff",
            "on-secondary-fixed": "#002113",
            "primary": "#003221",
            "secondary-fixed-dim": "#4edea3",
            "background": "#f8f9ff",
            "surface-dim": "#ccdbf3",
            "on-surface-variant": "#404943",
            "primary-fixed": "#b4f0d1",
            "secondary-container": "#6cf8bb",
            "error": "#ba1a1a",
            "on-surface": "#0d1c2e",
            "tertiary": "#1b2f28",
            "on-error": "#ffffff",
            "surface": "#f8f9ff",
            "inverse-on-surface": "#eaf1ff",
            "surface-container-highest": "#d5e3fc",
            "tertiary-fixed-dim": "#b5ccc2",
            "secondary": "#006c49",
            "on-error-container": "#93000a",
            "surface-variant": "#d5e3fc",
            "on-primary-container": "#7fb99c"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "space-md": "1rem",
            "space-lg": "1.5rem",
            "gutter": "1.5rem",
            "space-xl": "2.5rem",
            "gutter-mobile": "1rem",
            "space-xs": "0.25rem",
            "margin-mobile": "1rem",
            "margin": "2rem",
            "space-sm": "0.5rem"
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "sans-serif"],
            "body-md": ["Plus Jakarta Sans", "sans-serif"],
            "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
            "headline-md": ["Plus Jakarta Sans", "sans-serif"],
            "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
            "title-md": ["Plus Jakarta Sans", "sans-serif"],
            "label-md": ["Plus Jakarta Sans", "sans-serif"],
            "label-sm": ["Plus Jakarta Sans", "sans-serif"],
            "display-lg": ["Plus Jakarta Sans", "sans-serif"]
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/variants/home-2/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
