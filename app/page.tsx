import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/home/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "RCFI Technology — Building the Trust Layer for Africa's Digital Economy" };

export default function HomePage() {
  return (
    <div className="rcfi-home" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* 1. TOP UTILITY STRIP */}
        <div className="bg-primary text-on-primary border-b border-primary-container/40 text-[11px] font-label-sm py-1.5 px-margin-mobile lg:px-margin hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Side Info */}
            <div className="flex items-center gap-space-md text-on-tertiary-container">
              <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="tel:+2542028392">
                <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                  call
                </span>
                <span className="">
                  +254 20 28392
                </span>
              </a>
              <span className="opacity-40">
                |
              </span>
              <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                  mail
                </span>
                <span className="">
                  info@rcfi.co.ke
                </span>
              </a>
              <span className="opacity-40">
                |
              </span>
              <div className="flex items-center gap-1.5 text-secondary-fixed font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse inline-block" />
                <span className="">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            {/* Right Side Quick Links */}
            <div className="flex items-center gap-space-md text-on-tertiary-container font-medium">
              <Link className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="/trust/">
                <span className="material-symbols-outlined text-[14px]">
                  folder_open
                </span>
                <span className="">
                  CA Repository
                </span>
              </Link>
              <span className="opacity-40">
                |
              </span>
              <Link className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="/trust/">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  verified_user
                </span>
                <span className="">
                  Trust Center
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* 2. MAIN NAVBAR */}
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-16 flex items-center justify-between gap-space-md">
            {/* Far Left: Logo (Links to Home /) */}
            <Link className="flex items-center gap-space-xs shrink-0 group py-1" href="/">
              <img alt="RCFI Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" src="/brand/rcfi-mark.svg" />
              <div className="hidden xl:flex flex-col text-left pl-1">
                <span className="font-headline-sm text-[16px] text-primary font-bold leading-tight tracking-tight">
                  RCFI
                </span>
                {" "}
                <span className="text-[10px] text-on-surface-variant font-label-sm uppercase tracking-wider leading-none">
                  Reprodrive Center
                </span>
              </div>
            </Link>
            {/* Center: Main Nav Links with Dropdowns */}
            <div className="hidden lg:flex items-center h-full gap-space-md xl:gap-space-lg">
              {/* 1. Services Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant group-hover:text-primary font-medium transition-colors py-2">
                  <span className="">
                    Services
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[100%] left-0 w-80 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl">
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-sm shadow-xl space-y-1">
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-trust-pki/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          verified
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          {"Digital Trust & PKI"}
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"Licensed certificate authority & signing"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/cybersecurity-assurance/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          security
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          {"Cybersecurity & Assurance"}
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"ISO 27001, audit & threat mitigation"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-health-governance/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          health_and_safety
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary leading-snug">
                          Digital Health Governance
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"Standards, HL7 FHIR & interoperability"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/data-analytics-ai/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          analytics
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          {"Data, Analytics & AI"}
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"Enterprise insights & sovereign AI models"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/services/digital-cloud-engineering/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          cloud
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          {"Digital & Cloud Engineering"}
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          High-availability sovereign architecture
                        </p>
                      </div>
                    </Link>
                    <div className="pt-2 border-t border-outline-variant/40 mt-1">
                      <Link className="flex items-center justify-between text-[12px] font-semibold text-secondary hover:text-primary px-2 py-1" href="/services/">
                        <span className="">
                          Explore all services
                        </span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2. Products Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant group-hover:text-primary font-medium transition-colors py-2">
                  <span className="">
                    Products
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[100%] left-0 w-72 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl">
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-sm shadow-xl space-y-1">
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/certysign/">
                      <div className="w-8 h-8 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          draw
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-headline-sm font-semibold text-primary">
                            CertySign
                          </span>
                          <span className="px-1.5 py-0.2 bg-secondary-fixed text-on-secondary-fixed text-[9px] font-bold rounded">
                            LIVE
                          </span>
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"PKI digital signing & verification"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/elano/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          corporate_fare
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          Elano
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"Institutional efficiency & MEARL"}
                        </p>
                      </div>
                    </Link>
                    <Link className="flex items-start gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors group/item" href="/products/prezio/">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-secondary-fixed transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          tune
                        </span>
                      </div>
                      <div>
                        <div className="text-[13px] font-headline-sm font-semibold text-primary">
                          Prezio
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-tight">
                          {"Workflows, approvals & automations"}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 3. Academy Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant group-hover:text-primary font-medium transition-colors py-2">
                  <span className="">
                    Academy
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[100%] left-0 w-80 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl">
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-sm shadow-xl space-y-1">
                    <Link className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-primary font-semibold text-[13px]" href="/academy/">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        school
                      </span>
                      <span className="">
                        Academy Overview
                      </span>
                    </Link>
                    <Link className="block px-2.5 py-1.5 rounded hover:bg-surface-container-low text-[12px] font-medium text-on-surface hover:text-primary transition-colors" href="/academy/digital-health-interoperability/">
                      {" Digital Health Interoperability & Governance "}
                    </Link>
                    <Link className="block px-2.5 py-1.5 rounded hover:bg-surface-container-low text-[12px] font-medium text-on-surface hover:text-primary transition-colors" href="/academy/digital-trust-cyber/">
                      {" Digital Trust & Cyber Defence "}
                    </Link>
                    <Link className="block px-2.5 py-1.5 rounded hover:bg-surface-container-low text-[12px] font-medium text-on-surface hover:text-primary transition-colors" href="/academy/applied-data-ai/">
                      {" Applied Data & AI "}
                    </Link>
                    <Link className="block px-2.5 py-1.5 rounded hover:bg-surface-container-low text-[12px] font-medium text-on-surface hover:text-primary transition-colors" href="/academy/modern-engineering/">
                      {" Modern Engineering "}
                    </Link>
                    <Link className="block px-2.5 py-1.5 rounded hover:bg-surface-container-low text-[12px] font-medium text-on-surface hover:text-primary transition-colors" href="/academy/executive-briefings/">
                      {" Executive Briefings "}
                    </Link>
                  </div>
                </div>
              </div>
              <PartnersNavMenu className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant hover:text-primary font-medium transition-colors py-2" />
              {/* 4. Insights Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant group-hover:text-primary font-medium transition-colors py-2">
                  <span className="">
                    Insights
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[100%] left-0 w-64 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl">
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-sm shadow-xl space-y-1">
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-semibold text-primary transition-colors" href="/insights/">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        layers
                      </span>
                      <span className="">
                        The Trust Layer
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/impact/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        trending_up
                      </span>
                      <span className="">
                        Impact Stories
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/insights/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        menu_book
                      </span>
                      <span className="">
                        Knowledge Hub
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/insights/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        shield_with_heart
                      </span>
                      <span className="">
                        The Sovereignty Series
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/insights/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        newspaper
                      </span>
                      <span className="">
                        Newsroom
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 5. Company Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-[14px] font-label-md text-on-surface-variant group-hover:text-primary font-medium transition-colors py-2">
                  <span className="">
                    Company
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[100%] left-0 w-60 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl">
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-sm shadow-xl space-y-1">
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/about/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        info
                      </span>
                      <span className="">
                        About RCFI
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/ecosystem/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        hub
                      </span>
                      <span className="">
                        Ecosystem
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/careers/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        work
                      </span>
                      <span className="">
                        Careers
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-surface-container-low text-[13px] font-medium text-on-surface transition-colors" href="/contact/">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        contact_support
                      </span>
                      <span className="">
                        Contact
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 6. Verify a Document (Standalone) */}
              {" "}
              <Link className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded-md text-[13px] font-label-md font-semibold text-secondary hover:bg-secondary-fixed/10 transition-colors border border-secondary-fixed/40" href="/verify/">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  task_alt
                </span>
                <span className="">
                  Verify a Document
                </span>
              </Link>
            </div>
            {/* Far Right: Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-space-sm">
              <a className="inline-flex items-center justify-center px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm group" href="https://meet.rcfi.co.ke/" target="_blank">
                <span className="">
                  Book a Meeting
                </span>
                <span className="material-symbols-outlined text-[16px] ml-1 transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </a>
              {/* Mobile Menu Toggle Button */}
              <button aria-label="Toggle navigation" className="lg:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors" data-rcfi-onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                <span className="material-symbols-outlined text-[22px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>
        {/* 3. MOBILE SLIDE-OUT DRAWER */}
        <div className="hidden lg:hidden bg-surface-container-lowest border-b border-outline-variant shadow-xl max-h-[80vh] overflow-y-auto px-margin-mobile py-space-md space-y-space-md" id="mobile-menu">
          <div className="pb-space-xs border-b border-outline-variant/60 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">
                shield
              </span>
              {" CAK Licensed ECSP (TL/E-CSP 00014) "}
            </span>
            <div className="flex items-center gap-2">
              <Link className="text-primary hover:underline" href="/trust/">
                Repository
              </Link>
              <span className="">
                •
              </span>
              <Link className="text-primary hover:underline" href="/trust/">
                Trust
              </Link>
            </div>
          </div>
          {/* Mobile Links Accordions */}
          <div className="space-y-space-sm">
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  Services
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary" href="/services/digital-trust-pki/">
                  {"Digital Trust & PKI"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/services/cybersecurity-assurance/">
                  {"Cybersecurity & Assurance"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/services/digital-health-governance/">
                  {"Digital Health Governance & FHIR"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/services/data-analytics-ai/">
                  {"Data, Analytics & AI"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/services/digital-cloud-engineering/">
                  {"Digital & Cloud Engineering"}
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  Products
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary font-medium text-secondary" href="/products/certysign/">
                  CertySign (LIVE)
                </Link>
                <Link className="block py-1 hover:text-primary" href="/products/elano/">
                  Elano
                </Link>
                <Link className="block py-1 hover:text-primary" href="/products/prezio/">
                  Prezio
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  Academy
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary font-medium" href="/academy/">
                  Overview
                </Link>
                <Link className="block py-1 hover:text-primary" href="/academy/digital-health-interoperability/">
                  Digital Health Interoperability
                </Link>
                <Link className="block py-1 hover:text-primary" href="/academy/digital-trust-cyber/">
                  {"Digital Trust & Cyber"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/academy/applied-data-ai/">
                  {"Applied Data & AI"}
                </Link>
                <Link className="block py-1 hover:text-primary" href="/academy/modern-engineering/">
                  Modern Engineering
                </Link>
                <Link className="block py-1 hover:text-primary" href="/academy/executive-briefings/">
                  Executive Briefings
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  {"Partners & Ecosystem"}
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary" data-path="ecosystem" href="/ecosystem/">
                  {"Ecosystem & Strategic Partners"}
                </Link>
                <Link className="block py-1 hover:text-primary" data-path="partners" href="/partners/">
                  Ecosystem Overview
                </Link>
                <Link className="block py-1 hover:text-primary" data-path="partners-konza" href="/partners/konza/">
                  Konza Technopolis
                </Link>
                <Link className="block py-1 hover:text-primary" data-path="partners-dha" href="/partners/dha/">
                  Digital Health Agency (DHA)
                </Link>
                <Link className="block py-1 hover:text-primary" data-path="partners-intellisoft" href="/partners/intellisoft/">
                  IntelliSOFT Consulting
                </Link>
                <Link className="block py-1 hover:text-primary" data-path="partners-crown-interactive" href="/partners/crown-interactive/">
                  Crown Interactive
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  Insights
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary" href="/insights/">
                  The Trust Layer
                </Link>
                <Link className="block py-1 hover:text-primary" href="/impact/">
                  Impact Stories
                </Link>
                <Link className="block py-1 hover:text-primary" href="/insights/">
                  Knowledge Hub
                </Link>
                <Link className="block py-1 hover:text-primary" href="/insights/">
                  The Sovereignty Series
                </Link>
                <Link className="block py-1 hover:text-primary" href="/insights/">
                  Newsroom
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-[15px] font-semibold text-primary cursor-pointer list-none">
                <span className="">
                  Company
                </span>
                <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="pl-space-md py-1 space-y-1.5 border-l-2 border-secondary-fixed/40 ml-1 text-[13px] text-on-surface-variant">
                <Link className="block py-1 hover:text-primary" href="/about/">
                  About RCFI
                </Link>
                <Link className="block py-1 hover:text-primary" href="/ecosystem/">
                  Ecosystem
                </Link>
                <Link className="block py-1 hover:text-primary" href="/careers/">
                  Careers
                </Link>
                <Link className="block py-1 hover:text-primary" href="/contact/">
                  Contact
                </Link>
              </div>
            </details>
            <div className="pt-2">
              <Link className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-secondary font-semibold text-[14px]" href="/verify/">
                <span className="material-symbols-outlined text-[18px]">
                  task_alt
                </span>
                <span className="">
                  Verify a Document
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[120px] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <section className="relative bg-[#041f15] text-on-primary overflow-hidden -mt-[120px] pt-[140px] pb-24 lg:pt-[180px] lg:pb-32">
            {/* Geospatial network SVG background overlay */}
            <div aria-hidden="true" className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <circle cx="200" cy="300" fill="#6ffbbe" r="2" />
                {" "}
                <circle cx="450" cy="220" fill="#6ffbbe" r="3" />
                {" "}
                <circle cx="820" cy="180" fill="#6ffbbe" r="2.5" />
                {" "}
                <circle cx="1100" cy="340" fill="#6ffbbe" r="4" />
                {" "}
                <circle cx="950" cy="620" fill="#6ffbbe" r="3" />
                {" "}
                <circle cx="680" cy="540" fill="#6ffbbe" r="2" />
                {" "}
                <circle cx="320" cy="680" fill="#6ffbbe" r="3.5" />
                {" "}
                <path d="M200 300L450 220L820 180L1100 340L950 620L680 540L320 680Z" stroke="#4edea3" strokeDasharray="3 6" strokeWidth="0.8" />
                {" "}
                <path d="M450 220L680 540M820 180L950 620M200 300L680 540" stroke="#4edea3" strokeWidth="0.5" />
                {" "}
                <circle cx="950" cy="620" r="90" stroke="#4edea3" strokeOpacity="0.3" strokeWidth="0.4" />
                {" "}
                <circle cx="950" cy="620" r="180" stroke="#4edea3" strokeOpacity="0.2" strokeWidth="0.3" />
                {" "}
                <circle cx="950" cy="620" r="280" stroke="#4edea3" strokeOpacity="0.1" strokeWidth="0.2" />
                {" "}
              </svg>
            </div>
            {/* Soft radial ambiance */}
            <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-secondary-container/10 blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] rounded-full bg-secondary-fixed/5 blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
                {/* Left column */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-[#10b981]/30 text-secondary-fixed font-mono text-xs tracking-wider uppercase backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    {" Kenya's Licensed Electronic Certification Provider "}
                  </div>
                  <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary tracking-tight">
                    {" Building the Trust Layer for "}
                    <span className="text-secondary-fixed">
                      Africa's
                    </span>
                    {" Digital Economy "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-2xl leading-relaxed">
                    {" Secure digital identity, trusted signing, governance and business platforms — and independent cybersecurity assurance for the health systems that serve millions across East Africa. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
                    <Link className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-md" data-path="certysign" href="/products/certysign/">
                      {" Explore Products "}
                      <span className="material-symbols-outlined ml-2 text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                    <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-white/5 hover:bg-white/10 text-on-primary border border-white/15 font-headline-sm text-headline-sm transition-all shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      {" Book a Meeting "}
                    </a>
                  </div>
                  {/* Trust Badges Row */}
                  <div className="pt-space-lg grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full">
                    <div className="flex items-center gap-space-xs p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        verified
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary whitespace-nowrap">
                        ISO 27001 Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        gavel
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary whitespace-nowrap">
                        Kenya DPA Compliant
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        badge
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary whitespace-nowrap">
                        CAK Licensed
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        public
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary whitespace-nowrap">
                        Serving East Africa
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right column: Rotating telemetry / trust verification card console */}
                <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-space-lg lg:mt-0">
                  <div className="w-full max-w-md rounded-2xl bg-[#082a1d]/90 backdrop-blur-xl border border-[#10b981]/30 p-6 shadow-2xl relative overflow-hidden transition-all hover:border-[#6ffbbe]/60">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <div className="w-3 h-3 rounded-full bg-secondary-fixed/80" />
                        <span className="text-xs font-mono text-secondary-fixed ml-2 tracking-wide font-semibold">
                          // TRUST VERIFICATION TELEMETRY
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#10b981]/20 text-[#6ffbbe] border border-[#10b981]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6ffbbe] animate-ping" />
                        {" LIVE NODE "}
                      </span>
                    </div>
                    {/* Telemetry Row 1: High Availability Ticker */}
                    <div className="bg-[#041f15] rounded-xl p-4 border border-white/10 mb-3.5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 text-secondary-fixed">
                          <span className="material-symbols-outlined text-[18px]">
                            show_chart
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                            High Availability Uptime
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">
                          99.98% SLA
                        </span>
                      </div>
                      <div className="font-display-lg text-4xl text-on-primary font-bold tracking-tight my-1">
                        99.98%
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
                        <div className="h-full bg-gradient-to-r from-[#10b981] to-[#6ffbbe] rounded-full w-[99.98%]" />
                      </div>
                    </div>
                    {/* Telemetry Row 2: Active Security & Cryptographic Integrity */}
                    <div className="grid grid-cols-2 gap-3 mb-3.5">
                      <div className="bg-[#041f15] rounded-xl p-3.5 border border-white/10">
                        <div className="flex items-center gap-1.5 text-[#6ffbbe] mb-1">
                          <span className="material-symbols-outlined text-[18px]">
                            lock
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider">
                            HSM FIPS 140-2
                          </span>
                        </div>
                        <div className="text-base font-bold text-white">
                          Level 3 Active
                        </div>
                        <div className="text-[11px] text-on-tertiary-container mt-0.5 font-mono">
                          Nairobi Vault #1
                        </div>
                      </div>
                      <div className="bg-[#041f15] rounded-xl p-3.5 border border-white/10">
                        <div className="flex items-center gap-1.5 text-[#6ffbbe] mb-1">
                          <span className="material-symbols-outlined text-[18px]">
                            verified_user
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider">
                            Kenya DPA
                          </span>
                        </div>
                        <div className="text-base font-bold text-white">
                          In-Country
                        </div>
                        <div className="text-[11px] text-on-tertiary-container mt-0.5 font-mono">
                          Data Sovereignty
                        </div>
                      </div>
                    </div>
                    {/* Telemetry Status Feed */}
                    <div className="bg-[#041f15]/80 rounded-xl p-3 border border-white/5 space-y-2 text-[11px] font-mono">
                      <div className="flex items-center justify-between text-on-tertiary-container">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <span className="material-symbols-outlined text-[15px] text-[#10b981]">
                            check_circle
                          </span>
                          {" X.509 CRL / OCSP Responder "}
                        </span>
                        <span className="text-secondary-fixed">
                          0.14 ms
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-tertiary-container">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <span className="material-symbols-outlined text-[15px] text-[#10b981]">
                            security
                          </span>
                          {" CAK ECSP Compliance "}
                        </span>
                        <span className="text-secondary-fixed">
                          TL/E-CSP 00014
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-tertiary-container">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <span className="material-symbols-outlined text-[15px] text-[#10b981]">
                            shield
                          </span>
                          {" Secure Platform Enclave "}
                        </span>
                        <span className="text-secondary-fixed">
                          Audited ISO 27001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: ECOSYSTEM CONTINUOUS MARQUEE STRIP */}
          <section className="w-full bg-surface-container-lowest py-space-lg border-y border-outline-variant/40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin mb-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase">
                  // ECOSYSTEM MARQUEE
                </span>
                <span className="text-xs text-on-surface-variant font-medium hidden sm:inline-block">
                  Trusted by leading organizations and regulators across Kenya
                </span>
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2 px-margin-mobile lg:px-margin">
                <div className="min-w-[190px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    CAK
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      CAK
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      {"Regulator & Licensing"}
                    </div>
                  </div>
                </div>
                <div className="min-w-[190px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    ODPC
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      ODPC
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Data Protection Office
                    </div>
                  </div>
                </div>
                <div className="min-w-[190px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    GOK
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      GoK MDAs
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Public Sector Entities
                    </div>
                  </div>
                </div>
                <div className="min-w-[210px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    ISOFT
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      IntelliSOFT
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Digital Health Systems
                    </div>
                  </div>
                </div>
                <div className="min-w-[200px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    T1B
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      Tier 1 Banks
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Commercial Banking
                    </div>
                  </div>
                </div>
                <div className="min-w-[220px] h-16 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center gap-3 shrink-0 shadow-sm hover:border-brand-emerald hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    EAH
                  </div>
                  <div>
                    <div className="font-headline-sm text-sm text-primary font-bold leading-tight">
                      East Africa Health
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Regional Consortia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: OUR PRODUCTS ("One ecosystem. Three platforms.") */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
                <div className="max-w-xl space-y-space-xs">
                  <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase">
                    // OUR PRODUCTS
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
                    One ecosystem. Three platforms.
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Complete digital transformation solutions for every organization across the region.
                  </p>
                </div>
                <Link className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary font-bold hover:underline" data-path="certysign" href="/products/certysign/">
                  {" View all platform specifications "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                {/* CertySign Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-outline-variant hover:border-[#10b981]">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold">
                        Digital Trust Platform
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold shadow-sm">
                        LIVE
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">
                        draw
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        CertySign
                      </h3>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        [X.509]
                      </span>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        [PKCS#11]
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Kenya's first full-stack digital signing, PKI, and document certification platform.
                    </p>
                    <div className="space-y-space-sm pt-space-xs mb-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Digital Signature Certificates
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          {"Invoice Authentication & e-TIMS"}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          e-KYC Identity Verification
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors group" data-path="certysign" href="#">
                    {" Learn more "}
                    <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                {/* Elano Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-outline-variant hover:border-[#10b981]">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold">
                        {"Governance & Intelligence"}
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold shadow-sm">
                        ENTERPRISE
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">
                        corporate_fare
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        Elano
                      </h3>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        [ISO 27001]
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Cloud-based platform for institutional efficiency, transparency, and accountability.
                    </p>
                    <div className="space-y-space-sm pt-space-xs mb-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Organization Registration
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Strategic Planning
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          MEARL Framework
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors group" data-path="elano" href="#">
                    {" Learn more "}
                    <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                {/* Prezio Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-outline-variant hover:border-[#10b981]">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold">
                        Business Management
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold shadow-sm">
                        AUTOMATION
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">
                        tune
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        Prezio
                      </h3>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        [e-TIMS]
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Intelligent workflow automation, approvals, and operations management for teams.
                    </p>
                    <div className="space-y-space-sm pt-space-xs mb-space-lg">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Workflow Automation
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Approval Management
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          check_circle
                        </span>
                        <span className="font-body-md text-body-md">
                          Real-Time Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors group" data-path="prezio" href="#">
                    {" Learn more "}
                    <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: WHY CHOOSE RCFI */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-start">
                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col space-y-space-md sticky lg:top-32">
                  <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase">
                    // WHY CHOOSE RCFI
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary leading-tight">
                    {" Built for Africa, trusted by leaders. "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {" We deliver secure, compliant, and scalable digital solutions tailored for governments, financial institutions, enterprises, and development organizations across Africa. "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md">
                    <div className="bg-surface-container-low rounded-xl p-space-md border border-outline-variant/60 shadow-sm hover:border-[#10b981] hover:-translate-y-1 transition-all">
                      <div className="font-headline-lg text-headline-lg text-primary font-bold">
                        100%
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        {" Data sovereignty with hosting in Kenya. "}
                      </p>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-md border border-outline-variant/60 shadow-sm hover:border-[#10b981] hover:-translate-y-1 transition-all">
                      <div className="font-headline-lg text-headline-lg text-primary font-bold">
                        24/7
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        {" Continuous monitoring with a 99.95% uptime SLA. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Right Column: Stacked numbered cards with green left accent */}
                <div className="lg:col-span-7 flex flex-col space-y-space-md">
                  {/* Card 01 */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/80 shadow-sm transition-all hover:shadow-md hover:border-[#10b981] hover:-translate-y-1 pl-space-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]" />
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-mono text-sm text-secondary font-bold shrink-0">
                        {" 01 "}
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md text-primary mb-1">
                          Built for Africa
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" Designed specifically for Kenyan and East African markets with local regulations and needs in mind. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 02 */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/80 shadow-sm transition-all hover:shadow-md hover:border-[#10b981] hover:-translate-y-1 pl-space-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]" />
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-mono text-sm text-secondary font-bold shrink-0">
                        {" 02 "}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-title-md text-title-md text-primary">
                            Compliance first
                          </h3>
                          <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            [ISO 27001]
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" Fully aligned with Kenya DPA, ISO 27001, CAK regulations, and international security standards. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 03 */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/80 shadow-sm transition-all hover:shadow-md hover:border-[#10b981] hover:-translate-y-1 pl-space-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]" />
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-mono text-sm text-secondary font-bold shrink-0">
                        {" 03 "}
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md text-primary mb-1">
                          Proven track record
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" 2+ years serving government agencies, CSOs, financial institutions, and enterprises across Kenya. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 04 */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/80 shadow-sm transition-all hover:shadow-md hover:border-[#10b981] hover:-translate-y-1 pl-space-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]" />
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-mono text-sm text-secondary font-bold shrink-0">
                        {" 04 "}
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md text-primary mb-1">
                          End-to-end support
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" From onboarding and training to ongoing technical support and system maintenance. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 05 */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/80 shadow-sm transition-all hover:shadow-md hover:border-[#10b981] hover:-translate-y-1 pl-space-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]" />
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-mono text-sm text-secondary font-bold shrink-0">
                        {" 05 "}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-title-md text-title-md text-primary">
                            Health security ready
                          </h3>
                          <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            [HL7 FHIR]
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {" We understand clinical workflows, patient data sensitivity, and health-sector regulation — through our IntelliSOFT partnership and licensed digital trust expertise. "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Banner / Sovereign callout */}
              <div className="mt-space-xl rounded-2xl bg-[#041f15] text-on-primary shadow-xl overflow-hidden border border-[#10b981]/30 grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-sm">
                    <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-secondary-fixed font-mono text-xs border border-secondary-fixed/20">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                      Nairobi Tier III Sovereign Vault • FIPS 140-2 Level 3 Active
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary leading-tight">
                      Built in Nairobi. Trusted across Africa.
                    </h3>
                    <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed">
                      Sovereign digital infrastructure — hosted in Kenya, licensed under CAK regulations, and engineered to deliver non-repudiation and cryptographic autonomy to Africa's enterprises.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <Link className="whitespace-nowrap px-space-md py-space-sm rounded-lg bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-headline-sm hover:bg-secondary-fixed-dim transition-all shadow-md inline-flex items-center gap-space-xs" data-path="about" href="/about/">
                      {"About RCFI Infrastructure "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                    <div className="flex items-center gap-space-xs text-secondary-fixed font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      In-Country Data Residency
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 relative min-h-[260px] overflow-hidden group">
                  <img alt="Ultra-modern sovereign data center interior in Nairobi, high-security server racks with subtle emerald green and cyan LED indicator lights" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH29xl1znKuyd7U4tqpcNJEJ5FiwHbxs3GYb-yQ1tvECsaZtMurc1mQF5xvFPqKT5Mirrjhm7BzlxbRs0p5lp0EI7ixIDe5kGrJzWetLBI2tHFk3994sImQR_OL5zvZ3N3LaRh1dCNdteC7iuxQLbJl57CMJOpnIIjDNDKKUdMNDsA6AMzcB1vopaIRFVhYC_ibNWfPaMaKhJiTqo-JFvUxWR74Bw44RHB3G5eJgOBzqN67IxGYiUf" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-space-xs rounded bg-tertiary-container/90 backdrop-blur-md border border-secondary-fixed/20 flex items-center justify-between">
                    <span className="font-label-sm text-[11px] text-secondary-fixed flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        lock
                      </span>
                      Hardware Cryptographic HSM
                    </span>
                    <span className="font-label-sm text-[10px] text-on-tertiary-container uppercase tracking-wider">
                      Operational
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 5: INFRASTRUCTURE SERVICES */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase block mb-1">
                  // TRUST INFRASTRUCTURE
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-space-xs">
                  Trust infrastructure, delivered as a service.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" We operate Kenya's licensed public key infrastructure so your organization can focus on innovation instead of infrastructure — and we extend that same rigour to the health platforms that carry patient data. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Service 1: PKI as a Service */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                          LIVE
                        </span>
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          [X.509]
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        vpn_key
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      PKI as a Service
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Managed certificate issuance, digital signatures, trusted timestamping, and document verification — delivered as a secure cloud service under our CAK ECSP license. No hardware, no cryptography team required. "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <Link className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors" data-path="certysign" href="/products/certysign/">
                      {" Powered by CertySign "}
                      <span className="material-symbols-outlined ml-1 text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Service 2: HSM as a Service */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold">
                          COMING SOON
                        </span>
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          [PKCS#11]
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        memory
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      HSM as a Service
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Dedicated hardware security modules for cryptographic key generation, storage, and signing — hosted in Kenya with full data sovereignty. Join the waitlist to get early access. "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <Link className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors" data-path="contact" href="/contact/">
                      {" Join the waitlist "}
                      <span className="material-symbols-outlined ml-1 text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Service 3: Health Security */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-bold">
                          AVAILABLE
                        </span>
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          [HL7 FHIR]
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        health_and_safety
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      {"Health Security & Digital Health Assurance"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Independent security and privacy assurance for EMRs, telemedicine platforms, health APIs, mobile health apps, and cloud-hosted patient data — with accredited digital health specialists. "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <Link className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors" data-path="health-security" href="/health-security/">
                      {" Learn about health security "}
                      <span className="material-symbols-outlined ml-1 text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Service 4: Custom Software */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                          24/7 AVAILABLE
                        </span>
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          [ISO 27001]
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        terminal
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      Custom Software Development
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Need software built? Our engineering team designs, builds, and maintains secure systems for organizations across Kenya, East Africa, and beyond. "}
                    </p>
                  </div>
                  <div className="pt-space-md">
                    <Link className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors" data-path="contact" href="/contact/">
                      {" Reach us any time "}
                      <span className="material-symbols-outlined ml-1 text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: INDUSTRIES WE SERVE */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase block mb-1">
                  // TAILORED SOLUTIONS FOR EVERY SECTOR
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
                  Tailored solutions for every sector
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  {" Engineered to satisfy stringent African statutory guidelines while driving operational velocity. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {/* Industry 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 shadow-sm flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[22px]">
                        account_balance
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {"Government & Public Sector"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Modernize service delivery, ensure compliance, and build citizen trust. "}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                    {" 47 counties served "}
                  </div>
                </div>
                {/* Industry 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 shadow-sm flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[22px]">
                        payments
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      Financial Services
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Secure onboarding, digital signatures, and compliance automation. "}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                    {" Banks, SACCOs, insurance "}
                  </div>
                </div>
                {/* Industry 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 shadow-sm flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[22px]">
                        diversity_3
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {"NGOs & Civil Society"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Grant management, beneficiary tracking, and impact measurement. "}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                    {" 150+ organizations "}
                  </div>
                </div>
                {/* Industry 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 shadow-sm flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[22px]">
                        store
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {"SMEs & Enterprises"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Business management, invoicing, and digital transformation. "}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                    {" Freelancers to corporates "}
                  </div>
                </div>
                {/* Industry 5 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-[#10b981] hover:-translate-y-1 shadow-sm flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md">
                      <span className="material-symbols-outlined text-[22px]">
                        balance
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {"Legal & Compliance"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Legally binding signatures, contract management, court filings. "}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                    {" Law firms & advocates "}
                  </div>
                </div>
                {/* Industry 6 */}
                <div className="rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between overflow-hidden border border-outline-variant hover:border-[#10b981] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden group">
                    <img alt="African digital health specialists, clinical informatics engineers and doctors in modern lab looking at tablet and wall-mounted health registry dashboard displaying HL7 FHIR clinical data" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwO_0uX52iGUWVDYFCA0eIRFgY0KTtD6BoSYBJtDMl_vxmV3ifWzNEgJoRUkMawHRq8WP1nudTzqJNXv-9mvlSt8pfn72VRbxY5LRfZbY0KL0Vs12Mf1okROthy38iMSrmhj8ozL1Nax_LSINzmSva-4fRBDeEUQwJ4RUmR8hsK6kScGK4y-ctuInrkWQRr6qaVl8JLX4YKOOFWpiC93aLge4Cmv1pnkMZV-GcR2ELUSZBDK93TNfC" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent pointer-events-none" />
                    <div className="absolute top-2 left-2 px-space-xs py-0.5 rounded bg-tertiary-container/90 backdrop-blur-md text-secondary-fixed font-label-sm text-[10px] font-bold border border-secondary-fixed/20 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      Interoperability Lab • HL7 FHIR Interconnected
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">
                          clinical_notes
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                        {"Health Security & Digital Health"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                        EMRs, hospital systems, telemedicine, patient registries, and health apps — secured, compliant, and ready for clinical environments.
                      </p>
                    </div>
                    <div className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant font-semibold w-max">
                      Vendors · hospitals · national programmes
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-space-lg">
                <Link className="inline-flex items-center font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors" data-path="contact" href="/contact/">
                  {" Don't see your industry? Talk to us about custom solutions "}
                  <span className="material-symbols-outlined ml-1 text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
          {/* SECTION 7: OUR IMPACT (High-Density Tickers) */}
          <section className="w-full bg-[#041f15] text-on-primary py-space-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/5 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-mono text-xs text-secondary-fixed font-bold tracking-widest uppercase block mb-1">
                  // OUR IMPACT
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary">
                  Trusted across Kenya
                </h2>
                <p className="font-body-lg text-body-lg text-on-tertiary-container mt-2">
                  {" Delivering secure digital infrastructure that empowers governments, enterprises and development organizations. "}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Stat Card 1 */}
                <div className="bg-[#082a1d] p-space-lg rounded-xl text-center shadow-lg border border-white/10 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6ffbbe] font-semibold mb-2">
                    // SCALE
                  </div>
                  <div className="font-display-lg text-display-lg-mobile lg:text-display-lg text-secondary-fixed font-bold leading-none mb-2">
                    10,000+
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    Users served across government, CSOs, and enterprises
                  </p>
                </div>
                {/* Stat Card 2 */}
                <div className="bg-[#082a1d] p-space-lg rounded-xl text-center shadow-lg border border-white/10 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6ffbbe] font-semibold mb-2">
                    // COVERAGE
                  </div>
                  <div className="font-display-lg text-display-lg-mobile lg:text-display-lg text-secondary-fixed font-bold leading-none mb-2">
                    47
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    Counties reached nationwide
                  </p>
                </div>
                {/* Stat Card 3 */}
                <div className="bg-[#082a1d] p-space-lg rounded-xl text-center shadow-lg border border-white/10 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6ffbbe] font-semibold mb-2">
                    // RELIABILITY
                  </div>
                  <div className="font-display-lg text-display-lg-mobile lg:text-display-lg text-secondary-fixed font-bold leading-none mb-2">
                    99.95%
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    Guaranteed uptime SLA
                  </p>
                </div>
                {/* Stat Card 4 */}
                <div className="bg-[#082a1d] p-space-lg rounded-xl text-center shadow-lg border border-white/10 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6ffbbe] font-semibold mb-2">
                    // EXPERIENCE
                  </div>
                  <div className="font-display-lg text-display-lg-mobile lg:text-display-lg text-secondary-fixed font-bold leading-none mb-2">
                    2+
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    Years driving digital innovation in Kenya
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 8: CLOSING CTA SECTION */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="rounded-2xl bg-gradient-to-br from-[#041f15] via-primary-container to-tertiary text-on-primary p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden text-center border border-[#10b981]/30">
                {/* Background accents */}
                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-2xl pointer-events-none" />
                <div className="max-w-2xl mx-auto relative z-10 space-y-space-md">
                  <span className="font-mono text-xs text-secondary-fixed font-bold tracking-widest uppercase block">
                    // GET STARTED
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary font-bold leading-tight">
                    {" Ready to transform your operations? "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-tertiary-container">
                    {" Talk to our team about how RCFI solutions can help your organization achieve digital excellence — we're available 24/7. "}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
                    <a className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-md" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      {" Book a Meeting "}
                    </a>
                    <Link className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-tertiary-container hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm transition-all shadow-sm" data-path="contact" href="/contact/">
                      {" Send a Message "}
                    </Link>
                  </div>
                  <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md font-label-md text-label-md text-secondary-fixed">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                      {" Free consultation "}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                      {" No credit card required "}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                      {" Quick setup "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* PATHWAYS DEEP FAT-FOOTER (5-Column Layout) */}
      <footer className="w-full bg-[#041f15] text-on-tertiary border-t border-[#10b981]/20">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Col 1: RCFI Logo, company summary, and CAK license (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <img alt="RCFI Logo" className="h-9 w-auto object-contain brightness-0 invert" src="/brand/rcfi-mark.svg" />
                <div className="flex flex-col text-left pl-1">
                  <span className="font-headline-sm text-[16px] text-white font-bold leading-tight tracking-tight">
                    RCFI
                  </span>
                  <span className="text-[10px] text-on-tertiary-container font-label-sm uppercase tracking-wider leading-none">
                    Reprodrive Center
                  </span>
                </div>
              </div>
              <p className="font-label-md text-label-md text-secondary-fixed font-semibold">
                Reprodrive Center for Innovation Limited
              </p>
              <p className="font-body-md text-body-md text-outline-variant leading-relaxed">
                {" Digital signatures, PKI as a Service, e-KYC, governance and business management software — serving Nairobi, Kenya, East Africa, and Africa. "}
              </p>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-on-tertiary-container space-y-1">
                <div className="text-[#6ffbbe] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">
                    verified
                  </span>
                  {" Accredited Electronic Certification Provider "}
                </div>
                <div>
                  {"CAK License: "}
                  <span className="text-white font-bold">
                    TL/E-CSP 00014
                  </span>
                </div>
              </div>
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
            {/* Col 2: Practices & Services (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-space-md">
              <h3 className="font-title-md text-sm text-white font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                Practices
              </h3>
              <ul className="space-y-2.5 font-body-md text-sm text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/cybersecurity-assurance/">
                    Cybersecurity Assurance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/digital-cloud-engineering/">
                    Cloud Engineering
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/services/">
                    All Services
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 3: Products (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-space-md">
              <h3 className="font-title-md text-sm text-white font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                Products
              </h3>
              <ul className="space-y-2.5 font-body-md text-sm text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" data-path="certysign" href="/products/certysign/">
                    <span className="material-symbols-outlined text-[15px] text-secondary-fixed-dim">
                      verified_user
                    </span>
                    CertySign
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" data-path="elano" href="/products/elano/">
                    <span className="material-symbols-outlined text-[15px] text-secondary-fixed-dim">
                      folder_managed
                    </span>
                    Elano
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" data-path="prezio" href="/products/prezio/">
                    <span className="material-symbols-outlined text-[15px] text-secondary-fixed-dim">
                      tune
                    </span>
                    Prezio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="/verify/">
                    <span className="material-symbols-outlined text-[15px] text-secondary-fixed-dim">
                      task_alt
                    </span>
                    Verify a Document
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 4: RCFI Academy & Insights (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-space-md">
              <h3 className="font-title-md text-sm text-white font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                {"Academy & Insights"}
              </h3>
              <ul className="space-y-2.5 font-body-md text-sm text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/academy/">
                    RCFI Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                    The Trust Layer
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/impact/">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                    Sovereignty Series
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/insights/">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 5: Compliance & Legal (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-space-md">
              <h3 className="font-title-md text-sm text-white font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                {"Compliance & Legal"}
              </h3>
              <ul className="space-y-2.5 font-body-md text-sm text-outline-variant">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1" href="/trust/">
                    <span className="material-symbols-outlined text-[15px]">
                      folder_open
                    </span>
                    CA Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors flex items-center gap-1" href="/trust/">
                    <span className="material-symbols-outlined text-[15px]">
                      verified_user
                    </span>
                    Trust Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/privacy/">
                    Kenya DPA Compliance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/trust/">
                    Certificate Practice (CPS)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/privacy/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/terms/">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5 bg-[#031710]">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col lg:flex-row items-center justify-between gap-4 font-label-sm text-xs text-outline-variant text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>
                © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
              </span>
              <span className="hidden sm:inline opacity-40">
                |
              </span>
              <span className="flex items-center gap-1 text-on-tertiary-container">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">
                  location_on
                </span>
                {" 5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya "}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-space-sm text-secondary-fixed">
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
    </div>
  );
}
