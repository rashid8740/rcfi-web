import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/health-security/page.css";
import "@/styles/pages/health-security/late.css";

export const metadata: Metadata = { title: "Health Security | RCFI Technology" };

export default function HealthSecurityPage() {
  return (
    <div className="rcfi-health-security" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary-container text-on-primary border-b border-primary h-10 flex items-center">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full flex items-center justify-between font-label-sm text-label-sm">
            <div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed inline-block" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed inline-block" />
                CAK Licensed ECSP
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed inline-block" />
                Kenya DPA Compliant
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs text-on-primary-container">
              <span className="material-symbols-outlined text-[14px]">
                mail
              </span>
              <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="h-20 bg-surface-container-lowest border-b border-outline-variant">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-full flex items-center justify-between gap-gutter">
            <div className="flex items-center gap-space-md">
              <img alt="RCFI - Reprodrive Center for Innovation Limited" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="hidden xl:block">
                <span className="block font-headline-sm text-headline-sm text-primary leading-none">
                  RCFI
                </span>
                <span className="block font-label-sm text-label-sm text-on-surface-variant">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center h-full gap-space-lg" data-active-classes="border-b-2 border-secondary text-primary font-semibold">
              <Link aria-current="page" className="h-full flex items-center transition-colors border-b-2 border-secondary text-primary font-semibold" data-path="home" href="/">
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
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about/">
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
              <a className="inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-all shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
      <main className="w-full pt-[120px] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* ========================================================================= */}
          {/* 1. HERO SECTION: Sovereign Pine Gradient & Telemetry Assurance Cluster */}
          {/* ========================================================================= */}
          <section className="relative bg-primary text-on-primary overflow-hidden py-space-xl lg:py-24">
            {/* Atmospheric SVG Grid / Constellation Mesh */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="health-grid" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6ffbbe" strokeWidth="0.75" />
                    {" "}
                    <circle cx="24" cy="24" fill="#6ffbbe" opacity="0.3" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#health-grid)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            {/* Soft Radial Ambient Glow Behind Card */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-secondary-fixed opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
                {/* Left Hero Column */}
                <div className="lg:col-span-7 space-y-space-md">
                  {/* Compliance Verification Pill */}
                  {" "}
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span>
                      {"Clinical Cybersecurity & Compliance"}
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <p className="font-headline-sm text-headline-sm text-secondary-fixed tracking-wide uppercase">
                      {" Health Security "}
                    </p>
                    <h1 className="font-display-lg text-display-lg text-on-primary">
                      {" Secure the systems that deliver care. "}
                    </h1>
                  </div>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
                    {" Independent security and privacy assurance for digital health platforms across East Africa — from EMRs and telemedicine to national health registries and mobile health apps. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                    <Link className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md transition-all shadow-md" data-path="contact" href="/contact/">
                      <span>
                        Talk to our team
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-label-md transition-all" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_today
                      </span>
                      <span>
                        Book a Meeting
                      </span>
                    </a>
                  </div>
                  {/* Proof Markers Strip */}
                  <div className="pt-space-md flex flex-wrap items-center gap-space-lg text-on-primary-container font-label-sm text-label-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        verified
                      </span>
                      <span>
                        CAK Licensed ECSP
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        shield
                      </span>
                      <span>
                        ISO 27001 Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        gavel
                      </span>
                      <span>
                        Kenya DPA 2019 Admissible
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Hero Interactive Visual: Clinical Security Telemetry Card */}
                <div className="lg:col-span-5">
                  <div className="bg-primary-container rounded-xl p-space-md lg:p-space-lg shadow-xl relative overflow-hidden">
                    {/* Header of card */}
                    <div className="flex items-center justify-between gap-space-sm pb-space-md">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed" />
                        <span className="font-label-sm text-label-sm text-secondary-fixed tracking-wider uppercase">
                          ACTIVE CLINICAL AUDIT
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
                        Tier-3 EMR Review
                      </span>
                    </div>
                    {/* Real-time metrics strip */}
                    <div className="grid grid-cols-3 gap-space-xs py-space-sm bg-tertiary-container rounded-lg p-space-xs text-center mb-space-md">
                      <div className="p-space-xs">
                        <div className="font-title-md text-title-md text-secondary-fixed">
                          100%
                        </div>
                        <div className="font-label-sm text-label-sm text-on-tertiary-container text-[10px] leading-tight">
                          Kenya DPA Aligned
                        </div>
                      </div>
                      <div className="p-space-xs">
                        <div className="font-title-md text-title-md text-on-primary">
                          FHIR/HL7
                        </div>
                        <div className="font-label-sm text-label-sm text-on-tertiary-container text-[10px] leading-tight">
                          Interoperable
                        </div>
                      </div>
                      <div className="p-space-xs">
                        <div className="font-title-md text-title-md text-secondary-fixed">
                          Zero
                        </div>
                        <div className="font-label-sm text-label-sm text-on-tertiary-container text-[10px] leading-tight">
                          PHI Exposure
                        </div>
                      </div>
                    </div>
                    {/* Simulated Clinical Security Diagnostics */}
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between p-space-sm rounded bg-tertiary text-on-tertiary text-label-md font-label-md">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                            badge
                          </span>
                          <span>
                            Clinical RBAC Segregation
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-secondary-fixed text-label-sm font-label-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          {" Passed "}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-space-sm rounded bg-tertiary text-on-tertiary text-label-md font-label-md">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                            lock
                          </span>
                          <span>
                            Encryption at Rest (AES-256)
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-secondary-fixed text-label-sm font-label-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          {" Verified "}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-space-sm rounded bg-tertiary text-on-tertiary text-label-md font-label-md">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                            contract_edit
                          </span>
                          <span>
                            Patient Consent Ledger
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-secondary-fixed text-label-sm font-label-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          {" Compliant "}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-space-sm rounded bg-tertiary text-on-tertiary text-label-md font-label-md">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                            history
                          </span>
                          <span>
                            Immutable Audit Log (7-Yr)
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-secondary-fixed text-label-sm font-label-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          {" Retained "}
                        </span>
                      </div>
                    </div>
                    {/* Footer indicator in card */}
                    <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-primary-container font-label-sm text-label-sm">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                          network_ping
                        </span>
                        {" Clinical API Telemetry Live "}
                      </span>
                      <span className="text-secondary-fixed">
                        Nairobi Node 01
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 2. VALUE CALLOUT / PROBLEM STATEMENT SECTION */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
            <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  health_and_safety
                </span>
                <span>
                  The Clinical Imperative
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {" Health data is sensitive. Trust must be earned. "}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                {" Patients, clinicians, regulators, and procurement teams need evidence that an EMR, telemedicine platform, health API, or mobile app is built securely and can operate reliably in a clinical environment. A breach in health systems erodes patient confidence and disrupts care — security assurance is no longer optional. "}
              </p>
              {/* Trust Indicator Badges Strip */}
              <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-sm">
                <div className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    security
                  </span>
                  <span>
                    Clinical Data Protection
                  </span>
                </div>
                <div className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    local_hospital
                  </span>
                  <span>
                    {"Ministry & County EMR Readiness"}
                  </span>
                </div>
                <div className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    gavel
                  </span>
                  <span>
                    Kenya DPA 2019 Admissibility
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 3. "WHO WE SERVE" SECTION */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              {/* Section Header */}
              <div className="max-w-2xl space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  <span>
                    Who we serve
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" Built for every stage of digital health "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Tailored security postures addressing the distinct obligations of innovators, care providers, and health ministries. "}
                </p>
              </div>
              {/* 4 Balanced Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Card 1: Health-tech vendors */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">
                        devices
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">
                        Health-tech vendors
                      </h3>
                      <p className="font-label-md text-label-md text-secondary font-semibold mt-1">
                        Prove your platform is secure
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" You have built an EMR, telemedicine app, lab system, or health API. Buyers and regulators want assurance before procurement. We help you demonstrate security and privacy readiness — so you can sell with confidence. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      {" Procurement Readiness "}
                    </span>
                  </div>
                </div>
                {/* Card 2: Hospitals & clinics */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">
                        local_hospital
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">
                        {"Hospitals & clinics"}
                      </h3>
                      <p className="font-label-md text-label-md text-secondary font-semibold mt-1">
                        Protect the systems your staff rely on
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" You run clinical systems that hold patient records, lab results, and billing data. We help you understand your security posture, close gaps, and align with Kenya's Data Protection Act. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      {" Clinical Data Protection "}
                    </span>
                  </div>
                </div>
                {/* Card 3: Public health programmes */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">
                        public
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">
                        Public health programmes
                      </h3>
                      <p className="font-label-md text-label-md text-secondary font-semibold mt-1">
                        Scale digital health with confidence
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" National registries, HMIS deployments, and cross-facility data exchange need security built in from day one — not bolted on after a breach. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      {" National Scalability "}
                    </span>
                  </div>
                </div>
                {/* Card 4: Developers & integrators */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">
                        integration_instructions
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">
                        {"Developers & integrators"}
                      </h3>
                      <p className="font-label-md text-label-md text-secondary font-semibold mt-1">
                        Build secure from the start
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" If you integrate with FHIR APIs, cloud services, or third-party health platforms, we help you validate configurations, access controls, and data flows before go-live. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      {" FHIR & API Hardening "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 4. "WHAT WE OFFER" SECTION (6 Numbered Cards) */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              {/* Section Header */}
              <div className="max-w-2xl space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  <span>
                    What we offer
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" End-to-end health security assurance "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Six focused assurance services designed specifically for digital health platforms operating in regulated East African healthcare environments. "}
                </p>
              </div>
              {/* 6 Numbered Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* 01 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-sm">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      01
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Security & Privacy Assessment"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" A structured review of your platform's security controls, data handling practices, and privacy alignment — tailored to how your system is deployed. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: Health-tech vendors preparing for procurement or scale-up. "}
                    </span>
                  </div>
                </div>
                {/* 02 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      02
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Cloud & Infrastructure Security Review"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Validation of hosting and configuration — access controls, encryption, network boundaries, backup, and shared-responsibility alignment. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: SaaS health platforms and API-first products. "}
                    </span>
                  </div>
                </div>
                {/* 03 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      03
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Application & API Security Testing"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Hands-on testing of web apps, mobile apps, and APIs — authentication, authorisation, session management, and data exposure. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: Telemedicine apps, patient portals, and health APIs. "}
                    </span>
                  </div>
                </div>
                {/* 04 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      04
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Privacy & Data Protection Alignment"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Review of consent flows, data retention, access logging, breach readiness, and alignment with the Kenya Data Protection Act 2019. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: Any platform processing identifiable patient or health data. "}
                    </span>
                  </div>
                </div>
                {/* 05 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      05
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Clinical Workflow & Access Review"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Assessment of role-based access, clinical user journeys, and data segregation — ensuring the right people see the right data. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: EMRs, hospital systems, and multi-facility deployments. "}
                    </span>
                  </div>
                </div>
                {/* 06 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      06
                    </span>
                    <h3 className="font-title-md text-title-md text-primary">
                      Ongoing Security Monitoring (advisory)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Post-assessment advisory, re-testing schedules, and security posture tracking as your platform evolves. "}
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="inline-block p-space-xs px-space-sm rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">
                      {" Best for: Vendors and programmes with active development roadmaps. "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 5. "HOW IT WORKS" SECTION (5 Step Sequence) */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  <span>
                    How it works
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" From discovery to ongoing assurance "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" A predictable, transparent engagement model engineered to minimize disruption to active clinical workflows and engineering sprints. "}
                </p>
              </div>
              {/* 5-Step Process Sequence */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md relative">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm flex flex-col justify-between relative">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
                      {" 1 "}
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      Discovery call
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" We learn about your platform — what it does, who uses it, how it is deployed, and what assurance you need. "}
                    </p>
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-semibold pt-space-xs">
                    Step 1
                  </span>
                </div>
                {/* Step 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm flex flex-col justify-between relative">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
                      {" 2 "}
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      Scoping
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Together we define scope — which environments, integrations, and security areas matter most. "}
                    </p>
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-semibold pt-space-xs">
                    Step 2
                  </span>
                </div>
                {/* Step 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm flex flex-col justify-between relative">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
                      {" 3 "}
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Assessment & testing"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Our team conducts the agreed review. For laboratory-grade testing, we work with IntelliSOFT and accredited partners. "}
                    </p>
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-semibold pt-space-xs">
                    Step 3
                  </span>
                </div>
                {/* Step 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm flex flex-col justify-between relative">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
                      {" 4 "}
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Findings & remediation"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" You receive a clear, prioritised report with practical guidance on what matters and what blocks go-live. "}
                    </p>
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-semibold pt-space-xs">
                    Step 4
                  </span>
                </div>
                {/* Step 5 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm flex flex-col justify-between relative">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
                      {" 5 "}
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Re-test & assurance"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" After fixes, we can re-test to confirm closure and offer ongoing advisory for long-running programmes. "}
                    </p>
                  </div>
                  <span className="text-secondary font-label-sm text-label-sm font-semibold pt-space-xs">
                    Step 5
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 6. PARTNERSHIP SPOTLIGHT: IntelliSOFT Strategic Alliance */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              <div className="bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary-fixed opacity-10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-space-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
                    <div className="lg:col-span-6 space-y-space-md">
                      <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          policy
                        </span>
                        <span>
                          {"Digital Health Act No. 15 of 2023 & Architecture"}
                        </span>
                      </div>
                      <h2 className="font-headline-lg text-headline-lg text-on-primary">
                        {"Kenya National Digital Health Architecture & Enterprise Assurance"}
                      </h2>
                      <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                        In full alignment with Kenya's Digital Health Act (No. 15 of 2023) and MoH enterprise blueprints, RCFI and IntelliSOFT Consulting provide joint clinical informatics validation, ensuring EMRs, county registries, and health-tech platforms meet statutory interoperability and sovereign data regulations.
                      </p>
                      <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
                        <span className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                          Digital Health Act 2023 Compliant
                        </span>
                        <span className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                          HL7 FHIR Release 4
                        </span>
                        <span className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                          OpenHIE Reference Framework
                        </span>
                        <span className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                          Kenya DPA 2019 Admissible
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-6">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-tertiary-container">
                        <img alt="African digital health specialists, clinical informatics engineers and doctors in modern lab looking at tablet and wall-mounted health registry dashboard displaying HL7 FHIR clinical data" className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XpMdDQSxRaplsBVZaVBAiGEouMNBZA17HWxTiyiI9wv8NSZIp1rOvB7PeReaZbeORViZWMrOogXFQhiVOO8seY4In92sBReuOz0QaXYtQ41HMav0_DnJnwRKOtt7aqy1Yzq2iVdzkGYQXYPv-lp0Z01Woo0quMh7AJEp2eRt2Dvs7-Zw8elXHyIMNZvA3cf5GA5ry9IMZX6Tl7MK5cy48g4gTwIl6H4zobR5su2acVQuMNXRPEe6yroRM" />
                        <div className="absolute bottom-3 left-3 right-3 bg-primary/90 backdrop-blur-md rounded-lg p-space-sm border border-tertiary-container flex items-center justify-between text-on-primary">
                          <div className="flex items-center gap-space-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse" />
                            <span className="font-label-sm text-label-sm font-semibold text-secondary-fixed">
                              {"IntelliSOFT & RCFI Joint Health Interoperability Lab · Nairobi"}
                            </span>
                          </div>
                          <span className="hidden sm:inline-block px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed text-[10px] font-label-sm uppercase tracking-wider">
                            Active R4 Rig
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md border-t border-tertiary-container space-y-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                      <div>
                        <h3 className="font-title-md text-title-md text-on-primary flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                            schema
                          </span>
                          <span>
                            {"OpenHIE & FHIR Enterprise Component Explorer"}
                          </span>
                        </h3>
                        <p className="font-label-md text-label-md text-on-primary-container mt-1">
                          Interactive clinical information exchange layer verification for national and county deployments
                        </p>
                      </div>
                      <span className="text-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          sync
                        </span>
                        {" Real-Time Registry Sync"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
                      <div className="bg-tertiary-container/80 p-space-md rounded-lg border border-secondary/30 flex flex-col justify-between space-y-space-sm hover:bg-tertiary-container transition-all">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                              person_search
                            </span>
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          </div>
                          <h4 className="font-label-md text-label-md font-semibold text-on-primary">
                            Client Registry (CR)
                          </h4>
                          <p className="font-label-sm text-label-sm text-on-primary-container">
                            Enterprise Master Patient Index (EMPI) linking national IDs and universal health coverage numbers.
                          </p>
                        </div>
                        <span className="text-[10px] font-label-sm text-secondary-fixed uppercase tracking-wider">
                          FHIR Patient Resource
                        </span>
                      </div>
                      <div className="bg-tertiary-container/80 p-space-md rounded-lg border border-secondary/30 flex flex-col justify-between space-y-space-sm hover:bg-tertiary-container transition-all">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                              domain
                            </span>
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          </div>
                          <h4 className="font-label-md text-label-md font-semibold text-on-primary">
                            Facility Registry (FR)
                          </h4>
                          <p className="font-label-sm text-label-sm text-on-primary-container">
                            Kenya Master Health Facility List (KMHFL) code synchronization and accreditation validation.
                          </p>
                        </div>
                        <span className="text-[10px] font-label-sm text-secondary-fixed uppercase tracking-wider">
                          FHIR Location / Org
                        </span>
                      </div>
                      <div className="bg-tertiary-container/80 p-space-md rounded-lg border border-secondary/30 flex flex-col justify-between space-y-space-sm hover:bg-tertiary-container transition-all">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                              receipt_long
                            </span>
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          </div>
                          <h4 className="font-label-md text-label-md font-semibold text-on-primary">
                            Shared Health Record
                          </h4>
                          <p className="font-label-sm text-label-sm text-on-primary-container">
                            Longitudinal patient encounter repository with granular clinical RBAC and patient consent gates.
                          </p>
                        </div>
                        <span className="text-[10px] font-label-sm text-secondary-fixed uppercase tracking-wider">
                          {"FHIR Composition & Obs"}
                        </span>
                      </div>
                      <div className="bg-tertiary-container/80 p-space-md rounded-lg border border-secondary/30 flex flex-col justify-between space-y-space-sm hover:bg-tertiary-container transition-all">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                              spellcheck
                            </span>
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          </div>
                          <h4 className="font-label-md text-label-md font-semibold text-on-primary">
                            Terminology Services
                          </h4>
                          <p className="font-label-sm text-label-sm text-on-primary-container">
                            Standardized clinical mapping across ICD-11, SNOMED CT, LOINC, and Kenya MoH diagnostic lists.
                          </p>
                        </div>
                        <span className="text-[10px] font-label-sm text-secondary-fixed uppercase tracking-wider">
                          {"FHIR ConceptMap & VS"}
                        </span>
                      </div>
                      <div className="bg-tertiary-container/80 p-space-md rounded-lg border border-secondary/30 flex flex-col justify-between space-y-space-sm hover:bg-tertiary-container transition-all">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                              share
                            </span>
                            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                          </div>
                          <h4 className="font-label-md text-label-md font-semibold text-on-primary">
                            Interoperability Layer
                          </h4>
                          <p className="font-label-sm text-label-sm text-on-primary-container">
                            OpenHIM routing bus orchestrating encrypted clinical transactions between EMRs and cloud registries.
                          </p>
                        </div>
                        <span className="text-[10px] font-label-sm text-secondary-fixed uppercase tracking-wider">
                          OpenHIM API Mediator
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md border-t border-tertiary-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                      <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border border-tertiary-container">
                          <img alt="Ultra-modern sovereign data center interior in Nairobi, server racks with subtle emerald green and cyan LED lights" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex items-end p-space-md">
                            <div className="space-y-1">
                              <div className="flex items-center gap-space-xs text-secondary-fixed font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[16px]">
                                  dns
                                </span>
                                <span>
                                  Nairobi Tier-3 Sovereign Data Facility
                                </span>
                              </div>
                              <p className="text-[11px] text-on-primary-container">
                                {"Hardware Security Modules (HSM) & CAK Root of Trust"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-7 order-1 lg:order-2 space-y-space-md">
                        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px]">
                            key
                          </span>
                          <span>
                            Sovereign Cryptographic Trust Layer
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-primary">
                          {"Anchored to Kenya's National PKI & Licensed ECSP Authority"}
                        </h3>
                        <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                          Through RCFI's licensed Electronic Certification Service Provider (ECSP) infrastructure under the Communications Authority of Kenya (CAK), every health transaction, electronic prescription, and laboratory attestation is cryptographically signed with X.509 certificates and timestamped in Nairobi sovereign data enclaves. This guarantees non-repudiation, tamper-evident audit trails, and strict compliance with the Kenya Data Protection Act 2019.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                          <div className="bg-tertiary-container p-space-sm rounded-lg flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              verified
                            </span>
                            <div className="font-label-sm text-label-sm text-on-primary font-semibold">
                              National PKI Anchored
                            </div>
                          </div>
                          <div className="bg-tertiary-container p-space-sm rounded-lg flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              encrypted
                            </span>
                            <div className="font-label-sm text-label-sm text-on-primary font-semibold">
                              FIPS 140-2 Level 3 HSM
                            </div>
                          </div>
                          <div className="bg-tertiary-container p-space-sm rounded-lg flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                              security
                            </span>
                            <div className="font-label-sm text-label-sm text-on-primary font-semibold">
                              Zero-Trust Architecture
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 7. FAQ SECTION */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              {/* Section Header */}
              <div className="text-center space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  <span>
                    FAQ
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" Common questions "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Answers to technical, regulatory, and engagement questions regarding our clinical assurance framework. "}
                </p>
              </div>
              {/* Accordion Questions Container */}
              <div className="space-y-space-sm" id="faq-accordion">
                {/* FAQ 1 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden faq-item">
                  <button className="w-full text-left p-space-lg flex items-center justify-between gap-space-md focus:outline-none cursor-pointer faq-trigger" type="button">
                    <span className="font-title-md text-title-md text-primary">
                      Who is this service for?
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-none hidden faq-content">
                    {" Designed for health-tech startups, EMR vendors, hospitals, national health programs, and digital health integrators requiring regulatory compliance and procurement clearance. "}
                  </div>
                </div>
                {/* FAQ 2 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden faq-item">
                  <button className="w-full text-left p-space-lg flex items-center justify-between gap-space-md focus:outline-none cursor-pointer faq-trigger" type="button">
                    <span className="font-title-md text-title-md text-primary">
                      Do you replace our own security team?
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-none hidden faq-content">
                    {" No, we act as an independent assurance and validation partner, providing external auditing, penetration testing, and regulatory alignment to supplement your internal engineering or security team. "}
                  </div>
                </div>
                {/* FAQ 3 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden faq-item">
                  <button className="w-full text-left p-space-lg flex items-center justify-between gap-space-md focus:outline-none cursor-pointer faq-trigger" type="button">
                    <span className="font-title-md text-title-md text-primary">
                      What types of systems do you assess?
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-none hidden faq-content">
                    {" EMRs (Electronic Medical Records), telemedicine platforms, hospital management systems, laboratory information systems, mobile health apps, and digital health APIs. "}
                  </div>
                </div>
                {/* FAQ 4 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden faq-item">
                  <button className="w-full text-left p-space-lg flex items-center justify-between gap-space-md focus:outline-none cursor-pointer faq-trigger" type="button">
                    <span className="font-title-md text-title-md text-primary">
                      How is this different from a generic IT security audit?
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-none hidden faq-content">
                    {" Generic audits miss clinical nuance. We specialize in patient privacy, clinical role-based segregation, health data sovereignty, and interoperability standards like FHIR/HL7. "}
                  </div>
                </div>
                {/* FAQ 5 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden faq-item">
                  <button className="w-full text-left p-space-lg flex items-center justify-between gap-space-md focus:outline-none cursor-pointer faq-trigger" type="button">
                    <span className="font-title-md text-title-md text-primary">
                      Do you work with startups as well as large programmes?
                    </span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-none hidden faq-content">
                    {" Yes, we provide tailored scoping ranging from pre-launch security validation for early-stage health-tech startups to multi-county national health infrastructure audits. "}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================================= */}
          {/* 8. CLOSING CONVERSION BANNER */}
          {/* ========================================================================= */}
          <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="bg-primary text-on-primary rounded-xl p-space-xl lg:p-20 text-center shadow-xl relative overflow-hidden space-y-space-md">
                {/* Ambient Grid Graphic */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <defs>
                      {" "}
                      <pattern height="40" id="footer-grid" patternUnits="userSpaceOnUse" width="40">
                        {" "}
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6ffbbe" strokeWidth="0.5" />
                        {" "}
                      </pattern>
                      {" "}
                    </defs>
                    {" "}
                    <rect fill="url(#footer-grid)" height="100%" width="100%" />
                    {" "}
                  </svg>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto space-y-space-md">
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    {" Ready to secure your health platform? "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-primary-container">
                    {" Whether you are preparing for procurement, responding to a regulator, or want to know your platform is safe — talk to the RCFI team. "}
                  </p>
                  {/* Dual CTAs */}
                  <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
                    <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md transition-all shadow-md" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_today
                      </span>
                      <span>
                        Book a Meeting
                      </span>
                    </a>
                    <Link className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-label-md transition-all" data-path="contact" href="/contact/">
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                      <span>
                        Send a message
                      </span>
                    </Link>
                  </div>
                  {/* Reassurance Footer Notes */}
                  <div className="pt-space-md text-on-primary-container font-label-sm text-label-sm flex flex-wrap items-center justify-center gap-space-sm">
                    <span>
                      Compliant with Kenya DPA 2019
                    </span>
                    <span>
                      •
                    </span>
                    <span>
                      CAK Licensed
                    </span>
                    <span>
                      •
                    </span>
                    <span>
                      {"Confidential & NDA Protected"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-tertiary text-on-tertiary">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-space-xl">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    hub
                  </span>
                </div>
                <span className="font-title-md text-title-md text-on-tertiary">
                  RCFI
                </span>
              </div>
              <p className="font-label-md text-label-md text-on-tertiary-container">
                Reprodrive Center for Innovation Limited
              </p>
              <p className="font-body-md text-body-md text-outline-variant">
                Digital signatures, PKI as a Service, e-KYC, governance and business management software — serving Nairobi, Kenya, East Africa, and Africa.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <a aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary hover:text-secondary-fixed hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>
                </a>
                <a aria-label="X" className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary hover:text-secondary-fixed hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    tag
                  </span>
                </a>
                <a aria-label="Facebook" className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary hover:text-secondary-fixed hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    public
                  </span>
                </a>
                <a aria-label="Instagram" className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary hover:text-secondary-fixed hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    photo_camera
                  </span>
                </a>
                <a aria-label="YouTube" className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary hover:text-secondary-fixed hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    smart_display
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-space-md">
              <h3 className="font-title-md text-title-md text-on-tertiary border-b border-tertiary-container pb-space-xs">
                Products
              </h3>
              <ul className="space-y-space-sm font-body-md text-body-md text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs" data-path="certysign" href="/products/certysign/">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">
                      verified_user
                    </span>
                    CertySign
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs" data-path="elano" href="/products/elano/">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">
                      folder_managed
                    </span>
                    Elano
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs" data-path="prezio" href="/products/prezio/">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">
                      security
                    </span>
                    Prezio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h3 className="font-title-md text-title-md text-on-tertiary border-b border-tertiary-container pb-space-xs">
                Company
              </h3>
              <ul className="space-y-space-sm font-body-md text-body-md text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="updates" href="/insights/">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h3 className="font-title-md text-title-md text-on-tertiary border-b border-tertiary-container pb-space-xs">
                Contact
              </h3>
              <div className="space-y-space-sm font-body-md text-body-md text-outline-variant">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim shrink-0 mt-1">
                    location_on
                  </span>
                  <span>
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim shrink-0">
                    mail
                  </span>
                  <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-tertiary-container py-space-md">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline-variant text-center md:text-left">
            <span>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center justify-center gap-space-sm text-on-tertiary-container">
              <span>
                • ISO 27001 Certified
              </span>
              <span>
                • CAK Licensed
              </span>
              <span>
                • Kenya DPA Compliant
              </span>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
