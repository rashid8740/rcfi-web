import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/services-digital-health-governance/page.css";
import "@/styles/pages/services-digital-health-governance/late.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Digital Health Governance | RCFI Technology" };

export default function ServicesDigitalHealthGovernancePage() {
  return (
    <div className="rcfi-services-digital-health-governance" style={{ display: "contents" }}>
      <svg className="inline-defs-container" aria-hidden="true" style={{ "position": "absolute", "width": "0", "height": "0", "overflow": "hidden" }} />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary-container text-on-primary border-b border-on-primary-container/20">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  call
                </span>
                <span>
                  +254 (0) 20 283 9200
                </span>
              </span>
              <span className="text-on-primary-container/50">
                |
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  mail
                </span>
                <span>
                  info@rcfi.co.ke
                </span>
              </span>
              <span className="hidden lg:inline text-on-primary-container/50">
                |
              </span>
              <div className="hidden lg:flex items-center gap-space-xs bg-primary/40 px-2 py-0.5 rounded">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-secondary-fixed font-semibold tracking-wider uppercase">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-on-primary-container/50">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <nav className="bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-active-classes="bg-primary-container text-on-primary">
          <div className="max-w-7xl mx-auto px-margin h-20 flex items-center justify-between">
            <Link className="flex items-center gap-space-sm" data-path="home" href="/">
              <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
              <div className="hidden sm:flex flex-col">
                <span className="font-title-md text-title-md leading-tight text-primary font-bold tracking-tight">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-normal leading-none">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </Link>
            <div className="hidden xl:flex items-center gap-space-md font-body-md text-body-md">
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="services" href="/services/">
                  Services
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-72">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                  <Link aria-current="page" className="block px-space-sm py-2 rounded bg-primary-container text-on-primary" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    {"Digital Health Governance & Standards"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="products" href="/products/certysign/">
                  Products
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-60">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-72">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-semibold" data-path="academy" href="/academy/">
                    Academy Overview
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-health-interoperability" href="/academy/digital-health-interoperability/">
                    Digital Health Interoperability
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-trust-cyber" href="/academy/digital-trust-cyber/">
                    {"Digital Trust & Cyber Defence"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="applied-data-ai" href="/academy/applied-data-ai/">
                    {"Applied Data & AI"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="modern-engineering" href="/academy/modern-engineering/">
                    Modern Engineering
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="executive-briefings" href="/academy/executive-briefings/">
                    Executive Briefings
                  </Link>
                </div>
              </div>
              <PartnersNavMenu className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" wrapperClassName="py-6" />
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="insights" href="/insights/">
                  Insights
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-64">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="insights" href="/insights/">
                    The Trust Layer
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="impact-stories" href="/impact/">
                    Impact Stories
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="knowledge-hub" href="/insights/">
                    Knowledge Hub
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="sovereignty-series" href="/insights/">
                    The Sovereignty Series
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="newsroom" href="/insights/">
                    Newsroom
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="about" href="/about/">
                  Company
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-56">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="about" href="/about/">
                    About RCFI
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="ecosystem" href="/ecosystem/">
                    Ecosystem
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="careers" href="/careers/">
                    Careers
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </div>
              </div>
              <Link className="bg-surface-container-low text-secondary font-label-md text-label-md px-3 py-1.5 rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors" data-path="verify-document" href="/verify/">
                Verify a Document
              </Link>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-container hover:text-on-primary transition-all duration-200" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-full pt-[120px] bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <section className="relative w-full bg-primary text-on-primary py-space-xl overflow-hidden">
            {/* Subtle architectural ambient node background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="health-grid" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path className="text-secondary-fixed" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    {" "}
                    <circle className="text-secondary-fixed" cx="24" cy="24" fill="currentColor" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#health-grid)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-margin">
              {/* Breadcrumb / Eyebrow Navigation */}
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-fixed mb-space-md tracking-wider uppercase">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed" />
                <span>
                  {"// PRACTICE 03 // GLOBAL HEALTH STANDARDS & INTEROPERABILITY"}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Hero Left Column: Core Value Proposition */}
                <div className="lg:col-span-7 flex flex-col">
                  <h1 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight mb-space-md">
                    {" Digital Health Governance, Standards & Interoperability "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed mb-space-lg max-w-2xl leading-relaxed">
                    {" Architecting sovereign national health data exchange backbones, HL7® FHIR® profiles, OpenHIE interoperability layers, and statutory compliance for Kenya Digital Health Act 2023 and Africa CDC health information systems. "}
                  </p>
                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md mb-space-lg">
                    <a className="bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-md text-label-md px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-space-xs shadow-md" href="#advisory-intake">
                      <span>
                        Request Interoperability Advisory
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="bg-primary-container text-on-primary hover:bg-surface-container-lowest/10 font-label-md text-label-md px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-space-xs" href="#architecture-blueprint">
                      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                        account_tree
                      </span>
                      <span>
                        Explore Reference Architecture
                      </span>
                    </a>
                  </div>
                  {/* Regulatory & Standards Compliance Badges */}
                  <div className="flex flex-wrap items-center gap-space-xs pt-space-xs border-t border-primary-container/40">
                    <span className="bg-primary-container/70 text-secondary-fixed text-label-sm font-label-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        verified_user
                      </span>
                      {" Kenya DHA 2023 Compliant "}
                    </span>
                    <span className="bg-primary-container/70 text-secondary-fixed text-label-sm font-label-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        integration_instructions
                      </span>
                      {" HL7® FHIR® R4 / R5 "}
                    </span>
                    <span className="bg-primary-container/70 text-secondary-fixed text-label-sm font-label-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        hub
                      </span>
                      {" OpenHIE Tier-1 Architected "}
                    </span>
                    <span className="bg-primary-container/70 text-secondary-fixed text-label-sm font-label-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        public
                      </span>
                      {" WHO GDHCN Aligned "}
                    </span>
                  </div>
                </div>
                {/* Hero Right Column: Telemetry Visual & Field Team Photography */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  {/* Live Telemetry Card */}
                  <div className="bg-surface-container-lowest text-on-surface rounded-xl p-space-md shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim animate-pulse" />
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                          Live Interoperability Telemetry
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
                        e-CSP Verified
                      </span>
                    </div>
                    {/* Metrics Stack */}
                    <div className="space-y-space-sm font-body-md text-body-md">
                      <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            lan
                          </span>
                          <span className="text-on-surface font-medium text-label-md font-label-md">
                            Health Registry Bridge
                          </span>
                        </div>
                        <span className="text-secondary font-semibold text-label-md font-label-md">
                          47 Counties Connected
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            lock
                          </span>
                          <span className="text-on-surface font-medium text-label-md font-label-md">
                            Transaction Protocol
                          </span>
                        </div>
                        <span className="text-primary font-semibold text-label-md font-label-md">
                          HL7 FHIR / mTLS X.509
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            fingerprint
                          </span>
                          <span className="text-on-surface font-medium text-label-md font-label-md">
                            National Client Registry UPI Match
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-secondary font-bold text-label-md font-label-md">
                            99.98%
                          </span>
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            check_circle
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            policy
                          </span>
                          <span className="text-on-surface font-medium text-label-md font-label-md">
                            Kenya DHA Section 48
                          </span>
                        </div>
                        <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-2 py-0.5 rounded font-bold">
                          Sovereign Containment
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Visual Real-World Clinical Informatics Team Badge */}
                  <div className="bg-primary-container/60 rounded-xl p-space-sm flex items-center gap-space-sm">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img className="w-full h-full object-cover" data-alt="Close up portrait of a Kenyan clinical informatics specialist and a healthcare data governance expert reviewing an electronic health record HL7 FHIR mapping interface in a Nairobi technology laboratory, warm natural lighting, professional high contrast corporate aesthetic with forest green tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKi9kwKDkHhHC0LZVagzwFNznB8CZiSkqmEiLHRolZn7unhvCraSD7UxLt1sfnb-lrNZJwb7H856ncVOUTqAMRL8OS774G7WCSNZ3NsqSbp7gNYG2uQ5WO5qfxp6Rpbt72DMVKR9eizHQ-q7CdpxfZM3l-kBZ04vVKte2qRJ3ViNAI16O3QLMpwvnr22Q-5fb9XlqbuDDjXA0byHNj0eCg3l7Yt16rN4JQAgZT_4rVlyz6caRq2Bba" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-primary font-semibold">
                        Field Informatics Lab // Nairobi
                      </span>
                      <p className="font-label-sm text-label-sm text-tertiary-fixed leading-tight">
                        Accredited by CAK and aligned with Ministry of Health Interoperability Framework (KeHIF).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: CORE CAPABILITY PILLARS (Pathways Card Grid) */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
                <div className="max-w-2xl">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-space-xs">
                    {"Technical Competency & Governance Stack"}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                    Enterprise Health Architecture Pillars
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
                  {" Engineered to unify disparate hospital management systems, laboratory networks, and mobile community health toolkits across Africa. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Pillar 01 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-bold flex items-center justify-center">
                        01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        code
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                      {"HL7® FHIR® Exchange & Profiling"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Enterprise FHIR server architectures, SMART on FHIR v2 authentication, and custom implementation guides tailored to the Kenya Core Profile. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm border-t border-surface-container">
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      HL7 FHIR R4
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      RESTful API
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      IG Authoring
                    </span>
                  </div>
                </div>
                {/* Pillar 02 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-bold flex items-center justify-center">
                        02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        hub
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                      OpenHIE National Architecture
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Point-to-point and shared health record (SHR) pipelines connecting EMRs (KenyaEMR, OpenMRS), health facility registries (KMFL), and client registries. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm border-t border-surface-container">
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      OpenHIE
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      IOL Layer
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      Registry Fed
                    </span>
                  </div>
                </div>
                {/* Pillar 03 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-bold flex items-center justify-center">
                        03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        gavel
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                      Statutory Health Governance
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Advisory and legal architecture for health data custody, cross-border health data restrictions, patient consent models, and data protection impact assessments. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm border-t border-surface-container">
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      Kenya DHA 2023
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      DPA Sec 48
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      Audit Ready
                    </span>
                  </div>
                </div>
                {/* Pillar 04 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-bold flex items-center justify-center">
                        04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        fact_check
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                      Clinical Data Conformance
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Automated sandbox testing for health-tech vendors seeking certification to connect to national health data switches and SHA/NHIF payment gateways. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm border-t border-surface-container">
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      ISO 27799
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      FHIR Validator
                    </span>
                    <span className="bg-surface-container-low text-on-surface text-label-sm font-label-sm px-2.5 py-1 rounded">
                      Cryptographic e-Seal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: INTEROPERABILITY ARCHITECTURE BLUEPRINT (Interactive Pipeline) */}
          <section className="w-full bg-surface-container-low py-space-xl" id="architecture-blueprint">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  End-to-End Information Flow
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight mt-1 mb-space-xs">
                  {" National Health Interoperability Architecture Blueprint "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Bridging sub-national clinical encounters with sovereign registries under cryptographic assurance and strict statutory privacy fences. "}
                </p>
              </div>
              {/* Flow Pipeline: 4 connected stages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
                {/* Stage 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm font-bold text-secondary bg-surface-container-low px-2 py-1 rounded">
                        Stage 01
                      </span>
                      <span className="material-symbols-outlined text-secondary">
                        local_hospital
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mb-2">
                      Point of Care
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                      {" Level 2 through Level 6 health facilities, county clinics, diagnostic labs, and mobile Community Health Promoters (eCHIS). "}
                    </p>
                    <ul className="font-label-md text-label-md text-on-surface-variant space-y-1.5 mb-space-md">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {"KenyaEMR & OpenMRS"}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        LIS / RIS Tele-imaging
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Smart Card Terminal Readers
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-lg text-label-sm font-label-sm text-on-surface font-mono">
                    {" Payload: JSON / FHIR Bundle "}
                  </div>
                </div>
                {/* Stage 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm font-bold text-secondary bg-surface-container-low px-2 py-1 rounded">
                        Stage 02
                      </span>
                      <span className="material-symbols-outlined text-secondary">
                        alt_route
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mb-2">
                      Interoperability Layer
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                      {" OpenHIE Interoperability Layer (IOL), mediating orchestrations, terminology mediation, and protocol normalizing. "}
                    </p>
                    <ul className="font-label-md text-label-md text-on-surface-variant space-y-1.5 mb-space-md">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        OpenHIM Mediation Engine
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        ICD-11 / SNOMED CT Mapping
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        FHIR Converter Microservices
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-lg text-label-sm font-label-sm text-on-surface font-mono">
                    {" Protocol: REST mTLS / HL7 R4 "}
                  </div>
                </div>
                {/* Stage 3 */}
                <div className="bg-primary-container text-on-primary p-space-md rounded-xl shadow-md flex flex-col justify-between relative group">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm font-bold text-secondary-fixed bg-primary/60 px-2 py-1 rounded">
                        Stage 03
                      </span>
                      <span className="material-symbols-outlined text-secondary-fixed">
                        shield_locked
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-2">
                      {"Sovereign Trust & Security"}
                    </h4>
                    <p className="font-body-md text-body-md text-tertiary-fixed mb-space-sm">
                      {" RCFI Root CA accredited e-Seals, biometric deduplication tokens, and automated Kenya DHA Section 48 boundary checks. "}
                    </p>
                    <ul className="font-label-md text-label-md text-tertiary-fixed space-y-1.5 mb-space-md">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                        Licensed ECSP Digital Signatures
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                        Cryptographic Consent Assertion
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                        ISO 27799 Tamper-Proof Audit Trail
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary p-2.5 rounded-lg text-label-sm font-label-sm text-secondary-fixed font-mono">
                    {" Sec: CAK TL/E-CSP 00014 Verified "}
                  </div>
                </div>
                {/* Stage 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-sm text-label-sm font-bold text-secondary bg-surface-container-low px-2 py-1 rounded">
                        Stage 04
                      </span>
                      <span className="material-symbols-outlined text-secondary">
                        database
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-semibold mb-2">
                      National Repositories
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                      {" Sovereign cloud federated databases housing authoritative national public health indices and payment switch conduits. "}
                    </p>
                    <ul className="font-label-md text-label-md text-on-surface-variant space-y-1.5 mb-space-md">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Shared Health Record (SHR)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Client Registry (Unique Personal ID)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Master Facility Registry (KMFL)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-lg text-label-sm font-label-sm text-on-surface font-mono">
                    {" Storage: Sovereign On-Soil Cloud "}
                  </div>
                </div>
              </div>
              {/* Real-time Interactive Verification Console Demo */}
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">
                      terminal
                    </span>
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      FHIR JSON Profile Validation Sandbox
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Profile: "}
                      <strong>
                        KE-Core-Patient-v1.2
                      </strong>
                    </span>
                    <button className="bg-secondary text-on-secondary font-label-sm text-label-sm px-3 py-1.5 rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors" id="run-validation-btn">
                      {" Run Validator "}
                    </button>
                  </div>
                </div>
                <div className="mt-space-sm grid grid-cols-1 lg:grid-cols-2 gap-space-md">
                  <div className="bg-tertiary text-secondary-fixed p-space-sm rounded-lg font-mono text-label-sm overflow-x-auto">
                    <pre>
                      <code>
                        {"{\n  \"resourceType\": \"Patient\",\n  \"id\": \"ke-upi-08492049\",\n  \"meta\": {\n    \"profile\": [\"http://fhir.health.go.ke/StructureDefinition/ke-patient\"]\n  },\n  \"identifier\": [{\n    \"system\": \"urn:oid:2.16.404.1\",\n    \"value\": \"UPI-8849-NAIROBI\"\n  }],\n  \"active\": true,\n  \"telecom\": [{ \"system\": \"phone\", \"value\": \"+254700000000\" }]\n}"}
                      </code>
                    </pre>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-md text-label-md font-semibold text-primary">
                          Conformance Status
                        </span>
                        <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-2 py-0.5 rounded font-bold" id="validator-badge">
                          100% VALIDATED
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Patient schema satisfies all required DHA 2023 mandatory attributes: sovereign jurisdiction identifier, explicit consent token reference, and ISO 27799 compliant pseudonymization hashes. "}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-2 border-t border-surface-container">
                      <span>
                        {"ECSP Seal: "}
                        <strong>
                          VALID
                        </strong>
                      </span>
                      <span>
                        {"Timestamp: "}
                        <strong>
                          ISO 8601 UTC
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: REGULATED HEALTH SECTORS SERVED */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-space-xs">
                  Institutional Ecosystem
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                  Regulated Health Sectors Served
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Sector 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-space-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      account_balance
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                    {"Ministries of Health & Agencies"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                    {" Advising the Digital Health Agency (DHA), Public Health Institutes, and national regulators on sovereign interoperability standards. "}
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    National Health Architecture →
                  </span>
                </div>
                {/* Sector 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-space-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      domain
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                    {"Counties & Referral Hospitals"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                    {" Assisting County Health Executives and Level 4, 5 & 6 referral facilities in legacy system integration and SHA billing compliance. "}
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Hospital EMR Federation →
                  </span>
                </div>
                {/* Sector 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-space-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      devices
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                    {"Health-Tech & EMR Vendors"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                    {" Pre-certification testing, FHIR client implementation, and cryptographic document signing modules for healthcare software providers. "}
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Pre-Certification Testing →
                  </span>
                </div>
                {/* Sector 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-space-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      groups
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-semibold mb-space-xs">
                    Development Consortia
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                    {" Strategic technical partner for Africa CDC, WHO Afro, USAID, and global funders implementing interoperable health information networks. "}
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Regional Program Delivery →
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 5: ENGAGEMENT & ADVISORY CALLOUT */}
          <section className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden" id="advisory-intake">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-primary-container rounded-2xl p-space-lg md:p-space-xl shadow-2xl relative overflow-hidden">
                {/* Glow accents */}
                <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                  {/* Callout Copy */}
                  <div className="lg:col-span-6 flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider mb-space-xs">
                      Institutional Engagement Intake
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight mb-space-md">
                      {" Commission a Digital Health Governance & Architecture Audit "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-tertiary-fixed mb-space-md">
                      {" Evaluate your enterprise health information system against Kenya Digital Health Act 2023 mandate, ISO 27799 clinical privacy controls, and HL7 FHIR conformance standards. "}
                    </p>
                    <div className="space-y-space-xs font-body-md text-body-md text-tertiary-fixed">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          check
                        </span>
                        <span>
                          Complete statutory gap assessment with actionable remediation matrix
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          check
                        </span>
                        <span>
                          Architectural roadmap for SHA / NHIF electronic claims integration
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                          check
                        </span>
                        <span>
                          Licensed Electronic Certification Service Provider (ECSP) verification
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Intake Form */}
                  <div className="lg:col-span-6 bg-surface-container-lowest text-on-surface rounded-xl p-space-lg shadow-lg">
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-sm">
                      Schedule Health Advisory
                    </h3>
                    <form className="space-y-space-sm" id="health-intake-form" data-rcfi-onsubmit={"event.preventDefault(); alert('Your advisory request has been submitted to the RCFI Clinical Informatics & Governance Practice.');"}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                            Full Name
                          </label>
                          <input className="w-full h-11 px-3 bg-surface text-on-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-body-md" placeholder="Dr. Faith Mwangi" required type="text" />
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                            Official Email
                          </label>
                          <input className="w-full h-11 px-3 bg-surface text-on-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-body-md" placeholder="faith.mwangi@health.go.ke" required type="email" />
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Organization / Agency
                        </label>
                        <input className="w-full h-11 px-3 bg-surface text-on-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-body-md" placeholder="County Department of Health / Health-Tech Firm" required type="text" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Advisory Focus
                        </label>
                        <select className="w-full h-11 px-3 bg-surface text-on-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-body-md">
                          <option>
                            Kenya Digital Health Act 2023 Conformance Audit
                          </option>
                          <option>
                            {"HL7® FHIR® Implementation & Profiling"}
                          </option>
                          <option>
                            OpenHIE Interoperability Layer Architecture
                          </option>
                          <option>
                            {"Health Data Protection & Cross-Border Sovereignty"}
                          </option>
                          <option>
                            EMR / SHA Payment Gateway Conformance Testing
                          </option>
                        </select>
                      </div>
                      <div className="pt-space-xs">
                        <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-space-xs" type="submit">
                          <span>
                            Schedule Health Advisory
                          </span>
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_month
                          </span>
                        </button>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
                        Protected by RCFI Kenya DPA Registered Custody Framework
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-tertiary text-on-tertiary">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl">
            <div className="lg:col-span-1 flex flex-col gap-space-md">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-tertiary tracking-tight">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-tertiary-container">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-tertiary-container">
                Enterprise-grade digital trust infrastructure, certified cybersecurity, and pan-African institutional systems.
              </p>
              <div className="flex flex-col gap-space-xs font-label-sm text-label-sm text-secondary-fixed">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  CAK Licensed ECSP (TL/E-CSP 00014)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                Products
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="verify-document" href="/verify/">
                    Document Validator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Academy & Insights"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="academy" href="/academy/">
                    RCFI Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="insights" href="/insights/">
                    The Trust Layer
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="impact-stories" href="/impact/">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="knowledge-hub" href="/insights/">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="sovereignty-series" href="/insights/">
                    Sovereignty Series
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="newsroom" href="/insights/">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Trust & Compliance"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                    CA Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                    Trust Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="privacy-policy" href="/privacy/">
                    Kenya DPA Compliance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="cps-cp" href="/trust/">
                    {"CPS & CP Documentation"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="security-advisories" href="/trust/">
                    Security Advisories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-space-md border-t border-on-tertiary-container/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-tertiary-container">
            <span>
              5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
            </span>
            <span>
              © 2026 RCFI - Reprodrive Center for Innovation Limited. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
