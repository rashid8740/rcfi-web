import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/about/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "About | RCFI Technology" };

export default function AboutPage() {
  return (
    <div className="rcfi-about" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container text-on-primary h-10 px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between font-label-sm text-label-sm">
            <div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <span className="text-on-primary-container hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  CAK Licensed ECSP
                </span>
              </div>
              <span className="text-on-primary-container hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-on-primary-container">
                mail
              </span>
              <a className="text-on-primary hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="h-20 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-full px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
            <div className="flex items-center gap-space-md">
              <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
              <div className="hidden xl:flex flex-col border-l border-outline-variant pl-space-sm">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold leading-none">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center h-full gap-space-lg" data-active-classes="text-primary font-title-md border-b-2 border-secondary">
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
              <PartnersNavMenu className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" />
              <Link aria-current="page" className="h-full flex items-center transition-colors text-primary font-title-md border-b-2 border-secondary" data-path="about" href="/about/">
                About
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-md">
              <a className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-30 bg-surface min-h-[calc(100vh-28rem)]">
        <div className="flex flex-col w-full">
          {/* HERO SECTION: Deep Pine Enterprise Canvas with Mesh Texture */}
          <section className="relative overflow-hidden bg-primary text-on-primary">
            {/* Subtle Ambient Glow & Geometric Lattice */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="rcfi-grid-pattern" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6cf8bb" strokeOpacity="0.3" strokeWidth="0.75" />
                    {" "}
                    <circle cx="48" cy="48" fill="#6cf8bb" fillOpacity="0.5" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#rcfi-grid-pattern)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-16 pb-20 lg:pt-24 lg:pb-28">
              <div className="max-w-4xl">
                {/* Category Pill Badge */}
                {" "}
                <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-tertiary-container/80 text-secondary-fixed mb-space-lg shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    About RCFI Technology • Enterprise Digital Trust
                  </span>
                </div>
                {" "}
                {/* Main Hero Title */}
                <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight mb-space-lg">
                  {" Building Africa’s digital trust infrastructure "}
                </h1>
                {/* High-Impact Lead Paragraph */}
                <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed max-w-3xl mb-space-xl">
                  {" We build secure technology platforms that help organizations sign documents, manage operations, and build trusted digital experiences across Kenya and Africa. "}
                </p>
                {/* Trust Badges Bar */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-md mb-space-xl">
                  <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      location_city
                    </span>
                    <span>
                      Nairobi Based
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      verified
                    </span>
                    <span>
                      CAK Licensed
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      shield
                    </span>
                    <span>
                      ISO 27001 Certified
                    </span>
                  </div>
                </div>
              </div>
              {/* Live Operational Stats Counter Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter mt-space-lg pt-space-xl">
                <div className="p-space-lg rounded-xl bg-tertiary/70 backdrop-blur-sm">
                  <div className="flex items-baseline gap-space-xs mb-space-xs">
                    <span className="font-display-lg text-display-lg text-secondary-fixed font-bold leading-none">
                      3
                    </span>
                    <span className="font-title-md text-title-md text-primary-fixed-dim font-semibold">
                      Tier-1
                    </span>
                  </div>
                  <div className="font-title-md text-title-md text-on-primary font-semibold mb-1">
                    Enterprise Platforms
                  </div>
                  <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                    {"CertySign, Elano & Prezio unified architectures"}
                  </p>
                </div>
                <div className="p-space-lg rounded-xl bg-tertiary/70 backdrop-blur-sm">
                  <div className="flex items-baseline gap-space-xs mb-space-xs">
                    <span className="font-display-lg text-display-lg text-secondary-fixed font-bold leading-none">
                      47
                    </span>
                    <span className="font-title-md text-title-md text-primary-fixed-dim font-semibold">
                      Jurisdictions
                    </span>
                  </div>
                  <div className="font-title-md text-title-md text-on-primary font-semibold mb-1">
                    Counties Supported
                  </div>
                  <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                    Cross-county institutional deployment across Kenya
                  </p>
                </div>
                <div className="p-space-lg rounded-xl bg-tertiary/70 backdrop-blur-sm">
                  <div className="flex items-baseline gap-space-xs mb-space-xs">
                    <span className="font-display-lg text-display-lg text-secondary-fixed font-bold leading-none">
                      24/7
                    </span>
                    <span className="font-title-md text-title-md text-primary-fixed-dim font-semibold">
                      SLA
                    </span>
                  </div>
                  <div className="font-title-md text-title-md text-on-primary font-semibold mb-1">
                    System Reliability
                  </div>
                  <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                    Sovereign HSM infrastructure with real-time uptime
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: WHAT WE STAND FOR (Mission & Vision) */}
          <section className="py-20 lg:py-28 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              {/* Section Header */}
              <div className="max-w-2xl mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm mb-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>
                    Core Directive
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  What we stand for
                </h2>
                <p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
                  Mission-led. Product-built. Compliance-first.
                </p>
              </div>
              {/* Two-Column High-Impact Vision / Mission Bento Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Mission Card */}
                <div className="relative p-space-xl rounded-xl bg-surface shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                  <div>
                    <div className="flex items-center justify-between mb-space-lg">
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[28px]">
                          flag
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase font-semibold">
                        01 / Foundation
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-md">
                      Our Mission
                    </h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      {" Make legally trusted digital transactions accessible to every organization in Africa. "}
                    </p>
                  </div>
                  <div className="pt-space-xl mt-space-lg">
                    <div className="flex items-center gap-space-xs font-label-md text-label-md text-secondary font-semibold">
                      <span className="material-symbols-outlined text-[18px]">
                        verified_user
                      </span>
                      <span>
                        Regulatory Binding Standards
                      </span>
                    </div>
                  </div>
                </div>
                {/* Vision Card */}
                <div className="relative p-space-xl rounded-xl bg-primary text-on-primary shadow-md overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary-fixed" />
                  <div>
                    <div className="flex items-center justify-between mb-space-lg">
                      <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed">
                        <span className="material-symbols-outlined text-[28px]">
                          visibility
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim tracking-wider uppercase font-semibold">
                        02 / Future State
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary mb-space-md">
                      Our Vision
                    </h3>
                    <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed">
                      {" An Africa where paperwork never slows progress — where doing business is digital, secure, and sovereign. "}
                    </p>
                  </div>
                  <div className="pt-space-xl mt-space-lg">
                    <div className="flex items-center gap-space-xs font-label-md text-label-md text-secondary-fixed font-semibold">
                      <span className="material-symbols-outlined text-[18px]">
                        public
                      </span>
                      <span>
                        Pan-African Sovereign Scale
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: WHY WE ARE TRUSTED (6 Pillars) */}
          <section className="py-20 lg:py-28 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="max-w-3xl mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm mb-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>
                    Institutional Verification
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  Why we are trusted
                </h2>
                <p className="font-headline-sm text-headline-sm text-secondary mb-space-md">
                  Trust isn't claimed. It's licensed, certified, and audited.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Every layer of our platforms is built around security, compliance, and operational reliability. "}
                </p>
              </div>
              {/* 6-Card High-Contrast Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* Card 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        gavel
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      Licensed by the CAK
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Authorized Electronic Certification Service Provider. Our signatures are legally binding under Kenyan law — enforceable, not just convenient. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      KICA Act Enforceable
                    </span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      ISO 27001 certified
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Information security management certified to the international standard for encryption, access control, and document handling. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Audited Information Security
                    </span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        dns
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      Data sovereignty — hosted in Kenya
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Customer data stays in Kenya, aligned with the Kenya Data Protection Act 2019. Zero unvetted offshore data migration. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Kenya DPA 2019 Compliant
                    </span>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        key
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      Real PKI, operated in-house
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" HSM-backed key storage, X.509 certificates, and trusted timestamp authority running directly on our institutional hardware. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      FIPS 140-2 Level 3 HSM
                    </span>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        history_edu
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      Tamper-proof audit trails
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Every action logged and retained for compliance and accountability with cryptographic validation and non-repudiation. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Cryptographic Timestamps
                    </span>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        headset_mic
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      {"24/7 monitoring & support"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Continuous monitoring with a team ready for support and custom builds tailored to specialized enterprise architectures. "}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Dedicated Security Ops
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: PLATFORM ECOSYSTEM */}
          <section className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm mb-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>
                    Technology Architecture
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  Platform ecosystem
                </h2>
                <p className="font-headline-sm text-headline-sm text-secondary mb-space-sm">
                  Three products. One engineering standard.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Built in Nairobi. Designed for regulated industries. Connected by one secure technology foundation. "}
                </p>
              </div>
              {/* 3-Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* CertySign Card */}
                <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-1 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold">
                        {"Digital Trust & PKI"}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        fingerprint
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                      CertySign
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      {" Legally binding e-signatures, certificates, and trusted timestamping with audit-grade trails. "}
                    </p>
                  </div>
                  <div>
                    <div className="py-space-md mb-space-md">
                      <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>
                          CAK Root Authority Binding
                        </span>
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary font-semibold transition-colors" data-path="certysign" href="#">
                      <span>
                        Explore product
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                {/* Elano Card */}
                <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-1 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold">
                        {"Governance & Intelligence"}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        corporate_fare
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                      Elano
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      {" Institution registration, boards, planning, M&E, and finance in one governed workspace. "}
                    </p>
                  </div>
                  <div>
                    <div className="py-space-md mb-space-md">
                      <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>
                          Enterprise Resource Cloud
                        </span>
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary font-semibold transition-colors" data-path="elano" href="#">
                      <span>
                        Explore product
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                {/* Prezio Card */}
                <div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-1 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold">
                        Operations Automation
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        schema
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                      Prezio
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      {" Requests, approvals, documents, and workflows that move without chasing people down. "}
                    </p>
                  </div>
                  <div>
                    <div className="py-space-md mb-space-md">
                      <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>
                          Automated Audit Hand-offs
                        </span>
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary font-semibold transition-colors" data-path="prezio" href="#">
                      <span>
                        Explore product
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 5: LEADERSHIP & ENGINEERING */}
          <section className="py-20 lg:py-28 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              {/* Section Header */}
              <div className="max-w-3xl mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm mb-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>
                    {"Engineers & Executives"}
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  {"Leadership & engineering"}
                </h2>
                <p className="font-headline-sm text-headline-sm text-secondary mb-space-md">
                  The team behind the platform
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Operators, engineers, and compliance specialists building production technology for regulated environments. "}
                </p>
              </div>
              {/* Team Members Grid (9 Members) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* 1: Ian Kigen Kisorio */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" IK "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Ian Kigen Kisorio
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          {"Chief Executive Officer & Founder"}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Leadership & Vision "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Founder and CEO driving RCFI's mission across Kenya and East Africa. "}
                    </p>
                  </div>
                </div>
                {/* 2: Emmanuel Mariaria */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" EM "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Emmanuel Mariaria
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Chief Operating Officer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Operations "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Leads operational excellence and business development initiatives. "}
                    </p>
                  </div>
                </div>
                {/* 3: Ian Ndoli */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" IN "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Ian Ndoli
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Chief Technology Officer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Technology & Engineering "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Oversees technology strategy and engineering excellence across all RCFI platforms. "}
                    </p>
                  </div>
                </div>
                {/* 4: Kevin Tonui */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" KT "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Kevin Tonui
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Chief Compliance Officer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Cybersecurity & Compliance "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Leads compliance and regulatory strategy for all RCFI digital trust services. "}
                    </p>
                  </div>
                </div>
                {/* 5: Jotham Mwangi */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" JM "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Jotham Mwangi
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Backend Engineer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Backend Engineering "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Leads backend engineering powering CertySign, Elano, and Prezio. "}
                    </p>
                  </div>
                </div>
                {/* 6: Virginia Maina */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" VM "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Virginia Maina
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          {"UX/UI & Frontend Developer"}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Design & Frontend "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Creates intuitive product experiences and ships modern frontend systems. "}
                    </p>
                  </div>
                </div>
                {/* 7: Tom Steve */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" TS "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Tom Steve
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Software Developer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Platform Delivery "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Develops secure and scalable software solutions that power RCFI’s digital platforms. "}
                    </p>
                  </div>
                </div>
                {/* 8: Chebet */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" CH "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Chebet
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          {"UI & UX Designer"}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Platform Delivery "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Designs intuitive, user-centered interfaces that deliver seamless and engaging digital experiences. "}
                    </p>
                  </div>
                </div>
                {/* 9: Kame */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-md mb-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center shrink-0">
                        {" KM "}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-title-md text-title-md text-primary truncate font-bold">
                          Kame
                        </h3>
                        <p className="font-label-sm text-label-sm text-secondary font-semibold">
                          Frontend Developer
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
                      {" Platform Delivery "}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Builds responsive, modern web interfaces that ensure fast, accessible, and seamless user experiences. "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: COVERAGE (Geographic Tiers) */}
          <section className="py-20 lg:py-28 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="max-w-3xl mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm mb-space-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>
                    Sovereign Footprint
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-xs">
                  Coverage
                </h2>
                <p className="font-headline-sm text-headline-sm text-secondary mb-space-md">
                  Built in Nairobi. Ready for the continent.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" From Kenya's technology ecosystem to Africa's digital future, our platforms are designed for secure growth across borders. "}
                </p>
              </div>
              {/* 4 Regional Tier Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Nairobi Tier */}
                <div className="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        apartment
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                      HQ Center
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      Nairobi
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Headquartered at Hifadhi House, ICD Road "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {" Engineering HQ "}
                    </span>
                  </div>
                </div>
                {/* Kenya Tier */}
                <div className="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        map
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                      National
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      Kenya
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Serving organizations across all 47 counties "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {" Full Jurisdiction "}
                    </span>
                  </div>
                </div>
                {/* East Africa Tier */}
                <div className="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        hub
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                      Regional
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      East Africa
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Regional and cross-border ready "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {" EAC Interoperability "}
                    </span>
                  </div>
                </div>
                {/* Africa Tier */}
                <div className="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">
                        globe_asia
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                      Continental
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      Africa
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Building infrastructure for digital transformation "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {" AfCFTA Scale "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 7: PARTNER WITH RCFI CONVERSION BANNER */}
          <section className="py-16 lg:py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-xl lg:p-16 shadow-xl">
                {/* Decorative Ambient Green Network Grid */}
                <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary opacity-15 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary-container opacity-30 blur-2xl pointer-events-none" />
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm mb-space-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                    <span>
                      Enterprise Engagement
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary mb-space-xs">
                    Partner with RCFI
                  </h2>
                  <p className="font-headline-sm text-headline-sm text-secondary-fixed mb-space-md">
                    {" Build secure digital infrastructure with a team that understands trust. "}
                  </p>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed mb-space-xl max-w-2xl">
                    {" From platform demonstrations to fully customized solutions, connect with the engineers and product teams building Africa's digital future. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md">
                    <a className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold hover:bg-secondary-fixed-dim transition-colors shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px] mr-space-xs">
                        calendar_month
                      </span>
                      <span>
                        Book a Meeting
                      </span>
                    </a>
                    <Link className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors" data-path="contact" href="/contact/">
                      <span className="material-symbols-outlined text-[18px] mr-space-xs">
                        chat
                      </span>
                      <span>
                        Send a Message
                      </span>
                    </Link>
                    <a className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-transparent text-primary-fixed hover:text-on-primary font-label-md text-label-md font-semibold transition-colors" href="mailto:info@rcfi.co.ke">
                      <span className="material-symbols-outlined text-[18px] mr-space-xs">
                        mail
                      </span>
                      <span>
                        Email info@rcfi.co.ke
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div>
              <div className="flex items-center gap-space-xs mb-space-md">
                <span className="font-headline-sm text-headline-sm text-primary-fixed tracking-tight font-bold">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">
                  • Technology
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-lg leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed telecommunications, cybersecurity, and digital trust solutions provider delivering institutional-grade systems across Africa.
              </p>
              <div className="flex items-center gap-space-sm">
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    public
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    hub
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    smart_display
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    podcasts
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                Products
              </h4>
              <ul className="space-y-space-sm">
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign PKI
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="elano" href="/products/elano/">
                    Elano Cloud Suite
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio Financial Gateway
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="health-security" href="/health-security/">
                    Health Security Engine
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                Company
              </h4>
              <ul className="space-y-space-sm">
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="updates" href="/insights/">
                    {"Updates & Press"}
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="careers" href="/careers/">
                    Careers
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li className="leading-none">
                  <a className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                {"Contact & Regulatory"}
              </h4>
              <div className="flex flex-col gap-space-sm font-body-md text-body-md text-tertiary-fixed-dim mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed shrink-0">
                    location_on
                  </span>
                  <span>
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed shrink-0">
                    mail
                  </span>
                  <a className="hover:text-on-primary transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </div>
              </div>
              <div className="pt-space-sm border-t border-tertiary-container flex flex-wrap gap-space-xs">
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  ISO 27001
                </span>
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  CAK ECSP
                </span>
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  Kenya DPA
                </span>
              </div>
            </div>
          </div>
          <div className="pt-space-md border-t border-tertiary-container flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-tertiary-fixed-dim">
            <div>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-on-primary transition-colors" data-path="terms-of-service" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-on-primary transition-colors" data-path="compliance-portal" href="/trust/">
                Compliance Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
