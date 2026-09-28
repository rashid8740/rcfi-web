import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/academy-digital-trust-cyber/page.css";
import "@/styles/pages/academy-digital-trust-cyber/late.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Digital Trust & Cyber Defence | RCFI Academy" };

export default function AcademyDigitalTrustCyberPage() {
  return (
    <div className="rcfi-academy-digital-trust-cyber" style={{ display: "contents" }}>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-primary text-on-primary border-b border-primary-container/40">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
              <span className="text-primary-container font-bold">
                •
              </span>
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="hidden lg:inline text-primary-container font-bold">
                •
              </span>
              <div className="hidden lg:flex items-center gap-space-xs bg-primary-container/60 px-space-sm py-0.5 rounded border border-secondary/30">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-surface-bright font-label-sm text-label-sm">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-primary-container font-bold">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors font-label-sm text-label-sm" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <header className="w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <Link className="flex items-center gap-space-sm group" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
                <div className="hidden sm:flex flex-col">
                  <span className="font-headline-sm text-headline-sm leading-none text-primary tracking-tight font-bold">
                    RCFI
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase text-[10px] leading-tight">
                    Center for Innovation
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-space-md h-full" data-active-classes="text-primary font-title-md border-b-2 border-secondary font-semibold">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="services" href="/services/">
                Services
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="products" href="/products/certysign/">
                Products
              </Link>
              <Link aria-current="page" className="transition-colors py-space-sm flex items-center gap-1 text-primary font-title-md border-b-2 border-secondary font-semibold" data-path="academy" href="/academy/">
                Academy
              </Link>
              <PartnersNavMenu className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" />
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="insights" href="/insights/">
                Insights
              </Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md py-space-sm flex items-center gap-1" data-path="company" href="/about/">
                Company
              </Link>
            </nav>
            <div className="flex items-center gap-space-sm sm:gap-space-md">
              <Link className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low border border-secondary/30 text-secondary hover:bg-secondary-container/20 font-label-md text-label-md transition-colors" data-path="verify-document" href="/verify/">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Verify Document
              </Link>
              <a className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-sm transition-all" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="w-full pt-[120px] bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* Breadcrumb & Top Indicator Bar */}
          <section className="w-full bg-surface-container-low py-space-sm px-margin">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-semibold">
                  {"Digital Trust & Cyber Defence Programme"}
                </span>
              </nav>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                  {" COHORT 04 APPLICATIONS OPEN "}
                </span>
                <span className="text-outline text-label-sm font-label-sm hidden md:inline">
                  Intake: October 2026
                </span>
              </div>
            </div>
          </section>
          {/* Hero Section: Split Dark Banner with Hardware Telemetry */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl px-margin">
            {/* Ambient subtle grid & gradient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/40 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left Column: Core Program Details */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 text-secondary-fixed font-mono font-label-sm text-label-sm tracking-wider uppercase">
                  <span className="font-bold text-secondary-fixed-dim">
                    //
                  </span>
                  {" ACADEMY PROGRAMME 02 "}
                  <span className="font-bold text-secondary-fixed-dim">
                    //
                  </span>
                  {" SOVEREIGN SECURITY & DEFENCE "}
                </div>
                <h1 className="font-display-lg text-display-lg text-surface-bright tracking-tight">
                  {" Digital Trust & Cyber Defence Programme "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed max-w-2xl">
                  {" Master applied public key infrastructure, hardware security modules (HSMs), zero-trust architecture, and offensive cyber operations in live national laboratory environments on sovereign Kenyan soil. "}
                </p>
                {/* CTA Cluster */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md font-bold shadow-md hover:bg-secondary-fixed transition-all" href="#apply-workspace">
                    <span className="material-symbols-outlined text-[20px]">
                      badge
                    </span>
                    {" Enroll for Cohort 04 "}
                  </a>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary-container text-surface-bright font-title-md text-title-md hover:bg-tertiary-container transition-all" id="download-syllabus-btn">
                    <span className="material-symbols-outlined text-[20px]">
                      download
                    </span>
                    {" Download Syllabus & Lab Guide "}
                  </button>
                </div>
                {/* Trust Badges & Accreditations */}
                <div className="pt-space-md flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary/60 text-secondary-fixed font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[15px]">
                      verified_user
                    </span>
                    {" CAK ECSP Licensed Framework (TL/E-CSP 00014) "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary/60 text-surface-bright font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[15px]">
                      memory
                    </span>
                    {" FIPS 140-2 Level 3 Lab Access "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary/60 text-surface-bright font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[15px]">
                      policy
                    </span>
                    {" ISO/IEC 27001 Aligned "}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary/60 text-surface-bright font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[15px]">
                      gavel
                    </span>
                    {" Kenya DPA 2019 Ready "}
                  </span>
                </div>
              </div>
              {/* Right Column: Live Hardware & Cryptographic Sandbox Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="bg-tertiary/95 rounded-xl p-space-md shadow-2xl flex flex-col gap-space-md relative">
                  {/* Facility Visual Header with Placeholder Image */}
                  <div className="relative h-44 w-full rounded-lg overflow-hidden bg-primary">
                    <img className="w-full h-full object-cover" data-alt="Dark high-security enterprise server room and sovereign cryptographic lab in Nairobi with deep emerald illuminated racks, fiber optic cabling, hardware security modules, and two cybersecurity engineers walking the corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8jdaMPCxNkFW0lEkkIcDryl6VA86ikONvMIARyEQIH8_xhzCN2wzp9gH9Hik5kIn0tfuDsKa6NwTEtcHZ_UF3zJW5dNf3IPOmBCQDPGExUZaEkN8o-hCzw683drJvtLCVcFaeVWufkwWo9aLRVRDjFQnoJW7HRxvsbW0aYBoSVod6TjhBu-asBvBE_-RUp28Iv1m2cVI-zjJh_jKVvbJagiW3ZWM4GzFzr4YFSK7KeZPrAtsG2k0D" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-surface-bright">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                        {" Nairobi Sovereign DSTA Centre "}
                      </span>
                      <span className="font-label-sm text-label-sm bg-primary/80 px-2 py-0.5 rounded text-tertiary-fixed-dim">
                        Air-Gapped Tier-IV
                      </span>
                    </div>
                  </div>
                  {/* Real-Time Cryptographic Sandbox Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-space-sm font-label-sm text-label-sm">
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col gap-0.5">
                      <span className="text-on-primary-container text-[11px] uppercase">
                        Active HSM Root Keys
                      </span>
                      <span className="font-title-md text-title-md font-bold text-surface-bright flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          key
                        </span>
                        {" 8 Sovereign Enclaves "}
                      </span>
                      <span className="text-[10px] text-tertiary-fixed-dim">
                        ECDSA P-384 / RSA-4096
                      </span>
                    </div>
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col gap-0.5">
                      <span className="text-on-primary-container text-[11px] uppercase">
                        Issuance Telemetry
                      </span>
                      <span className="font-title-md text-title-md font-bold text-secondary-fixed flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">
                          speed
                        </span>
                        {" 1,420 certs/sec "}
                      </span>
                      <span className="text-[10px] text-tertiary-fixed-dim">
                        OCSP responder latency: 4ms
                      </span>
                    </div>
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col gap-0.5">
                      <span className="text-on-primary-container text-[11px] uppercase">
                        FIPS 140-2 Level 3
                      </span>
                      <span className="font-title-md text-title-md font-bold text-surface-bright flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          security
                        </span>
                        {" Hardware Tamper Active "}
                      </span>
                      <span className="text-[10px] text-tertiary-fixed-dim">
                        Zero-latency zeroization circuit
                      </span>
                    </div>
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col gap-0.5">
                      <span className="text-on-primary-container text-[11px] uppercase">
                        Air-Gapped Nodes
                      </span>
                      <span className="font-title-md text-title-md font-bold text-surface-bright flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                          lan
                        </span>
                        {" 12 Live Physical Stacks "}
                      </span>
                      <span className="text-[10px] text-tertiary-fixed-dim">
                        Isolated fibre loop (NBO-01)
                      </span>
                    </div>
                  </div>
                  {/* Bottom Telemetry Status Line */}
                  <div className="bg-primary-container/40 p-space-xs rounded flex items-center justify-between text-surface-bright font-label-sm text-label-sm">
                    <span className="flex items-center gap-1.5 text-tertiary-fixed-dim">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                      {" Cohort 04 Lab Capacity: "}
                    </span>
                    <span className="text-secondary-fixed font-bold">
                      14 / 20 Seats Claimed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Key Stats Bar (Overlapping aesthetic bar) */}
            <div className="max-w-7xl mx-auto mt-space-xl pt-space-md border-t border-primary-container/50 grid grid-cols-2 md:grid-cols-4 gap-space-md">
              <div className="flex flex-col">
                <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-surface-bright">
                  8 Weeks
                </span>
                <span className="font-label-md text-label-md text-on-primary-container">
                  Executive Intensive Delivery
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-secondary-fixed">
                  100%
                </span>
                <span className="font-label-md text-label-md text-on-primary-container">
                  On-Soil Hardware Racks
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-surface-bright">
                  20 Fellows
                </span>
                <span className="font-label-md text-label-md text-on-primary-container">
                  Strict Cohort Cap
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-secondary-fixed">
                  Dual-Cred
                </span>
                <span className="font-label-md text-label-md text-on-primary-container">
                  {"RCFI Fellow & CAK Recognized"}
                </span>
              </div>
            </div>
          </section>
          {/* Programme Overview & Architecture Intro */}
          <section className="w-full bg-surface py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="max-w-3xl flex flex-col gap-space-xs">
                <div className="font-mono text-secondary font-semibold font-label-md text-label-md uppercase tracking-wider">
                  // PRACTICAL SOVEREIGN RESILIENCE
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Engineered for Sovereign Critical Infrastructure
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Generic cybersecurity certifications focus on hypothetical perimeter firewalls. The RCFI Academy prepares high-stakes practitioners to construct and defend national-scale trust fabrics: cryptographic key ceremonies, hardware partitioning, zero-trust cryptographic identities, and banking switch security. "}
                </p>
              </div>
              {/* 3 Key Features Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
                  <div className="w-1.5 h-full absolute left-0 top-0 bg-secondary" />
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined">
                      developer_board
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Physical HSM Operations
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Zero simulations. Fellows perform actual split-knowledge key ceremonies using PCIe and Network Luna HSM units with hardware smartcards and M-of-N PIN pads. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
                  <div className="w-1.5 h-full absolute left-0 top-0 bg-secondary" />
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined">
                      hub
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    National Mesh Architecture
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Learn the precise mechanisms governing the Kenyan Root CA, electronic signature validations, RFC 3161 timestamps, and government service mesh interconnects. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
                  <div className="w-1.5 h-full absolute left-0 top-0 bg-secondary" />
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined">
                      shield_with_heart
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Adversarial Red Teaming
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Stress-test ISO 8583 payment gateways, intercept rogue certificates, execute cryptographic downgrade exploits, and fortify national registry databases against state-grade threat actors. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Curriculum & Laboratory Matrix (Pathways 4-Pillar Layout) */}
          <section className="w-full bg-surface-container-low py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs max-w-2xl">
                  <span className="font-mono text-secondary font-semibold font-label-md text-label-md uppercase tracking-wider">
                    {"// ACADEMIC SYLLABUS & LAB ARCHITECTURE"}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    The Four Sovereign Pillars
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" A comprehensive 8-week rigorous modular journey combining low-level cryptographic engineering with national regulatory compliance. "}
                  </p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Lab Time Ratio:
                  </span>
                  <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                    65% Hands-On Live Hardware
                  </span>
                </div>
              </div>
              {/* Pillar Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {/* Pillar 01 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative">
                  <div className="flex items-start justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center font-display-lg-mobile text-display-lg-mobile font-bold text-primary">
                      {" 01 "}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                      Weeks 1 – 2
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      {" Applied PKI & Cryptographic Key Management "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Foundational and operational public key infrastructure from root issuance down to ephemeral subscriber certificates. "}
                    </p>
                  </div>
                  {/* Detailed breakdown bullets */}
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        X.509 v3 deep dissection, Certificate Policies (CP), and CPS governance
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        CRL distribution points, OCSP stapling, and ultra-low latency responders
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Automated Certificate Management Environment (ACME RFC 8555) on sovereign networks
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Split-knowledge m-of-n Shamir key ceremonies in air-gapped chambers
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 02 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative">
                  <div className="flex items-start justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center font-display-lg-mobile text-display-lg-mobile font-bold text-primary">
                      {" 02 "}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                      Weeks 3 – 4
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      {" Hardware Security Modules & Sovereign Enclaves "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Physical boundary security, cryptographic firmware validation, and direct hardware API integration. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        PKCS#11 API integrations, Cryptoki modules, and Java JCA/JCE providers
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        {"Luna PCIe and Network HSM multi-tenancy partitioning & PED authentications"}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        FIPS 140-2/3 physical tamper detection, voltage spike resistance, and zeroization triggers
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Hardware-backed RFC 3161 Time-Stamping Authorities (TSA) setup
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 03 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative">
                  <div className="flex items-start justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center font-display-lg-mobile text-display-lg-mobile font-bold text-primary">
                      {" 03 "}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                      Weeks 5 – 6
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      {" Zero-Trust Security Mesh & mTLS Architecture "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Eliminating perimeter assumptions through cryptographic identity issuance for every microservice and node. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Mutual TLS (mTLS) enforcement with strict cipher-suite pinning across Kubernetes
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        SPIFFE / SPIRE workload identification with dynamic attestation drivers
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Ingress API gateway policy enforcement and non-repudiation audit trails
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        {"Post-Quantum Cryptography (PQC) transition roadmaps: ML-KEM & Dilithium"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pillar 04 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative">
                  <div className="flex items-start justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center font-display-lg-mobile text-display-lg-mobile font-bold text-primary">
                      {" 04 "}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                      Weeks 7 – 8
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      {" Red Team Cyber Defence & Statutory Compliance "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Full-scope adversarial simulation on financial switching architecture, followed by legal defensive compliance. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        {"Simulated red-team exploitation of ISO 8583 banking switches & payment APIs"}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        {"Kenya Data Protection Act (DPA 2019) audit methodology & statutory evidence logs"}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        National Computer and Cybercrimes Coordination Committee (NC4) alert response
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Final Capstone: Live Defense of simulated National Sovereign Health Exchange
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Terminal / Lab Feature: Live Sovereign Key Ceremony */}
          <section className="w-full bg-surface py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono text-secondary font-semibold font-label-md text-label-md uppercase tracking-wider">
                  // HARDWARE TESTBED ENVIRONMENT
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {"Live Sovereign Key Ceremony & PKCS#11 Testbed"}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  {" Fellows execute operational cryptographic procedures directly against lab HSM modules. Explore an interactive snapshot of the low-level CLI commands taught during the programme. "}
                </p>
              </div>
              {/* Terminal Component */}
              <div className="bg-tertiary rounded-xl shadow-2xl overflow-hidden flex flex-col text-on-primary">
                {/* Terminal Header Bar */}
                <div className="bg-primary/80 px-space-md py-3 flex items-center justify-between border-b border-primary-container/40">
                  <div className="flex items-center gap-space-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-error" />
                      <span className="w-3 h-3 rounded-full bg-secondary-fixed-dim" />
                      <span className="w-3 h-3 rounded-full bg-secondary" />
                    </div>
                    <span className="font-mono text-label-sm text-label-sm text-tertiary-fixed-dim pl-space-xs">
                      root@dsta-nbo-hsm01:~# /opt/rcfi-ceremony/verify-chain.sh
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs font-mono text-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                    <span className="text-secondary-fixed">
                      SESSION: FIPS-LEVEL-3-SECURE
                    </span>
                  </div>
                </div>
                {/* Terminal Body */}
                <div className="p-space-lg font-mono text-body-md text-body-md flex flex-col gap-space-sm bg-tertiary/95 overflow-x-auto">
                  <div className="text-tertiary-fixed-dim">
                    <span className="text-secondary-fixed">
                      # [1/3] Querying Physical HSM Partition Slot 0 over PKCS#11
                    </span>
                    <br />
                    <span className="text-surface-bright">
                      $ pkcs11-tool --module /usr/lib/softhsm/libsofthsm2.so --show-info
                    </span>
                    <br />
                    {" Cryptoki version 2.40 | Manufacturer: SovereignTrust RCFI Kenya | Slot: 0x01 (Partition-KE-ROOT-CA) "}
                  </div>
                  <div className="text-tertiary-fixed-dim">
                    <span className="text-secondary-fixed">
                      {"# [2/3] Verifying RFC 3161 Qualified Timestamp & ECDSA Key Signature"}
                    </span>
                    <br />
                    <span className="text-surface-bright">
                      $ openssl ts -verify -data /var/audit/election-payload.bin -in /var/audit/tsa-token.tsr -CAfile /etc/pki/rcfi-root.crt
                    </span>
                    <br />
                    {" Verification: OK | Time: 2026-10-14 09:44:12 UTC | Hash: SHA-384 | Serial: 0x4F8A91C2 "}
                  </div>
                  {/* Dynamic verification output placeholder */}
                  <div className="bg-primary/60 p-space-sm rounded border-l-4 border-secondary-fixed text-surface-bright" id="terminal-output">
                    <div className="text-secondary-fixed font-bold">
                      [READY FOR VERIFICATION]
                    </div>
                    <div>
                      {"Target Enclave: "}
                      <span className="text-secondary-fixed-dim">
                        Hifadhi-House-Vault-01 (Air-Gapped)
                      </span>
                    </div>
                    <div>
                      {"Key Algorithm: "}
                      <span className="text-secondary-fixed-dim">
                        ECDSA secp384r1 (NIST P-384)
                      </span>
                    </div>
                    <div className="text-on-primary-container text-label-sm mt-1">
                      Press the action button below to dispatch live cryptographic self-test.
                    </div>
                  </div>
                </div>
                {/* Terminal Footer / Interactive Controls */}
                <div className="bg-primary px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-t border-primary-container/40">
                  <div className="flex items-center gap-space-md text-label-sm text-tertiary-fixed-dim font-mono">
                    <span>
                      TLS Cipher: TLS_AES_256_GCM_SHA384
                    </span>
                    <span className="hidden sm:inline">
                      •
                    </span>
                    <span className="hidden sm:inline">
                      HSM Model: SafeNet Luna PCIe 7.8
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary transition-all" id="run-terminal-sim">
                    <span className="material-symbols-outlined text-[18px]">
                      terminal
                    </span>
                    {" Run Security Verification "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Target Fellow Profile & Industry Placement */}
          <section className="w-full bg-surface-container-low py-space-xl px-margin">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Left Profile Details */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <div className="font-mono text-secondary font-semibold font-label-md text-label-md uppercase tracking-wider">
                  // ADMISSIONS PROFILE
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Who Should Undertake This Fellow Programme?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" The Digital Trust & Cyber Defence Programme is engineered for mid-to-senior technologists entrusted with protecting institutional viability, critical financial networks, and citizen data. "}
                </p>
                {/* Role Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                      shield
                    </span>
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        {"CISOs & Security Heads"}
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Strategic governance & statutory compliance"}
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                      key_visualizer
                    </span>
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        PKI Administrators
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        {"HSM key operations & CA trust stores"}
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                      account_balance
                    </span>
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        Fintech Architects
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Core switch encryption & EMV/PCI-DSS"}
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                      assured_workload
                    </span>
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        State Security Officers
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        National registries, e-Gov, and defense infra
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dual Credential Box */}
                <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md mt-space-xs">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Recognized Dual Credential
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Graduates receive the RCFI Certified Sovereign Security Fellow (CSSF) credential, formally recognized for public service procurement and statutory audit readiness across the East African Community.
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Career Outcomes & Institutional Sponsors */}
              <div className="lg:col-span-6 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-primary font-bold">
                    {"Alumni Placement & Employer Ecosystem"}
                  </span>
                  <span className="text-secondary font-mono font-bold text-label-sm">
                    98.4% RETENTION
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" RCFI Academy alumni hold mission-critical posts safeguarding African sovereign nodes, regulatory agencies, tier-1 financial institutions, and telecommunication carriers. "}
                </p>
                {/* Mock Institutional Badges / Placement Sectors */}
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      {"Banking & Switch"}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Tier-1 Commercial Banks
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Lead Security Officers & Switch Cryptographers"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      Telecommunications
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      {"National MNOs & ISPs"}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"eSIM PKI Root Specialists & SOC Leads"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      Public Registry
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Government MDAs
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"National Identity & Health Exchange Cryptographers"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      {"Auditing & Legal"}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Big-Four Advisory
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"DPA Compliance & ISO 27001 Lead Auditors"}
                    </span>
                  </div>
                </div>
                {/* Quotes / Proof Point */}
                <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-2 mt-2">
                  <p className="font-body-md text-body-md text-primary italic">
                    {" “The ability to run actual split-key ceremonies on physical Luna HSMs in Nairobi rather than cloud emulators was a watershed moment for our national payments team.” "}
                  </p>
                  <div className="flex items-center justify-between text-label-sm text-on-surface-variant">
                    <span className="font-bold text-primary">
                      — Senior Cryptographic Engineer, Commercial Banking Group
                    </span>
                    <span>
                      Cohort 02 Graduate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Cohort 04 Admissions & Application Workspace Form */}
          <section className="w-full bg-surface py-space-xl px-margin" id="apply-workspace">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              {/* Left Column: Dates, Pricing & NITA Reimbursement Note */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="font-mono text-secondary font-semibold font-label-md text-label-md uppercase tracking-wider">
                  // ADMISSIONS WORKSPACE
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Cohort 04 Admissions Schedule
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" Due to strict air-gapped laboratory hardware station constraints at Hifadhi House, cohort registration is capped strictly at 20 fellows. "}
                </p>
                {/* Deadlines List */}
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Application Cut-off
                      </span>
                      <span className="font-title-md text-title-md text-primary font-bold">
                        September 25, 2026
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      event
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Technical Interview Window
                      </span>
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Oct 01 – Oct 06, 2026
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      record_voice_over
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        {"Cohort Kickoff & Lab Orientation"}
                      </span>
                      <span className="font-title-md text-title-md text-primary font-bold">
                        October 14, 2026
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      rocket_launch
                    </span>
                  </div>
                </div>
                {/* NITA Accreditation Notice */}
                <div className="p-space-md rounded-xl bg-surface-container-high text-on-surface flex items-start gap-space-sm mt-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col gap-0.5 font-label-md text-label-md">
                    <span className="font-bold text-primary">
                      NITA Accredited Training Institution
                    </span>
                    <span className="text-on-surface-variant">
                      Kenyan registered corporate employers are eligible for full or partial training levy reimbursement via the National Industrial Training Authority (NITA/TRN/2194).
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Column: Interactive Application Form */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-2xl shadow-md">
                <form className="flex flex-col gap-space-md" id="fellow-application-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('form-feedback').classList.remove('hidden');">
                  <div className="flex flex-col gap-space-xs border-b border-surface-container pb-space-sm">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      {"Fellow Candidacy & Syllabus Request"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Submit your professional details for verification by the RCFI Academic Admissions Board.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="fullname">
                        Full Name *
                      </label>
                      <input className="h-11 px-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="fullname" placeholder="e.g. Dr. Faith Mutua" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="workemail">
                        Work / Institutional Email *
                      </label>
                      <input className="h-11 px-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="workemail" placeholder="faith.mutua@cbn.go.ke" required type="email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="org">
                        Organization / Ministry / MDA *
                      </label>
                      <input className="h-11 px-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="org" placeholder="e.g. Central Bank of Kenya / Safaricom" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="role">
                        Technical Title / Role *
                      </label>
                      <input className="h-11 px-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="role" placeholder="e.g. Lead Cyber Infrastructure Architect" required type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="track">
                      Intended Sponsorship Track *
                    </label>
                    <select className="h-11 px-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="track">
                      <option>
                        Corporate Sponsored (Direct Enterprise Billing)
                      </option>
                      <option>
                        NITA Training Levy Reimbursed
                      </option>
                      <option>
                        Government / State MDA Grantee
                      </option>
                      <option>
                        Self-Sponsored Executive
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="motivation">
                      {"Statement of Cryptographic Interest & Infrastructure Role"}
                    </label>
                    <textarea className="p-3 rounded-lg bg-surface-container-low border-0 text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary outline-none transition-all" id="motivation" placeholder="Briefly describe your current PKI, HSM, or cyber defence responsibilities and how you will apply these competencies..." rows={3} defaultValue="" />
                  </div>
                  <div className="flex items-center gap-space-sm pt-space-xs">
                    <input className="w-4 h-4 rounded text-secondary focus:ring-secondary accent-primary" id="nda-agree" required type="checkbox" />
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="nda-agree">
                      {" I acknowledge that access to the live RCFI FIPS 140-2 Level 3 enclave requires execution of standard sovereign non-disclosure agreements prior to physical access. "}
                    </label>
                  </div>
                  <div className="pt-space-xs">
                    <button className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md font-bold transition-all flex items-center justify-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      {" Submit Application for Cohort 04 "}
                    </button>
                  </div>
                  {/* Submission Confirmation Alert (Hidden by default) */}
                  <div className="hidden p-space-md rounded-lg bg-secondary-container text-on-secondary-container font-body-md text-body-md flex items-start gap-space-xs" id="form-feedback">
                    <span className="material-symbols-outlined text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold">
                        Application Registered Successfully
                      </span>
                      <span>
                        Our academic registrar will review your organizational credentials and contact you within 24 business hours with the full syllabus and interview schedule.
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Inline Micro-interaction Script for Interactive Terminal and Actions */}
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary border-t border-primary-container/60">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-md text-secondary-fixed tracking-tight font-bold">
                  RCFI
                </span>
              </div>
              <p className="text-on-primary-container font-body-md text-body-md leading-relaxed">
                Reprodrive Center for Innovation Limited. Pan-African digital trust infrastructure, cryptographic assurance, and enterprise academy ecosystem.
              </p>
              <div className="flex flex-col gap-space-xs pt-space-xs font-label-sm text-label-sm text-tertiary-fixed-dim">
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    CAK Licensed ECSP (TL/E-CSP 00014)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    ISO 27001:2022 Certified
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span>
                    Kenya DPA Compliant Operator
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cybersecurity" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-health-governance" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-data-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="services-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                Sovereign Platforms
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-certysign" href="/products/certysign/">
                    CertySign Platform
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-elano" href="/products/elano/">
                    Elano Enterprise
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="product-prezio" href="/products/prezio/">
                    Prezio Identity
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="repository-cps" href="/trust/">
                    Certification Practice Statement
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="verify-document" href="/verify/">
                    Document Validation Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Academy & Insights"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-overview" href="/academy/">
                    Academy Programs
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="academy-health-interoperability" href="/services/digital-health-governance/">
                    Health Interoperability
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-the-trust-layer" href="/insights/">
                    The Trust Layer Journal
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-sovereignty-series" href="/insights/">
                    The Sovereignty Series
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="insights-knowledge-hub" href="/insights/">
                    {"Knowledge Hub & RFCs"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
                {"Trust & Compliance"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="trust-center" href="/trust/">
                    {"Security & Trust Portal"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="ca-repository" href="/trust/">
                    CA Public Repository
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="compliance-audit" href="/trust/">
                    Third-Party SOC/ISO Audits
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="legal-privacy" href="/privacy/">
                    {"Data Protection & Privacy"}
                  </Link>
                </li>
                <li className="hover:text-secondary-fixed transition-colors">
                  <Link data-path="responsible-disclosure" href="/trust/">
                    Vulnerability Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-xl pt-space-md border-t border-primary-container/50 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-primary-container font-label-md text-label-md">
            <div className="flex items-center gap-space-xs text-center md:text-left">
              <span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya.
              </span>
            </div>
            <div className="text-center md:text-right">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All sovereign rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
