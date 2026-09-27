import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/privacy/page.css";
import "@/styles/pages/privacy/late.css";

export const metadata: Metadata = { title: "Privacy Policy | RCFI Technology" };

export default function PrivacyPage() {
  return (
    <div className="rcfi-privacy" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        {/* Top Pine Utility Bar */}
        <div className="w-full bg-[#0b4a34] text-[#d1e8dd] text-xs py-2 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                <span className="font-medium text-white">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
              <span className="hidden md:inline text-white/30">
                |
              </span>
              <div className="hidden md:flex items-center gap-1 text-[#b5ccc2]">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                {" "}
                <span className="">
                  Kenya DPA Compliant
                </span>
              </div>
              <span className="hidden md:inline text-white/30">
                |
              </span>
              <div className="hidden lg:flex items-center gap-3 text-[#b5ccc2]">
                <span className="">
                  Tel: +254 (0) 20 283 9200
                </span>
                {" "}
                <span className="">
                  •
                </span>
                {" "}
                <span className="">
                  info@rcfi.co.ke
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/trust/" data-path="ca-repository" className="hover:text-white transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  lock_reset
                </span>
                <span className="">
                  CA Repository
                </span>
              </Link>
              <span className="text-white/30">
                |
              </span>
              <Link href="/trust/" data-path="trust-center" className="hover:text-white transition-colors flex items-center gap-1 text-[#4edea3] font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                <span className="">
                  Trust Center
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Main Clean White Navigation Bar */}
        <div className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" data-path="home" className="flex items-center gap-3 group">
              <img src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" alt="RCFI Sovereign Digital Trust Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#003221] tracking-tight group-hover:text-[#006c49] transition-colors flex items-center gap-0.5">
                  {" RCFI"}
                  <span className="text-[#006c49]">
                    .
                  </span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Sovereign Trust
                </span>
              </div>
            </Link>
            {/* Nav Links */}
            <nav className="hidden xl:flex items-center gap-6 font-medium text-sm text-slate-700">
              <Link href="/services/" data-path="services" className="hover:text-[#006c49] transition-colors py-1">
                Services
              </Link>
              {" "}
              <Link href="/products/certysign/" data-path="products" className="hover:text-[#006c49] transition-colors py-1">
                Products
              </Link>
              {" "}
              <Link href="/academy/" data-path="academy" className="hover:text-[#006c49] transition-colors py-1">
                Academy
              </Link>
              {" "}
              <Link href="/partners/" data-path="partners" className="hover:text-[#006c49] transition-colors py-1">
                {"Partners & Ecosystem"}
              </Link>
              {" "}
              <Link href="/insights/" data-path="insights" className="hover:text-[#006c49] transition-colors py-1">
                Insights
              </Link>
              {" "}
              <Link href="/about/" data-path="company" className="hover:text-[#006c49] transition-colors py-1">
                Company
              </Link>
            </nav>
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/verify/" data-path="verify-document" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#006c49] border border-[#006c49]/30 hover:bg-[#eff4ff] hover:border-[#006c49] transition-all">
                <span className="material-symbols-outlined text-[16px]">
                  search_check
                </span>
                {" "}
                <span className="">
                  Verify a Document
                </span>
              </Link>
              <a href="https://meet.rcfi.co.ke/" data-path="book-meeting" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#003221] text-white hover:bg-[#0b4a34] transition-all shadow-sm" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                <span className="">
                  Book a Meeting
                </span>
              </a>
              <div className="w-9 h-9 rounded-full bg-[#e6eeff] text-[#003221] flex items-center justify-center font-bold text-sm border border-slate-200">
                <span className="material-symbols-outlined text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[7.5rem] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Strip & Header Breadcrumb Area */}
          <section className="w-full bg-gradient-to-b from-[#eff4ff] to-[#f8f9ff] text-[#0d1c2e] border-b border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                <Link href="/" data-path="home" className="hover:text-[#006c49] transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  <span className="">
                    Home
                  </span>
                </Link>
                <span className="text-slate-400">
                  /
                </span>
                <Link href="/terms/" data-path="legal" className="hover:text-[#006c49] transition-colors">
                  {"Legal & Regulatory"}
                </Link>
                <span className="text-slate-400">
                  /
                </span>
                <span className="text-[#006c49] font-bold">
                  Privacy Policy
                </span>
              </nav>
              {/* Headline */}
              <div className="flex flex-col gap-2 max-w-4xl">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006c49]" />
                  <span className="text-xs uppercase tracking-widest text-[#006c49] font-bold">
                    {"// STATUTORY COMPLIANCE & LEGAL ARCHITECTURE"}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#003221] tracking-tight">
                  {" Privacy Policy "}
                </h1>
                <p className="text-base md:text-lg text-slate-600 mt-1 leading-relaxed">
                  {" RCFI Technology's statutory commitments to sovereign digital trust, systemic privacy protection, and transparent cryptographic processing under the Kenya Data Protection Act 2019 and Communications Authority of Kenya mandates. "}
                </p>
              </div>
              {/* Advisory Banner */}
              <div className="mt-8 p-5 bg-white border border-[#c0c9c2]/60 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[24px]">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-base font-bold text-[#003221]">
                      REGULATORY COMPLIANCE INSTRUMENT
                    </span>
                    <span className="bg-[#b4f0d1] text-[#003221] px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
                      Gazette Verified
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {" In formal compliance with Section 19 and Section 30 of the Kenya Data Protection Act 2019 and the Office of the Data Protection Commissioner (ODPC) statutory directives. Note: Full sovereign legal draft endorsed by institutional regulatory counsel for publication across public trust nodes. "}
                  </p>
                </div>
              </div>
              {/* Metadata Grid Strip */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex flex-col border-r border-slate-100 last:border-0 pr-2">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    Effective Date
                  </span>
                  <span className="text-sm md:text-base text-[#003221] font-bold mt-0.5">
                    January 1, 2026
                  </span>
                </div>
                <div className="flex flex-col border-r border-slate-100 last:border-0 pr-2">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    Last Revision
                  </span>
                  <span className="text-sm md:text-base text-[#003221] font-bold mt-0.5">
                    March 2026
                  </span>
                </div>
                <div className="flex flex-col border-r border-slate-100 last:border-0 pr-2">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    Statutory Body
                  </span>
                  <span className="text-sm md:text-base text-[#003221] font-bold mt-0.5">
                    {"KDPA 2019 & ODPC"}
                  </span>
                </div>
                <div className="flex flex-col border-r border-slate-100 last:border-0 pr-2">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    ODPC Registration
                  </span>
                  <span className="text-xs md:text-sm text-[#006c49] font-bold mt-0.5 font-mono">
                    ODPC/REG/2024/00812
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    In-Country Custody
                  </span>
                  <span className="text-sm md:text-base text-[#006c49] font-bold flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                    {" 100% Sovereign "}
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Main Content Layout (Sticky Side-Nav + Structured Policy Text) */}
          <section className="w-full py-12 bg-[#f8f9ff]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Sticky Sidebar */}
                <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
                  {/* Table of Contents Card */}
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <span className="text-base text-[#003221] font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#006c49]">
                          toc
                        </span>
                        {" Policy Index "}
                      </span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-semibold">
                        11 Clauses
                      </span>
                    </div>
                    <nav className="flex flex-col space-y-1 text-sm font-medium" id="policy-toc">
                      <a className="text-[#003221] font-bold bg-[#eff4ff] border-l-4 border-[#006c49] px-3 py-2 rounded-r-lg transition-colors flex items-center justify-between" href="#section-who-we-are">
                        <span className="">
                          1. Who We Are
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          ECSP-01
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-scope">
                        <span className="">
                          {"2. Scope & Data Categories"}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          CAT-02
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-lawful-bases">
                        <span className="">
                          3. Lawful Bases for Processing
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          LGL-03
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-how-we-use">
                        <span className="">
                          4. How We Process Data
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          USE-04
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-third-party">
                        <span className="">
                          {"5. Sharing & Processors"}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          SHR-05
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-sovereignty">
                        <span className="">
                          {"6. Sovereignty & Cross-Border"}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          SOV-06
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-retention">
                        <span className="">
                          {"7. Retention & Cryptographic Logs"}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          RET-07
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-data-rights">
                        <span className="">
                          8. Your Statutory Rights
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          RGT-08
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-dpo">
                        <span className="">
                          9. Office of the DPO Contact
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          DPO-09
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-odpc">
                        <span className="">
                          10. ODPC Statutory Escalation
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          REG-10
                        </span>
                      </a>
                      <a className="text-slate-600 hover:text-[#006c49] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between" href="#section-version">
                        <span className="">
                          {"11. Version & Revision Log"}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          VER-11
                        </span>
                      </a>
                    </nav>
                  </div>
                  {/* Quick Action Card in Deep Pine */}
                  <div className="bg-[#0b4a34] text-white p-6 rounded-xl shadow-sm space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/15 text-[#4edea3] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          security
                        </span>
                      </div>
                      <span className="text-base font-bold text-white">
                        Trust Center Actions
                      </span>
                    </div>
                    <p className="text-xs text-[#d1e8dd] leading-relaxed">
                      {" Inspect cryptographic attestations or download verified audit transcripts directly. "}
                    </p>
                    <div className="flex flex-col gap-2 pt-1">
                      <a className="flex items-center justify-between p-3 rounded-lg bg-white text-[#003221] hover:bg-[#b4f0d1] transition-colors text-xs font-semibold" data-path="download-privacy-pdf" href="#">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                            download_for_offline
                          </span>
                          {" Download Formal Policy (PDF) "}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          380 KB
                        </span>
                      </a>
                      <a className="flex items-center justify-between p-3 rounded-lg bg-white text-[#003221] hover:bg-[#b4f0d1] transition-colors text-xs font-semibold" href="#section-dpo">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                            mail
                          </span>
                          {" Direct Filing to DPO "}
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-slate-400">
                          arrow_forward
                        </span>
                      </a>
                      <Link className="flex items-center justify-between p-3 rounded-lg bg-white text-[#003221] hover:bg-[#b4f0d1] transition-colors text-xs font-semibold" data-path="verify-document" href="/verify/">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-[#006c49]">
                            verified_user
                          </span>
                          {" Verify Signature Legitimacy "}
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-slate-400">
                          launch
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* Regulatory Seal Badge */}
                  <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#eff4ff] border border-blue-100 flex items-center justify-center text-[#006c49] shadow-inner">
                      <span className="material-symbols-outlined text-[28px]">
                        gavel
                      </span>
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="text-sm font-bold text-[#003221]">
                        ODPC Registered
                      </span>
                      <span className="text-slate-500">
                        Category: Critical Infra Data Controller
                      </span>
                      <span className="text-[#006c49] font-bold font-mono">
                        Reg: ODPC/REG/2024/00812
                      </span>
                    </div>
                  </div>
                </aside>
                {/* Main Policy Column */}
                <main className="lg:col-span-8 flex flex-col gap-8">
                  {/* Section 1 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-who-we-are">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 01
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Statutory Identity
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"1. Who We Are & Legal Persona"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Reprodrive Center for Innovation Limited (trading as "}
                      <strong className="text-[#003221] font-bold">
                        "RCFI Technology"
                      </strong>
                      {") operates as a Kenya-registered limited liability corporation with legal corporate identification and regulatory operational licensing granted by the "}
                      <strong className="text-[#003221] font-bold">
                        Communications Authority of Kenya (CAK)
                      </strong>
                      {" as a licensed Electronic Certification Service Provider ("}
                      <em className="text-slate-800 font-semibold not-italic">
                        Licence No. TL/E-CSP 00014
                      </em>
                      {"). "}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            domain
                          </span>
                          {" Corporate Headquarters "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                          {" 5th Floor, Hifadhi House, Along Inland Container Depot (ICD) Road, P.O. Box 48120 - 00100, Nairobi City County, Republic of Kenya. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            verified
                          </span>
                          {" Statutory Registrations "}
                        </span>
                        <ul className="text-xs md:text-sm text-slate-600 mt-2 space-y-1">
                          <li className="">
                            {"• CAK ECSP: "}
                            <span className="font-mono font-semibold text-[#003221]">
                              TL/E-CSP 00014
                            </span>
                          </li>
                          <li className="">
                            {"• ODPC Data Controller: "}
                            <span className="font-mono font-semibold text-[#003221]">
                              ODPC/REG/2024/00812
                            </span>
                          </li>
                          <li className="">
                            • ISO/IEC 27001:2022 Verified Infrastructure
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {" RCFI Technology anchors sovereign digital signature operations, national public key infrastructure (PKI), CertySign Qualified Trust Services, Elano Identity Ledgers, Prezio Audit Gateways, and health data cybersecurity frameworks across East and Central Africa. "}
                    </p>
                  </article>
                  {/* Section 2 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-scope">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 02
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Data Taxonomies
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"2. Scope & Categories of Collected Data"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" We operate under the fundamental doctrine of "}
                      <strong className="text-[#003221] font-bold">
                        Data Minimization (KDPA Section 3)
                      </strong>
                      {". We only process personal identifiable information (PII) strictly necessary to guarantee cryptographic certitude, verify identity credentials, and execute statutory mandates. "}
                    </p>
                    <div className="space-y-4 mt-2">
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#006c49] text-white font-bold text-xs flex items-center justify-center">
                            A
                          </span>
                          <h3 className="text-base font-bold text-[#003221]">
                            {"Public Web & Portal Visitors"}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 pl-9 leading-relaxed">
                          {" Technical session telemetry, IP addresses for rate-limiting, cryptographic cipher suites negotiated during TLS handshakes, client operating system parameters, and functional system cookies strictly required for security validation. "}
                          <strong className="text-[#003221] font-semibold">
                            We deploy zero commercial marketing trackers or behavioural ad pixels.
                          </strong>
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#006c49] text-white font-bold text-xs flex items-center justify-center">
                            B
                          </span>
                          <h3 className="text-base font-bold text-[#003221]">
                            Sovereign Trust Platform Users (CertySign, Elano, Prezio)
                          </h3>
                        </div>
                        <div className="pl-9 text-slate-600 text-xs md:text-sm space-y-2 leading-relaxed">
                          <p className="">
                            {" Certificate Signing Requests (CSRs), corporate registration data, subscriber full names, national identity or passport serials, company identification numbers, and X.509 subject identifiers. "}
                          </p>
                          <div className="p-3 bg-[#e6eeff] border border-blue-100 rounded-lg text-xs text-[#003221] font-semibold flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#006c49] text-sm">
                              lock
                            </span>
                            <span className="">
                              Zero Cleartext Inspection: We process cryptographic SHA-256 hash payloads and RFC 3161 timestamps without accessing or reading the underlying payload document.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#006c49] text-white font-bold text-xs flex items-center justify-center">
                            C
                          </span>
                          <h3 className="text-base font-bold text-[#003221]">
                            {"Academic & Fellowship Candidates (RCFI Academy)"}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 pl-9 leading-relaxed">
                          {" Academic curriculum vitae, professional certifications, National Industrial Training Authority (NITA) sponsorship credentials, and physical access identification documentation required for security-cleared entry to FIPS 140-2 Level 3 cryptographic enclaves. "}
                        </p>
                      </div>
                    </div>
                  </article>
                  {/* Section 3 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-lawful-bases">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 03
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        KDPA §30 Compliance
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      3. Lawful Bases for Processing
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Every data processing activity executed within RCFI infrastructure is validated against one of four statutory grounds established by Section 30 of the Kenya Data Protection Act 2019: "}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-[#f8f9ff] border border-slate-200/80 rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base mb-2">
                            <span className="material-symbols-outlined text-[#006c49]">
                              balance
                            </span>
                            {" Statutory & Legal Obligation "}
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {" Mandatory subscriber verification and retention under CAK ECSP regulatory guidelines, Kenya Information and Communications Act (Cap 411A), Digital Health Act 2023, and Evidence Act §106B evidentiary rules. "}
                          </p>
                        </div>
                        <span className="mt-4 text-xs font-bold font-mono text-[#006c49]">
                          KDPA 2019 Section 30(1)(b)
                        </span>
                      </div>
                      <div className="p-5 bg-[#f8f9ff] border border-slate-200/80 rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base mb-2">
                            <span className="material-symbols-outlined text-[#006c49]">
                              handshake
                            </span>
                            {" Contractual Necessity "}
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {" Executing agreements with enterprise clients, financial institutions, and government agencies for issuance of digital certificates, time-stamping, and cryptographic verification APIs. "}
                          </p>
                        </div>
                        <span className="mt-4 text-xs font-bold font-mono text-[#006c49]">
                          KDPA 2019 Section 30(1)(a)
                        </span>
                      </div>
                      <div className="p-5 bg-[#f8f9ff] border border-slate-200/80 rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base mb-2">
                            <span className="material-symbols-outlined text-[#006c49]">
                              shield
                            </span>
                            {" Legitimate Interests "}
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {" Maintaining zero-trust perimeter network security, forensic detection of man-in-the-middle exploits, cryptographic key collision analysis, and continuous availability of root revocation endpoints. "}
                          </p>
                        </div>
                        <span className="mt-4 text-xs font-bold font-mono text-[#006c49]">
                          KDPA 2019 Section 30(1)(e)
                        </span>
                      </div>
                      <div className="p-5 bg-[#f8f9ff] border border-slate-200/80 rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base mb-2">
                            <span className="material-symbols-outlined text-[#006c49]">
                              check_circle
                            </span>
                            {" Explicit Data Consent "}
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {" Voluntary enrollment in advanced applied cryptography masterclasses, technical newsletters, or attendance at regional cybersecurity summits. "}
                          </p>
                        </div>
                        <span className="mt-4 text-xs font-bold font-mono text-[#006c49]">
                          KDPA 2019 Section 32
                        </span>
                      </div>
                    </div>
                  </article>
                  {/* Section 4 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-how-we-use">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 04
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Operational Processing
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"4. Operational Processing & Purpose Specification"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Personal data collected across our sovereign ecosystem is strictly dedicated to the following concrete engineering workflows: "}
                    </p>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                      <li className="flex items-start gap-3 p-3 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="material-symbols-outlined text-[#006c49] shrink-0 mt-0.5">
                          verified
                        </span>
                        <span className="">
                          <strong className="text-[#003221]">
                            Issuance of X.509 Qualified Digital Certificates:
                          </strong>
                          {" Rigorous validation of subscriber identity before binding identity markers to cryptographic public keys."}
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="material-symbols-outlined text-[#006c49] shrink-0 mt-0.5">
                          history
                        </span>
                        <span className="">
                          <strong className="text-[#003221]">
                            {"CRL & OCSP Certificate Verification:"}
                          </strong>
                          {" Operating real-time Certificate Revocation Lists and Online Certificate Status Protocol query endpoints 24/7/365."}
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="material-symbols-outlined text-[#006c49] shrink-0 mt-0.5">
                          workspace_premium
                        </span>
                        <span className="">
                          <strong className="text-[#003221]">
                            {"Corporate e-Seal & Timestamp Stamping:"}
                          </strong>
                          {" Applying cryptographic non-repudiation seals compliant with eIDAS high-assurance thresholds and CAK technical standards."}
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="material-symbols-outlined text-[#006c49] shrink-0 mt-0.5">
                          terminal
                        </span>
                        <span className="">
                          <strong className="text-[#003221]">
                            Statutory Evidence Generation:
                          </strong>
                          {" Generating cryptographically certified electronic audit trails admissible under Section 106B of the Kenya Evidence Act."}
                        </span>
                      </li>
                    </ul>
                  </article>
                  {/* Section 5 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-third-party">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 05
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Disclosure Protocol
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"5. Third Parties & Non-Monetization Policy"}
                    </h2>
                    <div className="p-4 bg-[#eff4ff] border border-[#98d3b5]/50 rounded-lg">
                      <p className="text-sm font-bold text-[#003221]">
                        {" Commercial Non-Monetization Guarantee: "}
                      </p>
                      <p className="text-xs md:text-sm text-slate-700 mt-1 leading-relaxed">
                        {" RCFI Technology does not monetize, broker, sell, or rent personal identifiable information or metadata to any third party under any circumstances. "}
                      </p>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Disclosures of operational or audit information take place strictly within the following narrow statutory corridors: "}
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221]">
                          A. Regulators and Sovereign Oversight
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                          {" Communications Authority of Kenya (CAK) as the licensing authority for ECSP root operations; Office of the Data Protection Commissioner (ODPC) for statutory audits; Ministry of Health for Digital Health interoperability compliance. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221]">
                          B. Sovereign Cloud Infrastructure Nodes
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                          {" Government-vetted Tier-III sovereign cloud enclaves at Konza Technopolis. All infrastructure engineers sign binding non-disclosure instruments and hold active security clearances. "}
                        </p>
                      </div>
                    </div>
                  </article>
                  {/* Section 6 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-sovereignty">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 06
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        KDPA §48 Sovereignty
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"6. In-Country Data Sovereignty & Cross-Border Transfers"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" RCFI maintains full adherence to Section 48 and Section 49 of the Data Protection Act 2019 governing transfers outside Kenya. As Kenya’s anchor electronic trust provider, our architecture enforces "}
                      <strong className="text-[#003221] font-bold">
                        100% in-country data residency
                      </strong>
                      {". "}
                    </p>
                    <div className="p-5 bg-[#eff4ff] border border-blue-100 rounded-xl space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#006c49] text-[24px]">
                          cloud_done
                        </span>
                        <span className="text-base font-bold text-[#003221]">
                          Domestic Hosting Mandate
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {" All production databases, cryptographic HSM (Hardware Security Module) clusters, digital signature key rings, and transaction ledgers are physically deployed within sovereign boundaries at the Konza Technopolis National Cloud and accredited Nairobi data centers. "}
                      </p>
                      <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed">
                        <strong className="text-[#ba1a1a]">
                          Absolute Prohibition:
                        </strong>
                        {" Zero sensitive personal data, citizen biometric data, or health records are routed through offshore cloud providers without explicit statutory authorization and ODPC permit issuance. "}
                      </div>
                    </div>
                  </article>
                  {/* Section 7 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-retention">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 07
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Retention Schedules
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"7. Cryptographic Archival & Retention Schedules"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" In accordance with CAK ECSP regulatory license obligations and Section 39 of the Kenya Data Protection Act, retention intervals correspond to the legal character of each data category: "}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs md:text-sm border border-slate-200 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-[#003221] text-white font-semibold">
                            <th className="p-3.5">
                              Data Classification
                            </th>
                            <th className="p-3.5">
                              Retention Period
                            </th>
                            <th className="p-3.5">
                              Statutory Justification
                            </th>
                            <th className="p-3.5">
                              Storage Media
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700 divide-y divide-slate-100">
                          <tr className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-semibold text-[#003221]">
                              {"PKI Root & CA Revocation Logs"}
                            </td>
                            <td className="p-3.5">
                              Minimum 7 Years
                            </td>
                            <td className="p-3.5">
                              CAK License Rule TL/E-CSP
                            </td>
                            <td className="p-3.5 font-mono text-[#006c49] font-bold">
                              WORM Storage Enclave
                            </td>
                          </tr>
                          <tr className="bg-[#f8f9ff] hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-semibold text-[#003221]">
                              Qualified Signature Hash Logs
                            </td>
                            <td className="p-3.5">
                              7 Years
                            </td>
                            <td className="p-3.5">
                              Evidence Act §106B Admissibility
                            </td>
                            <td className="p-3.5 font-mono text-[#006c49] font-bold">
                              Encrypted Distributed Ledger
                            </td>
                          </tr>
                          <tr className="bg-white hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-semibold text-[#003221]">
                              Identity Proofing Credentials
                            </td>
                            <td className="p-3.5">
                              Certificate Lifetime + 7 Yrs
                            </td>
                            <td className="p-3.5">
                              KICA Regulations (Cap 411A)
                            </td>
                            <td className="p-3.5 font-mono text-[#006c49] font-bold">
                              AES-256 Vaulted DB
                            </td>
                          </tr>
                          <tr className="bg-[#f8f9ff] hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-semibold text-[#003221]">
                              Web Server Telemetry Logs
                            </td>
                            <td className="p-3.5">
                              90 Days
                            </td>
                            <td className="p-3.5">
                              Cybersecurity Intrusion Analysis
                            </td>
                            <td className="p-3.5 font-mono text-slate-500">
                              Automated FIFO Purge
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </article>
                  {/* Section 8 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-data-rights">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 08
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        KDPA §26 Prerogatives
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      8. Your Rights as a Data Subject
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Under Part IV (Principles and Obligations of Personal Data Protection) of the Kenya Data Protection Act 2019, every citizen and data subject possesses irrevocable statutory rights: "}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            visibility
                          </span>
                          {" Right to be Informed "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" To be notified of the precise purpose, legal basis, and identity of processors handling your data. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            folder_shared
                          </span>
                          {" Right of Access (Section 26) "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" To receive a structured copy of personal data held within 21 days of formal submission to our DPO. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            edit_note
                          </span>
                          {" Right to Rectification "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" To request immediate amendment of false, inaccurate, or outdated credentials in active directories. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            delete_forever
                          </span>
                          {" Right to Erasure (Right to be Forgotten) "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" Subject to statutory non-derogable retention mandates under CAK ECSP regulatory license frameworks. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            block
                          </span>
                          {" Right to Object "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" To prohibit processing conducted on grounds of legitimate interests or for direct institutional outreach. "}
                        </p>
                      </div>
                      <div className="p-4 bg-[#f8f9ff] border border-slate-200/80 rounded-lg">
                        <span className="text-sm font-bold text-[#003221] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#006c49] text-base">
                            smart_toy
                          </span>
                          {" Protection from Automated Decisions "}
                        </span>
                        <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {" Right not to be subjected to decisions based solely on automated profiling without human review. "}
                        </p>
                      </div>
                    </div>
                  </article>
                  {/* Section 9 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-dpo">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 09
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Institutional Governance
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      9. Office of the Data Protection Officer
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Pursuant to Section 24 of the Kenya Data Protection Act 2019, RCFI has designated an official Data Protection Officer accountable directly to the executive board for regulatory compliance: "}
                    </p>
                    <div className="p-6 bg-[#f8f9ff] border border-slate-200/80 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base">
                          <span className="material-symbols-outlined text-[#006c49]">
                            shield_person
                          </span>
                          {" Office of the DPO "}
                        </div>
                        <div className="text-xs md:text-sm text-slate-600 space-y-1">
                          <p className="font-bold text-[#003221]">
                            Reprodrive Center for Innovation Limited (RCFI)
                          </p>
                          <p className="">
                            5th Floor, Hifadhi House, Along ICD Road
                          </p>
                          <p className="">
                            P.O. Box 48120 - 00100, Nairobi, Kenya
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#003221] font-bold text-sm md:text-base">
                          <span className="material-symbols-outlined text-[#006c49]">
                            contact_mail
                          </span>
                          {" Direct Regulatory Contact "}
                        </div>
                        <div className="text-xs md:text-sm text-slate-600 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 uppercase font-semibold text-[11px] w-14">
                              Email:
                            </span>
                            <a className="text-[#006c49] font-bold hover:underline font-mono" href="mailto:dpo@rcfi.co.ke">
                              dpo@rcfi.co.ke
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 uppercase font-semibold text-[11px] w-14">
                              Phone:
                            </span>
                            <span className="text-slate-800 font-medium">
                              +254 (0) 20 283 9200
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 uppercase font-semibold text-[11px] w-14">
                              Portal:
                            </span>
                            <Link className="text-[#003221] font-bold hover:underline" data-path="trust-center" href="/trust/">
                              Trust Center Portal
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Section 10 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-odpc">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 10
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Statutory Recourse
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      10. Office of the Data Protection Commissioner (ODPC)
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" If a data grievance submitted to RCFI is not resolved to your satisfaction within thirty (30) business days, you preserve the unassailable right under Section 56 of the Act to lodge an administrative complaint with the national supervisory authority: "}
                    </p>
                    <div className="p-5 bg-[#f8f9ff] border border-slate-200/80 rounded-lg space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-base font-bold text-[#003221]">
                          ODPC National Secretariat
                        </span>
                        <span className="text-xs bg-[#eff4ff] px-2.5 py-1 rounded font-bold text-[#006c49]">
                          National Regulator
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-600">
                        <div className="space-y-1 leading-relaxed">
                          <p className="">
                            <strong>
                              Headquarters:
                            </strong>
                            {" 12th Floor, Britam Tower, Hospital Road, Upper Hill"}
                          </p>
                          <p className="">
                            <strong>
                              Postal:
                            </strong>
                            {" P.O. Box 30920 - 00100, Nairobi, Kenya"}
                          </p>
                        </div>
                        <div className="space-y-1 leading-relaxed">
                          <p className="">
                            <strong>
                              Direct Complaints:
                            </strong>
                            {" "}
                            <span className="text-[#006c49] font-semibold font-mono">
                              complaints@odpc.go.ke
                            </span>
                          </p>
                          <p className="">
                            <strong>
                              Official Web:
                            </strong>
                            {" "}
                            <a className="text-[#006c49] font-bold hover:underline" href="https://www.odpc.go.ke" rel="noopener noreferrer" target="_blank">
                              www.odpc.go.ke
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Section 11 */}
                  <article className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm flex flex-col gap-4 scroll-mt-28" id="section-version">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs text-[#006c49] uppercase font-bold tracking-wider">
                        // SECTION 11
                      </span>
                      <span className="bg-[#eff4ff] text-[#003221] px-3 py-1 rounded text-xs font-semibold">
                        Lifecycle Registry
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003221] tracking-tight">
                      {"11. Document History & Material Changes"}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {" Any amendments to our processing frameworks, cloud topography, or regulatory parameters will be reflected in this register and published on our public CA repository. "}
                    </p>
                    <div className="space-y-2 mt-1">
                      <div className="p-3 bg-[#eff4ff] border border-blue-100 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-xs md:text-sm text-[#003221]">
                            v2.4.0 (Current)
                          </span>
                          <span className="text-xs text-slate-600">
                            {"March 2026 — Comprehensive Alignment with ODPC Guidelines & Digital Health Act 2023."}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold uppercase text-[#006c49] bg-[#b4f0d1] px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-[#f8f9ff] border border-slate-200/60 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs md:text-sm text-slate-500">
                            v2.3.1
                          </span>
                          <span className="text-xs text-slate-500">
                            January 2026 — Routine annual statutory audit update.
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          Superseded
                        </span>
                      </div>
                      <div className="p-3 bg-[#f8f9ff] border border-slate-200/60 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs md:text-sm text-slate-500">
                            v2.0.0
                          </span>
                          <span className="text-xs text-slate-500">
                            March 2025 — Initial ECSP accreditation release under CAK TL/E-CSP 00014.
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          Archived
                        </span>
                      </div>
                    </div>
                  </article>
                  {/* Affirmation Callout Panel in Pine */}
                  <div className="p-8 bg-gradient-to-r from-[#003221] to-[#0b4a34] text-white rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/10 text-[#4edea3] flex items-center justify-center shrink-0 border border-white/20">
                        <span className="material-symbols-outlined text-[30px]">
                          workspace_premium
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white">
                          Sovereign Data Pledge
                        </span>
                        <span className="text-sm text-[#d1e8dd] mt-0.5">
                          Your data remains in Kenya, governed by Kenyan law, verified by Kenyan trust.
                        </span>
                      </div>
                    </div>
                    <Link className="bg-[#4edea3] text-[#002113] hover:bg-white transition-colors px-6 py-3 rounded-lg text-sm font-bold shrink-0 shadow-md" data-path="trust-center" href="/trust/">
                      {" Visit Public Trust Center "}
                    </Link>
                  </div>
                </main>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-[#041f15] text-[#b5ccc2] border-t border-[#0b4a34]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1: Brand & Licenses */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" alt="RCFI Sovereign Digital Trust Logo" className="h-8 w-auto object-contain" />
                <span className="text-xl font-bold text-white tracking-tight">
                  RCFI
                  <span className="text-[#4edea3]">
                    .
                  </span>
                </span>
              </div>
              <p className="text-xs text-[#b5ccc2] leading-relaxed">
                {" Research Center for Digital Innovation. Kenya's sovereign root anchor and electronic certification service provider. "}
              </p>
              <div className="flex flex-col gap-1 text-xs font-mono text-[#4edea3] mt-2">
                <span className="">
                  CAK License: TL/E-CSP 00014
                </span>
                <span className="text-[#9cb2a8]">
                  ISO/IEC 27001:2022 Certified
                </span>
                <span className="text-[#9cb2a8]">
                  ODPC Registered Controller
                </span>
              </div>
            </div>
            {/* Col 2: Practices & Services */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-[#b5ccc2]">
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="services-pki" href="/services/digital-trust-pki/">
                    {"PKI & Sovereign Identity"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    Enterprise Cybersecurity
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="services-digital-health" href="/services/digital-health-governance/">
                    Digital Health Architecture
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="services-ai-data" href="/services/data-analytics-ai/">
                    {"AI & Data Engineering"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="services-cloud" href="/services/digital-cloud-engineering/">
                    {"Cloud & Sovereign Infra"}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 3: Sovereign Products */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Sovereign Products
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-[#b5ccc2]">
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="products-certysign" href="/products/certysign/">
                    {"CertySign (eIDAS & CAK)"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="products-elano" href="/products/elano/">
                    Elano Identity Ledger
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="products-prezio" href="/products/prezio/">
                    Prezio Audit Gateway
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="ca-repository" href="/trust/">
                    {"National Root CRL & OCSP"}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 4: Academy & Programs */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                {"Academy & Programs"}
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-[#b5ccc2]">
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="academy" href="/academy/executive-briefings/">
                    Executive Cyber Academy
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="academy-fellowship" href="/academy/">
                    Digital Innovation Fellowship
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="academy-certifications" href="/academy/digital-trust-cyber/">
                    Applied Cryptography Certs
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="research-publications" href="/insights/">
                    Technical Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 5: HQ & Trust */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                {"Trust Center & HQ"}
              </span>
              <div className="text-xs text-[#b5ccc2] flex flex-col gap-1 mb-2">
                <span className="font-bold text-white">
                  RCFI Kenya HQ
                </span>
                <span className="">
                  5th Floor, Hifadhi House
                </span>
                <span className="">
                  Along ICD Road, Nairobi, Kenya
                </span>
                <span className="text-[#4edea3] font-mono mt-1">
                  contact@rcfi.go.ke
                </span>
              </div>
              <ul className="flex flex-col gap-2 text-xs text-[#b5ccc2]">
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="trust-center" href="/trust/">
                    {"Compliance & Accreditations"}
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors" data-path="verify-document" href="/verify/">
                    Real-time Signature Verifier
                  </Link>
                </li>
                <li className="">
                  <Link className="hover:text-[#4edea3] transition-colors text-white font-semibold" data-path="privacy-policy" href="/privacy/">
                    Data Protection Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Copyright */}
          <div className="mt-14 pt-6 border-t border-[#0b4a34] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9cb2a8]">
            <p className="">
              © 2026 Research Center for Digital Innovation (RCFI Kenya). All Sovereign Rights Reserved.
            </p>
            <div className="flex items-center gap-6 font-mono text-[11px]">
              <Link className="hover:text-white transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Framework
              </Link>
              <Link className="hover:text-white transition-colors" data-path="terms" href="/terms/">
                CPS Terms
              </Link>
              <Link className="hover:text-white transition-colors" data-path="ca-repository" href="/trust/">
                Root CA Certificate
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
