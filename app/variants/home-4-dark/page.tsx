import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/variants-home-4-dark/page.css";
import "@/styles/pages/variants-home-4-dark/late.css";

export const metadata: Metadata = { title: "Home (variant 4, dark) | RCFI Technology" };

export default function VariantsHome4DarkPage() {
  return (
    <div className="rcfi-variants-home-4-dark dark" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-sovereign-navy/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-digital-emerald animate-pulse shrink-0" />
              <span className="font-label-badge text-label-badge text-text-muted tracking-wider uppercase">
                CAK Licensed Electronic Certification Service Provider (TL/E-CSP 00014) • ISO 27001 Certified • National Root CA Anchor
              </span>
            </div>
            <div className="hidden md:flex items-center gap-space-md shrink-0 font-label-code text-label-code">
              <Link className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" data-path="verify-document" href="/verify/">
                <span>
                  Verify Document
                </span>
              </Link>
              <span className="text-outline-variant">
                |
              </span>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" data-path="ca-repository" href="/trust/">
                <span>
                  CA Repository
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-slate/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(6,11,20,0.6)]">
          <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <Link className="flex items-center gap-space-sm group" data-path="home" href="/">
                <img alt="RCFI Sovereign Digital Trust Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-sovereign-mark.svg" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                    RCFI
                    <span className="text-primary">
                      .
                    </span>
                  </span>
                  <span className="font-label-badge text-[10px] tracking-widest uppercase text-text-muted">
                    Digital Trust
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-1" data-active-classes="bg-surface-elevated text-primary font-semibold rounded-lg">
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="products" href="/products/certysign/">
                Products
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="academy" href="/academy/">
                Academy
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="why-rcfi" href="/about/">
                Why RCFI
              </Link>
              <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-elevated transition-colors" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm">
              <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-label-code text-label-code bg-surface-container-high text-primary hover:bg-surface-bright hover:text-primary transition-colors" data-path="verify-document" href="/verify/">
                Verify a Document
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-body-sm text-body-sm font-semibold bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed transition-all shadow-[0_0_15px_rgba(0,210,196,0.25)]" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[7.5rem] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Ambient Glow Backdrop (contained) */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-primary-container/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="absolute top-96 right-[-5%] w-[420px] h-[420px] bg-electric-cyan/5 blur-[120px] pointer-events-none rounded-full" />
            {/* 1. HERO SECTION */}
            <section className="relative max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter-desktop items-center">
                {/* Hero Text Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {/* Sovereign Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald animate-ping" />
                    <span className="font-label-badge text-label-badge tracking-wider uppercase">
                      CAK Licensed E-CSP (TL/E-CSP 00014) • Sovereign Root
                    </span>
                  </div>
                  <h1 className="font-headline-xl lg:font-display-hero text-headline-xl lg:text-display-hero text-text-primary tracking-tight">
                    {" Your Partner in "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-electric-cyan">
                      Digital Trust
                    </span>
                    {", Data & Innovation. "}
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
                    {" We are Kenya’s licensed certification authority — and the technology partner behind national-scale platforms in digital health, governance, and public infrastructure. Built in Nairobi. Sovereign by design. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                    <Link className="inline-flex items-center justify-center px-6 py-3 rounded-full font-headline-sm text-body-default font-bold bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed transition-all shadow-[0_0_24px_rgba(0,210,196,0.35)]" data-path="services" href="/services/">
                      {" Explore Our Services "}
                    </Link>
                    <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-headline-sm text-body-default font-semibold bg-surface-slate text-text-primary hover:bg-surface-elevated transition-colors" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                      <span>
                        Book a Meeting
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <Link className="inline-flex items-center gap-1.5 text-primary hover:text-primary-fixed font-label-code text-label-code tracking-wide transition-colors py-2 px-3" data-path="verify-document" href="/verify/">
                      <span>
                        Verify a Document
                      </span>
                      <span className="text-xs">
                        →
                      </span>
                    </Link>
                  </div>
                  {/* Trust Badges Row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-space-md text-text-muted font-label-badge text-label-badge uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-digital-emerald text-[14px]">
                        verified
                      </span>
                      {" ISO 27001 Certified"}
                    </span>
                    <span className="text-surface-container-high">
                      •
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[14px]">
                        security
                      </span>
                      {" CAK Licensed (TL/E-CSP 00014)"}
                    </span>
                    <span className="text-surface-container-high">
                      •
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-electric-cyan text-[14px]">
                        gavel
                      </span>
                      {" Kenya DPA 2019 Compliant"}
                    </span>
                    <span className="text-surface-container-high">
                      •
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary-container text-[14px]">
                        key
                      </span>
                      {" X.509 Compliant PKI"}
                    </span>
                  </div>
                </div>
                {/* Floating Hero Graphic Card (PKI Digital Trust Engine) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative bg-surface-slate rounded-xl p-space-md shadow-2xl overflow-hidden">
                    {/* Glowing Hairline Header */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                    {/* Card Header */}
                    <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-digital-emerald" />
                        <span className="font-label-code text-label-code text-text-primary uppercase tracking-widest font-semibold">
                          ROOT HSM: ONLINE
                        </span>
                      </div>
                      <span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-primary/10 text-primary">
                        NBO-VAULT-01
                      </span>
                    </div>
                    {/* Certificate Identity Payload */}
                    <div className="bg-surface-container-lowest rounded-lg p-space-md space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="font-label-badge text-label-badge text-text-muted uppercase">
                            Subject DN
                          </span>
                          <div className="font-label-code text-body-sm text-primary font-semibold truncate">
                            C=KE, O=RCFI Trust Engine, CN=National Root CA
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          verified_user
                        </span>
                      </div>
                      {/* Cryptographic Details Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-1 font-label-code text-xs text-text-muted">
                        <div className="p-2 bg-surface-slate rounded">
                          <span className="text-[10px] uppercase text-outline block">
                            Algorithm
                          </span>
                          <span className="text-text-primary font-medium">
                            RSA 4096-bit
                          </span>
                        </div>
                        <div className="p-2 bg-surface-slate rounded">
                          <span className="text-[10px] uppercase text-outline block">
                            Hash Protocol
                          </span>
                          <span className="text-text-primary font-medium">
                            SHA-384 / eIDAS
                          </span>
                        </div>
                        <div className="p-2 bg-surface-slate rounded">
                          <span className="text-[10px] uppercase text-outline block">
                            Certificate Status
                          </span>
                          <span className="text-digital-emerald font-semibold">
                            VALID // ACTIVE
                          </span>
                        </div>
                        <div className="p-2 bg-surface-slate rounded">
                          <span className="text-[10px] uppercase text-outline block">
                            OCSP / CRL
                          </span>
                          <span className="text-text-primary font-medium">
                            Synced (0.42ms)
                          </span>
                        </div>
                      </div>
                      {/* Key Signature Hash Line */}
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-[11px] font-label-code text-text-muted mb-1">
                          <span>
                            SOVEREIGN FINGERPRINT
                          </span>
                          <span className="text-primary">
                            FIPS 140-3 L4
                          </span>
                        </div>
                        <div className="font-label-code text-[11px] bg-surface-container-high/60 p-2 rounded text-on-surface-variant break-all select-all">
                          {" SHA256: 4e:9a:1c:77:9f:02:ea:bc:89:12:ef:90:34:5a:11:8b:cc:91:0a:fe "}
                        </div>
                      </div>
                    </div>
                    {/* Live Verification Pill Banner */}
                    <div className="mt-space-md p-space-sm rounded-lg bg-surface-elevated flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-digital-emerald text-base">
                          check_circle
                        </span>
                        <span className="font-label-code text-xs text-text-primary">
                          VERIFIED // CAK TL/E-CSP 00014
                        </span>
                      </div>
                      <span className="font-label-badge text-label-badge text-text-muted">
                        MUTUAL TLS v1.3
                      </span>
                    </div>
                    {/* Ambient Pulse Graph Sparkline (SVG) */}
                    <div className="mt-space-sm pt-2 flex items-center justify-between text-xs text-text-muted font-label-code">
                      <span>
                        Throughput: 1,842 sigs/min
                      </span>
                      <div className="w-32 h-6 flex items-center">
                        <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 120 24">
                          {" "}
                          <path d="M0 16 L20 16 L30 6 L42 20 L55 10 L68 18 L80 4 L95 14 L110 9 L120 12" strokeLinecap="round" strokeLinejoin="round" />
                          {" "}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Live Trust Ticker Bar (Pathways-Style Metrics) */}
              <div className="mt-space-2xl grid grid-cols-2 md:grid-cols-4 gap-space-sm bg-surface-slate/80 backdrop-blur-xl p-space-md rounded-xl shadow-lg">
                <div className="flex flex-col items-center justify-center p-space-sm text-center">
                  <span className="font-headline-xl text-headline-xl text-text-primary font-extrabold tracking-tight">
                    10,000
                    <span className="text-primary">
                      +
                    </span>
                  </span>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted mt-1">
                    Users Served
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-space-sm text-center">
                  <span className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight">
                    50K
                    <span className="text-text-primary">
                      +
                    </span>
                  </span>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted mt-1">
                    Signatures Verified
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-space-sm text-center">
                  <span className="font-headline-xl text-headline-xl text-text-primary font-extrabold tracking-tight">
                    500
                    <span className="text-electric-cyan">
                      +
                    </span>
                  </span>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted mt-1">
                    Organizations on Elano
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-space-sm text-center">
                  <span className="font-headline-xl text-headline-xl text-digital-emerald font-extrabold tracking-tight">
                    47
                    <span className="text-text-primary">
                      /47
                    </span>
                  </span>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted mt-1">
                    Counties Reached
                  </span>
                </div>
              </div>
            </section>
          </div>
          {/* 2. ECOSYSTEM MARQUEE (Partners & Institutions) */}
          <section className="w-full bg-sovereign-navy py-space-xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-md flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
              <div>
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                  // THE ECOSYSTEM WE SERVE AND BUILD WITH
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary mt-1">
                  {" Trusted across national governance, healthcare, and enterprise infrastructure "}
                </h2>
              </div>
              <span className="font-label-code text-xs text-text-muted shrink-0">
                {"REGULATORY & STRATEGIC PEERS"}
              </span>
            </div>
            {/* Monochromatic Interactive Partner Grid / Strip */}
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    DHA
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Digital Health
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    ICTA
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    ICT Authority
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    KONZA
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Technopolis
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    CAK
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Communications Auth
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    ODPC
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Data Protection
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    AFA
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    {"Agri & Food"}
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    KSB
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Sugar Board
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    IntelliSOFT
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Health Systems
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    Crown Interactive
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    Microsoft
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Partner
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    AWS
                  </span>
                  <span className="text-[10px] text-text-muted block ml-1.5 opacity-60 group-hover:opacity-100 font-label-badge">
                    Public Sector
                  </span>
                </div>
                <div className="h-16 rounded-lg bg-surface-slate flex items-center justify-center p-3 text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated transition-colors text-center group">
                  <span className="font-headline-sm text-body-default font-bold tracking-tight">
                    Oracle Health
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* 3. CORE SERVICES GRID (5 Practices, Pathways-Style Interactive Cards) */}
          <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div>
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                  {"// CAPABILITIES & PRACTICES"}
                </span>
                <h2 className="font-headline-xl text-headline-xl text-text-primary mt-1">
                  {" Five practices. One standard: national-scale, standards-based, sovereign. "}
                </h2>
              </div>
              <p className="font-body-default text-body-default text-on-surface-variant max-w-md">
                {" Engineering the institutional rails that power secure digital transformation across Africa. "}
              </p>
            </div>
            {/* 5-Card Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {/* Practice 1: Digital Trust & PKI (Primary Featured Card) */}
              <div className="lg:col-span-2 bg-surface-slate rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-elevated transition-all group relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        key_vertical
                      </span>
                    </div>
                    <span className="font-label-badge text-label-badge uppercase px-3 py-1 rounded bg-primary/15 text-primary">
                      Sovereign Core
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-text-primary group-hover:text-primary transition-colors">
                    {" Digital Trust & PKI "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-space-sm max-w-2xl">
                    {" Electronic signatures, digital certificates, cryptographic timestamping, identity verification, and complete certificate lifecycle management anchored on Kenyan root keys. "}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex flex-wrap items-center gap-2">
                  <span className="font-label-code text-xs px-2.5 py-1 rounded bg-surface-container-high text-text-primary">
                    X.509 PKI
                  </span>
                  <span className="font-label-code text-xs px-2.5 py-1 rounded bg-surface-container-high text-text-primary">
                    CAK Licensed
                  </span>
                  <span className="font-label-code text-xs px-2.5 py-1 rounded bg-surface-container-high text-text-primary">
                    Timestamping
                  </span>
                  <span className="font-label-code text-xs px-2.5 py-1 rounded bg-surface-container-high text-text-primary">
                    e-Signatures
                  </span>
                </div>
              </div>
              {/* Practice 2: Cybersecurity & Assurance */}
              <div className="bg-surface-slate rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-electric-cyan/10 flex items-center justify-center text-electric-cyan group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        shield_lock
                      </span>
                    </div>
                    <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-surface-container-high text-text-muted">
                      Assurance
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-electric-cyan transition-colors">
                    {" Cybersecurity & Assurance "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    {" Regulator-grade assurance, GRC audits, penetration testing, threat modeling, and continuous vulnerability assessment for mission-critical institutions. "}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    ISO 27001
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    GRC Audits
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    DevSecOps
                  </span>
                </div>
              </div>
              {/* Practice 3: Digital Health Governance */}
              <div className="bg-surface-slate rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-digital-emerald/10 flex items-center justify-center text-digital-emerald group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        local_hospital
                      </span>
                    </div>
                    <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-surface-container-high text-text-muted">
                      Interoperability
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-digital-emerald transition-colors">
                    {" Digital Health Governance & Interoperability "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    {" Architecting national digital health registries, data exchange frameworks, and standards adoption across public and private health networks. "}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    HL7 FHIR
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    OpenHIE
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    Health Act
                  </span>
                </div>
              </div>
              {/* Practice 4: Data, Analytics & AI */}
              <div className="bg-surface-slate rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-tertiary-container/15 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        neurology
                      </span>
                    </div>
                    <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-surface-container-high text-text-muted">
                      Intelligence
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-tertiary transition-colors">
                    {" Data, Analytics & AI "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    {" Governed data pipelines, explainable machine learning models, institutional data lakes, and executive decision intelligence frameworks. "}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    Governed Pipelines
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    Sovereign ML
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    DPA Compliant
                  </span>
                </div>
              </div>
              {/* Practice 5: Digital & Cloud Engineering */}
              <div className="bg-surface-slate rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        cloud_sync
                      </span>
                    </div>
                    <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-surface-container-high text-text-muted">
                      Infrastructure
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-secondary transition-colors">
                    {" Digital & Cloud Engineering "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    {" Resilient platform engineering, API-first integrations, sovereign cloud infrastructure, microservices, and 99.99% uptime delivery. "}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    Sovereign Cloud
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    API Architecture
                  </span>
                  <span className="font-label-code text-xs px-2 py-1 rounded bg-surface-container-high text-text-primary">
                    Kubernetes
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* 4. FEATURED PRODUCTS SHOWCASE (Interactive Tabbed View) */}
          <section className="w-full bg-sovereign-navy py-space-2xl">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="mb-space-lg">
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                  // PROPRIETARY PLATFORMS
                </span>
                <h2 className="font-headline-xl text-headline-xl text-text-primary mt-1">
                  {" Sovereign products powering national infrastructure "}
                </h2>
              </div>
              {/* Tab Buttons (Pathways Style) */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-slate rounded-xl w-fit mb-space-lg" id="productTabs">
                <button className="px-5 py-2.5 rounded-lg font-headline-sm text-body-default font-semibold transition-all bg-primary-container text-on-primary-container shadow-md" id="btn-certysign" data-rcfi-onclick="switchTab('certysign')">
                  {" CertySign "}
                </button>
                <button className="px-5 py-2.5 rounded-lg font-headline-sm text-body-default font-semibold transition-all text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" id="btn-elano" data-rcfi-onclick="switchTab('elano')">
                  {" Elano "}
                </button>
                <button className="px-5 py-2.5 rounded-lg font-headline-sm text-body-default font-semibold transition-all text-on-surface-variant hover:text-text-primary hover:bg-surface-elevated" id="btn-prezio" data-rcfi-onclick="switchTab('prezio')">
                  {" Prezio "}
                </button>
              </div>
              {/* Tab Panels Container */}
              <div className="bg-surface-slate rounded-2xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                {/* PANEL 1: CertySign */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center" id="panel-certysign">
                  <div className="lg:col-span-6 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary font-label-badge text-label-badge uppercase">
                      {" Digital Trust & Legal Signatures "}
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-text-primary font-bold">
                      {" Sign, verify, and certify legally and instantly. "}
                    </h3>
                    <p className="font-body-default text-body-default text-on-surface-variant">
                      {" Kenya's premier ECSP-backed signature suite for enterprise workflows, court filings, and regulatory compliance. Direct integration with national root anchors ensures absolute legal admissibility under KICA. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-text-primary">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          check_circle
                        </span>
                        <span>
                          Bulk Enterprise Signing
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          fingerprint
                        </span>
                        <span>
                          Biometric Authentication
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          history_edu
                        </span>
                        <span>
                          Cryptographic Audit Trails
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">
                          verified
                        </span>
                        <span>
                          Adobe CDS Compatibility
                        </span>
                      </div>
                    </div>
                    <div className="pt-space-sm flex items-center gap-space-md">
                      <Link className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm font-semibold hover:bg-primary-fixed transition-colors" data-path="products-certysign" href="/products/certysign/">
                        {" Launch CertySign Portal "}
                      </Link>
                      <span className="font-label-code text-xs text-text-muted">
                        REST API v2.4 Available
                      </span>
                    </div>
                  </div>
                  {/* Mockup Visual */}
                  <div className="lg:col-span-6 bg-surface-elevated rounded-xl p-space-md shadow-inner space-y-3">
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-label-code text-xs text-text-muted">
                        CWS://CERTYSIGN.KE/VERIFIER
                      </span>
                      <span className="w-2 h-2 rounded-full bg-digital-emerald" />
                    </div>
                    <div className="bg-surface-slate p-space-sm rounded-lg space-y-2">
                      <div className="flex justify-between text-xs font-label-code">
                        <span className="text-on-surface-variant">
                          Doc: Master_Procurement_Contract_2025.pdf
                        </span>
                        <span className="text-digital-emerald font-semibold">
                          VALID TIMESTAMP
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-full" />
                      </div>
                      <p className="font-label-code text-[11px] text-text-muted">
                        Anchored on CAK Root Key • Serial: 0x88F1A29D • Signers: 4/4 Authorized
                      </p>
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded-lg font-label-code text-xs text-on-surface-variant space-y-1">
                      <div>
                        {"> Signature 1: Attorney General Chambers [KE-AG-04] (Verified)"}
                      </div>
                      <div>
                        {"> Signature 2: Accounting Officer, MoH [KE-MOH-91] (Verified)"}
                      </div>
                      <div>
                        {"> Cryptographic Hash: sha256_5bf38cd9934e892c"}
                      </div>
                    </div>
                  </div>
                </div>
                {/* PANEL 2: Elano (Hidden by default) */}
                <div className="hidden grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center" id="panel-elano">
                  <div className="lg:col-span-6 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-electric-cyan/10 text-electric-cyan font-label-badge text-label-badge uppercase">
                      {" Institutional Governance & Intelligence "}
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-text-primary font-bold">
                      {" Register, govern, and report for institutions. "}
                    </h3>
                    <p className="font-body-default text-body-default text-on-surface-variant">
                      {" Complete regulatory and compliance management engine for statutory bodies, boards, and public agencies. Automates mandate enforcement, secretarial tracking, and real-time oversight. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-text-primary">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-electric-cyan text-lg">
                          meeting_room
                        </span>
                        <span>
                          {"Committee & Board Portals"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-electric-cyan text-lg">
                          fact_check
                        </span>
                        <span>
                          Resolution Tracking Engine
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-electric-cyan text-lg">
                          cloud_done
                        </span>
                        <span>
                          Statutory Automated Filings
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-electric-cyan text-lg">
                          speed
                        </span>
                        <span>
                          Dynamic Compliance Scoring
                        </span>
                      </div>
                    </div>
                    <div className="pt-space-sm flex items-center gap-space-md">
                      <Link className="px-5 py-2.5 rounded-lg bg-electric-cyan text-on-secondary-container font-body-sm font-semibold hover:opacity-90 transition-opacity" data-path="products-elano" href="/products/elano/">
                        {" Discover Elano Platform "}
                      </Link>
                      <span className="font-label-code text-xs text-text-muted">
                        Deployed across 500+ orgs
                      </span>
                    </div>
                  </div>
                  {/* Mockup Visual */}
                  <div className="lg:col-span-6 bg-surface-elevated rounded-xl p-space-md shadow-inner space-y-3">
                    <div className="flex items-center justify-between pb-2 font-label-code text-xs text-text-muted">
                      <span>
                        ELANO // BOARD GOVERNANCE INDEX
                      </span>
                      <span className="text-digital-emerald font-semibold">
                        COMPLIANCE: 98.4%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-surface-slate p-3 rounded-lg text-center">
                        <span className="text-[10px] uppercase text-text-muted block">
                          Resolutions
                        </span>
                        <span className="font-headline-sm text-body-default font-bold text-text-primary">
                          1,248
                        </span>
                      </div>
                      <div className="bg-surface-slate p-3 rounded-lg text-center">
                        <span className="text-[10px] uppercase text-text-muted block">
                          Active Boards
                        </span>
                        <span className="font-headline-sm text-body-default font-bold text-electric-cyan">
                          58
                        </span>
                      </div>
                      <div className="bg-surface-slate p-3 rounded-lg text-center">
                        <span className="text-[10px] uppercase text-text-muted block">
                          Audit Health
                        </span>
                        <span className="font-headline-sm text-body-default font-bold text-digital-emerald">
                          Tier 1
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded-lg font-label-code text-xs text-on-surface-variant space-y-2">
                      <div className="flex justify-between">
                        <span>
                          Parliamentary Directives Sync
                        </span>
                        <span className="text-digital-emerald">
                          Synced 14m ago
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          Annual Public Body Scorecard
                        </span>
                        <span className="text-primary">
                          Auto-Generated (PDF)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PANEL 3: Prezio (Hidden by default) */}
                <div className="hidden grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center" id="panel-prezio">
                  <div className="lg:col-span-6 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tertiary-container/15 text-tertiary font-label-badge text-label-badge uppercase">
                      {" Business Operations & Audit Rails "}
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-text-primary font-bold">
                      {" Workflow & approval automation for sovereign enterprises. "}
                    </h3>
                    <p className="font-body-default text-body-default text-on-surface-variant">
                      {" Engineered for institutions where operational velocity cannot compromise accountability. Prezio secures internal approvals with hardware-grade cryptographic proof. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-text-primary">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">
                          schema
                        </span>
                        <span>
                          Multi-Tier Approval Flows
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">
                          hub
                        </span>
                        <span>
                          Universal ERP Connectors
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">
                          enhanced_encryption
                        </span>
                        <span>
                          Immutable Transaction Logs
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">
                          timer
                        </span>
                        <span>
                          Institutional SLA Tracking
                        </span>
                      </div>
                    </div>
                    <div className="pt-space-sm flex items-center gap-space-md">
                      <Link className="px-5 py-2.5 rounded-lg bg-tertiary text-on-tertiary font-body-sm font-semibold hover:opacity-90 transition-opacity" data-path="products-prezio" href="/products/prezio/">
                        {" Explore Prezio Suite "}
                      </Link>
                      <span className="font-label-code text-xs text-text-muted">
                        {"SAP & Oracle Ready"}
                      </span>
                    </div>
                  </div>
                  {/* Mockup Visual */}
                  <div className="lg:col-span-6 bg-surface-elevated rounded-xl p-space-md shadow-inner space-y-3">
                    <div className="flex items-center justify-between pb-2 font-label-code text-xs text-text-muted">
                      <span>
                        PREZIO ENGINE // WORKFLOW #89110
                      </span>
                      <span className="text-tertiary font-semibold">
                        STAGE 3 OF 4
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-surface-slate p-2.5 rounded flex items-center justify-between font-label-code text-xs">
                        <span>
                          1. Treasury Sanction
                        </span>
                        <span className="text-digital-emerald">
                          Signed (Key ID: 8810)
                        </span>
                      </div>
                      <div className="bg-surface-slate p-2.5 rounded flex items-center justify-between font-label-code text-xs">
                        <span>
                          2. Internal Audit Review
                        </span>
                        <span className="text-digital-emerald">
                          Signed (Key ID: 4120)
                        </span>
                      </div>
                      <div className="bg-surface-slate p-2.5 rounded flex items-center justify-between font-label-code text-xs">
                        <span>
                          3. Cabinet Secretary Endorsement
                        </span>
                        <span className="text-tertiary animate-pulse">
                          Awaiting Verification
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 5. "WHY RCFI" / SOVEREIGN TRUST PILLARS (Split Layout) */}
          <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              {/* Left Sticky Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-space-md">
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                  // THE SOVEREIGN ADVANTAGE
                </span>
                <h2 className="font-headline-xl text-headline-xl text-text-primary">
                  {" Why organizations choose us "}
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  {" Specificity is our brand. We don't just write code — we build the legal, regulatory, and technical foundations for national sovereignty. "}
                </p>
                <div className="p-space-md rounded-xl bg-surface-slate space-y-space-sm shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-digital-emerald" />
                    <span className="font-headline-sm text-body-default font-bold text-text-primary">
                      Built in Nairobi. Sovereign by design.
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-muted">
                    {" All cryptographic operations, Root CA anchors, and primary data storage remain strictly on Kenyan soil under national jurisdiction. "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <Link className="inline-flex items-center gap-2 text-primary font-body-sm font-semibold hover:text-primary-fixed transition-colors" data-path="why-rcfi" href="/trust/">
                    <span>
                      Read our Sovereign Trust Charter
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Right Column: 5 Numbered Enterprise Cards */}
              <div className="lg:col-span-7 space-y-space-md">
                {/* 01 */}
                <div className="bg-surface-slate p-space-lg rounded-xl hover:bg-surface-elevated transition-all shadow-md group">
                  <div className="flex items-start justify-between">
                    <span className="font-label-code text-headline-sm text-primary font-bold">
                      01
                    </span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">
                      Statutory License
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-sm group-hover:text-primary transition-colors">
                    {" Accredited & Licensed "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                    {" Licensed by the Communications Authority of Kenya as an Electronic Certification Service Provider (TL/E-CSP 00014), providing legally indisputable digital credentials. "}
                  </p>
                </div>
                {/* 02 */}
                <div className="bg-surface-slate p-space-lg rounded-xl hover:bg-surface-elevated transition-all shadow-md group">
                  <div className="flex items-start justify-between">
                    <span className="font-label-code text-headline-sm text-electric-cyan font-bold">
                      02
                    </span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">
                      Macro Impact
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-sm group-hover:text-electric-cyan transition-colors">
                    {" National-Scale Delivery "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                    {" We build governance machinery and institutional rails, not just surface-level software. Engineered for multi-ministry throughput and millions of daily transactions. "}
                  </p>
                </div>
                {/* 03 */}
                <div className="bg-surface-slate p-space-lg rounded-xl hover:bg-surface-elevated transition-all shadow-md group">
                  <div className="flex items-start justify-between">
                    <span className="font-label-code text-headline-sm text-digital-emerald font-bold">
                      03
                    </span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">
                      Jurisdiction
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-sm group-hover:text-digital-emerald transition-colors">
                    {" Sovereign by Design "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                    {" Cryptographic keys and sensitive data stay on Kenyan soil, fully aligned with the Kenya Data Protection Act 2019 and protected against extra-territorial subpoena risks. "}
                  </p>
                </div>
                {/* 04 */}
                <div className="bg-surface-slate p-space-lg rounded-xl hover:bg-surface-elevated transition-all shadow-md group">
                  <div className="flex items-start justify-between">
                    <span className="font-label-code text-headline-sm text-tertiary font-bold">
                      04
                    </span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">
                      Global Protocols
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-sm group-hover:text-tertiary transition-colors">
                    {" Standards-First Architecture "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                    {" Rigorous alignment with international and regional standards: HL7 FHIR, OpenHIE, X.509, and ISO 27001 to prevent vendor lock-in and ensure global interoperability. "}
                  </p>
                </div>
                {/* 05 */}
                <div className="bg-surface-slate p-space-lg rounded-xl hover:bg-surface-elevated transition-all shadow-md group">
                  <div className="flex items-start justify-between">
                    <span className="font-label-code text-headline-sm text-secondary font-bold">
                      05
                    </span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">
                      Human Capital
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mt-space-sm group-hover:text-secondary transition-colors">
                    {" RCFI Academy "}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                    {" Investing in the continent by training the next generation of digital trust engineers, public key cryptographers, and digital health informatics leaders. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 6. RCFI ACADEMY & "THE TRUST LAYER" INSIGHTS */}
          <section className="w-full bg-sovereign-navy py-space-2xl">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop space-y-space-xl">
              {/* Academy Featured Banner */}
              <div className="relative bg-gradient-to-r from-surface-slate via-surface-elevated to-surface-slate rounded-2xl p-space-lg lg:p-space-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                  <div className="lg:col-span-8 space-y-space-sm">
                    <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                      // CAPACITY BUILDING
                    </span>
                    <h2 className="font-headline-xl text-headline-xl text-text-primary">
                      {" RCFI Academy: Regional Excellence in Digital Trust "}
                    </h2>
                    <p className="font-body-default text-body-default text-on-surface-variant max-w-2xl">
                      {" Upskilling sovereign engineers and public sector leaders through intensive, regulator-certified executive cohorts in applied cryptography and health informatics. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
                      <div className="p-space-sm bg-surface-slate/80 rounded-lg">
                        <span className="font-label-badge text-label-badge text-digital-emerald uppercase block">
                          Cohort Track A
                        </span>
                        <span className="font-headline-sm text-body-default font-bold text-text-primary">
                          {"Digital Health Interoperability & Governance"}
                        </span>
                        <p className="text-xs text-text-muted mt-1 font-body-sm">
                          {"HL7 FHIR & OpenHIE architecture for health data systems."}
                        </p>
                      </div>
                      <div className="p-space-sm bg-surface-slate/80 rounded-lg">
                        <span className="font-label-badge text-label-badge text-primary uppercase block">
                          Cohort Track B
                        </span>
                        <span className="font-headline-sm text-body-default font-bold text-text-primary">
                          {"Digital Trust & Cyber Defence Programme"}
                        </span>
                        <p className="text-xs text-text-muted mt-1 font-body-sm">
                          Enterprise PKI, sovereign HSM protocols, and GRC masterclass.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                    <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-headline-sm text-body-default font-bold bg-primary text-on-primary hover:bg-primary-fixed transition-all shadow-lg" data-path="academy" href="/academy/">
                      <span>
                        {"Explore Cohorts & Syllabus"}
                      </span>
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="font-label-code text-xs text-text-muted mt-2">
                      Next Cohort: Q2 Intake Open
                    </span>
                  </div>
                </div>
              </div>
              {/* Thought Leadership: "The Trust Layer" */}
              <div className="space-y-space-md">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                  <div>
                    <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                      // THE TRUST LAYER INSIGHTS
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-text-primary mt-1">
                      {" Field intelligence from national deployments "}
                    </h2>
                  </div>
                  <Link className="text-primary hover:text-primary-fixed font-label-code text-label-code transition-colors flex items-center gap-1" data-path="research-publications" href="/insights/">
                    <span>
                      View all publications
                    </span>
                    <span>
                      →
                    </span>
                  </Link>
                </div>
                {/* 3-Column Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {/* Article 1 */}
                  <article className="bg-surface-slate rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-md">
                    <div>
                      <div className="flex items-center justify-between text-xs font-label-badge uppercase text-text-muted mb-space-sm">
                        <span className="text-primary">
                          {"Policy & Legal Analysis"}
                        </span>
                        <span>
                          8 min read
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
                        {" Kenya's ECSP Landscape: Legal Validity of Advanced Electronic Signatures under KICA "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">
                        {" Examining evidentiary weight, court admissibility, and the technical standards mandated by the Communications Authority for Tier-1 electronic certifications. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-code text-xs text-text-muted">
                      <span>
                        RCFI Legal Tech Bureau
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform text-primary">
                        Read Article →
                      </span>
                    </div>
                  </article>
                  {/* Article 2 */}
                  <article className="bg-surface-slate rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-md">
                    <div>
                      <div className="flex items-center justify-between text-xs font-label-badge uppercase text-text-muted mb-space-sm">
                        <span className="text-digital-emerald">
                          Technical Whitepaper
                        </span>
                        <span>
                          12 min read
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-digital-emerald transition-colors">
                        {" Implementing HL7 FHIR at National Scale: Architectural Lessons from the Field "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">
                        {" How Kenya is bridging fragmented electronic health record systems through unified terminology registries and sovereign API gateways. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-code text-xs text-text-muted">
                      <span>
                        Digital Health Practice
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform text-digital-emerald">
                        Read Article →
                      </span>
                    </div>
                  </article>
                  {/* Article 3 */}
                  <article className="bg-surface-slate rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-elevated transition-all group shadow-md">
                    <div>
                      <div className="flex items-center justify-between text-xs font-label-badge uppercase text-text-muted mb-space-sm">
                        <span className="text-electric-cyan">
                          Cryptographic Engineering
                        </span>
                        <span>
                          10 min read
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-electric-cyan transition-colors">
                        {" Sovereign Key Ceremonies: Why Data Residency Starts with Root HSMs "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">
                        {" A technical breakdown of air-gapped root generation, multi-party key shards, and hardware security module governance on sovereign territory. "}
                      </p>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-code text-xs text-text-muted">
                      <span>
                        PKI Infrastructure Team
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform text-electric-cyan">
                        Read Article →
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* 7. CLOSING CTA BANNER (Full-Width Sovereign Gradient Card) */}
          <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
            <div className="relative bg-gradient-to-br from-surface-slate via-surface-elevated to-sovereign-navy rounded-3xl p-space-xl lg:p-space-2xl overflow-hidden shadow-2xl text-center flex flex-col items-center">
              {/* Cyber Grid Background Element (SVG) */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {" "}
                  <defs>
                    {" "}
                    <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                      {" "}
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#47efe0" strokeWidth="0.8" />
                      {" "}
                    </pattern>
                    {" "}
                  </defs>
                  {" "}
                  <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                  {" "}
                </svg>
              </div>
              {/* Accent Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-primary/20 blur-3xl pointer-events-none rounded-full" />
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest mb-space-sm">
                // INITIATE ENGAGEMENT
              </span>
              <h2 className="font-headline-xl lg:font-display-hero text-headline-xl lg:text-display-hero text-text-primary max-w-3xl">
                {" Let’s build what Africa trusts. "}
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl mt-space-sm">
                {" Whether you’re signing your first document or architecting a national system — start the conversation today with Kenya's sovereign trust team. "}
              </p>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-lg">
                <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-headline-sm text-body-default font-bold bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed transition-all shadow-[0_0_30px_rgba(0,210,196,0.35)]" data-path="book-meeting" href="/contact/">
                  {" Talk to a Trust Specialist "}
                </Link>
                <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-headline-sm text-body-default font-semibold bg-surface-slate text-text-primary hover:bg-surface-bright transition-colors" data-path="ca-repository" href="/trust/">
                  {" Browse CA Repository "}
                </Link>
              </div>
              {/* Direct Contact Metadata */}
              <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label-code text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">
                    mail
                  </span>
                  {" trust@rcfi.ke"}
                </span>
                <span>
                  •
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">
                    location_on
                  </span>
                  {" Hifadhi House, ICD Road, Nairobi, Kenya"}
                </span>
                <span>
                  •
                </span>
                <span className="text-digital-emerald font-semibold">
                  CAK Reg. TL/E-CSP 00014
                </span>
              </div>
            </div>
          </section>
          {/* Vanilla JS for Interactive Tabs */}
        </div>
      </main>
      <footer className="w-full bg-sovereign-navy text-on-surface-variant">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
            <div className="lg:col-span-1 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <img alt="RCFI Sovereign Digital Trust Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-sovereign-mark.svg" />
                <span className="font-headline-sm text-headline-sm font-bold text-text-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted">
                Research Center for Digital Innovation. Kenya's sovereign root anchor and electronic certification service provider.
              </p>
              <div className="flex flex-col gap-1 text-xs font-label-code text-text-muted mt-space-sm">
                <span className="text-primary">
                  CAK License: TL/E-CSP 00014
                </span>
                <span>
                  ISO/IEC 27001:2022 Certified
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-pki" href="/services/digital-trust-pki/">
                    {"PKI & Sovereign Identity"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    Enterprise Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-digital-health" href="/services/digital-health-governance/">
                    Digital Health Architecture
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-ai-data" href="/services/data-analytics-ai/">
                    {"AI & Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="services-cloud" href="/services/digital-cloud-engineering/">
                    {"Cloud & Sovereign Infra"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                Sovereign Products
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-certysign" href="/products/certysign/">
                    {"CertySign (eIDAS & CAK)"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-elano" href="/products/elano/">
                    Elano Identity Ledger
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="products-prezio" href="/products/prezio/">
                    Prezio Audit Gateway
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="ca-repository" href="/trust/">
                    {"National Root CRL & OCSP"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Academy & Programs"}
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/executive-briefings/">
                    Executive Cyber Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy-fellowship" href="/academy/">
                    Digital Innovation Fellowship
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="academy-certifications" href="/academy/digital-trust-cyber/">
                    Applied Cryptography Certs
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="research-publications" href="/insights/">
                    Technical Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary">
                {"Trust Center & HQ"}
              </span>
              <div className="font-body-sm text-body-sm flex flex-col gap-1 text-text-muted mb-space-sm">
                <span className="font-semibold text-on-surface">
                  RCFI Kenya HQ
                </span>
                <span>
                  Hifadhi House, 5th Floor
                </span>
                <span>
                  ICD Road, Nairobi, Kenya
                </span>
                <span>
                  contact@rcfi.go.ke
                </span>
              </div>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="trust-center" href="/trust/">
                    {"Compliance & Accreditations"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="verify-document" href="/verify/">
                    Real-time Signature Verifier
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="privacy-policy" href="/privacy/">
                    Data Protection Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-2xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-xs font-label-code text-text-muted">
            <p>
              © 2025 Research Center for Digital Innovation (RCFI Kenya). All Sovereign Rights Reserved.
            </p>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Framework
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="terms" href="/terms/">
                CPS Terms
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="ca-repository" href="/trust/">
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
