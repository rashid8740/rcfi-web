import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/variants-prezio-2/page.css";

export const metadata: Metadata = { title: "Prezio (variant 2) | RCFI" };

export default function VariantsPrezio2Page() {
  return (
    <div className="rcfi-variants-prezio-2" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container h-10 flex items-center">
          <div className="max-w-7xl mx-auto px-margin w-full flex items-center justify-between font-label-sm text-label-sm text-on-primary">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  CAK Licensed ECSP
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                mail
              </span>
              <a className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm text-on-primary" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest h-20 flex items-center">
          <div className="max-w-7xl mx-auto px-margin w-full h-full flex items-center justify-between gap-gutter">
            <div className="flex items-center gap-space-md">
              <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="hidden sm:flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary leading-none">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-space-lg h-full" data-active-classes="text-primary font-title-md font-semibold border-b-2 border-secondary">
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link aria-current="page" className="h-full flex items-center transition-colors text-primary font-title-md font-semibold border-b-2 border-secondary" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about/">
                About
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-md">
              <a className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary font-label-md text-label-md rounded-lg transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[120px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section className="relative w-full bg-primary overflow-hidden text-on-primary py-24">
            {/* Subtle Constellation & Geometric Gradient Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-secondary/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-[480px] h-[480px] bg-primary-container/40 rounded-full blur-3xl" />
              <svg className="absolute inset-0 w-full h-full opacity-10" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="grid-pattern-hero" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path className="text-secondary-fixed" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    {" "}
                    <circle className="text-secondary-fixed" cx="0" cy="0" fill="currentColor" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#grid-pattern-hero)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary-container/80 text-secondary-fixed mb-space-lg shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span className="font-label-md text-label-md font-semibold tracking-wide">
                      {"Intelligent Business Management & Automation"}
                    </span>
                  </div>
                  {/* Headline */}
                  <h1 className="font-display-lg text-display-lg lg:text-[56px] lg:leading-[64px] font-bold text-on-primary tracking-tight mb-space-md">
                    {" Less process."}
                    <br />
                    <span className="text-secondary-fixed">
                      More progress.
                    </span>
                  </h1>
                  {/* Subheadline */}
                  <p className="font-body-lg text-body-lg text-tertiary-fixed max-w-2xl mb-space-xl leading-relaxed">
                    {" Prezio helps organizations automate approvals, workflows, documents and operations from one intelligent platform. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md">
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span>
                        Book a Demo
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary-container/70 hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-sm transition-colors" href="#how-it-works">
                      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                        explore
                      </span>
                      <span>
                        Explore Platform
                      </span>
                    </a>
                  </div>
                  {/* Trust Badges Under CTA */}
                  <div className="mt-space-xl pt-space-lg border-t border-primary-container/60 flex flex-wrap items-center gap-space-lg text-tertiary-fixed-dim font-label-sm text-label-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        verified
                      </span>
                      <span>
                        ISO 27001 Certified Security
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        shield
                      </span>
                      <span>
                        Enterprise DPA Ready
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        speed
                      </span>
                      <span>
                        Instant Routing Engine
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Interactive Hero Workflow Component */}
                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  {/* Ambient card backdrop aura */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-secondary-fixed/20 to-secondary/10 rounded-2xl blur-xl opacity-60" />
                  {/* Main Live Workflow Card */}
                  <div className="relative bg-surface-container-lowest rounded-xl shadow-xl p-space-lg text-on-surface">
                    {/* Card Header */}
                    <div className="flex items-center justify-between pb-space-md border-b border-surface-container">
                      <div className="flex items-center gap-space-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping" />
                          {" LIVE WORKFLOW "}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                          #PR-2026-089
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-outline-variant hover:text-primary cursor-pointer text-[20px]">
                        more_vert
                      </span>
                    </div>
                    {/* Workflow Name */}
                    <div className="pt-space-md pb-space-sm">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Automated Workflow
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Procurement Approval
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Capex Infrastructure Expansion • Department of ICT
                      </p>
                    </div>
                    {/* Step Tracker List */}
                    <div className="space-y-space-md my-space-md relative before:absolute before:left-[17px] before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container">
                      {/* Step 1: Completed */}
                      <div className="relative flex items-center justify-between gap-space-md pl-10">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
                          <span className="material-symbols-outlined text-[14px] font-bold">
                            check
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md font-semibold text-primary">
                            Request Submitted
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Authored by David Ochieng • 09:15 AM
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-primary-fixed text-on-primary-fixed-variant">
                          Completed
                        </span>
                      </div>
                      {/* Step 2: Approved */}
                      <div className="relative flex items-center justify-between gap-space-md pl-10">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
                          <span className="material-symbols-outlined text-[14px] font-bold">
                            done_all
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md font-semibold text-primary">
                            Finance Review
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Audited by Sarah Mwangi • 10:40 AM
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed">
                          Approved
                        </span>
                      </div>
                      {/* Step 3: In Progress (Pulsing) */}
                      <div className="relative flex items-center justify-between gap-space-md pl-10">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow-md animate-pulse">
                          <span className="material-symbols-outlined text-[14px]">
                            autorenew
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md font-bold text-primary">
                            Director Approval
                          </div>
                          <div className="font-label-sm text-label-sm text-secondary font-medium">
                            Pending e-Signature • Executive Suite
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container-high text-primary flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                          {" In Progress "}
                        </span>
                      </div>
                      {/* Step 4: Pending */}
                      <div className="relative flex items-center justify-between gap-space-md pl-10">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-surface-container text-outline flex items-center justify-center">
                          <span className="material-symbols-outlined text-[13px]">
                            hourglass_empty
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md font-medium text-outline">
                            Completed
                          </div>
                          <div className="font-label-sm text-label-sm text-outline">
                            {"ERP Disbursement & Archival"}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container text-outline">
                          Pending
                        </span>
                      </div>
                    </div>
                    {/* Workflow Progress Footnote */}
                    <div className="pt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          bolt
                        </span>
                        <span>
                          Automated through RCFI Governance Engine
                        </span>
                      </div>
                      <span className="font-mono text-primary font-semibold">
                        75% Complete
                      </span>
                    </div>
                  </div>
                  {/* Floating Metric Badge 1: Approved */}
                  <div className="absolute -top-6 -left-6 bg-surface-container-lowest text-primary rounded-lg shadow-xl px-space-md py-space-sm flex items-center gap-space-sm animate-bounce [animation-duration:4s]">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[18px] font-bold">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <div className="font-title-md text-title-md font-bold text-primary leading-tight">
                        Approved ✓
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Multi-tier validated
                      </div>
                    </div>
                  </div>
                  {/* Floating Metric Badge 2: 80% Faster */}
                  <div className="absolute -bottom-6 -right-4 bg-primary text-on-primary rounded-lg shadow-xl px-space-md py-space-sm flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm font-bold text-secondary-fixed leading-tight">
                        80% Faster
                      </div>
                      <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        Approval turnaround
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* HOW IT WORKS SECTION */}
          <section className="w-full bg-surface-container-lowest py-24" id="how-it-works">
            <div className="max-w-7xl mx-auto px-margin">
              {/* Section Header */}
              <div className="max-w-3xl mb-space-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold mb-space-sm tracking-wide">
                  {" HOW IT WORKS "}
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight mb-space-sm">
                  {" From request to completion. "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Prezio intelligently routes every request through the right people, helping your teams move faster while maintaining complete visibility across every workflow. "}
                </p>
              </div>
              {/* 3-Step Horizontal Flow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
                {/* Step 01 */}
                <div className="group relative bg-surface-container-low hover:bg-surface-container rounded-xl p-space-xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                  <div className="w-1.5 h-12 bg-secondary-fixed absolute left-0 top-8 rounded-r" />
                  <div>
                    <div className="flex items-center justify-between mb-space-lg">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-primary text-secondary-fixed font-mono font-bold text-label-sm">
                        {" STEP 01 "}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-[24px]">
                          post_add
                        </span>
                      </div>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Submit Request "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Create requests, approvals or documents in just a few clicks. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-surface-container flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      flash_on
                    </span>
                    <span>
                      Pre-configured smart templates
                    </span>
                  </div>
                </div>
                {/* Step 02 */}
                <div className="group relative bg-surface-container-low hover:bg-surface-container rounded-xl p-space-xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                  <div className="w-1.5 h-12 bg-secondary-fixed absolute left-0 top-8 rounded-r" />
                  <div>
                    <div className="flex items-center justify-between mb-space-lg">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-primary text-secondary-fixed font-mono font-bold text-label-sm">
                        {" STEP 02 "}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-[24px]">
                          alt_route
                        </span>
                      </div>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Automatic Routing "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Prezio intelligently routes every request to the right people automatically. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-surface-container flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      schema
                    </span>
                    <span>
                      {"Delegation & conditional matrices"}
                    </span>
                  </div>
                </div>
                {/* Step 03 */}
                <div className="group relative bg-surface-container-low hover:bg-surface-container rounded-xl p-space-xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                  <div className="w-1.5 h-12 bg-secondary-fixed absolute left-0 top-8 rounded-r" />
                  <div>
                    <div className="flex items-center justify-between mb-space-lg">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-primary text-secondary-fixed font-mono font-bold text-label-sm">
                        {" STEP 03 "}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-[24px]">
                          speed
                        </span>
                      </div>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Complete Faster "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Track every workflow in real time until every task is completed. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-surface-container flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      task_alt
                    </span>
                    <span>
                      Audit-ready cryptographic logs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* OPERATIONS HUB SECTION */}
          <section className="w-full bg-surface-container-low py-24">
            <div className="max-w-7xl mx-auto px-margin">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-secondary-fixed font-label-sm text-label-sm font-bold mb-space-sm tracking-wide">
                  {" OPERATIONS HUB "}
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight mb-space-sm">
                  {" Everything in one place "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Replace spreadsheets, endless emails, and disconnected systems with one centralized workspace built to manage workflows, approvals, documents, and business operations. "}
                </p>
              </div>
              {/* 2-Column Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left Column: Value Propositions */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  {/* Feature 1 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          sync_saved_locally
                        </span>
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md font-bold text-primary mb-1">
                          {" Workflow automation "}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" Eliminate repetitive manual tasks and speed up execution. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          insights
                        </span>
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md font-bold text-primary mb-1">
                          {" Real-time insights "}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" Monitor operational performance with complete visibility. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          fact_check
                        </span>
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md font-bold text-primary mb-1">
                          {" Approval management "}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" Keep requests moving and avoid approval bottlenecks. "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Column: Live Operations Dashboard Mockup */}
                <div className="lg:col-span-7">
                  <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg lg:p-space-xl">
                    {/* Dashboard Card Top Bar */}
                    <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-surface-container">
                      <div className="flex items-center gap-space-sm">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                          {" LIVE "}
                        </span>
                        <span className="font-title-md text-title-md font-bold text-primary">
                          Operations Dashboard
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm font-mono">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          update
                        </span>
                        <span>
                          Auto-synced
                        </span>
                      </div>
                    </div>
                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-lg">
                      <div className="bg-surface-container-low p-space-md rounded-lg">
                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                          ACTIVE PROCESSES
                        </div>
                        <div className="font-headline-md text-headline-md font-bold text-primary mt-1">
                          324
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary font-medium mt-1">
                          +12 today
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg">
                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                          COMPLETED
                        </div>
                        <div className="font-headline-md text-headline-md font-bold text-primary mt-1">
                          98%
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary font-medium mt-1">
                          On SLA Target
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg">
                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                          Average approval time
                        </div>
                        <div className="font-headline-md text-headline-md font-bold text-primary mt-1">
                          2.4 Hours
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary font-medium mt-1">
                          Down from 18h
                        </div>
                      </div>
                      <div className="bg-primary-container p-space-md rounded-lg text-on-primary">
                        <div className="font-label-sm text-label-sm text-secondary-fixed uppercase font-semibold">
                          EFFICIENCY
                        </div>
                        <div className="font-headline-md text-headline-md font-bold text-secondary-fixed mt-1">
                          80% Faster
                        </div>
                        <div className="font-label-sm text-label-sm text-tertiary-fixed-dim mt-1">
                          Enterprise scale
                        </div>
                      </div>
                    </div>
                    {/* Inline Activity Data Chart Visual */}
                    <div className="mb-space-lg p-space-md bg-surface-container-low rounded-lg">
                      <div className="flex items-center justify-between mb-space-xs font-label-sm text-label-sm text-on-surface-variant">
                        <span className="font-semibold text-primary">
                          Monthly Throughput Velocity
                        </span>
                        <span className="text-secondary font-semibold">
                          2,840 Total Requests Resolved
                        </span>
                      </div>
                      {/* Clean SVG Velocity Sparkline/Chart under 2KB */}
                      <div className="w-full h-14">
                        <svg className="w-full h-full text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 500 60">
                          {" "}
                          <path d="M0,45 Q50,38 100,42 T200,28 T300,32 T400,12 T500,8 L500,60 L0,60 Z" fill="currentColor" fillOpacity="0.1" />
                          {" "}
                          <path d="M0,45 Q50,38 100,42 T200,28 T300,32 T400,12 T500,8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                          {" "}
                          <circle cx="500" cy="8" fill="currentColor" r="4" />
                          {" "}
                        </svg>
                      </div>
                    </div>
                    {/* Recent Requests List */}
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-wide">
                          Recent Requests
                        </span>
                        <a className="font-label-sm text-label-sm text-secondary hover:text-primary font-semibold" href="#">
                          View all requests →
                        </a>
                      </div>
                      <div className="divide-y divide-surface-container">
                        {/* Request Item 1 */}
                        <div className="py-space-sm flex items-center justify-between">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">
                                shopping_cart
                              </span>
                            </span>
                            <div>
                              <div className="font-label-md text-label-md font-semibold text-primary">
                                Procurement approval
                              </div>
                              <div className="font-label-sm text-label-sm text-on-surface-variant">
                                KES 2.4M • Server Infrastructure
                              </div>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-label-sm font-semibold bg-surface-container-high text-primary">
                            {" Finance Review "}
                          </span>
                        </div>
                        {/* Request Item 2 */}
                        <div className="py-space-sm flex items-center justify-between">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">
                                event_available
                              </span>
                            </span>
                            <div>
                              <div className="font-label-md text-label-md font-semibold text-primary">
                                Leave request
                              </div>
                              <div className="font-label-sm text-label-sm text-on-surface-variant">
                                Annual Leave • Legal Counsel
                              </div>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed">
                            {" Approved "}
                          </span>
                        </div>
                        {/* Request Item 3 */}
                        <div className="py-space-sm flex items-center justify-between">
                          <div className="flex items-center gap-space-sm">
                            <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">
                                policy
                              </span>
                            </span>
                            <div>
                              <div className="font-label-md text-label-md font-semibold text-primary">
                                Policy sign-off
                              </div>
                              <div className="font-label-sm text-label-sm text-on-surface-variant">
                                Q2 Information Security Guidelines
                              </div>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-label-sm font-semibold bg-primary-fixed text-on-primary-fixed-variant">
                            {" CEO Review "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CAPABILITIES SECTION */}
          <section className="w-full bg-surface-container-lowest py-24">
            <div className="max-w-7xl mx-auto px-margin">
              {/* Section Header */}
              <div className="max-w-3xl mb-space-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold mb-space-sm tracking-wide">
                  {" CAPABILITIES "}
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight mb-space-sm">
                  {" One platform. Endless possibilities. "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Simplify operations with one intelligent platform designed to automate work, improve collaboration and connect every business process. "}
                </p>
              </div>
              {/* 4-Card Balanced Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Capability 1: Documents */}
                <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-lg transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        folder_shared
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wide mb-1">
                      {" Documents "}
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Secure document management. "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Keep policies, contracts, SOPs, compliance records and business documents securely organized in one place. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-surface-container text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span>
                      Role-based encryption
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      lock
                    </span>
                  </div>
                </div>
                {/* Capability 2: Automation */}
                <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-lg transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        bolt
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wide mb-1">
                      {" Automation "}
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Eliminate repetitive work. "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Automate approvals, reminders and recurring business processes to save valuable time. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-surface-container text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span>
                      Zero-code rules engine
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      tune
                    </span>
                  </div>
                </div>
                {/* Capability 3: Teams */}
                <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-lg transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        groups
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wide mb-1">
                      {" Teams "}
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Work together. "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Bring departments together with transparent workflows and shared accountability. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-surface-container text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span>
                      Cross-functional alignment
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      visibility
                    </span>
                  </div>
                </div>
                {/* Capability 4: Integrations */}
                <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-lg transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        hub
                      </span>
                    </div>
                    <div className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wide mb-1">
                      {" Integrations "}
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-xs">
                      {" Connect your systems. "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Integrate seamlessly with your existing tools to create one connected digital workspace. "}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-surface-container text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span>
                      {"REST APIs & Webhooks"}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      api
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CLOSING CONVERSION BANNER */}
          <section className="w-full bg-primary text-on-primary py-20 relative overflow-hidden">
            {/* Decorative subtle ambient glow */}
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-primary-container/60 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-5xl mx-auto px-margin text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm font-bold mb-space-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                {" ENTERPRISE BUSINESS AUTOMATION "}
              </div>
              <h2 className="font-headline-lg text-headline-lg lg:text-[42px] font-bold text-on-primary tracking-tight mb-space-sm">
                {" Transform your business processes "}
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed max-w-2xl mx-auto mb-space-xl leading-relaxed">
                {" Discover how Prezio can automate workflows, accelerate approvals, and provide complete operational visibility. "}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-md">
                <a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                  <span>
                    Book a Demo
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    hub
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-sm">
                Reprodrive Center for Innovation Limited
              </p>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-md leading-relaxed">
                5th Floor, Hifadhi House,
                <br />
                Along ICD Road,
                <br />
                Nairobi, Kenya
              </p>
              <div className="flex items-center gap-space-xs text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>
                <a className="font-label-md text-label-md text-secondary-fixed hover:text-secondary-fixed-dim transition-colors" href="mailto:info@rcfi.co.ke">
                  info@rcfi.co.ke
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Products
              </h4>
              <ul className="space-y-space-sm">
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Company
              </h4>
              <ul className="space-y-space-sm">
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="careers" href="/insights/">
                    Updates
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li className="font-body-md text-body-md">
                  <a className="text-secondary-fixed hover:text-secondary-fixed-dim font-medium transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-primary mb-space-md">
                Compliance Seals
              </h4>
              <div className="flex flex-col gap-space-sm">
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    verified_user
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      ISO 27001 Certified
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Information Security Standard
                    </div>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    gavel
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      CAK Licensed
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Electronic Cert. Service Provider
                    </div>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary-container/60 flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    security
                  </span>
                  <div>
                    <div className="font-label-md text-label-md text-on-primary font-semibold">
                      Kenya DPA Compliant
                    </div>
                    <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Data Protection Act, 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
              © 2025 Reprodrive Center for Innovation Limited (RCFI). All rights reserved.
            </div>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm text-tertiary-fixed-dim">
              <Link className="hover:text-secondary-fixed transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                Security Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
