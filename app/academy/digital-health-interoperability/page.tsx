import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/academy-digital-health-interoperability/page.css";
import "@/styles/pages/academy-digital-health-interoperability/late.css";

export const metadata: Metadata = { title: "Digital Health Interoperability & Governance | RCFI Academy" };

export default function AcademyDigitalHealthInteroperabilityPage() {
  return (
    <div className="rcfi-academy-digital-health-interoperability" style={{ display: "contents" }}>
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
              <Link className="text-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-1" data-path="ca-repository" href="/trust/">
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
              <Link className="text-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-1" data-path="trust-center" href="/trust/">
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
              <Link className="flex items-center gap-3 group" data-path="home" href="/">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <div className="hidden xl:flex flex-col">
                  <span className="font-title-md text-title-md text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors">
                    RCFI Technology
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-none">
                    Reprodrive Center for Innovation Limited
                  </span>
                </div>
              </Link>
              <div className="hidden lg:flex items-center space-x-1 font-label-md text-label-md" data-active-classes="text-primary font-semibold border-b-2 border-secondary">
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" data-path="services-overview" href="/services/">
                    <span className="">
                      Services
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-80 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="digital-health-governance" href="/services/digital-health-governance/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="products-certysign" href="/products/certysign/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="products-elano" href="/products/elano/">
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
                    <Link className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group" data-path="products-prezio" href="/products/prezio/">
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
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" data-path="academy-overview" href="/academy/">
                    <span className="">
                      Academy
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-80 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low font-semibold text-primary mb-1" data-path="academy-overview" href="/academy/">
                      <span className="material-symbols-outlined text-[18px]">
                        school
                      </span>
                      <span className="">
                        Academy Overview
                      </span>
                    </Link>
                    <div className="h-[1px] bg-surface-container-high my-1" />
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="academy-digital-health" href="/academy/digital-health-interoperability/">
                      {"Digital Health Interoperability & Governance"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="academy-cyber-defence" href="/academy/digital-trust-cyber/">
                      {"Digital Trust & Cyber Defence"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="academy-data-ai" href="/academy/applied-data-ai/">
                      {"Applied Data & AI"}
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="academy-modern-engineering" href="/academy/modern-engineering/">
                      Modern Engineering
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="academy-executive-briefings" href="/academy/executive-briefings/">
                      Executive Briefings
                    </Link>
                  </div>
                </div>
                <div className="relative nav-item py-6">
                  <Link className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" data-path="insights-trust-layer" href="/insights/">
                    <span className="">
                      Insights
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_arrow_down
                    </span>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 w-64 bg-surface-container-lowest border border-surface-container-high rounded-xl p-3 shadow-xl">
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="insights-trust-layer" href="/insights/">
                      The Trust Layer
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="impact-stories" href="/impact/">
                      Impact Stories
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="knowledge-hub" href="/insights/">
                      Knowledge Hub
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="sovereignty-series" href="/insights/">
                      The Sovereignty Series
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="newsroom" href="/insights/">
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
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="company-about" href="/about/">
                      About RCFI
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="company-ecosystem" href="/ecosystem/">
                      Ecosystem
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="careers" href="/careers/">
                      Careers
                    </Link>
                    <Link className="block p-2 rounded-lg hover:bg-surface-container-low text-on-surface font-medium hover:text-primary text-label-md" data-path="contact" href="/contact/">
                      Contact
                    </Link>
                  </div>
                </div>
                <Link className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-secondary-container/80 text-primary font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all ml-2" data-path="verify-document" href="/verify/">
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
              <Link className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-xs hover:bg-primary transition-colors" data-path="book-a-meeting" href="/contact/">
                <span className="">
                  Book a Meeting
                </span>
              </Link>
              <button className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container focus:outline-none" id="mobile-menu-toggle" type="button">
                <span className="material-symbols-outlined text-[24px]">
                  menu
                </span>
              </button>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
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
          {/* Top Sovereign Breadcrumb & Programme Indicator Banner */}
          <section className="w-full bg-surface-container-low py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" data-path="academy-overview" href="/academy/">
                  <span className="material-symbols-outlined text-[16px]">
                    school
                  </span>
                  <span className="">
                    RCFI Academy
                  </span>
                </Link>
                <span className="">
                  /
                </span>
                <span className="text-primary font-semibold">
                  {"Digital Health Interoperability & Governance"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold tracking-tight">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {" COHORT 04 APPLICATIONS OPEN • OCT 2025 "}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">
                  Accreditation: ECSP / CAK Regulated
                </span>
              </div>
            </div>
          </section>
          {/* Hero Section with Immersion & Studio Photo */}
          <section className="w-full bg-surface py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  <span className="">
                    Accredited Practitioner Certification
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight leading-tight">
                  {" Master HL7 FHIR & National Health Exchange Architecture "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  {" The continent's premier 12-week executive engineering programme in health data interoperability, OpenHIE architectural patterns, and Kenya Digital Health Act 2023 statutory compliance. "}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all" href="#enrollment-portal">
                    <span className="">
                      Apply for Cohort 04
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                  <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all" data-rcfi-onclick={"document.getElementById('enrollment-portal').scrollIntoView({behavior: 'smooth'})"}>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      download
                    </span>
                    <span className="">
                      Download Curriculum Guide
                    </span>
                  </button>
                </div>
                {/* Trust Meta Micro-bar */}
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Governing Framework
                    </div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Kenya DHA 2023
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Target Protocol
                    </div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      HL7® FHIR® R4 / R5
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest shadow-sm col-span-2 sm:col-span-1">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Credential Issued
                    </div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      PKI-Signed Verifiable
                    </div>
                  </div>
                </div>
              </div>
              {/* Laboratory Visual Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                  <img className="w-full h-[460px] object-cover" data-alt="Modern high-tech African digital health engineering laboratory in Nairobi with clinicians in white lab coats and lead software engineers collaborating around dual high-resolution displays displaying HL7 FHIR pipelines, demographic registries, and medical telemetry maps in warm natural office lighting with emerald and deep pine accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWaEMK6yxMhAdKFrliuGZpSxO6_41WwViPqA1QsTVGOishaH7rx0UAZYQNPNS_IDv8O9hoGpD7CTeDGzrwjuni68Q-08SOM1cdrv52pFKfE4YI85oJPXz8djqbilakzlpQF-YI3bNRb16hqrRX_rPpmFwA6rZvAB_1VfI9f8KfdLaGeZHnLrPBHoLR6YbjRfJLppEkJlvPYGzNInJ7356M8K3jt7QXJo6g9Ob5EE7T4ecpU_yXAkE5" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-6 text-on-primary">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                      Studio Facility 01 • Nairobi Lab
                    </span>
                    <span className="font-title-md text-title-md font-semibold">
                      {"Live Interoperability Testbed & OpenHIE Node"}
                    </span>
                  </div>
                </div>
                {/* Floating Stat Overlay Card */}
                <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-lg hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-on-secondary">
                    <span className="material-symbols-outlined text-[24px]">
                      hub
                    </span>
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-primary font-bold">
                      2.4M+ Bundles
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Validated in Academy Testbeds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Programme Key Metrics Counter Section */}
          <section className="w-full bg-primary-container text-on-primary py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">
                  {"Format & Duration"}
                </div>
                <div className="font-display-lg text-display-lg text-on-primary font-bold">
                  12 Wks
                </div>
                <div className="font-body-md text-body-md text-surface-variant">
                  Intensive Hybrid Studio + Lab Workflows
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">
                  Hands-On Practice
                </div>
                <div className="font-display-lg text-display-lg text-on-primary font-bold">
                  100%
                </div>
                <div className="font-body-md text-body-md text-surface-variant">
                  Live HL7 FHIR Production Testbed Rig
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">
                  Selective Intake
                </div>
                <div className="font-display-lg text-display-lg text-on-primary font-bold">
                  25
                </div>
                <div className="font-body-md text-body-md text-surface-variant">
                  Seats Per Cohort for Rigorous Mentorship
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">
                  National Architecture
                </div>
                <div className="font-display-lg text-display-lg text-on-primary font-bold">
                  14
                </div>
                <div className="font-body-md text-body-md text-surface-variant">
                  {"Health Registries & Sandboxes Integrated"}
                </div>
              </div>
            </div>
          </section>
          {/* Comprehensive 3-Phase Curriculum */}
          <section className="w-full bg-surface-container-low py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  <span className="">
                    CURRICULUM ARCHITECTURE
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Three Progressive Phases of Sovereign Health Engineering "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Designed by accredited lead architects from RCFI and national health exchange taskforces, mapping directly to Kenya Digital Health Act 2023 and AU CDC guidelines. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Phase 1 Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-lg text-title-md text-primary font-bold">
                        01
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider bg-secondary-fixed/30 px-2.5 py-1 rounded-full">
                        Weeks 01 – 04
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-headline-sm text-primary font-bold">
                        {"Phase 1: Foundations of Health Informatics & FHIR"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                        {" Core semantic interoperability, JSON/XML resource trees, and standard terminology mapping. "}
                      </p>
                    </div>
                    <ul className="space-y-3 font-body-md text-body-md text-on-surface">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          Patient, Encounter, Observation, and DiagnosticReport FHIR profiles
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          {"RESTful FHIR API paradigms: CRUD, Search parameters, Compartments & Operations"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          SNOMED CT, LOINC, and ICD-11 standard terminology servers configuration
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          {"FHIR Shorthand (FSH) & Implementation Guide (IG) authoring"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-2xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Phase Milestone
                    </span>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      {"Author & Validate a Compliant Kenya FHIR Implementation Guide"}
                    </span>
                  </div>
                </div>
                {/* Phase 2 Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-lg text-title-md text-primary font-bold">
                        02
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider bg-secondary-fixed/30 px-2.5 py-1 rounded-full">
                        Weeks 05 – 08
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-headline-sm text-primary font-bold">
                        {"Phase 2: OpenHIE Architecture & Integration"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                        {" Connecting distributed hospital management systems into cohesive national federations. "}
                      </p>
                    </div>
                    <ul className="space-y-3 font-body-md text-body-md text-on-surface">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          {"Master Patient Index (MPI / Client Registry) deterministic & probabilistic matching"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          Shared Health Record (SHR) repositories and longitudinal clinical summary aggregation
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          Health Worker Registry (HWR) and Master Facility Registry (KMFL/MFR) APIs
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          Interoperability Layer (IOL) routing using OpenHIM and Kafka event buses
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-2xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Phase Milestone
                    </span>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Live SHR Transaction Pipeline between 3 Emulated County Hospitals
                    </span>
                  </div>
                </div>
                {/* Phase 3 Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-lg text-title-md text-primary font-bold">
                        03
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider bg-secondary-fixed/30 px-2.5 py-1 rounded-full">
                        Weeks 09 – 12
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-headline-sm text-primary font-bold">
                        {"Phase 3: Governance, Security & Capstone"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                        {" Legal compliance, cryptographically-sealed exchange, and jury defense. "}
                      </p>
                    </div>
                    <ul className="space-y-3 font-body-md text-body-md text-on-surface">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          {"Kenya Digital Health Act 2023 & Data Protection Act 2019 legal architecture"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          SMART on FHIR v2 authentication and OAuth2/OIDC user-managed access
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          {"Cryptographic electronic signing & timestamping using CertySign PKI anchors"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="">
                          Enterprise Capstone: Live architectural defense before state health regulators
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-2xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Phase Milestone
                    </span>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      {"Production Capstone Defense & ECSP Verifiable Credential Issuance"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Sandbox Telemetry Terminal */}
          <section className="w-full bg-primary text-on-primary py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary text-secondary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      terminal
                    </span>
                    <span className="">
                      RCFI ACADEMY LIVE TELEMETRY RIG
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    {" Real-World FHIR Validation & Cryptographic Security Console "}
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant max-w-2xl">
                    {" Every trainee builds directly against our simulated national health exchange instance. Run an interactive diagnostic bundle payload below to verify cryptographic signing. "}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md flex items-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-md" id="run-validation-btn">
                    <span className="material-symbols-outlined text-[18px]">
                      play_arrow
                    </span>
                    <span className="">
                      Validate FHIR Bundle
                    </span>
                  </button>
                  <button className="px-4 py-2.5 rounded-lg bg-tertiary text-surface-variant font-label-md text-label-md hover:text-on-primary transition-colors" id="reset-terminal-btn">
                    {" "}
                    <span className="">
                      Reset Payload
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              {/* Terminal Box */}
              <div className="rounded-2xl bg-tertiary overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="px-6 py-3.5 bg-primary flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-error inline-block" />
                      <span className="w-3 h-3 rounded-full bg-secondary-container inline-block" />
                      <span className="w-3 h-3 rounded-full bg-secondary-fixed inline-block" />
                    </div>
                    <span className="font-label-sm text-label-sm text-surface-variant font-mono">
                      rcfi-sandbox-node-04.ke :: /opt/fhir/gateway/bundle-validator
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary-fixed flex items-center gap-1 font-mono">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    <span className="">
                      TLS 1.3 / mTLS Verified
                    </span>
                  </span>
                </div>
                {/* Terminal Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Code Editor View */}
                  <div className="lg:col-span-7 p-6 font-mono text-label-md text-on-primary-container overflow-x-auto bg-tertiary/70 space-y-2 leading-relaxed">
                    <div className="text-surface-variant select-none">
                      // Payload: Outpatient Clinical Encounter (FHIR R4 Bundle)
                    </div>
                    <div className="">
                      {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary-fixed">
                        "resourceType"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "Bundle"
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary-fixed">
                        "id"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "rcfi-ke-enc-99214"
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary-fixed">
                        "type"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "transaction"
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary-fixed">
                        "entry"
                      </span>
                      : [
                    </div>
                    <div className="pl-8">
                      {"{"}
                    </div>
                    <div className="pl-12">
                      <span className="text-secondary-fixed">
                        "resource"
                      </span>
                      {": {"}
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "resourceType"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "Patient"
                      </span>
                      ,
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "identifier"
                      </span>
                      {": [{ "}
                      <span className="text-secondary-fixed">
                        "system"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "urn:ke:gov:health:upi"
                      </span>
                      {", "}
                      <span className="text-secondary-fixed">
                        "value"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "UPI-849204-NBO"
                      </span>
                      {" }],"}
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "gender"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "female"
                      </span>
                      ,
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "birthDate"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "1992-04-18"
                      </span>
                    </div>
                    <div className="pl-12">
                      {"}"}
                    </div>
                    <div className="pl-8">
                      {"},"}
                    </div>
                    <div className="pl-8">
                      {"{"}
                    </div>
                    <div className="pl-12">
                      <span className="text-secondary-fixed">
                        "resource"
                      </span>
                      {": {"}
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "resourceType"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "Condition"
                      </span>
                      ,
                    </div>
                    <div className="pl-16">
                      <span className="text-secondary-fixed">
                        "code"
                      </span>
                      {": { "}
                      <span className="text-secondary-fixed">
                        "coding"
                      </span>
                      {": [{ "}
                      <span className="text-secondary-fixed">
                        "system"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "http://snomed.info/sct"
                      </span>
                      {", "}
                      <span className="text-secondary-fixed">
                        "code"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "38341003"
                      </span>
                      {", "}
                      <span className="text-secondary-fixed">
                        "display"
                      </span>
                      {": "}
                      <span className="text-on-primary">
                        "Hypertensive disorder"
                      </span>
                      {" }] }"}
                    </div>
                    <div className="pl-12">
                      {"}"}
                    </div>
                    <div className="pl-8">
                      {"}"}
                    </div>
                    <div className="pl-4">
                      ]
                    </div>
                    <div className="">
                      {"}"}
                    </div>
                  </div>
                  {/* Live Telemetry / Verification Panel */}
                  <div className="lg:col-span-5 p-6 bg-primary-container space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                        {"Automated Security & Compliance Audit"}
                      </span>
                      <div className="p-3 rounded-lg bg-primary flex items-start gap-3" id="check-item-1">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px] check-icon">
                          hourglass_top
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-primary font-bold">
                            HL7 FHIR R4 Structure Check
                          </div>
                          <div className="font-label-sm text-label-sm text-surface-variant">
                            Validated against Kenya Core Profile IG v1.2
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-primary flex items-start gap-3" id="check-item-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px] check-icon">
                          hourglass_top
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-primary font-bold">
                            {"Client Registry & UPI Match"}
                          </div>
                          <div className="font-label-sm text-label-sm text-surface-variant">
                            Confirmed with National UPI Registry (Deterministic)
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-primary flex items-start gap-3" id="check-item-3">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px] check-icon">
                          hourglass_top
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-primary font-bold">
                            CertySign® e-Seal Verification
                          </div>
                          <div className="font-label-sm text-label-sm text-surface-variant">
                            Licensed CAK Root CA signature authentic
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-primary flex items-start gap-3" id="check-item-4">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px] check-icon">
                          hourglass_top
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-primary font-bold">
                            Kenya DHA 2023 Consent Guard
                          </div>
                          <div className="font-label-sm text-label-sm text-surface-variant">
                            Zero-Knowledge Proof verified for health data sharing
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-tertiary text-label-sm font-mono text-secondary-fixed space-y-1" id="validation-output">
                      <div className="">
                        {"> STATUS: IDLE. Ready for ingest."}
                      </div>
                      <div className="">
                        {"> Click 'Validate FHIR Bundle' to initiate automated pipeline checks."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Career Pathways & Graduate Impact */}
          <section className="w-full bg-surface py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                    <span className="">
                      INDUSTRY RECOGNITION
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" High-Impact Career Pathways Across Africa's Digital Health Transformation "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    {" Graduates command strategic roles leading ministries of health, county government health IT, hospital conglomerates, and pan-African healthtech unicorns. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="p-4 rounded-xl bg-surface-container flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[32px]">
                      workspace_premium
                    </span>
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        96% Placement Rate
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Within 6 months of graduation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Role 1 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      architecture
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Health Informatics Architect
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Design national and regional health data federations, OpenHIE components, and enterprise health exchange backbones. "}
                  </p>
                  <div className="font-label-sm text-label-sm text-secondary font-semibold">
                    Typical Employers: Ministries of Health, WHO, Path, RCFI Partner Consortiums
                  </div>
                </div>
                {/* Role 2 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      code_blocks
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Clinical Data Engineer
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Build custom FHIR adapters, RESTful servers, and transform legacy electronic medical records into standardized feeds. "}
                  </p>
                  <div className="font-label-sm text-label-sm text-secondary font-semibold">
                    Typical Employers: EMR Providers, County Health Departments, HealthTech Startups
                  </div>
                </div>
                {/* Role 3 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      shield_person
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Chief Health Info Officer (CHIO)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Guide hospital networks on statutory clinical governance, medical privacy liability, and Digital Health Act 2023 alignment. "}
                  </p>
                  <div className="font-label-sm text-label-sm text-secondary font-semibold">
                    Typical Employers: Tier 4/5 Referral Hospitals, Private Healthcare Groups
                  </div>
                </div>
                {/* Role 4 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      rocket_launch
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    HealthTech Founder / CTO
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Build venture-backed health solutions certified day-one for national health insurance and interoperability standards. "}
                  </p>
                  <div className="font-label-sm text-label-sm text-secondary font-semibold">
                    {"Typical Employers: Digital Therapeutics, Telehealth & InsurTech Startups"}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Enrollment & Syllabus Download Section */}
          <section className="w-full bg-surface-container-low py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="enrollment-portal">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Syllabus Download & Overview */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                    <span className="">
                      ADMISSIONS NOW OPEN
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {" Reserve Your Place in Cohort 04 "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Intake is strictly limited to 25 verified professionals per cohort to ensure close one-on-one code reviews, live sandbox debugging, and high-impact capstone mentoring. "}
                  </p>
                </div>
                {/* Key Intake Facts */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
                  <h3 className="font-title-md text-title-md text-primary font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">
                      calendar_month
                    </span>
                    <span className="">
                      Important Cohort Dates
                    </span>
                  </h3>
                  <div className="space-y-3 font-body-md text-body-md">
                    <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                      <span className="text-on-surface-variant">
                        Application Deadline
                      </span>
                      <span className="font-bold text-primary">
                        September 28, 2025
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                      <span className="text-on-surface-variant">
                        {"Interviews & Technical Review"}
                      </span>
                      <span className="font-bold text-primary">
                        October 02 - 07, 2025
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                      <span className="text-on-surface-variant">
                        Cohort 04 Commencement
                      </span>
                      <span className="font-bold text-primary">
                        October 14, 2025
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant">
                        Capstone Defense Gala
                      </span>
                      <span className="font-bold text-primary">
                        December 18, 2025
                      </span>
                    </div>
                  </div>
                </div>
                {/* Trust Card */}
                <div className="p-6 rounded-2xl bg-primary text-on-primary shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined">
                        badge
                      </span>
                    </div>
                    <div>
                      <div className="font-title-md text-title-md font-semibold">
                        Institutional Sponsorship
                      </div>
                      <div className="font-label-sm text-label-sm text-surface-variant">
                        {"Government, NGO & Corporate Invoicing Available"}
                      </div>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-surface-variant">
                    {" RCFI is an accredited training vendor under NITA (National Industrial Training Authority) Kenya. Invoices are claimable under the training levy fund. "}
                  </p>
                </div>
              </div>
              {/* Right Column: Registration Form */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Apply for Admission or Inquire
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {" Complete the form below to receive the complete 32-page curriculum syllabus and schedule an introductory technical evaluation. "}
                  </p>
                </div>
                <form className="space-y-5" id="cohort-application-form" data-rcfi-onsubmit="event.preventDefault(); alert('Application submitted successfully. An RCFI Academic Advisor will contact you within 24 hours with your enrollment package.'); this.reset();">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold block">
                        Full Legal Name *
                      </label>
                      <input className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Dr. / Eng. Jane Doe" required type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold block">
                        Institutional / Work Email *
                      </label>
                      <input className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="j.doe@hospital.go.ke" required type="email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold block">
                        Phone Number *
                      </label>
                      <input className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="+254 712 345 678" required type="tel" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold block">
                        Sponsoring Organization / Employer
                      </label>
                      <input className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="e.g. County Government, Hospital, Self" type="text" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold block">
                      Select Primary Specialized Track *
                    </label>
                    <select className="w-full h-11 px-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                      <option value="eng">
                        {"Engineering Track: FHIR RESTful Architecture & Integration Engines"}
                      </option>
                      <option value="gov">
                        {"Governance Track: Kenya DHA 2023, Data Privacy & Interoperability Law"}
                      </option>
                      <option value="exec">
                        Executive Track: Digital Health Strategy for CHIOs and Hospital Directors
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold block">
                      {"Statement of Intent & Technical Background"}
                    </label>
                    <textarea className="w-full p-3.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Briefly describe your experience with electronic health records, software engineering, or healthcare administration (100-200 words)..." rows={3} defaultValue="" />
                  </div>
                  <div className="flex items-start gap-2.5 pt-1">
                    <input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary" id="consent-check" required type="checkbox" />
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="consent-check">
                      {" I consent to RCFI processing my professional contact details in compliance with the Kenya Data Protection Act 2019 and agree to receive the Cohort 04 syllabus. "}
                    </label>
                  </div>
                  <div className="pt-2">
                    <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-title-md text-title-md font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2" type="submit">
                      <span className="">
                        {"Submit Application & Download Syllabus"}
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                    </button>
                  </div>
                </form>
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
