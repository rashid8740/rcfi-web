// Tailwind config exactly as Stitch exported it for this page.
// Only `content` (which files to scan) and the CDN plugins it loaded are added.
const stitch = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "primary-container": "#0b4a34",
          "surface-container-high": "#dce9ff",
          "on-primary-container": "#7fb99c",
          "on-tertiary": "#ffffff",
          "tertiary-fixed-dim": "#b5ccc2",
          "on-primary-fixed": "#002114",
          "inverse-primary": "#98d3b5",
          "secondary": "#006c49",
          "on-error-container": "#93000a",
          "primary": "#003221",
          "on-secondary-container": "#00714d",
          "error": "#ba1a1a",
          "primary-fixed": "#b4f0d1",
          "surface-bright": "#f8f9ff",
          "on-background": "#0d1c2e",
          "on-secondary-fixed-variant": "#005236",
          "surface-container-highest": "#d5e3fc",
          "on-primary": "#ffffff",
          "inverse-on-surface": "#eaf1ff",
          "secondary-container": "#6cf8bb",
          "error-container": "#ffdad6",
          "surface-dim": "#ccdbf3",
          "on-tertiary-container": "#9cb2a8",
          "secondary-fixed-dim": "#4edea3",
          "surface-container-lowest": "#ffffff",
          "secondary-fixed": "#6ffbbe",
          "outline-variant": "#c0c9c2",
          "on-surface-variant": "#404943",
          "surface-tint": "#306951",
          "tertiary-container": "#31453e",
          "on-tertiary-fixed": "#0b1f19",
          "outline": "#707973",
          "on-tertiary-fixed-variant": "#374b43",
          "tertiary-fixed": "#d1e8dd",
          "on-error": "#ffffff",
          "primary-fixed-dim": "#98d3b5",
          "inverse-surface": "#233144",
          "on-primary-fixed-variant": "#14503a",
          "surface": "#f8f9ff",
          "on-surface": "#0d1c2e",
          "surface-container-low": "#eff4ff",
          "surface-variant": "#d5e3fc",
          "on-secondary": "#ffffff",
          "surface-container": "#e6eeff",
          "background": "#f8f9ff",
          "on-secondary-fixed": "#002113",
          "tertiary": "#1b2f28"
        },
        "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
        "spacing": {
          "space-xs": "0.25rem",
          "space-xl": "2.5rem",
          "space-md": "1rem",
          "space-sm": "0.5rem",
          "gutter-mobile": "1rem",
          "space-lg": "1.5rem",
          "margin-mobile": "1rem",
          "margin": "2rem",
          "gutter": "1.5rem"
        },
        "fontFamily": {
          "headline-md": [
            "Plus Jakarta Sans"
          ],
          "headline-sm": [
            "Plus Jakarta Sans"
          ],
          "label-sm": [
            "Plus Jakarta Sans"
          ],
          "headline-lg-mobile": [
            "Plus Jakarta Sans"
          ],
          "label-md": [
            "Plus Jakarta Sans"
          ],
          "display-lg": [
            "Plus Jakarta Sans"
          ],
          "body-md": [
            "Plus Jakarta Sans"
          ],
          "title-md": [
            "Plus Jakarta Sans"
          ],
          "headline-lg": [
            "Plus Jakarta Sans"
          ],
          "body-lg": [
            "Plus Jakarta Sans"
          ],
          "display-lg-mobile": [
            "Plus Jakarta Sans"
          ]
        },
        "fontSize": {
          "headline-md": [
            "28px",
            {
              "lineHeight": "36px",
              "letterSpacing": "-0.01em",
              "fontWeight": "600"
            }
          ],
          "headline-sm": [
            "20px",
            {
              "lineHeight": "28px",
              "fontWeight": "600"
            }
          ],
          "label-sm": [
            "11px",
            {
              "lineHeight": "16px",
              "letterSpacing": "0.03em",
              "fontWeight": "600"
            }
          ],
          "headline-lg-mobile": [
            "26px",
            {
              "lineHeight": "34px",
              "letterSpacing": "-0.01em",
              "fontWeight": "700"
            }
          ],
          "label-md": [
            "13px",
            {
              "lineHeight": "18px",
              "letterSpacing": "0.01em",
              "fontWeight": "500"
            }
          ],
          "display-lg": [
            "48px",
            {
              "lineHeight": "56px",
              "letterSpacing": "-0.02em",
              "fontWeight": "700"
            }
          ],
          "body-md": [
            "14px",
            {
              "lineHeight": "22px",
              "fontWeight": "400"
            }
          ],
          "title-md": [
            "18px",
            {
              "lineHeight": "26px",
              "fontWeight": "600"
            }
          ],
          "headline-lg": [
            "36px",
            {
              "lineHeight": "44px",
              "letterSpacing": "-0.02em",
              "fontWeight": "700"
            }
          ],
          "body-lg": [
            "16px",
            {
              "lineHeight": "26px",
              "fontWeight": "400"
            }
          ],
          "display-lg-mobile": [
            "32px",
            {
              "lineHeight": "40px",
              "letterSpacing": "-0.01em",
              "fontWeight": "700"
            }
          ]
        }
      },
    },
  };

module.exports = {
  ...stitch,
  content: { relative: true, files: ["../../../app/verify/page.tsx"] },
  plugins: [],
};
