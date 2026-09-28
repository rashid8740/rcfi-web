import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/ecosystem/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Ecosystem & Strategic Partners | RCFI Technology" };

export default function EcosystemPage() {
  return (
    <div className="rcfi-ecosystem" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary-container text-on-primary border-b border-primary/20 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
              <span className="text-primary-fixed-dim/40 hidden sm:inline">
                |
              </span>
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="text-primary-fixed-dim/40 hidden md:inline">
                |
              </span>
              <div className="hidden md:flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
                </span>
                <span className="text-surface-container-lowest font-medium">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors font-medium" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-primary-fixed-dim/40">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors font-medium" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30" data-active-classes="text-primary font-bold border-b-2 border-secondary">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-20">
            <div className="flex items-center gap-space-xl">
              <Link className="flex items-center gap-space-sm" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
                <div className="hidden lg:flex flex-col text-left">
                  <span className="font-title-md text-title-md font-bold tracking-tight text-primary leading-none">
                    RCFI
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-normal mt-0.5">
                    Reprodrive Center for Innovation Limited
                  </span>
                </div>
              </Link>
              <div className="hidden xl:flex items-center gap-space-lg font-body-md text-body-md">
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="services" href="/services/">
                    Services
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-80">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & PKI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Root CA, e-Signatures & cryptographics"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Cybersecurity & Assurance"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Threat intel, audit & compliance postures"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-health-governance" href="/services/digital-health-governance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Governance
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Standards, protocols & interoperability"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Data, Analytics & AI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Enterprise telemetry & machine intelligence"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital & Cloud Engineering"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Sovereign infrastructure & API fabrics"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="products" href="/products/certysign/">
                    Products
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="certysign" href="/products/certysign/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          CertySign
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Enterprise digital trust platform
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="elano" href="/products/elano/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Elano
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Intelligent orchestrator engine
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="prezio" href="/products/prezio/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Prezio
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Governance & verification hub"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="academy" href="/academy/">
                    Academy
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-72">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="academy-overview" href="/academy/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Academy Overview
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Capacities & institutional training"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-health-interoperability" href="/academy/digital-health-interoperability/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Interoperability
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"FHIR, HL7 & eHealth models"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-trust-cyber" href="/academy/digital-trust-cyber/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & Cyber"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Offensive & defensive assurance"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="applied-data-ai" href="/academy/applied-data-ai/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Applied Data & AI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Applied engineering curricula
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="modern-engineering" href="/academy/modern-engineering/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Modern Engineering
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Cloud architecture & DevOps"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="executive-briefings" href="/academy/executive-briefings/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Executive Briefings
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Board & executive compliance masterclasses"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <PartnersNavMenu className="flex items-center py-6 transition-colors text-primary font-bold border-b-2 border-secondary" current />
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="insights" href="/insights/">
                    Insights
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="the-trust-layer" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          The Trust Layer
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Institutional perspectives
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="impact-stories" href="/impact/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Impact Stories
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Deployments in production
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="knowledge-hub" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Knowledge Hub
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Documentation & whitepapers"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="the-sovereignty-series" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          The Sovereignty Series
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          National digital assets
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="newsroom" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Newsroom
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Press & official announcements"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="company" href="/about/">
                    Company
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-56">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="about-rcfi" href="/about/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          About RCFI
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Mission & leadership"}
                        </span>
                      </Link>
                      <Link aria-current="page" className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item text-primary font-bold border-b-2 border-secondary" data-path="ecosystem" href="/ecosystem/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Ecosystem
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Partners & alliance"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="careers" href="/careers/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Careers
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Join our engineers
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="contact" href="/contact/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Contact
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Headquarters & desks"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link className="px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors" data-path="verify-a-document" href="/verify/">
                  Verify a Document
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
      <main className="w-full pt-[120px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Anchor Banner / Micro-telemetry */}
          <section className="w-full bg-primary text-on-primary py-space-sm px-margin">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm font-label-sm text-label-sm">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="tracking-wide uppercase font-semibold text-secondary-fixed">
                  Sovereignty Matrix V4.2
                </span>
                <span className="text-primary-fixed-dim/40">
                  •
                </span>
                <span className="text-surface-container-low font-normal">
                  {"Active In-Country Root CA Nodes: Nairobi Tier-III & Konza Technopolis"}
                </span>
              </div>
              <div className="flex items-center gap-space-md text-primary-fixed-dim">
                <span>
                  FIPS 140-2 L3 Compliant
                </span>
                <span className="text-primary-fixed-dim/40">
                  •
                </span>
                <span>
                  CAK Licensed ECSP #TL/E-CSP 00014
                </span>
              </div>
            </div>
          </section>
          {/* Hero: Sovereign Trust Ecosystem */}
          <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    verified_user
                  </span>
                  <span>
                    Interoperable Trust Architecture
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
                  {" A Pan-African Trust Ecosystem. Built on Shared Standards & Sovereign Technology. "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  {" RCFI coordinates an interlocked sovereign matrix uniting statutory telecommunications regulators, national data protection commissioners, sovereign cloud facilities, and digital health custodians. We power verifiable legal identity and root cryptographic trust for the African continent. "}
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-md" href="#partner-pathways">
                    <span>
                      Explore Partner Pathways
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_downward
                    </span>
                  </a>
                  <Link className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" data-path="ca-repository" href="/trust/">
                    <span>
                      Audit Legal Framework (CPS)
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      gavel
                    </span>
                  </Link>
                </div>
                {/* Metrics Ticker Row */}
                <div className="w-full grid grid-cols-3 gap-space-sm pt-space-md mt-space-sm">
                  <div className="flex flex-col p-3 rounded-xl bg-surface-container-low">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      100%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      In-Country Key Custody
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-surface-container-low">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      14.8M+
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relying Party Validations
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-surface-container-low">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      0 ms
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Cross-Border Data Leakage
                    </span>
                  </div>
                </div>
              </div>
              {/* Asymmetric Graphic / System Visual */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-surface-container-low p-space-md flex flex-col justify-between overflow-hidden shadow-xl">
                  {/* Background Abstract Infrastructure Node Diagram */}
                  <svg className="absolute inset-0 w-full h-full text-secondary/15" fill="none" viewBox="0 0 400 400">
                    {" "}
                    <circle cx="200" cy="200" r="160" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5" />
                    {" "}
                    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" />
                    {" "}
                    <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1.5" />
                    {" "}
                    <line stroke="currentColor" strokeWidth="1" x1="200" x2="200" y1="40" y2="360" />
                    {" "}
                    <line stroke="currentColor" strokeWidth="1" x1="40" x2="360" y1="200" y2="200" />
                    {" "}
                    <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="1" x1="86" x2="314" y1="86" y2="314" />
                    {" "}
                    <line stroke="currentColor" strokeDasharray="2 4" strokeWidth="1" x1="86" x2="314" y1="314" y2="86" />
                    {" "}
                  </svg>
                  {/* Top Status Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span>
                        Root Mesh Active
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      KE-TZ-UG Nodes
                    </span>
                  </div>
                  {/* Central Sovereign Node Card Overlay */}
                  <div className="relative z-10 p-space-md rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          token
                        </span>
                        <span className="font-title-md text-body-md font-bold text-primary">
                          National PKI Trust Anchor
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                        SOVEREIGN
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Cross-certified public key infrastructure ensuring statutory non-repudiation across Kenyan public administration and enterprise banking. "}
                    </p>
                    <div className="flex items-center gap-2 pt-1 font-label-sm text-label-sm text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                      <span>
                        {"Audited under Kenya Information & Communications Act (Cap 411A)"}
                      </span>
                    </div>
                  </div>
                  {/* Bottom Micro Visual Stats */}
                  <div className="relative z-10 flex items-center justify-between bg-primary text-on-primary p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                        hub
                      </span>
                      <span className="font-label-md text-label-md">
                        Hardware Security Module Grid
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-bold tracking-wider">
                      HSM #01-#04 ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Institutional & Regulatory Alliances Section (Bento Grid) */}
          <section className="w-full bg-surface py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div className="flex flex-col gap-1 max-w-2xl">
                  <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider">
                    Statutory Foundations
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    {" Institutional & Regulatory Alliances "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Trust cannot exist without regulatory alignment. RCFI anchors its cryptographic operations within constitutional authorities and continental governance mandates. "}
                  </p>
                </div>
                <span className="font-label-sm text-label-sm px-3 py-1.5 rounded-full bg-surface-container-high text-primary font-semibold self-start md:self-auto">
                  {" Public Sector Accredited "}
                </span>
              </div>
              {/* Bento Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
                {/* Bento 1: CAK (Large 7-col span) */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none text-primary">
                    <span className="material-symbols-outlined text-[180px]">
                      domain
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">
                        {" Licensing Authority & National Root "}
                      </span>
                      <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
                        Lic. TL/E-CSP 00014
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      {" Communications Authority of Kenya (CAK) "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Operating under statutory charter as an accredited Electronic Certification Service Provider (ECSP). RCFI generates legally recognized Advanced Electronic Signatures under the Kenya Information and Communications Act, maintaining absolute non-repudiation in judicial courts. "}
                    </p>
                    {/* Alliance Spec Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-space-xs">
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Root Anchor
                        </span>
                        <span className="font-label-md text-label-md font-bold text-primary">
                          National PKI
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Audit Protocol
                        </span>
                        <span className="font-label-md text-label-md font-bold text-primary">
                          WebTrust / ETSI
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Key Length
                        </span>
                        <span className="font-label-md text-label-md font-bold text-primary">
                          4096-bit RSA / ECC
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary z-10">
                    <Link className="font-label-md text-label-md font-semibold inline-flex items-center gap-1 hover:underline" data-path="ca-repository" href="/trust/">
                      <span>
                        {"View CA Repository & CPS Schedules"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-[20px]">
                      verified
                    </span>
                  </div>
                </div>
                {/* Bento 2: ODPC (5-col span) */}
                <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        {" Statutory Privacy Registry "}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        shield
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      {" Office of the Data Protection Commissioner (ODPC) "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Full statutory compliance with the Kenya Data Protection Act of 2019. Zero biometric cross-border telemetry, privacy-by-design cryptographic identity issuing, and mandatory annual algorithmic audits. "}
                    </p>
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          {"Data Controller & Processor Registered"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Mandatory DPIA Assessments Cleared
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      DPA Compliance Index: 99.8%
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Audited Q4 2025
                    </span>
                  </div>
                </div>
                {/* Bento 3: Ministry of Health & DHA (6-col span) */}
                <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                        {" Clinical Interoperability "}
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        health_and_safety
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      <Link href="/partners/dha/">
                        {" Ministry of Health & Digital Health Agency (DHA) "}
                      </Link>
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Architecting the security and trust substrate for the national Digital Health Act rollout. Incorporating HL7 FHIR standards, practitioner smartcard certificates, and patient clinical record integrity layers. "}
                    </p>
                    <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 mt-2">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Standard Alignments
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" HL7 FHIR Release 4, DICOM cryptographic signing, OpenHIE Architecture specifications. "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      sync_alt
                    </span>
                    <span>
                      Integrated with National Health Exchange (NHE)
                    </span>
                  </div>
                </div>
                {/* Bento 4: Konza Technopolis & ICTA (6-col span) */}
                <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                        {" National Sovereign Infrastructure "}
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        cloud_sync
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      <Link href="/partners/konza/">
                        {" Konza Technopolis & ICT Authority (ICTA) "}
                      </Link>
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Co-locating cryptographic engines within the National Sovereign Cloud at Konza Smart City. Empowering governmental agencies with unified single-sign-on (SSO) and citizen-facing digital stamp services. "}
                    </p>
                    <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 mt-2">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Geographic Redundancy
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Synchronized dual-site HSM replication: Konza National Data Center & ICD Road Enterprise Datacenter. "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      dns
                    </span>
                    <span>
                      Zero-Trust Enterprise Backbone Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Break / Photographic Reality & Engineering */}
          <section className="w-full bg-surface-container-low py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wide">
                  Data Center Presence
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" Rigorous In-Country Cryptographic Hardware "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" We do not host your national cryptographic root keys on multi-tenant overseas commercial clouds. Our dedicated HSM infrastructure sits within biometric-hardened, Faraday-shielded cages in Nairobi and Konza. "}
                </p>
                <div className="flex flex-col gap-3 mt-space-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      pin
                    </span>
                    <div>
                      <span className="font-title-md text-body-md font-bold text-primary">
                        Physical Key Ceremony Rooms
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Dual-custody, video-monitored split m-of-n secret sharing procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      lock
                    </span>
                    <div>
                      <span className="font-title-md text-body-md font-bold text-primary">
                        Tamper-Responsive Zeroization
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Environmental voltage, temperature, and physical casing breach protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-tertiary">
                  <img className="w-full h-[420px] object-cover mix-blend-luminosity opacity-85" data-alt="Modern high-security data center server room with high density server racks illuminated by subtle emerald and forest green LED status indicator lights. Clean reflective epoxy floor, sovereign enterprise computing infrastructure, pristine cybersecurity facility in Nairobi with fiber optic patch cables and high security glass partitions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwJszhNRiSVhiLGl-usLtYOuVM2Y1drHZjGmVRRtDKzaajc-ZMuiA77NRalTK8S91DXEHlWWyc2hWUlllRl0Ts6gGCz-M0SgCIrLxC4DL8zHFDN02tzB7fqvdqWAqrbcg-2Bnt_TIbAQuKbUSeV0QcXfvP2CxFtOGBHvcjvtR_5DJ1kHj-fdjiJ3Cv0wULuOqzib7d0fEotqR119-oFozVZHX63OzNdzeHNTB9tEBhQe9D72iVOr4e" />
                  <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-tertiary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-surface-container-lowest">
                    <div className="flex flex-col">
                      <span className="font-title-md text-body-lg font-bold">
                        Nairobi Sovereign Node Alpha
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        ISO/IEC 27001 Certified Environment • ICD Road Facility
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      {" TIER III CERTIFIED "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Technology & Cloud Partners Section */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-2xl">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider">
                  Engineered Integration
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" Technology & Infrastructure Alliances "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Collaborating with world-class engineering firms and cryptographic hardware manufacturers to deliver uninterrupted uptime and continental interoperability. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Partner Card 1: IntelliSOFT Consulting */}
                <div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">
                        gif_2
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                        Digital Health Pioneer
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        <Link href="/partners/intellisoft/">
                          IntelliSOFT Consulting
                        </Link>
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Deep clinical informatics integration partnering on OpenHIE protocols, digital patient registries, and connecting electronic health record systems (EHRs) directly with CertySign PKI seals. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        HL7 FHIR
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        OpenMRS
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        Health Informatics
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                    <span>
                      Clinical Systems Alliance
                    </span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {/* Partner Card 2: Hardware Security Partners */}
                <div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">
                        memory
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                        Root Security Modules
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Hardware Security Partners
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Tier-one global cryptographic hardware vendors delivering FIPS 140-2 Level 3 certified physical appliances for cryptographic signature synthesis, PKCS#11 interfaces, and sovereign root generation. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        FIPS 140-2 L3
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        PKCS#11 API
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        Hardware RNG
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                    <span>
                      Hardware Co-Engineering
                    </span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {/* Partner Card 3: Cloud & Telecommunications Partners */}
                <div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">
                        router
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                        Carrier Grade Hosting
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Cloud & Telco Partners"}
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Multi-redundant carrier interconnections partnering with Pan-African telecom operators and Tier III hosting centers for ultra-low-latency timestamping (TSA) and high-throughput CRL distribution. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        99.999% SLA
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        BGP Anycast
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
                        Dark Fiber Ring
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                    <span>
                      Network Operations
                    </span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Enterprise & Financial Sector Relying Parties */}
          <section className="w-full bg-surface py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
                <div className="lg:col-span-8 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider">
                    Mission-Critical Verification
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    {" Enterprise & Financial Relying Parties "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Over a hundred commercial financial institutions, sacco networks, and supreme judicial registries depend on RCFI's digital certificate infrastructure every business minute. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors" data-path="verify-a-document" href="#">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span>
                      Real-time Certificate Revocation List (CRL)
                    </span>
                  </a>
                </div>
              </div>
              {/* Relying Sector Matrices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Sector 1: Commercial Banking */}
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">
                          account_balance
                        </span>
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        {"24 Tier-1 & Tier-2 Banks"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      Commercial Banking
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Syndicated loan originations, cross-border remittances, corporate treasury authorizations, and board resolutions authenticated with cryptographic signatures. "}
                    </p>
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Use Case:
                      </span>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        Automated Loan Guarantee Contract Execution
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      Active Certs: 120k+
                    </span>
                    <span className="text-secondary font-bold">
                      100% Non-Repudiated
                    </span>
                  </div>
                </div>
                {/* Sector 2: SACCO Federation */}
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">
                          groups
                        </span>
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        40+ Registered SACCOs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      SACCO Networks
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Guarantor digital consent, dividend distributions, asset collateralization, and annual general meeting voting verification across decentralized cooperatives. "}
                    </p>
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Use Case:
                      </span>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        {"Remote Member Identity & Guarantor Signing"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      Cooperatives: East Africa
                    </span>
                    <span className="text-secondary font-bold">
                      Paperless Audits
                    </span>
                  </div>
                </div>
                {/* Sector 3: Judiciary & Legal Practitioners */}
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">
                          balance
                        </span>
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        {"LSK & Court Registries"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-2">
                      {"Judiciary & Legal Desks"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Filing of digital affidavits, conveyancing contracts, title transfers, and courtroom e-filing repositories compliant with statutory evidentiary standards. "}
                    </p>
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Use Case:
                      </span>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        {"E-Courtroom Sealed Affidavits & Notarization"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      Evidence Act Cap 80
                    </span>
                    <span className="text-secondary font-bold">
                      Court Admissible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* "Partner with RCFI" Collaboration Pathways Card (Interactive Bento Anchor) */}
          <section className="w-full bg-tertiary text-on-tertiary py-space-xl px-margin" id="partner-pathways">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold self-start">
                  <span className="material-symbols-outlined text-[15px]">
                    handshake
                  </span>
                  <span>
                    Collaboration Frameworks
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest">
                  {" Partner with RCFI: Three Engagement Pathways "}
                </h2>
                <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                  {" We invite technology providers, regulatory agencies, and research academics to join the sovereign digital infrastructure fabric powering Pan-African digital commerce. "}
                </p>
              </div>
              {/* 3 Pathways Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Pathway 1: Technology Vendors */}
                <div className="bg-tertiary-container p-space-lg rounded-2xl flex flex-col justify-between border-t-4 border-secondary-fixed shadow-lg">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">
                        01
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary text-secondary-fixed font-label-sm text-label-sm font-mono">
                        ISV / API Alliance
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-surface-container-lowest">
                      Technology Vendors
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                      {" Integrate CertySign API and Elano verification microservices natively into your ERP, CRM, or document workflow suites. Gain certified hardware partner accreditation. "}
                    </p>
                    <ul className="flex flex-col gap-2 pt-2 text-surface-container-lowest font-body-md text-body-md">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          {"REST & gRPC SDK access"}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          Sandbox testing certificates
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          {"Joint co-selling & go-to-market"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <Link className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-colors" data-path="contact" href="/partners/">
                      <span>
                        Apply as ISV Partner
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Pathway 2: Regulators & Ministries */}
                <div className="bg-tertiary-container p-space-lg rounded-2xl flex flex-col justify-between border-t-4 border-primary-fixed shadow-lg">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm font-bold text-primary-fixed">
                        02
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary text-primary-fixed font-label-sm text-label-sm font-mono">
                        {"Gov & Statutory"}
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-surface-container-lowest">
                      {"Regulators & Public Sector"}
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                      {" Design national electronic transaction frameworks, establish Sub-CA branches under sovereign control, and enforce cross-border mutual recognition standards. "}
                    </p>
                    <ul className="flex flex-col gap-2 pt-2 text-surface-container-lowest font-body-md text-body-md">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          Legislative drafting assistance
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          Root CA key ceremony design
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                          check
                        </span>
                        <span>
                          Statutory compliance auditing
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <a className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold hover:bg-primary-fixed-dim transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span>
                        Request Sovereign Briefing
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                {/* Pathway 3: Academic & Research Institutions */}
                <div className="bg-tertiary-container p-space-lg rounded-2xl flex flex-col justify-between border-t-4 border-surface-container-high shadow-lg">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm font-bold text-surface-container-high">
                        03
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary text-surface-container-high font-label-sm text-label-sm font-mono">
                        Clinical / Academia
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-bold text-surface-container-lowest">
                      {"Research & Clinical Bodies"}
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                      {" Advance post-quantum cryptography, FHIR eHealth data harmonization, and AI model provenance through funded empirical research partnerships. "}
                    </p>
                    <ul className="flex flex-col gap-2 pt-2 text-surface-container-lowest font-body-md text-body-md">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-surface-container-high text-[18px]">
                          check
                        </span>
                        <span>
                          Sponsored clinical fellowship seats
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-surface-container-high text-[18px]">
                          check
                        </span>
                        <span>
                          Joint publication in The Trust Layer
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-surface-container-high text-[18px]">
                          check
                        </span>
                        <span>
                          Anonymized telemetry datasets
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <Link className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md font-bold hover:bg-surface-container-low transition-colors" data-path="academy-overview" href="/academy/">
                      <span>
                        Explore Academy Research
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Sovereign Certification Guarantee Stamp Box */}
              <div className="mt-space-md p-space-lg rounded-2xl bg-primary flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[32px]">
                      verified
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-title-md text-title-md font-bold text-on-primary">
                      RCFI Interoperability Guarantee
                    </h4>
                    <p className="font-body-md text-body-md text-primary-fixed-dim max-w-xl">
                      {" All integration tiers are backed by SLA uptime commitments, legally sanctioned CPS guidelines, and audited Kenya Data Protection Act protocols. "}
                    </p>
                  </div>
                </div>
                <Link className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-low transition-colors shrink-0" data-path="trust-center" href="/trust/">
                  <span>
                    Inspect Trust Center
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    lock_open
                  </span>
                </Link>
              </div>
            </div>
          </section>
          {/* Interactive Ecosystem Inquiry Dialog/Form Section */}
          <section className="w-full bg-surface py-space-xl px-margin">
            <div className="max-w-4xl mx-auto rounded-3xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg">
              <div className="flex flex-col gap-2 text-center items-center mb-space-lg">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-widest">
                  Connect with our Alliance Desk
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Initiate Strategic Partnership
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  {" Submit your entity profile. Our cryptographic standards committee reviews every strategic and sovereign integration within 48 business hours. "}
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-space-md" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('form-success-msg').classList.remove('hidden'); this.reset();">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-semibold text-primary">
                    Full Legal Name
                  </label>
                  <input className="h-11 px-4 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="e.g. Dr. Amani Omondi" required type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-semibold text-primary">
                    Official Organization / Authority
                  </label>
                  <input className="h-11 px-4 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="e.g. National Hospital Insurance Registry" required type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-semibold text-primary">
                    Work Email Address
                  </label>
                  <input className="h-11 px-4 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="amani@institution.go.ke" required type="email" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-semibold text-primary">
                    Collaboration Category
                  </label>
                  <select className="h-11 px-4 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md">
                    <option>
                      {"Statutory & Regulatory Alliance"}
                    </option>
                    <option>
                      Commercial Bank / Relying Party Integration
                    </option>
                    <option>
                      Health IT / FHIR Standardization
                    </option>
                    <option>
                      Independent Software Vendor (ISV) Partner
                    </option>
                    <option>
                      {"Hardware & Cloud Infrastructure"}
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="font-label-md text-label-md font-semibold text-primary">
                    {"Scope of Engagement & Technical Objectives"}
                  </label>
                  <textarea className="p-4 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="Provide detail on your technical integration requirements, anticipated signing volume, or legal jurisdiction..." required rows={4} defaultValue="" />
                </div>
                <div className="flex items-center gap-3 md:col-span-2 py-1">
                  <input className="w-4 h-4 rounded text-primary focus:ring-secondary" id="compliance_consent" required type="checkbox" />
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="compliance_consent">
                    {" I acknowledge that telemetry data shared will be processed according to RCFI Certificate Policies and the Kenya Data Protection Act 2019. "}
                  </label>
                </div>
                <div className="md:col-span-2 flex flex-col items-center gap-space-sm pt-2">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all shadow-md" type="submit">
                    {" Dispatch Alliance Inquiry "}
                  </button>
                  <div className="hidden p-3 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-2" id="form-success-msg">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    <span>
                      Transmission received. A senior trust architecture delegate will contact your office.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-tertiary text-surface-container-lowest border-t border-tertiary-container">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <img alt="RCFI Logo" className="h-7 w-auto object-contain brightness-0 invert" src="/brand/rcfi-mark.svg" />
                <span className="font-title-md text-title-md font-bold text-on-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mt-2">
                Enterprise digital infrastructure, sovereign trust models, and interoperability frameworks across Africa.
              </p>
              <div className="mt-4 flex flex-col gap-1 font-label-sm text-label-sm text-tertiary-fixed-dim">
                <span className="text-surface-container-lowest font-semibold">
                  Headquarters:
                </span>
                <span>
                  5th Floor, Hifadhi House, Along ICD Road
                </span>
                <span>
                  Nairobi, Kenya
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                Sovereign Platforms
              </span>
              <div className="flex flex-col gap-2 mt-2">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                  CertySign Platform
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                  Elano Governance Engine
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                  Prezio Registry
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                  National PKI Infrastructure
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="digital-health-governance" href="/services/digital-health-governance/">
                  Health Interoperability Fabric
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Trust & Governance"}
              </span>
              <div className="flex flex-col gap-2 mt-2">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                  {"CA Repository & CPS"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                  {"Security & Trust Center"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="verify-a-document" href="/verify/">
                  Document Verification Portal
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="academy-overview" href="/academy/executive-briefings/">
                  RCFI Executive Academy
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="the-trust-layer" href="/insights/">
                  The Trust Layer Journal
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Accreditation & Compliance"}
              </span>
              <div className="flex flex-col gap-3 mt-2">
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    CAK Licensed ECSP
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    License: TL/E-CSP 00014 (Kenya)
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    ISO/IEC 27001 Certified
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    Information Security Management
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    Kenya DPA Compliant
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    Data Protection Act of 2019
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-tertiary-container mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-tertiary-fixed-dim">
            <p>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link className="hover:text-secondary-fixed transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="terms-of-service" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="certificate-policy" href="/trust/">
                Certificate Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
