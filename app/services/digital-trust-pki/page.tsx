import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/services-digital-trust-pki/page.css";
import "@/styles/pages/services-digital-trust-pki/late.css";

export const metadata: Metadata = { title: "Digital Trust & PKI | RCFI Technology" };

export default function ServicesDigitalTrustPkiPage() {
  return (
    <div className="rcfi-services-digital-trust-pki" style={{ display: "contents" }}>
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
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-20">
            <div className="flex items-center gap-space-xl">
              <Link className="flex items-center gap-space-sm" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="services" href="/services/">
                    <span className="">
                      Services
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_drop_down
                    </span>
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
                          {"Digital Health Governance, Standards & Interoperability"}
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
                  <button className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" type="button">
                    <span className="">
                      Products
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_drop_down
                    </span>
                  </button>
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
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="academy" href="/academy/">
                    <span className="">
                      Academy
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_drop_down
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-80">
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
                          {"Digital Health Interoperability & Governance"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"FHIR, HL7 & eHealth models"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-trust-cyber" href="/academy/digital-trust-cyber/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & Cyber Defence"}
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
                <div className="relative group">
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="insights" href="/insights/">
                    <span className="">
                      Insights
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_drop_down
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-72">
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
                  <button className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" type="button">
                    <span className="">
                      Company
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_drop_down
                    </span>
                  </button>
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
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="ecosystem" href="/ecosystem/">
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
              <a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-path="book-a-meeting" href="#architecture-audit">
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
          {/* Top Sovereign Trust Statement / Hero Section */}
          <section className="relative w-full bg-primary text-on-primary overflow-hidden pb-24 pt-12">
            {/* Ambient geometric background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="pki-grid" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                    {" "}
                    <circle cx="24" cy="24" fill="currentColor" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#pki-grid)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            {/* Radiant focal glow */}
            <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-margin">
              {/* Statutory License Indicator Strip */}
              {" "}
              <div className="inline-flex flex-wrap items-center gap-3 bg-primary-container/80 rounded-full px-4 py-1.5 shadow-md mb-8">
                <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-secondary-fixed">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
                  </span>
                  {" STATUTORY REGULATION "}
                </span>
                <span className="text-on-primary-container font-label-sm text-label-sm">
                  |
                </span>
                <span className="font-label-sm text-label-sm text-on-primary font-semibold tracking-wide">
                  {" Licensed Electronic Certification Service Provider "}
                  <span className="text-secondary-fixed">
                    TL/E-CSP 00014
                  </span>
                  {" (CAK) "}
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                  verified
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="h-0.5 w-6 bg-secondary-fixed" />
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
                      Enterprise Cryptographic Assurance
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-primary leading-tight font-bold">
                    {" CAK Licensed Sovereign Public Key Infrastructure for Enterprise & Government "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl leading-relaxed">
                    {" Architecting national-grade cryptographic trust rails. Delivering legal non-repudiation, ISO 27001 sovereign key custody, and high-throughput validation APIs compliant with the Kenya Information and Communications Act. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-4">
                    <a className="px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-headline-sm text-label-md font-bold shadow-lg hover:bg-secondary-fixed transition-all flex items-center gap-2" href="#architecture-audit">
                      <span className="">
                        Schedule Architecture Review
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="px-6 py-3.5 rounded-lg bg-surface-container-lowest/10 text-on-primary font-headline-sm text-label-md font-semibold hover:bg-surface-container-lowest/20 transition-all flex items-center gap-2" href="#integration-specs">
                      <span className="material-symbols-outlined text-[18px]">
                        terminal
                      </span>
                      <span className="">
                        Explore Developer Specs
                      </span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  {/* Real-Time CA Status Monitor Widget */}
                  <div className="bg-surface-container-lowest text-on-surface rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Operational Telemetry
                        </span>
                        <span className="font-headline-sm text-headline-sm text-primary">
                          Sovereign Root CA
                        </span>
                      </div>
                      <span className="p-2 rounded-full bg-surface-container-low text-secondary">
                        {" "}
                        <span className="material-symbols-outlined text-[24px]">
                          lock
                        </span>
                        {" "}
                      </span>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center bg-surface-container-low p-2.5 rounded-lg">
                        <span className="font-body-md text-body-md font-medium text-on-surface-variant">
                          Hardware HSM State
                        </span>
                        <span className="font-label-md text-label-md text-secondary font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                          {" FIPS 140-2 Level 3 Active "}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-surface-container-low p-2.5 rounded-lg">
                        <span className="font-body-md text-body-md font-medium text-on-surface-variant">
                          TSA Drift Delta
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold font-mono">
                          {"< 0.42 ms (Atomic GPS)"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-surface-container-low p-2.5 rounded-lg">
                        <span className="font-body-md text-body-md font-medium text-on-surface-variant">
                          OCSP Latency SLA
                        </span>
                        <span className="font-label-md text-label-md text-secondary font-bold font-mono">
                          14.8 ms (Regional)
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-surface-container-low p-2.5 rounded-lg">
                        <span className="font-body-md text-body-md font-medium text-on-surface-variant">
                          Cert Revocation List (CRL)
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          Sync Cycle: 60m
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span className="">
                        Jurisdiction: Kenya (KICA 1998)
                      </span>
                      <span className="text-secondary font-semibold">
                        Audited Jan 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Metric / Proof Points Strip */}
          <section className="w-full bg-surface-container-low py-8 shadow-sm">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                <div className="flex flex-col gap-1">
                  <span className="font-display-lg text-headline-lg font-bold text-primary tracking-tight">
                    100%
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Kenyan Data Sovereignty
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display-lg text-headline-lg font-bold text-secondary tracking-tight">
                    99.999%
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    OCSP Availability Record
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display-lg text-headline-lg font-bold text-primary tracking-tight">
                    4096-bit
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {"RSA & ECC Root Keys"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display-lg text-headline-lg font-bold text-secondary tracking-tight">
                    KICA 83C
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Legal Evidentiary Weight
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Core PKI Capabilities Bento Grid */}
          <section className="w-full bg-surface py-20">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  Institutional Capabilities
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Sovereign PKI Architecture Matrix
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Every cryptographic primitive is deployed on local sovereign hardware inside certified Tier III Nairobi data centers, completely isolated from foreign extraterritorial subpoenas. "}
                </p>
              </div>
              {/* Bento Grid Construction */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Bento Card 1: Certificate Issuance (Large 7 col) */}
                <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        Lifecycle Engine
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                        X.509 v3 Standard
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"Certificate Issuance & Lifecycle Management"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" End-to-end automated generation, distribution, renewal, and revocation of digital certificates tailored for human signatories, sovereign IoT endpoints, automated microservices, and network hardware. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                      <div className="p-3 bg-surface-container-low rounded-lg flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-primary">
                          Class 1: Basic
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                          {"Domain & email verification for low-risk organizational communications."}
                        </span>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-primary">
                          Class 2: Organizational
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                          {"Direct verification of business identity & authorized signers."}
                        </span>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-secondary">
                          Class 3: Qualified
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                          Hardware token issuance with mandatory in-person/e-KYC verification.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        verified_user
                      </span>
                      {" Dual-operator key generation protocol "}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"EST & SCEP Protocols"}
                    </span>
                  </div>
                </div>
                {/* Bento Card 2: Hardware Security Modules (5 col) */}
                <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        Zero Perimeter Leak
                      </span>
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        memory
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Nairobi-Hosted FIPS 140-2 Level 3 HSMs
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Root and intermediate private keys reside strictly within tamper-reactive dedicated Hardware Security Modules housed in Nairobi. Physical and zero-trace cryptographic destruction mechanisms guarantee ultimate tamper prevention. "}
                    </p>
                    <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Physical Intrusion Sensing
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">
                          Armed Active
                        </span>
                      </div>
                      <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full w-full" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant text-right">
                        M-of-N Cryptographic Quorum Enforced
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      shield
                    </span>
                    {" PKCS#11, Microsoft CAPI/CNG & JCE supported "}
                  </div>
                </div>
                {/* Bento Card 3: Trusted Timestamping Authority (TSA) (4 col) */}
                <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        RFC 3161 Certified
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        schedule
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Trusted Timestamping Authority (TSA)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Cryptographically locks document integrity with atomic-level synchronization directly calibrated via regional GPS receivers, defending contracts against retrospective dating disputes. "}
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-surface-container-low rounded-lg font-mono text-label-sm text-primary flex items-center justify-between">
                    <span className="">
                      Stratum-1 Calibration
                    </span>
                    <span className="text-secondary font-bold">
                      ±100ns Accuracy
                    </span>
                  </div>
                </div>
                {/* Bento Card 4: Automated OCSP & CRL (4 col) */}
                <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        RFC 6960 Architecture
                      </span>
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        sync_saved_locally
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"High-Availability OCSP & CRL Distribution"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Edge-cached revocation endpoints delivering sub-20ms online certificate status verification to prevent compromised credentials from executing unauthorized corporate transactions. "}
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Distributed Edge CDN
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      12 PoPs across East Africa
                    </span>
                  </div>
                </div>
                {/* Bento Card 5: e-KYC & Legal Non-Repudiation (4 col) */}
                <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Statutory Compliance
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        gavel
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"e-KYC & Legal Non-Repudiation"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Direct verification integrations linking national IPRS and business registrar datasets to issue certificates possessing full evidentiary presumption under Section 83C of the Kenya Information and Communications Act. "}
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Kenya Evidence Act Sec 106B
                    </span>
                    <span className="text-secondary font-bold font-label-sm text-label-sm">
                      Self-Authenticating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Sovereign Verification Ladder & Flow Diagram */}
          <section className="w-full bg-surface-container-low py-20">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                    Trust Hierarchy
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    {"The Sovereign Chain of Custody & Validation Flow"}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Explore how an enterprise document or API payload is signed, anchored to the national trust root, and instantaneously validated by relying parties. "}
                  </p>
                </div>
                {/* Interactive Step Selector Tabs */}
                <div className="flex items-center bg-surface-container-lowest p-1 rounded-lg shadow-sm" id="ladderTabs">
                  <button className="px-4 py-2 rounded-md font-label-md text-label-md font-semibold text-on-primary bg-primary transition-all" id="btn-step-1" data-rcfi-onclick="switchStep(1)" type="button">
                    1. Sovereign Root
                  </button>
                  <button className="px-4 py-2 rounded-md font-label-md text-label-md font-semibold text-on-surface-variant hover:text-primary transition-all" id="btn-step-2" data-rcfi-onclick="switchStep(2)" type="button">
                    2. Issuing Sub-CA
                  </button>
                  <button className="px-4 py-2 rounded-md font-label-md text-label-md font-semibold text-on-surface-variant hover:text-primary transition-all" id="btn-step-3" data-rcfi-onclick="switchStep(3)" type="button">
                    3. Relying Validation
                  </button>
                </div>
              </div>
              {/* Main Visual Verification Pipeline Card */}
              <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                  {/* Node 1: Root CA */}
                  <div className="rounded-xl p-space-lg bg-surface-container-low transition-all duration-300 flex flex-col gap-4" id="card-step-1">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center font-label-md text-label-md">
                        01
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                        Offline Vault
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        RCFI National Root CA
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Accredited by CAK • SHA-384 / RSA 4096
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Isolated in an air-gapped physical cage. Root keys are accessed strictly during scheduled cryptographic key ceremonies governed by multi-custodian physical keys and Shamir secret sharing. "}
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded-lg font-mono text-label-sm text-on-surface-variant">
                      <span className="text-secondary font-bold">
                        Fingerprint:
                      </span>
                      {" 7E:F2:1A:89:C4:00:D3... "}
                    </div>
                  </div>
                  {/* Node 2: Issuing Sub-CA */}
                  <div className="rounded-xl p-space-lg bg-surface-container-low transition-all duration-300 flex flex-col gap-4" id="card-step-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center font-label-md text-label-md">
                        02
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">
                        Online HSM Rail
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        Enterprise Issuing Sub-CA
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Operational Delegated Signer • RFC 5280
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Active intermediate CA continuously connected to high-speed banking, healthcare, and tax (e-TIMS) gateways. Handles automated certificate issuance and revocation distribution requests. "}
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded-lg font-mono text-label-sm text-on-surface-variant">
                      <span className="text-secondary font-bold">
                        CRL Partition:
                      </span>
                      {" crl.rcfi.co.ke/v1/sub-ca.crl "}
                    </div>
                  </div>
                  {/* Node 3: Relying Party Verification */}
                  <div className="rounded-xl p-space-lg bg-surface-container-low transition-all duration-300 flex flex-col gap-4" id="card-step-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center font-label-md text-label-md">
                        03
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                        Real-time Validation
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        Relying Party Verification
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Court-Admissible Non-Repudiation
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Judicial systems, enterprise auditors, or regulatory portals instantly evaluate certificate validity, TSA chain, and signer identity using local public key caches without data telemetry leaks. "}
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded-lg font-mono text-label-sm text-on-surface-variant">
                      <span className="text-secondary font-bold">
                        Verification:
                      </span>
                      {" OCSP Good [0ms skew] "}
                    </div>
                  </div>
                </div>
                {/* Inline Visual Verification Flow Chart (SVG) */}
                <div className="mt-8 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-md text-label-md font-bold text-primary uppercase">
                      Cryptographic Validation Protocol Vector
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">
                        sync_alt
                      </span>
                      {" Continuous Certificate Path Construction "}
                    </span>
                  </div>
                  <div className="bg-primary text-on-primary p-6 rounded-xl overflow-x-auto">
                    <svg className="w-full min-w-[700px] h-28" fill="none" viewBox="0 0 800 110" xmlns="http://www.w3.org/2000/svg">
                      {" "}
                      {/* Connectors */}
                      {" "}
                      <path className="text-secondary-fixed opacity-75" d="M 160 55 L 340 55" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                      {" "}
                      <path className="text-secondary-fixed opacity-75" d="M 440 55 L 620 55" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                      {" "}
                      {/* Arrow Heads */}
                      {" "}
                      <polygon className="text-secondary-fixed" fill="currentColor" points="345,55 335,50 335,60" />
                      {" "}
                      <polygon className="text-secondary-fixed" fill="currentColor" points="625,55 615,50 615,60" />
                      {" "}
                      {/* Step 1 Bubble */}
                      {" "}
                      <rect className="fill-primary-container" height="70" rx="8" width="140" x="20" y="20" />
                      {" "}
                      <text fill="white" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="90" y="48">
                        OFFLINE ROOT CA
                      </text>
                      {" "}
                      <text fill="#98d3b5" fontFamily="Plus Jakarta Sans" fontSize="10" textAnchor="middle" x="90" y="68">
                        Issues Cross-Certs
                      </text>
                      {" "}
                      {/* Step 2 Bubble */}
                      {" "}
                      <rect className="fill-primary-container" height="70" rx="8" width="140" x="300" y="20" />
                      {" "}
                      <text fill="white" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="370" y="48">
                        ISSUING SUB-CA
                      </text>
                      {" "}
                      <text fill="#6ffbbe" fontFamily="Plus Jakarta Sans" fontSize="10" textAnchor="middle" x="370" y="68">
                        {"Signs Leaf & OCSP"}
                      </text>
                      {" "}
                      {/* Step 3 Bubble */}
                      {" "}
                      <rect className="fill-secondary" height="70" rx="8" width="180" x="580" y="20" />
                      {" "}
                      <text fill="white" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="670" y="48">
                        RELYING APPLICATION
                      </text>
                      {" "}
                      <text fill="#eaf1ff" fontFamily="Plus Jakarta Sans" fontSize="10" textAnchor="middle" x="670" y="68">
                        {"Validates Hash & Nonce"}
                      </text>
                      {" "}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Enterprise Integration Specs Section */}
          <section className="w-full bg-surface py-20" id="integration-specs">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  {"Developer & Systems Architecture"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Enterprise Integration Specs
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Plug RCFI sovereign PKI capabilities directly into your core enterprise applications, SAP/Oracle ERPs, automated build pipelines, and transactional databases. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Left: Spec Matrix List */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded-lg">
                      <span className="material-symbols-outlined text-[24px]">
                        api
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-md text-title-md font-bold text-primary">
                        High-Throughput RESTful APIs
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Standardized JSON/REST endpoints to request CSR signing, query certificate validity matrices, and issue RFC 3161 timestamp payloads with sub-50ms latency. "}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <span className="px-2 py-0.5 bg-surface-container-low rounded font-mono text-label-sm text-primary">
                          POST /v1/pki/sign
                        </span>
                        <span className="px-2 py-0.5 bg-surface-container-low rounded font-mono text-label-sm text-primary">
                          POST /v1/tsa/timestamp
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded-lg">
                      <span className="material-symbols-outlined text-[24px]">
                        developer_board
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-md text-title-md font-bold text-primary">
                        PKCS#11 HSM Native Drivers
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Direct C-API and PKCS#11 dynamic libraries for seamless integration with Apache, NGINX, Microsoft Active Directory Certificate Services, and proprietary HSM clients. "}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <span className="px-2 py-0.5 bg-surface-container-low rounded font-mono text-label-sm text-on-surface-variant">
                          librcfi_pkcs11.so
                        </span>
                        <span className="px-2 py-0.5 bg-surface-container-low rounded font-mono text-label-sm text-on-surface-variant">
                          rcfi_cng.dll
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded-lg">
                      <span className="material-symbols-outlined text-[24px]">
                        receipt_long
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-md text-title-md font-bold text-primary">
                        {"e-TIMS & KRA ERP Integration"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Pre-configured cryptographic connector packages for signing electronic tax invoices in compliance with Kenya Revenue Authority e-TIMS technical specifications. "}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <span className="px-2 py-0.5 bg-surface-container-high rounded font-mono text-label-sm text-primary font-bold">
                          KRA Electronic Signature Compatible
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded-lg">
                      <span className="material-symbols-outlined text-[24px]">
                        code
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-md text-title-md font-bold text-primary">
                        {"SDKs & Client Libraries"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Tested production packages for Java Enterprise, Node.js/TypeScript, Python, and .NET Core with built-in retry mechanisms and signature envelope formatters (PAdES, XAdES, CAdES). "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Right: Code Snippet Simulator */}
                <div className="lg:col-span-6 bg-tertiary text-surface-container-lowest rounded-2xl p-space-lg shadow-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-error" />
                      <span className="w-3 h-3 rounded-full bg-surface-tint" />
                      <span className="w-3 h-3 rounded-full bg-secondary-fixed" />
                      <span className="ml-2 font-mono text-label-sm text-tertiary-fixed-dim">
                        sign-payload-pki.ts
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                      RCFI TypeScript SDK
                    </span>
                  </div>
                  <pre className="font-mono text-label-sm leading-relaxed overflow-x-auto p-4 bg-primary/40 rounded-lg text-surface-container">
                    <code className="text-tertiary-fixed">
                      <span className="text-secondary-fixed">
                        {"import"}
                      </span>
                      {" { RcfiTrustClient, SignatureProfile } "}
                      <span className="text-secondary-fixed">
                        {"from"}
                      </span>
                      {" "}
                      <span className="text-surface-container-high">
                        {"'@rcfi/trust-sdk'"}
                      </span>
                      {";\n\n"}
                      <span className="text-on-tertiary-container">
                        {"// Initialize client with sovereign credentials"}
                      </span>
                      {"\n"}
                      <span className="text-secondary-fixed">
                        {"const"}
                      </span>
                      {" client = "}
                      <span className="text-secondary-fixed">
                        {"new"}
                      </span>
                      {" RcfiTrustClient({\n  endpoint: "}
                      <span className="text-surface-container-high">
                        {"'https://api.pki.rcfi.co.ke'"}
                      </span>
                      {",\n  apiKey: process.env.RCFI_PKI_KEY,\n  subCaId: "}
                      <span className="text-surface-container-high">
                        {"'SUB-CA-KENYA-001'"}
                      </span>
                      {",\n});\n\n"}
                      <span className="text-secondary-fixed">
                        {"async function"}
                      </span>
                      {" signCorporateDocument(hashBuffer: Buffer) {\n  "}
                      <span className="text-on-tertiary-container">
                        {"// Generate RFC 3161 Qualified Signature & Timestamp"}
                      </span>
                      {"\n  "}
                      <span className="text-secondary-fixed">
                        {"const"}
                      </span>
                      {" assertion = "}
                      <span className="text-secondary-fixed">
                        {"await"}
                      </span>
                      {" client.signPayload({\n    digest: hashBuffer,\n    algorithm: "}
                      <span className="text-surface-container-high">
                        {"'SHA384'"}
                      </span>
                      {",\n    profile: SignatureProfile.PADES_LTA,\n    includeTsa: "}
                      <span className="text-secondary-fixed">
                        {"true"}
                      </span>
                      {", "}
                      <span className="text-on-tertiary-container">
                        {"// Stratum-1 calibrated"}
                      </span>
                      {"\n    legalJurisdiction: "}
                      <span className="text-surface-container-high">
                        {"'KE-KICA-83C'"}
                      </span>
                      {",\n  });\n\n  console.log("}
                      <span className="text-surface-container-high">
                        {"'Proof of Signature:'"}
                      </span>
                      {", assertion.ocspProof);\n  "}
                      <span className="text-secondary-fixed">
                        {"return"}
                      </span>
                      {" assertion.serializedToken;\n}"}
                    </code>
                  </pre>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      SDK Compatibility Matrix:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-surface-container-lowest font-mono text-label-sm">
                        Node.js 18+
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-surface-container-lowest font-mono text-label-sm">
                        Java 11 / 17 / 21
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-surface-container-lowest font-mono text-label-sm">
                        .NET 8.0
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-surface-container-lowest font-mono text-label-sm">
                        Python 3.10+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Legal & Regulatory Compliance Assurance Grid */}
          <section className="w-full bg-surface-container-low py-16">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  Regulatory Framework
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {"Sovereign Compliance & Non-Repudiation Stance"}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    policy
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {"Kenya Information & Communications Act"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Full compliance with Section 83C and subsequent ECSP regulations. Advanced electronic signatures generated through RCFI hold equivalent legal validity to traditional wet signatures across Kenyan commercial transactions. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    security
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    ISO/IEC 27001:2022 Certified
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" The operational PKI practice, certificate repositories, and HSM physical facilities are audited under strict Information Security Management Systems standards, safeguarding data confidentiality and resilience. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    verified
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Kenya Data Protection Act (2019)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" All private key handling, biometric verification logs, and audit trails remain strictly anchored to data centers located physically within the borders of the Republic of Kenya. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Dedicated Technical CTA Section */}
          <section className="w-full bg-primary text-on-primary py-24 relative overflow-hidden" id="architecture-audit">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary-container opacity-10 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative">
              <div className="bg-primary-container rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-on-secondary w-fit font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                    {" Direct Technical Engagement "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    {" Request a Technical Demonstration & PKI Architecture Review "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
                    {" Engage directly with our Principal Cryptographic Engineers and Lead Trust Architects. We will inspect your system architecture, evaluate your e-TIMS / ERP integration points, and formulate an enterprise migration roadmap. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 pt-2 font-label-sm text-label-sm text-primary-fixed-dim">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        check_circle
                      </span>
                      {" 60-Minute Deep Dive"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        check_circle
                      </span>
                      {" HSM Configuration Assessment"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        check_circle
                      </span>
                      {" Statutory Compliance Review"}
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-auto flex-shrink-0 flex flex-col sm:flex-row gap-4">
                  <a className="px-8 py-4 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-title-md text-title-md font-bold hover:bg-secondary-fixed-dim transition-all shadow-lg text-center flex items-center justify-center gap-2" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    <span className="">
                      Book Cryptographic Review
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      calendar_today
                    </span>
                  </a>
                  <a className="px-8 py-4 rounded-xl bg-surface-container-lowest/10 text-on-primary font-title-md text-title-md font-semibold hover:bg-surface-container-lowest/20 transition-all text-center flex items-center justify-center gap-2" href="mailto:pki@rcfi.co.ke">
                    <span className="">
                      Email Technical Desk
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      mail
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Inline interaction logic for architecture verification ladder */}
      </main>
      <footer className="w-full bg-tertiary text-surface-container-lowest border-t border-tertiary-container">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-7 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
                <span className="">
                  5th Floor, Hifadhi House, Along ICD Road
                </span>
                <span className="">
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
            <p className="">
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
      <PageScripts scripts={scripts} />
    </div>
  );
}
