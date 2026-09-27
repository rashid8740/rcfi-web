// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            pine: {
              950: '#041810',
              900: '#072d1f',
              850: '#0a3a28',
              800: '#0d4a34',
              700: '#146347',
            },
            emerald: {
              brand: '#006c49',
              bright: '#00cc7a',
              glow: '#4edea3',
              tint: '#6cf8bb',
              soft: '#d1e8dd',
            },
            surface: '#f8f9ff',
            'surface-card': '#ffffff',
            'surface-muted': '#f0f4fc',
            'on-surface': '#0d1c2e',
            'on-muted': '#546577',
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/academy/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
