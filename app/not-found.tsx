import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/not-found/page.css";

export const metadata: Metadata = { title: "404 - Page Not Found | RCFI Kenya" };

export default function NotFound() {
  return (
    <div className="rcfi-not-found" style={{ display: "contents" }}>
      {/* TOP UTILITY & HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white">
        {/* Top Utility Bar (Pine Green #0b4a34) */}
        <div className="w-full bg-[#0b4a34] text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between font-mono text-[11px] tracking-wide">
            <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6cf8bb] animate-pulse" />
                <span className="font-medium">
                  ISO 27001 Certified
                </span>
              </div>
              <span className="text-white/40">
                •
              </span>
              <span className="hidden sm:inline font-medium">
                CAK Licensed ECSP (TL/E-CSP 00014)
              </span>
              <span className="hidden sm:inline text-white/40">
                •
              </span>
              <span className="hidden md:inline text-white/90">
                Kenya DPA Compliant
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-white/90">
              <a className="hover:text-white transition-colors flex items-center gap-1" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[13px] text-[#6cf8bb]">
                  mail
                </span>
                <span>
                  info@rcfi.co.ke
                </span>
              </a>
              <span className="hidden md:inline text-white/30">
                |
              </span>
              <a className="hidden md:flex hover:text-white transition-colors items-center gap-1" href="tel:+2540202839200">
                <span className="material-symbols-outlined text-[13px] text-[#6cf8bb]">
                  call
                </span>
                {" "}
                <span>
                  +254 (0) 20 283 9200
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Main Navigation Bar */}
        <div className="w-full bg-white border-b border-slate-200">
          <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link className="flex items-center gap-3 group" data-path="home" href="/">
              <img alt="RCFI Reprodrive Center for Innovation" className="h-10 w-auto object-contain" src="/brand/rcfi-mark.svg" />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="home" href="/">
                Home
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="services" href="/services/">
                Services
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="products" href="/products/certysign/">
                Products
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="academy" href="/academy/">
                Academy
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="partners" href="/partners/">
                Partners
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="about" href="/about/">
                About
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              {" "}
              <Link className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b4a34] transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold border border-slate-300 text-slate-700 hover:border-[#0b4a34] hover:text-[#0b4a34] hover:bg-[#0b4a34]/5 transition-all" data-path="verify-document" href="/verify/">
                <span className="material-symbols-outlined text-[16px] mr-1.5 text-[#00a88f]">
                  verified
                </span>
                {"Verify a Document "}
              </Link>
              <Link className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0b4a34] text-white hover:bg-[#083626] transition-all shadow-sm" data-path="book-meeting" href="/contact/">
                {" Book a Meeting "}
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* MAIN 404 CONTENT */}
      <main className="w-full pt-[7.25rem] pb-20 flex-1 flex flex-col justify-center">
        <div className="relative w-full overflow-hidden py-10 lg:py-16">
          {/* Subtle Background Glow Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-emerald-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-slate-100/60 rounded-full blur-2xl" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            {/* Status Cryptographic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#98d3b5]/60 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[#0b4a34] tracking-wider uppercase">
                STATUS 404 • UNVERIFIED ROUTE
              </span>
            </div>
            {/* Large Elegant 404 Numeral */}
            <div className="relative my-2 select-none">
              <span className="font-sans text-[110px] md:text-[160px] lg:text-[190px] leading-none font-extrabold tracking-tighter text-[#d1e0d9] select-none block">
                {" 404 "}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-5 py-2 rounded-xl bg-white/95 border border-slate-200 shadow-sm backdrop-blur-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-rose-500 text-[20px]">
                    link_off
                  </span>
                  <span className="font-mono text-xs md:text-sm font-semibold text-[#0b4a34] tracking-tight">
                    ERR_ROUTE_INTEGRITY_MISMATCH
                  </span>
                </div>
              </div>
            </div>
            {/* Route Continuity Vector */}
            <div className="w-full max-w-md my-4">
              <svg className="w-full h-7 text-slate-300" fill="none" viewBox="0 0 420 28" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <line stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" x1="10" x2="150" y1="14" y2="14" />
                {" "}
                <rect fill="#0b4a34" height="12" rx="3" width="12" x="150" y="8" />
                {" "}
                <line stroke="currentColor" strokeWidth="1.5" x1="162" x2="198" y1="14" y2="14" />
                {" "}
                <circle cx="210" cy="14" fill="#fee2e2" r="9" />
                {" "}
                <path d="M206 10L214 18M214 10L206 18" stroke="#dc2626" strokeLinecap="round" strokeWidth="1.75" />
                {" "}
                <line stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" x1="222" x2="258" y1="14" y2="14" />
                {" "}
                <rect fill="#00a88f" height="12" rx="3" width="12" x="258" y="8" />
                {" "}
                <line stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" x1="270" x2="410" y1="14" y2="14" />
                {" "}
              </svg>
            </div>
            {/* Headline & Copy */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b4a34] tracking-tight max-w-3xl mt-2 mb-3">
              {" This page couldn’t be verified. "}
            </h1>
            <p className="font-body text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              {" Either it moved, or it never existed — and we don’t vouch for things that don’t exist. Let’s get you somewhere real. "}
            </p>
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-2xl mb-12">
              {/* Return to Homepage (Pine Green) */}
              <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0b4a34] text-white font-semibold text-sm shadow-sm hover:bg-[#083626] transition-all" data-path="home" href="/">
                <span className="material-symbols-outlined text-[18px]">
                  home
                </span>
                <span>
                  Return to Homepage
                </span>
              </Link>
              {/* Explore Services (White with Border) */}
              <Link className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:border-[#00a88f] hover:text-[#0b4a34] transition-all shadow-xs" data-path="services" href="/services/">
                <span className="material-symbols-outlined text-[18px] text-[#00a88f]">
                  grid_view
                </span>
                <span>
                  Explore Services
                </span>
              </Link>
              {/* Verify a Document (Emerald / Teal Accent) */}
              <Link className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#00a88f] text-white font-semibold text-sm hover:bg-[#00917c] transition-all shadow-xs" data-path="verify-document" href="/verify/">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span>
                  Verify a Document
                </span>
              </Link>
              {/* Contact RCFI (Ghost) */}
              <Link className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent text-slate-600 font-medium text-sm hover:bg-slate-200/50 hover:text-slate-900 transition-colors" data-path="contact" href="/contact/">
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                <span>
                  Contact RCFI
                </span>
              </Link>
            </div>
            {/* Directory Sub-route Cards (3 clean white cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left">
              {/* Card 1: Document Validator */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00a88f]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#e6f8f5] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#00a88f] text-[24px]">
                      verified_user
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-bold text-[#0b4a34] mb-2">
                    Verify an Authentic Document
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {" Test certificate validity or e-Seal integrity on our free public cryptographic validator. "}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <Link className="text-sm font-semibold text-[#00a88f] hover:text-[#0b4a34] flex items-center gap-1 group" data-path="verify-document" href="/verify/">
                    {" Open Validator "}
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    CRL / OCSP
                  </span>
                </div>
              </div>
              {/* Card 2: Sovereign Platforms */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00a88f]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#0b4a34] text-[24px]">
                      hub
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-bold text-[#0b4a34] mb-2">
                    Explore Sovereign Platforms
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {" CertySign digital signing, Elano governance, and Prezio workflow compliance automation. "}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <Link className="text-sm font-semibold text-[#00a88f] hover:text-[#0b4a34] flex items-center gap-1 group" data-path="products" href="/products/certysign/">
                    {" View Product Suite "}
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    eIDAS Level 3
                  </span>
                </div>
              </div>
              {/* Card 3: Technical Architecture */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00a88f]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#e6f8f5] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#00a88f] text-[24px]">
                      support_agent
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-bold text-[#0b4a34] mb-2">
                    Speak with Engineers
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {" Reach out to our technical architecture desk in Nairobi for enterprise PKI and HSM support. "}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <Link className="text-sm font-semibold text-[#00a88f] hover:text-[#0b4a34] flex items-center gap-1 group" data-path="contact" href="/contact/">
                    {" Architecture Support "}
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Nairobi Tier-III
                  </span>
                </div>
              </div>
            </div>
            {/* Small Print Banner */}
            <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="material-symbols-outlined text-[#00a88f] text-[18px]">
                verified_user
              </span>
              <span className="font-sans text-xs font-semibold text-slate-700">
                Every other page on this site checks out. We checked.
              </span>
              <span className="text-slate-300 hidden sm:inline">
                •
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                SHA-256 Validated Node Network
              </span>
            </div>
          </div>
        </div>
      </main>
      {/* CORPORATE 5-COLUMN FOOTER (Deep Forest Pine #041f15 / #00281b) */}
      <footer className="w-full bg-[#041f15] text-white/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1: RCFI Identity & Licensing */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img alt="RCFI Logo" className="h-9 w-auto brightness-0 invert object-contain" src="/brand/rcfi-mark.svg" />
              </div>
              <p className="font-body text-xs text-white/70 leading-relaxed">
                {" Research Center for Digital Innovation. Kenya’s accredited root anchor and electronic certification service provider. "}
              </p>
              <div className="flex flex-col gap-1 text-xs font-mono text-white/60 mt-1">
                <span className="text-[#6cf8bb] font-semibold">
                  CAK License: TL/E-CSP 00014
                </span>
                <span>
                  ISO/IEC 27001:2022 Certified
                </span>
                <span>
                  Kenya DPA Registered #0012
                </span>
              </div>
            </div>
            {/* Column 2: Practices & Services */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-2.5 font-body text-xs text-white/70">
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/">
                    {"PKI & Sovereign Identity"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/">
                    Enterprise Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/">
                    Digital Health Architecture
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/">
                    {"AI & Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/services/">
                    {"Cloud & Sovereign Infra"}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3: Sovereign Products */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                Sovereign Products
              </span>
              <ul className="flex flex-col gap-2.5 font-body text-xs text-white/70">
                <li>
                  <Link className="hover:text-white transition-colors" href="/products/certysign/">
                    {"CertySign (eIDAS & CAK)"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/products/certysign/">
                    Elano Identity Ledger
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/products/certysign/">
                    Prezio Audit Gateway
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/products/certysign/">
                    {"National Root CRL & OCSP"}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 4: Academy & Programs */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                {"Academy & Programs"}
              </span>
              <ul className="flex flex-col gap-2.5 font-body text-xs text-white/70">
                <li>
                  <Link className="hover:text-white transition-colors" href="/academy/">
                    Executive Cyber Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/academy/">
                    Digital Innovation Fellowship
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/academy/">
                    Applied Cryptography Certs
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/academy/">
                    Technical Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 5: Trust Center & HQ */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                {"Trust Center & HQ"}
              </span>
              <div className="font-body text-xs flex flex-col gap-1 text-white/70 mb-2">
                <span className="font-semibold text-white">
                  RCFI Kenya HQ
                </span>
                <span>
                  5th Floor, Hifadhi House
                </span>
                <span>
                  Along ICD Road, Nairobi, Kenya
                </span>
                <span className="mt-1">
                  +254 (0) 20 283 9200
                </span>
                <span>
                  info@rcfi.co.ke
                </span>
              </div>
              <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                <li>
                  <Link className="hover:text-white transition-colors" href="/trust/">
                    {"Compliance & Accreditations"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/verify/">
                    Real-time Signature Verifier
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/privacy/">
                    Data Protection Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
            <p>
              © 2025 Research Center for Digital Innovation (RCFI Kenya). All Sovereign Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link className="hover:text-white transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-white transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-white transition-colors" href="/trust/">
                CPS
              </Link>
              <Link className="hover:text-white transition-colors" href="/trust/">
                Root CA Certificate
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
