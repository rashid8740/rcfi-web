import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/products-certysign/page.css";
import "@/styles/pages/products-certysign/late.css";

export const metadata: Metadata = { title: "CertySign — Digital Signatures, Certificates & Verification | RCFI" };

export default function ProductsCertysignPage() {
  return (
    <div className="rcfi-products-certysign" style={{ display: "contents" }}>
      {/* 1. HEADER & UTILITY BAR */}
      <header className="fixed top-0 w-full z-50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
        {/* Pine Utility Bar (#0b4a34) */}
        <div className="w-full bg-[#0b4a34] text-on-primary text-[11px] font-medium h-10 px-4 sm:px-8 border-b border-secondary/20">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <span className="flex items-center gap-1.5 text-secondary-fixed">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                {" ISO 27001 Certified "}
              </span>
              <span className="text-white/40 hidden sm:inline">
                |
              </span>
              <span className="flex items-center gap-1.5 text-on-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" CAK Licensed ECSP (TL/E-CSP 00014) "}
              </span>
              <span className="text-white/40 hidden sm:inline">
                |
              </span>
              <span className="flex items-center gap-1.5 text-on-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" Kenya DPA Compliant "}
              </span>
            </div>
            <div className="flex items-center gap-5 shrink-0 pl-3">
              <a className="hidden md:flex items-center gap-1.5 text-on-primary/90 hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                <span className="material-symbols-outlined text-[13px]">
                  phone
                </span>
                {" +254 (0) 20 283 9200 "}
              </a>
              <a className="flex items-center gap-1.5 text-on-primary hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[14px]">
                  mail
                </span>
                {" info@rcfi.co.ke "}
              </a>
            </div>
          </div>
        </div>
        {/* Clean White Navbar */}
        <div className="w-full bg-white h-20 px-4 sm:px-8 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4">
            {/* Logo */}
            <a className="flex items-center gap-2 shrink-0" data-path="home" href="#">
              <img alt="RCFI - Reprodrive Center for Innovation" className="h-8 md:h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
            </a>
            {/* Nav items */}
            <nav className="hidden xl:flex items-center gap-6 h-full">
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="home" href="/">
                Home
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="services" href="/services/">
                Services
              </Link>
              {" "}
              {/* Products with CertySign active indicator */}
              <div className="relative flex items-center h-full">
                <Link aria-current="page" className="text-primary font-bold text-sm relative h-full flex items-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" data-path="certysign" href="/products/certysign/">
                  {" Products "}
                  <span className="ml-1 text-[11px] font-semibold text-secondary px-1.5 py-0.5 bg-secondary/10 rounded">
                    CertySign
                  </span>
                </Link>
              </div>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="academy" href="/academy/">
                Academy
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="partners" href="/partners/">
                Partners
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="about" href="/about/">
                About
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="careers" href="/careers/">
                Careers
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary/5 font-semibold text-xs transition-colors" href="#live-verifier">
                <span className="material-symbols-outlined text-[15px]">
                  verified_user
                </span>
                {" Verify a Document "}
              </a>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-on-primary font-semibold text-xs md:text-sm hover:bg-primary-container transition-colors shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                {" Book a Meeting "}
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[120px] bg-surface">
        {/* 2 & 3. HERO SECTION + INTERACTIVE SIGNATURE PLAYGROUND */}
        <section className="relative w-full bg-primary text-on-primary overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-secondary/20">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_75%_25%,#006c49,transparent_70%)]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          {/* Technical Grid Overlay */}
          {" "}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {" "}
            <defs>
              {" "}
              <pattern height="40" id="hero-pattern" patternUnits="userSpaceOnUse" width="40">
                {" "}
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                {" "}
              </pattern>
              {" "}
            </defs>
            {" "}
            <rect fill="url(#hero-pattern)" height="100%" width="100%" />
            {" "}
          </svg>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
            {/* Breadcrumb / kicker */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-secondary-fixed font-semibold">
                // PRODUCTS / DIGITAL TRUST PLATFORM
              </span>
              <span className="text-white/40">
                ·
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container text-secondary-fixed text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                {" Licensed Electronic Certification Service Provider (ECSP) · KICA Cap 411A "}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] text-white">
                  {" Sign in seconds. "}
                  <br />
                  <span className="text-secondary-fixed">
                    Verify forever.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-on-primary-container max-w-xl leading-relaxed">
                  {" CertySign is Kenya’s full-stack digital signing, certification, and verification platform — every signature legally binding under Kenyan law, every document tamper-evident, every verification free and public. "}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-all shadow-lg hover:-translate-y-0.5" href="https://certysign.io" rel="noopener noreferrer" target="_blank">
                    <span>
                      Start Free at certysign.io
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-secondary-fixed/30 bg-primary-container/40 text-on-primary font-semibold text-sm hover:bg-primary-container transition-all backdrop-blur-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    <span>
                      Book a Sales Call
                    </span>
                  </a>
                </div>
                {/* Canonical Proof Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-on-primary-container">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      verified
                    </span>
                    {" KICA Cap 411A Admissible"}
                  </span>
                  <span className="text-white/30">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      shield
                    </span>
                    {" FIPS 140-2 L3 Sovereign HSM"}
                  </span>
                  <span className="text-white/30">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      gavel
                    </span>
                    {" Evidence Act §106B"}
                  </span>
                </div>
              </div>
              {/* Right Column: INTERACTIVE SIGNATURE PLAYGROUND (Live Demo) */}
              <div className="lg:col-span-6">
                <div className="bg-[#0b281d] border border-secondary/40 rounded-2xl p-4 sm:p-6 shadow-2xl relative">
                  <div className="flex items-center justify-between border-b border-secondary/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 font-mono-code text-[11px] text-secondary-fixed">
                        app.certysign.io // playground
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary/30 text-secondary-fixed font-mono-code text-[10px] font-semibold">
                      CAK TL/E-CSP 00014
                    </span>
                  </div>
                  {/* Interactive Controls */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-primary-container mb-1.5" htmlFor="signer-name-input">
                        {" Type your name to preview instant cryptographic seal: "}
                      </label>
                      <div className="relative">
                        <input className="w-full bg-primary-container/80 border border-secondary/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-secondary-fixed font-medium" id="signer-name-input" type="text" defaultValue="Dr. Grace M. Wanjiku" />
                        {" "}
                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-secondary-fixed text-[18px]">
                          draw
                        </span>
                      </div>
                    </div>
                    {/* Signature Style Toggles */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-on-primary-container">
                        Style:
                      </span>
                      <button className="style-toggle-btn active px-2.5 py-1 rounded text-xs font-medium bg-secondary text-white transition-colors" data-style="cursive" data-rcfi-onclick="setSignatureStyle('cursive', this)">
                        Cursive Script
                      </button>
                      <button className="style-toggle-btn px-2.5 py-1 rounded text-xs font-medium bg-primary-container text-on-primary-container hover:text-white transition-colors" data-style="formal" data-rcfi-onclick="setSignatureStyle('formal', this)">
                        Formal Seal
                      </button>
                      <button className="style-toggle-btn px-2.5 py-1 rounded text-xs font-medium bg-primary-container text-on-primary-container hover:text-white transition-colors" data-style="digital" data-rcfi-onclick="setSignatureStyle('digital', this)">
                        Digital ID Badge
                      </button>
                    </div>
                    {/* Document Interactive Container Mockup */}
                    <div className="bg-white rounded-xl p-4 text-on-surface shadow-inner border border-slate-200">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            description
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            Commercial_Lease_Agreement_Final.pdf
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold">
                          PAdES-B-LTA
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                        {" \"IN WITNESS WHEREOF, the undersigned authorized signatory executes this binding lease deed pursuant to the Republic of Kenya Land Registration Act & KICA Electronic Signature rules...\" "}
                      </p>
                      {/* Dynamic Signature Rendering Box */}
                      <div className="border-2 border-dashed border-emerald-500/40 bg-emerald-50/50 rounded-lg p-3 relative">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                              Digitally Signed by Signatory
                            </span>
                            <div className="text-2xl text-slate-900 font-cursive transition-all duration-200" id="signature-preview">
                              {" Dr. Grace M. Wanjiku "}
                            </div>
                            <div className="text-[10px] text-slate-600 mt-1 flex items-center gap-1.5" id="sig-meta">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                              <span>
                                Verified: Kenya National ID Card (Pass-KYC)
                              </span>
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-semibold">
                              <span className="material-symbols-outlined text-[12px]">
                                verified
                              </span>
                              {" SECURE "}
                            </span>
                            <div className="font-mono-code text-[9px] text-slate-500 mt-1" id="live-ts-code">
                              TSA: 2026-03-29 14:22:04 EAT
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* "This is what makes it LEGALLY binding" Breakdown */}
                    <div className="bg-primary/90 rounded-xl p-3 border border-secondary/30">
                      <div className="text-[11px] uppercase font-bold tracking-wide text-secondary-fixed mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          gavel
                        </span>
                        {" What makes this signature legally binding in Kenya: "}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-primary-container/70 p-2 rounded border border-secondary/20">
                          <span className="text-secondary-fixed font-semibold block">
                            1. X.509 Qualified Cert
                          </span>
                          <span className="text-white/80 text-[10px]">
                            Issued by RCFI Sovereign Root CA (Serial #8842-KE)
                          </span>
                        </div>
                        <div className="bg-primary-container/70 p-2 rounded border border-secondary/20">
                          <span className="text-secondary-fixed font-semibold block">
                            2. RFC 3161 Timestamp
                          </span>
                          <span className="text-white/80 text-[10px]">
                            Nairobi Root TSA • Indisputable second-level clock
                          </span>
                        </div>
                        <div className="bg-primary-container/70 p-2 rounded border border-secondary/20">
                          <span className="text-secondary-fixed font-semibold block">
                            3. SHA-256 Tamper Seal
                          </span>
                          <span className="text-white/80 text-[10px]">
                            Any microscopic modification breaks certificate status
                          </span>
                        </div>
                        <div className="bg-primary-container/70 p-2 rounded border border-secondary/20">
                          <span className="text-secondary-fixed font-semibold block">
                            4. Statutory Admissibility
                          </span>
                          <span className="text-white/80 text-[10px]">
                            {"Kenya Evidence Act §106B & KICA Cap 411A compliant"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Canonical Stats Bar Under Hero */}
            <div className="mt-14 pt-8 border-t border-secondary/20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-primary-container/40 border border-secondary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-code text-[10px] text-secondary-fixed uppercase tracking-wider font-semibold">
                    AUTHENTICATED SCALE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  50,000+
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Signatures verified on CertySign
                </div>
              </div>
              <div className="p-4 rounded-xl bg-primary-container/40 border border-secondary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-code text-[10px] text-secondary-fixed uppercase tracking-wider font-semibold">
                    VELOCITY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  30 sec
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Average sign time
                </div>
              </div>
              <div className="p-4 rounded-xl bg-primary-container/40 border border-secondary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-code text-[10px] text-secondary-fixed uppercase tracking-wider font-semibold">
                    ACCURACY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  99.9%
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Verification accuracy
                </div>
              </div>
              <div className="p-4 rounded-xl bg-primary-container/40 border border-secondary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-code text-[10px] text-secondary-fixed uppercase tracking-wider font-semibold">
                    AVAILABILITY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  99.95%
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Platform uptime SLA
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4. SECTION: THE NEED (SNAP - Need & Contrast) */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // THE NEED FOR SOVEREIGN TRUST
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-4">
                {" A contract that takes two weeks to sign is a deal cooling off. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {" A certificate that can’t be verified is a certificate that can be forged. Wet ink doesn’t scale, scanned signatures don’t prove anything, and “trust me” isn’t a compliance posture. "}
              </p>
            </div>
            {/* 3 Stark Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Flaw 1 vs Standard 1 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      Legacy Flaw
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      close
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    Scanned Images ≠ Legal Signatures
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Pasting a PNG of a cursive signature onto a PDF carries zero cryptographic proof. It can be easily copied, altered, and is routinely thrown out in Kenya commercial dispute courts. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    CertySign Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    KICA Cap 411A Qualified Non-Repudiation with individual cryptographic certificates.
                  </p>
                </div>
              </div>
              {/* Flaw 2 vs Standard 2 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      Jurisdictional Risk
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      dns
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    {"Offshore Cloud & Sovereign Exposure"}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Using generic US/EU electronic sign platforms routes sensitive Kenyan corporate IP, state tenders, and citizen PII outside East African jurisdiction, violating Kenya Data Protection Act standards. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    CertySign Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    100% In-Country HSM storage anchored in sovereign Kenyan infrastructure with CAK licensing.
                  </p>
                </div>
              </div>
              {/* Flaw 3 vs Standard 3 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      {"Friction & Delay"}
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      hourglass_disabled
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    Manual Verification Bottlenecks
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Verifying authenticity typically requires weeks of phone calls, physical notary appointments, registry queues, and manual stamps that can easily be duplicated on letterheads. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    CertySign Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    Instant Public Verification in 30 seconds. No login, no barrier, instant cryptographic audit log.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5. SECTION: WHAT YOU CAN DO (5 Core Capabilities & Code Snippets) */}
        <section className="w-full bg-surface-container-low py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // WHAT YOU CAN DO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-3">
                {" Engineered for high-volume enterprise and government workflows. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant">
                {" From single executive authorizations to million-document transactional APIs, CertySign gives your organization sovereign cryptographic integrity. "}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* 5 Capabilities Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Sign */}
                <div className="bg-white rounded-xl p-5 border border-outline-variant/50 shadow-sm hover:border-secondary transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[24px]">
                      draw
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface mb-1">
                    1. Sign
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Upload, sign, and send in under a minute — draw, type, or certificate-based. Single documents or bulk. Multi-party workflows with ordered signing. "}
                  </p>
                </div>
                {/* 2. Certify */}
                <div className="bg-white rounded-xl p-5 border border-outline-variant/50 shadow-sm hover:border-secondary transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[24px]">
                      workspace_premium
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface mb-1">
                    2. Certify
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" X.509 digital certificates for individuals and organizations, issued under our CAK ECSP license — the difference between an e-signature and a legally qualified one. "}
                  </p>
                </div>
                {/* 3. Timestamp */}
                <div className="bg-white rounded-xl p-5 border border-outline-variant/50 shadow-sm hover:border-secondary transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[24px]">
                      schedule
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface mb-1">
                    3. Timestamp
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" RFC 3161 trusted timestamps: independent, cryptographic proof of exactly when a document was signed, verified against sovereign atomic clocks. "}
                  </p>
                </div>
                {/* 4. Verify */}
                <div className="bg-white rounded-xl p-5 border border-outline-variant/50 shadow-sm hover:border-secondary transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[24px]">
                      search_check
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface mb-1">
                    4. Verify
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Anyone, anywhere can verify a CertySign document — no account required. Tampering shows instantly with color-coded cryptographic indicators. "}
                  </p>
                </div>
                {/* 5. Integrate (Spans 2 columns) */}
                <div className="sm:col-span-2 bg-white rounded-xl p-5 border border-outline-variant/50 shadow-sm hover:border-secondary transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">
                      api
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1">
                      5. Integrate
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {" REST APIs for signing, certification, and verification — embed trust into your own systems, from HR platforms to national registries, ERPs, and banking cores. "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Interactive Code Snippet Tabs */}
              <div className="lg:col-span-5 bg-[#05150f] rounded-2xl p-5 border border-secondary/30 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-secondary/20 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        terminal
                      </span>
                      <span className="font-mono-code text-xs text-secondary-fixed font-semibold">
                        API Quickstart
                      </span>
                    </div>
                    {/* Snippet language switcher */}
                    <div className="flex items-center gap-1">
                      <button className="api-tab active px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-secondary text-white" data-rcfi-onclick="switchApiTab('curl', this)">
                        cURL
                      </button>
                      <button className="api-tab px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-[#0b281d] text-white/70 hover:text-white" data-rcfi-onclick="switchApiTab('python', this)">
                        Python
                      </button>
                      <button className="api-tab px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-[#0b281d] text-white/70 hover:text-white" data-rcfi-onclick="switchApiTab('node', this)">
                        Node.js
                      </button>
                    </div>
                  </div>
                  {/* Code Content Previews */}
                  <div className="font-mono-code text-[11px] leading-relaxed text-emerald-200/90 overflow-x-auto py-2">
                    <div className="space-y-1" id="code-curl">
                      <span className="text-white/40">
                        # 1. Sign document with Qualified X.509 Certificate
                      </span>
                      <br />
                      <span className="text-secondary-fixed">
                        curl
                      </span>
                      {" -X POST https://api.certysign.io/v1/sign \\"}
                      <br />
                      {"   -H "}
                      <span className="text-emerald-400">
                        "Authorization: Bearer rcfi_live_key_9842"
                      </span>
                      {" \\"}
                      <br />
                      {"   -F "}
                      <span className="text-emerald-400">
                        "file=@procurement_contract_2026.pdf"
                      </span>
                      {" \\"}
                      <br />
                      {"   -F "}
                      <span className="text-emerald-400">
                        "cert_type=SOVEREIGN_QUALIFIED_X509"
                      </span>
                      {" \\"}
                      <br />
                      {"   -F "}
                      <span className="text-emerald-400">
                        "tsa_timestamp=true"
                      </span>
                    </div>
                    <div className="space-y-1 hidden" id="code-python">
                      <span className="text-white/40">
                        # Python SDK
                      </span>
                      <br />
                      <span className="text-purple-300">
                        from
                      </span>
                      {" certysign "}
                      <span className="text-purple-300">
                        import
                      </span>
                      {" CertyClient"}
                      <br />
                      <br />
                      {" client = CertyClient(api_key="}
                      <span className="text-emerald-400">
                        "rcfi_live_key_9842"
                      </span>
                      )
                      <br />
                      {" signed_doc = client.sign_document("}
                      <br />
                      {"   file_path="}
                      <span className="text-emerald-400">
                        "board_resolution_2026.pdf"
                      </span>
                      ,
                      <br />
                      {"   cak_ecsp_compliant="}
                      <span className="text-amber-300">
                        True
                      </span>
                      ,
                      <br />
                      {"   timestamp_authority="}
                      <span className="text-emerald-400">
                        "KE_ROOT_TSA"
                      </span>
                      <br />
                      {" )"}
                      <br />
                      <span className="text-purple-300">
                        print
                      </span>
                      {"(signed_doc.verification_url) "}
                    </div>
                    <div className="space-y-1 hidden" id="code-node">
                      <span className="text-white/40">
                        // Node.js / TypeScript SDK
                      </span>
                      <br />
                      <span className="text-purple-300">
                        import
                      </span>
                      {" { CertySign } "}
                      <span className="text-purple-300">
                        from
                      </span>
                      {" "}
                      <span className="text-emerald-400">
                        '@rcfi/certysign'
                      </span>
                      ;
                      <br />
                      <br />
                      <span className="text-purple-300">
                        const
                      </span>
                      {" certy = "}
                      <span className="text-purple-300">
                        new
                      </span>
                      {" CertySign({ key: process.env.CERTY_API_KEY });"}
                      <br />
                      <span className="text-purple-300">
                        const
                      </span>
                      {" receipt = "}
                      <span className="text-purple-300">
                        await
                      </span>
                      {" certy.documents.sealAndVerify({"}
                      <br />
                      {"   documentId: "}
                      <span className="text-emerald-400">
                        'DOC-KE-2026-8842-VAL'
                      </span>
                      ,
                      <br />
                      {"   requireEvidenceAct106B: "}
                      <span className="text-amber-300">
                        true
                      </span>
                      <br />
                      {" }); "}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-secondary/20 flex items-center justify-between text-xs">
                  <span className="text-white/60">
                    {"Ready in < 5 minutes"}
                  </span>
                  <a className="text-secondary-fixed hover:underline flex items-center gap-1 font-semibold" href="https://certysign.io" target="_blank">
                    {" Read API Docs "}
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6. INTERACTIVE TOOL 1: LIVE VERIFY WIDGET */}
        <section className="w-full bg-surface py-20 lg:py-24 border-b border-outline-variant/30" id="live-verifier">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-10">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // LIVE CRYPTOGRAPHIC VALIDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-3">
                {" Verify any document in real-time. "}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto">
                {" Paste a Document Verification ID or Certificate Hash to query the live RCFI Root CA and OCSP responder. "}
              </p>
            </div>
            {/* Verification Console Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/70 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-slate-400 text-[20px]">
                    qr_code_scanner
                  </span>
                  {" "}
                  <input className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-sm font-mono-code focus:outline-none focus:border-secondary text-slate-900" id="verify-input" placeholder="e.g. DOC-KE-2026-8842-VAL or CERT-X509-RCFI-411A" type="text" defaultValue="DOC-KE-2026-8842-VAL" />
                </div>
                <button className="px-6 py-3 bg-primary hover:bg-primary-container text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2" data-rcfi-onclick="runDocumentVerification()">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  {" Verify Document "}
                </button>
              </div>
              {/* Sample Test ID Pills */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-xs text-on-surface-variant">
                  Try sample IDs:
                </span>
                <button className="text-xs font-mono-code px-2 py-1 bg-surface-container rounded hover:bg-surface-container-high text-secondary font-medium transition-colors" data-rcfi-onclick="setVerifySample('DOC-KE-2026-8842-VAL')">
                  DOC-KE-2026-8842-VAL
                </button>
                <button className="text-xs font-mono-code px-2 py-1 bg-surface-container rounded hover:bg-surface-container-high text-secondary font-medium transition-colors" data-rcfi-onclick="setVerifySample('CERT-X509-RCFI-411A')">
                  CERT-X509-RCFI-411A
                </button>
                <button className="text-xs font-mono-code px-2 py-1 bg-surface-container rounded hover:bg-surface-container-high text-secondary font-medium transition-colors" data-rcfi-onclick="setVerifySample('TAMPER-TEST-FAIL-09')">
                  TAMPER-TEST-FAIL-09
                </button>
              </div>
              {/* Verification Results Display */}
              <div className="mt-6 border-t border-slate-100 pt-6" id="verify-result-container">
                <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-300" id="verify-card-success">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          check
                        </span>
                      </span>
                      <div>
                        <span className="text-sm font-bold text-emerald-900 block" id="result-status-title">
                          DOCUMENT CRYPTOGRAPHICALLY VALID
                        </span>
                        <span className="text-[11px] text-emerald-700" id="result-status-subtitle">
                          RCFI Sovereign Root CA · OCSP Status: Good · CRL Checked
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-900 font-mono-code text-xs font-bold" id="result-license-badge">
                      CAK TL/E-CSP 00014
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white/80 p-3.5 rounded-lg border border-emerald-200">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">
                        Signer Identity
                      </span>
                      <span className="text-slate-900 font-semibold" id="result-signer">
                        Dr. Grace M. Wanjiku (Advocate of High Court)
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">
                        Trusted RFC 3161 Timestamp
                      </span>
                      <span className="text-slate-900 font-mono-code" id="result-timestamp">
                        2026-03-29 14:22:04 EAT (Nairobi Root TSA)
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">
                        Legal Admissibility
                      </span>
                      <span className="text-slate-900 font-semibold" id="result-statute">
                        {"KICA Cap 411A & Evidence Act §106B"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">
                        SHA-256 Digest Integrity
                      </span>
                      <span className="text-emerald-700 font-mono-code text-[11px] truncate block" id="result-hash">
                        e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 7. INTERACTIVE TOOL 2: ROI MINI-CALCULATOR */}
        <section className="w-full bg-surface-container-low py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // MEASURABLE IMPACT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-3">
                {" Calculate your organization’s time and cost savings. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant">
                {" See how much paper, courier friction, and administrative chasing CertySign eliminates for your operations. "}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Box */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm space-y-6">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-docs">
                      Documents signed per month
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-docs">
                      250
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-docs" max="5000" min="50" data-rcfi-oninput="calculateROI()" step="50" type="range" defaultValue="250" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      50 docs/mo
                    </span>
                    <span>
                      5,000 docs/mo
                    </span>
                  </div>
                </div>
                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-days">
                      Current turnaround time
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-days">
                      5 days
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-days" max="14" min="2" data-rcfi-oninput="calculateROI()" step="1" type="range" defaultValue="5" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      2 days
                    </span>
                    <span>
                      14 days
                    </span>
                  </div>
                </div>
                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-hours">
                      Staff hours chasing signatures / doc
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-hours">
                      2.0 hrs
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-hours" max="5" min="0.5" data-rcfi-oninput="calculateROI()" step="0.5" type="range" defaultValue="2.0" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      30 mins
                    </span>
                    <span>
                      5.0 hrs
                    </span>
                  </div>
                </div>
              </div>
              {/* Dynamic Output Card */}
              <div className="lg:col-span-6 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 border border-secondary/30 shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />
                <span className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold block mb-4">
                  // ESTIMATED ANNUAL SAVINGS
                </span>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-primary-container/60 border border-secondary/20">
                      <span className="text-xs text-on-primary-container block mb-1">
                        Productive Hours Saved
                      </span>
                      <span className="text-3xl font-extrabold text-white" id="stat-hours-saved">
                        6,000 hrs
                      </span>
                      <span className="text-[11px] text-secondary-fixed block mt-1">
                        Freed per year
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-primary-container/60 border border-secondary/20">
                      <span className="text-xs text-on-primary-container block mb-1">
                        Turnaround Velocity
                      </span>
                      <span className="text-3xl font-extrabold text-white" id="stat-speed-up">
                        From 5 days
                      </span>
                      <span className="text-[11px] text-secondary-fixed block mt-1">
                        To 30 seconds
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary-container/80 border border-secondary/40">
                    <span className="text-xs text-on-primary-container block mb-1">
                      Est. Administrative Cost Reduction (KES)
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-secondary-fixed" id="stat-kes-saved">
                      KES 3,600,000
                    </div>
                    <span className="text-[11px] text-white/70 block mt-1">
                      Calculated at standard KES 600/hr admin rate + paper/courier overhead
                    </span>
                  </div>
                  <a className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-colors shadow-md" href="https://certysign.io" target="_blank">
                    <span>
                      Start Saving with CertySign Free
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 8. SECTION: BUILT FOR EVERY SECTOR */}
        <section className="w-full bg-surface py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // BUILT FOR REGULATED ENTERPRISES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-3">
                {" Trusted across every regulated industry in East Africa. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant">
                {" From banking and healthcare to government gazettes and supreme court submissions, CertySign handles the most sensitive legal artifacts. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sector 1 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    account_balance
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Government Contracts
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Tenders, official gazette filings, procurement awards, and inter-agency memorandums of understanding with tamper-evident seals. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  Public Procurement Regs
                </span>
              </div>
              {/* Sector 2 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    gavel
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Court Filings
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Litigation affidavits, evidentiary bundles, and e-filing submissions with statutory Evidence Act Section 106B certificates. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  Kenya Judiciary e-Filing
                </span>
              </div>
              {/* Sector 3 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    payments
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  {"Loan Agreements & KYC"}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Instant credit facility disbursements, mobile banking verifications, and credit reference bureau mandates executed in seconds. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  CBK Prudential Guidelines
                </span>
              </div>
              {/* Sector 4 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    badge
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Employment Contracts
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Remote staff onboarding, non-disclosure agreements, severance deeds, and executive stock option sign-offs. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  Kenya Employment Act
                </span>
              </div>
              {/* Sector 5 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    medical_services
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Health Certification
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" EMR record exports, clinical trial patient consents, lab diagnostics certificates, and doctor prescription cryptographic seals. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  KMPDC Medical Seal
                </span>
              </div>
              {/* Sector 6 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    school
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Academic Credentials
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Degree awards, official university transcripts, professional accreditation seals, and verifiable diplomas impervious to forgery. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  CUE Accredited
                </span>
              </div>
              {/* Sector 7 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    inventory_2
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  {"Procurement & Supply Chain"}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Purchase orders, bill of ladings, delivery verification notes, and multi-tier vendor supplier sign-offs. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  Audit Ready
                </span>
              </div>
              {/* Sector 8 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    real_estate_agent
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  {"Real Estate & Leases"}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" Commercial tenancies, Sectional Properties transfers, title deed authorizations, and conveyancing escrow signatures. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  Ardhisasa Interop
                </span>
              </div>
              {/* Sector 9 */}
              <div className="bg-white rounded-xl p-6 border border-outline-variant/60 shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    public
                  </span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">
                  Cross-Border Agreements
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {" East African Community cross-border trade pacts, port shipping manifests, customs clearances, and international arbitration forms. "}
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono-code text-primary font-semibold">
                  {"eIDAS & EAC Aligned"}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* 9. SECTION: REGULATORY COMPLIANCE & SOVEREIGNTY */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                {"// COMPLIANCE & LEGAL ACCREDITATION"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-2 mb-3">
                {" Compliant. Accredited. Sovereign. "}
              </h2>
              <p className="text-base text-on-surface-variant">
                {" Built from day one to withstand court scrutiny, statutory audits, and sovereign data laws. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      vpn_key
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono-code text-[11px] font-bold uppercase">
                    TL/E-CSP 00014
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-2 mb-2">
                    CAK-Licensed ECSP
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Formally licensed by the Communications Authority of Kenya as an Electronic Certification Service Provider under the KICA Cap 411A. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {" Full Legal Non-Repudiation "}
                </div>
              </div>
              {/* Pillar 2 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      policy
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono-code text-[11px] font-bold uppercase">
                    ODPC Registered
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-2 mb-2">
                    Kenya DPA 2019
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Full compliance with Kenya Data Protection Act 2019 requirements for data controller/processor residency and encrypted audit trails. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {" Data Protection Safeguards "}
                </div>
              </div>
              {/* Pillar 3 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      verified_user
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono-code text-[11px] font-bold uppercase">
                    ISO/IEC 27001
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-2 mb-2">
                    ISO 27001:2022
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Externally audited Information Security Management System (ISMS) certifying end-to-end cryptographic infrastructure resilience. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {" Audited Security Controls "}
                </div>
              </div>
              {/* Pillar 4 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      lock
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono-code text-[11px] font-bold uppercase">
                    FIPS 140-2 Level 3
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-2 mb-2">
                    Sovereign HSM Keys
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {" Master root keys never leave physical Hardware Security Modules hosted in Tier-III facilities located directly on Kenyan territory. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {" In-Country Cryptography "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 10. CLOSING CTA SECTION */}
        <section className="w-full bg-primary text-on-primary py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#4edea3,transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-container font-mono-code text-xs text-secondary-fixed uppercase tracking-wider font-bold mb-4">
              <span className="material-symbols-outlined text-[15px]">
                verified
              </span>
              {" // YOUR NEXT SIGNATURE "}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
              {" Your next signature could be your last slow one. "}
            </h2>
            <p className="text-base sm:text-lg text-on-primary-container max-w-xl mt-4 mb-8 leading-relaxed">
              {" Join thousands of Kenyan enterprises, law firms, and government agencies eliminating document friction with accredited sovereign PKI. "}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-bold text-base hover:bg-secondary-fixed transition-all shadow-xl hover:-translate-y-0.5" href="https://certysign.io" target="_blank">
                <span>
                  Get Started Free
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base transition-all backdrop-blur-sm border border-white/20" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                <span>
                  Talk to Sales
                </span>
              </a>
            </div>
            <p className="text-xs text-on-primary-container/70 mt-6">
              {" Free trial · No credit card required · Under 60 seconds setup "}
            </p>
          </div>
        </section>
      </main>
      {/* 11. FOOTER */}
      <footer className="w-full bg-[#051a11] text-on-primary pt-16 pb-12 border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-secondary/20">
            {/* Col 1: Brand & Overview */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  RCFI
                </span>
                <span className="text-xs text-on-primary-container">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
              <p className="text-xs text-on-primary-container leading-relaxed">
                {" Pioneering trusted electronic certification services, verifiable cryptographic trust anchors, and enterprise digital solutions across East Africa. "}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-white" href="#" title="Global Web">
                  <span className="material-symbols-outlined text-[16px]">
                    public
                  </span>
                </a>
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-white" href="#" title="Network">
                  <span className="material-symbols-outlined text-[16px]">
                    share
                  </span>
                </a>
                <a className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary transition-colors text-white" href="#" title="Support">
                  <span className="material-symbols-outlined text-[16px]">
                    forum
                  </span>
                </a>
              </div>
            </div>
            {/* Col 2: Practices & Services */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                {"// PRACTICES & SERVICES"}
              </h4>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" href="/services/digital-trust-pki/">
                {"Digital Trust & PKI"}
              </Link>
              <a className="text-xs text-on-primary-container hover:text-white transition-colors" href="#">
                {"Identity & Authentication"}
              </a>
              <a className="text-xs text-on-primary-container hover:text-white transition-colors" href="#">
                {"Electronic Seal & Signing"}
              </a>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" href="/services/cybersecurity-assurance/">
                {"Compliance & Security Auditing"}
              </Link>
              <a className="text-xs text-on-primary-container hover:text-white transition-colors" href="#">
                Sovereign Key Escrow
              </a>
            </div>
            {/* Col 3: Products */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                // PRODUCTS
              </h4>
              <Link className="text-xs text-white font-semibold flex items-center gap-1.5" data-path="certysign" href="/products/certysign/">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" CertySign "}
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
            </div>
            {/* Col 4: Academy & Company */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                {"// ACADEMY & COMPANY"}
              </h4>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="about" href="/about/">
                About RCFI
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
              <a className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </div>
            {/* Col 5: Compliance & Legal */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                {"// COMPLIANCE & LEGAL"}
              </h4>
              <p className="text-xs text-on-primary-container flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[16px] shrink-0 text-secondary-fixed">
                  location_on
                </span>
                {" 5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya "}
              </p>
              <a className="text-xs text-on-primary-container hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="tel:+254202839200">
                <span className="material-symbols-outlined text-[16px] shrink-0 text-secondary-fixed">
                  call
                </span>
                {" +254 (0) 20 283 9200 "}
              </a>
              <a className="text-xs text-on-primary-container hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="mailto:info@rcfi.co.ke">
                <span className="material-symbols-outlined text-[16px] shrink-0 text-secondary-fixed">
                  mail
                </span>
                {" info@rcfi.co.ke "}
              </a>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-primary-container font-mono-code text-[10px] text-secondary-fixed font-semibold">
                  ISO 27001 Certified
                </span>
                <span className="px-2 py-0.5 rounded bg-primary-container font-mono-code text-[10px] text-secondary-fixed font-semibold">
                  CAK (TL/E-CSP 00014)
                </span>
                <span className="px-2 py-0.5 rounded bg-primary-container font-mono-code text-[10px] text-secondary-fixed font-semibold">
                  Kenya DPA
                </span>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-primary-container">
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
              <p>
                © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
              </p>
              <span className="hidden md:inline text-white/30">
                •
              </span>
              <p className="text-white/60">
                Hifadhi House, Along ICD Road, Nairobi, Kenya
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Link className="hover:text-white transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-white transition-colors" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-white transition-colors" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* INTERACTIVE LOGIC SCRIPT (Playground, Live Verifier & ROI Calculator) */}
      {" "}
      <PageScripts scripts={scripts} />
    </div>
  );
}
