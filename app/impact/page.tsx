import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/impact/page.css";
import "@/styles/pages/impact/late.css";

export const metadata: Metadata = { title: "Impact Stories | RCFI Technology" };

export default function ImpactPage() {
  return (
    <div className="rcfi-impact" style={{ display: "contents" }}>
      <svg className="inline-defs-container" aria-hidden="true" style={{ "position": "absolute", "width": "0", "height": "0", "overflow": "hidden" }} />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-primary text-on-primary h-10 border-b border-primary-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between text-label-sm font-label-sm">
            <div className="flex items-center space-x-4 overflow-hidden text-ellipsis whitespace-nowrap">
              <a className="flex items-center gap-1 text-surface-variant hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                <span className="material-symbols-outlined text-[14px]">
                  call
                </span>
                <span className="">
                  +254 (0) 20 283 9200
                </span>
              </a>
              <span className="text-outline hidden sm:inline">
                |
              </span>
              <a className="hidden sm:flex items-center gap-1 text-surface-variant hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[14px]">
                  mail
                </span>
                <span className="">
                  info@rcfi.co.ke
                </span>
              </a>
              <span className="text-outline hidden md:inline">
                |
              </span>
              <div className="hidden md:flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container" />
                </span>
                <span className="text-on-primary font-medium tracking-tight">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link className="text-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-1" href="/trust/">
                <span className="material-symbols-outlined text-[13px]">
                  security
                </span>
                <span className="">
                  CA Repository
                </span>
              </Link>
              <span className="text-outline">
                |
              </span>
              <Link className="text-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-1" href="/trust/">
                <span className="material-symbols-outlined text-[13px]">
                  verified_user
                </span>
                <span className="">
                  Trust Center
                </span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)] h-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <Link className="flex items-center gap-3 group" href="/">
                <img alt="RCFI Technology Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <div className="hidden xl:flex flex-col">
                  <span className="font-title-md text-title-md text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors">
                    RCFI Technology
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-none">
                    Reprodrive Center for Innovation Limited
                  </span>
                </div>
              </Link>
              <div className="hidden lg:flex items-center space-x-1 font-label-md text-label-md">
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="/services/">
                    <span className="">
                      Services
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-80 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/services/digital-trust-pki/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          vpn_key
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          {"Digital Trust & PKI"}
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Public Key Infrastructure & timestamping"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/services/cybersecurity-assurance/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          shield
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          {"Cybersecurity & Assurance"}
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Pen-testing, SOC & ISO 27001 readiness"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/services/digital-health-governance/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          health_and_safety
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          {"Digital Health Governance, Standards & Interoperability"}
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"FHIR standards & health data exchange"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/services/data-analytics-ai/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          hub
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          {"Data, Analytics & AI"}
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Enterprise intelligence & ML pipelines"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/services/digital-cloud-engineering/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          cloud_done
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          {"Digital & Cloud Engineering"}
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Resilient microservices & DevOps"}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="/products/certysign/">
                    <span className="">
                      Products
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-72 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/products/certysign/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          draw
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          CertySign
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Legally-binding e-signatures & seals"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/products/elano/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          token
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          Elano
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Decentralized identity & credentials"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" href="/products/prezio/">
                      <div className="p-1.5 rounded-md bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          receipt_long
                        </span>
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">
                          Prezio
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Certified electronic invoicing platform
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="/academy/">
                    <span className="">
                      Academy
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-80 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low font-semibold text-primary mb-1" href="/academy/">
                      <span className="material-symbols-outlined text-[18px]">
                        school
                      </span>
                      <span className="">
                        Academy Overview
                      </span>
                    </Link>
                    <div className="h-[1px] bg-surface-container-high my-1" />
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/academy/digital-health-interoperability/">
                      {"Digital Health Interoperability & Governance"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/academy/digital-trust-cyber/">
                      {"Digital Trust & Cyber Defence"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/academy/applied-data-ai/">
                      {"Applied Data & AI"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/academy/modern-engineering/">
                      Modern Engineering
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/academy/executive-briefings/">
                      Executive Briefings
                    </Link>
                  </div>
                </div>
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="/insights/">
                    <span className="">
                      Insights
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-64 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/insights/">
                      The Trust Layer
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/impact/">
                      Impact Stories
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/insights/">
                      Knowledge Hub
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/insights/">
                      The Sovereignty Series
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/insights/">
                      Newsroom
                    </Link>
                  </div>
                </div>
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="/about/">
                    <span className="">
                      Company
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-56 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/about/">
                      About RCFI
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/ecosystem/">
                      Ecosystem
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/careers/">
                      Careers
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" href="/contact/">
                      Contact
                    </Link>
                  </div>
                </div>
                <Link className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-secondary-container/80 text-primary font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all ml-2" href="/verify/">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified
                  </span>
                  <span className="">
                    Verify a Document
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-xs hover:bg-primary transition-colors" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[18px] mr-1.5">
                  calendar_month
                </span>
                <span className="">
                  Book a Meeting
                </span>
              </a>
              <button className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container focus:outline-none" id="mobile-menu-toggle" type="button">
                <span className="material-symbols-outlined text-[24px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="fixed inset-0 bg-inverse-surface/50 z-50 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden" id="mobile-backdrop" />
      <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-surface-container-lowest z-50 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl" id="mobile-menu-drawer">
        <div className="p-4 border-b border-surface-container-high flex items-center justify-between">
          <span className="font-title-md text-title-md text-primary">
            RCFI Navigation
          </span>
          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container" id="mobile-menu-close">
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Services
            </div>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                {"Digital Trust & PKI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                {"Cybersecurity & Assurance"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="digital-health-governance" href="/services/digital-health-governance/">
                Digital Health Governance
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                {"Data, Analytics & AI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                {"Digital & Cloud Engineering"}
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Products
            </div>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" data-path="products-certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="products-elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="products-prezio" href="/products/prezio/">
                Prezio
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Academy
            </div>
            <div className="pl-3 space-y-2">
              <a className="block text-body-md text-on-surface-variant" data-path="academy-overview" href="#">
                Overview
              </a>
              <Link className="block text-body-md text-on-surface-variant" data-path="academy-digital-health" href="/academy/digital-health-interoperability/">
                Digital Health Interoperability
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="academy-cyber-defence" href="/academy/digital-trust-cyber/">
                Cyber Defence
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="academy-data-ai" href="/academy/applied-data-ai/">
                {"Applied Data & AI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="academy-modern-engineering" href="/academy/modern-engineering/">
                Modern Engineering
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Insights
            </div>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" data-path="insights-trust-layer" href="/insights/">
                The Trust Layer
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="impact-stories" href="/impact/">
                Impact Stories
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="knowledge-hub" href="/insights/">
                Knowledge Hub
              </Link>
              <Link className="block text-body-md text-on-surface-variant" data-path="newsroom" href="/insights/">
                Newsroom
              </Link>
            </div>
          </div>
          <div className="pt-2">
            <Link className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container text-primary font-semibold" data-path="verify-document" href="/verify/">
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>
              <span className="">
                Verify a Document
              </span>
            </Link>
          </div>
        </div>
      </div>
      <main className="w-full pt-[120px] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Header / Hero with Datacenter Ambience */}
          <section className="relative w-full bg-primary overflow-hidden text-on-primary">
            {/* Atmospheric Ambient Glows and Optical Gradients */}
            <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[520px] h-[520px] rounded-full bg-secondary-fixed/10 blur-[130px] pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Text Pillar */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-tertiary-container/60 text-secondary-fixed">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
                    </span>
                    <span className="font-label-sm text-label-sm tracking-wide uppercase">
                      National Infrastructure In Production
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg lg:text-[54px] lg:leading-[62px] text-on-primary tracking-tight font-bold">
                    {" Impact Stories — "}
                    <br className="hidden sm:inline" />
                    <span className="text-secondary-fixed">
                      Sovereign Trust
                    </span>
                    {" in Action Across Africa "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    {" Explore how national regulators, tier-1 financial institutions, healthcare providers, and judicial bodies scale cryptographic trust, automate statutory compliance, and safeguard data sovereignty with accredited RCFI infrastructure. "}
                  </p>
                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-on-primary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md" href="#case-studies">
                      <span className="">
                        Explore Case Studies
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        south
                      </span>
                    </a>
                    <Link className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all" data-path="book-a-meeting" href="/partners/">
                      <span className="">
                        Partner with RCFI
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_outward
                      </span>
                    </Link>
                  </div>
                  {/* Trust Badges Strip */}
                  <div className="pt-6 flex flex-wrap items-center gap-6 text-surface-variant font-label-sm text-label-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        verified
                      </span>
                      <span className="">
                        CAK Licenced ECSP #TL/E-CSP 00014
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        lock
                      </span>
                      <span className="">
                        FIPS 140-2 Level 3 Cryptography
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                        gavel
                      </span>
                      <span className="">
                        KICA 83C Legal Invariability
                      </span>
                    </div>
                  </div>
                </div>
                {/* Visual / Server Room Graphic Pillar */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-tertiary">
                    <img className="w-full h-80 lg:h-[420px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" data-alt="Futuristic Nairobi Sovereign Data Centre corridor with glowing teal and emerald server rack lights, high security glass partitions, cable trays hanging overhead, and two technical security analysts walking through the corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbKcId8uuEkTj2L-jicPrWv1TH8TKBE20h9NmcO3GzjIsqfF22DYm4qWhjhd9gAio0wDuk5bA3G8jAsZDHuApW4apDtkMO5GdBbElwVVOlBVuyGhTTPk9qus-ejlrXg6FAaJ_atBpdECGUqij-zDTxq_D4sDtT299WUgqW_zyYtvVkGDOkTuqUMkBE_BpPgSbpMETNaWp1o233NpeYCyuuIcqliB8o7Y2wy_KH8aD5iL2iUBhnq9X6" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                    {/* Live Sovereign Telemetry Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-container/90 backdrop-blur-md text-on-primary shadow-lg space-y-2">
                      <div className="flex items-center justify-between text-label-sm font-label-sm">
                        <span className="text-secondary-fixed uppercase tracking-wider font-semibold">
                          Nairobi Datacenter Core #01
                        </span>
                        <span className="flex items-center gap-1 text-secondary-fixed">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                          {" LIVE TELEMETRY "}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-1 text-label-md font-label-md">
                        <div>
                          <div className="text-surface-variant text-label-sm font-label-sm">
                            Certificates Validated
                          </div>
                          <div className="font-semibold text-on-primary">
                            1,489 req / sec
                          </div>
                        </div>
                        <div>
                          <div className="text-surface-variant text-label-sm font-label-sm">
                            Hardware Cryptographic Latency
                          </div>
                          <div className="font-semibold text-secondary-fixed">
                            0.38 ms (FIPS 140-2)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Metric Proof-Points Bar */}
          <section className="w-full bg-surface-container-lowest shadow-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-lg text-display-lg font-bold text-primary">
                      50M
                    </span>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      +
                    </span>
                  </div>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                    Transactions Secured
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Non-repudiated annual signed operations across government and banking rails.
                  </p>
                </div>
                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-lg text-display-lg font-bold text-primary">
                      47
                    </span>
                    <span className="font-title-md text-title-md text-secondary font-semibold">
                      / 47
                    </span>
                  </div>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                    Kenyan Counties
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Active judicial registry, hospital exchange, and revenue authority deployments.
                  </p>
                </div>
                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      {"<"}
                    </span>
                    <span className="font-display-lg text-display-lg font-bold text-primary">
                      0.42
                    </span>
                    <span className="font-label-md text-label-md text-secondary font-bold">
                      ms
                    </span>
                  </div>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                    TSA Drift Window
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Kenya Bureau of Standards traceable atomic cryptographic timestamping.
                  </p>
                </div>
                {/* Stat 4 */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-lg text-display-lg font-bold text-primary">
                      99.98
                    </span>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      %
                    </span>
                  </div>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                    Uptime SLA Delivered
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Fault-tolerant dual-zone OCSP verification cluster in Nairobi and Mombasa.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Filter & Navigation */}
          <section className="w-full bg-background pt-16 pb-6" id="case-studies">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Documented Proof
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
                    Verified Case Studies
                  </h2>
                </div>
                {/* Interactive Sector Filters */}
                <div className="flex flex-wrap items-center gap-2" id="filter-container">
                  <button className="filter-btn active-filter px-4 py-2 rounded-full font-label-md text-label-md bg-primary text-on-primary transition-all" data-filter="all">
                    {" All Sectors (4) "}
                  </button>
                  <button className="filter-btn px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all" data-filter="judiciary">
                    {" Judiciary & Gov "}
                  </button>
                  <button className="filter-btn px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all" data-filter="health">
                    {" Health Systems "}
                  </button>
                  <button className="filter-btn px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all" data-filter="financial">
                    {" Financial Services "}
                  </button>
                  <button className="filter-btn px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all" data-filter="enterprise">
                    {" Public Enterprises "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Editorial Bento Case Studies Matrix */}
          <section className="w-full bg-background pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="cases-grid">
                {/* Case 01: Judicial Digital Transformation (Span 7) */}
                <article className="case-card lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden" data-category="judiciary">
                  <div className="p-8 space-y-6">
                    {/* Badges & Identity Header */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                          Judicial Transformation
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          KICA Sec. 83C
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-bold">
                        #01
                      </span>
                    </div>
                    {/* Title & Pitch */}
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary font-bold tracking-tight leading-snug">
                        {" Automating Legal Evidentiary Weight with KICA 83C Qualified Electronic Signatures "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" How Kenya’s courts eliminated physical document handling bottlenecks, preventing retroactive affidavit alterations across appellate registries with the high-assurance CertySign PKI Suite. "}
                      </p>
                    </div>
                    {/* Visual Component: Cryptographic Verification Pipeline */}
                    <div className="p-5 rounded-xl bg-surface-container-low space-y-3">
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                        <span className="font-semibold text-primary">
                          Cryptographic Filing Lifecycle
                        </span>
                        <span className="text-secondary font-medium">
                          {"Valid Trust Chain (AATL & CAK Root)"}
                        </span>
                      </div>
                      {/* Verification Flow Mini Graphic */}
                      <div className="grid grid-cols-3 gap-2 text-center text-label-sm font-label-sm">
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-xs flex flex-col items-center">
                          <span className="material-symbols-outlined text-secondary text-[20px] mb-1">
                            fingerprint
                          </span>
                          <span className="font-semibold text-on-surface">
                            Advocate Auth
                          </span>
                          <span className="text-outline text-[10px]">
                            National PKI Token
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-xs flex flex-col items-center">
                          <span className="material-symbols-outlined text-secondary text-[20px] mb-1">
                            schedule
                          </span>
                          <span className="font-semibold text-on-surface">
                            RFC 3161 TSA
                          </span>
                          <span className="text-outline text-[10px]">
                            ±0.3ms Atomic Time
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-secondary-container/40 flex flex-col items-center text-on-secondary-container">
                          <span className="material-symbols-outlined text-[20px] mb-1">
                            gavel
                          </span>
                          <span className="font-semibold">
                            Irrevocable
                          </span>
                          <span className="text-[10px]">
                            Section 83C Invariable
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Key Results Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          82%
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Filing Turnaround Reduction
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          100%
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Legal Evidentiary Standing
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          2.4M
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Judicial Rulings Sealed
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Meta & Link */}
                  <div className="px-8 py-4 bg-surface-container flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Deployed Product: "}
                      <strong className="text-primary">
                        CertySign PKI Enterprise
                      </strong>
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" data-path="products-certysign" href="#">
                      <span className="">
                        Technical Brief
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
                {/* Case 02: Sovereign Healthcare Interoperability (Span 5) */}
                <article className="case-card lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden" data-category="health">
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                          Healthcare Interop
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          HL7 FHIR R4
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-bold">
                        #02
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-sm text-headline-sm lg:text-headline-md lg:leading-snug text-primary font-bold tracking-tight">
                        {" Unifying Patient Records Across 12 Regional Health Facilities "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Seamless federated access to diagnostics and prescriptions while meeting strict Kenya Data Protection Act (DPA 2019) consent mandates without centralized data harvesting. "}
                      </p>
                    </div>
                    {/* Graphic Component: Interoperability Mesh */}
                    <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                      <div className="flex items-center justify-between font-label-sm text-label-sm">
                        <span className="text-primary font-semibold">
                          FHIR Trust Gateway
                        </span>
                        <span className="text-secondary font-medium">
                          mTLS 1.3 Active
                        </span>
                      </div>
                      {/* Mini visual bar */}
                      <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ "width": "94%" }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant">
                        <span className="">
                          94% Diagnostic Sync Speedup
                        </span>
                        <span className="">
                          Zero Cross-Border Exposure
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          1.1M+
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Decentralized Patient IDs
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          Zero
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Consent Infractions Reported
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-surface-container flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Framework: "}
                      <strong className="text-primary">
                        Elano Identity + FHIR Gateway
                      </strong>
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" data-path="digital-health-governance" href="#">
                      <span className="">
                        Read Architecture
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
                {/* Case 03: Banking & SACCO Network Security (Span 5) */}
                <article className="case-card lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden" data-category="financial">
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                          Tier-1 Banking
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          CBK Guidelines
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-bold">
                        #03
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-sm text-headline-sm lg:text-headline-md lg:leading-snug text-primary font-bold tracking-tight">
                        {" Securing Loan Guarantees & Inter-Bank Mandates via Dedicated HSMs "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Protecting high-value wholesale transactions with air-gapped cryptographic hardware security modules (FIPS 140-2 Level 3) housed physically in Nairobi. "}
                      </p>
                    </div>
                    {/* Hardware Security Metrics Visual */}
                    <div className="p-4 rounded-xl bg-surface-container-low space-y-3">
                      <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          shield
                        </span>
                        <span className="">
                          FIPS 140-2 Level 3 Sovereign Boundary
                        </span>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {" Private key assets never leave dedicated hardware partitions, immune to external export or hypervisor surveillance. "}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          KES 420B+
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Volume Mandated Safely
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          {"< 35ms"}
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Signing Latency per Tranche
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-surface-container flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Core Security: "}
                      <strong className="text-primary">
                        {"RCFI Root PKI & HSM Cluster"}
                      </strong>
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" data-path="cybersecurity-assurance" href="#">
                      <span className="">
                        Audit Review
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
                {/* Case 04: Enterprise Revenue & Invoice Certification (Span 7) */}
                <article className="case-card lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden" data-category="enterprise">
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                          e-TIMS Compliance
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          Statutory Non-Repudiation
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-bold">
                        #04
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary font-bold tracking-tight leading-snug">
                        {" Direct e-TIMS Cryptographic Integration for Commercial Conglomerates "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {" Equipping national logistics and manufacturing supply chains with Prezio e-Invoice platform: sub-50ms cryptographic XML payload sealing and instant fiscal authority clearance. "}
                      </p>
                    </div>
                    {/* Visual Flow / Data Exchange */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-surface-container-low space-y-1">
                        <div className="text-label-sm font-label-sm text-secondary font-semibold">
                          Throughput Capacity
                        </div>
                        <div className="font-headline-sm text-headline-sm text-primary font-bold">
                          12,000 / min
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Concurrent batch invoice cryptographic signing without ERP latency drag.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low space-y-1">
                        <div className="text-label-sm font-label-sm text-secondary font-semibold">
                          Tax Audit Reconciliation
                        </div>
                        <div className="font-headline-sm text-headline-sm text-primary font-bold">
                          Zero Discrepancy
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Pre-validated fiscal data eliminates VAT audit penalties across all subsidiaries.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          18.5M+
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Fiscal Invoices Sealed
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          99.99%
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          First-Pass Acceptance Rate
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary">
                          {"< 48ms"}
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          API Response Time
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-surface-container flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Deployed Product: "}
                      <strong className="text-primary">
                        Prezio Fiscal Trust Gateway
                      </strong>
                    </span>
                    <Link className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" data-path="products-prezio" href="/impact/">
                      <span className="">
                        View Case Brief
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Pan-African Institutional Trust Network (Dark Pine Section) */}
          <section className="w-full bg-primary text-on-primary py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                    {" "}
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    hub
                  </span>
                  <span className="">
                    Sovereign Footprint
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                  {" Anchoring Institutional Trust Across Africa "}
                </h2>
                <p className="font-body-lg text-body-lg text-surface-variant">
                  {" RCFI's root infrastructure operates under domestic jurisdiction, ensuring sensitive enterprise, citizen, and legal data remains insulated from geopolitical export risk. "}
                </p>
              </div>
              {/* 3 Pillar Architectural Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Node 1 */}
                <div className="p-8 rounded-2xl bg-tertiary/70 backdrop-blur-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[28px]">
                      account_balance
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-on-primary font-bold">
                    Domestic Data Sovereignty
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                    {" All cryptographic private keys, HSM clusters, and timestamp master clocks are strictly domiciled within Kenyan soil in compliance with CAK licensing and ODPC registration. "}
                  </p>
                  <div className="pt-2 text-label-sm font-label-sm text-secondary-fixed flex items-center gap-1">
                    <span className="">
                      Zero Extraterritorial Exposure
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                  </div>
                </div>
                {/* Node 2 */}
                <div className="p-8 rounded-2xl bg-tertiary/70 backdrop-blur-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[28px]">
                      verified_user
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-on-primary font-bold">
                    Standardized Interoperability
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                    {" Engineered natively against ITU-T X.509, RFC 5280, HL7 FHIR, and ETSI standards, enabling cross-border validation across EAC and AfCFTA trade corridors. "}
                  </p>
                  <div className="pt-2 text-label-sm font-label-sm text-secondary-fixed flex items-center gap-1">
                    <span className="">
                      Universal ETSI / ITU Conformity
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                  </div>
                </div>
                {/* Node 3 */}
                <div className="p-8 rounded-2xl bg-tertiary/70 backdrop-blur-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[28px]">
                      speed
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-on-primary font-bold">
                    Carrier-Grade Resilience
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                    {" Multi-datacenter low-latency architecture with high-availability OCSP responders capable of validating over 15,000 cryptographic operations per second. "}
                  </p>
                  <div className="pt-2 text-label-sm font-label-sm text-secondary-fixed flex items-center gap-1">
                    <span className="">
                      99.98% High Availability SLA
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Conversion CTA Strip */}
          <section className="w-full bg-surface-container py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-xs">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  rocket_launch
                </span>
                <span className="">
                  Initiate Deployment
                </span>
              </div>
              <div className="space-y-3">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                  {" Ready to anchor your organization's digital operations in sovereign trust? "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                  {" Schedule an enterprise architectural consultation with our principal cryptographic and compliance engineers in Nairobi. "}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:shadow-lg transition-all" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                  <span className="">
                    Schedule Strategy Briefing
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                </a>
                <a className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all" data-path="ca-repository" href="#">
                  <span className="">
                    View Technical Documentation
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    description
                  </span>
                </a>
              </div>
              <div className="pt-4 flex items-center justify-center gap-6 font-label-sm text-label-sm text-on-surface-variant">
                <span className="">
                  {"Direct Advisory Line: "}
                  <strong>
                    +254 (0) 20 283 9200
                  </strong>
                </span>
                <span className="">
                  •
                </span>
                <span className="">
                  {"Licence: "}
                  <strong>
                    TL/E-CSP 00014
                  </strong>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary pt-16 pb-12 border-t border-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-container/80">
            <div className="space-y-4">
              <div>
                <h4 className="font-title-md text-title-md text-on-primary font-bold tracking-tight">
                  RCFI Technology
                </h4>
                <p className="font-label-sm text-label-sm text-surface-variant mt-0.5">
                  Reprodrive Center for Innovation Limited
                </p>
              </div>
              <p className="font-body-md text-body-md text-surface-variant">
                Enterprise digital trust architecture, accredited certification authorities, and national interoperability infrastructure across Africa.
              </p>
              <div className="pt-2 space-y-2 font-label-md text-label-md text-surface-variant">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    location_on
                  </span>
                  <span className="">
                    Delta Corner Annex, Westlands, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    call
                  </span>
                  <span className="">
                    +254 (0) 20 283 9200
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    mail
                  </span>
                  <span className="">
                    info@rcfi.co.ke
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                Sovereign Platforms
              </h4>
              <ul className="space-y-2.5 font-body-md text-body-md text-surface-variant">
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="products-certysign" href="/products/certysign/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      CertySign PKI Suite
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="products-elano" href="/products/elano/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Elano Identity Fabric
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="products-prezio" href="/products/prezio/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Prezio e-Invoice Trust
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="digital-trust-pki" href="/trust/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Timestamp Authority (TSA)
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="verify-document" href="/verify/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Online Document Verification
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                {"Trust & Governance"}
              </h4>
              <ul className="space-y-2.5 font-body-md text-body-md text-surface-variant">
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="ca-repository" href="/trust/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Certification Practice Statement
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="ca-repository" href="/trust/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      {"Root CA & CRL Distribution"}
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="trust-center" href="/trust/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Sovereign Trust Center
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      {"Health Data Governance & FHIR"}
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-2" data-path="knowledge-hub" href="/privacy/">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward_ios
                    </span>
                    <span className="">
                      Kenya DPA Compliance Kit
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-title-md text-title-md text-on-primary font-semibold">
                {"Accreditation & Standards"}
              </h4>
              <div className="space-y-3 font-label-md text-label-md">
                <div className="p-3 rounded-lg bg-tertiary border border-primary-container">
                  <div className="text-secondary-fixed font-bold">
                    CAK Licensed ECSP
                  </div>
                  <div className="text-surface-variant font-label-sm text-label-sm">
                    Licence TL/E-CSP 00014 under the Kenya Information and Communications Act.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-tertiary border border-primary-container">
                  <div className="text-secondary-fixed font-bold">
                    ISO/IEC 27001 Certified
                  </div>
                  <div className="text-surface-variant font-label-sm text-label-sm">
                    Enterprise Information Security Management System compliant.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-tertiary border border-primary-container">
                  <div className="text-secondary-fixed font-bold">
                    Data Protection Act 2019
                  </div>
                  <div className="text-surface-variant font-label-sm text-label-sm">
                    {"Registered Data Controller & Processor (ODPC Kenya)."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-label-sm font-label-sm text-surface-variant">
            <div className="">
              © 2025 Reprodrive Center for Innovation Limited (RCFI). All Sovereign Rights Reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                {"Legal & CP/CPS"}
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/privacy/">
                Privacy Statement
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                Security Disclosures
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
