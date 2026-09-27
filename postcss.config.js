// 1. tailwindcss compiles each page's CSS with that page's own config (see `@config` in styles/pages/*/page.css)
// 2. scope-page keeps every page's CSS active only while that page is on screen
module.exports = {
  plugins: {
    tailwindcss: {},
    "rcfi-postcss-scope": {}, // local plugin in ./postcss/rcfi-postcss-scope
  },
};
