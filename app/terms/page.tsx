import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/terms/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Terms of Service | RCFI Technology" };

export default function TermsPage() {
  return (
    <div className="rcfi-terms dark" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-sovereign-navy/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-digital-emerald animate-pulse shrink-0" />
              <span className="font-label-badge text-label-badge text-text-muted tracking-wider uppercase">
                CAK Licensed Electronic Certification Service Provider (TL/E-CSP 00014) • ISO 27001 Certified • National Root CA Anchor
              </span>
            </div>
            <div className="hidden md:flex items-center gap-space-md shrink-0 font-label-code text-label-code">
              <Link className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" data-path="verify-document" href="/verify/">
                <span>
                  Verify Document
                </span>
              </Link>
              <span className="text-outline-variant">
                |
              </span>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" data-path="ca-repository" href="/trust/">
                <span>
                  CA Repository
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-slate/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(6,11,20,0.6)]">
          <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <Link className="flex items-center gap-space-sm group" data-path="home" href="/">
                <img alt="RCFI Sovereign Digital Trust Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-sovereign-mark.svg" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                    RCFI
                    <span className="text-primary">
                      .
                    </span>
                  </span>
                  <span className="font-label-badge text-[10px] tracking-widest uppercase text-text-muted">
                    Digital Trust
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-1" data-active-classes="bg-surface-elevated text-primary font-semibold rounded-lg">
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="products" href="/products/certysign/">
                Products
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="academy" href="/academy/">
                Academy
              </Link>
              <PartnersNavMenu className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" tone="dark" />
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="why-rcfi" href="/about/">
                Why RCFI
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm">
              <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-label-code text-label-code bg-surface-container-high text-primary hover:bg-surface-bright hover:text-primary transition-colors" data-path="verify-document" href="/verify/">
                Verify a Document
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-body-sm text-body-sm font-semibold bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed transition-all shadow-[0_0_15px_rgba(0,210,196,0.25)]" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[7.5rem] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Governance Authority Hero Bar */}
          <section className="w-full bg-primary-container text-on-primary">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl lg:py-space-2xl">
              {/* Breadcrumb & System State */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-primary-container">
                  <Link className="hover:text-primary-fixed transition-colors flex items-center gap-1" data-path="home" href="/">
                    <span className="material-symbols-outlined text-[16px]">
                      domain
                    </span>
                    <span>
                      Home
                    </span>
                  </Link>
                  <span className="opacity-40">
                    /
                  </span>
                  <Link className="hover:text-primary-fixed transition-colors" data-path="trust-center" href="/terms/">
                    {"Legal & Trust"}
                  </Link>
                  <span className="opacity-40">
                    /
                  </span>
                  <span className="text-on-primary font-semibold">
                    Terms of Service
                  </span>
                </nav>
                <div className="flex items-center gap-space-xs bg-tertiary-container text-on-primary px-space-sm py-1 rounded-full text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span>
                    DOCUMENT REF: RCFI-LEG-TOS-2026.01
                  </span>
                </div>
              </div>
              {/* Main Headline Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8 flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-container font-semibold">
                    {" // GOVERNANCE & STATUTORY AGREEMENT "}
                  </span>
                  <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold tracking-tight text-on-primary">
                    {" Terms of Service "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl">
                    {" Terms, acceptable use standards, and institutional conditions governing access to RCFI websites, cryptographic public interfaces, national trust services, and health infrastructure gateways. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-end">
                  <div className="bg-tertiary-container/60 backdrop-blur-md rounded-xl p-space-md flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        verified_user
                      </span>
                      <span className="font-title-md text-title-md">
                        Statutory Standing
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-tertiary-container">
                      {" Operated under Communications Authority of Kenya ECSP License "}
                      <strong className="text-on-primary">
                        TL/E-CSP 00014
                      </strong>
                      {" pursuant to KICA Cap 411A. "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Quick Meta Strip */}
              <div className="mt-space-xl pt-space-md bg-tertiary-container/30 rounded-xl px-space-md py-space-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md text-label-sm font-label-sm">
                  <div className="flex flex-col">
                    <span className="text-on-primary-container uppercase tracking-wider text-[10px]">
                      Effective Date
                    </span>
                    <span className="text-on-primary font-semibold mt-0.5">
                      January 1, 2026
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-primary-container uppercase tracking-wider text-[10px]">
                      Document Version
                    </span>
                    <span className="text-on-primary font-semibold mt-0.5">
                      v2.3 (Audited Q1)
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-primary-container uppercase tracking-wider text-[10px]">
                      Statutory Jurisdiction
                    </span>
                    <span className="text-on-primary font-semibold mt-0.5">
                      Republic of Kenya
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-primary-container uppercase tracking-wider text-[10px]">
                      Governing Laws
                    </span>
                    <span className="text-on-primary font-semibold mt-0.5">
                      {"KICA Cap 411A & Evidence Act"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Institutional Advisory Callout Banner */}
          <section className="w-full bg-surface-container-high text-on-surface py-space-md">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
              <div className="bg-surface-container-lowest shadow-md rounded-xl p-space-md md:p-space-lg flex flex-col md:flex-row items-start md:items-center gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    gavel
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-primary">
                      {"INSTITUTIONAL NOTICE & DUAL-LAYER JURISPRUDENCE"}
                    </span>
                    <span className="bg-secondary text-on-secondary font-label-sm text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      Mandatory
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {" These Terms govern general public portal, website evaluation, and API sandbox usage. Enterprise platform subscriptions, qualified x.509 certificate issuance, and CAK-licensed PKI operations are additionally governed by the "}
                    <Link className="text-secondary font-semibold hover:underline" data-path="ca-repository" href="/trust/">
                      RCFI Certification Practice Statement (CPS)
                    </Link>
                    {" and associated Subscriber Agreements. "}
                  </p>
                </div>
                <Link className="shrink-0 inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-label-md hover:bg-primary-container transition-all shadow-sm" data-path="ca-repository" href="/trust/">
                  <span>
                    Access Root CPS
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
          {/* Main Legal Document Layout: Sidebar + Master Terms Stream */}
          <main className="w-full bg-surface py-space-xl lg:py-space-2xl">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                {/* Left Sticky Sidebar: Fast Nav + Document Directory */}
                <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                  {/* On-Page Navigation */}
                  <div className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg sticky top-36 flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-md rounded-t-xl">
                      <span className="font-title-md text-title-md text-on-surface">
                        Sections Index
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-mono">
                        01 — 09
                      </span>
                    </div>
                    <nav className="flex flex-col gap-1 font-body-md text-body-md text-on-surface-variant">
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-scope">
                        <span className="group-hover:translate-x-1 transition-transform">
                          {"01. Scope & Dual Agreements"}
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-acceptable-use">
                        <span className="group-hover:translate-x-1 transition-transform">
                          02. Acceptable Use Policy
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-ip">
                        <span className="group-hover:translate-x-1 transition-transform">
                          03. Intellectual Property Rights
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-crypto-evidentiary">
                        <span className="group-hover:translate-x-1 transition-transform">
                          04. Cryptographic Standing
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-warranties">
                        <span className="group-hover:translate-x-1 transition-transform">
                          {"05. Warranties & SLAs"}
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-liability">
                        <span className="group-hover:translate-x-1 transition-transform">
                          06. Limitation of Liability
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-disputes">
                        <span className="group-hover:translate-x-1 transition-transform">
                          {"07. Dispute Resolution & NCIA"}
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-modifications">
                        <span className="group-hover:translate-x-1 transition-transform">
                          {"08. Modifications & Notices"}
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                      <a className="py-1.5 px-2 rounded-lg hover:bg-surface-container-low hover:text-primary transition-all flex items-center justify-between group" href="#sec-inquiries">
                        <span className="group-hover:translate-x-1 transition-transform">
                          09. Legal Directorate Inquiries
                        </span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-secondary">
                          arrow_right
                        </span>
                      </a>
                    </nav>
                    <div className="pt-space-md flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Download Signed Canonical Text
                      </span>
                      <div className="flex items-center gap-2">
                        <button className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors font-label-md text-label-md font-semibold">
                          <span className="material-symbols-outlined text-[18px]">
                            picture_as_pdf
                          </span>
                          <span>
                            PDF Format
                          </span>
                        </button>
                        <button className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors font-label-md text-label-md font-semibold">
                          <span className="material-symbols-outlined text-[18px]">
                            verified
                          </span>
                          <span>
                            PKI Signed
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Legal Documents Directory Card */}
                  <div className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg flex flex-col gap-space-md">
                    <div className="flex items-center gap-2 pb-space-xs text-primary">
                      <span className="material-symbols-outlined">
                        folder_managed
                      </span>
                      <h2 className="font-title-md text-title-md">
                        Legal Documents Directory
                      </h2>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Cross-referenced governance instruments published in the official RCFI Trust Repository: "}
                    </p>
                    <ul className="flex flex-col gap-space-sm text-body-md font-body-md">
                      <li className="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                          policy
                        </span>
                        <div className="flex flex-col">
                          <Link className="font-semibold text-primary hover:text-secondary" data-path="privacy-policy" href="/privacy/">
                            {"Privacy & Data Protection Framework"}
                          </Link>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            Kenya DPA 2019 Certified ODPC Compliant
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                          account_tree
                        </span>
                        <div className="flex flex-col">
                          <Link className="font-semibold text-primary hover:text-secondary" data-path="ca-repository" href="/trust/">
                            {"Root CPS & CP Repository"}
                          </Link>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            RFC 3647 Compliant Certificate Practice Statement
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                          badge
                        </span>
                        <div className="flex flex-col">
                          <Link className="font-semibold text-primary hover:text-secondary" data-path="trust-center" href="/trust/">
                            CAK License Charter (TL/E-CSP 00014)
                          </Link>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            Official Electronic Certification Provider Gazette
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                          speed
                        </span>
                        <div className="flex flex-col">
                          <Link className="font-semibold text-primary hover:text-secondary" data-path="trust-center" href="/terms/">
                            Enterprise SLA Commitment
                          </Link>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            {"99.95% Availability for OCSP, CRL & Timestamps"}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                          contract
                        </span>
                        <div className="flex flex-col">
                          <Link className="font-semibold text-primary hover:text-secondary" data-path="trust-center" href="/trust/">
                            Relying Party Agreement (RPA)
                          </Link>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            Statutory conditions for relying on digital seals
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Cryptographic Validation Quick Stamp */}
                  <div className="bg-primary text-on-primary rounded-xl p-space-lg flex flex-col gap-space-sm shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container">
                        fingerprint
                      </span>
                      <span className="font-title-md text-title-md">
                        Document Integrity Hash
                      </span>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-primary-container">
                      {" SHA-256 Digest of canonical legal terms on file with the Communications Authority of Kenya: "}
                    </p>
                    <div className="bg-tertiary-container p-2 rounded text-[11px] font-mono break-all text-secondary-fixed">
                      {" 8f6b0f19c3b879ef726a45b14f85e3c79a94121bf3456b820cd2119934e6a0d2 "}
                    </div>
                    <span className="font-label-sm text-[10px] text-on-primary-container flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        history_edu
                      </span>
                      {" Timestamped: 2026-01-01T00:00:00+03:00 (Nairobi Root TSA) "}
                    </span>
                  </div>
                </aside>
                {/* Right Column: Structured Legal Clauses */}
                <article className="lg:col-span-8 flex flex-col gap-space-xl">
                  {/* Section 01: Scope & Agreement */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-scope">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        01
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Scope of Service & Dual Agreements"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"1. Institutional Scope & Master Agreement Architecture"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        {" These Terms of Service (“Terms”) constitute a legally binding contractual agreement between the user, institution, or relying organization (“User,” “Subscriber,” or “You”) and "}
                        <strong>
                          Reprodrive Center for Innovation Limited
                        </strong>
                        {" (“RCFI Technology,” “RCFI,” “we,” “us,” or “our”), a sovereign digital trust infrastructure corporation incorporated under the Companies Act of Kenya and licensed by the Communications Authority of Kenya (CAK). "}
                      </p>
                      {/* Delineation Callout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                        <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              public
                            </span>
                            <strong className="font-title-md text-title-md">
                              A. Public Informational Tier
                            </strong>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Applies universally to visitors browsing "}
                            <code>
                              rcfi.co.ke
                            </code>
                            {", accessing technical documentation, evaluating public APIs, and utilizing document integrity hash verification forms. "}
                          </p>
                        </div>
                        <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-[20px]">
                              shield_lock
                            </span>
                            <strong className="font-title-md text-title-md">
                              {"B. Licensed Trust & Platform Tier"}
                            </strong>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Applies to authenticated access to "}
                            <strong>
                              CertySign
                            </strong>
                            {", "}
                            <strong>
                              Elano Identity Ledger
                            </strong>
                            {", "}
                            <strong>
                              Prezio Audit Gateway
                            </strong>
                            {", Root OCSP/CRL endpoints, and FHIR interoperability pipelines. "}
                          </p>
                        </div>
                      </div>
                      <div className="bg-surface-container-high/40 p-space-md rounded-lg">
                        <strong className="text-primary font-semibold">
                          1.2 Incorporation by Reference:
                        </strong>
                        <p className="font-body-md text-body-md mt-1">
                          {" If you deploy or interact with CertySign or qualified cryptographic certificates, your actions are concurrently bound by the "}
                          <strong>
                            CertySign Subscriber Agreement
                          </strong>
                          {", the "}
                          <strong>
                            Relying Party Agreement
                          </strong>
                          {", and the "}
                          <strong>
                            RCFI Certification Practice Statement (CPS)
                          </strong>
                          {" published at "}
                          <Link className="text-secondary font-semibold hover:underline" data-path="ca-repository" href="/trust/">
                            /trust-center/repository/
                          </Link>
                          {". In any conflict regarding cryptographic liability or certificate validity, the Root CPS shall strictly prevail. "}
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Section 02: Acceptable Use Policy */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-acceptable-use">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        02
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Compliance & Operational Conduct"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          2. Statutory Acceptable Use Policy (AUP)
                        </h2>
                      </div>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      {" RCFI manages critical national information infrastructure. All access to our systems, public endpoints, and APIs must conform strictly with Kenya’s Computer Misuse and Cybercrimes Act (No. 5 of 2018) and the Data Protection Act (2019). "}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
                      {/* Prohibited Activities */}
                      <div className="bg-error-container/20 rounded-xl p-space-md flex flex-col gap-space-sm">
                        <div className="flex items-center gap-2 text-error">
                          <span className="material-symbols-outlined">
                            block
                          </span>
                          <h3 className="font-title-md text-title-md font-bold">
                            Strictly Prohibited Actions
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Reverse Engineering:
                              </strong>
                              {" Decompiling, disassembling, or analyzing cryptographic firmware and HSM integration libraries."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Enclave Probing:
                              </strong>
                              {" Unauthorized vulnerability scanning, penetration testing, or fuzzing of sovereign root endpoints without written CAK clearance."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Payload Injection:
                              </strong>
                              {" Submitting malicious, corrupted, or non-schema FHIR JSON bundles into our health security validation engines."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Impersonation:
                              </strong>
                              {" Presenting forged credentials or asserting revoked digital identities within public verification interfaces."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                {"DDoS & Rate Circumvention:"}
                              </strong>
                              {" Automating queries against OCSP or CRL responders beyond stipulated statutory consumption thresholds."}
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* Authorized Activities */}
                      <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
                        <div className="flex items-center gap-2 text-secondary">
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                          <h3 className="font-title-md text-title-md font-bold">
                            Permitted Institutional Uses
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
                          <li className="flex items-start gap-2">
                            <span className="text-secondary font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Real-time Document Verification:
                              </strong>
                              {" Validating digital signatures, timestamps, and certificate status via public verification interfaces."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Sandboxed Integration:
                              </strong>
                              {" Testing REST/gRPC endpoints using designated staging credentials and non-production health records."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Institutional RFQ Submissions:
                              </strong>
                              {" Furnishing authentic procurement requests for sovereign cybersecurity architectures."}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary font-bold">
                              •
                            </span>
                            <span>
                              <strong>
                                Certificate Validation:
                              </strong>
                              {" Relying on published CRLs and OCSP responses in accordance with the Relying Party Agreement."}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  {/* Section 03: Intellectual Property */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-ip">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        03
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Proprietary Rights & Open Standards"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"3. Intellectual Property & Standard Declarations"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        <strong>
                          3.1 Proprietary Assets:
                        </strong>
                        {" All proprietary software architectures, UI components, cryptographic connectors, Elano MEARL frameworks, Prezio audit automation engines, algorithms, graphical assets, and registered trademarks (“RCFI,” “CertySign,” “Elano,” “Prezio”) are the exclusive intellectual property of "}
                        <strong>
                          Reprodrive Center for Innovation Limited
                        </strong>
                        {" and protected under the Copyright Act (Cap 130 of Kenya) and international conventions. "}
                      </p>
                      <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <span className="material-symbols-outlined text-[18px]">
                            hub
                          </span>
                          <span>
                            {"3.2 Open Standards & Interoperability Notice"}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md">
                          {" RCFI platforms incorporate and interface with recognized global open protocols including "}
                          <strong>
                            HL7® FHIR® (Release 4.0.1)
                          </strong>
                          {", "}
                          <strong>
                            OpenHIE architecture
                          </strong>
                          {", and "}
                          <strong>
                            OpenMRS
                          </strong>
                          {" specifications. These open-source components are deployed under their respective Apache 2.0 or MPL licenses. Such usage does not convey rights to RCFI’s proprietary middleware, cryptographic wrappers, or hardware security abstraction software. "}
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Section 04: Cryptographic Non-Repudiation */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-crypto-evidentiary">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        04
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          Statutory Evidentiary Admissibility
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"4. Cryptographic Non-Repudiation & Legal Validity"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        {" RCFI operates as an authorized Electronic Certification Service Provider (TL/E-CSP 00014) in direct compliance with the Kenya Information and Communications Act (KICA, Cap 411A). "}
                      </p>
                      {/* Infographic Feature: Legal Pillars */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <span className="font-label-sm text-secondary font-bold">
                            KICA SECTION 83C
                          </span>
                          <h4 className="font-title-md text-title-md text-primary">
                            Qualified Signatures
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Certificates issued under the RCFI Root CA meet the definition of Advanced Electronic Signatures, possessing parity with handwritten signatures. "}
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <span className="font-label-sm text-secondary font-bold">
                            EVIDENCE ACT 106B
                          </span>
                          <h4 className="font-title-md text-title-md text-primary">
                            Evidentiary Infallibility
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Digitally signed electronic records generated via RCFI platforms are admissible as primary electronic evidence in Kenyan Courts of Law without additional oral corroboration. "}
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <span className="font-label-sm text-secondary font-bold">
                            RFC 3161 STANDING
                          </span>
                          <h4 className="font-title-md text-title-md text-primary">
                            Non-Repudiation
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Cryptographic timestamps anchored to the National Root establish indisputable verification of message presence prior to the stated moment. "}
                          </p>
                        </div>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Subscribers and Relying Parties unconditionally agree not to challenge the legal effect, validity, or admissibility of any document, seal, or transaction solely because it is in digital format or authenticated via RCFI PKI credentials. "}
                      </p>
                    </div>
                  </section>
                  {/* Section 05: Warranties & Disclaimers */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-warranties">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        05
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Service Guarantees & Standards"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"5. Service Commitments, Warranties & Disclaimers"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        <strong>
                          5.1 Enterprise SLA Benchmark:
                        </strong>
                        {" RCFI warrants that our licensed Root CA infrastructure, Certificate Revocation Lists (CRL), and Online Certificate Status Protocol (OCSP) responder services shall maintain a service availability of "}
                        <strong>
                          99.95%
                        </strong>
                        {", excluding scheduled maintenance announced at least 72 hours in advance. "}
                      </p>
                      {/* SLA Visual Indicator */}
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
                        <div className="flex items-center gap-space-md">
                          <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-title-md">
                            {" 99.95% "}
                          </div>
                          <div>
                            <span className="font-title-md text-title-md text-primary block">
                              Root PKI Operational Uptime
                            </span>
                            <span className="font-body-md text-body-md text-on-surface-variant">
                              Audited quarterly by CAK-accredited compliance inspectors.
                            </span>
                          </div>
                        </div>
                        <span className="bg-surface-container-high text-primary font-mono text-label-sm px-3 py-1 rounded font-semibold">
                          {" STATUS: OPERATIONAL "}
                        </span>
                      </div>
                      <p>
                        <strong>
                          5.2 Public Web Portal Disclaimer:
                        </strong>
                        {" Materials published on "}
                        <code>
                          rcfi.co.ke
                        </code>
                        {" are provided on an “as is” and “as available” basis for institutional orientation. While RCFI exercises diligent institutional care, we do not warrant that unrestricted informational pages will be uninterrupted or error-free. "}
                      </p>
                    </div>
                  </section>
                  {/* Section 06: Limitation of Liability */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-liability">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        06
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Enterprise Risk & Indemnity Caps"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"6. Limitation of Liability & Relying Party Protection"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        <strong>
                          6.1 Enterprise Software Operations:
                        </strong>
                        {" To the maximum extent permitted by applicable Kenya law, neither RCFI nor its directors, engineers, or affiliates shall be liable for indirect, incidental, punitive, or consequential damages, loss of institutional profits, or business interruption arising out of website usage or API experimentation. "}
                      </p>
                      <div className="bg-tertiary-container/10 p-space-md rounded-lg flex flex-col gap-2">
                        <span className="font-title-md text-title-md text-primary">
                          6.2 Statutory PKI Liability Caps:
                        </span>
                        <p className="font-body-md text-body-md">
                          {" Liability arising out of erroneous issuance, certificate mis-statement, or revocation failure is strictly governed and capped by the statutory reliance limits set out in Section 9 of the "}
                          <strong>
                            RCFI Certificate Policy (CP)
                          </strong>
                          {" filed with the Communications Authority of Kenya. Relying Parties must verify certificate revocation status via our OCSP responder prior to executing high-value commercial transactions. "}
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Section 07: Governing Law & Dispute Resolution */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-disputes">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        07
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"Jurisdiction & Arbitral Framework"}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"7. Governing Law & Dispute Resolution Procedure"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        {" These Terms shall be interpreted, construed, and enforced in all respects exclusively in accordance with the "}
                        <strong>
                          Laws of the Republic of Kenya
                        </strong>
                        {", without giving effect to conflicts of law principles. "}
                      </p>
                      {/* Dispute Steps Graphic */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-secondary font-bold">
                              STAGE I
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[20px]">
                              handshake
                            </span>
                          </div>
                          <h4 className="font-title-md text-title-md text-primary">
                            Executive Negotiation
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Mandatory 30-day period of formal executive discussions between senior legal counsels. "}
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-secondary font-bold">
                              STAGE II
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[20px]">
                              balance
                            </span>
                          </div>
                          <h4 className="font-title-md text-title-md text-primary">
                            NCIA Arbitration
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Arbitration administered by the "}
                            <strong>
                              Nairobi Centre for International Arbitration
                            </strong>
                            {" by one arbitrator in Nairobi. "}
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-secondary font-bold">
                              STAGE III
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[20px]">
                              account_balance
                            </span>
                          </div>
                          <h4 className="font-title-md text-title-md text-primary">
                            Judicial Recourse
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {" Non-exclusive jurisdiction of the "}
                            <strong>
                              {"High Court of Kenya (Commercial & Tax Division)"}
                            </strong>
                            {" for arbitral enforcement. "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Section 08: Modifications */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-modifications">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        08
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          Institutional Amendments
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"8. Modifications & Governance Notifications"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        {" RCFI reserves the right to amend these Terms to reflect legislative updates, amendments to the KICA regulatory framework, or security baseline advancements. "}
                      </p>
                      <ul className="flex flex-col gap-2 font-body-md text-body-md">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">
                            •
                          </span>
                          <span>
                            <strong>
                              Non-Material Updates:
                            </strong>
                            {" Published directly to our Trust Center repository with a minimum of 14 days notice before taking operational effect."}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">
                            •
                          </span>
                          <span>
                            <strong>
                              {"Material & PKI Policy Adjustments:"}
                            </strong>
                            {" Notified directly to active platform subscribers and enterprise administrators via designated security contacts."}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                  {/* Section 09: Contact & Legal Inquiries */}
                  <section className="bg-surface-container-lowest shadow-sm rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-md" id="sec-inquiries">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-surface-container-low text-secondary font-bold flex items-center justify-center font-label-md text-label-md shrink-0">
                        09
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          Official Communications
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-primary">
                          {"9. Contact & Legal Directorate Inquiries"}
                        </h2>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-space-md leading-relaxed">
                      <p>
                        {" Formal notices, subpoena deliveries, compliance audit requests, or questions regarding these Terms must be addressed to: "}
                      </p>
                      {/* Institutional Address Card */}
                      <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row justify-between gap-space-lg">
                        <div className="flex flex-col gap-2">
                          <strong className="font-title-md text-title-md text-primary">
                            {"Legal & Regulatory Affairs Directorate"}
                          </strong>
                          <span className="text-body-md text-on-surface">
                            Reprodrive Center for Innovation Limited
                          </span>
                          <div className="flex items-center gap-2 text-body-md text-on-surface-variant mt-1">
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                            <span>
                              5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                            <span className="material-symbols-outlined text-[18px]">
                              mail
                            </span>
                            <a className="text-secondary font-semibold hover:underline" href="mailto:legal@rcfi.co.ke">
                              legal@rcfi.co.ke
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                            <span className="material-symbols-outlined text-[18px]">
                              call
                            </span>
                            <span>
                              +254 (0) 20 283 9200
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-start md:items-end gap-2 shrink-0">
                          <Link className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-title-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm" data-path="trust-center" href="/contact/">
                            <span className="material-symbols-outlined text-[18px]">
                              support_agent
                            </span>
                            <span>
                              Submit Legal Inquiry
                            </span>
                          </Link>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Response window: 2 business days
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </main>
          {/* Institutional Assurance Micro-Footer */}
          <section className="w-full bg-surface-container-low text-on-surface-variant py-space-md">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col sm:flex-row items-center justify-between gap-space-sm text-label-sm font-label-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  verified
                </span>
                <span>
                  Registered with the Communications Authority of Kenya as a Qualified Electronic Certification Service Provider.
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <Link className="text-primary hover:text-secondary font-semibold" data-path="ca-repository" href="/trust/">
                  CA Repository
                </Link>
                <span>
                  •
                </span>
                <Link className="text-primary hover:text-secondary font-semibold" data-path="privacy-policy" href="/privacy/">
                  Data Protection
                </Link>
                <span>
                  •
                </span>
                <Link className="text-primary hover:text-secondary font-semibold" data-path="trust-center" href="/trust/">
                  Security Certifications
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-sovereign-navy text-on-surface-variant">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
            <div className="lg:col-span-1 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <img alt="RCFI Sovereign Digital Trust Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-sovereign-mark.svg" />
                <span className="font-headline-sm text-headline-sm font-bold text-text-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted">
                Research Center for Digital Innovation. Kenya's sovereign root anchor and electronic certification service provider.
              </p>
              <div className="flex flex-col gap-1 text-xs font-label-code text-text-muted mt-space-sm">
                <span className="text-primary">
                  CAK License: TL/E-CSP 00014
                </span>
                <span>
                  ISO/IEC 27001:2022 Certified
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-pki" href="/services/digital-trust-pki/">
                    {"PKI & Sovereign Identity"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    Enterprise Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-digital-health" href="/services/digital-health-governance/">
                    Digital Health Architecture
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-ai-data" href="/services/data-analytics-ai/">
                    {"AI & Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-cloud" href="/services/digital-cloud-engineering/">
                    {"Cloud & Sovereign Infra"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                Sovereign Products
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-certysign" href="/products/certysign/">
                    {"CertySign (eIDAS & CAK)"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-elano" href="/products/elano/">
                    Elano Identity Ledger
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-prezio" href="/products/prezio/">
                    Prezio Audit Gateway
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="ca-repository" href="/trust/">
                    {"National Root CRL & OCSP"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Academy & Programs"}
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/executive-briefings/">
                    Executive Cyber Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy-fellowship" href="/academy/">
                    Digital Innovation Fellowship
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy-certifications" href="/academy/digital-trust-cyber/">
                    Applied Cryptography Certs
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="research-publications" href="/insights/">
                    Technical Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Trust Center & HQ"}
              </span>
              <div className="font-body-sm text-body-sm flex flex-col gap-1 text-text-muted mb-space-sm">
                <span className="font-semibold text-on-surface">
                  RCFI Kenya HQ
                </span>
                <span>
                  Hifadhi House, 5th Floor
                </span>
                <span>
                  ICD Road, Nairobi, Kenya
                </span>
                <span>
                  contact@rcfi.go.ke
                </span>
              </div>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="trust-center" href="/trust/">
                    {"Compliance & Accreditations"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="verify-document" href="/verify/">
                    Real-time Signature Verifier
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="privacy-policy" href="/privacy/">
                    Data Protection Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-2xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-xs font-label-code text-text-muted">
            <p>
              © 2025 Research Center for Digital Innovation (RCFI Kenya). All Sovereign Rights Reserved.
            </p>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Framework
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="terms" href="/terms/">
                CPS Terms
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="ca-repository" href="/trust/">
                Root CA Certificate
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
