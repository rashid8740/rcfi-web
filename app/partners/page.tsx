import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/partners/page.css";
import "@/styles/pages/partners/late.css";

export const metadata: Metadata = { title: "Partners & Ecosystem | RCFI Technology" };

export default function PartnersPage() {
  return (
    <div className="rcfi-partners" style={{ display: "contents" }}>
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
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30 sticky top-10 z-40">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-20">
            <div className="flex items-center gap-space-xl">
              <Link className="flex items-center gap-space-sm" data-path="home" href="/">
                <img alt="Exact replica of the real RCFI logo: A pixelated mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent background." className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
                    <span>
                      Services
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-80">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-trust-pki/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & PKI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Root CA, e-Signatures & cryptographics"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/cybersecurity-assurance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Cybersecurity & Assurance"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Threat intel, audit & compliance postures"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-health-governance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Governance
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Standards, protocols & interoperability"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/data-analytics-ai/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Data, Analytics & AI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Enterprise telemetry & machine intelligence"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-cloud-engineering/">
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
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="products" href="/products/certysign/">
                    <span>
                      Products
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/certysign/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          CertySign
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Enterprise digital trust platform
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/elano/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Elano
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Intelligent orchestrator engine
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/prezio/">
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
                    <span>
                      Academy
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-72">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/academy/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Academy Overview
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Capacities & institutional training"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/academy/digital-health-interoperability/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Interoperability
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"FHIR, HL7 & eHealth models"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/academy/digital-trust-cyber/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & Cyber"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Offensive & defensive assurance"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link aria-current="page" className="flex items-center gap-1 py-6 text-primary font-bold border-b-2 border-secondary transition-colors" data-path="partners" href="/partners/">
                    <span>
                      {"Partners & Ecosystem"}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-80">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item bg-surface-container-low/60" href="/partners/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Ecosystem Overview
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Alliances & statutory frameworks"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/partners/konza/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Konza Technopolis
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"National cloud & datacenter replication"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/partners/dha/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Agency (DHA)
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Clinical trust, HL7 FHIR conformance
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/partners/intellisoft/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          IntelliSOFT Consulting
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Digital health informatics integration
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/partners/crown-interactive/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Crown Interactive
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Public sector workflow platforms
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="insights" href="/insights/">
                    <span>
                      Insights
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          The Trust Layer
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Institutional perspectives
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/impact/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Impact Stories
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Deployments in production
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Knowledge Hub
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Documentation & whitepapers"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center gap-1 py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="company" href="/about/">
                    <span>
                      Company
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-56">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/about/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          About RCFI
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Mission & leadership"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/careers/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Careers
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Join our engineers
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/contact/">
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
                <Link className="px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold hover:bg-secondary-fixed-dim transition-colors shadow-sm" data-path="verify-a-document" href="/verify/">
                  Verify a Document
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)] font-semibold" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
          {/* 2. HERO SECTION */}
          <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl px-margin border-b border-outline-variant/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-mono tracking-wide">
                  <span className="material-symbols-outlined text-[15px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    hub
                  </span>
                  <span>
                    {"// PARTNERS & ECOSYSTEM"}
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
                  {" No institution builds trust alone. "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {" RCFI operates inside Kenya’s digital governance ecosystem — licensed by its regulators, delivering for its agencies, and building alongside partners who share one standard: production-grade, standards-based, sovereign. "}
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all shadow-md" href="#interactive-ecosystem-map">
                    <span>
                      Explore Ecosystem Map
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      account_tree
                    </span>
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" href="#partner-inquiry">
                    <span>
                      Partner With Us →
                    </span>
                  </a>
                </div>
                {/* Telemetry stats / summary badge cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md mt-space-sm">
                  <div className="flex flex-col p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                    <div className="flex items-center gap-1.5 text-secondary font-bold font-label-sm text-label-sm uppercase">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span>
                        100% In-Country
                      </span>
                    </div>
                    <span className="font-title-md text-body-md font-bold text-primary mt-1">
                      Sovereign Custody
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                      Zero cross-border key delegation
                    </span>
                  </div>
                  <div className="flex flex-col p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                    <div className="flex items-center gap-1.5 text-primary font-bold font-label-sm text-label-sm uppercase">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      <span>
                        Licensed ECSP
                      </span>
                    </div>
                    <span className="font-title-md text-body-md font-bold text-primary mt-1">
                      {"& Intermediate CA"}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                      TL/E-CSP 00014 under Cap 411A
                    </span>
                  </div>
                  <div className="flex flex-col p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                    <div className="flex items-center gap-1.5 text-secondary font-bold font-label-sm text-label-sm uppercase">
                      <span className="material-symbols-outlined text-[14px]">
                        policy
                      </span>
                      <span>
                        Standards-Based
                      </span>
                    </div>
                    <span className="font-title-md text-body-md font-bold text-primary mt-1">
                      National Interop
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                      {"HL7 FHIR, WebTrust & DPA 2019"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero Graphic Card */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-primary text-on-primary p-space-lg flex flex-col justify-between overflow-hidden shadow-2xl border border-primary-fixed-dim/20">
                  <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                      <span>
                        Ecosystem Interconnect Online
                      </span>
                    </div>
                    <span className="font-mono text-label-sm text-tertiary-fixed-dim">
                      KEN-TRUST-GRID
                    </span>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3 my-auto">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold text-xl shadow-md">
                      <span className="material-symbols-outlined text-[28px]">
                        token
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-surface-container-lowest">
                      Sovereign Trust Mesh
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed-dim">
                      {" Bridging statutory regulators, health registries, enterprise agricultural pipelines, and engineering integrators on one immutable root. "}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-primary-fixed font-mono text-label-sm">
                        MoICDE
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-primary-fixed font-mono text-label-sm">
                        Ministry of Health
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-primary-fixed font-mono text-label-sm">
                        Min. of Agriculture
                      </span>
                      <span className="px-2.5 py-1 rounded bg-tertiary-container text-primary-fixed font-mono text-label-sm">
                        ISV Partners
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 p-3 rounded-xl bg-tertiary flex items-center justify-between border border-tertiary-container">
                    <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                      Dual Root CA Locations
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-bold">
                      Konza Smart City • ICD Nairobi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 3. INTERACTIVE ECOSYSTEM MAP (Interactive Diagram with RCFI at Centre) */}
          <section className="w-full bg-surface-container-low py-space-xl px-margin" id="interactive-ecosystem-map">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div className="flex flex-col gap-1 max-w-2xl">
                  <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider font-mono">
                    // INTERACTIVE ARCHITECTURE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {" Interactive Ecosystem Topology "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Click any sovereign node or select category filters to trace cryptographically enforced relationships, statutory mandates, and production subpage documentation. "}
                  </p>
                </div>
                {/* Category Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30" id="filter-pill-container">
                  <button className="eco-filter-btn px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all bg-primary text-on-primary" data-category="all">
                    All Nodes
                  </button>
                  <button className="eco-filter-btn px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-primary" data-category="regulators">
                    {"Regulators & MoICDE"}
                  </button>
                  <button className="eco-filter-btn px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-primary" data-category="health">
                    Health (MoH)
                  </button>
                  <button className="eco-filter-btn px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-primary" data-category="agri">
                    Agriculture
                  </button>
                  <button className="eco-filter-btn px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-primary" data-category="tech">
                    {"Tech & Delivery"}
                  </button>
                </div>
              </div>
              {/* Interactive Stage: Diagram + Detail Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
                {/* Diagram Canvas Area (7 Cols) */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-space-md md:p-space-lg border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[500px]">
                  {/* SVG Interconnect Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" id="ecosystem-svg" viewBox="0 0 700 500">
                    {" "}
                    <defs>
                      {" "}
                      <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        {" "}
                        <stop offset="0%" stopColor="#006c49" stopOpacity="0.25" />
                        {" "}
                        <stop offset="100%" stopColor="#003221" stopOpacity="0.6" />
                        {" "}
                      </linearGradient>
                      {" "}
                      <linearGradient id="lineGradActive" x1="0%" x2="100%" y1="0%" y2="100%">
                        {" "}
                        <stop offset="0%" stopColor="#6cf8bb" stopOpacity="0.9" />
                        {" "}
                        <stop offset="100%" stopColor="#006c49" stopOpacity="1" />
                        {" "}
                      </linearGradient>
                      {" "}
                    </defs>
                    {" "}
                    {/* Connectors to Center (350, 250) */}
                    {" "}
                    {/* ICTA (140, 90) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-icta" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="140" y1="250" y2="90" />
                    {" "}
                    {/* Konza (350, 70) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-konza" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="350" y1="250" y2="70" />
                    {" "}
                    {/* CAK (560, 90) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-cak" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="560" y1="250" y2="90" />
                    {" "}
                    {/* ODPC (110, 250) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-odpc" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="110" y1="250" y2="250" />
                    {" "}
                    {/* DHA (590, 250) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-dha" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="590" y1="250" y2="250" />
                    {" "}
                    {/* AFA (140, 410) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-afa" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="140" y1="250" y2="410" />
                    {" "}
                    {/* Sugar Board (280, 430) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-sugar" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="280" y1="250" y2="430" />
                    {" "}
                    {/* IntelliSOFT (460, 430) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-intellisoft" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="460" y1="250" y2="430" />
                    {" "}
                    {/* Crown Interactive (570, 390) */}
                    {" "}
                    <line className="map-line transition-all duration-300" id="line-crown" stroke="url(#lineGrad)" strokeDasharray="4 4" strokeWidth="2" x1="350" x2="570" y1="250" y2="390" />
                    {" "}
                    {/* Background orbit rings */}
                    {" "}
                    <circle cx="350" cy="250" fill="none" r="180" stroke="#c0c9c2" strokeDasharray="6 6" strokeOpacity="0.3" strokeWidth="1" />
                    {" "}
                    <circle cx="350" cy="250" fill="none" r="90" stroke="#c0c9c2" strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1" />
                    {" "}
                  </svg>
                  {/* Interactive Nodes (Positioned absolutely or with flex geometry in relative space) */}
                  <div className="relative w-full h-[480px]">
                    {/* CENTER ANCHOR: RCFI */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer group" id="node-rcfi">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-28 h-28 rounded-full bg-secondary-container/40 animate-ping opacity-60" />
                        <span className="absolute w-24 h-24 rounded-full bg-secondary/15" />
                        <div className="w-20 h-20 rounded-2xl bg-primary text-on-primary flex flex-col items-center justify-center p-2 shadow-xl border-2 border-secondary-fixed transition-transform group-hover:scale-105">
                          <span className="font-bold text-base tracking-wider text-secondary-fixed">
                            RCFI
                          </span>
                          <span className="font-label-sm text-[9px] text-center text-primary-fixed leading-none mt-0.5">
                            Trust Anchor
                          </span>
                        </div>
                      </div>
                      <span className="mt-2 px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] font-semibold tracking-tight shadow">
                        {" Licensed Root/Intermediate CA "}
                      </span>
                    </div>
                    {/* TOP LEFT: ICT Authority */}
                    <button className="eco-node absolute left-[12%] top-[12%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none" data-cat="regulators" data-node="icta">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary border border-secondary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          account_balance
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1 group-hover:text-secondary">
                        ICTA
                      </span>
                      <span className="text-[9px] text-on-surface-variant font-mono">
                        Standards
                      </span>
                    </button>
                    {/* TOP CENTER: Konza Technopolis */}
                    <button className="eco-node absolute left-[50%] top-[8%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none ring-2 ring-secondary rounded-xl p-1 bg-surface-container-lowest" data-cat="regulators" data-node="konza">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          cloud_sync
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1">
                        Konza
                      </span>
                      <span className="text-[9px] text-secondary font-semibold font-mono">
                        Sovereign DC
                      </span>
                    </button>
                    {/* TOP RIGHT: CAK */}
                    <button className="eco-node absolute left-[82%] top-[12%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none" data-cat="regulators" data-node="cak">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary border border-secondary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          policy
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1 group-hover:text-secondary">
                        CAK
                      </span>
                      <span className="text-[9px] text-on-surface-variant font-mono">
                        Licensing Regulator
                      </span>
                    </button>
                    {/* MID LEFT: ODPC */}
                    <button className="eco-node absolute left-[8%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none" data-cat="regulators" data-node="odpc">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary border border-secondary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          shield
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1 group-hover:text-secondary">
                        ODPC
                      </span>
                      <span className="text-[9px] text-on-surface-variant font-mono">
                        Privacy DPA
                      </span>
                    </button>
                    {/* MID RIGHT: DHA */}
                    <button className="eco-node absolute left-[88%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none ring-2 ring-secondary rounded-xl p-1 bg-surface-container-lowest" data-cat="health" data-node="dha">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          health_and_safety
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1">
                        DHA (MoH)
                      </span>
                      <span className="text-[9px] text-secondary font-semibold font-mono">
                        FHIR Health Trust
                      </span>
                    </button>
                    {/* BOTTOM LEFT: AFA */}
                    <button className="eco-node absolute left-[15%] top-[82%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none" data-cat="agri" data-node="afa">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary border border-outline-variant flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          agriculture
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1 group-hover:text-secondary">
                        AFA
                      </span>
                      <span className="text-[9px] text-on-surface-variant font-mono">
                        Agri Supply
                      </span>
                    </button>
                    {/* BOTTOM MID-LEFT: Kenya Sugar Board */}
                    <button className="eco-node absolute left-[38%] top-[86%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none" data-cat="agri" data-node="sugar">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary border border-outline-variant flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          grain
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1 group-hover:text-secondary">
                        Sugar Board
                      </span>
                      <span className="text-[9px] text-on-surface-variant font-mono">
                        Quota Registry
                      </span>
                    </button>
                    {/* BOTTOM MID-RIGHT: IntelliSOFT Consulting */}
                    <button className="eco-node absolute left-[65%] top-[86%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none ring-2 ring-secondary rounded-xl p-1 bg-surface-container-lowest" data-cat="tech" data-node="intellisoft">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          code
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1">
                        IntelliSOFT
                      </span>
                      <span className="text-[9px] text-secondary font-semibold font-mono">
                        Health Systems
                      </span>
                    </button>
                    {/* BOTTOM RIGHT: Crown Interactive */}
                    <button className="eco-node absolute left-[85%] top-[80%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-transform hover:scale-110 group focus:outline-none ring-2 ring-secondary rounded-xl p-1 bg-surface-container-lowest" data-cat="tech" data-node="crown">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                          lan
                        </span>
                      </div>
                      <span className="font-label-sm text-xs font-bold text-primary mt-1">
                        Crown Int.
                      </span>
                      <span className="text-[9px] text-secondary font-semibold font-mono">
                        Gov Workflows
                      </span>
                    </button>
                  </div>
                  {/* Helper label */}
                  <div className="text-center font-label-sm text-label-sm text-on-surface-variant pt-2 border-t border-outline-variant/20 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      touch_app
                    </span>
                    <span>
                      {"Click any node to reveal statutory mandates, integration protocols & subpage documentation"}
                    </span>
                  </div>
                </div>
                {/* Relationship Detail Dynamic Card (5 Cols) */}
                <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-space-lg border border-outline-variant/30 shadow-sm flex flex-col justify-between" id="node-detail-panel">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold" id="detail-category-badge">
                        {" Government Infrastructure "}
                      </span>
                      <span className="font-mono text-label-sm text-on-surface-variant" id="detail-node-code">
                        REF: GOK-KONZA-01
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0" id="detail-node-icon">
                        <span className="material-symbols-outlined text-[28px]">
                          cloud_sync
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold leading-tight" id="detail-title">
                          {" Konza Technopolis Development Authority "}
                        </h3>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold" id="detail-subtitle">
                          {" National Sovereign Cloud & Datacenter Collaboration "}
                        </span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant pt-1 leading-relaxed" id="detail-description">
                      {" RCFI co-locates high-assurance cryptographic HSM engines within the Tier III National Sovereign Cloud at Konza Smart City. Provides automated geo-redundant root replication and zero-trust government enterprise trust services. "}
                    </p>
                    {/* Formal Engagement Specs Box */}
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2 mt-2 border border-outline-variant/20">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-on-surface-variant font-medium">
                          Statutory Mandate / Charter:
                        </span>
                        <span className="font-bold text-primary" id="detail-mandate">
                          {"Konza Technopolis Act & ICTA Cloud"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-on-surface-variant font-medium">
                          Production Cryptographic Role:
                        </span>
                        <span className="font-bold text-primary" id="detail-role">
                          Hardware Security Module Node Beta
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-on-surface-variant font-medium">
                          Interoperability Protocol:
                        </span>
                        <span className="font-bold text-secondary font-mono" id="detail-protocol">
                          PKCS#11 / REST CA / TLS 1.3
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow-sm" href="/partners/konza/" id="detail-action-link">
                      <span id="detail-link-text">
                        Explore Konza Subpage
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono" id="detail-status">
                      STATUS: ACTIVE IN PROD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 4. GOVERNMENT & REGULATORY ECOSYSTEM SECTION */}
          <section className="w-full bg-surface py-space-xl px-margin" id="government-regulatory">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-3xl">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider font-mono">
                  {"// GOVERNMENT & REGULATORY ECOSYSTEM"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Sovereign Institutions of the Republic of Kenya "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" RCFI does not operate in a legal vacuum. Our architectures are embedded inside statutory oversight, chartered by parliament, and audited against strict national cryptographic standards. "}
                </p>
              </div>
              {/* Authoritative Framing Notice Callout Banner */}
              <div className="p-space-md md:p-space-lg rounded-2xl bg-primary text-on-primary flex flex-col md:flex-row items-start md:items-center gap-space-md border-l-8 border-secondary-fixed shadow-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">
                    gavel
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed uppercase tracking-wider">
                    {"Regulatory & Statutory Framing Notice"}
                  </span>
                  <p className="font-body-md text-body-md text-surface-container-lowest leading-snug">
                    {" These are the sovereign institutions RCFI is licensed by, regulated under, or delivers for — established by national statute to anchor digital trust, security, and public-sector interoperability. They are regulatory and public authorities, distinct from commercial vendor partnerships. "}
                  </p>
                </div>
              </div>
              {/* Group 1: Ministry of Information, Communications & the Digital Economy (MoICDE) */}
              <div className="flex flex-col gap-space-md mt-2">
                <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    account_balance
                  </span>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    {"Ministry of Information, Communications & the Digital Economy (MoICDE)"}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                  {/* ICTA */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-secondary">
                          National Standards
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                          verified
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        ICT Authority (ICTA)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" National ICT standards and platforms we align and deliver against. Technical interoperability, government enterprise architecture, and GOK cloud guidelines. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        GOK Enterprise Arch
                      </span>
                      <span className="text-secondary font-semibold font-mono">
                        Compliant
                      </span>
                    </div>
                  </div>
                  {/* Konza Technopolis */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border-2 border-secondary/40 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">
                          DEDICATED SUBPAGE
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          cloud_done
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        Konza Technopolis (KoTDA)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Sovereign hosting, data-centre collaboration, and disaster-recovery replication for high-throughput cryptographic signing nodes. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                      <Link className="font-label-sm text-label-sm text-secondary font-bold hover:underline inline-flex items-center gap-1" href="/partners/konza/">
                        <span>
                          View Subpage → /partners/konza/
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* Communications Authority (CAK) */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary">
                          Licensing Authority
                        </span>
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          gavel
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        Communications Authority (CAK)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Our licensing regulator as Electronic Certification Service Provider (ECSP) and Intermediate CA under the National PKI framework (Lic. TL/E-CSP 00014). "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant font-mono">
                        Cap 411A Regulated
                      </span>
                      <span className="text-secondary font-bold">
                        Audited
                      </span>
                    </div>
                  </div>
                  {/* ODPC */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-secondary">
                          Privacy Regulator
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          lock
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        Office of Data Protection (ODPC)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" The statutory privacy regime every RCFI platform is engineered to honour under Kenya DPA 2019. Zero offshore metadata transmission. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Registered Entity
                      </span>
                      <span className="text-secondary font-semibold font-mono">
                        99.8% Index
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Group 2: Ministry of Health (MoH) */}
              <div className="flex flex-col gap-space-md mt-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    health_and_safety
                  </span>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    Ministry of Health (MoH)
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="p-space-lg rounded-2xl bg-surface-container-lowest border-2 border-tertiary/40 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                          {" National Clinical Trust Partner "}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                          Digital Health Act 2023
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-primary mt-1">
                        Digital Health Agency (DHA)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" National digital health certification, HL7 FHIR conformance, and secure clinical data exchange. RCFI provides the underlying public key infrastructure for digital medical certificates, doctor signing keys, and federated electronic patient record integrity across county and national hospitals. "}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2.5 py-1 rounded-md bg-surface-container-low font-mono text-label-sm text-primary">
                          HL7 FHIR R4
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-surface-container-low font-mono text-label-sm text-primary">
                          Kenya Health Information Exchange
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-surface-container-low font-mono text-label-sm text-primary">
                          Practitioner Smartcards
                        </span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <Link className="font-label-md text-label-md text-secondary font-bold hover:underline inline-flex items-center gap-1" href="/partners/dha/">
                        <span>
                          View Subpage (Pending Disclosure Clearance) → /partners/dha/
                        </span>
                      </Link>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[10px] font-bold">
                        STANDARDS CONFORMANCE
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                    <div className="flex flex-col gap-space-sm">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                        Clinical Trust Substrate
                      </span>
                      <h4 className="font-title-md text-title-md font-bold text-primary">
                        Evidentiary Record Protection
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" In clinical settings, an unverified electronic record presents legal and mortal danger. Our trust architecture ensures prescriptions, lab results, and patient discharge summaries cannot be surreptitiously altered post-discharge. "}
                      </p>
                      <ul className="flex flex-col gap-1.5 text-on-surface font-body-md text-body-md pt-2">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            verified
                          </span>
                          <span>
                            Timestamped audit log immutability
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            verified
                          </span>
                          <span>
                            Multi-county referral cryptographic verification
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-space-md p-3 rounded-xl bg-surface-container-lowest flex items-center justify-between text-xs font-mono">
                      <span>
                        MoH Interop Working Group
                      </span>
                      <span className="text-primary font-bold">
                        Active Co-Chair
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Group 3: Ministry of Agriculture */}
              <div className="flex flex-col gap-space-md mt-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    agriculture
                  </span>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    {"Ministry of Agriculture & Livestock Development"}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {/* AFA */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary">
                          Statutory Authority
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          inventory_2
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        Agriculture and Food Authority (AFA)
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Digital verification, supply chain integrity, and statutory export compliance frameworks. Generating verifiable digital phytosanitary certificates, export licenses, and produce consignment origin seals. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Export Seals: Cap 318
                      </span>
                      <span className="text-secondary font-bold font-mono">
                        Tamper-Proof
                      </span>
                    </div>
                  </div>
                  {/* Kenya Sugar Board */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary">
                          Commodity Registry
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          grain
                        </span>
                      </div>
                      <h4 className="font-title-md text-body-lg font-bold text-primary">
                        Kenya Sugar Board
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Secure electronic registries, commodity quota verification, and tamper-evident farmer payment authorization preventing illicit importation and uncertified mill allocations. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        Outgrower Ledger
                      </span>
                      <span className="text-secondary font-bold font-mono">
                        Cryptographic Seals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 5. TECHNOLOGY & DELIVERY PARTNERS SECTION */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin border-t border-b border-outline-variant/20" id="technology-delivery-partners">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-2xl">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider font-mono">
                  {"// TECHNOLOGY & DELIVERY PARTNERS"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Co-Engineering with Africa’s Best Integrators "}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" We combine RCFI’s licensed cryptographic core with proven production teams that deploy mission-critical systems across healthcare, governance, and public infrastructure. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* IntelliSOFT Consulting Card */}
                <div className="p-space-lg rounded-3xl bg-surface-container-low border border-secondary/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase">
                        {" Strategic Digital Health Partner "}
                      </span>
                      <span className="font-mono text-xs text-on-surface-variant">
                        15+ Years Clinical Deployments
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-bold text-xl border border-outline-variant/30">
                        {" iS "}
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                          IntelliSOFT Consulting
                        </h3>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"Pan-African Clinical Systems & Informatics"}
                        </span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant pt-2 leading-relaxed">
                      {" Strategic digital health partner with 15+ years of delivering clinical systems across Africa. Deep integration with OpenHIE architecture, KenyaEMR implementations, DHIS2, and national health exchanges to embed RCFI’s PKI trust root directly into clinical record workflows. "}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        OpenHIE Interoperability
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        KenyaEMR Signing
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        FHIR Data Exchange
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20 flex items-center justify-between">
                    <Link className="font-label-md text-label-md font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5" href="/partners/intellisoft/">
                      <span>
                        Explore Partnership Subpage → /partners/intellisoft/
                      </span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      handshake
                    </span>
                  </div>
                </div>
                {/* Crown Interactive Card */}
                <div className="p-space-lg rounded-3xl bg-surface-container-low border border-secondary/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold uppercase">
                        {" Public Sector Delivery Partner "}
                      </span>
                      <span className="font-mono text-xs text-on-surface-variant">
                        High-Capacity Workflows
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-bold text-xl border border-outline-variant/30">
                        {" CI "}
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                          Crown Interactive
                        </h3>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"Enterprise Process Automation & Public Platforms"}
                        </span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant pt-2 leading-relaxed">
                      {" Governance and public-sector platform delivery specialists. High-capacity enterprise workflow automation, municipal utility billing, statutory document archiving, and civic process transparency backed by non-repudiable digital stamps. "}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        Civic Portals
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        High-Scale Billing APIs
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-mono text-label-sm font-semibold">
                        E-Government Workflow
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20 flex items-center justify-between">
                    <Link className="font-label-md text-label-md font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5" href="/partners/crown-interactive/">
                      <span>
                        Explore Partnership Subpage → /partners/crown-interactive/
                      </span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      lan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 6. ECOSYSTEM SUBPAGES PREVIEW & SPECIFICATION ARCHITECTURE */}
          <section className="w-full bg-surface py-space-xl px-margin" id="subpage-architecture">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div className="flex flex-col gap-1 max-w-3xl">
                  <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider font-mono">
                    // ECOSYSTEM SUBPAGE ARCHITECTURE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {" Dedicated Partner Portals (5-Part Standard) "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Every sovereign partner subpage is built on our rigorous 5-point documentation standard: (1) Who they are, (2) The relationship, (3) What it means for clients, (4) Proof or artefact, and (5) Contextual CTA. "}
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                  {" Standardized Disclosure Framework "}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Subpage 1: Konza */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-secondary font-bold">
                        /partners/konza/
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    <h3 className="font-title-md text-body-lg font-bold text-primary">
                      Konza Technopolis
                    </h3>
                    <p className="font-body-md text-label-md text-on-surface-variant">
                      {" Co-location within National Sovereign Cloud, HSM cluster replication, and sovereign data residency guarantees. "}
                    </p>
                    <div className="p-2.5 rounded-lg bg-surface-container-low text-xs flex flex-col gap-1 font-mono">
                      <span className="text-on-surface-variant">
                        Artefact:
                      </span>
                      <span className="text-primary font-bold">
                        Tier III Co-location SLA
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 border-t border-outline-variant/20">
                    <Link className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors" href="/partners/konza/">
                      <span>
                        Open Portal
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Subpage 2: DHA */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-secondary font-bold">
                        /partners/dha/
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed" />
                    </div>
                    <h3 className="font-title-md text-body-lg font-bold text-primary">
                      Digital Health Agency
                    </h3>
                    <p className="font-body-md text-label-md text-on-surface-variant">
                      {" Digital Health Act conformance, practitioner key lifecycle, and cryptographic FHIR patient record exchange. "}
                    </p>
                    <div className="p-2.5 rounded-lg bg-surface-container-low text-xs flex flex-col gap-1 font-mono">
                      <span className="text-on-surface-variant">
                        Artefact:
                      </span>
                      <span className="text-primary font-bold">
                        HL7 FHIR Interop Matrix
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 border-t border-outline-variant/20">
                    <Link className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors" href="/partners/dha/">
                      <span>
                        Open Portal
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Subpage 3: IntelliSOFT */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-secondary font-bold">
                        /partners/intellisoft/
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    <h3 className="font-title-md text-body-lg font-bold text-primary">
                      IntelliSOFT Consulting
                    </h3>
                    <p className="font-body-md text-label-md text-on-surface-variant">
                      {" Clinical software integrations, OpenMRS and KenyaEMR native connectors, and joint field deployments. "}
                    </p>
                    <div className="p-2.5 rounded-lg bg-surface-container-low text-xs flex flex-col gap-1 font-mono">
                      <span className="text-on-surface-variant">
                        Artefact:
                      </span>
                      <span className="text-primary font-bold">
                        EMR PKI Connector SDK
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 border-t border-outline-variant/20">
                    <Link className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors" href="/partners/intellisoft/">
                      <span>
                        Open Portal
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Subpage 4: Crown Interactive */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label-sm text-secondary font-bold">
                        /partners/crown-interactive/
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    <h3 className="font-title-md text-body-lg font-bold text-primary">
                      Crown Interactive
                    </h3>
                    <p className="font-body-md text-label-md text-on-surface-variant">
                      {" Public sector process orchestration, revenue assurance platforms, and civic document verification pipelines. "}
                    </p>
                    <div className="p-2.5 rounded-lg bg-surface-container-low text-xs flex flex-col gap-1 font-mono">
                      <span className="text-on-surface-variant">
                        Artefact:
                      </span>
                      <span className="text-primary font-bold">
                        Gov Automation Blueprints
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-2 border-t border-outline-variant/20">
                    <Link className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors" href="/partners/crown-interactive/">
                      <span>
                        Open Portal
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 7. CONVERSION CALL TO ACTION & PARTNERSHIP INQUIRY */}
          <section className="w-full bg-tertiary text-on-tertiary py-space-xl px-margin" id="partner-inquiry">
            <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
              <div className="text-center flex flex-col items-center gap-2 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    handshake
                  </span>
                  <span>
                    Alliance Coordination
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold mt-1">
                  {" Building something that needs a trusted ecosystem behind it? "}
                </h2>
                <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-2xl leading-relaxed">
                  {" Whether you are a government department establishing Sub-CA issuance, an ISV integrating e-signatures, or a clinical software vendor conforming to FHIR standards, RCFI’s ecosystem is engineered to support you. "}
                </p>
                <div className="flex flex-wrap justify-center gap-space-md pt-2">
                  <a className="px-6 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-colors shadow-md" href="#alliance-form">
                    {" Partner With Us "}
                  </a>
                  <a className="px-6 py-3 rounded-full bg-primary-container text-surface-container-lowest border border-primary-fixed-dim/30 font-label-md text-label-md font-semibold hover:bg-primary-container/80 transition-colors" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    {" Schedule Ecosystem Briefing "}
                  </a>
                </div>
              </div>
              {/* Interactive Alliance Inquiry Form */}
              <div className="mt-space-md rounded-3xl bg-surface-container-lowest text-on-surface p-space-lg md:p-space-xl shadow-2xl border border-outline-variant/30" id="alliance-form">
                <div className="flex flex-col gap-1 mb-space-md text-center">
                  <h3 className="font-title-md text-headline-sm font-bold text-primary">
                    Initiate Strategic Partnership
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Connect with our Alliance Committee. Formal partnership submissions are processed under statutory non-disclosure frameworks. "}
                  </p>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-space-md" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('alliance-success').classList.remove('hidden'); this.reset();">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-primary">
                      Full Legal Name
                    </label>
                    <input className="h-11 px-4 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="e.g. Eng. Catherine Mutua" required type="text" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-primary">
                      Institution / Ministry / Entity
                    </label>
                    <input className="h-11 px-4 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="e.g. Ministry of Health Directorate" required type="text" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-primary">
                      Official Email Address
                    </label>
                    <input className="h-11 px-4 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="catherine@ministry.go.ke" required type="email" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-primary">
                      Engagement Classification
                    </label>
                    <select className="h-11 px-4 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md">
                      <option>
                        Government Ministry / Regulated Public Body
                      </option>
                      <option>
                        Statutory Healthcare Agency / FHIR Interop
                      </option>
                      <option>
                        Technology Delivery Partner / ISV Vendor
                      </option>
                      <option>
                        Agricultural Authority / Supply Chain Seal
                      </option>
                      <option>
                        Commercial Bank / Financial Relying Party
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="font-label-md text-label-md font-semibold text-primary">
                      {"Integration Scope & Statutory Requirements"}
                    </label>
                    <textarea className="p-4 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" placeholder="Summarize technical protocols, intended volumes, CPS compliance level, or infrastructure co-location requirements..." required rows={4} defaultValue="" />
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2 py-1">
                    <input className="w-4 h-4 rounded text-primary focus:ring-secondary" id="compliance_consent" required type="checkbox" />
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="compliance_consent">
                      {" I acknowledge that data transmitted is managed in strict alignment with Kenya DPA 2019 and RCFI Certificate Policies. "}
                    </label>
                  </div>
                  <div className="md:col-span-2 flex flex-col items-center gap-space-sm pt-2">
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all shadow-md" type="submit">
                      {" Dispatch Partnership Inquiry "}
                    </button>
                    <div className="hidden p-3 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-2" id="alliance-success">
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      <span>
                        Partnership inquiry securely logged with RCFI Technical Alliance Directorate. Response within 48h.
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* 8. DEEP FAT FOOTER (5 Columns) */}
      <footer className="w-full bg-tertiary text-surface-container-lowest border-t border-tertiary-container">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <img alt="RCFI Logo" className="h-7 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <span className="font-title-md text-title-md font-bold text-on-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mt-2">
                Enterprise digital infrastructure, sovereign trust models, and interoperability frameworks across Africa.
              </p>
              <div className="mt-3 flex flex-col gap-1 font-label-sm text-label-sm text-tertiary-fixed-dim">
                <span className="text-surface-container-lowest font-semibold">
                  Headquarters:
                </span>
                <span>
                  5th Floor, Hifadhi House, Along ICD Road
                </span>
                <span>
                  Nairobi, Kenya
                </span>
                <span className="mt-1">
                  +254 (0) 20 283 9200
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                Sovereign Platforms
              </span>
              <div className="flex flex-col gap-2 mt-2 font-body-md text-label-md">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/products/certysign/">
                  CertySign Trust Platform
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/products/elano/">
                  Elano Governance Engine
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/products/prezio/">
                  Prezio Verification Hub
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/services/digital-trust-pki/">
                  National PKI Infrastructure
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/services/digital-health-governance/">
                  Health Interoperability Fabric
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Partners & Ecosystem"}
              </span>
              <div className="flex flex-col gap-2 mt-2 font-body-md text-label-md">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors font-bold text-surface-container-lowest" href="/partners/">
                  Ecosystem Overview
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/partners/konza/">
                  Konza Technopolis
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/partners/dha/">
                  Digital Health Agency
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/partners/intellisoft/">
                  IntelliSOFT Consulting
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/partners/crown-interactive/">
                  Crown Interactive
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Trust & Governance"}
              </span>
              <div className="flex flex-col gap-2 mt-2 font-body-md text-label-md">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/trust/">
                  {"CA Repository & CPS"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/trust/">
                  {"Security & Trust Center"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/verify/">
                  Document Verification Portal
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/academy/">
                  RCFI Executive Academy
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" href="/insights/">
                  The Trust Layer Journal
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Licensing & Compliance"}
              </span>
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="p-2.5 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-0.5">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    CAK Licensed ECSP
                  </span>
                  <span className="font-label-sm text-[11px] text-tertiary-fixed-dim">
                    Lic: TL/E-CSP 00014 (Kenya)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-0.5">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    ISO/IEC 27001 Certified
                  </span>
                  <span className="font-label-sm text-[11px] text-tertiary-fixed-dim">
                    InfoSec Management
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-0.5">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    Kenya DPA Compliant
                  </span>
                  <span className="font-label-sm text-[11px] text-tertiary-fixed-dim">
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
              <Link className="hover:text-secondary-fixed transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/trust/">
                Certificate Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" href="/trust/">
                CPS Schedules
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* Interactive Ecosystem Script */}
      <PageScripts scripts={scripts} />
    </div>
  );
}
