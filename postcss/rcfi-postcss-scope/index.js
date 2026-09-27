/**
 * Scopes a page's stylesheet to that page.
 *
 * Each Stitch design has its own Tailwind theme (different colours for `bg-primary`,
 * a dark theme on some pages, etc.). With client-side navigation several pages' CSS can be
 * loaded at once, so every selector in a page's CSS is prefixed with `html:has(.rcfi-<page>)`:
 * the rules only match while that page's wrapper element is in the DOM.
 * Every selector gains the same specificity, so the cascade inside a page is unchanged.
 *
 * Usage: put `@rcfi-scope rcfi-about;` at the top of the CSS file.
 */
const plugin = () => ({
  postcssPlugin: "rcfi-scope-page",
  OnceExit(root) {
    let scope = null;
    root.walkAtRules("rcfi-scope", (rule) => {
      scope = rule.params.trim();
      rule.remove();
    });
    if (!scope) return;
    const pre = `html:has(.${scope})`;

    const scopeSelector = (sel) => {
      const s = sel.trim();
      if (s.startsWith(pre)) return [s];
      if (/^(html|:root)(?![\w-])/.test(s)) return [pre + s.replace(/^(html|:root)/, "")];
      // universal / bare pseudo-element rules also cover <html> itself (e.g. hiding the page scrollbar)
      if (s.startsWith("*") || s.startsWith("::")) return [`${pre}${s.replace(/^\*/, "")}`, `${pre} ${s}`];
      return [`${pre} ${s}`];
    };

    // keyframe names are global, so give this page's animations unique names
    const renames = new Map();
    root.walkAtRules(/keyframes$/i, (rule) => {
      const name = rule.params.trim();
      const next = `${name}--${scope}`;
      renames.set(name, next);
      rule.params = next;
    });

    root.walkRules((rule) => {
      const parent = rule.parent;
      if (parent && parent.type === "atrule" && /keyframes$/i.test(parent.name)) return;
      rule.selectors = rule.selectors.flatMap(scopeSelector);
    });

    if (renames.size) {
      root.walkDecls(/^(-webkit-)?animation(-name)?$/i, (decl) => {
        decl.value = decl.value.replace(/[\w-]+/g, (w) => renames.get(w) ?? w);
      });
    }
  },
});
plugin.postcss = true;
module.exports = plugin;
