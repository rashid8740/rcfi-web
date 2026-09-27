import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/careers/page.css";

export const metadata: Metadata = { title: "Careers & Attachment | RCFI Technology" };

export default function CareersPage() {
  return (
    <div className="rcfi-careers" style={{ display: "contents" }}>
      {/* TOP COMPLIANCE BAR */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-[#042116] text-white/90 border-b border-white/10 h-10 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between text-xs tracking-wide">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <span className="text-white/30 hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  CAK Licensed ECSP
                </span>
              </div>
              <span className="text-white/30 hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/80">
              <span className="material-symbols-outlined text-[15px] text-secondary-fixed">
                mail
              </span>
              {" "}
              <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        {/* MAIN NAVBAR */}
        <div className="h-20 bg-surface-container-lowest border-b border-surface-container">
          <div className="max-w-7xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link className="flex items-center gap-3 shrink-0" href="/">
              <img alt="RCFI - Reprodrive Center for Innovation Limited" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="hidden xl:flex flex-col border-l border-outline-variant pl-3">
                <span className="text-base text-primary tracking-tight font-bold leading-none">
                  RCFI
                </span>
                {" "}
                <span className="text-[11px] text-on-surface-variant font-medium leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </Link>
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center h-full gap-7 text-[14px] font-medium" data-active-classes="text-primary font-bold border-b-2 border-secondary">
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">
                Home
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="certysign" href="/products/certysign/">
                CertySign
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="elano" href="/products/elano/">
                Elano
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="prezio" href="/products/prezio/">
                Prezio
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="health-security" href="/health-security/">
                Health Security
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about/">
                About
              </Link>
              <Link aria-current="page" className="h-full flex items-center text-primary font-semibold border-b-2 border-secondary" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-all shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[19px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full pt-[120px] bg-surface min-h-screen">
        {/* 1. POLISHED DEEP PINE HERO BANNER */}
        <section className="relative bg-gradient-to-br from-[#042116] via-[#062b1e] to-[#0b3d2b] text-white overflow-hidden hero-grid-pattern border-b border-primary-container/60">
          {/* Glow Gradients */}
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-fixed/10 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 lg:py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Title & Subtitle */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-5">
                {/* Pill / Chip */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-secondary-fixed text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  <span>
                    {"Talent Acquisition & Institutional Placement"}
                  </span>
                </div>
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                  {" Attachment & Internship Programme "}
                </h1>
                {/* Subtitle */}
                <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
                  {" Submit your expression of interest — "}
                  <span className="font-semibold text-white">
                    no documents required at this stage
                  </span>
                  {". Shortlisted applicants receive a secure portal invitation by email and SMS. "}
                </p>
                {/* Quick Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      bolt
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      Phase 1: Zero uploads friction
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      sms
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {"SMS & Email alert dispatch"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      verified_user
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {"CAK & ISO data safeguards"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Right: Already Shortlisted Callout Card */}
              <div className="lg:col-span-5 flex flex-col w-full">
                <div className="p-7 rounded-2xl bg-[#031d13]/90 border border-emerald-500/30 text-white shadow-2xl relative overflow-hidden backdrop-blur-xl flex flex-col justify-between min-h-[260px]">
                  {/* Watermark Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-10 text-white select-none pointer-events-none">
                    <span className="material-symbols-outlined text-[160px]">
                      token
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-secondary-fixed text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                        {" Port 443 Encrypted "}
                      </span>
                      <span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]">
                        security
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                      {" Already Shortlisted? "}
                    </h2>
                    <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                      {" Access your candidate cockpit, upload accredited academic credentials, and verify identity token credentials directly through our audited portal. "}
                    </p>
                  </div>
                  <div className="pt-6 relative z-10">
                    <a className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-primary font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-950/50 group" href="#">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">
                          lock_open
                        </span>
                        {" Open Secure Applicant Portal "}
                      </span>
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2. TWO-PHASE INTAKE ARCHITECTURE */}
        <section className="w-full bg-surface-container-low/70 py-16 border-b border-surface-container">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary font-bold">
                  Standard Operating Procedure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mt-1">
                  {" Two-Phase Intake Architecture "}
                </h2>
              </div>
              <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
                {" Engineered according to Kenya Data Protection Act 2019 data minimization principles to protect student privacy prior to shortlisting. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 01 */}
              <div className="bg-surface-container-lowest p-7 rounded-2xl border border-secondary/20 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-lg text-secondary font-extrabold">
                      {" 01 "}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-secondary/10 font-bold text-[11px] text-secondary">
                      Current Stage
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg text-primary font-bold mb-2">
                    {" Phase 1 — Expression of Interest "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Complete the fields below. Do not upload documents here — document submission opens in the secure portal after Admin shortlists your application. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  <span>
                    No document uploads required now
                  </span>
                </div>
              </div>
              {/* Card 02 */}
              <div className="bg-surface-container-lowest p-7 rounded-2xl border border-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-lg text-primary font-extrabold">
                      {" 02 "}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-[11px] text-on-surface-variant font-medium">
                      Post-Selection
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg text-primary font-bold mb-2">
                    {" Phase 2 — Documents (after shortlisting) "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Mandatory uploads: application letter, CV, national ID/passport, student ID, official introduction letter, attachment request letter, and valid student insurance certificate. "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    badge
                  </span>
                  <span>
                    Encrypted repository submission
                  </span>
                </div>
              </div>
              {/* Card 03 */}
              <div className="bg-surface-container-lowest p-7 rounded-2xl border border-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-lg text-primary font-extrabold">
                      {" 03 "}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-[11px] text-on-surface-variant font-medium">
                      Deployment
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg text-primary font-bold mb-2">
                    {" Department Placement "}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {" Choose the department you want to join. After shortlisting and offer, your portal account is placed in that department (Technology, Marketing, Engineering, and so on). "}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    hub
                  </span>
                  <span>
                    Direct mentor assignment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3. MAIN APPLICATION SECTION */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Explanatory Sticky Card */}
            <div className="lg:col-span-4 flex flex-col space-y-6 lg:sticky lg:top-36">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm">
                <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[24px]">
                    assignment_turned_in
                  </span>
                </span>
                <h3 className="text-xl text-primary font-bold">
                  {" Expression of Interest "}
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {" Fill out your accurate academic details. Our vetting committee conducts rolling assessments every 14 business days. "}
                </p>
                <div className="mt-5 pt-5 border-t border-surface-container space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm text-on-surface leading-snug">
                      Official National ID or Passport validated via SMS
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm text-on-surface leading-snug">
                      {"Valid for tertiary accredited colleges & universities"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm text-on-surface leading-snug">
                      Industrial mentors assigned upon acceptance
                    </span>
                  </div>
                </div>
                {/* In-card Verification Note */}
                <div className="mt-6 p-3.5 rounded-xl bg-surface-container text-on-surface flex items-start gap-2.5 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    info
                  </span>
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    {" Need official inquiries? Contact "}
                    <strong className="text-primary font-semibold">
                      careers@rcfi.co.ke
                    </strong>
                    {" "}
                  </span>
                </div>
              </div>
              {/* Photo element: Modern Enterprise Tech Environment */}
              <div className="p-3.5 rounded-2xl bg-surface-container border border-surface-container-high shadow-sm overflow-hidden flex flex-col">
                <img alt="RCFI Engineering Lab Nairobi workspace with engineers" className="w-full h-44 object-cover rounded-xl mb-3 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdVOVeXKJOrfKKHJTygYeLxSGGP3maP6fSiSPLbjWLh77v4Njc81xJBdY8Z4FIvWlQmJBQ1lKcVufsTdzdw47mxu0T_nQRRY0H7jjr-0Xr0EetECPH2I86DEr9FyJqkM95I-nBrzqKyNdzX4NeWtFPFmGvMW2JYkbrjdDaZpceMJ1fXwGFUWgUr6pWTjXtRKhZvYPua3LKKwOyOd09wCQ1rvQXyfCpKC-AtzYBlf742arxv3iXHvs_" />
                <span className="text-xs font-bold text-primary px-1">
                  RCFI Engineering Lab — Nairobi
                </span>
                <span className="text-[11px] text-on-surface-variant px-1 mt-0.5">
                  Where innovation meets national cryptographic architecture
                </span>
              </div>
            </div>
            {/* Right Form Column */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-2xl border border-surface-container shadow-md">
              <form className="flex flex-col space-y-6" id="eoiForm" data-rcfi-onsubmit={"event.preventDefault(); document.getElementById('submissionNotification').classList.remove('hidden'); window.scrollTo({ top: document.getElementById('submissionNotification').offsetTop - 140, behavior: 'smooth'});"}>
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-container gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      Candidate Details
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                      Fields marked with an asterisk (
                      <span className="text-error font-semibold">
                        *
                      </span>
                      ) are mandatory.
                    </p>
                  </div>
                  <span className="self-start sm:self-center text-xs px-2.5 py-1 rounded-md bg-surface-container text-secondary font-bold tracking-wide">
                    {" Form Ver. 2026.2 "}
                  </span>
                </div>
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="fullName">
                      {" Full Name "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="fullName" placeholder="e.g. Christine Mutiso" required type="text" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="email">
                      {" Email Address "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="email" placeholder="name@university.ac.ke" required type="email" />
                  </div>
                </div>
                {/* Phone Number & Institution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="phone">
                      {" Phone Number (Kenyan Format) "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-xs text-on-surface-variant font-bold border-r border-outline-variant pr-2">
                        +254
                      </span>
                      <input className="h-11 pl-16 pr-3.5 w-full rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="phone" placeholder="712 345 678" required type="tel" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="institution">
                      {" Institution "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="institution" placeholder="e.g. University of Nairobi" required type="text" />
                  </div>
                </div>
                {/* School / Faculty & Course */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="faculty">
                      {" School / Faculty "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="faculty" placeholder={"e.g. School of Computing & Informatics"} required type="text" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="course">
                      {" Course / Programme "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline/70" id="course" placeholder="e.g. BSc. Computer Science" required type="text" />
                  </div>
                </div>
                {/* Year of Study, Duration, Preferred Start Date */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="yearOfStudy">
                      {" Year of Study "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <select className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="yearOfStudy" required defaultValue="">
                      <option disabled value="">
                        Select Year
                      </option>
                      <option value="1">
                        1st Year
                      </option>
                      <option value="2">
                        2nd Year
                      </option>
                      <option value="3">
                        3rd Year
                      </option>
                      <option value="4">
                        4th Year
                      </option>
                      <option value="postgrad">
                        Post-graduate
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="duration">
                      {" Attachment Duration "}
                    </label>
                    <select className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="duration">
                      <option value="3m">
                        3 Months
                      </option>
                      <option value="6m">
                        6 Months
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="startDate">
                      {" Preferred Start Date "}
                    </label>
                    <input className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="startDate" type="date" />
                  </div>
                </div>
                {/* Preferred Department Dropdown */}
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-on-surface" htmlFor="department">
                      {" Preferred Department "}
                      <span className="text-error">
                        *
                      </span>
                      {" "}
                    </label>
                    <span className="text-[11px] text-secondary font-medium">
                      Live quota updated
                    </span>
                  </div>
                  <select className="h-11 px-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="department" required defaultValue="">
                    <option disabled value="">
                      Select target department
                    </option>
                    <option value="tech">
                      {"Technology & Software Engineering"}
                    </option>
                    <option value="cyber">
                      {"Cybersecurity & PKI Systems"}
                    </option>
                    <option value="ux">
                      {"UX/UI Design & Product"}
                    </option>
                    <option value="gov">
                      {"Governance & Compliance"}
                    </option>
                    <option value="mkt">
                      {"Marketing & Business Development"}
                    </option>
                  </select>
                </div>
                {/* Brief Statement of Interest */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface" htmlFor="statement">
                    {" Brief Statement of Interest "}
                  </label>
                  <textarea className="p-3.5 rounded-lg border border-outline-variant bg-white text-on-surface text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none placeholder:text-outline/70 leading-relaxed" id="statement" placeholder="Tell us why you want to join RCFI and what you hope to achieve..." rows={4} defaultValue="" />
                </div>
                {/* Recruitment & Data Policy Notice Box */}
                <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      policy
                    </span>
                    <span>
                      {"Recruitment & Data Policy"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        check
                      </span>
                      <span>
                        Information you submit must be true and complete.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        check
                      </span>
                      <span>
                        RCFI processes your data for recruitment, placement, document verification, and programme administration.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        check
                      </span>
                      <span>
                        Application, consent, and verification records are retained for compliance and future audit.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        check
                      </span>
                      <span>
                        Programme updates are sent by email (and SMS where applicable).
                      </span>
                    </div>
                  </div>
                  {/* Consent Checkbox */}
                  <div className="pt-3 border-t border-surface-container">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input className="mt-0.5 w-4 h-4 text-secondary rounded border-outline-variant focus:ring-secondary" id="policyConsent" required type="checkbox" />
                      <span className="text-xs sm:text-sm text-on-surface font-medium">
                        {" I have read and accept the recruitment and data-processing policy. "}
                        <span className="text-error font-semibold">
                          *
                        </span>
                        {" "}
                      </span>
                    </label>
                  </div>
                </div>
                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      lock
                    </span>
                    <span>
                      Submissions are encrypted via TLS 1.3
                    </span>
                  </div>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#003221] hover:bg-[#0b4a34] text-white font-bold text-sm transition-all shadow-md active:scale-95" type="submit">
                    <span>
                      Submit Expression of Interest
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
                {/* Success Mock Alert Box */}
                <div className="hidden p-4 rounded-xl bg-[#003221] text-white flex items-center justify-between shadow-lg" id="submissionNotification">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[26px]">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        Application Received!
                      </h4>
                      <p className="text-xs text-emerald-100/80">
                        Please check your SMS and email inbox for your Reference Verification ID.
                      </p>
                    </div>
                  </div>
                  <button className="material-symbols-outlined text-white/80 hover:text-white text-[20px]" data-rcfi-onclick="document.getElementById('submissionNotification').classList.add('hidden')" type="button">
                    close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* TRUST CERTIFICATION STRIP */}
        <section className="w-full bg-surface-container py-6 border-y border-surface-container-high">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-around gap-6 text-primary">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                verified
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Communications Authority Licensed ECSP
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                lock
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                ISO/IEC 27001 Certified Infrastructure
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                shield
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Kenya ODPC Data Protection Compliant
              </span>
            </div>
          </div>
        </section>
      </main>
      {/* 4. STANDARD RCFI CORPORATE FOOTER */}
      <footer className="w-full bg-[#002116] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: About & Socials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-extrabold text-secondary-fixed tracking-tight">
                  RCFI
                </span>
                <span className="text-xs text-emerald-200/60">
                  • Technology
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/70 mb-5 leading-relaxed">
                {" Reprodrive Center for Innovation Limited is a licensed telecommunications, cybersecurity, and digital trust solutions provider delivering institutional-grade systems across Africa. "}
              </p>
              <div className="flex items-center gap-2">
                <a aria-label="Social Link" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    share
                  </span>
                </a>
                <a aria-label="Global Link" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    public
                  </span>
                </a>
                <a aria-label="Network Hub" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    hub
                  </span>
                </a>
                <a aria-label="Media Channel" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    smart_display
                  </span>
                </a>
                <a aria-label="Audio Feeds" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    podcasts
                  </span>
                </a>
              </div>
            </div>
            {/* Col 2: Products */}
            <div>
              <h4 className="text-sm font-bold text-secondary-fixed mb-4">
                Products
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/70">
                <li>
                  <Link className="hover:text-white transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign PKI
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="elano" href="/products/elano/">
                    Elano Cloud Suite
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio Financial Gateway
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="health-security" href="/health-security/">
                    Health Security Engine
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 3: Company */}
            <div>
              <h4 className="text-sm font-bold text-secondary-fixed mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/70">
                <li>
                  <Link className="hover:text-white transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="updates" href="/insights/">
                    {"Updates & Press"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors font-semibold text-secondary-fixed" data-path="careers" href="/careers/">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            {/* Col 4: Contact & Regulatory */}
            <div>
              <h4 className="text-sm font-bold text-secondary-fixed mb-4">
                {"Contact & Regulatory"}
              </h4>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-emerald-100/70 mb-4">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[17px] text-secondary-fixed shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[17px] text-secondary-fixed shrink-0">
                    mail
                  </span>
                  <a className="hover:text-white transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 text-secondary-fixed text-[11px] font-semibold">
                  ISO 27001
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 text-secondary-fixed text-[11px] font-semibold">
                  CAK ECSP
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 text-secondary-fixed text-[11px] font-semibold">
                  Kenya DPA
                </span>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
            <div>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
              <Link className="hover:text-white transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-white transition-colors" data-path="terms-of-service" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-white transition-colors" data-path="compliance-portal" href="/trust/">
                Compliance Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
