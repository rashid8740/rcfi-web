import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/academy-executive-briefings/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Executive Briefings | RCFI Academy" };

export default function AcademyExecutiveBriefingsPage() {
  return (
    <div className="rcfi-academy-executive-briefings" style={{ display: "contents" }}>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-primary text-on-primary border-b border-primary-container/40">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
              <span className="text-primary-container font-bold">
                •
              </span>
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="hidden lg:inline text-primary-container font-bold">
                •
              </span>
              <div className="hidden lg:flex items-center gap-space-xs bg-primary-container/60 px-space-sm py-0.5 rounded border border-secondary/30">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-surface-bright font-label-sm text-label-sm">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-primary-container font-bold">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <header className="w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <Link className="flex items-center gap-space-sm group" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
                <div className="hidden sm:flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-none text-primary tracking-tight font-bold">
                    RCFI
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase text-[10px] leading-tight">
                    Center for Innovation
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-space-md h-full" data-active-classes="text-primary font-title-md border-b-2 border-secondary font-semibold">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="products" href="/products/certysign/">
                Products
              </Link>
              <Link aria-current="page" className="transition-colors py-space-sm flex items-center gap-1 text-primary font-title-md border-b-2 border-secondary font-semibold" data-path="academy" href="/academy/">
                Academy
              </Link>
              <PartnersNavMenu className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" />
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="insights" href="/insights/">
                Insights
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="company" href="/about/">
                Company
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm sm:gap-space-md">
              <Link className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low border border-secondary/30 text-secondary hover:bg-secondary-container/20 font-label-md text-label-md transition-colors" data-path="verify-document" href="/verify/">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Verify Document
              </Link>
              <a className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-sm transition-all" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="w-full pt-[120px] bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMBS & CONTEXT BAR */}
          <section className="w-full bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                  Home
                </Link>
                <span className="text-outline-variant font-bold">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <span className="text-outline-variant font-bold">
                  /
                </span>
                <span className="text-primary font-semibold">
                  Executive Briefings
                </span>
              </nav>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary bg-surface-container px-space-sm py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                <span className="font-semibold uppercase tracking-wide">
                  Q2/Q3 2026 Executive Bookings Active
                </span>
              </div>
            </div>
          </section>
          {/* SPLIT DARK HERO SECTION */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl">
            {/* Atmospheric Ambient Vectors */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 -top-20 w-80 h-80 rounded-full bg-primary-container/40 blur-2xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left Hero Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-secondary-fixed tracking-wider font-bold">
                      {"// ACADEMY PROGRAMME 05 // C-SUITE & BOARD GOVERNANCE"}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-surface-bright tracking-tight">
                    {" Executive Briefings & Masterclasses "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                    {" Half a day. Full clarity for boards, accounting officers, and C-level executives. Navigate personal statutory liability under the Kenya Data Protection Act, sovereign PKI mandates, and emerging AI risk frameworks without academic abstraction. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-title-md text-title-md hover:bg-secondary-fixed-dim transition-all shadow-md" href="#booking-workspace">
                      {" Request Private Executive Cohort "}
                    </a>
                    <Link className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container/80 text-surface-bright font-title-md text-title-md hover:bg-primary-container transition-all" data-path="download-prospectus" href="/academy/executive-briefings/">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                      <span>
                        Executive Prospectus (PDF)
                      </span>
                    </Link>
                  </div>
                  {/* Trust / Accreditation Tags */}
                  <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-tertiary-container/60 text-tertiary-fixed font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        verified_user
                      </span>
                      <span>
                        Chatham House Rule
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-tertiary-container/60 text-tertiary-fixed font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        gavel
                      </span>
                      <span>
                        ODPC Statutory Alignment
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-tertiary-container/60 text-tertiary-fixed font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        policy
                      </span>
                      <span>
                        CAK ECSP Insight
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-tertiary-container/60 text-tertiary-fixed font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        school
                      </span>
                      <span>
                        Board CPD Accredited (6 Hours)
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Side Module: Risk & Statutory Card */}
                <div className="lg:col-span-5">
                  <div className="bg-surface-container-lowest text-on-surface rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary-fixed" />
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-primary">
                        // STATUTORY RISK MATRIX
                      </span>
                      <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                        Director Risk
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      Executive Statutory Exposure Index
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Real regulatory impact thresholds governing Kenyan boardrooms in 2026:
                    </p>
                    <div className="space-y-space-sm">
                      {/* Item 1 */}
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-error text-[24px] mt-0.5">
                          warning
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-title-md text-title-md text-on-surface">
                              Data Protection Act 2019
                            </span>
                            <span className="font-label-sm text-label-sm text-error font-bold">
                              KES 5,000,000 / 1% T/O
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Section 31 mandatory DPIA failures attach direct personal accountability to Accounting Officers and Named Board Trustees.
                          </p>
                        </div>
                      </div>
                      {/* Item 2 */}
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                          enhanced_encryption
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-title-md text-title-md text-on-surface">
                              KICA Section 83C Mandates
                            </span>
                            <span className="font-label-sm text-label-sm text-secondary font-bold">
                              Unenforceable Contracts
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            High-value commercial transactions signed without licensed ECSP cryptographic sealing risk evidentiary dismissal in court.
                          </p>
                        </div>
                      </div>
                      {/* Item 3 */}
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-primary-container text-[24px] mt-0.5">
                          clinical_notes
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-title-md text-title-md text-on-surface">
                              Digital Health Act 2023
                            </span>
                            <span className="font-label-sm text-label-sm text-primary font-bold">
                              Criminal Fines
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Non-compliant offshore hosting of sensitive biometric or health telemetry triggers strict administrative sanctions.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Stat strip */}
                    <div className="mt-space-md pt-space-sm bg-surface-container rounded-lg p-space-sm flex items-center justify-around text-center">
                      <div>
                        <span className="block font-headline-sm text-headline-sm text-primary font-bold">
                          100%
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Statutory Coverage
                        </span>
                      </div>
                      <div className="w-px h-8 bg-outline-variant" />
                      <div>
                        <span className="block font-headline-sm text-headline-sm text-secondary font-bold">
                          4.5h
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Executive Immersion
                        </span>
                      </div>
                      <div className="w-px h-8 bg-outline-variant" />
                      <div>
                        <span className="block font-headline-sm text-headline-sm text-primary font-bold">
                          Level 1
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Sovereign Protocol
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* QUICK STATS RHYTHM BAR */}
          <section className="w-full bg-surface-container-low py-space-md shadow-sm">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">
                      timer
                    </span>
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      0.5 Days Intensive
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Compact C-Suite Format
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">
                      lock
                    </span>
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Closed-Door Sessions
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Chatham House Non-Disclosure
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">
                      workspace_premium
                    </span>
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Board Exclusivity
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Strict Peer Cohorts
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">
                      tune
                    </span>
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Custom Syllabus
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Mapped to Institutional Sector
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION: THE FOUR CORE EXECUTIVE BRIEFING MODULES */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                    // CORE CURRICULUM // PATHWAYS METHODOLOGY
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                    {" Four Focused Executive Modules "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">
                    {" Precision executive content engineered for swift consensus, policy modernization, and quantifiable board risk mitigations. "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Accredited by:
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm font-semibold text-primary">
                    RCFI Governance Advisory Council
                  </span>
                </div>
              </div>
              {/* 4 Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {/* Module 01 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      {" 01 "}
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-space-sm py-1 rounded-full bg-surface-container-highest text-primary">
                      {" Legal Liability "}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    {" Kenya Data Protection Act (2019) & Personal Board Liability "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    {" An uncompromising examination of statutory officer exposure under Sections 29, 31, and 48 of the Act, translating legal jargon into explicit governance controls. "}
                  </p>
                  <ul className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-md">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Officer criminalization precedents and regulatory summons protocols
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Cross-border data transfer approval frameworks under ODPC Section 48
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Auditing high-risk automated decision-making and mandatory DPIA triggers
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-sm bg-surface-container-lowest rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Executive Takeaway:
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      {"Board Audit Checklist & Penalty Shield Matrix"}
                    </span>
                  </div>
                </div>
                {/* Module 02 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      {" 02 "}
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-space-sm py-1 rounded-full bg-surface-container-highest text-primary">
                      {" Cryptographic Trust "}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    {" Digital Trust, PKI & Legal Evidentiary Standing "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    {" Demystifying Qualified Electronic Signatures (QES), national Root CA trust architectures, and statutory evidentiary standing under KICA Section 83C. "}
                  </p>
                  <ul className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-md">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Why standard scan/paste signatures fail in high-stakes Commercial Court trials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        {"CAK Licensed ECSP non-repudiation mandates for enterprise treasury & M&A"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Countering AI-driven synthetic identity and CEO impersonation wire-fraud
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-sm bg-surface-container-lowest rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Executive Takeaway:
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      Enterprise Digital Execution Policy Template
                    </span>
                  </div>
                </div>
                {/* Module 03 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      {" 03 "}
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-space-sm py-1 rounded-full bg-surface-container-highest text-primary">
                      {" AI Risk & Ethics "}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    {" Sovereign AI Governance & Boardroom Risk "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    {" Boardroom oversight for LLM deployments, institutional IP leakage, algorithmic bias in credit scoring/hiring, and alignment with ISO/IEC 42001. "}
                  </p>
                  <ul className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-md">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Fiduciary accountability when automated models produce halluncinated outputs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Preventing proprietary corporate data ingestion into public cloud foundation models
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Implementing the ISO/IEC 42001 AI Management System (AIMS) at board level
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-sm bg-surface-container-lowest rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Executive Takeaway:
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      Responsible AI Governance Charter for C-Suite
                    </span>
                  </div>
                </div>
                {/* Module 04 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      {" 04 "}
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-space-sm py-1 rounded-full bg-surface-container-highest text-primary">
                      {" Clinical Sovereignty "}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    {" Digital Health Act 2023 & Clinical Data Sovereignty "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    {" Mandatory governance for hospitals, health insurers, medical parastatals, and healthtech platforms transitioning to the integrated health information system. "}
                  </p>
                  <ul className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-md">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        National Health Data Exchange requirements and FHIR/HL7 interoperability rules
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Strict criminal liability for unauthorized export of patient clinical registries
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span>
                        Digital Health Agency (DHA) audit readiness and enterprise compliance matrices
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-sm bg-surface-container-lowest rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Executive Takeaway:
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      Health Executive Statutory Readiness Audit Map
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION: DELIVERY FORMATS & IMMERSION OPTIONS */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  // BESPOKE FORMAT ARCHITECTURE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                  {" Engineered for Executive Schedules "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  {" Choose from three discreet engagement structures designed for boards of directors, executive committees, and senior technical legal counsel. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* Format 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        groups
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider">
                      Private Engagements
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-space-xs">
                      Private Board Retreats
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Delivered exclusively for your single board or executive committee during strategy sessions, offsites, or quarterly risk summits. "}
                    </p>
                    <div className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Fully confidential internal discussions
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Institution-specific risk audits
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          In-person in Nairobi or client location
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-colors" href="#booking-workspace">
                    {" Book Board Retreat "}
                  </a>
                </div>
                {/* Format 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative flex flex-col justify-between">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase">
                    {" Most Popular "}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        hub
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider">
                      Peer Exchange
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-space-xs">
                      Multi-Enterprise Cohort
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" High-caliber cross-industry cohorts uniting non-competing CEOs, CISOs, and Chief Legal Officers from Tier-1 banking, telco, and healthcare. "}
                    </p>
                    <div className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Strict cap of 12 enterprise leaders
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Cross-sector peer benchmarking
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Quarterly scheduled intakes
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-secondary text-on-secondary font-title-md text-title-md hover:bg-primary transition-colors" href="#booking-workspace">
                    {" Join Next Cohort "}
                  </a>
                </div>
                {/* Format 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        account_balance
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider">
                      Regulatory Focus
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-space-xs">
                      Sovereign Deep-Dive
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Direct, high-impact clinical interaction with technical compliance engineers, cryptographic architects, and statutory specialists. "}
                    </p>
                    <div className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Interactive sandbox demonstration
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          ODPC/CAK audit defense simulation
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          done
                        </span>
                        <span>
                          Focus on critical national infrastructure
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-colors" href="#booking-workspace">
                    {" Request Deep-Dive "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION: SECTORS & VERIFIED EXECUTIVE CREDIBILITY */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                    // PARTICIPANT SECTOR IMPACT
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                    {" Trusted by Africa's Essential Institutions "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" From the Nairobi Digital Health Lab and Tier-1 commercial banks to state regulatory authorities, our briefings empower decision-makers who oversee critical socio-economic infrastructure. "}
                  </p>
                  <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        account_balance
                      </span>
                      <span className="font-title-md text-title-md text-primary">
                        Tier-1 Commercial Banks
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        cell_tower
                      </span>
                      <span className="font-title-md text-title-md text-primary">
                        {"Telcos & ISP Networks"}
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        local_hospital
                      </span>
                      <span className="font-title-md text-title-md text-primary">
                        Healthcare Networks
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        assured_workload
                      </span>
                      <span className="font-title-md text-title-md text-primary">
                        State Parastatals
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative bg-surface-container-low rounded-2xl p-space-xl overflow-hidden shadow-sm">
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-secondary-container/20 blur-xl" />
                    <div className="flex items-center gap-2 mb-space-md">
                      <div className="flex text-secondary-fixed">
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          star
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                        Executive Review
                      </span>
                    </div>
                    <blockquote className="font-title-md text-title-md text-on-surface leading-relaxed italic mb-space-lg">
                      {" “RCFI brought unparalleled clarity to our board regarding our statutory personal liabilities under the Kenya Data Protection Act and KICA. The session removed the technical obfuscation and gave our audit and risk committees actionable governance metrics that we executed within 14 days.” "}
                    </blockquote>
                    <div className="flex items-center gap-space-md pt-space-sm">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold font-title-md text-title-md">
                        {" JK "}
                      </div>
                      <div>
                        <div className="font-title-md text-title-md text-primary font-bold">
                          Independent Non-Executive Director
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Regional Financial Services Conglomerate, Nairobi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION: EXECUTIVE ENGAGEMENT & BOOKING REQUEST WORKSPACE */}
          <section className="w-full bg-surface-container-low py-space-xl" id="booking-workspace">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Info Column */}
                  <div className="lg:col-span-5 bg-primary text-on-primary p-space-xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary-container blur-2xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary-fixed tracking-wider">
                        // BESPOKE CONCIERGE SCHEDULING
                      </span>
                      <h2 className="font-headline-md text-headline-md text-surface-bright tracking-tight">
                        {" Request a Private Executive Session "}
                      </h2>
                      <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                        {" Our Executive Academic Directorate will structure a bespoke briefing tailored to your institution's specific regulatory and operational context within 24 hours. "}
                      </p>
                      <div className="space-y-space-md pt-space-sm">
                        <div className="flex items-start gap-space-sm">
                          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0 mt-1">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              mail
                            </span>
                          </div>
                          <div>
                            <span className="block font-label-sm text-label-sm text-on-primary-container">
                              Direct Executive Secretariat
                            </span>
                            <a className="font-title-md text-title-md text-surface-bright hover:text-secondary-fixed transition-colors" href="mailto:executive@rcfi.co.ke">
                              executive@rcfi.co.ke
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-space-sm">
                          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0 mt-1">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              phone
                            </span>
                          </div>
                          <div>
                            <span className="block font-label-sm text-label-sm text-on-primary-container">
                              Direct Concierge Line
                            </span>
                            <a className="font-title-md text-title-md text-surface-bright hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                              +254 (0) 20 283 9200
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-space-sm">
                          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0 mt-1">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              location_on
                            </span>
                          </div>
                          <div>
                            <span className="block font-label-sm text-label-sm text-on-primary-container">
                              Executive Briefing Suites
                            </span>
                            <span className="font-body-md text-body-md text-surface-bright">
                              5th Floor, Hifadhi House, ICD Road, Nairobi
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 pt-space-xl">
                      <div className="p-space-sm bg-primary-container/70 rounded-lg flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          security
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary-fixed">
                          Strict non-disclosure agreements executed prior to any briefing customization.
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Right Interactive Form Column */}
                  <div className="lg:col-span-7 p-space-xl flex flex-col justify-center">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      Executive Engagement Request
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                      Submit your board or committee requirements to initiate curriculum design.
                    </p>
                    <form className="space-y-space-md" id="executive-booking-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('booking-success').classList.remove('hidden'); this.classList.add('hidden');">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-name">
                            Executive Full Name *
                          </label>
                          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-name" placeholder="e.g. Dr. Jane Mutua" required type="text" />
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-title">
                            Designation / Title *
                          </label>
                          <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-title" required defaultValue="">
                            <option disabled value="">
                              Select Designation
                            </option>
                            <option value="board-chair">
                              Board Chairman / Trustee
                            </option>
                            <option value="board-member">
                              Non-Executive Director
                            </option>
                            <option value="ceo">
                              Managing Director / CEO
                            </option>
                            <option value="ciso">
                              Chief Information Security Officer (CISO)
                            </option>
                            <option value="counsel">
                              General Counsel / Head of Legal
                            </option>
                            <option value="risk">
                              Chief Risk Officer (CRO)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-org">
                            Organization / Enterprise *
                          </label>
                          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-org" placeholder="e.g. Sovereign National Bank" required type="text" />
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-email">
                            Institutional Work Email *
                          </label>
                          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-email" placeholder="j.mutua@institution.co.ke" required type="email" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-size">
                            Estimated Audience Size
                          </label>
                          <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-size">
                            <option value="5-10">
                              5 - 10 Participants (Board / Executive Comm.)
                            </option>
                            <option value="11-20">
                              11 - 20 Participants (Extended C-Suite)
                            </option>
                            <option value="1-4">
                              1 - 4 Key Accounting Officers
                            </option>
                            <option value="individual">
                              Individual Masterclass Seat
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-focus">
                            Priority Focus Area *
                          </label>
                          <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-focus" required defaultValue="">
                            <option disabled value="">
                              Select Primary Topic
                            </option>
                            <option value="dpa">
                              {"DPA 2019 & Personal Board Liability"}
                            </option>
                            <option value="pki">
                              {"Digital Trust, QES & Legal Evidentiary Standing"}
                            </option>
                            <option value="ai">
                              {"Sovereign AI Governance & ISO 42001"}
                            </option>
                            <option value="health">
                              {"Digital Health Act 2023 & Sovereignty"}
                            </option>
                            <option value="comprehensive">
                              Comprehensive Masterclass (All 4 Modules)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md font-semibold text-primary mb-1" htmlFor="exec-notes">
                          Target Timeline or Specific Mandate
                        </label>
                        <textarea className="w-full p-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-body-md shadow-sm" id="exec-notes" placeholder="Specify any upcoming board retreat dates or immediate regulatory audits..." rows={3} defaultValue="" />
                      </div>
                      <div className="pt-space-xs">
                        <button className="inline-flex items-center justify-center w-full py-3.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-all shadow-sm cursor-pointer" type="submit">
                          {" Submit Executive Briefing Inquiry "}
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm justify-center">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          lock
                        </span>
                        <span>
                          Submissions are encrypted and processed in strict adherence to Kenya DPA 2019.
                        </span>
                      </div>
                    </form>
                    {/* Success State */}
                    <div className="hidden p-space-lg bg-surface-container-low rounded-xl text-center space-y-space-sm" id="booking-success">
                      <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-[32px]">
                          check_circle
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary">
                        Inquiry Received
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                        {" Thank you. The RCFI Academy Directorate will contact you via your institutional email within 24 hours to coordinate scheduling and execute the briefing NDA. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary border-t border-primary-container/60">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-md text-secondary-fixed tracking-tight font-bold">
                  RCFI
                </span>
              </div>
              <p className="text-on-primary-container font-body-md text-body-md leading-relaxed">
                Reprodrive Center for Innovation Limited. Pan-African digital trust infrastructure, cryptographic assurance, and enterprise academy ecosystem.
              </p>
              <div className="flex flex-col gap-space-xs pt-space-xs font-label-sm text-label-sm text-tertiary-fixed-dim">
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    CAK Licensed ECSP (TL/E-CSP 00014)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    ISO 27001:2022 Certified
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    Kenya DPA Compliant Operator
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-health-governance" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-data-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                Sovereign Platforms
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-certysign" href="/products/certysign/">
                    CertySign Platform
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-elano" href="/products/elano/">
                    Elano Enterprise
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-prezio" href="/products/prezio/">
                    Prezio Identity
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="repository-cps" href="/trust/">
                    Certification Practice Statement
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="verify-document" href="/verify/">
                    Document Validation Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Academy & Insights"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-overview" href="/academy/">
                    Academy Programs
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-health-interoperability" href="/services/digital-health-governance/">
                    Health Interoperability
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-the-trust-layer" href="/insights/">
                    The Trust Layer Journal
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-sovereignty-series" href="/insights/">
                    The Sovereignty Series
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-knowledge-hub" href="/insights/">
                    {"Knowledge Hub & RFCs"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Trust & Compliance"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="trust-center" href="/trust/">
                    {"Security & Trust Portal"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="ca-repository" href="/trust/">
                    CA Public Repository
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="compliance-audit" href="/trust/">
                    Third-Party SOC/ISO Audits
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="legal-privacy" href="/privacy/">
                    {"Data Protection & Privacy"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="responsible-disclosure" href="/trust/">
                    Vulnerability Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-xl pt-space-md border-t border-primary-container/50 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-primary-container font-label-md text-label-md">
            <div className="flex items-center gap-space-xs text-center md:text-left">
              <span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya.
              </span>
            </div>
            <div className="text-center md:text-right">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All sovereign rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
