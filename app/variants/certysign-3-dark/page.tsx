import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/variants-certysign-3-dark/page.css";

export const metadata: Metadata = { title: "CertySign (variant 3, dark) | RCFI" };

export default function VariantsCertysign3DarkPage() {
  return (
    <div className="rcfi-variants-certysign-3-dark dark" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-sovereign-navy/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-surface-container-lowest/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between font-label-badge text-label-badge text-on-surface-variant">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald animate-pulse" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <span className="opacity-30">
                |
              </span>
              <span>
                CAK Licensed ECSP (TL/E-CSP 00014)
              </span>
              <span className="hidden md:inline opacity-30">
                |
              </span>
              <span className="hidden md:inline">
                Kenya DPA Compliant
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a className="hover:text-primary transition-colors tracking-normal lowercase" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img alt={"Brand logo. - Primary color: #00d2c4\n- Font: plusJakartaSans\n- Mode: dark\n- Roundness: rounded-md\n"} className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VhHRfSnZ0eDlf_nHucafLxlITKvLohLcbCnq18g2C3JlmuTBQn8mtRFrY9rhjmtBOdNkCqinAw_YwzJIwxnmGT2OjAGONjzlZzEB-geMVPJe9GfHrKeQlTQPuW80XNpml08jMVzuhj1Ud6Y_oAatUEIK75zUPmypluqB-PPMgBVFgVggqKt6ydMqjLohLOjQ5te1eG2x-o9Va1vQOj_RA0EKEl4Ws9WSkXEmK__87pSsAPTMVS5KRQPwI" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-none tracking-tight">
                RCFI
              </span>
              <span className="font-label-badge text-label-badge text-primary tracking-wider uppercase scale-90 -ml-1">
                Digital Trust
              </span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-1 font-body-sm text-body-sm" data-active-classes="bg-surface-elevated text-primary font-bold rounded-lg">
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="home" href="/">
              Home
            </Link>
            <Link aria-current="page" className="px-3 py-2 transition-all relative flex items-center gap-1.5 bg-surface-elevated text-primary font-bold rounded-lg" data-path="certysign" href="/products/certysign/">
              <span>
                CertySign
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-badge text-[10px] uppercase font-bold">
                Flagship
              </span>
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="health-security" href="/health-security/">
              Health Security
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="elano" href="/products/elano/">
              Elano
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="prezio" href="/products/prezio/">
              Prezio
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="about" href="/about/">
              About
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="careers" href="/careers/">
              Careers
            </Link>
            <Link className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-path="contact" href="/contact/">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-body-sm text-body-sm font-semibold text-on-surface bg-surface-elevated hover:bg-surface-container-high transition-all" data-path="verify-document" href="/verify/">
              Verify Document
            </Link>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-body-sm text-body-sm font-bold bg-primary-container text-on-primary-container hover:bg-primary transition-all shadow-[0_0_20px_rgba(0,210,196,0.3)]" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
      <main className="w-full pt-28 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Ambient Accent */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            {/* Hero Section: High Impact Pathways-Style Layout */}
            <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Hero Column */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated text-primary font-label-badge text-label-badge w-fit shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-digital-emerald animate-ping" />
                    <span className="tracking-widest uppercase">
                      // LICENSED DIGITAL TRUST PLATFORM · CAK ECSP COMPLIANT
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
                    {" Kenya’s Sovereign Platform for "}
                    <span className="text-primary font-extrabold">
                      Digital Signing
                    </span>
                    {", PKI & Document Trust "}
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
                    {" Legally binding digital signature certificates, automated e-KYC identity verification, and tamper-proof invoice authentication. Sovereign cryptographic infrastructure anchored to Kenya’s national root authority. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-sm font-bold shadow-[0_0_24px_rgba(0,210,196,0.35)] hover:bg-primary transition-all" data-path="book-a-meeting" href="/products/certysign/">
                      <span>
                        Get CertySign Live
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                    <Link className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface-elevated text-on-surface hover:bg-surface-container-high transition-all shadow-sm font-body-sm text-body-sm font-semibold" data-path="verify-document" href="/verify/">
                      <span className="material-symbols-outlined text-electric-cyan text-[20px]">
                        verified
                      </span>
                      <span>
                        Verify a Document
                      </span>
                    </Link>
                    <a className="inline-flex items-center gap-1.5 px-4 py-3.5 text-on-surface-variant hover:text-primary transition-colors font-label-code text-label-code" href="#compliance">
                      <span className="material-symbols-outlined text-[16px]">
                        file_download
                      </span>
                      <span>
                        PKI Whitepaper (v2.4)
                      </span>
                    </a>
                  </div>
                  {/* Trust Badges Bar */}
                  <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-digital-emerald text-xl">
                        gavel
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-badge text-label-badge text-text-primary">
                          KICA Sec 83B
                        </span>
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          Court Admissible
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-xl">
                        shield
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-badge text-label-badge text-text-primary">
                          TL/E-CSP 00014
                        </span>
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          CAK Licensed
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        encrypted
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-badge text-label-badge text-text-primary">
                          FIPS 140-2 L3
                        </span>
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          HSM Protected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Hero Console Visual */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-xl bg-surface-slate shadow-2xl overflow-hidden p-5 flex flex-col gap-4">
                    {/* Console Header Bar */}
                    <div className="flex items-center justify-between pb-3 bg-surface-slate">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-error/70 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-warning-amber/70 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-digital-emerald/70 inline-block" />
                        <span className="ml-2 font-label-code text-label-code text-text-muted">
                          CertySign Sovereign Console v4.12
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated font-label-badge text-label-badge text-primary">
                        NODE #01 NAIROBI
                      </span>
                    </div>
                    {/* Live Verification Card */}
                    <div className="p-4 rounded-lg bg-surface-elevated flex flex-col gap-3 shadow-inner">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">
                              verified_user
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline-sm text-sm text-text-primary font-bold">
                              Attorney General Chambers
                            </h4>
                            <p className="font-label-code text-xs text-text-muted">
                              Cert Serial: 0x4A79F938C02B194E
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-1 rounded bg-digital-emerald/20 text-digital-emerald font-label-badge text-label-badge flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald" />
                          {" VALID SIGNATURE "}
                        </span>
                      </div>
                      {/* Monospace Telemetry Details */}
                      <div className="p-3 rounded bg-sovereign-navy font-label-code text-label-code text-on-surface-variant flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span className="text-text-muted">
                            DOC HASH (SHA-256):
                          </span>
                          <span className="text-primary truncate max-w-[200px]">
                            e3b0c44298fc1c149afbf4c8996fb92427ae...
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">
                            ROOT ANCHOR:
                          </span>
                          <span className="text-text-primary">
                            Communications Authority of Kenya RCA
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">
                            TSA TIMESTAMP:
                          </span>
                          <span className="text-text-primary">
                            2026-03-30T10:44:18.042+03:00 (RFC 3161)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">
                            OCSP STATUS:
                          </span>
                          <span className="text-digital-emerald">
                            GOOD (Revocation checked in 18ms)
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Signing Pipeline Progress Indicator */}
                    <div className="p-4 rounded-lg bg-surface-container flex flex-col gap-2">
                      <div className="flex items-center justify-between font-label-badge text-label-badge">
                        <span className="text-text-primary">
                          PARALLEL BULK SIGNING STREAM
                        </span>
                        <span className="text-primary font-bold">
                          1,482 / 1,500 SIGNED (98.8%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[98.8%]" />
                      </div>
                      <div className="flex justify-between items-center text-xs text-text-muted pt-1">
                        <span>
                          Throughput: 84 sig/sec
                        </span>
                        <span className="text-digital-emerald">
                          HSM Temperature: 32°C (Optimal)
                        </span>
                      </div>
                    </div>
                    {/* Interactive Document Test Widget */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                      <span className="material-symbols-outlined text-warning-amber">
                        policy
                      </span>
                      <div className="flex-1 text-xs">
                        <p className="text-text-primary font-semibold">
                          Statutory Recognition
                        </p>
                        <p className="text-text-muted">
                          {"Equivalent to ink-on-paper wet signatures across High Court & Land Registries"}
                        </p>
                      </div>
                      <button className="px-3 py-1.5 rounded bg-primary text-on-primary font-label-badge text-label-badge font-bold transition-all" data-rcfi-onclick="this.innerText='Validated!'">
                        {" AUDIT "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Section 2: Metrics Ribbon */}
          <section className="w-full bg-surface-slate py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-2 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                    // NATIONAL VOLUME
                  </span>
                  <div className="font-display-hero text-3xl lg:text-4xl text-text-primary font-extrabold tracking-tight">
                    50,000+
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cryptographic Signatures Authenticated monthly across MDAs and Private Enterprise.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-2 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="font-label-badge text-label-badge uppercase text-digital-emerald tracking-widest">
                    // LEGAL CERTAINTY
                  </span>
                  <div className="font-display-hero text-3xl lg:text-4xl text-text-primary font-extrabold tracking-tight">
                    100%
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Statutory Non-Repudiation backed by the Kenya Information & Communications Act."}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-2 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
                    // VERIFICATION LATENCY
                  </span>
                  <div className="font-display-hero text-3xl lg:text-4xl text-text-primary font-extrabold tracking-tight">
                    {"< 2.4s"}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Sub-second cryptographic hashing, OCSP validation, and CRL interrogation turnaround.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-2 shadow-sm hover:scale-[1.02] transition-transform">
                  <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                    // SOVEREIGN SLA
                  </span>
                  <div className="font-display-hero text-3xl lg:text-4xl text-text-primary font-extrabold tracking-tight">
                    99.98%
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mission-critical redundancy deployed locally in Tier III Nairobi data centers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: Core Capabilities (6-Grid Pathways Layout) */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <div className="flex flex-col gap-3 mb-14">
              <div className="inline-flex items-center gap-2 text-primary font-label-badge text-label-badge uppercase tracking-widest">
                <span>
                  // CAPABILITIES · FULL-STACK PKI
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight max-w-3xl">
                {" Everything your enterprise needs to transition from wet signatures to sovereign digital trust. "}
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
                {" Eliminate document fraud, avoid regulatory enforcement fines, and automate cross-enterprise workflows with trusted digital certificates. "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      badge
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Digital Signature Certificates
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Class 2 and Class 3 Individual, Corporate, and Electronic Seal certificates issued directly under Communications Authority licensing. Secure signing on web, mobile, and desktop. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-primary">
                  <span>
                    X.509 v3 CERTIFICATES
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Capability 2 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      receipt_long
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    {"Invoice & Tax Authentication"}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Automated cryptographic seals on e-invoices, credit notes, and regulatory filings. Built to support national revenue authority compliance and prevent invoice manipulation. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-secondary">
                  <span>
                    KRA eTIMS COMPATIBLE
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Capability 3 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-digital-emerald shadow-sm group-hover:bg-digital-emerald group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      fingerprint
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    {"e-KYC & Biometric Verification"}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Instant on-boarding identity checks integrating with national registration databases (IPRS), facial liveness detection, and statutory AML/CFT registries prior to certificate issuance. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-digital-emerald">
                  <span>
                    NATIONAL IPRS CONNECTIVITY
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Capability 4 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-primary-fixed-dim shadow-sm group-hover:bg-primary-fixed-dim group-hover:text-on-primary-fixed transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      domain_verification
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Document Verification Portal
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Open verification endpoint and browser tool for third parties, courts, and counterparties to authenticate signed PDFs, inspect cryptographic chains, and view audit trails without fees. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-primary-fixed-dim">
                  <span>
                    {"ONLINE CRL & OCSP AUDIT"}
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Capability 5 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-electric-cyan shadow-sm group-hover:bg-electric-cyan group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      memory
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Hardware Security Modules (HSM)
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Dedicated or multi-tenant FIPS 140-2 Level 3 HSM partitions located securely within Kenya. Zero international key escrow risk ensures full technological sovereignty for confidential records. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-electric-cyan">
                  <span>
                    LOCAL REPOSITORY HOSTING
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* Capability 6 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between group hover:bg-surface-elevated transition-all shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-slate flex items-center justify-center text-tertiary-container shadow-sm group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      api
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    {"Developer APIs & SDKs"}
                  </h3>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" Modern high-throughput REST APIs, asynchronous webhooks, and production SDKs for Python, Node.js, Java, and C# .NET. Plug directly into your ERP, core banking, or CRM in minutes. "}
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between font-label-badge text-label-badge text-tertiary-container">
                  <span>
                    {"REST, GRAPHQL & WEBHOOKS"}
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: Enterprise Workflow Architecture (Pathways Horizontal Step Flow) */}
          <section className="w-full bg-surface-slate py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                    // THE ENGINE
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-2">
                    {" Enterprise Verification Lifecycle "}
                  </h2>
                </div>
                <p className="font-body-default text-body-default text-on-surface-variant max-w-md">
                  {" How sovereign digital certification moves from identity authentication to immutable court-ready certificates in milliseconds. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col gap-4 relative overflow-hidden shadow-sm">
                  <div className="font-display-hero text-4xl font-extrabold text-outline-variant/60">
                    01
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      person_pin
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base text-text-primary font-bold">
                    {"Identity & e-KYC"}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Identity validated via Kenya Integrated Population Registration System (IPRS) and biometrics against official registries. "}
                  </p>
                  <div className="mt-auto pt-3 font-label-code text-xs text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald" />
                    <span>
                      Identity Bound (NIN/PIN)
                    </span>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col gap-4 relative overflow-hidden shadow-sm">
                  <div className="font-display-hero text-4xl font-extrabold text-outline-variant/60">
                    02
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-lg">
                      key
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base text-text-primary font-bold">
                    Sovereign Key Gen
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Certificates generated inside on-soil HSMs. Asymmetric key pairs (RSA 4096 / ECDSA) are issued under Root CA CRLs. "}
                  </p>
                  <div className="mt-auto pt-3 font-label-code text-xs text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>
                      Zero Remote Key Escrow
                    </span>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col gap-4 relative overflow-hidden shadow-sm">
                  <div className="font-display-hero text-4xl font-extrabold text-outline-variant/60">
                    03
                  </div>
                  <div className="w-8 h-8 rounded-full bg-digital-emerald/20 flex items-center justify-center text-digital-emerald">
                    <span className="material-symbols-outlined text-lg">
                      history_edu
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base text-text-primary font-bold">
                    Document Signing
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Only the document hash leaves client perimeter. RFC 3161 timestamping embeds verifiable date-time proof into PAdES container. "}
                  </p>
                  <div className="mt-auto pt-3 font-label-code text-xs text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald" />
                    <span>
                      PAdES-LTV Compliant
                    </span>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col gap-4 relative overflow-hidden shadow-sm">
                  <div className="font-display-hero text-4xl font-extrabold text-outline-variant/60">
                    04
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      fact_check
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-base text-text-primary font-bold">
                    Public Verification
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Complete audit trail generated with SHA-256 validation proof. Anyone can verify authenticity offline or online without proprietary apps. "}
                  </p>
                  <div className="mt-auto pt-3 font-label-code text-xs text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>
                      Evidence Act Admissible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 5: Sector-Specific Use Cases (Pathways Case Study Style) */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <div className="flex flex-col gap-3 mb-12">
              <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                // INSTITUTIONAL APPLICATIONS
              </span>
              <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
                {" Engineered for High-Stakes African Sectors "}
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
                {" Deploy sovereign digital signatures in workflows where non-compliance, fraud, or signature disputes carry millions in liability. "}
              </p>
            </div>
            {/* Case Studies Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sector 1: Banking */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-lg group">
                <div className="h-44 relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Modern African enterprise banking board meeting in Nairobi with executives reviewing legal documents on digital tablets, cinematic cool cyan lighting" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiGVeue8MnUNhOo93aU8UYAmH3i3KYarHAOIe3WeLAPVpcEFBF2ashRYegmyL3xLUrU13m6Bw7fSFAIx9JesixAhRhl0cWV0Y_xNEsxFRl3jwAEUMn2T1UHKtkFq9_nyO144P-o5RiX5LSNiSVkWggV0yjuxBd2oyaAtvpvb5d542GSFEELTNKOGfU43DDGkTZ5X4rl5eOZZwkaCgqycit1S_c_zL-yIhMUDM1HqnCqS-eUz6XzCnc')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-slate/90 backdrop-blur font-label-badge text-label-badge text-primary">
                    FINANCIAL SERVICES
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-headline-sm text-lg text-text-primary font-bold">
                    {"Banking & SACCOs"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {" Automate remote loan contract execution, board resolutions, customer mandate updates, and high-value treasury approvals without physical paper rounds. "}
                  </p>
                  <div className="pt-4 flex items-center justify-between font-label-badge text-label-badge text-secondary">
                    <span>
                      CBK DIRECTIVE ALIGNED
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
              {/* Sector 2: Legal & Judiciary */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-lg group">
                <div className="h-44 relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Kenyan high court advocate chambers with legal codices, architectural law library with soft electric lighting on leather desk" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzZyPsPuWOThYBuYMFuEN03xxmRUxUQq92YZ4ukZTO5oJsR-R2jD9_lmGDbmq9AyGTZOUTUWz0fe9szoI3M7uj6Ah-LVxpAB7f70g9rbxnQAYLktJy0h5BA-7G39LrDrIXprBm_pQOQEOy1FBASOPqAkKTlQ7r2nfXrU-qmqARN9szXpVh-Xtx0m-tiQzxDrAGMoiYA5Rd_vSLK0w5AavM2a8VUs_KxgKT08837uq0GhLrdi8C7fvg')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-slate/90 backdrop-blur font-label-badge text-label-badge text-digital-emerald">
                    {"JUSTICE & DISPUTES"}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-headline-sm text-lg text-text-primary font-bold">
                    {"Legal & Judiciary"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {" E-filing submissions for the Judiciary Portal, advocate commissioning affidavits, powers of attorney, and conveyancing sale agreements with non-repudiation. "}
                  </p>
                  <div className="pt-4 flex items-center justify-between font-label-badge text-label-badge text-digital-emerald">
                    <span>
                      JUDICIARY CTS READY
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
              {/* Sector 3: Government & Parastatals */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-lg group">
                <div className="h-44 relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Government administration modern glass building in Nairobi Kenya with African flag and digital infrastructure data cables" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE_D1GEcpbD9KOwMAodwtZFu0ccgPIStQWW_IYW9dWZZzKXHrBICxl3GwtOOV1GuNbu29XSSHPNibtzG1HVnhzjApbKFHDXVQ3XmPVxtWCmmBXvk9y_nbun_EYMsnZhwpTlX6A2V8Uuyefop2f30A6YA6DC2Bm7O_RxXeP4IlrsPQAX-OF0VAoAn-_x7x4ipRLrR5yKHn-6eWFuv15iUTcOQEyIA-Z_q1Ua5jQAH2lncYmtobbQXOK')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-slate/90 backdrop-blur font-label-badge text-label-badge text-primary">
                    PUBLIC SECTOR
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-headline-sm text-lg text-text-primary font-bold">
                    {"Government & MDAs"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {" Official Kenya Gazette notices, procurement contracts, public circulars, and inter-agency memo approvals signed under statutory sovereign digital seals. "}
                  </p>
                  <div className="pt-4 flex items-center justify-between font-label-badge text-label-badge text-primary">
                    <span>
                      PUBLIC PROCUREMENT ACT
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
              {/* Sector 4: Healthcare & Clinical */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-lg group">
                <div className="h-44 relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Clinical hospital telemetry diagnostics monitor with Kenyan doctor reviewing medical laboratory certificates on digital screen" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7xu0ICQKp9Z0V_W8aPq75Ns4ZZL2WSEC9jnl74TXsb1XJ4eUo0XtY7WMfECjeO8QAjBFYeAcMhu3BVefYcJf9tL5efQb_0ACG4eQw0MAGtHvOQX3acrL7ZLj6TLqg-G7PgEhDtwQGSD_UvS6WyrpHQ2y8m_amy_Cw5dKHu1yBUz8iGkq_t_d9S2JBRWRXhh_Dy2TfvZGaMiZhQElwMNDzDQQtc2h4R1q2gFLuShxhZy1rWu2wK7QE')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-slate/90 backdrop-blur font-label-badge text-label-badge text-tertiary">
                    HEALTH SECURITY
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-headline-sm text-lg text-text-primary font-bold">
                    {"Healthcare & Pharma"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {" Doctor e-prescriptions, diagnostic pathology lab sign-offs, clinical trial integrity logs, and patient consent documentation with tamper-proof time stamps. "}
                  </p>
                  <div className="pt-4 flex items-center justify-between font-label-badge text-label-badge text-tertiary">
                    <span>
                      DATA PROTECTION ACT 2019
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 6: Technical Specifications & Cryptographic Rigor */}
          <section className="w-full bg-surface-slate py-20" id="compliance">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Specs Info */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                    // CRYPTOGRAPHIC ASSURANCE
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
                    {" Built to Global Standards, Rooted on African Soil "}
                  </h2>
                  <p className="font-body-default text-body-default text-on-surface-variant">
                    {" CertySign is audited against international cryptographic frameworks, ensuring interoperability with Adobe Acrobat Approved Trust List (AATL) paradigms and European eIDAS qualified certificate parity. "}
                  </p>
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-digital-emerald">
                        verified
                      </span>
                      <div>
                        <p className="font-headline-sm text-sm text-text-primary font-bold">
                          CAK License: TL/E-CSP 00014
                        </p>
                        <p className="font-body-sm text-xs text-on-surface-variant">
                          Authorized Electronic Certification Service Provider
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-primary">
                        security
                      </span>
                      <div>
                        <p className="font-headline-sm text-sm text-text-primary font-bold">
                          ISO/IEC 27001:2022 Certified
                        </p>
                        <p className="font-body-sm text-xs text-on-surface-variant">
                          Information Security Management System Accredited
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-secondary">
                        database
                      </span>
                      <div>
                        <p className="font-headline-sm text-sm text-text-primary font-bold">
                          Kenya Data Protection Act 2019
                        </p>
                        <p className="font-body-sm text-xs text-on-surface-variant">
                          {"ODPC Registered Data Controller & Data Processor"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Specs Table / Tech Matrix */}
                <div className="lg:col-span-7 rounded-xl bg-surface-container-low p-6 shadow-xl flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-label-badge text-label-badge uppercase tracking-wider text-text-primary font-bold">
                      {"Technical Matrix & Standards"}
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated font-label-code text-xs text-primary">
                      AUDITED 2026
                    </span>
                  </div>
                  {/* Structured Data Rows */}
                  <div className="flex flex-col gap-3 font-body-sm text-body-sm">
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Signature Container Formats
                      </span>
                      <span className="font-label-code text-text-primary font-bold">
                        PAdES (PDF), CAdES (Binary), XAdES (XML), JWS (JSON)
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Cryptographic Algorithms
                      </span>
                      <span className="font-label-code text-primary font-bold">
                        RSA 2048/4096-bit, ECDSA (NIST P-256 / P-384), SHA-256/512
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Timestamping Authority (TSA)
                      </span>
                      <span className="font-label-code text-text-primary font-bold">
                        RFC 3161 Compliant Hardware Time Clock Sync
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Certificate Revocation Checking
                      </span>
                      <span className="font-label-code text-text-primary font-bold">
                        {"Real-time OCSP (RFC 6960) & Daily Published CRLs"}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Hardware Security Enforcement
                      </span>
                      <span className="font-label-code text-text-primary font-bold">
                        FIPS 140-2 Level 3 Physical Appliance (Nairobi DC)
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-text-muted">
                        Long-Term Validation (LTV)
                      </span>
                      <span className="font-label-code text-digital-emerald font-bold">
                        {"Embedded DSS & VRI (Verifiable 10+ Years Offline)"}
                      </span>
                    </div>
                  </div>
                  {/* Code Snippet API Preview */}
                  <div className="p-4 rounded-lg bg-sovereign-navy font-label-code text-label-code flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <span>
                        PYTHON SDK SIGNATURE CALL
                      </span>
                      <span>
                        certy_client.py
                      </span>
                    </div>
                    <pre className="text-xs text-on-surface-variant overflow-x-auto leading-relaxed">
                      <span className="text-primary">
                        {"from"}
                      </span>
                      {" certysign "}
                      <span className="text-primary">
                        {"import"}
                      </span>
                      {" SovereignClient\n\nclient = SovereignClient(api_key="}
                      <span className="text-tertiary">
                        {"\"cs_live_9f02a...\""}
                      </span>
                      {", hsm_node="}
                      <span className="text-tertiary">
                        {"\"nbo-01\""}
                      </span>
                      {")\nreceipt = client.sign_document(\n    doc_hash="}
                      <span className="text-tertiary">
                        {"\"e3b0c44298fc1c149afbf4c8996fb924...\""}
                      </span>
                      {",\n    certificate_id="}
                      <span className="text-tertiary">
                        {"\"cert_corp_attorney_general\""}
                      </span>
                      {",\n    compliance_mode="}
                      <span className="text-tertiary">
                        {"\"KICA_STRICT\""}
                      </span>
                      {"\n)\n"}
                      <span className="text-digital-emerald">
                        {"print"}
                      </span>
                      {"(f"}
                      <span className="text-tertiary">
                        {"\"Signed & Anchored: {receipt.audit_url}\""}
                      </span>
                      {") "}
                      <span className="text-text-muted">
                        {"# 200 OK"}
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 7: Pathways-Style High-Impact Conversion Banner */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="relative rounded-2xl bg-surface-slate overflow-hidden p-10 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className="font-label-badge text-label-badge uppercase text-primary tracking-widest">
                  // PARTNER WITH RCFI
                </span>
                <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
                  {" Deploy CertySign across your organization in days, not months. "}
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  {" Empower your enterprise with Kenya’s officially accredited PKI infrastructure. Schedule a personalized walkthrough with our cryptography solutions team in Nairobi. "}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-sm font-bold shadow-[0_0_24px_rgba(0,210,196,0.35)] hover:bg-primary transition-all" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  <span>
                    Schedule Technical Demo
                  </span>
                </a>
                <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-elevated text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-all shadow-sm" data-path="verify-document" href="/verify/">
                  <span className="material-symbols-outlined text-electric-cyan text-[18px]">
                    terminal
                  </span>
                  <span>
                    Test Verification Sandbox
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-sovereign-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img alt={"Brand logo. - Primary color: #00d2c4\n- Font: plusJakartaSans\n- Mode: dark\n- Roundness: rounded-md\n"} className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VhHRfSnZ0eDlf_nHucafLxlITKvLohLcbCnq18g2C3JlmuTBQn8mtRFrY9rhjmtBOdNkCqinAw_YwzJIwxnmGT2OjAGONjzlZzEB-geMVPJe9GfHrKeQlTQPuW80XNpml08jMVzuhj1Ud6Y_oAatUEIK75zUPmypluqB-PPMgBVFgVggqKt6ydMqjLohLOjQ5te1eG2x-o9Va1vQOj_RA0EKEl4Ws9WSkXEmK__87pSsAPTMVS5KRQPwI" />
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  RCFI
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {"Sovereign Digital Trust & Innovation. Kenya's licensed electronic certification service provider and technology partner for national public infrastructure."}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-slate font-label-badge text-label-badge text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-digital-emerald" />
                  <span>
                    TL/E-CSP 00014
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-slate font-label-badge text-label-badge text-on-surface-variant">
                  <span>
                    ISO/IEC 27001:2022
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-label-badge text-label-badge uppercase tracking-wider text-primary">
                Sovereign Products
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign PKI
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="elano" href="/products/elano/">
                    Elano Governance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio Workflow
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="pki-as-a-service" href="/services/digital-trust-pki/">
                    PKI as a Service
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="hsm-as-a-service" href="/services/digital-trust-pki/">
                    HSM as a Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-label-badge text-label-badge uppercase tracking-wider text-primary">
                {"Practices & Assurance"}
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="health-security" href="/academy/digital-health-interoperability/">
                    Digital Health Interoperability
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="cybersecurity-audits" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Audits"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="rcfi-academy" href="/academy/">
                    RCFI Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors" data-path="ca-repository" href="/trust/">
                    CA Repository
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-label-badge text-label-badge uppercase tracking-wider text-primary">
                {"Contact & Nairobi HQ"}
              </h4>
              <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
                <p className="leading-relaxed">
                  5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                </p>
                <p>
                  <a className="hover:text-primary transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </p>
                <p className="font-label-code text-label-code text-on-surface">
                  +254 (0) 20 790 3888
                </p>
                <div className="pt-2">
                  <span className="inline-block font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-elevated text-secondary">
                    Communications Authority of Kenya Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
            <p>
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 font-body-sm text-body-sm">
              <Link className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="cp-cps" href="/trust/">
                CP/CPS
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="root-ca-certificate" href="/trust/">
                Root CA Certificate
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
