import Link from "next/link";
import "./PartnersNavMenu.css";

// Same entries as the "Partners & Ecosystem" mega-menu on /partners/.
const ITEMS = [
  { href: "/partners/", title: "Ecosystem Overview", desc: "Alliances & statutory frameworks" },
  { href: "/partners/konza/", title: "Konza Technopolis", desc: "National cloud & datacenter replication" },
  { href: "/partners/dha/", title: "Digital Health Agency (DHA)", desc: "Clinical trust, HL7 FHIR conformance" },
  { href: "/partners/intellisoft/", title: "IntelliSOFT Consulting", desc: "Digital health informatics integration" },
  { href: "/partners/crown-interactive/", title: "Crown Interactive", desc: "Public sector workflow platforms" },
];

/**
 * "Partners & Ecosystem" header item with a hover/focus dropdown, for pages whose Stitch design
 * didn't include one. `className` is the page's own top-level nav link classes, so the trigger
 * matches the rest of that header; `wrapperClassName` mirrors the padding some headers put on
 * their item wrappers. The dropdown panel is styled in PartnersNavMenu.css rather
 * than with Tailwind, because each page compiles its own Tailwind theme.
 */
export default function PartnersNavMenu({
  className,
  wrapperClassName = "",
  current = false,
  tone = "light",
}: {
  className: string;
  wrapperClassName?: string;
  current?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`rcfi-pe rcfi-pe--${tone} ${wrapperClassName}`}>
      <Link
        aria-current={current ? "page" : undefined}
        className={className}
        data-path="ecosystem"
        href="/ecosystem/"
        style={{ whiteSpace: "nowrap" }}
      >
        <span>{"Partners & Ecosystem"}</span>
        <span aria-hidden="true" className="material-symbols-outlined rcfi-pe__chevron">
          expand_more
        </span>
      </Link>
      <div className="rcfi-pe__panel">
        <div className="rcfi-pe__card">
          {ITEMS.map((item) => (
            <Link className="rcfi-pe__item" href={item.href} key={item.href}>
              <span className="rcfi-pe__title">{item.title}</span>
              <span className="rcfi-pe__desc">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
