import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/services-cybersecurity-assurance/page.css";
import "@/styles/pages/services-cybersecurity-assurance/late.css";

export const metadata: Metadata = { title: "Cybersecurity & Assurance | RCFI Technology" };

export default function ServicesCybersecurityAssurancePage() {
  return (
    <div className="rcfi-services-cybersecurity-assurance" style={{ display: "contents" }}>
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
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
              <Link className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-xs hover:bg-primary transition-colors" href="/contact/">
                <span className="">
                  Book a Meeting
                </span>
              </Link>
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
            <Link className="block font-label-md text-label-md font-bold text-primary mb-2" href="/services/">
              Services
            </Link>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" href="/services/digital-trust-pki/">
                {"Digital Trust & PKI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/services/cybersecurity-assurance/">
                {"Cybersecurity & Assurance"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/services/digital-health-governance/">
                {"Digital Health Governance, Standards & Interoperability"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/services/data-analytics-ai/">
                {"Data, Analytics & AI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/services/digital-cloud-engineering/">
                {"Digital & Cloud Engineering"}
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Products
            </div>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/products/elano/">
                Elano
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/products/prezio/">
                Prezio
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <Link className="block font-label-md text-label-md font-bold text-primary mb-2" href="/academy/">
              Academy
            </Link>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" href="/academy/">
                Overview
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/academy/digital-health-interoperability/">
                {"Digital Health Interoperability & Governance"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/academy/digital-trust-cyber/">
                {"Digital Trust & Cyber Defence"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/academy/applied-data-ai/">
                {"Applied Data & AI"}
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/academy/modern-engineering/">
                Modern Engineering
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/academy/executive-briefings/">
                Executive Briefings
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <Link className="block font-label-md text-label-md font-bold text-primary mb-2" href="/insights/">
              Insights
            </Link>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" href="/insights/">
                The Trust Layer
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/impact/">
                Impact Stories
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/insights/">
                Knowledge Hub
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/insights/">
                The Sovereignty Series
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/insights/">
                Newsroom
              </Link>
            </div>
          </div>
          <div className="border-b border-surface-container-high pb-2">
            <div className="font-label-md text-label-md font-bold text-primary mb-2">
              Company
            </div>
            <div className="pl-3 space-y-2">
              <Link className="block text-body-md text-on-surface-variant" href="/about/">
                About RCFI
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/ecosystem/">
                Ecosystem
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/careers/">
                Careers
              </Link>
              <Link className="block text-body-md text-on-surface-variant" href="/contact/">
                Contact
              </Link>
            </div>
          </div>
          <div className="pt-2 space-y-3">
            <Link className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container text-primary font-semibold" href="/verify/">
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>
              <span className="">
                Verify a Document
              </span>
            </Link>
            <Link className="flex items-center justify-center p-2.5 rounded-lg bg-primary-container text-on-primary font-semibold" href="/contact/">
              <span className="">
                Book a Meeting
              </span>
            </Link>
          </div>
        </div>
      </div>
      <main className="w-full pt-[120px] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <section className="relative w-full bg-primary text-on-primary overflow-hidden pb-20 lg:pb-28">
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ "backgroundImage": "radial-gradient(circle at 80% 20%, #4edea3 0%, transparent 45%), radial-gradient(circle at 15% 85%, #6cf8bb 0%, transparent 40%)" }} />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14 relative z-10">
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/20 text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                  {" CAK Licensed ECSP (TL/E-CSP 00014) "}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/20 text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  {" ISO/IEC 27001:2022 Certified "}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/20 text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    gavel
                  </span>
                  {" Kenya DPA 2019 Compliant "}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <span className="text-secondary-fixed font-label-md text-label-md uppercase tracking-wider">
                      Practice Division: Digital Assurance
                    </span>
                    <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight leading-none">
                      {" Cybersecurity & Assurance — "}
                      <span className="text-secondary-fixed">
                        Sovereign Defense
                      </span>
                      {" for Regulated Africa "}
                    </h1>
                  </div>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    {" Independent offensive penetration testing, ISO 27001:2022 readiness, 24/7 sovereign SOC telemetry, and statutory vulnerability assessments engineered for tier-1 financial institutions, healthcare data backbones, and national public registries. "}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-colors shadow-lg" href="#audit-commission">
                      <span className="material-symbols-outlined text-[20px]">
                        shield_lock
                      </span>
                      <span className="">
                        Request Security Audit
                      </span>
                    </a>
                    <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-surface-container-highest/20 transition-all" href="#assurance-pillars">
                      <span className="material-symbols-outlined text-[20px]">
                        architecture
                      </span>
                      <span className="">
                        Explore Framework
                      </span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative group bg-surface-container-low">
                    <div className="w-full h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="High security data center interior in Nairobi, glowing teal server racks with fiber optic routing, security operations command personnel walking on raised anti-static glass floor, deep pine and cyan server indicators." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvH1dseAa8jelgLt4A_c0W2FtbhOwWf47qfkst0a_jt-v-0f70jUjB3Oz5ffneFSlGBv83SrKWx2fwZPUi7WyQjm294f14kOkwUzk2HjFlFf_YXs9flDMZMxMm381i2NQcOyiXIJHukp6i-Cp-q2mMhEJdZ7JVpseD81xi_JeHWjA0Bkcofp41PKu3JFU9q8KtaDP7slOb3mBZHwoN8zxyrsVP0dVoAfvYVxzdQguuzj5K4sI_7qiS')" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                      <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary-fixed">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                          NBO-01 Sovereign Vault
                        </span>
                        <span className="font-mono">
                          FIPS 140-2 LEVEL 3
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-surface-container-lowest font-medium">
                        Physical telemetry isolated within Kenyan jurisdictional boundaries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                    Audit Precision
                  </span>
                  <span className="p-2 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      verified_user
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-lg text-display-lg text-primary tracking-tight leading-none font-bold">
                    0
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    Undetected Flaws
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Critical vulnerabilities overlooked across 140+ institutional audits.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                    Monitoring
                  </span>
                  <span className="p-2 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      security_update_good
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-lg text-display-lg text-primary tracking-tight leading-none font-bold">
                    24/7/365
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    Sovereign SOC Telemetry
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Continuous proactive SIEM detection routed via local fiber nodes.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                    Jurisdiction
                  </span>
                  <span className="p-2 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      policy
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-lg text-display-lg text-primary tracking-tight leading-none font-bold">
                    100%
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    Kenyan Data Sovereignty
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Zero cross-border telemetry exfiltration under ODPC protocols.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                    Custody Standard
                  </span>
                  <span className="p-2 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      memory
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-lg text-display-lg text-primary tracking-tight leading-none font-bold">
                    Tier III
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    FIPS 140-2 Level 3
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Hardware isolation for root trust certificates and clinical payloads.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-20 lg:py-28" id="assurance-pillars">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                  Comprehensive Architecture
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Four Sovereign Assurance Pillars
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" We combine offensive validation with institutional compliance to protect critical systems from targeted state-level intrusions, ransomware vectors, and non-compliance fines. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-mono text-label-sm font-bold">
                        PILLAR // 01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        terminal
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"Red Team & Offensive Penetration Testing"}
                      </h3>
                      <p className="font-body-lg text-body-lg text-on-surface-variant">
                        {" Full-scope ethical adversary simulations targeting high-consequence ecosystems: core microservices, core banking APIs, ISO 8583 payment gateways, HL7/FHIR clinical repositories, and HSM signature modules. "}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <div className="font-body-md text-body-md text-on-surface font-medium">
                          {"OWASP Top 10 API & Web Validation"}
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <div className="font-body-md text-body-md text-on-surface font-medium">
                          HSM / mTLS Endpoint Tamper Tests
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <div className="font-body-md text-body-md text-on-surface font-medium">
                          Mobile Banking Code Reverse-Engineering
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <div className="font-body-md text-body-md text-on-surface font-medium">
                          {"BGP Hijack & DDoS Stress Scenarios"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 flex items-center justify-between relative z-10">
                    <span className="font-label-md text-label-md text-outline">
                      {"Standard: MITRE ATT&CK Matrix aligned"}
                    </span>
                    <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" href="#audit-commission">
                      <span className="">
                        Commission Red Team
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-mono text-label-sm font-bold">
                        PILLAR // 02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        fact_check
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"ISO/IEC 27001:2022 & GRC"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Turnkey governance, risk, and compliance roadmap. We execute readiness gap assessments, Statement of Applicability (SoA) formulation, and internal audit rehearsal for external UKAS/KENAS accreditation. "}
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          Clause 4-10 ISMS Alignment
                        </span>
                        <span className="text-secondary font-label-sm text-label-sm font-bold">
                          100% COVERAGE
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          Annex A 93 Control Mapping
                        </span>
                        <span className="text-secondary font-label-sm text-label-sm font-bold">
                          AUTOMATED
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          Third-Party Supplier Risk Matrix
                        </span>
                        <span className="text-secondary font-label-sm text-label-sm font-bold">
                          AUDITED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6">
                    <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" href="#audit-commission">
                      <span className="">
                        Initiate ISO Readiness Review
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-mono text-label-sm font-bold">
                        PILLAR // 03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        radar
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"Sovereign SOC & Threat Feeds"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Live threat surveillance anchored in Kenya. We correlate system logs across local edge nodes, detecting lateral movements, SIM-swap attacks, and credential dumps before data reaches external boundaries. "}
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          Sub-minute SIEM Ingestion
                        </span>
                        <span className="text-secondary font-label-sm text-label-sm font-bold">
                          {"<45 SEC"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          Pan-African Threat Vector Telemetry
                        </span>
                        <span className="text-secondary font-label-sm text-label-sm font-bold">
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6">
                    <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" href="#audit-commission">
                      <span className="">
                        Connect SOC Telemetry
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-mono text-label-sm font-bold">
                        PILLAR // 04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        balance
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"Kenya DPA 2019 & Statutory Data Protection"}
                      </h3>
                      <p className="font-body-lg text-body-lg text-on-surface-variant">
                        {" Complete statutory Data Protection Impact Assessments (DPIA), biometric data governance audits, and verified filing dossiers prepared directly for the Office of the Data Protection Commissioner (ODPC). "}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-surface-container-low space-y-1">
                        <div className="font-title-md text-title-md text-primary">
                          Mandatory DPIAs
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Section 31 statutory filings for high-risk data processing operations.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low space-y-1">
                        <div className="font-title-md text-title-md text-primary">
                          Biometric Custody Audits
                        </div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Assurance for iris, fingerprint, and facial vector encryption chains.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 flex items-center justify-between">
                    <span className="font-label-md text-label-md text-outline">
                      ODPC Compliant Format
                    </span>
                    <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-semibold text-secondary hover:text-primary transition-colors" href="#audit-commission">
                      <span className="">
                        Schedule DPA Audit
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-primary text-on-primary py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-secondary-fixed font-label-md text-label-md uppercase tracking-wider">
                    Defense-In-Depth Stack
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                    The Sovereign Posture Ladder
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-variant">
                    {" How RCFI hardens national critical assets through four escalating tiers of verification and physical tamper containment. "}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-secondary-fixed font-mono text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                  {" REAL-TIME TELEMETRY ENGAGED "}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-surface-container-lowest text-on-surface space-y-5 flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-secondary text-headline-sm">
                        LVL 01
                      </span>
                      <span className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          router
                        </span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Edge & Perimeter Defense"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" BGP Anycast traffic scrubbers, Tbps DDoS suppression, WAF layer validation, and sovereign domain name protections. "}
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="text-label-sm font-label-sm font-bold text-outline uppercase">
                      Target Metric
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container text-primary font-mono text-label-sm font-semibold">
                      {"<50ms Edge Filtration"}
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest text-on-surface space-y-5 flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-secondary text-headline-sm">
                        LVL 02
                      </span>
                      <span className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          vpn_key
                        </span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      {"Zero-Trust & mTLS"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Continuous mutual TLS handshakes powered by RCFI X.509 Certification Authority roots. Ephemeral tokens and strict zero-trust service mesh access. "}
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="text-label-sm font-label-sm font-bold text-outline uppercase">
                      Target Metric
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container text-primary font-mono text-label-sm font-semibold">
                      100% Cryptographic Identity
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest text-on-surface space-y-5 flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-secondary text-headline-sm">
                        LVL 03
                      </span>
                      <span className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          developer_board
                        </span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      Cryptographic HSM Isolation
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Hardware Security Modules with physical tamper sensors, dual-custody authorization keys, and air-gapped root ceremony governance. "}
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="text-label-sm font-label-sm font-bold text-outline uppercase">
                      Target Metric
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container text-primary font-mono text-label-sm font-semibold">
                      FIPS 140-2 Level 3 Rigor
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest text-on-surface space-y-5 flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-secondary text-headline-sm">
                        LVL 04
                      </span>
                      <span className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          history_edu
                        </span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary">
                      Immutable Forensic Logs
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" WORM (Write Once, Read Many) certified audit storage, RFC 3161 compliant cryptographic timestamps, and admissibility under Kenyan Evidence Act. "}
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="text-label-sm font-label-sm font-bold text-outline uppercase">
                      Target Metric
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container text-primary font-mono text-label-sm font-semibold">
                      Court-Admissible Non-Repudiation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-20 lg:py-28 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                  Regulated Sectors
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Assurance for Mission-Critical Sectors
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Engineered to satisfy statutory audit mandates from Central Bank of Kenya (CBK), Communications Authority (CA), and Ministry of Health. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[26px]">
                        account_balance
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"Banking & FinTech"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" PCI-DSS readiness, CBK Cybersecurity Guidelines compliance, payment gateway stress tests, and API tampering mitigation. "}
                    </p>
                  </div>
                  <div className="pt-4 text-label-sm font-label-sm text-secondary font-bold uppercase">
                    {"Tier-1 Commercial Banks & PSPs"}
                  </div>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[26px]">
                        medical_services
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Healthcare Networks
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" EMR/HMIS vulnerability assessments, HL7/FHIR security governance, sensitive clinical data encryption, and hospital network isolation. "}
                    </p>
                  </div>
                  <div className="pt-4 text-label-sm font-label-sm text-secondary font-bold uppercase">
                    {"National Referrals & Health Systems"}
                  </div>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[26px]">
                        account_tree
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      National Critical Infrastructure
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" SCADA / ICS penetration reviews, sovereign cloud isolation audits, civil registration hardening, and government agency posture tests. "}
                    </p>
                  </div>
                  <div className="pt-4 text-label-sm font-label-sm text-secondary font-bold uppercase">
                    {"Ministries, Parastatals & Utilities"}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-20 lg:py-28 bg-surface" id="audit-commission">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-3">
                    <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                      Direct Engagement
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Commission a Sovereign Security Audit
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      {" Every audit inquiry is treated under our pre-engagement mutual Non-Disclosure Agreement. Our certified offensive engineers work on dedicated air-gapped testing fixtures. "}
                    </p>
                  </div>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          lock
                        </span>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-primary">
                          Statutory NDA Bound
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Full legal indemnity and confidentiality execution prior to scope disclosure.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          badge
                        </span>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-primary">
                          CAK Accredited Auditors
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Reports recognized directly by statutory regulators and board audit committees.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          schedule
                        </span>
                      </div>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-primary">
                          Rapid Dispatch Window
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Scoped and mobilized within 72 hours for critical breach investigations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-xl">
                  <form className="space-y-6" id="security-audit-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('audit-success').classList.remove('hidden');">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Institutional Name
                        </label>
                        {" "}
                        <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="e.g., Commercial Bank of Africa" required type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Sector Category
                        </label>
                        <select className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                          <option>
                            Banking / Financial Services
                          </option>
                          <option>
                            Healthcare / HealthTech
                          </option>
                          <option>
                            Government / State Corporation
                          </option>
                          <option>
                            {"Telecommunications & ISPs"}
                          </option>
                          <option>
                            Critical Infrastructure / Energy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Assurance Scope
                        </label>
                        <select className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                          <option>
                            Full Offensive Penetration Testing
                          </option>
                          <option>
                            {"ISO 27001:2022 Readiness & SoA"}
                          </option>
                          <option>
                            Kenya DPA Statutory Audit (ODPC)
                          </option>
                          <option>
                            Sovereign SOC / SIEM Deployment
                          </option>
                          <option>
                            Full-Scope Tri-Audit Package
                          </option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Target Audit Window
                        </label>
                        <select className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                          <option>
                            {"Immediate / Emergency Incident (<72 hrs)"}
                          </option>
                          <option>
                            Within 30 Days (Statutory Deadline)
                          </option>
                          <option>
                            Quarterly Planned Cycle
                          </option>
                          <option>
                            Long-Term Retainer
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Lead Security Officer Name
                        </label>
                        {" "}
                        <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Dr. / Eng. Jane Doe" required type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-semibold">
                          Official Corporate Email
                        </label>
                        {" "}
                        <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="ciso@institution.co.ke" required type="email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-primary font-semibold">
                        {"Scope & Target Infrastructure Details"}
                      </label>
                      <textarea className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Specify endpoints, API gateways, physical sites, or data classification levels to be assessed..." rows={3} defaultValue="" />
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input defaultChecked className="w-4 h-4 rounded text-secondary focus:ring-secondary" id="nda-agree" required type="checkbox" />
                        <label className="font-label-sm text-label-sm text-on-surface" htmlFor="nda-agree">
                          Require Pre-Execution Mutual NDA prior to technical discovery
                        </label>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        verified
                      </span>
                    </div>
                    <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      <span className="">
                        Submit Assurance Briefing Request
                      </span>
                    </button>
                    <div className="hidden p-4 rounded-xl bg-secondary-container text-on-secondary-container font-body-md text-body-md text-center" id="audit-success">
                      {" Request received under cryptographic confidentiality protocols. An RCFI Assurance Director will respond via secure channel within 4 operational hours. "}
                    </div>
                  </form>
                </div>
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
