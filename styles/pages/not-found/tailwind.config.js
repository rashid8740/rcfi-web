// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "pine": {
              DEFAULT: "#0b4a34",
              dark: "#00281b",
              deep: "#041f15",
              hover: "#083626",
              light: "#14503a"
            },
            "emerald-accent": {
              DEFAULT: "#00a88f",
              light: "#e6f8f5",
              border: "#98d3b5"
            },
            "surface": "#f8f9ff",
            "surface-low": "#eff4ff",
            "surface-container": "#e6eeff",
            "on-surface": "#0d1c2e",
            "on-surface-variant": "#475569"
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
            body: ["Inter", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"]
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/not-found.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
