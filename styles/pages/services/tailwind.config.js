// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#003221",
            "primary-dark": "#062c1e",
            "primary-deep": "#041f15",
            "primary-container": "#0b4a34",
            "secondary": "#006c49",
            "secondary-container": "#6cf8bb",
            "secondary-fixed": "#6ffbbe",
            "secondary-emerald": "#10b981",
            "surface": "#f8f9ff",
            "surface-container-low": "#f1f5f9",
            "surface-container": "#e2e8f0",
            "surface-container-lowest": "#ffffff",
            "on-primary": "#ffffff",
            "on-surface": "#0d1c2e",
            "on-surface-variant": "#475569",
            "outline": "#707973",
            "outline-variant": "#cbd5e1"
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "sans-serif"]
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/services/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
