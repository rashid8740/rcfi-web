import type { Metadata } from "next";
import { routes, type SiteRoute } from "@/lib/routes";

export const metadata: Metadata = { title: "Design index | RCFI Technology", robots: { index: false } };

// Internal index of every page plus the alternate designs Stitch produced.
// Not linked from the site — open /variants/ to review and compare.
export default function Variants() {
  const main = routes.filter((r) => !r.path.startsWith("/variants/"));
  const alts = routes.filter((r) => r.path.startsWith("/variants/"));
  const list = (items: SiteRoute[]) => (
    <ul style={{ lineHeight: 1.9, paddingLeft: 20 }}>
      {items.map((r) => (
        <li key={r.path}>
          <a href={r.path} style={{ color: "#006c49" }}>{r.path}</a>{" "}
          <span style={{ color: "#555" }}>— {r.title}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 860, margin: "48px auto", padding: "0 20px", color: "#0d1c2e" }}>
      <h1 style={{ fontSize: 28 }}>RCFI design index</h1>
      <h2 style={{ fontSize: 18, marginTop: 32 }}>Site pages</h2>
      {list(main)}
      <h2 style={{ fontSize: 18, marginTop: 32 }}>Alternate designs</h2>
      {list(alts)}
    </main>
  );
}
