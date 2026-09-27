// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'primary': '#072b1d',
            'primary-container': '#0b4a34',
            'primary-dark': '#041f14',
            'secondary': '#006c49',
            'accent-lime': '#bdf739',
            'accent-emerald': '#10b981',
            'accent-teal': '#00d2c4',
            'surface-dark': '#08251a',
            'card-dark': '#0c3525',
            'text-muted': '#718096',
            'surface-light': '#f8faf9',
            'border-light': '#e2e8f0',
          },
          borderRadius: {
            'xl': '1rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            'full': '9999px'
          }
        }
      }
    };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/variants/home-3/page.tsx"] },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
