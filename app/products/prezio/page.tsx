import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/products-prezio/page.css";
import "@/styles/pages/products-prezio/late.css";

export const metadata: Metadata = { title: "Prezio — Workflow & Approval Automation | RCFI" };

export default function ProductsPrezioPage() {
  return (
    <div className="rcfi-products-prezio" style={{ display: "contents" }}>
      {/* 1. HEADER & PERSISTENT UTILITY BAR */}
      <header className="fixed top-0 w-full z-50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
        {/* Pine Utility Bar (#0b4a34) */}
        <div className="w-full bg-[#0b4a34] text-white text-[11px] font-medium h-10 px-4 sm:px-8 border-b border-secondary/20">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <span className="flex items-center gap-1.5 text-secondary-fixed">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                {" ISO 27001 Certified "}
              </span>
              <span className="text-white/40 hidden sm:inline">
                |
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" CAK Licensed ECSP (TL/E-CSP 00014) "}
              </span>
              <span className="text-white/40 hidden sm:inline">
                |
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" Kenya DPA Compliant "}
              </span>
            </div>
            <div className="flex items-center gap-5 shrink-0 pl-3">
              <a className="hidden md:flex items-center gap-1.5 text-white/90 hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                <span className="material-symbols-outlined text-[13px]">
                  phone
                </span>
                {" +254 (0) 20 283 9200 "}
              </a>
              <a className="flex items-center gap-1.5 text-white hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
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
            <Link className="flex items-center gap-3 shrink-0" data-path="home" href="/">
              <img alt="RCFI - Reprodrive Center for Innovation Limited" className="h-8 md:h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-primary text-base leading-none">
                  RCFI
                </span>
                {" "}
                <span className="text-[10px] text-on-surface-variant leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </Link>
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
              {/* Products with Prezio active indicator */}
              <div className="relative flex items-center h-full">
                <Link aria-current="page" className="text-primary font-bold text-sm relative h-full flex items-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" data-path="prezio" href="/products/prezio/">
                  {" Products "}
                  <span className="ml-1 text-[11px] font-semibold text-secondary px-1.5 py-0.5 bg-secondary/10 rounded">
                    Prezio
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
              <Link className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary/5 font-semibold text-xs transition-colors" data-path="certysign" href="/verify/">
                <span className="material-symbols-outlined text-[15px]">
                  verified_user
                </span>
                {" Verify a Document "}
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0b4a34] text-white font-semibold text-xs md:text-sm hover:bg-primary transition-colors shadow-sm" data-path="book-a-meeting" href="#demo-modal" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                {" Book a Meeting "}
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[120px] bg-surface">
        {/* 2. HERO SECTION */}
        <section className="relative w-full bg-primary text-on-primary overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-secondary/20">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_70%_50%_at_75%_25%,#006c49,transparent_70%)]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          {/* Technical Grid Overlay */}
          {" "}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {" "}
            <defs>
              {" "}
              <pattern height="40" id="hero-pattern-prezio" patternUnits="userSpaceOnUse" width="40">
                {" "}
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                {" "}
              </pattern>
              {" "}
            </defs>
            {" "}
            <rect fill="url(#hero-pattern-prezio)" height="100%" width="100%" />
            {" "}
          </svg>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
            {/* Eyebrow / kicker */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-secondary-fixed font-semibold">
                {"// PRODUCTS / BUSINESS OPERATIONS & WORKFLOW PLATFORM"}
              </span>
              <span className="text-white/40">
                ·
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container text-secondary-fixed text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                {" INTEGRATED WITH CERTYSIGN "}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headline, Copy & CTAs */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] text-white">
                  {" Approvals that don’t wait for follow-ups. "}
                </h1>
                <p className="text-base sm:text-lg text-on-primary-container max-w-xl leading-relaxed">
                  {" Prezio routes every request to the right person, chases it so you don’t have to, and shows you exactly where work stands — across procurement, HR, finance, and operations. "}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-all shadow-lg hover:-translate-y-0.5" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    <span>
                      Book a Demo
                    </span>
                  </button>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-secondary-fixed/30 bg-primary-container/40 text-on-primary font-semibold text-sm hover:bg-primary-container transition-all backdrop-blur-sm" href="#simulator">
                    <span>
                      Try Workflow Simulator
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
                {/* Canonical Proof Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-on-primary-container">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      verified
                    </span>
                    {" ISO 27001 Certified Security"}
                  </span>
                  <span className="text-white/30">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      shield
                    </span>
                    {" Enterprise DPA Ready"}
                  </span>
                  <span className="text-white/30">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[15px]">
                      bolt
                    </span>
                    {" Instant Routing Engine"}
                  </span>
                </div>
              </div>
              {/* Right Column: Live Interactive Simulated Prezio Operations Dashboard */}
              <div className="lg:col-span-6">
                <div className="bg-[#0b281d] border border-secondary/40 rounded-2xl p-4 sm:p-6 shadow-2xl relative">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between border-b border-secondary/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 font-mono-code text-[11px] text-secondary-fixed">
                        app.prezio.rcfi.co.ke // live-node
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary/30 text-secondary-fixed font-mono-code text-[10px] font-semibold">
                      LIVE WORKFLOW #PR-2026-089
                    </span>
                  </div>
                  {/* Main Card Surface */}
                  <div className="bg-white rounded-xl p-5 text-on-surface shadow-inner border border-slate-200">
                    <div className="flex items-start justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-mono-code uppercase tracking-wider text-secondary font-bold">
                          AUTOMATED WORKFLOW
                        </span>
                        <h3 className="text-lg font-bold text-primary mt-0.5">
                          Procurement Approval: ICT Infrastructure Upgrade
                        </h3>
                        <p className="text-xs text-on-surface-variant font-medium">
                          Capex Infrastructure Expansion • Department of ICT • Value: KES 4,850,000
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-secondary-fixed text-on-secondary-fixed shrink-0">
                        {" SLA: On Target "}
                      </span>
                    </div>
                    {/* 4 Step Pipeline Inside Dashboard */}
                    <div className="space-y-3 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                      {/* Step 1 */}
                      <div className="relative flex items-center justify-between pl-10 text-xs">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          <span className="material-symbols-outlined text-[15px]">
                            check
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            1. Request Submitted
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Authored by David Ochieng • 09:15 AM
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold">
                          Completed
                        </span>
                      </div>
                      {/* Step 2 */}
                      <div className="relative flex items-center justify-between pl-10 text-xs">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          <span className="material-symbols-outlined text-[15px]">
                            check
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            2. Finance Review
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {"Audited & Approved by Sarah Mwangi • 10:40 AM"}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold">
                          Approved
                        </span>
                      </div>
                      {/* Step 3 */}
                      <div className="relative flex items-center justify-between pl-10 text-xs">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold animate-pulse shadow-sm">
                          <span className="material-symbols-outlined text-[15px]">
                            autorenew
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            3. Director e-Signature (CertySign HSM)
                          </div>
                          <div className="text-[11px] text-secondary font-semibold">
                            Pending Executive Sign-off • CertySign X.509 Seal
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping" />
                          {" In Progress "}
                        </span>
                      </div>
                      {/* Step 4 */}
                      <div className="relative flex items-center justify-between pl-10 text-xs opacity-60">
                        <div className="absolute left-1.5 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">
                          <span className="material-symbols-outlined text-[14px]">
                            hourglass_empty
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-700">
                            {"4. ERP Disbursement & Archival"}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Automated SAP / Navision journal post
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                          Queued
                        </span>
                      </div>
                    </div>
                    {/* Footer Status */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          lock_clock
                        </span>
                        <span>
                          Automated via RCFI Governance Engine
                        </span>
                      </div>
                      <span className="font-mono-code font-bold text-primary">
                        75% Complete · SLA: 4.2h
                      </span>
                    </div>
                  </div>
                  {/* Floating Metric Callout */}
                  <div className="mt-3 flex items-center justify-between px-2 text-xs text-on-primary-container">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        verified
                      </span>
                      {" Zero manual follow-ups required "}
                    </span>
                    <span className="text-secondary-fixed font-bold">
                      Instant Audit Trail Active
                    </span>
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
                  1,200+
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Active workflows run daily
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
                  4.2 hrs
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Average approval time (down from 7 days)
                </div>
              </div>
              <div className="p-4 rounded-xl bg-primary-container/40 border border-secondary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-code text-[10px] text-secondary-fixed uppercase tracking-wider font-semibold">
                    EFFICIENCY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  82%
                </div>
                <div className="text-xs text-on-primary-container mt-1 font-medium">
                  Reduction in turnaround time
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
        {/* 3. INTERACTIVE ELEMENT 1 — MINI WORKFLOW BUILDER (Interactive Simulator) */}
        <section className="py-20 lg:py-24 bg-surface" id="simulator">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // INTERACTIVE WORKFLOW BUILDER • EXPERIENCE THE ENGINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2 mb-3">
                {" Build an approval workflow in 30 seconds. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {" Configure triggers, reviewers, and cryptographic sign-offs. Watch how Prezio routes requests automatically with zero WhatsApp nudges. "}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Step Selector Controls (Draggable / Selectable Workflow Steps) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-outline-variant/60 shadow-md space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      tune
                    </span>
                    {" Workflow Configuration "}
                  </span>
                  <span className="text-[11px] font-mono-code bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded">
                    Interactive Canvas
                  </span>
                </div>
                {/* Configuration 1: Request Type */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    Step 1: Request Initiation
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button className="flow-trigger-btn active p-2.5 rounded-lg border-2 border-secondary bg-emerald-50 text-secondary font-semibold text-center transition-all" data-rcfi-onclick="setFlowTrigger('procurement', 'Purchase Order KES 3.2M', this)">
                      <span className="material-symbols-outlined text-[20px] block mx-auto mb-1">
                        shopping_cart
                      </span>
                      {" Procurement "}
                    </button>
                    <button className="flow-trigger-btn p-2.5 rounded-lg border border-outline-variant/60 hover:bg-slate-50 text-slate-700 font-medium text-center transition-all" data-rcfi-onclick="setFlowTrigger('leave', 'Executive Annual Leave (12 Days)', this)">
                      <span className="material-symbols-outlined text-[20px] block mx-auto mb-1">
                        event_available
                      </span>
                      {" Leave Request "}
                    </button>
                    <button className="flow-trigger-btn p-2.5 rounded-lg border border-outline-variant/60 hover:bg-slate-50 text-slate-700 font-medium text-center transition-all" data-rcfi-onclick="setFlowTrigger('policy', 'Q2 ISO Security Policy Sign-Off', this)">
                      <span className="material-symbols-outlined text-[20px] block mx-auto mb-1">
                        policy
                      </span>
                      {" Policy Sign-Off "}
                    </button>
                  </div>
                </div>
                {/* Configuration 2: Intelligent Routing Condition */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    {"Step 2: Intelligent Routing & Escalation"}
                  </label>
                  <div className="space-y-2">
                    <select className="w-full bg-surface-container-low border border-outline-variant/60 rounded-lg p-2.5 text-xs text-on-surface font-medium focus:outline-none focus:border-secondary" id="routing-condition-select" data-rcfi-onchange="updateRoutingCondition(this.value)">
                      <option value="Finance Auditor (Auto-escalate after 24h)">
                        Finance Auditor (Auto-escalate after 24h)
                      </option>
                      <option value="Department Head + Compliance Reviewer">
                        Department Head + Compliance Reviewer
                      </option>
                      <option value={"Dual Tier (Procurement Committee > KES 1M)"}>
                        {"Dual Tier (Procurement Committee > KES 1M)"}
                      </option>
                    </select>
                    <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[14px]">
                        auto_mode
                      </span>
                      {" Auto-nudge via email & WhatsApp if unreviewed after 6 hours. "}
                    </p>
                  </div>
                </div>
                {/* Configuration 3: Final Cryptographic Sign-Off */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    Step 3: Cryptographic Approval Seal
                  </label>
                  <div className="p-3 rounded-lg bg-surface-container-low border border-secondary/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        verified_user
                      </span>
                      <div>
                        <div className="text-xs font-bold text-primary">
                          CertySign X.509 Integration
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          CAK ECSP Qualified Legal Non-Repudiation
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-mono-code text-[10px] font-bold">
                      Enabled
                    </span>
                  </div>
                </div>
                <button className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2" id="btn-simulate-run" data-rcfi-onclick="simulateWorkflowRun()">
                  <span className="material-symbols-outlined text-[18px]">
                    play_circle
                  </span>
                  <span>
                    Simulate Request Run
                  </span>
                </button>
              </div>
              {/* Interactive Simulator Display Output Canvas */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider font-mono-code">
                      PREZIO WORKFLOW ENGINE SIMULATOR
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code text-slate-500" id="sim-timestamp">
                    Ready for Simulation
                  </span>
                </div>
                {/* Simulated Workflow Canvas Pipeline */}
                <div className="space-y-4">
                  {/* Node 1 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-low/60 flex items-center justify-between transition-all" id="sim-node-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold" id="sim-node-1-icon">
                        <span className="material-symbols-outlined text-[20px]">
                          post_add
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary" id="sim-node-1-title">
                          Step 1: Request Submitted
                        </div>
                        <div className="text-[11px] text-on-surface-variant" id="sim-node-1-desc">
                          Purchase Order KES 3.2M — Initiated by Dept. Lead
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700" id="sim-node-1-status">
                      Waiting
                    </span>
                  </div>
                  {/* Routing Arrow Indicator */}
                  <div className="flex justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      south
                    </span>
                  </div>
                  {/* Node 2 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-low/60 flex items-center justify-between transition-all" id="sim-node-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center font-bold" id="sim-node-2-icon">
                        <span className="material-symbols-outlined text-[20px]">
                          alt_route
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary" id="sim-node-2-title">
                          Step 2: Intelligent Routing
                        </div>
                        <div className="text-[11px] text-on-surface-variant" id="sim-node-2-desc">
                          Assigned to: Finance Auditor (Auto-escalate after 24h)
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700" id="sim-node-2-status">
                      Queued
                    </span>
                  </div>
                  {/* Routing Arrow Indicator */}
                  <div className="flex justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      south
                    </span>
                  </div>
                  {/* Node 3 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-low/60 flex items-center justify-between transition-all" id="sim-node-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center font-bold" id="sim-node-3-icon">
                        <span className="material-symbols-outlined text-[20px]">
                          workspace_premium
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary" id="sim-node-3-title">
                          Step 3: CertySign Cryptographic Approval
                        </div>
                        <div className="text-[11px] text-on-surface-variant" id="sim-node-3-desc">
                          {"Executive sign-off with SHA-256 seal & Kenyan Evidence Act §106B hash"}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700" id="sim-node-3-status">
                      Queued
                    </span>
                  </div>
                </div>
                {/* Interactive Live Log Output */}
                <div className="mt-6 pt-4 border-t border-slate-100 bg-[#071d14] rounded-xl p-4 text-white text-xs font-mono-code">
                  <div className="flex items-center justify-between text-[10px] text-secondary-fixed uppercase mb-2">
                    <span>
                      // REAL-TIME AUDIT LOG
                    </span>
                    <span id="sim-timer">
                      00:00:00
                    </span>
                  </div>
                  <div className="space-y-1 text-white/80" id="sim-log">
                    <div className="text-white/40">
                      {"> Engine idle. Click \"Simulate Request Run\" to test routing and auto-approval pipeline."}
                    </div>
                  </div>
                </div>
                {/* Instant completion badge (shown after run) */}
                <div className="hidden mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between" id="sim-complete-badge">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                      check_circle
                    </span>
                    <span>
                      {"Signed & Archived in 14 minutes with zero manual nudges!"}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-mono-code text-[10px] font-bold">
                    Audit Complete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4. THE NEED ("SNAP" Problem & Contrast) */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // THE NEED FOR OPERATIONAL INTEGRITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2 mb-4">
                {" The shadow system is costing you weeks. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {" Every organization has a shadow system: the WhatsApp nudge, the \"gentle reminder\" email, the approval stuck in someone’s inbox since Tuesday. That shadow system has no audit trail, no SLA, and no memory. Prezio replaces it. "}
              </p>
            </div>
            {/* 3 Structured Contrast Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contrast Card 1 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      Conventional Flaw
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      chat_bubble_outline
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    The WhatsApp Nudge
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" Unofficial chat approvals, lost screenshots, ambiguous \"noted\" replies, and zero legal admissibility when auditors review capital expenditures. "}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    Prezio Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    Structured digital requests with immutable audit logs and automated multi-channel WhatsApp/email alert notifications.
                  </p>
                </div>
              </div>
              {/* Contrast Card 2 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      Conventional Flaw
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      mark_email_unread
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    The Inbox Black Hole
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" Critical requisitions buried beneath 500 unread emails, lack of transparency on who is stalling, and deals frozen for weeks waiting on a single sign-off. "}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    Prezio Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    Dynamic bottleneck tracking, automated 24h escalation, and live institutional SLA dashboards visible to department heads.
                  </p>
                </div>
              </div>
              {/* Contrast Card 3 */}
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-error/10 text-error font-mono-code text-xs font-bold uppercase">
                      Conventional Flaw
                    </span>
                    <span className="material-symbols-outlined text-error text-[22px]">
                      report_problem
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    The Compliance Blindspot
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {" Unsigned expense claims, undocumented management approvals, and last-minute panic during annual statutory audits or donor reviews. "}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-secondary/20 bg-emerald-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="font-mono-code text-[11px] text-secondary font-bold uppercase tracking-wider block mb-1">
                    Prezio Standard
                  </span>
                  <p className="text-xs text-primary font-semibold">
                    Cryptographic audit trails, direct CertySign integration, and one-click statutory compliance export dossiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5. HOW IT WORKS (3-Step Pipeline) */}
        <section className="py-20 lg:py-24 bg-surface-container-low border-b border-outline-variant/30" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // HOW IT WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2 mb-3">
                {" From submission to completion without friction. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {" Prezio intelligently routes every request through the right people, helping your teams move faster while maintaining complete institutional visibility. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 01 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-secondary-fixed font-mono-code text-xs font-bold">
                      STEP 01
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        post_add
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Submit Request
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Requests, approvals, or documents in a few clicks, from any device. Pre-configured templates for procurement, HR, CAPEX, and policy sign-offs. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    flash_on
                  </span>
                  <span>
                    Pre-configured smart templates
                  </span>
                </div>
              </div>
              {/* Step 02 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-secondary-fixed font-mono-code text-xs font-bold">
                      STEP 02
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        alt_route
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Automatic Routing
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Prezio applies your rules: budget thresholds, multi-tier delegations, escalations, parallel or sequential approvers without manual oversight. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    schema
                  </span>
                  <span>
                    {"Delegation & conditional matrices"}
                  </span>
                </div>
              </div>
              {/* Step 03 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-secondary-fixed font-mono-code text-xs font-bold">
                      STEP 03
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        speed
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Complete Faster
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Real-time status, automatic reminders, full audit trail on every step with legally binding CertySign signatures and instant cloud archival. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    task_alt
                  </span>
                  <span>
                    Audit-ready cryptographic logs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6. CAPABILITIES (4 Core Pillars) */}
        <section className="w-full bg-surface py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                // ENTERPRISE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2 mb-3">
                {" Engineered for institutional scale and precision. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {" Four powerful architectural pillars that transform disconnected administrative bottlenecks into a synchronous, auditable operational backbone. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1: Workflow Automation */}
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      sync_saved_locally
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Workflow Automation
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {" Design once, run forever — leave requests, procurement, policy sign-offs, and expense approvals triggered automatically with zero custom code. "}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Multi-tier approval thresholds"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Parallel & sequential pipelines"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" 24h escalation triggers"}
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[15px]">
                    bolt
                  </span>
                  <span>
                    82% turnaround acceleration
                  </span>
                </div>
              </div>
              {/* Pillar 2: Document Management */}
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      folder_shared
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Document Management
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {" Policies, contracts, and SOPs versioned and permissioned in one secure place — with CertySign integration for legally binding qualified sign-off. "}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Role-based repository access"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" CertySign HSM integration"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Automated version history"}
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[15px]">
                    verified
                  </span>
                  <span>
                    CAK ECSP certified signatures
                  </span>
                </div>
              </div>
              {/* Pillar 3: Analytics & Bottleneck Detection */}
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      query_stats
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {"Analytics & Bottlenecks"}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {" Bottleneck detection, cycle-time dashboards, and workload views — pinpoint precisely which department or manager slows operations down. "}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Live cycle time telemetry"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Manager workload balance"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Statutory SLA alerts"}
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[15px]">
                    insights
                  </span>
                  <span>
                    100% operational visibility
                  </span>
                </div>
              </div>
              {/* Pillar 4: Integrations & API */}
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/60 hover:border-secondary transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      hub
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {"Integrations & API"}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {" Connects smoothly to email, calendars, ERPs, and business systems via REST API and Webhooks for a completely unified connected workspace. "}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Webhooks & RESTful APIs"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" Microsoft 365 & Google Workspace"}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        check_circle
                      </span>
                      {" SAP & QuickBooks connector"}
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[15px]">
                    api
                  </span>
                  <span>
                    {"REST & Webhooks native"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 7. INTERACTIVE ELEMENT 2 — BOTTLENECK CALCULATOR */}
        <section className="w-full bg-surface-container-low py-20 lg:py-24 border-b border-outline-variant/30" id="bottleneck-calculator">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-bold">
                {"// ROI & EFFICIENCY MODEL"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mt-2 mb-3">
                {" Calculate the hidden cost of approval delays. "}
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant">
                {" Discover how many billable work hours and operational millions your organization loses every quarter to manual chasing. "}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Box */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant/60 shadow-sm space-y-6">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-approvals">
                      Approvals per week
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-approvals">
                      60
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-approvals" max="500" min="10" data-rcfi-oninput="calculateBottleneckROI()" step="10" type="range" defaultValue="60" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      10 approvals/wk
                    </span>
                    <span>
                      500 approvals/wk
                    </span>
                  </div>
                </div>
                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-delay">
                      Average days waiting per approval
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-delay">
                      5 days
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-delay" max="14" min="1" data-rcfi-oninput="calculateBottleneckROI()" step="1" type="range" defaultValue="5" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      1 day
                    </span>
                    <span>
                      14 days
                    </span>
                  </div>
                </div>
                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-on-surface" htmlFor="range-rate">
                      Average employee hourly rate (KES)
                    </label>
                    <span className="font-mono-code text-base font-bold text-primary px-2.5 py-0.5 rounded bg-surface-container" id="val-rate">
                      KES 1,500
                    </span>
                  </div>
                  <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" id="range-rate" max="5000" min="500" data-rcfi-oninput="calculateBottleneckROI()" step="100" type="range" defaultValue="1500" />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>
                      KES 500/hr
                    </span>
                    <span>
                      KES 5,000/hr
                    </span>
                  </div>
                </div>
              </div>
              {/* Dynamic Output Card */}
              <div className="lg:col-span-6 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 border border-secondary/30 shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />
                <span className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold block mb-4">
                  // ANNUAL IMPACT CALCULATION
                </span>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-primary-container/60 border border-secondary/20">
                      <span className="text-xs text-on-primary-container block mb-1">
                        Annual Hours Lost to Chasing
                      </span>
                      <span className="text-3xl font-extrabold text-white" id="stat-calc-hours">
                        3,120 hrs
                      </span>
                      <span className="text-[11px] text-secondary-fixed block mt-1">
                        {"Wasted in email & chat nudges"}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-primary-container/60 border border-secondary/20">
                      <span className="text-xs text-on-primary-container block mb-1">
                        Turnaround Acceleration
                      </span>
                      <span className="text-3xl font-extrabold text-white" id="stat-calc-speed">
                        From 5 days
                      </span>
                      <span className="text-[11px] text-secondary-fixed block mt-1">
                        Down to 4.2 hours
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary-container/80 border border-secondary/40">
                    <span className="text-xs text-on-primary-container block mb-1">
                      Estimated Annual Delay Cost Saved
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-secondary-fixed" id="stat-calc-kes">
                      KES 4,680,000
                    </div>
                    <span className="text-[11px] text-white/70 block mt-1">
                      Direct salary friction saved with Prezio instant routing
                    </span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-bold text-sm hover:bg-secondary-fixed transition-colors shadow-md" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                    <span>
                      Reclaim Your Team's Time with Prezio →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 8. CERTYSIGN & ELANO ECOSYSTEM INTEGRATION */}
        <section className="w-full bg-surface py-20 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary to-[#062418] text-white border border-secondary/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-xs font-mono-code font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                    {" UNIFIED RCFI TRUST ECOSYSTEM "}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {" Powered by CertySign Cryptography. Built for Elano Governance. "}
                  </h2>
                  <p className="text-sm sm:text-base text-tertiary-fixed leading-relaxed">
                    {" Prezio seamlessly embeds CertySign’s CAK-licensed X.509 cryptographic signing directly into every high-value procurement approval, supplier contract, and policy document. Completed operational workflows automatically synchronize into Elano for board-level audits and statutory reporting. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-secondary-fixed font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      {" KICA Cap 411A Legal Admissibility"}
                    </span>
                    <span className="text-white/40">
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      {" Direct Elano Board Pack Sync"}
                    </span>
                    <span className="text-white/40">
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      {" Sovereign HSM Key Escrow"}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Link className="w-full py-3 px-4 rounded-xl bg-white text-primary font-bold text-xs flex items-center justify-between hover:bg-surface-container transition-all" data-path="certysign" href="/products/certysign/">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        draw
                      </span>
                      {" Explore CertySign Integration "}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                  <Link className="w-full py-3 px-4 rounded-xl bg-primary-container/80 text-white font-bold text-xs flex items-center justify-between hover:bg-primary-container transition-all border border-secondary/30" data-path="elano" href="/products/elano/">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                        account_balance
                      </span>
                      {" Explore Elano Board Governance "}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 9. CLOSING CTA BANNER */}
        <section className="w-full bg-[#0b4a34] text-on-primary py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#4edea3,transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary font-mono-code text-xs text-secondary-fixed uppercase tracking-wider font-bold mb-4">
              <span className="material-symbols-outlined text-[15px]">
                verified
              </span>
              {" // ENTERPRISE WORKFLOW TRANSFORMATION "}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
              {" Stop chasing signatures. Start finishing work. "}
            </h2>
            <p className="text-base sm:text-lg text-on-primary-container max-w-xl mt-4 mb-8 leading-relaxed">
              {" Join leading Kenyan enterprises, public institutions, and fast-growing organizations streamlining operations on Prezio. "}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-bold text-base hover:bg-secondary-fixed transition-all shadow-xl hover:-translate-y-0.5" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                <span>
                  Book a Demo
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </button>
              <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base transition-all backdrop-blur-sm border border-white/20" href="mailto:info@rcfi.co.ke">
                <span>
                  Talk to Enterprise Solutions
                </span>
              </a>
            </div>
            <p className="text-xs text-on-primary-container/80 mt-6 flex items-center justify-center gap-4 flex-wrap">
              <span>
                Free 30-day pilot
              </span>
              <span>
                •
              </span>
              <span>
                Dedicated onboarding specialist
              </span>
              <span>
                •
              </span>
              <span>
                Kenya DPA Compliant
              </span>
            </p>
          </div>
        </section>
      </main>
      {/* 10. PERSISTENT CORPORATE FOOTER */}
      <footer className="w-full bg-[#051a11] text-on-primary pt-16 pb-12 border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-secondary/20">
            {/* Col 1: Brand & Headquarters */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    hub
                  </span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  RCFI
                </span>
              </div>
              <p className="text-xs text-on-primary-container font-medium">
                Reprodrive Center for Innovation Limited
              </p>
              <p className="text-xs text-on-primary-container leading-relaxed">
                {" 5th Floor, Hifadhi House,"}
                <br />
                {" Along ICD Road,"}
                <br />
                {" Nairobi, Kenya "}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-secondary-fixed pt-1">
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>
                <a className="text-secondary-fixed hover:underline" href="mailto:info@rcfi.co.ke">
                  info@rcfi.co.ke
                </a>
              </div>
            </div>
            {/* Col 2: Products */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                // PRODUCTS
              </h4>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="text-xs text-white font-semibold flex items-center gap-1.5" data-path="prezio" href="/products/prezio/">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                {" Prezio "}
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
            </div>
            {/* Col 3: Company */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                // COMPANY
              </h4>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="about" href="/about/">
                About Us
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="careers" href="/insights/">
                Updates
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="text-xs text-on-primary-container hover:text-white transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
              <a className="text-xs text-secondary-fixed hover:underline font-semibold" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" data-rcfi-onclick="document.getElementById('demo-modal').classList.remove('hidden')" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </div>
            {/* Col 4: Compliance Seals */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-secondary-fixed font-bold mb-1">
                // COMPLIANCE SEALS
              </h4>
              <div className="p-3 rounded-lg bg-primary-container/60 border border-secondary/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                  verified_user
                </span>
                <div>
                  <div className="text-xs font-bold text-white">
                    ISO 27001 Certified
                  </div>
                  <div className="text-[10px] text-tertiary-fixed-dim">
                    Information Security Standard
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary-container/60 border border-secondary/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                  gavel
                </span>
                <div>
                  <div className="text-xs font-bold text-white">
                    CAK Licensed
                  </div>
                  <div className="text-[10px] text-tertiary-fixed-dim">
                    Electronic Cert. Service Provider
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary-container/60 border border-secondary/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                  security
                </span>
                <div>
                  <div className="text-xs font-bold text-white">
                    Kenya DPA Compliant
                  </div>
                  <div className="text-[10px] text-tertiary-fixed-dim">
                    Data Protection Act, 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright Bar */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-primary-container">
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
              <p>
                © 2026 Reprodrive Center for Innovation Limited (RCFI). All rights reserved.
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
              <Link className="hover:text-white transition-colors" href="/insights/">
                Security Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* MODAL: BOOK A DEMO DIALOG */}
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4" id="demo-modal">
        <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-slate-200">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-primary" data-rcfi-onclick="document.getElementById('demo-modal').classList.add('hidden')">
            {" "}
            <span className="material-symbols-outlined">
              close
            </span>
            {" "}
          </button>
          <div className="mb-5">
            <span className="font-mono-code text-xs text-secondary font-bold uppercase tracking-wider">
              // PREZIO ENTERPRISE WORKFLOW DEMO
            </span>
            <h3 className="text-2xl font-bold text-primary mt-1">
              Book an Operations Demo
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Experience how Prezio automates approvals, workflows, and documents across your enterprise.
            </p>
          </div>
          <form className="space-y-3.5" data-rcfi-onsubmit="event.preventDefault(); alert('Demo request submitted successfully. An RCFI Prezio specialist will contact you within 4 business hours.'); document.getElementById('demo-modal').classList.add('hidden');">
            <div>
              <label className="block text-xs font-semibold text-primary mb-1">
                Full Name
              </label>
              <input className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm focus:outline-none focus:bg-white border border-outline-variant/60" placeholder="e.g. David Ochieng" required type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-primary mb-1">
                Work Email
              </label>
              <input className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm focus:outline-none focus:bg-white border border-outline-variant/60" placeholder="name@company.co.ke" required type="email" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Organization Size
                </label>
                <select className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm focus:outline-none focus:bg-white border border-outline-variant/60">
                  <option>
                    10 - 50 staff
                  </option>
                  <option>
                    51 - 250 staff
                  </option>
                  <option>
                    250+ enterprise
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Primary Use Case
                </label>
                <select className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm focus:outline-none focus:bg-white border border-outline-variant/60">
                  <option>
                    {"Procurement & CAPEX"}
                  </option>
                  <option>
                    {"HR & Leave Approvals"}
                  </option>
                  <option>
                    {"Policy & Legal Sign-Off"}
                  </option>
                  <option>
                    Multi-department Ops
                  </option>
                </select>
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-container transition-all" type="submit">
                {" Confirm & Schedule Demo "}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              Free 30-day sandbox pilot included with every demonstration.
            </p>
          </form>
        </div>
      </div>
      {/* INTERACTIVE LOGIC: MINI WORKFLOW SIMULATOR & BOTTLENECK CALCULATOR */}
      {" "}
      <PageScripts scripts={scripts} />
    </div>
  );
}
