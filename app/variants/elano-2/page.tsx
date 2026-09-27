import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/variants-elano-2/page.css";
import "@/styles/pages/variants-elano-2/late.css";

export const metadata: Metadata = { title: "Elano (variant 2) | RCFI" };

export default function VariantsElano2Page() {
  return (
    <div className="rcfi-variants-elano-2" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container h-10 flex items-center">
          <div className="max-w-7xl mx-auto px-margin w-full flex items-center justify-between font-label-sm text-label-sm text-on-primary">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span className="">
                  ISO 27001 Certified
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span className="">
                  CAK Licensed ECSP
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span className="">
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
              <Link className="h-full flex items-center font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" data-path="elano" href="/products/elano/">
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
          <section className="relative overflow-hidden bg-surface pt-space-lg pb-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left Column: Copy & Actions */}
                <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant font-label-sm text-label-sm mb-space-md">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>
                      {"PRODUCTS / GOVERNANCE & INTELLIGENCE PLATFORM • CAK ACCREDITED"}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight mb-space-md">
                    {" Govern like it’s 2026,"}
                    <br />
                    {"not 1996. "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
                    {" Elano brings registration, board governance, planning, monitoring, and financial reporting into one secure platform — so institutions spend their energy on mission, not paperwork. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md mb-space-xl w-full sm:w-auto">
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all" href="#demo-modal" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_month
                      </span>
                      <span>
                        Book a Demo
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all" href="#modules-section">
                      <span>
                        Explore Product Modules
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                  {/* Trust Badges Under CTA */}
                  <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        verified
                      </span>
                      <span>
                        CAK Lic. TL/E-CSP 00014
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        lock
                      </span>
                      <span>
                        ISO/IEC 27001 Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        shield
                      </span>
                      <span>
                        Kenya DPA 2019 Compliant
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Column: High-Fidelity Governance Preview Card */}
                <div className="lg:col-span-5 mt-space-lg lg:mt-0">
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-xl">
                    {/* Platform Header Strip inside Mockup */}
                    <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-lg -mt-space-lg p-space-md rounded-t-xl">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider">
                          ELANO // REGISTRY NODE
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-semibold">
                        Live State: SECURE
                      </span>
                    </div>
                    {/* Institution Meta Card */}
                    <div className="bg-surface-container-low p-space-md rounded-lg mb-space-md">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Registered Entity
                          </span>
                          <h3 className="font-title-md text-title-md text-primary font-bold">
                            East Africa Health Trust
                          </h3>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                          Tier-1 PBO
                        </span>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                        ID: CGRA-048-KE • Tax Pin: P051288921Z
                      </p>
                    </div>
                    {/* Active Meeting & Quorum Metric */}
                    <div className="space-y-space-sm mb-space-md">
                      <div className="flex items-center justify-between text-on-surface">
                        <span className="font-label-md text-label-md font-semibold">
                          Q2 Statutory Board Council
                        </span>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                          {" Quorum Met (88%) "}
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full transition-all duration-1000" style={{ "width": "88%" }} />
                      </div>
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                        <span>
                          7 of 8 Trustees Authenticated
                        </span>
                        <span>
                          Requires ≥ 60%
                        </span>
                      </div>
                    </div>
                    {/* Signed Resolution Ledger Preview */}
                    <div className="bg-surface p-space-md rounded-lg mb-space-md space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">
                          Resolution Res-2025-04b
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Cryptographic Hash Valid
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface line-clamp-1">
                        Approve FY25/26 Health Sanitation Budget KES 48.5M
                      </p>
                      <div className="flex items-center gap-space-xs pt-1">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          verified_user
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          CAK ECSP Validated Signature • HSM Keystore
                        </span>
                      </div>
                    </div>
                    {/* Micro Metrics Grid */}
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="bg-surface-container-low p-space-sm rounded-lg">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Donor Milestones
                        </span>
                        <span className="font-headline-sm text-headline-sm text-primary">
                          12 / 14
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary block">
                          On Schedule (EU Dev)
                        </span>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Audit Readiness
                        </span>
                        <span className="font-headline-sm text-headline-sm text-secondary">
                          99.4%
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          All Vouchers Linked
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CANONICAL STATS BAR */}
          <section className="bg-primary text-on-primary py-space-lg">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center divide-y md:divide-y-0 md:divide-x divide-primary-container">
                <div className="pt-space-sm md:pt-0">
                  <div className="font-display-lg text-display-lg text-secondary-fixed mb-1">
                    698
                  </div>
                  <div className="font-label-md text-label-md text-tertiary-fixed">
                    Organizations Managed
                  </div>
                </div>
                <div className="pt-space-sm md:pt-0">
                  <div className="font-display-lg text-display-lg text-secondary-fixed mb-1">
                    1,493
                  </div>
                  <div className="font-label-md text-label-md text-tertiary-fixed">
                    Board Meetings Run
                  </div>
                </div>
                <div className="pt-space-sm md:pt-0">
                  <div className="font-display-lg text-display-lg text-secondary-fixed mb-1">
                    698
                  </div>
                  <div className="font-label-md text-label-md text-tertiary-fixed">
                    Certificates Issued
                  </div>
                </div>
                <div className="pt-space-sm md:pt-0">
                  <div className="font-display-lg text-display-lg text-secondary-fixed mb-1">
                    99.95%
                  </div>
                  <div className="font-label-md text-label-md text-tertiary-fixed">
                    Platform Uptime SLA
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* THE NEED / SNAP FRAMEWORK SECTION */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mb-space-xs block">
                  // THE NEED FOR INSTITUTIONAL CLARITY
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-md">
                  An NGO’s credibility lives in its governance.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Clean registration, functioning boards, traceable money, reportable impact. Yet most institutions run this on spreadsheets, email threads, and one person’s memory. When the auditor, donor, or regulator calls, the scramble begins. "}
                </p>
              </div>
              {/* Contrast Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">
                        folder_off
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      The Spreadsheet Trap
                    </h3>
                    <div className="space-y-space-sm mb-space-md">
                      <div className="bg-surface-container-low p-space-sm rounded text-on-surface-variant font-body-md text-body-md">
                        <span className="text-error font-semibold block mb-0.5">
                          Conventional Reality:
                        </span>
                        {" Multi-tab spreadsheets, misplaced governance resolutions, duplicate versions across emails, and risk of data loss when key staff leave. "}
                      </div>
                      <div className="bg-primary-fixed/20 p-space-sm rounded text-on-primary-fixed-variant font-body-md text-body-md">
                        <span className="text-secondary font-bold block mb-0.5">
                          The Elano Standard:
                        </span>
                        {" Centralized cloud repository with role-based access, automated versioning, and continuous digital audit logs. "}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span>
                      Zero file loss across 7+ years
                    </span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">
                        history_edu
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      The Regulatory Scramble
                    </h3>
                    <div className="space-y-space-sm mb-space-md">
                      <div className="bg-surface-container-low p-space-sm rounded text-on-surface-variant font-body-md text-body-md">
                        <span className="text-error font-semibold block mb-0.5">
                          Conventional Reality:
                        </span>
                        {" Weeks spent chasing physical signatures for annual returns, unverified quorums, and last-minute panic before PBO Act compliance deadlines. "}
                      </div>
                      <div className="bg-primary-fixed/20 p-space-sm rounded text-on-primary-fixed-variant font-body-md text-body-md">
                        <span className="text-secondary font-bold block mb-0.5">
                          The Elano Standard:
                        </span>
                        {" Continuous audit readiness, CAK-licensed cryptographic sign-offs, automated statutory calendar notifications, and verified minutes. "}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span>
                      100% statutory adherence
                    </span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">
                        troubleshoot
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-space-sm">
                      Donor Blindspots
                    </h3>
                    <div className="space-y-space-sm mb-space-md">
                      <div className="bg-surface-container-low p-space-sm rounded text-on-surface-variant font-body-md text-body-md">
                        <span className="text-error font-semibold block mb-0.5">
                          Conventional Reality:
                        </span>
                        {" Financial ledgers unlinked to milestone outputs. Subjective progress reports drafted days prior to donor audit visits. "}
                      </div>
                      <div className="bg-primary-fixed/20 p-space-sm rounded text-on-primary-fixed-variant font-body-md text-body-md">
                        <span className="text-secondary font-bold block mb-0.5">
                          The Elano Standard:
                        </span>
                        {" Real-time MEARL linked directly to budget tranches, activity geotags, and instant export templates for USAID, EU, and Global Fund. "}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span>
                      Auditor-ready exports in 1 click
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* INTERACTIVE TOOL: GOVERNANCE HEALTH CHECK */}
          <section className="py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* Diagnostic Info & Real-Time Scorecard */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mb-space-xs block">
                      {"// INTERACTIVE BENCHMARK & RISK ASSESSMENT"}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                      Assess your institution's governance health in 2 minutes.
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                      {" Answer 8 rapid institutional audit questions to receive an instant compliance score, identify regulatory gaps (PBO Act 2013, KICA, ODPC), and get actionable remediation advice. "}
                    </p>
                  </div>
                  {/* Dynamic Gauge & Result Card */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Health Diagnostic
                      </span>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold" id="score-status-badge">
                        Good Standing
                      </span>
                    </div>
                    {/* Visual Circular Progress / Metric */}
                    <div className="flex items-center gap-space-md">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                          {" "}
                          <path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                          {" "}
                          <path className="text-secondary transition-all duration-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" id="score-circle-bar" stroke="currentColor" strokeDasharray="100, 100" strokeDashoffset="25" strokeLinecap="round" strokeWidth="3.5" />
                          {" "}
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="font-headline-md text-headline-md font-bold text-primary" id="score-val">
                            75%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="font-label-md text-label-md text-primary font-semibold" id="score-status-heading">
                          Moderate Institutional Risk
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm" id="score-summary">
                          2 critical compliance gaps detected requiring immediate operational intervention.
                        </p>
                      </div>
                    </div>
                    {/* Identified Gaps Container */}
                    <div className="space-y-2 pt-space-xs" id="identified-gaps">
                      {/* Dynamically populated or default */}
                      <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md">
                        <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                          warning
                        </span>
                        <span>
                          Unverified digital sign-offs increase donor grant repudiation risk.
                        </span>
                      </div>
                      <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2 text-on-surface font-body-md text-body-md">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                          info
                        </span>
                        <span>
                          Automated 7-year audit retention recommended for full DPA 2019 compliance.
                        </span>
                      </div>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      <span>
                        {"Download Diagnostic Report & Consult"}
                      </span>
                    </button>
                  </div>
                </div>
                {/* 8 Interactive Diagnostic Questions */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                  <div className="border-b border-surface-container pb-space-sm flex justify-between items-center">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Institutional Assessment Questionnaire
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Click each pill to score
                    </span>
                  </div>
                  <div className="space-y-space-md divide-y divide-surface-container/60">
                    {/* Q1 */}
                    <div className="pt-3 first:pt-0 question-block" data-q="1">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        1. Is your organization registration up-to-date with a searchable public registry record?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(1, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(1, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(1, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q2 */}
                    <div className="pt-3 question-block" data-q="2">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        2. Can board minutes and signed resolutions from 3 years ago be retrieved in under 5 minutes?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(2, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(2, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(2, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q3 */}
                    <div className="pt-3 question-block" data-q="3">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        3. Is there a formal, active Conflict-of-Interest (COI) register updated prior to each board vote?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(3, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(3, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(3, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q4 */}
                    <div className="pt-3 question-block" data-q="4">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        4. Do you generate automated budget-vs-actual financial variances monthly without manual spreadsheet collation?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(4, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(4, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(4, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q5 */}
                    <div className="pt-3 question-block" data-q="5">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        5. Are board quorums cryptographically validated with tamper-evident digital sign-offs?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(5, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(5, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(5, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q6 */}
                    <div className="pt-3 question-block" data-q="6">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        6. Does your MEARL framework trace donor outcomes directly to field activities and milestone disbursements?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(6, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(6, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(6, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q7 */}
                    <div className="pt-3 question-block" data-q="7">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        7. Do you enforce role-based access control and two-factor authentication (2FA) across staff and directors?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(7, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(7, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(7, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                    {/* Q8 */}
                    <div className="pt-3 question-block" data-q="8">
                      <p className="font-label-md text-label-md text-primary font-medium mb-2">
                        8. Are compliance records stored with seven-year immutable audit trails compliant with Kenya DPA 2019?
                      </p>
                      <div className="flex gap-2">
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(8, 100, this)" type="button">
                          Yes
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold" data-rcfi-onclick="selectAudit(8, 50, this)" type="button">
                          Partial
                        </button>
                        <button className="audit-btn px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant" data-rcfi-onclick="selectAudit(8, 0, this)" type="button">
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* INTERACTIVE MODULE EXPLORER: 8 MODULES, ONE PLATFORM */}
          <section className="py-space-xl bg-surface" id="modules-section">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mb-space-xs block">
                  // EIGHT MODULES, ONE PLATFORM
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                  Complete digital transformation for institutional governance.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" From initial entity incorporation to donor audit defense, Elano powers the entire institutional lifecycle. "}
                </p>
              </div>
              {/* Module Tabs Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Navigation List / Module Selector */}
                <div className="lg:col-span-4 flex flex-col space-y-1.5">
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-primary text-on-primary transition-all flex items-center justify-between" id="mod-btn-0" data-rcfi-onclick="switchModule(0)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                        domain_add
                      </span>
                      <span className="font-label-md text-label-md font-bold">
                        1. Organization Registration
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-1" data-rcfi-onclick="switchModule(1)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        groups
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        {"2. Board & Governance"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-2" data-rcfi-onclick="switchModule(2)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        how_to_vote
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        {"3. Meetings & Resolutions"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-3" data-rcfi-onclick="switchModule(3)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        alt_route
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        4. Strategic Planning
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-4" data-rcfi-onclick="switchModule(4)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        assignment
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        {"5. Programmes & Projects"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-5" data-rcfi-onclick="switchModule(5)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        query_stats
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        6. MEARL Framework
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-6" data-rcfi-onclick="switchModule(6)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        account_balance
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        7. Financial Management
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                  <button className="module-tab-btn w-full text-left p-space-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-between" id="mod-btn-7" data-rcfi-onclick="switchModule(7)">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        enhanced_encryption
                      </span>
                      <span className="font-label-md text-label-md font-semibold">
                        {"8. Security & Access"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                </div>
                {/* Module Detail & Interactive Visual Panel */}
                <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-lg">
                  <div id="module-display">
                    {/* Dynamic Content Injected By Script */}
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md pb-space-sm border-b border-surface-container">
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider" id="m-eyebrow">
                          {"MODULE 01 // ONBOARDING & CONSTITUTION"}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-primary font-bold" id="m-title">
                          Organization Registration
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold" id="m-badge">
                        Statutory Track
                      </span>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg" id="m-desc">
                      {" Guided six-step registration workflow supporting PBO, CBO, and CGRA legal frameworks. Validates constitution charters, vetting certificates, and statutory identity numbers directly into a tamper-evident public registry. "}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                      <div className="bg-surface-container-low p-space-md rounded-lg">
                        <span className="font-label-md text-label-md text-primary font-bold block mb-space-xs">
                          Core Capabilities
                        </span>
                        <ul className="space-y-1.5 font-body-md text-body-md text-on-surface-variant" id="m-caps">
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              check_circle
                            </span>
                            {" Multi-track constitution builder (PBO Act 2013)"}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              check_circle
                            </span>
                            {" Instant document authenticity validation"}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              check_circle
                            </span>
                            {" Searchable public verification QR registry"}
                          </li>
                        </ul>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg">
                        <span className="font-label-md text-label-md text-primary font-bold block mb-space-xs">
                          {"Audit & Institutional Output"}
                        </span>
                        <ul className="space-y-1.5 font-body-md text-body-md text-on-surface-variant" id="m-outputs">
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              task
                            </span>
                            {" CAK cryptographic verifiable certificate"}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              task
                            </span>
                            {" Complete electronic founding portfolio"}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              task
                            </span>
                            {" Statutory Gazette notice package"}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Workflow Visual Mockup Frame */}
                    <div className="bg-surface-container-low rounded-lg p-space-md">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                        <span className="font-mono" id="m-mock-label">
                          Process: ENTITY_REG_STAGE_03.xml
                        </span>
                        <span className="text-secondary font-semibold">
                          Cryptographically Sealed
                        </span>
                      </div>
                      <div className="h-36 bg-surface-container-lowest rounded flex flex-col justify-center px-space-lg relative overflow-hidden" id="m-mockup-graphic">
                        <div className="flex items-center justify-between max-w-lg mx-auto w-full relative z-10">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">
                              1
                            </div>
                            <span className="font-label-sm text-label-sm mt-1">
                              Trustees
                            </span>
                          </div>
                          <div className="h-0.5 flex-1 bg-secondary mx-2" />
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">
                              2
                            </div>
                            <span className="font-label-sm text-label-sm mt-1">
                              Vetting
                            </span>
                          </div>
                          <div className="h-0.5 flex-1 bg-secondary mx-2" />
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                              3
                            </div>
                            <span className="font-label-sm text-label-sm mt-1 font-bold">
                              Sign-off
                            </span>
                          </div>
                          <div className="h-0.5 flex-1 bg-surface-container mx-2" />
                          <div className="flex flex-col items-center opacity-40">
                            <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs">
                              4
                            </div>
                            <span className="font-label-sm text-label-sm mt-1">
                              Cert Issued
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION: FOR EVERY STAKEHOLDER */}
          <section className="py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mb-space-xs block">
                  // BUILT FOR EVERY GOVERNANCE ROLE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-space-md">
                  Designed for the entire governance ecosystem.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Whether you sit on the audit committee, manage donor tranches, or inspect institutional returns, Elano provides dedicated interfaces and tailored transparency. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* Stakeholder 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">
                      corporate_fare
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    {"NGOs & CSOs"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Streamlined board management, continuous project delivery tracking, and automated statutory compliance without dedicating full workdays to administrative chaos. "}
                  </p>
                </div>
                {/* Stakeholder 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">
                      gavel
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    {"Regulators & Certifying Bodies"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Expedited registration reviews, live compliance oversight, and high-assurance digital certificate validation to deter fraudulent entities. "}
                  </p>
                </div>
                {/* Stakeholder 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">
                      balance
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    {"Boards & Trustees"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Frictionless paperless meetings, cryptographic resolution voting, automated attendance registers, and explicit committee delegation pipelines. "}
                  </p>
                </div>
                {/* Stakeholder 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">
                      volunteer_activism
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    {"Development Agencies & Donors"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Verifiable impact metrics, real-time grant tracking, and export-ready expenditure audit dossiers linked directly to primary accounting records. "}
                  </p>
                </div>
                {/* Stakeholder 5 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
                  <div className="flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        public
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                        {"The Public & Beneficiaries"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Instant verification of institutional credentials through public QR scans, transparent registry lookups, and clear governance assurance backing social interventions across Kenya and East Africa. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIALS & TRUST PROOF */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mb-space-xs block">
                  {"// FIELD TESTED & TRUSTED"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Voices from the boardroom.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Testimonial 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-md mb-space-md">
                    <div className="flex text-secondary-container">
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                      {" \"Before Elano, our statutory board pack was a 120-page email PDF that trustees barely skimmed. Now, quorums, resolutions, and audit committee records are completely tracked in real time.\" "}
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container">
                    <div className="font-label-md text-label-md text-primary font-bold">
                      Wanjiku Mwangi
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Board Secretary, African Conservation Foundation
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-md mb-space-md">
                    <div className="flex text-secondary-container">
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                      {" \"During our USAID financial audit, being able to tie our MEARL indicators directly to our voucher disbursements inside Elano cut our document defense time from 10 days to 4 hours.\" "}
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container">
                    <div className="font-label-md text-label-md text-primary font-bold">
                      Dr. Joseph Kiprop
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Programme Director, Rift Valley Healthcare Initiative
                    </div>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-md mb-space-md">
                    <div className="flex text-secondary-container">
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                      {" \"RCFI’s integration of CAK-licensed cryptographic signing right inside Elano gave our international trustees the legal confidence they needed to execute governance resolutions remotely.\" "}
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container">
                    <div className="font-label-md text-label-md text-primary font-bold">
                      Amina Hersi
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Chief Executive Officer, East Africa Youth League
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CLOSING CALL TO ACTION SECTION */}
          <section className="py-space-xl bg-primary text-on-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin relative z-10 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display-lg text-display-lg text-on-primary mb-space-md">
                  {" Your next board meeting could run itself. "}
                </h2>
                <p className="font-body-lg text-body-lg text-tertiary-fixed mb-space-lg leading-relaxed">
                  {" Join over 698 organizations running transparent, auditable governance across East Africa. Deploy in under 48 hours with full legacy data migration. "}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-lg">
                  <button className="px-space-xl py-4 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-all shadow-lg" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                    {" Schedule Strategic Demo "}
                  </button>
                  <a className="px-space-xl py-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all" href="mailto:info@rcfi.co.ke">
                    {" Contact Enterprise Sales "}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs text-tertiary-fixed font-label-sm text-label-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Free 30-day pilot
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Dedicated onboarding specialist
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                      check_circle
                    </span>
                    <span>
                      Kenya DPA Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* MODAL: BOOK A DEMO DIALOG */}
          <div className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm hidden flex items-center justify-center p-space-md" id="demo-modal">
            <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-space-lg shadow-2xl relative">
              <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary" data-rcfi-onclick="document.getElementById('demo-modal').classList.add('hidden')">
                {" "}
                <span className="material-symbols-outlined">
                  close
                </span>
                {" "}
              </button>
              <div className="mb-space-md">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  ELANO GOVERNANCE SUITE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                  Schedule an Institutional Demo
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  See how Elano automates compliance, board packs, and MEARL for your organization.
                </p>
              </div>
              <form className="space-y-space-sm" data-rcfi-onsubmit="event.preventDefault(); alert('Demo request submitted successfully. An RCFI governance specialist will contact you within 4 business hours.'); document.getElementById('demo-modal').classList.add('hidden');">
                <div>
                  <label className="block font-label-sm text-label-sm text-primary font-semibold mb-1">
                    Full Name
                  </label>
                  <input className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="e.g. Grace Wanjala" required type="text" />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-primary font-semibold mb-1">
                    Institutional Email
                  </label>
                  <input className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="name@organization.or.ke" required type="email" />
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div>
                    <label className="block font-label-sm text-label-sm text-primary font-semibold mb-1">
                      Organization Type
                    </label>
                    <select className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                      <option>
                        PBO / NGO
                      </option>
                      <option>
                        CBO / Faith-Based
                      </option>
                      <option>
                        Public Board / Parastatal
                      </option>
                      <option>
                        Development Agency
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-primary font-semibold mb-1">
                      Board / Staff Size
                    </label>
                    <select className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                      <option>
                        1 - 25 members
                      </option>
                      <option>
                        26 - 100 members
                      </option>
                      <option>
                        100+ members
                      </option>
                    </select>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <button className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all" type="submit">
                    {" Confirm & Book Demo "}
                  </button>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
                  Includes free Governance Health Audit review during demo session.
                </p>
              </form>
            </div>
          </div>
          {/* INTERACTIVE CLIENT JAVASCRIPT */}
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
      <PageScripts scripts={scripts} />
    </div>
  );
}
