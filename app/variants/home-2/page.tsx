import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/variants-home-2/page.css";
import "@/styles/pages/variants-home-2/late.css";

export const metadata: Metadata = { title: "Home (variant 2) | RCFI Technology" };

export default function VariantsHome2Page() {
  return (
    <div className="rcfi-variants-home-2" style={{ display: "contents" }}>
      {/* ========================================================================= */}
      {" "}
      {/* HEADER & UTILITY NAVIGATION */}
      {" "}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Pine Utility Strip */}
        <div className="bg-primary text-on-primary border-b border-primary-container/60 text-[11px] font-medium py-1.5 px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Trust Badges / Identifiers */}
            <div className="flex items-center gap-3 md:gap-4 text-on-tertiary-container overflow-x-auto whitespace-nowrap">
              <span className="flex items-center gap-1 text-secondary-fixed font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                {" ISO 27001 Certified "}
              </span>
              <span className="opacity-40">
                ·
              </span>
              <span className="text-secondary-fixed">
                CAK Licensed ECSP (TL/E-CSP 00014)
              </span>
              <span className="opacity-40">
                ·
              </span>
              <span className="hidden sm:inline">
                Kenya DPA Compliant
              </span>
            </div>
            {/* Right Direct Contact Links */}
            <div className="hidden md:flex items-center gap-4 text-on-tertiary-container">
              <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                  mail
                </span>
                <span>
                  info@rcfi.co.ke
                </span>
              </a>
              <span className="opacity-40">
                ·
              </span>
              <a className="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                  call
                </span>
                <span>
                  +254 (0) 20 283 9200
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Clean White Main Navbar */}
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-16 flex items-center justify-between gap-space-md">
            {/* Logo */}
            <Link className="flex items-center gap-2 group py-1" href="/">
              <img alt="RCFI Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" src="/brand/rcfi-mark.svg" />
              <div className="hidden xl:flex flex-col text-left pl-1 border-l border-outline-variant/50 ml-1">
                <span className="font-bold text-[14px] text-primary leading-tight tracking-tight">
                  RCFI
                </span>
                {" "}
                <span className="text-[9px] text-on-surface-variant uppercase tracking-wider leading-none">
                  Reprodrive Center for Innovation
                </span>
              </div>
            </Link>
            {/* Main Nav Links */}
            <div className="hidden lg:flex items-center h-full gap-6 text-[13.5px] font-medium text-on-surface-variant">
              <Link className="text-primary font-bold transition-colors" href="/">
                Home
              </Link>
              {" "}
              <a className="hover:text-primary transition-colors" href="#services">
                Services
              </a>
              {" "}
              <a className="hover:text-primary transition-colors" href="#products">
                Products
              </a>
              {" "}
              <a className="hover:text-primary transition-colors" href="#academy">
                Academy
              </a>
              {" "}
              <a className="hover:text-primary transition-colors" href="#ecosystem">
                Partners
              </a>
              {" "}
              <a className="hover:text-primary transition-colors" href="#why-rcfi">
                About
              </a>
              {" "}
              <Link className="hover:text-primary transition-colors" href="/careers/">
                Careers
              </Link>
              {" "}
              <a className="hover:text-primary transition-colors" href="#contact">
                Contact
              </a>
            </div>
            {/* Action CTAs */}
            <div className="flex items-center gap-3">
              <Link className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-secondary hover:bg-secondary-fixed/10 transition-colors border border-secondary/40" href="/verify/">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  task_alt
                </span>
                {" "}
                <span>
                  Verify a Document
                </span>
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-semibold text-[13px] transition-all shadow-sm group" href="https://meet.rcfi.co.ke/" target="_blank">
                <span>
                  Book a Meeting
                </span>
                <span className="material-symbols-outlined text-[15px] ml-1 transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </a>
              {/* Mobile Menu Toggle */}
              <button aria-label="Toggle Navigation" className="lg:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary" data-rcfi-onclick="document.getElementById('mobile-drawer').classList.toggle('hidden')">
                <span className="material-symbols-outlined text-[20px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Drawer */}
        <div className="hidden lg:hidden bg-surface-container-lowest border-b border-outline-variant shadow-xl px-margin-mobile py-4 space-y-3" id="mobile-drawer">
          <div className="grid grid-cols-2 gap-2 text-[14px] font-medium text-on-surface">
            <Link className="py-1 text-secondary font-bold" href="/">
              Home
            </Link>
            <a className="py-1 hover:text-primary" href="#services">
              Services
            </a>
            <a className="py-1 hover:text-primary" href="#products">
              Products
            </a>
            <a className="py-1 hover:text-primary" href="#academy">
              Academy
            </a>
            <a className="py-1 hover:text-primary" href="#ecosystem">
              Partners
            </a>
            <a className="py-1 hover:text-primary" href="#why-rcfi">
              About
            </a>
            <Link className="py-1 hover:text-primary" href="/careers/">
              Careers
            </Link>
            <a className="py-1 hover:text-primary" href="#contact">
              Contact
            </a>
          </div>
          <div className="pt-2 border-t border-outline-variant/40 flex flex-col gap-2">
            <Link className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-surface-container-low text-secondary font-semibold text-[13px]" href="/verify/">
              <span className="material-symbols-outlined text-[16px]">
                task_alt
              </span>
              {" Verify a Document "}
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full pt-[104px] bg-background">
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 1: HERO SLIDER (3 ROTATING SLIDES, 7-SEC TIMER, PAUSE ON HOVER) */}
        {" "}
        {/* ========================================================================= */}
        <section className="relative bg-primary text-on-primary overflow-hidden transition-all duration-500" id="hero-slider-section">
          {/* Background SVG network and soft atmospheric glows */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1440 820" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <circle cx="180" cy="240" fill="#6ffbbe" r="2.5" />
              {" "}
              <circle cx="480" cy="180" fill="#6ffbbe" r="3.5" />
              {" "}
              <circle cx="860" cy="140" fill="#6ffbbe" r="3" />
              {" "}
              <circle cx="1180" cy="280" fill="#6ffbbe" r="4.5" />
              {" "}
              <circle cx="980" cy="560" fill="#6ffbbe" r="3.5" />
              {" "}
              <circle cx="640" cy="490" fill="#6ffbbe" r="2.5" />
              {" "}
              <circle cx="280" cy="590" fill="#6ffbbe" r="4" />
              {" "}
              <path d="M180 240L480 180L860 140L1180 280L980 560L640 490L280 590Z" stroke="#4edea3" strokeDasharray="4 6" strokeWidth="0.75" />
              {" "}
              <path d="M480 180L640 490M860 140L980 560M180 240L640 490" stroke="#4edea3" strokeWidth="0.5" />
              {" "}
              <circle cx="980" cy="560" r="110" stroke="#4edea3" strokeOpacity="0.2" strokeWidth="0.5" />
              {" "}
              <circle cx="980" cy="560" r="210" stroke="#4edea3" strokeOpacity="0.1" strokeWidth="0.3" />
              {" "}
            </svg>
          </div>
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-secondary-container/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 left-8 w-[450px] h-[450px] rounded-full bg-secondary-fixed/5 blur-[110px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-12 pb-16 lg:pt-20 lg:pb-24 relative z-10">
            {/* Slides Wrapper */}
            <div className="relative min-h-[460px] sm:min-h-[420px] flex items-center" id="slides-container">
              {/* SLIDE 1 (Default) */}
              <div className="hero-slide active-slide transition-opacity duration-500 w-full" data-slide-index="0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-8 flex flex-col items-start space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-[11px] font-bold tracking-wider uppercase border border-secondary-fixed/20">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                      {" KENYA'S LICENSED ELECTRONIC CERTIFICATION SERVICE PROVIDER "}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-primary leading-[1.15]">
                      {" Your Partner in Digital Trust, "}
                      <span className="text-secondary-fixed">
                        {"Data & Innovation."}
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-on-tertiary-container max-w-2xl leading-relaxed">
                      {" We are Kenya’s licensed certification authority — and the technology partner behind national-scale platforms in digital health, governance, and public infrastructure. Built in Nairobi. Sovereign by design. "}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-[14px] hover:bg-secondary-fixed transition-all shadow-md" href="#services">
                        {" Explore Our Services "}
                        <span className="material-symbols-outlined ml-2 text-[18px]">
                          arrow_forward
                        </span>
                      </a>
                      <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-tertiary-container hover:bg-primary-container text-on-primary font-semibold text-[14px] transition-all shadow-sm" href="https://meet.rcfi.co.ke/" target="_blank">
                        {" Book a Meeting "}
                      </a>
                    </div>
                  </div>
                  {/* Slide 1 Graphic Artifact */}
                  <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
                    <div className="bg-tertiary-container/85 backdrop-blur-md rounded-xl p-5 border border-secondary-fixed/20 shadow-xl">
                      <div className="flex items-center gap-3 mb-2 text-secondary-fixed">
                        <span className="material-symbols-outlined text-[24px]">
                          verified_user
                        </span>
                        <span className="font-bold text-sm tracking-wide">
                          CAK Licensed Authority
                        </span>
                      </div>
                      <p className="text-[13px] text-on-tertiary-container leading-relaxed">
                        {" Root CA & Issuing Sub-CA infrastructure anchored in sovereign Kenyan soil under license "}
                        <span className="text-white font-mono">
                          TL/E-CSP 00014
                        </span>
                        {". "}
                      </p>
                    </div>
                    <div className="bg-tertiary-container/70 backdrop-blur-md rounded-xl p-4 border border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-secondary-fixed uppercase font-semibold">
                          National Health Backbone
                        </div>
                        <div className="text-white font-bold text-sm">
                          {"HL7 FHIR & OpenHIE Verified"}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary-fixed text-[26px]">
                        hub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SLIDE 2 */}
              <div className="hero-slide hidden transition-opacity duration-500 w-full" data-slide-index="1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-8 flex flex-col items-start space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-[11px] font-bold tracking-wider uppercase border border-secondary-fixed/20">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                      {" HEALTH INTEROPERABILITY & ARCHITECTURE "}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-primary leading-[1.15]">
                      {" Health systems that talk to each other. "}
                      <span className="text-secondary-fixed">
                        And to the world.
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-on-tertiary-container max-w-2xl leading-relaxed">
                      {" From national digital health certification frameworks to HL7 FHIR architectures — we make health data trusted, verifiable, and globally connected. "}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-[14px] hover:bg-secondary-fixed transition-all shadow-md" href="#services">
                        {" Digital Health Governance "}
                        <span className="material-symbols-outlined ml-2 text-[18px]">
                          arrow_forward
                        </span>
                      </a>
                      <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-tertiary-container hover:bg-primary-container text-on-primary font-semibold text-[14px] transition-all shadow-sm" href="https://meet.rcfi.co.ke/" target="_blank">
                        {" Book Architecture Review "}
                      </a>
                    </div>
                  </div>
                  {/* Slide 2 Graphic Artifact */}
                  <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
                    <div className="bg-tertiary-container/85 backdrop-blur-md rounded-xl p-5 border border-secondary-fixed/20 shadow-xl">
                      <div className="flex items-center gap-3 mb-2 text-secondary-fixed">
                        <span className="material-symbols-outlined text-[24px]">
                          dataset
                        </span>
                        <span className="font-bold text-sm tracking-wide">
                          FHIR R4 Interop Sandbox
                        </span>
                      </div>
                      <p className="text-[13px] text-on-tertiary-container leading-relaxed">
                        {" Compliant with Kenya Digital Health Act 2023 guidelines, enterprise terminology registries & clinical data exchange standards. "}
                      </p>
                    </div>
                    <div className="bg-tertiary-container/70 backdrop-blur-md rounded-xl p-4 border border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-secondary-fixed uppercase font-semibold">
                          Hospital Systems
                        </div>
                        <div className="text-white font-bold text-sm">
                          47 Counties Interconnected
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary-fixed text-[26px]">
                        medical_services
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SLIDE 3 */}
              <div className="hero-slide hidden transition-opacity duration-500 w-full" data-slide-index="2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-8 flex flex-col items-start space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-[11px] font-bold tracking-wider uppercase border border-secondary-fixed/20">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                      {" SOVEREIGN PKI & E-SIGNATURES "}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-primary leading-[1.15]">
                      {" Every signature. "}
                      <span className="text-secondary-fixed">
                        Verified.
                      </span>
                      {" Every document. "}
                      <span className="text-secondary-fixed">
                        Trusted.
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-on-tertiary-container max-w-2xl leading-relaxed">
                      {" CertySign is Kenya’s full-stack digital signing and PKI platform — legally binding under Kenyan law, licensed by the Communication Authority of Kenya. "}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-[14px] hover:bg-secondary-fixed transition-all shadow-md" href="#products">
                        {" Start Signing Free "}
                        <span className="material-symbols-outlined ml-2 text-[18px]">
                          arrow_forward
                        </span>
                      </a>
                      <Link className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-tertiary-container hover:bg-primary-container text-on-primary font-semibold text-[14px] transition-all shadow-sm" href="/verify/">
                        {" Verify a Certificate "}
                      </Link>
                    </div>
                  </div>
                  {/* Slide 3 Graphic Artifact */}
                  <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
                    <div className="bg-tertiary-container/85 backdrop-blur-md rounded-xl p-5 border border-secondary-fixed/20 shadow-xl">
                      <div className="flex items-center gap-3 mb-2 text-secondary-fixed">
                        <span className="material-symbols-outlined text-[24px]">
                          history_edu
                        </span>
                        <span className="font-bold text-sm tracking-wide">
                          Admissible Evidence
                        </span>
                      </div>
                      <p className="text-[13px] text-on-tertiary-container leading-relaxed">
                        {" Satisfies Section 106B of Evidence Act and Kenya Information and Communications Act (KICA Cap 411A). "}
                      </p>
                    </div>
                    <div className="bg-tertiary-container/70 backdrop-blur-md rounded-xl p-4 border border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-secondary-fixed uppercase font-semibold">
                          CertySign Platform
                        </div>
                        <div className="text-white font-bold text-sm">
                          Hardware HSM Backed
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary-fixed text-[26px]">
                        lock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Controls: Prev/Next & Indicators */}
            <div className="flex items-center justify-between pt-8 border-t border-primary-container/80 mt-6">
              <div className="flex items-center gap-2">
                <button aria-label="Previous slide" className="w-9 h-9 rounded-lg bg-tertiary-container/80 hover:bg-secondary-fixed hover:text-on-secondary-fixed text-secondary-fixed flex items-center justify-center transition-colors" id="slide-prev-btn">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_back
                  </span>
                </button>
                <button aria-label="Next slide" className="w-9 h-9 rounded-lg bg-tertiary-container/80 hover:bg-secondary-fixed hover:text-on-secondary-fixed text-secondary-fixed flex items-center justify-center transition-colors" id="slide-next-btn">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
                <span className="text-[12px] text-on-tertiary-container ml-2">
                  7s Auto-play active (pauses on hover)
                </span>
              </div>
              {/* Slide Dots */}
              <div className="flex items-center gap-2" id="slide-dots">
                <button aria-label="Slide 1" className="w-8 h-2 rounded-full bg-secondary-fixed transition-all slide-dot" data-target="0" />
                <button aria-label="Slide 2" className="w-2.5 h-2 rounded-full bg-tertiary-container hover:bg-secondary-fixed/50 transition-all slide-dot" data-target="1" />
                <button aria-label="Slide 3" className="w-2.5 h-2 rounded-full bg-tertiary-container hover:bg-secondary-fixed/50 transition-all slide-dot" data-target="2" />
              </div>
            </div>
            {/* Live Trust Ticker Bar */}
            <div className="mt-8 bg-tertiary-container/90 border border-secondary-fixed/30 rounded-xl p-4 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
                <div className="flex flex-col items-center justify-center border-r border-outline/30 last:border-none">
                  <div className="flex items-center gap-1.5 text-secondary-fixed text-xl lg:text-2xl font-extrabold font-mono">
                    <span className="counter" data-target="50000">
                      50,000
                    </span>
                    {"+ "}
                  </div>
                  <span className="text-[11px] text-on-tertiary-container uppercase tracking-wide">
                    Signatures Verified
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center border-r border-outline/30 last:border-none">
                  <div className="flex items-center gap-1.5 text-secondary-fixed text-xl lg:text-2xl font-extrabold font-mono">
                    <span className="counter" data-target="500">
                      500
                    </span>
                    {"+ "}
                  </div>
                  <span className="text-[11px] text-on-tertiary-container uppercase tracking-wide">
                    Organizations Governed
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center border-r border-outline/30 last:border-none">
                  <div className="flex items-center gap-1.5 text-secondary-fixed text-xl lg:text-2xl font-extrabold font-mono">
                    <span className="counter" data-target="47">
                      47
                    </span>
                  </div>
                  <span className="text-[11px] text-on-tertiary-container uppercase tracking-wide">
                    Counties Reached
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1.5 text-secondary-fixed text-xl lg:text-2xl font-extrabold font-mono">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                    {" 99.95% "}
                  </div>
                  <span className="text-[11px] text-on-tertiary-container uppercase tracking-wide">
                    Uptime SLA Active
                  </span>
                </div>
              </div>
            </div>
            {/* Trust Badges with Popover Proof */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-2">
              {/* Popover Badge 1 */}
              <div className="relative group/badge">
                <Link className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-container/80 border border-secondary-fixed/20 hover:border-secondary-fixed transition-all text-[12px] font-medium text-on-primary" href="/trust/">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                    verified
                  </span>
                  <span>
                    ISO 27001 Certified
                  </span>
                </Link>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-2xl border border-outline-variant text-[11px] opacity-0 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:pointer-events-auto transition-all z-30">
                  <div className="font-bold text-primary mb-1">
                    Information Security Standard
                  </div>
                  <p className="text-on-surface-variant">
                    Globally accredited ISO/IEC 27001:2022 management system. Click to view Trust Center verification.
                  </p>
                </div>
              </div>
              {/* Popover Badge 2 */}
              <div className="relative group/badge">
                <Link className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-container/80 border border-secondary-fixed/20 hover:border-secondary-fixed transition-all text-[12px] font-medium text-on-primary" href="/trust/">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                    badge
                  </span>
                  <span>
                    CAK Licensed ECSP (TL/E-CSP 00014)
                  </span>
                </Link>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-2xl border border-outline-variant text-[11px] opacity-0 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:pointer-events-auto transition-all z-30">
                  <div className="font-bold text-primary mb-1">
                    Licensed ECSP
                  </div>
                  <p className="text-on-surface-variant">
                    Formally accredited under Communications Authority of Kenya statutory certification standards.
                  </p>
                </div>
              </div>
              {/* Popover Badge 3 */}
              <div className="relative group/badge">
                <Link className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-container/80 border border-secondary-fixed/20 hover:border-secondary-fixed transition-all text-[12px] font-medium text-on-primary" href="/trust/">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                    gavel
                  </span>
                  <span>
                    Kenya DPA Compliant
                  </span>
                </Link>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-2xl border border-outline-variant text-[11px] opacity-0 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:pointer-events-auto transition-all z-30">
                  <div className="font-bold text-primary mb-1">
                    Data Protection Act 2019
                  </div>
                  <p className="text-on-surface-variant">
                    Registered with ODPC as both certified Data Controller and Data Processor with 100% Kenyan sovereignty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 2: ECOSYSTEM STRIP (CONTINUOUS MARQUEE) */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-lowest py-8 border-b border-outline-variant/50 overflow-hidden" id="ecosystem">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin mb-4">
            <div className="text-[12px] font-mono uppercase tracking-widest text-secondary font-bold">
              {" // the ecosystem we serve and build with "}
            </div>
          </div>
          {/* Continuous Marquee Container */}
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="animate-marquee gap-10 sm:gap-14 items-center">
              {/* Marquee Item Set 1 */}
              <div className="flex items-center gap-10 sm:gap-14 shrink-0 text-on-surface-variant font-bold text-[14px] sm:text-[15px]">
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    health_and_safety
                  </span>
                  DHA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    hub
                  </span>
                  ICTA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    location_city
                  </span>
                  Konza Technopolis
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    policy
                  </span>
                  Communications Authority of Kenya
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    security
                  </span>
                  ODPC
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    agriculture
                  </span>
                  AFA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    spa
                  </span>
                  Kenya Sugar Board
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    dataset
                  </span>
                  IntelliSOFT
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    layers
                  </span>
                  Crown Interactive
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    terminal
                  </span>
                  Microsoft
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    cloud
                  </span>
                  AWS
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    database
                  </span>
                  Oracle
                </span>
              </div>
              {/* Marquee Item Set 2 (Duplicate for smooth infinite scroll) */}
              <div className="flex items-center gap-10 sm:gap-14 shrink-0 text-on-surface-variant font-bold text-[14px] sm:text-[15px]">
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    health_and_safety
                  </span>
                  DHA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    hub
                  </span>
                  ICTA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    location_city
                  </span>
                  Konza Technopolis
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    policy
                  </span>
                  Communications Authority of Kenya
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    security
                  </span>
                  ODPC
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    agriculture
                  </span>
                  AFA
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    spa
                  </span>
                  Kenya Sugar Board
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    dataset
                  </span>
                  IntelliSOFT
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    layers
                  </span>
                  Crown Interactive
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    terminal
                  </span>
                  Microsoft
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    cloud
                  </span>
                  AWS
                </span>
                <span className="grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    database
                  </span>
                  Oracle
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 3: FIVE PRACTICES / WHAT WE'RE GOOD AT */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-low py-space-xl" id="services">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="mb-10">
              <div className="text-[12px] font-mono uppercase tracking-widest text-secondary font-bold mb-1">
                // what we’re good at
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary max-w-3xl leading-tight">
                {" Five practices. One standard: national-scale, standards-based, sovereign. "}
              </h2>
            </div>
            {/* 5 Interactive Practice Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Practice 1 */}
              <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[26px]">
                      vpn_key
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {" Digital Trust & PKI "}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {" Certificates, signatures, identity, and lifecycle management — from Kenya’s licensed CA. "}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      X.509 CA
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      e-Signatures
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      RFC 3161 Timestamping
                    </span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-secondary font-semibold text-sm">
                    <span>
                      View PKI Practice
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* Practice 2 */}
              <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[26px]">
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {" Cybersecurity & Assurance "}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {" GRC Audits, Testing, audits, and assurance that stand up to regulators and procurement. "}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Pen-Testing
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      GRC Compliance
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Threat Modeling
                    </span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-secondary font-semibold text-sm">
                    <span>
                      View Assurance Practice
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* Practice 3 */}
              <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[26px]">
                      health_and_safety
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {" Digital Health Governance "}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {" National frameworks and FHIR/OpenHIE architectures that connect health systems to the world. "}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      HL7 FHIR R4
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      OpenHIE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Terminology Services
                    </span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-secondary font-semibold text-sm">
                    <span>
                      View Health Practice
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* Practice 4 */}
              <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[26px]">
                      analytics
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {" Data, Analytics & AI "}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {" From dashboards to deployed models — decisions powered by governed data. "}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Governed Pipelines
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Sovereign ML
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Real-time BI
                    </span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-secondary font-semibold text-sm">
                    <span>
                      View Data Practice
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* Practice 5 */}
              <div className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[26px]">
                      cloud
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {" Digital & Cloud Engineering "}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {" Secure platforms, APIs, and cloud-native systems, engineered for government and enterprise. "}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      API Gateways
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Microservices
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[11px] font-semibold">
                      Sovereign Cloud
                    </span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-secondary font-semibold text-sm">
                    <span>
                      View Engineering Practice
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 4: PRODUCTS / PLATFORMS WE'VE BUILT (INTERACTIVE TABS) */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-lowest py-space-xl border-y border-outline-variant/50" id="products">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="text-[12px] font-mono uppercase tracking-widest text-secondary font-bold mb-1">
              // platforms we’ve built
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-8">
              {" One ecosystem. Three platforms. "}
            </h2>
            {/* Interactive Tab Selectors */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-low rounded-xl w-max mb-8 border border-outline-variant/50">
              <button className="product-tab-btn px-5 py-2.5 rounded-lg text-sm font-bold transition-all bg-primary text-on-primary shadow-sm flex items-center gap-2" data-product="certysign">
                <span className="material-symbols-outlined text-[18px]">
                  draw
                </span>
                <span>
                  CertySign
                </span>
                <span className="px-1.5 py-0.2 bg-secondary-fixed text-on-secondary-fixed text-[10px] rounded font-mono font-bold">
                  LIVE
                </span>
              </button>
              <button className="product-tab-btn px-5 py-2.5 rounded-lg text-sm font-semibold transition-all text-on-surface-variant hover:text-primary flex items-center gap-2" data-product="elano">
                <span className="material-symbols-outlined text-[18px]">
                  corporate_fare
                </span>
                <span>
                  Elano
                </span>
                <span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant text-[10px] rounded font-mono font-bold">
                  ENTERPRISE
                </span>
              </button>
              <button className="product-tab-btn px-5 py-2.5 rounded-lg text-sm font-semibold transition-all text-on-surface-variant hover:text-primary flex items-center gap-2" data-product="prezio">
                <span className="material-symbols-outlined text-[18px]">
                  tune
                </span>
                <span>
                  Prezio
                </span>
                <span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant text-[10px] rounded font-mono font-bold">
                  AUTOMATION
                </span>
              </button>
            </div>
            {/* Product Tab Content 1: CertySign */}
            <div className="product-tab-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low rounded-2xl p-6 lg:p-10 border border-outline-variant" id="product-tab-certysign">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {" Digital Trust Platform "}
                </div>
                <h3 className="text-3xl font-extrabold text-primary">
                  CertySign — Sign, verify, and certify — legally, instantly.
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {" Kenya's licensed digital signing, PKI, and verification platform. Fully integrated with Kenyan law and cryptographic hardware. "}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Qualified Digital Signatures:
                      </strong>
                      {" Non-repudiation under KICA 411A."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        {"Invoice Authentication & e-TIMS:"}
                      </strong>
                      {" Real-time cryptographic ledger seals."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        {"Instant Identity & e-KYC:"}
                      </strong>
                      {" Automated identity verification and credential issuance."}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-on-secondary font-bold text-sm hover:bg-primary transition-all shadow-sm" href="https://certysign.rcfi.co.ke/" target="_blank">
                    {" Start Signing Free "}
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              {/* Product Realistic Mockup Artifact */}
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-lg font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-on-surface-variant font-sans font-bold ml-2">
                      CertySign Vault / Verifier v3.4
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold">
                    X.509 VALID
                  </span>
                </div>
                <div className="space-y-2.5 text-on-surface">
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Signer Identity:
                    </span>
                    <span className="text-primary font-bold">
                      Dr. Grace M. [Reg: 8842-KE]
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Authority Chain:
                    </span>
                    <span className="text-secondary font-bold">
                      {"RCFI Sovereign Root CA > Issuing Sub-CA"}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      RFC 3161 Timestamp:
                    </span>
                    <span className="text-primary">
                      2026-03-29T14:22:04+03:00 (Nairobi)
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Hash Check (SHA-256):
                    </span>
                    <span className="text-secondary font-bold">
                      MATCHED · NON-TAMPERED
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Tab Content 2: Elano (Hidden by default) */}
            <div className="product-tab-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low rounded-2xl p-6 lg:p-10 border border-outline-variant" id="product-tab-elano">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {" Governance & Intelligence "}
                </div>
                <h3 className="text-3xl font-extrabold text-primary">
                  Elano — Register, govern, and report with confidence.
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {" Cloud platform tailored for parastatals, CSOs, and conglomerates managing institutional compliance, MEARL frameworks, and board oversight. "}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Institutional Entity Registry:
                      </strong>
                      {" Track branches, mandates, and legal statuses."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Strategic MEARL Frameworks:
                      </strong>
                      {" Monitoring, evaluation, reporting, and learning."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Executive Board Auditing:
                      </strong>
                      {" Immutable resolutions and committee accountability."}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-on-secondary font-bold text-sm hover:bg-primary transition-all shadow-sm" href="#contact">
                    {" Explore Elano "}
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-lg font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60 mb-4">
                  <div className="font-sans font-bold text-primary">
                    Elano Governance Cockpit
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary text-white font-bold">
                    BOARD SUITE
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Annual Strategy Target:
                    </span>
                    <span className="text-secondary font-bold">
                      92.4% Achieved
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Active Audits:
                    </span>
                    <span className="text-primary font-bold">
                      14 Entities Synchronized
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Statutory Filings:
                    </span>
                    <span className="text-secondary font-bold">
                      100% On Time (Q1 2026)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Tab Content 3: Prezio (Hidden by default) */}
            <div className="product-tab-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low rounded-2xl p-6 lg:p-10 border border-outline-variant" id="product-tab-prezio">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {" Business Operations & Workflows "}
                </div>
                <h3 className="text-3xl font-extrabold text-primary">
                  Prezio — Approvals and workflows that move themselves.
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {" Eliminate operational friction. Prezio unifies approval matrices, document routing, and spend authorizations with enterprise rigor. "}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Multi-level Automated Routing:
                      </strong>
                      {" Role-based sign-offs with zero email chasing."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Smart Document Parsing:
                      </strong>
                      {" Instant extraction of invoice totals and VAT details."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface text-[14px]">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <span>
                      <strong>
                        Real-time SLA Analytics:
                      </strong>
                      {" Identify bottlenecks before they delay core operations."}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-on-secondary font-bold text-sm hover:bg-primary transition-all shadow-sm" href="#contact">
                    {" Explore Prezio "}
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-lg font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60 mb-4">
                  <div className="font-sans font-bold text-primary">
                    Prezio Workflow Engine
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                    AUTOMATION ACTIVE
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Turnaround Time:
                    </span>
                    <span className="text-secondary font-bold">
                      Reduced from 5 Days to 2.4 Hrs
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Approvals Cleared:
                    </span>
                    <span className="text-primary font-bold">
                      12,480 items
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low flex justify-between">
                    <span className="text-on-surface-variant">
                      Exceptions Logged:
                    </span>
                    <span className="text-secondary font-bold">
                      0 Deadlocks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 5: WHY RCFI (SOVEREIGN DIFFERENTIATORS & SIDE STATS) */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-low py-space-xl" id="why-rcfi">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="text-[12px] font-mono uppercase tracking-widest text-secondary font-bold mb-1">
              // why organizations choose us
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-12">
              {" Built for Africa, trusted by leaders. "}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: 5 Sovereign Differentiators */}
              <div className="lg:col-span-8 space-y-4">
                {/* 01 */}
                <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all pl-6 sm:pl-8 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-fixed" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-extrabold text-secondary text-lg shrink-0">
                      {" 01 "}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1.5">
                        Accredited, not just Licensed
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {" We are a CA-licensed and Accredited Electronic Certification Service Provider. Our signatures carry legal weight; our trust services carry a license number – "}
                        <span className="font-mono font-semibold text-primary">
                          TL/E-CSP 00014
                        </span>
                        {". "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 02 */}
                <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all pl-6 sm:pl-8 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-fixed" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-extrabold text-secondary text-lg shrink-0">
                      {" 02 "}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1.5">
                        National-scale delivery
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {" We build and operate certification systems for national agencies — governance machinery, not just software. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 03 */}
                <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all pl-6 sm:pl-8 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-fixed" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-extrabold text-secondary text-lg shrink-0">
                      {" 03 "}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1.5">
                        Sovereign by design
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {" Hosted in Kenya, aligned with the Data Protection Act 2019, keys protected on Kenyan soil. RCFI is both a Certified Data handler and Controller. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 04 */}
                <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all pl-6 sm:pl-8 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-fixed" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-extrabold text-secondary text-lg shrink-0">
                      {" 04 "}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1.5">
                        Standards people
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {" HL7 FHIR, OpenHIE, X.509, ISO 27001 — we build on what the world has agreed on. "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 05 */}
                <div className="relative bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all pl-6 sm:pl-8 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-fixed" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center font-extrabold text-secondary text-lg shrink-0">
                      {" 05 "}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1.5">
                        We teach what we operate
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {" Through RCFI Academy, we grow the region’s digital trust and health interoperability talent. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Side Canonical Stats Panel */}
              <div className="lg:col-span-4 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 shadow-xl sticky top-28 space-y-6">
                <div className="border-b border-primary-container pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-secondary-fixed">
                    Proven Metric Benchmarks
                  </span>
                  <h3 className="text-xl font-bold mt-1">
                    Impact in Numbers
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-extrabold text-secondary-fixed font-mono">
                      10,000+
                    </div>
                    <div className="text-xs text-on-tertiary-container uppercase tracking-wide">
                      Users Served Across Africa
                    </div>
                  </div>
                  <div className="border-t border-primary-container/80 pt-3">
                    <div className="text-3xl font-extrabold text-secondary-fixed font-mono">
                      47
                    </div>
                    <div className="text-xs text-on-tertiary-container uppercase tracking-wide">
                      Counties Reached Nationwide
                    </div>
                  </div>
                  <div className="border-t border-primary-container/80 pt-3">
                    <div className="text-3xl font-extrabold text-secondary-fixed font-mono">
                      99.95%
                    </div>
                    <div className="text-xs text-on-tertiary-container uppercase tracking-wide">
                      Platform Uptime Guarantee
                    </div>
                  </div>
                  <div className="border-t border-primary-container/80 pt-3">
                    <div className="text-3xl font-extrabold text-secondary-fixed font-mono">
                      4+ Years
                    </div>
                    <div className="text-xs text-on-tertiary-container uppercase tracking-wide">
                      Operating Trust Infrastructure
                    </div>
                  </div>
                  <div className="border-t border-primary-container/80 pt-3">
                    <div className="text-3xl font-extrabold text-secondary-fixed font-mono">
                      10,000+
                    </div>
                    <div className="text-xs text-on-tertiary-container uppercase tracking-wide">
                      Certificates Issued to Date
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary-container">
                  <a className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-all" href="https://meet.rcfi.co.ke/" target="_blank">
                    {" Schedule an Assessment "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 6: ACADEMY TEASER */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-lowest py-space-xl" id="academy">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="rounded-2xl bg-gradient-to-br from-primary via-primary-container to-tertiary text-on-primary p-8 lg:p-12 shadow-xl border border-secondary-container/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4 text-left">
                  <div className="text-[12px] font-mono uppercase tracking-widest text-secondary-fixed font-bold">
                    // learn with rcfi academy
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {" Taught by practitioners who operate the infrastructure. "}
                  </h2>
                  <p className="text-base text-on-tertiary-container leading-relaxed">
                    {" The region’s only programmes taught by a licensed certification authority — from HL7 FHIR and OpenHIE to applied PKI and AI. Flagship: the "}
                    <span className="text-white font-semibold">
                      {"Digital Health Interoperability & Governance Programme"}
                    </span>
                    {". "}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-tertiary-container text-secondary-fixed text-xs font-mono font-medium border border-secondary-fixed/20">
                      HL7 FHIR R4
                    </span>
                    <span className="px-3 py-1 rounded-full bg-tertiary-container text-secondary-fixed text-xs font-mono font-medium border border-secondary-fixed/20">
                      OpenHIE Architecture
                    </span>
                    <span className="px-3 py-1 rounded-full bg-tertiary-container text-secondary-fixed text-xs font-mono font-medium border border-secondary-fixed/20">
                      Public Key Cryptography
                    </span>
                    <span className="px-3 py-1 rounded-full bg-tertiary-container text-secondary-fixed text-xs font-mono font-medium border border-secondary-fixed/20">
                      Executive Briefings
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                  <Link className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-bold text-sm hover:bg-secondary-fixed-dim transition-all shadow-md" href="/academy/">
                    {" Explore the Academy "}
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-xs text-on-tertiary-container mt-2">
                    Next cohort enrolments currently open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 7: INSIGHTS TEASER (THE TRUST LAYER) */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-low py-space-xl border-t border-outline-variant/50" id="insights">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-[12px] font-mono uppercase tracking-widest text-secondary font-bold mb-1">
                  // from the trust layer
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {"Perspectives, policy briefs & engineering notes"}
                </h2>
              </div>
              <Link className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors" href="/insights/">
                {" Read all perspectives on The Trust Layer "}
                <span className="material-symbols-outlined ml-1 text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            {/* 3 Latest Curated Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <article className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      {"REGULATORY & HEALTH"}
                    </span>
                    <span>
                      March 2026
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">
                    {" Navigating the Kenya Digital Health Act 2023: Interoperability Mandates for Health Providers "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" A tactical walkthrough of compliance prerequisites, patient data custodianship rules, and national health sandbox guidelines. "}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/40 flex items-center text-secondary text-xs font-bold">
                  <span>
                    Read article
                  </span>
                  <span className="material-symbols-outlined text-[16px] ml-1 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </article>
              {/* Article 2 */}
              <article className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      {"LEGAL & CRYPTOGRAPHY"}
                    </span>
                    <span>
                      February 2026
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">
                    {" Cryptographic Non-Repudiation under KICA Cap 411A & Evidence Act Section 106B "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" Why standard electronic signatures fail in judicial disputes and how licensed X.509 PKI seals guarantee evidentiary validity. "}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/40 flex items-center text-secondary text-xs font-bold">
                  <span>
                    Read article
                  </span>
                  <span className="material-symbols-outlined text-[16px] ml-1 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </article>
              {/* Article 3 */}
              <article className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:border-secondary-fixed transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      CLOUD ARCHITECTURE
                    </span>
                    <span>
                      January 2026
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">
                    {" Building In-Country Sovereign Cloud Architectures in Kenya: A Practical Guide "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" Hardware security modules, local key lifecycle management, and satisfying ODPC cross-border transfer barriers. "}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/40 flex items-center text-secondary text-xs font-bold">
                  <span>
                    Read article
                  </span>
                  <span className="material-symbols-outlined text-[16px] ml-1 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ========================================================================= */}
        {" "}
        {/* SECTION 8: CLOSING CTA */}
        {" "}
        {/* ========================================================================= */}
        <section className="w-full bg-surface-container-lowest py-space-xl" id="contact">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="rounded-2xl bg-gradient-to-br from-primary via-primary-container to-tertiary text-on-primary p-8 lg:p-14 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-2xl pointer-events-none" />
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-on-primary leading-tight">
                  {" Let’s build what Africa trusts. "}
                </h2>
                <p className="text-base sm:text-lg text-on-tertiary-container leading-relaxed">
                  {" Whether you’re signing your first document or architecting a national system — start the conversation today. "}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-all shadow-md" href="https://meet.rcfi.co.ke/" target="_blank">
                    {" Book a Meeting "}
                  </a>
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-tertiary-container hover:bg-primary-container text-on-primary font-semibold text-sm transition-all shadow-sm" href="mailto:info@rcfi.co.ke">
                    {" Send a Message "}
                  </a>
                </div>
                <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-secondary-fixed">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {" Free consultation "}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {" No credit card required "}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {" 24/7 technical desk "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ========================================================================= */}
      {" "}
      {/* 5-COLUMN FOOTER WITH OFFICIAL DETAILS & BADGES */}
      {" "}
      {/* ========================================================================= */}
      <footer className="w-full bg-tertiary text-on-tertiary border-t border-primary-container/40">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1: Brand & Identity */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <img alt="RCFI Logo" className="h-8 w-auto brightness-0 invert" src="/brand/rcfi-mark.svg" />
                <span className="font-bold text-lg text-white">
                  RCFI
                </span>
              </div>
              <p className="text-xs font-semibold text-secondary-fixed tracking-wide">
                {" Reprodrive Center for Innovation Limited "}
              </p>
              <p className="text-xs text-outline-variant max-w-sm leading-relaxed">
                {" Kenya's licensed electronic certification provider. Engineering sovereign digital trust, HL7 FHIR health interoperability, e-KYC, and scalable governance solutions for Africa. "}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a aria-label="LinkedIn" className="w-8 h-8 rounded bg-tertiary-container hover:bg-secondary-fixed hover:text-primary flex items-center justify-center text-on-tertiary transition-colors" href="https://linkedin.com" target="_blank">
                  <span className="material-symbols-outlined text-[16px]">
                    share
                  </span>
                </a>
                <a aria-label="X" className="w-8 h-8 rounded bg-tertiary-container hover:bg-secondary-fixed hover:text-primary flex items-center justify-center text-on-tertiary transition-colors" href="https://x.com" target="_blank">
                  <span className="material-symbols-outlined text-[16px]">
                    tag
                  </span>
                </a>
                <a aria-label="Email" className="w-8 h-8 rounded bg-tertiary-container hover:bg-secondary-fixed hover:text-primary flex items-center justify-center text-on-tertiary transition-colors" href="mailto:info@rcfi.co.ke">
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                </a>
              </div>
            </div>
            {/* Column 2: Products */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-fixed font-bold border-b border-tertiary-container pb-2">
                Platforms
              </h3>
              <ul className="space-y-2 text-xs text-outline-variant">
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="https://certysign.rcfi.co.ke/" target="_blank">
                    CertySign (PKI / Sign)
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#products">
                    Elano Governance
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#products">
                    Prezio Operations
                  </a>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" href="/verify/">
                    Document Verifier
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3: Practices & Academy */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-fixed font-bold border-b border-tertiary-container pb-2">
                Solutions
              </h3>
              <ul className="space-y-2 text-xs text-outline-variant">
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#services">
                    {"Digital Trust & PKI"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#services">
                    {"Cybersecurity & GRC"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#services">
                    Digital Health Governance
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#services">
                    {"Data, Analytics & AI"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-fixed transition-colors" href="#academy">
                    RCFI Academy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 & 5: Physical Address & Contact Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-secondary-fixed font-bold border-b border-tertiary-container pb-2">
                Headquarters
              </h3>
              <div className="space-y-2 text-xs text-outline-variant leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[16px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[16px] shrink-0">
                    mail
                  </span>
                  <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[16px] shrink-0">
                    call
                  </span>
                  <a className="hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                    +254 (0) 20 283 9200
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[16px] shrink-0">
                    support_agent
                  </span>
                  <span>
                    Desk Open: 24/7 Mon – Sun
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Legal Strip & Regulatory Badges */}
        <div className="border-t border-tertiary-container py-4 text-[11px] text-outline-variant">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div>
              {" © 2026 Reprodrive Center for Innovation Limited. All rights reserved. "}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-secondary-fixed font-medium">
              <span>
                • ISO 27001 Certified
              </span>
              <span>
                • CAK Licensed (TL/E-CSP 00014)
              </span>
              <span>
                • Kenya DPA Compliant
              </span>
              <span>
                • Nairobi Sovereign Vault
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* ========================================================================= */}
      {" "}
      {/* LIGHTWEIGHT VANILLA JAVASCRIPT FOR HERO SLIDER, TABS & ANIMATIONS */}
      {" "}
      {/* ========================================================================= */}
      {" "}
      <PageScripts scripts={scripts} />
    </div>
  );
}
