"use client";

import { useEffect } from "react";

type Win = Window & { __rcfiTrack?: (id: number) => number };

const EVENTS = ["click", "submit", "input", "change"];

/**
 * Runs a page's original Stitch scripts once the page is on screen.
 *
 * - Each script runs as a classic script in its own block, so pages can't clash
 *   (functions still become globals, which the markup's inline handlers call).
 * - DOMContentLoaded / load callbacks run immediately, since the DOM is already there.
 * - Inline handlers from the HTML (onclick="…", onsubmit="…") are kept as
 *   data-rcfi-on* attributes and bound here with the same semantics.
 * - Timers are cleared and listeners removed when you navigate away.
 */
export default function PageScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    const w = window as Win;
    const timers = new Set<number>();
    w.__rcfiTrack = (id: number) => {
      timers.add(id);
      return id;
    };

    const nodes = scripts.map((code) => {
      const el = document.createElement("script");
      el.textContent = wrap(code);
      document.body.appendChild(el);
      return el;
    });

    const unbinders: Array<() => void> = [];
    for (const type of EVENTS) {
      document.querySelectorAll<HTMLElement>(`[data-rcfi-on${type}]`).forEach((el) => {
        const handler = new Function("event", el.getAttribute(`data-rcfi-on${type}`) ?? "");
        const listener = function (this: HTMLElement, event: Event) {
          if (handler.call(this, event) === false) event.preventDefault();
        };
        el.addEventListener(type, listener);
        unbinders.push(() => el.removeEventListener(type, listener));
      });
    }

    return () => {
      timers.forEach((id) => {
        clearInterval(id);
        clearTimeout(id);
      });
      nodes.forEach((n) => n.remove());
      unbinders.forEach((u) => u());
    };
  }, [scripts]);

  return null;
}

function wrap(code: string) {
  const ready = code.replace(
    /(?:document|window)\.addEventListener\(\s*(['"])(?:DOMContentLoaded|load)\1\s*,/g,
    "__rcfiReady(",
  );
  return [
    "{",
    "const setInterval = (f, t, ...a) => window.__rcfiTrack(window.setInterval(f, t, ...a));",
    "const setTimeout = (f, t, ...a) => window.__rcfiTrack(window.setTimeout(f, t, ...a));",
    "const __rcfiReady = (f) => f();",
    ready,
    "}",
  ].join("\n");
}
