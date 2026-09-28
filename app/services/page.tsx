import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/services/page.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Services | RCFI Technology" };

export default function ServicesPage() {
  return (
    <div className="rcfi-services" style={{ display: "contents" }}>
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        {/* Top Sovereign Utility Strip */}
        <div className="bg-[#062c1e] text-emerald-100 text-xs py-1.5 px-4 border-b border-[#0a4530]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
            {/* Left: Phone + Email + Accreditation License */}
            <div className="flex items-center flex-wrap gap-3 sm:gap-5 tracking-wide">
              <a href="tel:+254202839200" className="flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[13px] text-emerald-400">
                  phone
                </span>
                <span className="">
                  +254 (0) 20 283 9200
                </span>
              </a>
              <span className="text-emerald-800 hidden sm:inline">
                •
              </span>
              <a href="mailto:info@rcfi.co.ke" className="flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[13px] text-emerald-400">
                  mail
                </span>
                <span className="">
                  info@rcfi.co.ke
                </span>
              </a>
              <span className="text-emerald-800 hidden md:inline">
                •
              </span>
              <span className="hidden md:flex items-center gap-1.5 font-medium text-emerald-100/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {" Accredited & CAK Licensed ECSP (TL/E-CSP 00014) "}
              </span>
            </div>
            {/* Right: Quick links to CA Repository & Trust Center */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <Link href="/trust/" data-path="ca-repository" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-emerald-400">
                  database
                </span>
                <span className="">
                  CA Repository (/repository/)
                </span>
              </Link>
              <span className="text-emerald-800">
                |
              </span>
              <Link href="/trust/" data-path="trust-center" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-emerald-400">
                  verified_user
                </span>
                <span className="">
                  Trust Center (/trust/)
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Far Left: Logo linking to / */}
          <Link className="flex items-center gap-3 shrink-0 group" data-path="home" href="/">
            <div className="grid grid-cols-2 gap-1 w-8 h-8 p-0.5 rounded-lg bg-emerald-950/5 group-hover:scale-105 transition-transform">
              <div className="w-3.5 h-3.5 rounded-sm bg-[#006c49]" />
              <div className="w-3.5 h-3.5 rounded-sm bg-[#10b981]" />
              <div className="w-3.5 h-3.5 rounded-sm bg-[#34d399]" />
              <div className="w-3.5 h-3.5 rounded-sm bg-[#064e3b]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#062c1e] leading-none">
                RCFI
              </span>
              <span className="text-[11px] font-medium text-slate-500 leading-tight mt-1 hidden sm:inline tracking-tight">
                Reprodrive Center for Innovation Limited
              </span>
            </div>
          </Link>
          {/* Main Nav Links with Hover Dropdown Menus */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold text-slate-700">
            {/* 1. Services Dropdown */}
            <div className="relative group py-4">
              <Link href="/services/" data-path="services" className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1 text-[#006c49] font-bold">
                <span className="">
                  Services
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006c49] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </Link>
              <div className="absolute left-0 top-full -mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                  Specialized Practices
                </div>
                <Link href="/services/digital-trust-pki/" data-path="practice-pki" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    key
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      {"Digital Trust & PKI"}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"CA, digital signatures & lifecycle"}
                    </div>
                  </div>
                </Link>
                <Link href="/services/cybersecurity-assurance/" data-path="practice-cybersecurity" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    shield
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      {"Cybersecurity & Assurance"}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"Penetration testing & DPA compliance"}
                    </div>
                  </div>
                </Link>
                <Link href="/services/digital-health-governance/" data-path="practice-digital-health" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    vital_signs
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      Digital Health Governance
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"FHIR, OpenHIE & interoperability"}
                    </div>
                  </div>
                </Link>
                <Link href="/services/data-analytics-ai/" data-path="practice-data-ai" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    analytics
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      {"Data, Analytics & AI"}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"Sovereign models & data governance"}
                    </div>
                  </div>
                </Link>
                <Link href="/services/digital-cloud-engineering/" data-path="practice-cloud-engineering" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    cloud
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      {"Digital & Cloud Engineering"}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      DevSecOps, cloud-native platforms
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* 2. Products Dropdown */}
            <div className="relative group py-4">
              <Link href="/products/certysign/" data-path="products-overview" className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1">
                <span className="">
                  Products
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006c49] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </Link>
              <div className="absolute left-0 top-full -mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <Link href="/products/certysign/" data-path="certysign" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    draw
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      CertySign
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Enterprise e-signature platform
                    </div>
                  </div>
                </Link>
                <Link href="/products/elano/" data-path="elano-platform" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    fingerprint
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      Elano
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"Biometric & sovereign e-KYC"}
                    </div>
                  </div>
                </Link>
                <Link href="/products/prezio/" data-path="prezio-cryptography" className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/item">
                  <span className="material-symbols-outlined text-[18px] text-[#006c49] mt-0.5">
                    lock
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#006c49]">
                      Prezio
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {"HSM key stores & cryptographic tools"}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* 3. Academy Dropdown */}
            <div className="relative group py-4">
              <Link href="/academy/" data-path="academy" className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1">
                <span className="">
                  Academy
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006c49] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </Link>
              <div className="absolute left-0 top-full -mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <Link href="/academy/" data-path="academy" className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/50 text-xs font-bold text-[#006c49] mb-1 hover:bg-emerald-50">
                  <span className="material-symbols-outlined text-[16px]">
                    school
                  </span>
                  <span className="">
                    Academy Overview
                  </span>
                </Link>
                <Link href="/academy/digital-health-interoperability/" data-path="academy-health" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  {"Digital Health Interoperability & Governance"}
                </Link>
                <Link href="/academy/digital-trust-cyber/" data-path="academy-trust" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  {"Digital Trust & Cyber Defence"}
                </Link>
                <Link href="/academy/applied-data-ai/" data-path="academy-ai" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  {"Applied Data & AI"}
                </Link>
                <Link href="/academy/modern-engineering/" data-path="academy-engineering" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Modern Engineering
                </Link>
                <Link href="/academy/executive-briefings/" data-path="academy-executive" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Executive Briefings
                </Link>
              </div>
            </div>
            <PartnersNavMenu className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1" wrapperClassName="py-4" />
            {/* 4. Insights Dropdown */}
            <div className="relative group py-4">
              <Link href="/insights/" data-path="insights" className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1">
                <span className="">
                  Insights
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006c49] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </Link>
              <div className="absolute left-0 top-full -mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <Link href="/insights/" data-path="insights-trust-layer" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  The Trust Layer
                </Link>
                <Link href="/impact/" data-path="insights-impact" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Impact Stories
                </Link>
                <Link href="/insights/" data-path="insights-knowledge" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Knowledge Hub
                </Link>
                <Link href="/insights/" data-path="insights-sovereignty" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  The Sovereignty Series
                </Link>
                <Link href="/insights/" data-path="insights-newsroom" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Newsroom
                </Link>
              </div>
            </div>
            {/* 5. Company Dropdown */}
            <div className="relative group py-4">
              <Link href="/about/" data-path="company" className="px-3 py-1.5 rounded-md hover:text-[#006c49] hover:bg-slate-50 transition-colors inline-flex items-center gap-1">
                <span className="">
                  Company
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006c49] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </Link>
              <div className="absolute left-0 top-full -mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <Link href="/about/" data-path="about" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  About RCFI
                </Link>
                <Link href="/ecosystem/" data-path="ecosystem" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Ecosystem
                </Link>
                <Link href="/careers/" data-path="careers" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Careers
                </Link>
                <Link href="/contact/" data-path="contact" className="block p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium hover:text-[#006c49]">
                  Contact
                </Link>
              </div>
            </div>
            {/* 6. Standalone Link: Verify a Document */}
            {" "}
            <Link href="/verify/" data-path="verify-document" className="px-3 py-1.5 rounded-md text-[#006c49] hover:bg-emerald-50 transition-colors inline-flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              <span className="">
                Verify a Document
              </span>
            </Link>
          </nav>
          {/* Far Right: Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#062c1e] hover:bg-[#006c49] text-white rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm" data-path="book-meeting" href="#problem-assembly">
              {" Book a Meeting "}
            </a>
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer hidden sm:flex">
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
            </div>
            {/* Mobile Menu Trigger Button */}
            <button type="button" data-rcfi-onclick="document.getElementById('mobile-drawer').classList.toggle('hidden');" className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none" aria-label="Toggle Menu">
              {" "}
              <span className="material-symbols-outlined text-2xl">
                menu
              </span>
              {" "}
            </button>
          </div>
        </div>
        {/* Mobile Slide-out / Dropdown Drawer with Accordion Toggles */}
        <div id="mobile-drawer" className="hidden lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          {/* Services Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-services').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                Services
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-services" className="space-y-1.5 pt-2 pl-3">
              <Link href="/services/digital-trust-pki/" data-path="practice-pki" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Digital Trust & PKI"}
              </Link>
              <Link href="/services/cybersecurity-assurance/" data-path="practice-cybersecurity" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Cybersecurity & Assurance"}
              </Link>
              <Link href="/services/digital-health-governance/" data-path="practice-digital-health" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Digital Health Governance, Standards & Interoperability"}
              </Link>
              <Link href="/services/data-analytics-ai/" data-path="practice-data-ai" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Data, Analytics & AI"}
              </Link>
              <Link href="/services/digital-cloud-engineering/" data-path="practice-cloud-engineering" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Digital & Cloud Engineering"}
              </Link>
            </div>
          </div>
          {/* Products Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-products').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                Products
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-products" className="hidden space-y-1.5 pt-2 pl-3">
              <Link href="/products/certysign/" data-path="certysign" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                CertySign (/products/certysign/)
              </Link>
              <Link href="/products/elano/" data-path="elano-platform" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Elano (/products/elano/)
              </Link>
              <Link href="/products/prezio/" data-path="prezio-cryptography" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Prezio (/products/prezio/)
              </Link>
            </div>
          </div>
          {/* Academy Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-academy').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                Academy
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-academy" className="hidden space-y-1.5 pt-2 pl-3">
              <Link href="/academy/" data-path="academy" className="block text-xs font-semibold text-[#006c49] py-1">
                Academy Overview
              </Link>
              <Link href="/academy/digital-health-interoperability/" data-path="academy-health" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Digital Health Interoperability & Governance"}
              </Link>
              <Link href="/academy/digital-trust-cyber/" data-path="academy-trust" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Digital Trust & Cyber Defence"}
              </Link>
              <Link href="/academy/applied-data-ai/" data-path="academy-ai" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                {"Applied Data & AI"}
              </Link>
              <Link href="/academy/modern-engineering/" data-path="academy-engineering" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Modern Engineering
              </Link>
              <Link href="/academy/executive-briefings/" data-path="academy-executive" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Executive Briefings
              </Link>
            </div>
          </div>
          {/* Partners & Ecosystem Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-partners').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                {"Partners & Ecosystem"}
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-partners" className="hidden space-y-1.5 pt-2 pl-3">
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="ecosystem" href="/ecosystem/">
                {"Ecosystem & Strategic Partners"}
              </Link>
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="partners" href="/partners/">
                Ecosystem Overview
              </Link>
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="partners-konza" href="/partners/konza/">
                Konza Technopolis
              </Link>
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="partners-dha" href="/partners/dha/">
                Digital Health Agency (DHA)
              </Link>
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="partners-intellisoft" href="/partners/intellisoft/">
                IntelliSOFT Consulting
              </Link>
              <Link className="block text-xs text-slate-600 py-1 hover:text-[#006c49]" data-path="partners-crown-interactive" href="/partners/crown-interactive/">
                Crown Interactive
              </Link>
            </div>
          </div>
          {/* Insights Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-insights').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                Insights
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-insights" className="hidden space-y-1.5 pt-2 pl-3">
              <Link href="/insights/" data-path="insights-trust-layer" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                The Trust Layer
              </Link>
              <Link href="/impact/" data-path="insights-impact" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Impact Stories
              </Link>
              <Link href="/insights/" data-path="insights-knowledge" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Knowledge Hub
              </Link>
              <Link href="/insights/" data-path="insights-sovereignty" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                The Sovereignty Series
              </Link>
              <Link href="/insights/" data-path="insights-newsroom" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Newsroom
              </Link>
            </div>
          </div>
          {/* Company Accordion */}
          <div className="border-b border-slate-100 pb-3">
            <button type="button" data-rcfi-onclick="document.getElementById('m-company').classList.toggle('hidden');" className="w-full flex items-center justify-between text-sm font-bold text-slate-800 py-1.5 text-left">
              <span className="">
                Company
              </span>
              <span className="material-symbols-outlined text-lg text-slate-400">
                expand_more
              </span>
            </button>
            <div id="m-company" className="hidden space-y-1.5 pt-2 pl-3">
              <Link href="/about/" data-path="about" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                About RCFI
              </Link>
              <Link href="/ecosystem/" data-path="ecosystem" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Ecosystem
              </Link>
              <Link href="/careers/" data-path="careers" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Careers
              </Link>
              <Link href="/contact/" data-path="contact" className="block text-xs text-slate-600 py-1 hover:text-[#006c49]">
                Contact
              </Link>
            </div>
          </div>
          {/* Standalone Links & CTA */}
          <div className="pt-2 space-y-3">
            <Link href="/verify/" data-path="verify-document" className="flex items-center gap-2 text-xs font-bold text-[#006c49] py-1.5">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span className="">
                Verify a Document (/verify/)
              </span>
            </Link>
            <a href="#problem-assembly" data-path="book-meeting" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#062c1e] text-white rounded-lg text-xs font-bold shadow-sm">
              {" Book a Meeting "}
            </a>
          </div>
        </div>
      </header>
      {/* ==================== HERO SECTION ==================== */}
      <main className="flex-grow pt-[112px]">
        <section className="relative w-full bg-gradient-to-br from-[#062c1e] via-[#083625] to-[#093b2a] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-emerald-900/50">
          {/* Architectural Geometric Matrix Pattern */}
          <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <defs>
                {" "}
                <pattern height="48" id="hero-grid" patternUnits="userSpaceOnUse" width="48">
                  {" "}
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6ffbbe" strokeWidth="0.8" />
                  {" "}
                  <circle cx="48" cy="48" fill="#6ffbbe" r="1.5" />
                  {" "}
                </pattern>
                {" "}
              </defs>
              {" "}
              <rect fill="url(#hero-grid)" height="100%" width="100%" />
              {" "}
            </svg>
          </div>
          {/* Subtle ambient glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              {/* Sovereign Pill */}
              {" "}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#6ffbbe] animate-pulse" />
                <span className="uppercase tracking-wider font-bold text-[11px]">
                  {"// OUR PRACTICES & ENGINEERING STANDARD"}
                </span>
              </div>
              {" "}
              {/* Bold Razor-Sharp Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                {" Five practices."}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ffbbe] via-emerald-300 to-teal-200">
                  {" One standard of trust. "}
                </span>
              </h1>
              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 font-normal leading-relaxed max-w-3xl mb-8">
                {" Everything we do runs on the same spine: open standards, sovereign infrastructure, and the discipline of a licensed certification authority. Choose a practice — or bring us a problem and we’ll assemble the team. "}
              </p>
              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6ffbbe] text-[#062c1e] font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-950/20" href="#practices-grid">
                  <span className="">
                    Explore Practices
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_downward
                  </span>
                </a>
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-900/60 hover:bg-emerald-900/90 text-emerald-100 border border-emerald-600/40 font-semibold text-sm transition-all" href="#problem-assembly">
                  <span className="">
                    Book a Consultation
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_today
                  </span>
                </a>
              </div>
              {/* Trust Badges Ribbon */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/20 text-emerald-200">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    verified_user
                  </span>
                  <span className="">
                    Licensed CAK ECSP (TL/E-CSP 00014)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/20 text-emerald-200">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    workspace_premium
                  </span>
                  <span className="">
                    ISO 27001 Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/20 text-emerald-200">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    gavel
                  </span>
                  <span className="">
                    Kenya DPA Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/20 text-emerald-200">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    lan
                  </span>
                  <span className="">
                    Hosted on Kenyan Soil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Editorial Matrix Header Strip */}
        <section className="w-full bg-white border-b border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#006c49] font-bold block mb-1">
                {"// ARCHITECTURE & DELIVERY MATRIX"}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Specialized National Practices
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
              {" Each division maintains ring-fenced engineering benches, accredited cryptographers, and regulatory audit leads directly integrated with Kenya’s national digital fabric. "}
            </p>
          </div>
        </section>
        {/* ==================== FIVE PRACTICES GRID ==================== */}
        <section className="w-full py-12 sm:py-16 bg-[#f8f9fc]" id="practices-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* ROW 1: Practice 01 & 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* PRACTICE 01: Digital Trust & PKI (7 Cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/60">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#006c49]" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-sm text-[#006c49]">
                        01
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#006c49] block">
                          Flagship Infrastructure
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {"Digital Trust & PKI"}
                        </h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#006c49] group-hover:bg-emerald-50 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">
                        key
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base mb-6">
                    {" Certificates, signatures, identity, and lifecycle management — from Kenya’s licensed CA. "}
                  </p>
                  {/* Capability Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                      Core Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                          verified
                        </span>
                        <span className="">
                          PKI as a Service
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                          sync_alt
                        </span>
                        <span className="">
                          Certificate Lifecycle Management (CLM)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                          badge
                        </span>
                        <span className="">
                          {"Digital Identity & e-KYC"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                          schedule
                        </span>
                        <span className="">
                          RFC 3161 Trusted Timestamping
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Primary Sector */}
                  <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100/60 flex items-start gap-2.5 mb-6">
                    <span className="material-symbols-outlined text-[#006c49] text-[20px] mt-0.5">
                      apartment
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-[#006c49] block">
                        Primary Sector
                      </span>
                      <span className="text-xs text-slate-700 font-medium">
                        Government, Banking, Financial Institutions, Enterprise
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#006c49] hover:text-[#062c1e] transition-all group-hover:translate-x-1" data-path="practice-pki" href="/services/digital-trust-pki/">
                    <span className="">
                      {"Explore Digital Trust & PKI"}
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* PRACTICE 02: Cybersecurity & Assurance (5 Cols) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/60">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#062c1e]" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-800">
                        02
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          {"Audit & Resiliency"}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {"Cybersecurity & Assurance"}
                        </h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">
                        shield
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm mb-6">
                    {" GRC Audits, testing, audits, and assurance that stand up to regulators and procurement. "}
                  </p>
                  {/* Capability Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                      Core Capabilities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-700">
                        Penetration Testing
                      </span>
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-700">
                        Cloud Security Reviews
                      </span>
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-700">
                        Kenya DPA Audits
                      </span>
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-700">
                        {"Certification & Tender Readiness"}
                      </span>
                    </div>
                  </div>
                  {/* Primary Sector */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5 mb-6">
                    <span className="material-symbols-outlined text-slate-700 text-[20px] mt-0.5">
                      local_hospital
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-slate-600 block">
                        Primary Sector
                      </span>
                      <span className="text-xs text-slate-700 font-medium">
                        Healthcare, FinTech, Public Sector, Regulated Utilities
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#006c49] transition-all group-hover:translate-x-1" data-path="practice-cybersecurity" href="/services/cybersecurity-assurance/">
                    <span className="">
                      {"Explore Cybersecurity & Assurance"}
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* ROW 2: Practice 03 & 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* PRACTICE 03: Digital Health Governance, Standards & Interoperability (6 Cols) */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-emerald-500" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-sm text-[#006c49]">
                        03
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#006c49] block">
                          Global Standards
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug">
                          {"Digital Health Governance, Standards & Interoperability"}
                        </h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        vital_signs
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm mb-6">
                    {" National frameworks and FHIR/OpenHIE architectures that connect health systems to the world. "}
                  </p>
                  {/* Capability Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                      Core Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                        <span className="">
                          {"Regulatory & Certification Frameworks"}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                        <span className="">
                          HL7 FHIR Exchange
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                        <span className="">
                          OpenHIE Architecture
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
                        <span className="">
                          WHO GDHCN Readiness
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Primary Sector */}
                  <div className="p-3.5 bg-emerald-50/40 rounded-xl border border-emerald-100/60 flex items-start gap-2.5 mb-6">
                    <span className="material-symbols-outlined text-[#006c49] text-[20px] mt-0.5">
                      hub
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-[#006c49] block">
                        Primary Sector
                      </span>
                      <span className="text-xs text-slate-700 font-medium">
                        Ministries of Health, Digital Health Agency, Counties, Health-tech Vendors
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#006c49] hover:text-[#062c1e] transition-all group-hover:translate-x-1" data-path="practice-digital-health" href="/services/digital-health-governance/">
                    <span className="">
                      Explore Digital Health Governance
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* PRACTICE 04: Data, Analytics & AI (6 Cols) */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#083625]" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-800">
                        04
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#006c49] block">
                          Sovereign Intelligence
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {"Data, Analytics & AI"}
                        </h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#006c49] group-hover:bg-emerald-50 transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        analytics
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm mb-6">
                    {" From dashboards to deployed models — decisions powered by governed data. "}
                  </p>
                  {/* Capability Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                      Core Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#083625]" />
                        <span className="">
                          {"Analytics & BI"}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#083625]" />
                        <span className="">
                          {"Data Engineering & Governance"}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#083625]" />
                        <span className="">
                          Applied Machine Learning
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#083625]" />
                        <span className="">
                          Sovereign AI Readiness
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Primary Sector */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5 mb-6">
                    <span className="material-symbols-outlined text-slate-700 text-[20px] mt-0.5">
                      query_stats
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-slate-600 block">
                        Primary Sector
                      </span>
                      <span className="text-xs text-slate-700 font-medium">
                        Public Sector Agencies, Development Partners, Enterprises
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#006c49] transition-all group-hover:translate-x-1" data-path="practice-data-ai" href="/services/data-analytics-ai/">
                    <span className="">
                      {"Explore Data, Analytics & AI"}
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* ROW 3: Practice 05 (Full Span 12 cols) */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group hover:border-emerald-500/60">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#006c49]" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 flex flex-col justify-between hover:border-emerald-500/60">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-sm text-[#006c49]">
                        05
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#006c49] block">
                          Enterprise Foundations
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {"Digital & Cloud Engineering"}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base mb-6">
                      {" Secure platforms, APIs, and cloud-native systems, engineered for government and enterprise. "}
                    </p>
                  </div>
                  {/* Primary Sector */}
                  <div className="p-3.5 bg-emerald-50/40 rounded-xl border border-emerald-100/60 flex items-start gap-2.5 mt-auto">
                    <span className="material-symbols-outlined text-[#006c49] text-[20px] mt-0.5">
                      cloud_sync
                    </span>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-[#006c49] block">
                        Primary Sector
                      </span>
                      <span className="text-xs text-slate-700 font-medium">
                        National Infrastructure, Commercial Enterprises, Financial Services
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-between lg:pl-6 lg:border-l lg:border-slate-100 hover:border-emerald-500/60">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-3">
                      Capabilities Matrix
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[#006c49] text-[20px]">
                          terminal
                        </span>
                        <span className="">
                          {"Platform & Product Engineering"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[#006c49] text-[20px]">
                          integration_instructions
                        </span>
                        <span className="">
                          {"API & Systems Integration"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[#006c49] text-[20px]">
                          cloud
                        </span>
                        <span className="">
                          {"Cloud-Native & DevSecOps"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[#006c49] text-[20px]">
                          support_agent
                        </span>
                        <span className="">
                          24/7 Managed Evolution
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-end">
                    <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#006c49] hover:text-[#062c1e] transition-all group-hover:translate-x-1" data-path="practice-cloud-engineering" href="/services/digital-cloud-engineering/">
                      <span className="">
                        {"Explore Digital & Cloud Engineering"}
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== CANONICAL STATS BANNER ==================== */}
        <section className="w-full bg-white border-y border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#006c49] font-bold block mb-1">
                  {"// STATUTORY RIGOR & SLA"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Sovereign Reliability Benchmarks
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="">
                  {"Live Telemetry & Statutory Compliance Active"}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Platform Uptime SLA
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    TIER-IV
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#006c49] tracking-tight font-mono">
                  99.95%
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Regulatory grade
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Users Served
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    ACTIVE
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#006c49] tracking-tight font-mono">
                  10,000+
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified identities
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Counties Reached
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    100%
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#006c49] tracking-tight font-mono">
                  47 / 47
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Republic of Kenya
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Years Operating
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    TL/E-CSP
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#006c49] tracking-tight font-mono">
                  4+
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Continuous trust
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== INTERACTIVE "BRING US A PROBLEM" STRIP ==================== */}
        <section className="w-full bg-[#062c1e] text-white py-16 sm:py-20 relative overflow-hidden" id="problem-assembly">
          {/* Architectural Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <defs>
                {" "}
                <pattern height="40" id="problem-grid" patternUnits="userSpaceOnUse" width="40">
                  {" "}
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6ffbbe" strokeWidth="0.8" />
                  {" "}
                </pattern>
                {" "}
              </defs>
              {" "}
              <rect fill="url(#problem-grid)" height="100%" width="100%" />
              {" "}
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 shadow-sm">
                <span className="material-symbols-outlined text-[15px]">
                  psychology
                </span>
                <span className="uppercase tracking-wider font-bold text-[11px]">
                  // DIRECT ADVISORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {" Bring us a problem and we’ll assemble the team "}
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base mt-3 leading-relaxed">
                {" Tell us about your architectural, compliance, or engineering bottleneck. Our certified Principal Architects will parse your stack requirements within 24 hours. "}
              </p>
            </div>
            {/* Refined Dark Form Card */}
            <form className="bg-[#0b3827]/90 backdrop-blur-sm border border-emerald-500/30 text-white p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6" id="problem-assembly-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('success-state').classList.remove('hidden'); this.classList.add('hidden');">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 flex flex-col">
                  <label className="text-xs font-semibold text-emerald-200 mb-2" htmlFor="problem-text">
                    {" Describe your architecture or compliance challenge: "}
                  </label>
                  <textarea className="w-full p-3.5 rounded-xl bg-[#041f15]/80 border border-emerald-700/60 text-white placeholder-emerald-200/40 text-sm focus:outline-none focus:border-[#6ffbbe] focus:ring-1 focus:ring-[#6ffbbe] transition-all resize-none font-sans" id="problem-text" placeholder="e.g. We need to pass DHA certification and connect to HL7 FHIR registries, or migrate our HSM key stores..." required rows={4} defaultValue="" />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-emerald-200 mb-2 block" htmlFor="lead-email">
                      {" Your official organization email: "}
                    </label>
                    <input className="w-full h-12 px-4 rounded-xl bg-[#041f15]/80 border border-emerald-700/60 text-white placeholder-emerald-200/40 text-sm focus:outline-none focus:border-[#6ffbbe] focus:ring-1 focus:ring-[#6ffbbe] transition-all font-sans" id="lead-email" placeholder="director@organization.go.ke" required type="email" />
                  </div>
                  <button className="w-full h-12 bg-[#6ffbbe] hover:bg-emerald-300 text-[#062c1e] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer" type="submit">
                    <span className="">
                      Assemble Team
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-300/80 pt-4 border-t border-emerald-800/60">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                    lock
                  </span>
                  <span className="">
                    Non-Disclosure Agreement guaranteed under CAK Data Protection Protocol
                  </span>
                </div>
                <div className="text-emerald-300/70 font-medium">
                  {"Response target: < 24 business hours"}
                </div>
              </div>
            </form>
            {/* Submission Success State */}
            <div className="hidden bg-[#0b3827] border border-emerald-400/40 text-white p-8 rounded-2xl shadow-xl flex items-center gap-5" id="success-state">
              <div className="w-14 h-14 rounded-2xl bg-[#6ffbbe] text-[#062c1e] flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl font-bold">
                  check
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Challenge Received by Principal Engineering
                </h4>
                <p className="text-sm text-emerald-200 leading-relaxed">
                  Our technical practice leads are reviewing your stack context. We have routed your specs to the relevant practice lead for a dispatch call.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ==================== CORPORATE FOOTER ==================== */}
      <footer className="w-full bg-[#041f15] text-white pt-16 pb-12 border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-emerald-900/60">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="grid grid-cols-2 gap-1 w-7 h-7 p-0.5 rounded-lg bg-emerald-900/50">
                  <div className="w-3 h-3 rounded-sm bg-[#006c49]" />
                  <div className="w-3 h-3 rounded-sm bg-[#10b981]" />
                  <div className="w-3 h-3 rounded-sm bg-[#34d399]" />
                  <div className="w-3 h-3 rounded-sm bg-[#064e3b]" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  RCFI
                </span>
              </div>
              <p className="text-xs text-emerald-200/80 leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed Electronic Certification Service Provider (ECSP) delivering cryptographic trust, digital signature infrastructure, and sovereign telecommunications innovation.
              </p>
              <div className="pt-2 text-xs">
                <p className="text-emerald-400 font-semibold">
                  Communications Authority License:
                </p>
                <p className="font-bold text-white text-sm mt-0.5 font-mono">
                  TL/E-CSP 00014
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                {"Practices & Services"}
              </span>
              <ul className="text-xs text-emerald-200/80 space-y-2">
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="practice-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="practice-cybersecurity" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="practice-digital-health" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="practice-data-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="practice-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="verify-document" href="/verify/">
                    Document Verification Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Products
              </span>
              <ul className="text-xs text-emerald-200/80 space-y-2">
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign e-Signature
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="elano-platform" href="/products/elano/">
                    {"Elano Identity & e-KYC"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="prezio-cryptography" href="/products/prezio/">
                    {"Prezio HSM & Cryptography"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="products-overview" href="/products/certysign/">
                    All Product Suites
                  </Link>
                </li>
                <li className="">
                  <a className="hover:text-[#6ffbbe] transition-colors" data-path="book-meeting" href="#problem-assembly">
                    Enterprise Custom Build
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                {"Academy & Insights"}
              </span>
              <ul className="text-xs text-emerald-200/80 space-y-2">
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="academy" href="/academy/">
                    RCFI Technical Academy
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="insights-trust-layer" href="/insights/">
                    The Trust Layer Series
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="insights-knowledge" href="/insights/">
                    Knowledge Hub
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="insights-sovereignty" href="/insights/">
                    The Sovereignty Series
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="insights-newsroom" href="/insights/">
                    {"Newsroom & Dispatches"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="careers" href="/careers/">
                    {"Careers & Engineering Fellows"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                {"Compliance & Legal"}
              </span>
              <ul className="text-xs text-emerald-200/80 space-y-2">
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="ca-repository" href="/trust/">
                    CA Repository (/repository/)
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="trust-center" href="/trust/">
                    Trust Center (/trust/)
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="certificate-revocation-list" href="/trust/">
                    Certificate Revocation List (CRL)
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="data-protection" href="/privacy/">
                    Kenya DPA Compliance Notice
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="iso-certifications" href="/trust/">
                    ISO/IEC 27001:2022 Registry
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#6ffbbe] transition-colors" data-path="legal" href="/trust/">
                    {"Legal, CP & CPS Terms"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
            <div className="">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All rights reserved. Registered in the Republic of Kenya. • Hifadhi House, 5th Floor, Along ICD Road, Off Mombasa Road, P.O. Box 28392 - 00200, Nairobi, Kenya.
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link className="hover:text-white transition-colors" data-path="legal" href="/terms/">
                Legal Notice
              </Link>
              <span className="">
                •
              </span>
              <Link className="hover:text-white transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <span className="">
                •
              </span>
              <Link className="hover:text-white transition-colors" data-path="ca-repository" href="/trust/">
                {"CPS & CP Repo"}
              </Link>
              <span className="">
                •
              </span>
              <Link className="text-[#6ffbbe] hover:underline font-semibold" data-path="verify-document" href="/verify/">
                Validator Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
