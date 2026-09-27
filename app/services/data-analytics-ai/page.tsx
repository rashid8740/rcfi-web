import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/services-data-analytics-ai/page.css";
import "@/styles/pages/services-data-analytics-ai/late.css";

export const metadata: Metadata = { title: "Data, Analytics & AI | RCFI Technology" };

export default function ServicesDataAnalyticsAiPage() {
  return (
    <div className="rcfi-services-data-analytics-ai" style={{ display: "contents" }}>
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
              <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    {"Digital Health Governance & Standards"}
                  </Link>
                  <Link aria-current="page" className="block px-space-sm py-2 rounded bg-primary-container text-on-primary" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
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
          {/* SECTION 1: HERO (Dark Pine Ambient Sovereign Matrix) */}
          <section className="relative bg-[#041f15] text-on-primary overflow-hidden py-space-xl lg:py-24">
            {/* Subtle architectural lattice overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="grid-pattern" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeWidth="0.75" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            {/* Soft glow behind telemetry card */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left: Editorial Content */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 w-fit text-secondary-fixed">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span className="font-label-sm text-label-sm tracking-widest uppercase">
                      // PRACTICE 04 // SOVEREIGN INTELLIGENCE
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight text-balance">
                    {" Data, Analytics & "}
                    <span className="text-secondary-fixed">
                      Sovereign AI
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                    {" From governed telemetry dashboards to deployed sovereign models — turning mission-critical national data into auditable intelligence with rigorous data protection, privacy-preserving computation, and regulatory compliance. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                    <a className="bg-secondary text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-lg shadow-md hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all flex items-center gap-2 group" href="#diagnostic">
                      <span>
                        {"Initiate AI & Data Assessment"}
                      </span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                    <a className="bg-surface-container-lowest/10 text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-lg hover:bg-surface-container-lowest/20 transition-all flex items-center gap-2" href="#capabilities">
                      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                        view_quilt
                      </span>
                      <span>
                        View Practice Capabilities
                      </span>
                    </a>
                  </div>
                  {/* Compliance Badges Ribbon */}
                  <div className="pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-xs text-secondary-fixed font-label-sm text-label-sm">
                    <div className="flex items-center gap-1.5 p-2 rounded bg-surface-container-lowest/5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        verified
                      </span>
                      <span>
                        Kenya DPA 2019
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded bg-surface-container-lowest/5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        dns
                      </span>
                      <span>
                        In-Country Hosting
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded bg-surface-container-lowest/5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        account_tree
                      </span>
                      <span>
                        Traceable Lineage
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded bg-surface-container-lowest/5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                        shield_lock
                      </span>
                      <span>
                        ISO/IEC 42001 Ready
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right: Live Sovereign AI & Data Telemetry Console */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-xl bg-[#082a1d] text-on-primary p-space-md shadow-2xl relative overflow-hidden">
                    {/* Console Header */}
                    <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-lowest/10 mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-secondary-fixed" />
                        <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary-fixed">
                          SOVEREIGN CORE TELEMETRY // NBO-01
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-primary-container font-mono" id="live-clock">
                        18:13:24 UTC+3
                      </span>
                    </div>
                    {/* Console Metrics Stack */}
                    <div className="space-y-space-sm">
                      {/* Metric 1 */}
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest/5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-sm text-label-sm text-on-primary-container">
                            Sovereign Pipeline Route
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">
                            Tier III Sovereign
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-on-primary">
                          <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                            location_on
                          </span>
                          <span>
                            Nairobi Tier III Core
                          </span>
                        </div>
                        <p className="font-label-sm text-label-sm text-on-primary-container/80 mt-1">
                          Air-gapped compute enclosure; zero egress routing
                        </p>
                      </div>
                      {/* Metric 2 */}
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest/5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-sm text-label-sm text-on-primary-container">
                            {"Data Sanitization & Pseudonymization"}
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary-fixed font-mono font-bold">
                            100.0% SECURE
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-primary-container overflow-hidden mb-2">
                          <div className="h-full bg-secondary-fixed rounded-full w-full" />
                        </div>
                        <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary-fixed">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                            {" Zero PII Leakage"}
                          </span>
                          <span className="text-on-primary-container">
                            Sha-256 Masked
                          </span>
                        </div>
                      </div>
                      {/* Metric 3 */}
                      <div className="grid grid-cols-2 gap-space-xs">
                        <div className="p-space-sm rounded-lg bg-surface-container-lowest/5">
                          <span className="font-label-sm text-label-sm text-on-primary-container block">
                            Inference Latency
                          </span>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="font-headline-md text-headline-md text-secondary-fixed font-bold font-mono">
                              14.2
                            </span>
                            <span className="font-label-sm text-label-sm text-on-primary-container">
                              ms
                            </span>
                          </div>
                          <span className="font-label-sm text-label-sm text-secondary-fixed-dim block mt-0.5">
                            {"< 18ms SLA Edge Node"}
                          </span>
                        </div>
                        <div className="p-space-sm rounded-lg bg-surface-container-lowest/5">
                          <span className="font-label-sm text-label-sm text-on-primary-container block">
                            Active Lineage Nodes
                          </span>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="font-headline-md text-headline-md text-on-primary font-bold font-mono">
                              1,842
                            </span>
                            <span className="font-label-sm text-label-sm text-secondary-fixed">
                              vDAGs
                            </span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-primary-container block mt-0.5">
                            dbt/Airflow Verified
                          </span>
                        </div>
                      </div>
                      {/* Metric 4: Audit & Timestamp */}
                      <div className="p-space-sm rounded-lg bg-[#002113]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                              verified_user
                            </span>
                            <span className="font-label-sm text-label-sm text-on-primary font-semibold">
                              RCFI PKI Timestamp Signed
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-secondary/30 text-secondary-fixed">
                            Active
                          </span>
                        </div>
                        <div className="mt-2 font-mono text-[11px] text-secondary-fixed/80 truncate">
                          {" TX: 9a7f804b::ca-kenya-00014::rfc3161-tsa "}
                        </div>
                      </div>
                    </div>
                    {/* Terminal Footnote */}
                    <div className="mt-space-sm pt-space-xs border-t border-surface-container-lowest/10 flex items-center justify-between text-[11px] text-on-primary-container">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                        {" Hardware Security Module: Luna PCIe Level 3 "}
                      </span>
                      <span>
                        Enc: Kyber-1024 / AES-GCM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: CORE CAPABILITY PILLARS (Clean Structured High-Contrast Grid) */}
          <section className="py-space-xl lg:py-24 bg-surface-container-lowest" id="capabilities">
            <div className="max-w-7xl mx-auto px-margin">
              {/* Section Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-xl gap-space-md">
                <div className="max-w-2xl">
                  <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold block mb-space-xs">
                    {" PRACTICE ARCHITECTURE "}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" Four Pillars of Sovereign Intelligence "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {" Structured for institutions handling sovereign, regulated, or mission-critical datasets requiring uninterrupted operational integrity and mathematical auditability. "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    {" Certified ISO 27001 & 42001 "}
                  </span>
                </div>
              </div>
              {/* Capability Cards (4 Columns desktop / Pathways style with accent left bar) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Pillar 01 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary font-mono">
                        01
                      </span>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        query_stats
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {" Enterprise Analytics & Operational BI "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      {" Architecting resilient data warehouses, semantic layers, and real-time operational telemetry for ministries, banks, and enterprise leaders. "}
                    </p>
                  </div>
                  <div>
                    <div className="pt-space-sm border-t border-outline-variant/30 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        PowerBI / Superset
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Automated Pipelines
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Executive Dashboards
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 02 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary font-mono">
                        02
                      </span>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        schema
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {" Data Engineering & Sovereign Governance "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      {" End-to-end data ingestion, cleansing, transformation, and metadata governance ensuring full lineage and data quality verification. "}
                    </p>
                  </div>
                  <div>
                    <div className="pt-space-sm border-t border-outline-variant/30 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Airflow / dbt
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Data Catalogs
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Lineage Tracking
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 03 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary font-mono">
                        03
                      </span>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        psychology
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {" Applied Machine Learning & Predictive Modeling "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      {" Purpose-built predictive intelligence models engineered for financial risk, credit scoring, revenue optimization, and epidemiological tracking. "}
                    </p>
                  </div>
                  <div>
                    <div className="pt-space-sm border-t border-outline-variant/30 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        MLOps
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Fraud Detection
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Demand Forecasting
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 04 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary" />
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary font-mono">
                        04
                      </span>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        gavel
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {" Sovereign AI Readiness & Governance "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      {" Guiding public institutions and enterprises through ethical AI governance, algorithmic fairness testing, and local sovereign LLM deployments with zero foreign data transmission. "}
                    </p>
                  </div>
                  <div>
                    <div className="pt-space-sm border-t border-outline-variant/30 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Privacy-Preserving AI
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Synthetic Data
                      </span>
                      <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-medium text-primary">
                        Model Auditing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: ARCHITECTURAL DATA FLOW & IMMUTABLE PROVENANCE (Visual Richness with Data Graphic & Image) */}
          <section className="py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left: Image representing sovereign compute tier */}
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-tertiary">
                    <img className="w-full h-80 lg:h-96 object-cover" data-alt="A futuristic and pristine sovereign datacenter aisle in Nairobi with enterprise server racks, cool emerald green and deep cyan fiber optic cabling illumination, polished reflective flooring, two cybersecurity and data engineers in clean dark uniforms inspecting server nodes, atmospheric lighting, corporate high-tech security vibe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC12re26EFxrs7SaUNLHCYLOgfkA90ptdYtiZ3zRJDQWaQOUTXt15s2_vOq7ozyj2x4VylQzJj3UJCEPoRGKcJvlAvPDmxb8xLpXZJPLjcrS-C7zPOwZa10lttnFoAANkvhuay2dVmib7WTSf7GQ7ZIxNjfF4PXvwRYX8Hfl3EzQXNzDZZMr72iz1ryn3YRZJEX1pogPk_mYQ69QFn-Ze-nCrDBMnzo_z4tFL4nVW3lJ19BaM7zrrK" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-space-md">
                      <div className="text-on-primary">
                        <span className="font-label-sm text-label-sm text-secondary-fixed block uppercase tracking-wider">
                          Facility Node: NBO-DC-04
                        </span>
                        <p className="font-title-md text-title-md font-semibold mt-1">
                          Air-Gapped In-Country Compute Fabric
                        </p>
                        <p className="font-body-md text-body-md text-on-primary-container text-xs mt-0.5">
                          Dual-homed fiber links to IXP with zero foreign egress
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Key Callout Metric Grid */}
                  <div className="grid grid-cols-3 gap-space-sm">
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-headline-md text-headline-md font-bold text-secondary block font-mono">
                        100%
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Domestic Ingestion
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-headline-md text-headline-md font-bold text-secondary block font-mono">
                        0.0 ms
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Overseas Egress
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-headline-md text-headline-md font-bold text-secondary block font-mono">
                        e-CSP
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Licensed Root CA
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right: The Sovereign Lineage Verification Schema */}
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>
                      Mathematical Auditability Pipeline
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" Cryptographically Anchored Machine Learning "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" In typical cloud deployments, training weights, fine-tuning artifacts, and inference prompts are transmitted over public transit to overseas black boxes. RCFI anchors the entire pipeline within Kenya's regulatory boundary: "}
                  </p>
                  {/* SVG Pipeline Schematic */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0">
                          1
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-title-md text-title-md text-primary text-sm font-semibold block truncate">
                            In-Memory Pseudonymization
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Deterministic tokenization compliant with DPA Section 25 principles
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          lock
                        </span>
                      </div>
                      <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0">
                          2
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-title-md text-title-md text-primary text-sm font-semibold block truncate">
                            Local Sovereign Cluster Execution
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Bare-metal GPU execution with hardware-enforced memory isolation
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          memory
                        </span>
                      </div>
                      <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0">
                          3
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-title-md text-title-md text-primary text-sm font-semibold block truncate">
                            RCFI PKI Proof Stamp
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Non-repudiable cryptographic timestamp signed with CAK-licensed ECSP key
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: SOVEREIGN DATA GOVERNANCE MATRIX (Pathways structured table) */}
          <section className="py-space-xl lg:py-24 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold block mb-space-xs">
                  {" GOVERNANCE & ARCHITECTURAL COMPARISON "}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Sovereign In-Country vs. Overseas Hyperscaler AI "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {" Why sovereign institutions and critical national infrastructure cannot rely on overseas shared-tenant APIs for protected data categories. "}
                </p>
              </div>
              {/* Comparison Matrix Card */}
              <div className="bg-surface rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary text-on-primary">
                        <th className="py-4 px-6 font-title-md text-title-md font-semibold w-1/4">
                          Evaluation Dimension
                        </th>
                        <th className="py-4 px-6 font-title-md text-title-md font-semibold w-3/8 text-secondary-fixed">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">
                              shield
                            </span>
                            <span>
                              RCFI Sovereign In-Country AI
                            </span>
                          </div>
                        </th>
                        <th className="py-4 px-6 font-title-md text-title-md font-semibold w-3/8 text-on-primary-container">
                          {" Overseas Hyperscaler / Public Cloud AI "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 font-body-md text-body-md text-on-surface">
                      {/* Row 1 */}
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-primary">
                          {" Legal Jurisdiction & Subpoena Power "}
                        </td>
                        <td className="py-4 px-6 bg-surface-container-low/30">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-on-surface font-medium">
                              Exclusively under Kenyan judicial authority and High Court oversight. Immune to foreign CLOUD Act disclosures.
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          {" Subject to US CLOUD Act, foreign court discovery orders, and extraterritorial data seizure without local sovereign notification. "}
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-primary">
                          {" Regulatory Compliance (Kenya DPA) "}
                        </td>
                        <td className="py-4 px-6 bg-surface-container-low/30">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-on-surface font-medium">
                              {"Native compliance with Section 48 & 49. Zero cross-border transfer filings required; fully registered with ODPC."}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          {" High cross-border risk requiring continuous ODPC transfer authorizations, complex SCCs, and high liability exposure under audits. "}
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-primary">
                          {" Auditability & Non-Repudiation "}
                        </td>
                        <td className="py-4 px-6 bg-surface-container-low/30">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-on-surface font-medium">
                              Every pipeline run and prompt inference is signed with an immutable RFC 3161 PKI timestamp through RCFI ECSP root.
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          {" Black-box proprietary API logs; self-reported latency metrics with no independent cryptographic non-repudiation guarantee. "}
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-primary">
                          {" Hardware Sovereign Custody "}
                        </td>
                        <td className="py-4 px-6 bg-surface-container-low/30">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-on-surface font-medium">
                              Dedicated on-soil compute clusters, local HSM cryptographic storage, and physically inspected datacenters in Nairobi.
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          {" Shared multi-tenant virtualization clusters located in EMEA or North American availability zones with opaque physical controls. "}
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-primary">
                          {" Model Weight Sovereignty & Lineage "}
                        </td>
                        <td className="py-4 px-6 bg-surface-container-low/30">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-on-surface font-medium">
                              Full ownership of fine-tuned weights and synthetic data generations. No upstream telemetry ingestion by foundational vendors.
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          {" Enterprise prompt telemetry frequently pooled or exposed to vendor diagnostic reviews under generic terms of service. "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 5: TARGETED USE CASES & SECTORS (Bento Style Grid) */}
          <section className="py-space-xl lg:py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-xl gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold block mb-space-xs">
                    {" INDUSTRY ADOPTION "}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" Tailored for Regulated Ecosystems "}
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  {" Engineered for sectors where data failure compromises public welfare, national revenue, or institutional trust. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Sector 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">
                        account_balance
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Financial Services & FinTech"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Anti-money laundering anomaly detection, algorithmic fraud interception, and fair credit underwriting compliant with Central Bank of Kenya guidelines. "}
                    </p>
                  </div>
                  <ul className="font-label-sm text-label-sm text-secondary space-y-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      AML Anomaly Scoring
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Credit Default Prediction
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Real-Time Fraud Blocking
                    </li>
                  </ul>
                </div>
                {/* Sector 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">
                        assured_workload
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Public Sector & Revenue Authorities"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Automated trade flow reconciliation, cross-border customs declarations telemetry, and predictive revenue leakage prevention. "}
                    </p>
                  </div>
                  <ul className="font-label-sm text-label-sm text-secondary space-y-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Customs Discrepancy Audits
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Sovereign Tax Telemetry
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Cross-Agency Interoperability
                    </li>
                  </ul>
                </div>
                {/* Sector 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">
                        medical_services
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Healthcare & Life Sciences"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Epidemiological forecasting, nationwide clinical registry interoperability, and FHIR-governed health outcome predictive models. "}
                    </p>
                  </div>
                  <ul className="font-label-sm text-label-sm text-secondary space-y-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Disease Outbreak Surveillance
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      FHIR-Governed Registries
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Zero-PII Clinical Cohorts
                    </li>
                  </ul>
                </div>
                {/* Sector 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">
                        cell_tower
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Regulated Telcos & Utilities"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" High-throughput CDR processing, subscriber churn prediction, dynamic grid optimization, and automated inter-carrier settlement verification. "}
                    </p>
                  </div>
                  <ul className="font-label-sm text-label-sm text-secondary space-y-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      High-Throughput CDR Mining
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Predictive Grid Balancing
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      Inter-Carrier Settlement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: CALL TO ACTION SECTION (Diagnostic Scheduler) */}
          <section className="py-space-xl lg:py-24 bg-tertiary text-on-tertiary relative overflow-hidden" id="diagnostic">
            {/* Atmospheric depth circles */}
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left text */}
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 w-fit text-secondary-fixed">
                    <span className="material-symbols-outlined text-[16px]">
                      speed
                    </span>
                    <span className="font-label-sm text-label-sm uppercase font-semibold">
                      RAPID INTAKE PROTOCOL
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-tertiary tracking-tight">
                    {" Accelerate your data maturity with sovereign intelligence. "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-tertiary-container leading-relaxed">
                    {" Schedule an executive diagnostic with our Lead Sovereign AI Architects. We review data pipeline architectures, compliance exposures under the Kenya Data Protection Act, and readiness for ISO/IEC 42001 certification. "}
                  </p>
                  <div className="space-y-space-xs font-label-sm text-label-sm text-secondary-fixed pt-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                      <span>
                        Protected by Mutual Non-Disclosure Agreement (M-NDA)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">
                        schedule
                      </span>
                      <span>
                        48-hour diagnostic deliverable with gap matrix
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">
                        verified_user
                      </span>
                      <span>
                        Validated by Licensed e-CSP Cryptographers
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right: Diagnostic Scheduler Form Card */}
                <div className="lg:col-span-6">
                  <div className="bg-surface-container-lowest text-on-surface p-space-xl rounded-xl shadow-2xl">
                    <div className="mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold block">
                        ENGAGEMENT BRIEFING
                      </span>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                        Request Sovereign Readiness Diagnostic
                      </h3>
                    </div>
                    <form className="space-y-space-sm" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('confirmation-msg').classList.remove('hidden'); this.classList.add('opacity-50');">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div>
                          <label className="block font-label-sm text-label-sm font-semibold text-primary mb-1">
                            Institutional Name
                          </label>
                          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Ministry, Bank, or Enterprise" required type="text" />
                        </div>
                        <div>
                          <label className="block font-label-sm text-label-sm font-semibold text-primary mb-1">
                            Official Work Email
                          </label>
                          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="official@domain.co.ke" required type="email" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div>
                          <label className="block font-label-sm text-label-sm font-semibold text-primary mb-1">
                            Sector Classification
                          </label>
                          <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all">
                            <option>
                              Financial Services / Banking
                            </option>
                            <option>
                              Public Sector / State Agency
                            </option>
                            <option>
                              {"Healthcare & Life Sciences"}
                            </option>
                            <option>
                              {"Telecommunications & Infrastructure"}
                            </option>
                            <option>
                              Other Regulated Industry
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-label-sm text-label-sm font-semibold text-primary mb-1">
                            Primary Objective
                          </label>
                          <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all">
                            <option>
                              Sovereign In-Country AI Deployment
                            </option>
                            <option>
                              Kenya DPA Section 48 Compliance
                            </option>
                            <option>
                              {"Enterprise BI & Semantic Modeling"}
                            </option>
                            <option>
                              ISO/IEC 42001 AI Readiness
                            </option>
                            <option>
                              Cryptographic Audit Trail (PKI)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm font-semibold text-primary mb-1">
                          {"Current Compute & Hosting Footprint"}
                        </label>
                        <textarea className="w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Describe current data residency constraints or cloud environment (e.g., On-Premise, Hyperscaler, Hybrid)..." rows={3} defaultValue="" />
                      </div>
                      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3.5 rounded-lg shadow-md hover:bg-primary-container hover:text-on-primary transition-all font-semibold flex items-center justify-center gap-2" type="submit">
                        <span>
                          Submit Diagnostic Request
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          verified
                        </span>
                      </button>
                    </form>
                    <div className="hidden mt-space-sm p-space-sm rounded-lg bg-[#002113] text-secondary-fixed text-label-sm font-label-sm flex items-center gap-2" id="confirmation-msg">
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      <span>
                        Intake transmitted. A Practice Director will contact your team within 24 business hours under standard NDA protocol.
                      </span>
                    </div>
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
