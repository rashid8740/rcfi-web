import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/academy/page.css";

export const metadata: Metadata = { title: "RCFI Academy" };

export default function AcademyPage() {
  return (
    <div className="rcfi-academy" style={{ display: "contents" }}>
      {/* ===================================================================== */}
      {" "}
      {/* 1. HEADER (Official RCFI Top Bar + Sticky Brand Navbar) */}
      {" "}
      {/* ===================================================================== */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
        {/* Top Green Compliance Bar */}
        <div className="bg-pine-900 text-white text-xs py-2 px-4 sm:px-8 border-b border-pine-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6 text-[12px] tracking-tight">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-bright animate-pulse" />
                {" ISO 27001:2022 Certified "}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-emerald-soft/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-tint" />
                {" CAK Licensed ECSP (TL/E-CSP 00014) "}
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-emerald-soft/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-tint" />
                {" Kenya DPA 2019 Compliant "}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[12px]">
              <a className="text-emerald-tint hover:text-white transition-colors hidden sm:inline" href="mailto:academy@rcfi.co.ke">
                academy@rcfi.co.ke
              </a>
              <span className="text-pine-700 hidden sm:inline">
                |
              </span>
              <Link className="text-white hover:text-emerald-glow flex items-center gap-1 font-semibold transition-colors" href="/verify/">
                <span className="material-symbols-outlined text-[15px] text-emerald-bright">
                  verified
                </span>
                <span className="">
                  /verify/
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* White Sticky Navigation */}
        <div className="bg-white/95 backdrop-blur-md h-20 px-4 sm:px-8 border-b border-slate-100 transition-all">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center gap-3" href="/">
              <img alt="RCFI Mosaic tile logo Reprodrive Center for Innovation" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-pine-900 tracking-tight leading-none">
                  RCFI
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5 hidden sm:block">
                  {" Reprodrive Center for Innovation "}
                </span>
              </div>
            </Link>
            {/* Desktop Navigation Links with Academy Active */}
            <nav className="hidden xl:flex items-center gap-1.5 text-[14px]">
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/">
                Home
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/services/">
                Services
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/products/certysign/">
                Products
              </Link>
              {" "}
              <Link className="px-3.5 py-1.5 bg-pine-900 text-white font-bold rounded-lg shadow-sm" href="/academy/">
                Academy
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/ecosystem/">
                Ecosystem
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/trust/">
                Trust Center
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/about/">
                About
              </Link>
              {" "}
              <Link className="px-3 py-1.5 text-slate-600 hover:text-pine-900 font-medium transition-colors rounded-md hover:bg-slate-50" href="/contact/">
                Contact
              </Link>
            </nav>
            {/* Right Quick Actions */}
            <div className="flex items-center gap-3">
              <Link className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-pine-900 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors" href="/verify/">
                {" Verify a Document "}
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 bg-emerald-brand text-white rounded-lg text-xs font-bold hover:bg-pine-900 transition-all shadow-sm" href="#admissions-section">
                {" Book an Advisory Call "}
              </a>
              <div className="w-9 h-9 rounded-full bg-pine-900 text-white flex items-center justify-center text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===================================================================== */}
      {" "}
      {/* 2. HERO SECTION: DEEP PINE GREEN & TELEMETRY TERMINAL */}
      {" "}
      {/* ===================================================================== */}
      <main className="pt-[116px]">
        <section className="w-full bg-gradient-to-b from-pine-900 via-pine-850 to-pine-900 text-white py-16 md:py-24 px-4 sm:px-8 relative overflow-hidden border-b border-pine-800">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-bright/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 right-0 w-96 h-96 bg-emerald-glow/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pine-800/80 border border-emerald-tint/30 text-emerald-tint text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-bright animate-ping" />
                <span className="">
                  {"Professional & Practitioner Digital Academy"}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] mb-6">
                {" Learn from the people who "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-glow to-emerald-tint underline decoration-emerald-bright/40 decoration-4 underline-offset-8">
                  run it in production.
                </span>
              </h1>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
                {" Most courses teach from slides. Ours teach from systems we operate: a licensed certification authority, national health certification infrastructure, and platforms serving institutions across Kenya. RCFI Academy exists to grow the talent Africa's digital decade demands. "}
              </p>
              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-brand hover:bg-emerald-bright hover:text-pine-950 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-glow/20 transform hover:-translate-y-0.5" href="#flagship-programme">
                  <span className="">
                    Find Your Programme
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_downward
                  </span>
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-emerald-glow font-bold text-sm rounded-xl transition-all" href="#admissions-section">
                  <span className="material-symbols-outlined text-[18px] text-emerald-tint">
                    support_agent
                  </span>
                  <span className="">
                    Talk to the Academy Team
                  </span>
                </a>
              </div>
              {/* Bottom Stat Strip */}
              <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/10 w-full max-w-xl">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white block">
                    100%
                  </span>
                  <span className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                    Live Lab Workflows
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-glow block">
                    0
                  </span>
                  <span className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                    Simulated Theories
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white block">
                    CAK
                  </span>
                  <span className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1 block">
                    Accredited Context
                  </span>
                </div>
              </div>
            </div>
            {/* Right Hero Visuals: Cryptographic Telemetry Terminal + Photo Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Terminal Sandbox Preview */}
              <div className="bg-pine-950 border border-emerald-tint/25 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-bright/90 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-tint font-mono bg-pine-900/90 px-3 py-1 rounded-md border border-white/5">
                    <span className="material-symbols-outlined text-[14px]">
                      terminal
                    </span>
                    <span className="">
                      ecsp.rcfi.ke:telemetry
                    </span>
                  </div>
                </div>
                {/* Terminal Stream */}
                <div className="font-mono text-xs space-y-2.5 text-slate-200">
                  <div className="flex items-center justify-between text-emerald-glow">
                    <span className="font-semibold">
                      $ GET /fhir/R4/Patient/$everything
                    </span>
                    <span className="bg-emerald-brand/40 text-emerald-tint text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-glow/30">
                      200 OK
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-mono">
                    // Digital Health Act 2023 Cryptographic Verifier
                  </p>
                  <div className="bg-pine-900/80 border border-white/5 rounded-lg p-3 space-y-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">
                        Payload Signature:
                      </span>
                      <span className="text-emerald-tint font-semibold">
                        RSA-PSS 4096-bit Validated
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">
                        Trust Root:
                      </span>
                      <span className="text-emerald-tint font-semibold">
                        RCFI National ECSP Root CA 01
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">
                        Terminology Binding:
                      </span>
                      <span className="text-emerald-tint font-semibold">
                        SNOMED-CT 2024-03 Edition
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-[11px] text-emerald-tint">
                    <span className="material-symbols-outlined text-[16px] text-emerald-glow">
                      verified
                    </span>
                    <span className="">
                      Hardware Security Module (HSM) FIPS 140-3 L3 OK
                    </span>
                  </div>
                </div>
              </div>
              {/* Photo Card: Production Reality */}
              <div className="bg-white text-on-surface rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-slate-100">
                <img alt="Modern high-tech engineering training lab in Nairobi" className="w-20 h-20 rounded-xl object-cover flex-shrink-0 shadow-inner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_UnihqGzhcfpDTQSpwnO3ei7hhHn6BdPP7jrAfEjtqiSOZpzHFbHmXjucdt8XwkExjPkdckm3dzQQgQqONdxbmaNnsuEgsbwLBXDZUpSzlJo9yLgEi44xz6X6kgAZmekczOzlgTC8PLbJovoBF2joTTLGnAEMxF19f2d9hRj_B1Nd3SCdawWRgflOb8X1PUgCW3ks_RdpSxdR5XQCXLQcnxFfVEMtvWoXFhnQghtcwyG7WwjBpk2k" />
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-brand block">
                    Production Reality
                  </span>
                  <p className="text-sm font-bold text-pine-900 mt-0.5 leading-snug">
                    {" Taught by active PKI cryptographers & Health Data Architects. "}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand" />
                    <span className="">
                      Nairobi Physical Hardware Labs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================================================================== */}
        {" "}
        {/* 3. WHY AN ACADEMY FROM RCFI? (2x2 Differentiator Cards) */}
        {" "}
        {/* ===================================================================== */}
        <section className="w-full bg-pine-950 text-white py-20 px-4 sm:px-8 border-b border-pine-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Section Intro (5 cols) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pine-900 border border-emerald-tint/20 text-emerald-tint text-xs font-semibold mb-4">
                <span className="material-symbols-outlined text-[15px]">
                  domain_verification
                </span>
                <span className="">
                  The Critical Gap in African Tech
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                {" Why an Academy from RCFI? "}
              </h2>
              <div className="w-12 h-1 bg-emerald-bright rounded mb-6" />
              <p className="text-slate-300 text-base leading-relaxed mb-4 font-normal">
                {" Because the region's hardest digital shortage isn't generic developers — it's practitioners who understand trust, standards, and regulatory architecture: FHIR engineers, PKI operators, health data governors, and security assurance leads. "}
              </p>
              <p className="text-emerald-tint font-bold text-sm">
                {" Nobody else here teaches this at production depth. We operate it every single day. "}
              </p>
            </div>
            {/* 4 Bento Cards (2x2 Grid, 7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Standards Architecture */}
              <div className="bg-pine-900/90 border border-white/10 hover:border-emerald-glow/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-brand/30 border border-emerald-bright/30 text-emerald-glow flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      hub
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Standards Architecture
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {" Standard bootcamps train consumer web stacks. We train national-scale interoperability: OpenHIE, HL7 FHIR Implementation Guides, and enterprise health message routing. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-tint flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-emerald-glow">
                    check_circle
                  </span>
                  <span className="">
                    {"HL7 FHIR R4 & OpenHIE"}
                  </span>
                </div>
              </div>
              {/* Card 2: Production Trust & PKI */}
              <div className="bg-pine-900/90 border border-white/10 hover:border-emerald-glow/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-brand/30 border border-emerald-bright/30 text-emerald-glow flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      shield_lock
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {"Production Trust & PKI"}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {" Learn cryptography not from textbooks, but by interfacing directly with hardware security modules (HSMs) and practicing real key ceremonies inside an operational ECSP. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-tint flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-emerald-glow">
                    check_circle
                  </span>
                  <span className="">
                    Root CA Key Ceremonies
                  </span>
                </div>
              </div>
              {/* Card 3: Legislative Compliance */}
              <div className="bg-pine-900/90 border border-white/10 hover:border-emerald-glow/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-brand/30 border border-emerald-bright/30 text-emerald-glow flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      gavel
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Legislative Compliance
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {" Direct alignment with Kenya's Digital Health Act 2023, Data Protection Act 2019, and the WHO Global Digital Health Certification Network (GDHCN). "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-tint flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-emerald-glow">
                    check_circle
                  </span>
                  <span className="">
                    Statutory Audit Readiness
                  </span>
                </div>
              </div>
              {/* Card 4: Defended Capstones */}
              <div className="bg-pine-900/90 border border-white/10 hover:border-emerald-glow/50 rounded-2xl p-6 flex flex-col justify-between transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-brand/30 border border-emerald-bright/30 text-emerald-glow flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      terminal
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Defended Capstones
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {" No multiple-choice exams. Participants engineer functional components and defend their architecture in live sessions before panels of production engineers. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-tint flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-emerald-glow">
                    check_circle
                  </span>
                  <span className="">
                    Live Panel Defense
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================================================================== */}
        {" "}
        {/* 4. FLAGSHIP PROGRAMME SHOWCASE (Health Interoperability & Governance) */}
        {" "}
        {/* ===================================================================== */}
        <section className="w-full bg-surface-muted/60 py-20 px-4 sm:px-8 border-b border-slate-200" id="flagship-programme">
          <div className="max-w-7xl mx-auto">
            {/* Header Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-soft text-pine-900 font-bold text-xs mb-3">
                  <span className="material-symbols-outlined text-[15px]">
                    stars
                  </span>
                  <span className="">
                    Flagship Practitioner Programme
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-pine-900 tracking-tight leading-tight">
                  <Link href="/academy/digital-health-interoperability/">
                    {" Become the person who makes health systems talk. "}
                  </Link>
                </h2>
                <p className="text-slate-600 text-base mt-3 leading-relaxed">
                  {" The region’s first practitioner programme in health interoperability and governance — built on HL7 FHIR and OpenHIE architecture, taught through Kenya’s live regulatory reality: Digital Health Act 2023 and national certification. "}
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex-shrink-0">
                <span className="text-[11px] font-bold text-emerald-brand uppercase tracking-wider block">
                  {"Format & Commitment"}
                </span>
                <span className="text-xl font-extrabold text-pine-900 block mt-0.5">
                  12 Weeks • Hybrid Studio
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Nairobi Hardware Labs + Live Labs
                </span>
              </div>
            </div>
            {/* 4-Module Progression */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Module 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-pine-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-brand">
                      Weeks 1-3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pine-900 mb-2">
                    FHIR in Practice
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Core resources (Patient, Encounter, Observation, Condition), custom profiling, implementation guides, and hands-on integration against sandbox FHIR servers. "}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl font-mono text-[11px] text-pine-900">
                  <span className="font-bold text-emerald-brand">
                    Lab:
                  </span>
                  {" FHIR RESTful CRUD & Bundle Profiling "}
                </div>
              </div>
              {/* Module 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-pine-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-brand">
                      Weeks 4-6
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pine-900 mb-2">
                    OpenHIE Architecture
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Constructing national blueprints: Client Registry (CR), Facility Registry (FR), Shared Health Record (SHR), and clinical terminologies (ICD-11, SNOMED CT, LOINC). "}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl font-mono text-[11px] text-pine-900">
                  <span className="font-bold text-emerald-brand">
                    Lab:
                  </span>
                  {" Terminology Mapping Engine "}
                </div>
              </div>
              {/* Module 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-pine-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      03
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-brand">
                      Weeks 7-9
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pine-900 mb-2">
                    {"Governance & DHA 2023"}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Digital Health Act 2023 certification protocols, statutory data residency, Kenya DPA 2019 compliance audits, and WHO GDHCN trust-layer integration. "}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl font-mono text-[11px] text-pine-900">
                  <span className="font-bold text-emerald-brand">
                    Lab:
                  </span>
                  {" Health System Security Audits "}
                </div>
              </div>
              {/* Module 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-brand text-white font-mono text-xs font-bold flex items-center justify-center">
                      04
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-brand">
                      Weeks 10-12
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pine-900 mb-2">
                    Capstone: Working Exchange
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Build and validate a real-time, standards-based clinical exchange. Defend your data schema, cryptographic integrity, and compliance before an expert panel. "}
                  </p>
                </div>
                <div className="bg-pine-900 text-white p-3 rounded-xl font-mono text-[11px]">
                  <span className="font-bold text-emerald-glow">
                    Live:
                  </span>
                  {" Panel Defense & Certification "}
                </div>
              </div>
            </div>
            {/* Target Cohort Profile Section */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-brand block mb-1">
                    Target Cohort Profile
                  </span>
                  <h3 className="text-2xl font-extrabold text-pine-900 leading-tight">
                    {" Who This Programme Is Built For "}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    {" Practitioners responsible for architecting, validating, or regulating health digital infrastructure across East Africa. "}
                  </p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Role 1 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      folder_managed
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        Health Info Officers
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        {"Hospital CDOs, County HMIS Directors & Clinical IT Leads"}
                      </span>
                    </div>
                  </div>
                  {/* Role 2 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      code
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        Health-Tech Engineers
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        {"Software developers building EMRs, pharmacy tech, & apps"}
                      </span>
                    </div>
                  </div>
                  {/* Role 3 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      account_balance
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        {"Ministry & Counties"}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        Public sector teams stewarding digital transformation
                      </span>
                    </div>
                  </div>
                  {/* Role 4 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      dns
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        Vendor Architects
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        Engineers preparing commercial EMRs for statutory certification
                      </span>
                    </div>
                  </div>
                  {/* Role 5 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      handshake
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        Development Partners
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        USAID, WHO, CDC, and implementing partners driving health tech
                      </span>
                    </div>
                  </div>
                  {/* Role 6 */}
                  <div className="bg-surface-muted p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-brand text-[22px]">
                      security
                    </span>
                    <div>
                      <span className="font-bold text-pine-900 block text-xs">
                        {"Security & Compliance"}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block leading-normal">
                        CISOs, compliance auditors, and privacy protection leads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================================================================== */}
        {" "}
        {/* 5. ADDITIONAL SPECIALIZED PROGRAMMES (4-Card Grid) */}
        {" "}
        {/* ===================================================================== */}
        <section className="w-full bg-white py-20 px-4 sm:px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-brand block mb-1">
                    Curriculum Spectrum
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-pine-900 tracking-tight">
                    Additional Specialized Academy Programmes
                  </h2>
                  <p className="text-slate-500 text-base mt-2">
                    Engineered for senior technologists, operational leads, and executive oversight teams requiring deep domain authority.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-surface-muted p-1.5 rounded-xl border border-slate-200 overflow-x-auto">
                  <button className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-pine-900 text-white shadow-sm transition-all" type="button">
                    All Tracks (4)
                  </button>
                  <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-pine-900 hover:bg-white transition-all" type="button">
                    Technical Deep-Dive
                  </button>
                  <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-pine-900 hover:bg-white transition-all" type="button">
                    {"Executive & Governance"}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Track 1: Digital Trust & Cyber Defence */}
              <div className="bg-surface rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-brand transition-all shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-soft/50 text-pine-900 text-xs font-bold">
                      Specialized Track
                    </span>
                    <span className="material-symbols-outlined text-emerald-brand text-[26px]">
                      lock
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-pine-900 mb-1 group-hover:text-emerald-brand transition-colors">
                    <Link href="/academy/digital-trust-cyber/">
                      {"Digital Trust & Cyber Defence Programme"}
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold text-emerald-brand mb-3">
                    {" Learn PKI from a licensed CA. Applied cryptography, certificate operations, e-KYC. "}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Step inside Kenya's cryptographic foundation. Learn Public Key Infrastructure from engineers who sign national certificates. Deep-dive into X.509, HSM management, cryptographic signature verification, CRL administration, and zero-trust identity pipelines. "}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    8 Weeks • Hands-on CA Hardware Labs
                  </span>
                  <Link className="text-emerald-brand hover:text-pine-900 font-bold text-xs flex items-center gap-1 transition-colors" href="/academy/digital-trust-cyber/">
                    <span className="">
                      View Syllabus
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Track 2: Applied Data & AI */}
              <div className="bg-surface rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-brand transition-all shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-soft/50 text-pine-900 text-xs font-bold">
                      {"Data Science & Intelligence"}
                    </span>
                    <span className="material-symbols-outlined text-emerald-brand text-[26px]">
                      neurology
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-pine-900 mb-1 group-hover:text-emerald-brand transition-colors">
                    <Link href="/academy/applied-data-ai/">
                      {"Applied Data & AI Programme"}
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold text-emerald-brand mb-3">
                    {" AI that ships, not slides. Analytics, ML on African datasets, governance. "}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Practical machine learning tuned for the continent's data environment. Tackle scarce label data, real-time edge processing, predictive epidemiology, and enterprise AI guardrails aligned with regional sovereignty and regulatory frameworks. "}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    10 Weeks • Production ML Pipelines
                  </span>
                  <Link className="text-emerald-brand hover:text-pine-900 font-bold text-xs flex items-center gap-1 transition-colors" href="/academy/applied-data-ai/">
                    <span className="">
                      View Syllabus
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Track 3: Modern Engineering */}
              <div className="bg-surface rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-brand transition-all shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-soft/50 text-pine-900 text-xs font-bold">
                      {"Infrastructure & Architecture"}
                    </span>
                    <span className="material-symbols-outlined text-emerald-brand text-[26px]">
                      terminal
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-pine-900 mb-1 group-hover:text-emerald-brand transition-colors">
                    <Link href="/academy/modern-engineering/">
                      Modern Engineering Programme
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold text-emerald-brand mb-3">
                    {" Engineer like it's production. Cloud-native, DevSecOps, API-first. "}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Eliminate toy projects. Build resilient, distributed telecommunication platforms. Master Kubernetes orchestration, sovereign automated infrastructure, GitOps, CI/CD hardening, and sub-millisecond API gateways built for enterprise load. "}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {"12 Weeks • Cloud & Bare-Metal Architecture"}
                  </span>
                  <Link className="text-emerald-brand hover:text-pine-900 font-bold text-xs flex items-center gap-1 transition-colors" href="/academy/modern-engineering/">
                    <span className="">
                      View Syllabus
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Track 4: Executive Briefings */}
              <div className="bg-surface rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-brand transition-all shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-soft/50 text-pine-900 text-xs font-bold">
                      Executive Leadership
                    </span>
                    <span className="material-symbols-outlined text-emerald-brand text-[26px]">
                      business_center
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-pine-900 mb-1 group-hover:text-emerald-brand transition-colors">
                    <Link href="/academy/executive-briefings/">
                      Executive Briefings
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold text-emerald-brand mb-3">
                    {" Half a day. Full clarity for boards, accounting officers, and executives. "}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {" Designed for non-technical leaders holding statutory risk: Board Members, Principal Secretaries, Chief Executives, and General Counsel. Understand liabilities, audit requirements, and ROI behind national digital health and data protection mandates. "}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    0.5 Days • Closed-Door Session in Nairobi
                  </span>
                  <Link className="text-emerald-brand hover:text-pine-900 font-bold text-xs flex items-center gap-1 transition-colors" href="/academy/executive-briefings/">
                    <span className="">
                      Request Private Cohort
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================================================================== */}
        {" "}
        {/* 6. PRACTITIONER TESTIMONIAL & LAB PHOTO */}
        {" "}
        {/* ===================================================================== */}
        <section className="w-full bg-surface-muted/70 py-20 px-4 sm:px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Photo with badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                <img alt="African digital health specialists, clinical informatics engineers and doctors in modern lab looking at tablet and wall-mounted health registry dashboard displaying HL7 FHIR clinical data" className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwO_0uX52iGUWVDYFCA0eIRFgY0KTtD6BoSYBJtDMl_vxmV3ifWzNEgJoRUkMawHRq8WP1nudTzqJNXv-9mvlSt8pfn72VRbxY5LRfZbY0KL0Vs12Mf1okROthy38iMSrmhj8ozL1Nax_LSINzmSva-4fRBDeEUQwJ4RUmR8hsK6kScGK4y-ctuInrkWQRr6qaVl8JLX4YKOOFWpiC93aLge4Cmv1pnkMZV-GcR2ELUSZBDK93TNfC" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:right-4 bg-pine-900/95 backdrop-blur-md text-white p-3.5 rounded-xl shadow-xl border border-emerald-tint/25">
                  <div className="flex items-center gap-1.5 text-emerald-glow mb-1">
                    <span className="material-symbols-outlined text-[16px] text-emerald-bright">
                      verified
                    </span>
                    <span className="font-mono text-[11px] font-bold tracking-wide uppercase">
                      Production Verified • HL7 FHIR Interoperability Testbed
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    Live validation against Kenya DHA 2023 registries, HSM-backed signing nodes, and OpenHIE schemas.
                  </p>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className="lg:col-span-7 lg:pl-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-brand block mb-2">
                Practitioner Testimony
              </span>
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-pine-900 leading-snug mb-6">
                {" \"RCFI Academy bypassed the standard slide deck tutorials. We mapped live FHIR resources to actual Ministry validation services and hardened our systems against authentic cryptographic compliance standards.\" "}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pine-900 text-emerald-tint flex items-center justify-center font-extrabold text-sm border-2 border-emerald-brand">
                  {" DA "}
                </div>
                <div>
                  <span className="font-bold text-pine-900 block text-base leading-tight">
                    Lead Systems Architect
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Regional Health Infrastructure Consortium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================================================================== */}
        {" "}
        {/* 7. COHORT ADMISSIONS & SYLLABUS DOWNLOAD CARD */}
        {" "}
        {/* ===================================================================== */}
        <section className="w-full bg-pine-950 text-white py-20 px-4 sm:px-8 relative overflow-hidden" id="admissions-section">
          {/* Ambient Glow */}
          <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-bright/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Status & Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pine-900 border border-emerald-tint/30 text-emerald-tint text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-bright animate-ping" />
                <span className="">
                  Admissions Now Open
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight text-white">
                {" Cohort 04 Admissions Open — October 2026 "}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {" Cohorts are strictly capped at 25 participants to guarantee 1-on-1 access to RCFI operational architects, hands-on HSM hardware labs, and intensive capstone defense sessions. "}
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-bright text-[20px] mt-0.5">
                    task_alt
                  </span>
                  <span className="text-sm text-slate-200">
                    {"Comprehensive access to simulated national FHIR & Terminology servers"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-bright text-[20px] mt-0.5">
                    task_alt
                  </span>
                  <span className="text-sm text-slate-200">
                    {"Defend capstone before active regulators & lead system architects"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-bright text-[20px] mt-0.5">
                    task_alt
                  </span>
                  <span className="text-sm text-slate-200">
                    Certificate of Competency issued under RCFI ECSP cryptographic verification
                  </span>
                </div>
              </div>
              <div className="pt-4 font-mono text-xs text-slate-400 border-t border-white/10">
                <span className="">
                  {"Direct Enquiries: "}
                </span>
                {" "}
                <a className="text-emerald-tint hover:underline" href="mailto:academy@rcfi.co.ke">
                  academy@rcfi.co.ke
                </a>
                {" "}
                <span className="mx-2">
                  |
                </span>
                {" "}
                <span className="">
                  Hifadhi House, 5th Floor, Nairobi
                </span>
              </div>
            </div>
            {/* Right: Intake & Syllabus Card (6 cols) */}
            <div className="lg:col-span-6 bg-white text-on-surface rounded-2xl p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-pine-900 leading-tight">
                    Reserve Your Seat or Download Syllabus
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select your pathway below for immediate admissions review
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-soft text-pine-900 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    fact_check
                  </span>
                </div>
              </div>
              <form className="space-y-4" id="academy-lead-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('form-success-state').classList.remove('hidden'); this.classList.add('hidden');">
                <div className="p-3 bg-surface-muted rounded-xl border border-slate-200 mb-1">
                  <div className="text-[11px] font-bold text-pine-900 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="">
                      Select Target Objective
                    </span>
                    <span className="text-emerald-brand font-mono text-[10px]">
                      OCTOBER 2026 INTAKE
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-white border border-emerald-brand/50 shadow-sm cursor-pointer">
                      <input type="radio" name="admission_track" value="practitioner" defaultChecked className="text-emerald-brand focus:ring-emerald-brand h-3.5 w-3.5" />
                      <span className="font-bold text-pine-900 text-[12px]">
                        Enroll for Cohort
                      </span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 hover:border-emerald-brand cursor-pointer">
                      <input type="radio" name="admission_track" value="syllabus" className="text-emerald-brand focus:ring-emerald-brand h-3.5 w-3.5" />
                      <span className="font-medium text-slate-700 text-[12px]">
                        Full Syllabus Only
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-pine-900 mb-1.5" htmlFor="lead-programme">
                    Select Academic Programme
                  </label>
                  <select className="w-full h-11 px-3 rounded-lg border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-emerald-brand focus:border-transparent font-medium" id="lead-programme" required>
                    <option value="digital-health">
                      {"Flagship: Digital Health Interoperability & Governance (12 Wks)"}
                    </option>
                    <option value="digital-trust">
                      {"Digital Trust & Cyber Defence Programme (8 Wks)"}
                    </option>
                    <option value="applied-ai">
                      {"Applied Data & AI Programme (10 Wks)"}
                    </option>
                    <option value="modern-engineering">
                      Modern Engineering Programme (12 Wks)
                    </option>
                    <option value="executive-briefing">
                      Executive Briefing (Half-Day Session)
                    </option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pine-900 mb-1.5" htmlFor="lead-name">
                      Full Name
                    </label>
                    <input className="w-full h-11 px-3 rounded-lg border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-emerald-brand focus:border-transparent" id="lead-name" placeholder="Dr. / Eng. Jane Doe" required type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-pine-900 mb-1.5" htmlFor="lead-email">
                      Work Email
                    </label>
                    <input className="w-full h-11 px-3 rounded-lg border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-emerald-brand focus:border-transparent" id="lead-email" placeholder="jane@organization.ke" required type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pine-900 mb-1.5" htmlFor="lead-org">
                      Organization / Institution
                    </label>
                    <input className="w-full h-11 px-3 rounded-lg border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-emerald-brand focus:border-transparent" id="lead-org" placeholder="Hospital / County / Tech Vendor" required type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-pine-900 mb-1.5" htmlFor="lead-role">
                      Designation / Role
                    </label>
                    <input className="w-full h-11 px-3 rounded-lg border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-emerald-brand focus:border-transparent" id="lead-role" placeholder="e.g. Senior Software Architect" required type="text" />
                  </div>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-pine-900 hover:bg-emerald-brand text-white h-12 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg" type="submit">
                    <span className="material-symbols-outlined text-[18px]">
                      how_to_reg
                    </span>
                    <span className="">
                      Join Cohort 04 Waitlist
                    </span>
                  </button>
                  <button className="flex-1 bg-surface-muted hover:bg-slate-200 text-pine-900 h-12 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-200" data-rcfi-onclick={"alert('Downloading comprehensive syllabus package for Digital Health & Trust programmes...');"} type="button">
                    <span className="material-symbols-outlined text-[18px] text-emerald-brand">
                      download
                    </span>
                    <span className="">
                      Download Syllabus PDF
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-2">
                  <span className="material-symbols-outlined text-[15px] text-emerald-brand">
                    verified_user
                  </span>
                  <span className="">
                    Your professional data is safeguarded under the Kenya Data Protection Act 2019.
                  </span>
                </div>
              </form>
              {/* Form Success Feedback State */}
              <div className="hidden text-center py-10 space-y-4" id="form-success-state">
                <div className="w-16 h-16 bg-emerald-soft text-pine-900 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px] text-emerald-brand">
                    mark_email_read
                  </span>
                </div>
                <h4 className="text-xl font-bold text-pine-900">
                  Application Registered
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  {" Thank you for applying to RCFI Academy Cohort 04. Our admissions committee and programme directors will review your practitioner credentials and follow up within 24 business hours. "}
                </p>
                <div className="pt-2">
                  <button className="text-emerald-brand font-bold text-xs underline hover:text-pine-900" data-rcfi-onclick="document.getElementById('form-success-state').classList.add('hidden'); document.getElementById('academy-lead-form').classList.remove('hidden');">
                    {" Submit another application or syllabus request "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ===================================================================== */}
      {" "}
      {/* 8. FOOTER: STANDARD RCFI CORPORATE FOOTER */}
      {" "}
      {/* ===================================================================== */}
      <footer className="w-full bg-pine-950 text-white pt-16 pb-12 border-t border-pine-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-pine-800">
            {/* Column 1: Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-bright text-pine-950 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">
                    verified_user
                  </span>
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  RCFI
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {" Reprodrive Center for Innovation Limited is a licensed Electronic Certification Service Provider (ECSP) delivering cryptographic trust, digital signature infrastructure, and sovereign telecommunications innovation. "}
              </p>
              <div className="pt-1 text-xs">
                <span className="text-slate-400 block">
                  Communications Authority License:
                </span>
                <span className="font-mono font-bold text-emerald-tint">
                  TL/E-CSP 00014
                </span>
              </div>
            </div>
            {/* Column 2: Nairobi HQ */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-white block uppercase tracking-wider">
                Nairobi Headquarters
              </span>
              <div className="text-xs text-slate-300 space-y-1 leading-relaxed">
                <p className="text-white font-semibold">
                  Hifadhi House, 5th Floor
                </p>
                <p className="">
                  Along ICD Road, Off Mombasa Road
                </p>
                <p className="">
                  Nairobi, Kenya
                </p>
                <p className="pt-2">
                  P.O. Box 28392 - 00200
                </p>
                <p className="">
                  {"Email: "}
                  <a className="text-emerald-tint hover:underline" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </p>
                <p className="">
                  {"Verification Desk: "}
                  <a className="text-emerald-tint hover:underline" href="mailto:verify@rcfi.co.ke">
                    verify@rcfi.co.ke
                  </a>
                </p>
              </div>
            </div>
            {/* Column 3: Trust & Compliance */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-white block uppercase tracking-wider">
                {"Trust & Compliance"}
              </span>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/trust/">
                    Trust Center Overview
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/trust/">
                    Certification Authority Repository
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/trust/">
                    Certificate Revocation List (CRL)
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/privacy/">
                    Kenya DPA Compliance Notice
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/trust/">
                    ISO/IEC 27001:2022 Registry
                  </Link>
                </li>
                <li className="">
                  <a className="hover:text-emerald-glow transition-colors" href="#">
                    {"Security & Architecture Specs"}
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4: Solutions & Academy */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-white block uppercase tracking-wider">
                {"Solutions & Academy"}
              </span>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/products/certysign/">
                    CertySign Enterprise e-Signature
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/products/elano/">
                    Elano Identity Verification
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/products/prezio/">
                    {"Prezio HSM & Cryptography"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors text-emerald-tint font-bold" href="/academy/">
                    RCFI Technical Academy
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/partners/">
                    Pan-African Partner Ecosystem
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-emerald-glow transition-colors" href="/terms/">
                    {"Terms of Service & Legal Notices"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All rights reserved. Registered in the Republic of Kenya.
            </div>
            <div className="flex items-center gap-4">
              <Link className="hover:text-white transition-colors" href="/terms/">
                Legal Notice
              </Link>
              <span className="">
                •
              </span>
              <Link className="hover:text-white transition-colors" href="/privacy/">
                Privacy Policy
              </Link>
              <span className="">
                •
              </span>
              <Link className="hover:text-white transition-colors" href="/trust/">
                {"CPS & CP Repo"}
              </Link>
              <span className="">
                •
              </span>
              <Link className="text-emerald-tint hover:underline font-semibold" href="/verify/">
                Validator Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
