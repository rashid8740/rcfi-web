import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/partners-konza/page.css";
import "@/styles/pages/partners-konza/late.css";

export const metadata: Metadata = { title: "Konza Technopolis Partnership | RCFI Technology" };

export default function PartnersKonzaPage() {
  return (
    <div className="rcfi-partners-konza" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="bg-primary-container text-on-primary h-10 px-margin flex items-center justify-between border-b border-outline/20">
          <div className="flex items-center gap-space-md font-label-sm text-label-sm tracking-wide">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                call
              </span>
              <a className="hover:text-secondary-fixed transition-colors" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
            </div>
            <span className="text-outline-variant">
              |
            </span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                mail
              </span>
              <a className="hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
            <span className="hidden lg:inline text-outline-variant">
              |
            </span>
            <div className="hidden lg:flex items-center gap-2 bg-primary/40 px-2.5 py-0.5 rounded-full border border-secondary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
              </span>
              <span className="text-secondary-fixed font-semibold">
                {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm">
            <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
              CA Repository
            </Link>
            <span className="text-outline-variant">
              |
            </span>
            <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
              Trust Center
            </Link>
            <span className="text-outline-variant">
              |
            </span>
            <span className="text-on-primary-container hidden sm:inline">
              Kenya DPA Compliant
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin h-16 flex items-center justify-between">
            <div className="flex items-center gap-space-lg">
              <Link className="flex items-center gap-3 py-1" data-path="home" href="/">
                <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-none tracking-tight">
                    RCFI
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-tight tracking-wider uppercase">
                    Reprodrive Center for Innovation
                  </span>
                </div>
              </Link>
              <nav className="hidden xl:flex items-center gap-6 font-body-md text-body-md" data-active-classes="text-secondary font-semibold relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2px] after:bg-secondary">
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="services" href="/services/">
                  Services
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="products" href="/products/certysign/">
                  Products
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="partners-ecosystem" href="/partners/">
                  {"Partners & Ecosystem"}
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="insights" href="/insights/">
                  Insights
                </Link>
                <Link className="text-on-surface-variant hover:text-primary transition-colors py-2" data-path="company" href="/about/">
                  Company
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-space-sm">
              <Link className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant font-label-md text-label-md text-primary hover:bg-surface-container-low transition-colors" data-path="document-verification" href="/verify/">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified
                </span>
                <span>
                  Verify a Document
                </span>
              </Link>
              <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[104px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Breadcrumb & Status Canvas Header */}
          <section className="w-full bg-surface-container-lowest py-6">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                  <span className="text-outline-variant font-bold">
                    /
                  </span>
                  <Link className="hover:text-primary transition-colors" data-path="partners-ecosystem" href="/partners/">
                    {"Partners & Ecosystem"}
                  </Link>
                  <span className="text-outline-variant font-bold">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    Konza Technopolis
                  </span>
                </nav>
                <div className="flex items-center gap-3 bg-surface-container-low px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                  </span>
                  <span className="font-label-sm text-label-sm text-primary tracking-wide uppercase">
                    Tier III National Sovereign Cloud Node
                  </span>
                  <span className="text-outline-variant text-[10px] font-bold">
                    |
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    AZ-KONZA-01 // ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Editorial Header Hero Block */}
          <section className="w-full bg-surface py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary font-mono tracking-widest uppercase">
                    <span>
                      // ECOSYSTEM SUBPAGE
                    </span>
                    <span>
                      //
                    </span>
                    <span>
                      {"SOVEREIGN HOSTING & DATA CENTRE"}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold">
                    {" Konza Technopolis Development Authority (KoTDA) & RCFI "}
                  </h1>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant leading-relaxed font-medium max-w-3xl">
                    {" High-assurance hardware-isolated sovereign cryptographic nodes and disaster-recovery replication for Kenya's National Digital Economy. "}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-primary">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        security
                      </span>
                      {" FIPS 140-2 Level 3 HSMs "}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-primary">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        database
                      </span>
                      {" Multi-AZ DR Synchronous Mesh "}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-primary">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        verified_user
                      </span>
                      {" Kenya DPA §48 Sovereign Boundary "}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="bg-primary text-on-primary p-6 rounded-xl shadow-md flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary-fixed">
                        Infrastructure Spec
                      </span>
                      <span className="material-symbols-outlined text-secondary-fixed">
                        cloud_sync
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center py-1">
                        <span className="font-body-md text-body-md text-on-primary-container">
                          Cloud Tier
                        </span>
                        <span className="font-label-md text-label-md text-on-primary font-semibold">
                          Tier III National Facility
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-body-md text-body-md text-on-primary-container">
                          Primary Egress Latency
                        </span>
                        <span className="font-label-md text-label-md text-secondary-fixed font-mono font-bold">
                          3.2ms RTT
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-body-md text-body-md text-on-primary-container">
                          Licensing Class
                        </span>
                        <span className="font-label-md text-label-md text-on-primary">
                          CAK ECSP Qualified Root
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-body-md text-body-md text-on-primary-container">
                          HSM Isolation
                        </span>
                        <span className="font-label-md text-label-md text-on-primary">
                          Air-Gapped Hardware Cages
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 1: WHO THEY ARE */}
          <section className="w-full bg-surface-container-lowest py-16">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-mono">
                    01 // Statutory Authority
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    Who They Are
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    The cornerstone of Kenya's national computing sovereignty and digital economic acceleration.
                  </p>
                </div>
                <div className="lg:col-span-8 bg-surface-container-low p-8 rounded-xl shadow-sm">
                  <p className="font-body-lg text-body-lg text-on-surface leading-relaxed font-medium">
                    {" Konza Technopolis Development Authority (KoTDA) is the statutory state corporation mandated to develop and manage Konza Smart City, Kenya's premier Silicon Savannah technology hub and national cloud infrastructure hub. Operating the Tier-III National Sovereign Cloud, KoTDA provides in-country physical security, green energy resilience, and world-class government computing facilities. "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold">
                        100%
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        State Mandated Boundary
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold">
                        Tier III
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Uptime Institute Certified
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold">
                        Zero-Carbon
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Renewable Energy Grid
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Grid Anchor: The Infrastructure */}
          <section className="w-full bg-surface py-10">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-xl h-72 shadow-sm">
                  <img className="w-full h-full object-cover" data-alt="High angle architectural view of the modern Konza Technopolis data center building in Machakos County Kenya, sleek solar panelling, glass and reinforced concrete architecture bathed in sharp midday African sun with green campus landscaping, deep pine and emerald hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaDPFfhUDTCDMDA1r3cEawSVW5y6GARAKHpjkRGyW5sUQQMqgYUOaTz-ZOgikDMPYwWgMRgazteh5Fa2FHl1rYyYFNOIZDLc0n7tBUhaZuyqlldpU0S5sl06bGZwo0-lKNf8QSR8Jid4lDHWDuCONaOf_D-rEFV9aCnkHKyDYQnoW8hyaNE_r3bF7CocrSAloXxPtUUkdfq9GJArTPZPSNwXsPhNgLUiLjCOiAW-X-fyWPernZASMV" />
                  <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-6">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                      Facility Architecture
                    </span>
                    <p className="font-title-md text-title-md text-on-primary font-semibold">
                      Tier-III National Sovereign Data Centre Complex
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl h-72 shadow-sm">
                  <img className="w-full h-full object-cover" data-alt="Inside of a high security enterprise sovereign server room with rows of dark forest-green server racks, glowing mint-green fiber optic routing indicator lights, biometric cage locks, and immaculate data cable organization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4C27w9bmUxGkC7BAB1UoeA9YIZVSE2C3Ta4-FUDu1U8RJiotJs1vJ90meBonrRUZIPqM9EA2v-_ooo6JoQ_v0DKDQCOz34weNL9y7LoF81-Oi6RXkDzzuwIf2YRnDnGPu4YEvsL2qJQIimJ6XYmxsrRuqOfo7S--4qoHJFQnuv9zM2BKlveXBZrEaVkqaBsT732Ssb8dWT6UlhbUZXPXINz3ITLrcqG9IR034NQFO5w9WmPl_XjK8" />
                  <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-6">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                      Cryptographic Vault
                    </span>
                    <p className="font-title-md text-title-md text-on-primary font-semibold">
                      RCFI Co-Located FIPS 140-2 Level 3 Secure Enclave
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: THE RELATIONSHIP */}
          <section className="w-full bg-surface-container py-16">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col gap-4 max-w-3xl mb-10">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-mono">
                  02 // Technical Interconnect
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                  {" Sovereign Cloud Co-Location, HSM Redundancy & Disaster Recovery Interconnect "}
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
                  <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6">
                    {" RCFI co-locates high-assurance cryptographic Hardware Security Modules (FIPS 140-2 Level 3 PCIe and Network HSMs) directly within the Tier III National Sovereign Cloud at Konza Smart City. In active partnership with KoTDA, RCFI operates automated zero-trust cryptographic root node replication between its primary Nairobi facility (ICD Road) and Konza Data Centre via dedicated carrier-neutral dark fiber links. This architecture powers uninterrupted national certificate validation (OCSP/CRL), sovereign timestamp authority (TSA) synchronization, and cloud-hosted digital signature signing pipelines with sub-4ms regional roundtrip latencies. "}
                  </p>
                  <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        fiber_manual_record
                      </span>
                      <div>
                        <p className="font-label-md text-label-md font-bold text-primary">
                          Bi-Directional Dark Fiber Links
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Synchronous Active-Active cryptographic state replication
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                      {"< 4ms RTT"}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-primary font-title-md text-title-md font-semibold">
                      <span className="material-symbols-outlined text-secondary">
                        key
                      </span>
                      {" Root Node Co-Location "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" FIPS 140-2 Level 3 tamper-reactive hardware enclosures housed in dedicated, biometrically locked cage architectures with zero cross-tenant contamination. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-primary font-title-md text-title-md font-semibold">
                      <span className="material-symbols-outlined text-secondary">
                        update
                      </span>
                      {" TSA & OCSP Resilience "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Instantaneous real-time synchronization of national revocation registries (CRLs) and authoritative RFC 3161 microsecond time-stamps. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-primary font-title-md text-title-md font-semibold">
                      <span className="material-symbols-outlined text-secondary">
                        sync_lock
                      </span>
                      {" Automated Zero-Trust Heartbeat "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Mutual TLS (mTLS 1.3) tunnel routing continuously validates cryptographic state across Availability Zones with instant failover automation. "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: WHAT IT MEANS FOR CLIENTS */}
          <section className="w-full bg-surface-container-lowest py-16">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="max-w-4xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-mono">
                  {"03 // Client Value & Compliance"}
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-bold mt-2 mb-6">
                  {" Uncompromising Statutory Data Residency & Continuous Business Continuity "}
                </h2>
                <div className="bg-surface-container-low p-8 rounded-xl shadow-sm mb-10">
                  <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                    {" For commercial banks, government MDAs, telcos, and health systems running on RCFI platforms, this collaboration provides uncompromising statutory data residency and continuous business continuity. In the event of localized infrastructure disruption, all cryptographic operations—including qualified digital signing, verification checks, and e-KYC telemetry—fail over seamlessly to Konza with zero foreign cloud egress, absolute adherence to Kenya Data Protection Act 2019 Section 48, and 99.98% guaranteed uptime SLA backed by sovereign state infrastructure. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-surface p-6 rounded-lg shadow-sm flex flex-col gap-2">
                    <div className="w-10 h-10 rounded bg-primary text-secondary-fixed flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-xl">
                        gavel
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-semibold text-primary">
                      KDPA 2019 §48 Sovereign Anchor
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      100% in-country data residency guaranteed without foreign cloud egress vulnerabilities or international exposure.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-lg shadow-sm flex flex-col gap-2">
                    <div className="w-10 h-10 rounded bg-primary text-secondary-fixed flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-xl">
                        network_check
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-semibold text-primary">
                      99.98% High-Availability SLA
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Seamless active-active node topology ensures mission-critical financial and transactional systems remain online.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded-lg shadow-sm flex flex-col gap-2">
                    <div className="w-10 h-10 rounded bg-primary text-secondary-fixed flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-xl">
                        token
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md font-semibold text-primary">
                      Zero-Trust Signing Pipelines
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Qualified signatures, e-Seals, and biometric validations run against tamper-reactive hardware with verified zero downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: PROOF OR ARTEFACT */}
          <section className="w-full bg-primary text-on-primary py-16">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col gap-3 mb-10">
                <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary-fixed font-mono uppercase tracking-widest">
                  <span>
                    {"04 // VERIFIABLE MILESTONE & TELEMETRY"}
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                  {" Production Tier III Multi-AZ Cryptographic Failover Matrix "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl leading-relaxed">
                  {" In Q1 2026, RCFI and KoTDA completed the live, zero-packet-drop failover ceremony for the National Electronic Certification Service Provider (ECSP) root responder nodes. The audit verified uninterrupted issuance of 14,000+ real-time cryptographic signatures during simulated network severance, proving sovereign fault-tolerance and mutual TLS certificate pinning between Konza AZ-A and Nairobi AZ-B. "}
                </p>
              </div>
              {/* Interactive Telemetry Terminal Artefact */}
              <div className="bg-on-secondary-fixed rounded-xl overflow-hidden shadow-2xl">
                {/* Terminal Titlebar */}
                <div className="bg-tertiary-container px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="font-mono text-label-sm text-label-sm text-on-tertiary-container ml-3 font-semibold">
                      RCFI-KOTDA-TELEMETRY-NODE://KNZ-SVR-01.sovereign.ke
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-label-sm text-label-sm text-secondary-fixed">
                    <span className="material-symbols-outlined text-[14px]">
                      sensors
                    </span>
                    <span>
                      LIVE PROTOCOL ACTIVE
                    </span>
                  </div>
                </div>
                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-2 border-b border-tertiary">
                      <span className="text-on-primary-container">
                        Target Cryptographic Node:
                      </span>
                      <span className="text-secondary-fixed font-bold">
                        KNZ-SVR-01 (Konza Zone A)
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-tertiary">
                      <span className="text-on-primary-container">
                        Synchronization Topology:
                      </span>
                      <span className="text-on-primary">
                        Active-Active Sync (Dual Dark Fiber)
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-tertiary">
                      <span className="text-on-primary-container">
                        Hardware Security Module:
                      </span>
                      <span className="text-on-primary">
                        Thales Luna PCIe HSM (FIPS 140-2 L3)
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-tertiary">
                      <span className="text-on-primary-container">
                        Sub-system Heartbeat:
                      </span>
                      <span className="text-secondary-fixed font-bold" id="heartbeat-value">
                        1.1ms
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-tertiary">
                      <span className="text-on-primary-container">
                        Simulated Severance Failover:
                      </span>
                      <span className="text-secondary-fixed font-bold">
                        0.00s Latency / 0 Pkt Drops
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-primary-container">
                        Mutual TLS Certificate Pinning:
                      </span>
                      <span className="text-secondary-fixed">
                        VALIDATED (SHA-384 / Ed25519)
                      </span>
                    </div>
                    {/* Action simulation in terminal */}
                    <div className="mt-4 pt-4 border-t border-tertiary flex items-center gap-3">
                      <button className="px-4 py-2 bg-secondary text-on-primary text-label-md rounded font-label-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors" id="simulate-ping-btn">
                        {" Re-Ping Cryptographic Ring "}
                      </button>
                      <span className="text-label-sm text-on-primary-container" id="ping-status">
                        Cluster Status: Continuous verification pulse steady.
                      </span>
                    </div>
                  </div>
                  {/* Console Stream Log */}
                  <div className="lg:col-span-5 bg-tertiary p-4 rounded-lg flex flex-col gap-1.5 text-xs text-on-primary-container overflow-y-auto max-h-64 font-mono">
                    <span className="text-secondary-fixed">
                      [08:42:01] INITIATING CRYPTO-REPLICATION POOL
                    </span>
                    <span>
                      {"[08:42:02] Nairobi Core (AZ-B) <--> Konza (AZ-A) Handshake verified"}
                    </span>
                    <span>
                      [08:42:02] OCSP Responder Keypair: In Sync (Validity: 2026-Q4)
                    </span>
                    <span>
                      [08:42:03] TSA Precision Stratum 1 Clock drift: -0.00018ms
                    </span>
                    <span className="text-secondary-fixed">
                      [08:42:03] HSM Partition #04 Quorum: 3 of 5 tokens validated
                    </span>
                    <span>
                      [08:42:04] 14,289 signature operations dispatched through Konza HSM
                    </span>
                    <span className="text-secondary-fixed">
                      [08:42:04] ZERO DISRUPTIONS: Failover verification COMPLETE
                    </span>
                    <span className="text-on-primary animate-pulse">
                      {">> Ready for enterprise workloads_"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 5: CTA RELEVANT TO THAT RELATIONSHIP */}
          <section className="w-full bg-surface-container-low py-20">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-surface-container-lowest p-10 md:p-14 rounded-2xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary font-mono tracking-wider uppercase">
                    <span>
                      05 // ENTERPRISE DEPLOYMENT
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight">
                    {" Deploy on Sovereign Infrastructure. "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {" Explore how your enterprise or government agency can leverage RCFI's Konza-replicated cryptographic trust services for verifiable data sovereignty. "}
                  </p>
                  <div className="flex items-center gap-6 pt-2 text-label-sm text-label-sm text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      CAK Licensed Provider
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      Full Tier III Redundancy
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      ISO 27001 Certified
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md" id="open-briefing-modal-btn">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    <span>
                      Schedule Konza Infrastructure Briefing
                    </span>
                  </button>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors" href="#">
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                    <span>
                      Download Sovereign Data Sheet (PDF)
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Modal for Sovereign Infrastructure Briefing */}
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-sm hidden p-4" id="briefing-modal">
            <div className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-2xl p-8 relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-mono tracking-wider">
                    Direct Technical Consultation
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Schedule Konza Infrastructure Briefing
                  </h3>
                </div>
                <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" id="close-modal-btn">
                  <span className="material-symbols-outlined text-lg">
                    close
                  </span>
                </button>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" Connect directly with our Chief Cryptographic Architect and KoTDA liaison to assess institutional migration, HSM key replication, and KDPA Section 48 compliance posture. "}
              </p>
              <form className="flex flex-col gap-4" id="infrastructure-briefing-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Full Legal Name
                    </label>
                    <input className="w-full h-11 px-3 bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest" placeholder="e.g. Dr. Achieng Ombati" required type="text" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Enterprise / Institution
                    </label>
                    <input className="w-full h-11 px-3 bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest" placeholder="e.g. Kenya Commercial Bank / MDA" required type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Institutional Work Email
                    </label>
                    <input className="w-full h-11 px-3 bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest" placeholder="name@organization.go.ke" required type="email" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Infrastructure Sector
                    </label>
                    <select className="w-full h-11 px-3 bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest">
                      <option>
                        {"Banking & Financial Services"}
                      </option>
                      <option>
                        Government Ministry / MDA
                      </option>
                      <option>
                        Telecommunications Operator
                      </option>
                      <option>
                        {"Healthcare & Insurance"}
                      </option>
                      <option>
                        Other Sovereign Entity
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Architecture Requirements
                  </label>
                  <textarea className="w-full p-3 bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest" placeholder="Specify requirements for FIPS 140-2 Level 3 HSM, qualified signatures, or disaster recovery co-location..." rows={3} defaultValue="" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Confidential Sovereign Telemetry SLA
                  </span>
                  <button className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm" type="submit">
                    {" Confirm Briefing Session "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-[#041f15] text-on-primary border-t border-primary">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg">
            <div className="lg:col-span-1 flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-secondary-fixed font-bold tracking-tight">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed Electronic Certification Service Provider (ECSP) anchoring sovereign digital trust across Africa.
              </p>
              <div className="flex flex-col gap-1 pt-2 font-label-sm text-label-sm text-outline-variant">
                <span>
                  CAK License: TL/E-CSP 00014
                </span>
                <span>
                  ISO 27001 Certified Infrastructure
                </span>
                <span>
                  Kenya Data Protection Act Compliant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Practices & Services"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="pki-digital-trust" href="/services/digital-trust-pki/">
                    {"PKI & Digital Trust Infrastructure"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="regulatory-consultancy" href="/services/cybersecurity-assurance/">
                    Regulatory Cybersecurity Advisory
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="cloud-sovereignty" href="/services/digital-cloud-engineering/">
                    Sovereign Cloud Architectures
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="identity-verification" href="#">
                    Biometric e-KYC Validation
                  </a>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="enterprise-integration" href="#">
                    Enterprise API Integration
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                Sovereign Platforms
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="certysign-platform" href="/products/certysign/">
                    CertySign Document Signer
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="elano-platform" href="/products/elano/">
                    Elano Trust Gateway
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="prezio-platform" href="/products/prezio/">
                    Prezio Institutional Vault
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="tsa-timestamping" href="/trust/">
                    RCFI Time-Stamping Authority
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="hardware-security-modules" href="#">
                    Kenya National Root Integration
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Academy & Insights"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="academy-curriculum" href="/academy/digital-trust-cyber/">
                    {"Cybersecurity & Cryptography Academy"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="certification-tracks" href="/academy/executive-briefings/">
                    Executive Security Certification
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="insights-whitepapers" href="/insights/">
                    {"Research & Regulatory Whitepapers"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="press-media" href="/insights/">
                    Corporate Announcements
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <a data-path="developer-docs" href="#">
                    {"Developer Hub & SDKs"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-secondary-fixed font-semibold">
                {"Trust & Compliance"}
              </h3>
              <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-primary-container">
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="ca-repository" href="/trust/">
                    {"CA Public Repository & CRL"}
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="trust-center" href="/trust/">
                    Digital Trust Security Center
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="privacy-notice" href="/privacy/">
                    Kenya DPA Privacy Notice
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="terms-of-service" href="/trust/">
                    Certification Practice Statement
                  </Link>
                </li>
                <li className="hover:text-on-primary transition-colors">
                  <Link data-path="vulnerability-disclosure" href="/trust/">
                    Vulnerability Disclosure Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-space-lg pt-space-md border-t border-primary/40 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-primary-container">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="font-medium text-on-primary">
                RCFI Headquarters:
              </span>
              <span>
                5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                © 2025 RCFI Limited. All rights reserved.
              </span>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="legal-statutory" href="/terms/">
                Statutory Notices
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
