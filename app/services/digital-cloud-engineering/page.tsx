import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/services-digital-cloud-engineering/page.css";

export const metadata: Metadata = { title: "Digital & Cloud Engineering | RCFI Technology" };

export default function ServicesDigitalCloudEngineeringPage() {
  return (
    <div className="rcfi-services-digital-cloud-engineering" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary-container text-on-primary border-b border-on-primary-container/20">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  call
                </span>
                <span>
                  +254 (0) 20 283 9200
                </span>
              </span>
              <span className="text-on-primary-container/50">
                |
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  mail
                </span>
                <span>
                  info@rcfi.co.ke
                </span>
              </span>
              <span className="hidden lg:inline text-on-primary-container/50">
                |
              </span>
              <div className="hidden lg:flex items-center gap-space-xs bg-primary/40 px-2 py-0.5 rounded">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-secondary-fixed font-semibold tracking-wider uppercase">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-on-primary-container/50">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <nav className="bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-active-classes="bg-primary-container text-on-primary">
          <div className="max-w-7xl mx-auto px-margin h-20 flex items-center justify-between">
            <Link className="flex items-center gap-space-sm" data-path="home" href="/">
              <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
              <div className="hidden sm:flex flex-col">
                <span className="font-title-md text-title-md leading-tight text-primary font-bold tracking-tight">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-normal leading-none">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </Link>
            <div className="hidden xl:flex items-center gap-space-md font-body-md text-body-md">
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="services" href="/services/">
                  Services
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-72">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    {"Digital Health Governance & Standards"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                  <Link aria-current="page" className="block px-space-sm py-2 rounded bg-primary-container text-on-primary" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="products" href="/products/certysign/">
                  Products
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-60">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-72">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-semibold" data-path="academy" href="/academy/">
                    Academy Overview
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-health-interoperability" href="/academy/digital-health-interoperability/">
                    Digital Health Interoperability
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="digital-trust-cyber" href="/academy/digital-trust-cyber/">
                    {"Digital Trust & Cyber Defence"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="applied-data-ai" href="/academy/applied-data-ai/">
                    {"Applied Data & AI"}
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="modern-engineering" href="/academy/modern-engineering/">
                    Modern Engineering
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="executive-briefings" href="/academy/executive-briefings/">
                    Executive Briefings
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="insights" href="/insights/">
                  Insights
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-64">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="insights" href="/insights/">
                    The Trust Layer
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="impact-stories" href="/impact/">
                    Impact Stories
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="knowledge-hub" href="/insights/">
                    Knowledge Hub
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="sovereignty-series" href="/insights/">
                    The Sovereignty Series
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="newsroom" href="/insights/">
                    Newsroom
                  </Link>
                </div>
              </div>
              <div className="relative group py-6">
                <Link className="text-on-surface-variant hover:text-on-surface transition-colors py-2 px-3 rounded-lg" data-path="about" href="/about/">
                  Company
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(11,74,52,0.08)] rounded-lg p-space-sm w-56">
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="about" href="/about/">
                    About RCFI
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="ecosystem" href="/ecosystem/">
                    Ecosystem
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="careers" href="/careers/">
                    Careers
                  </Link>
                  <Link className="block px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </div>
              </div>
              <Link className="bg-surface-container-low text-secondary font-label-md text-label-md px-3 py-1.5 rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors" data-path="verify-document" href="/verify/">
                Verify a Document
              </Link>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-container hover:text-on-primary transition-all duration-200" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-full pt-[120px] bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION (Dark Pine Sovereign Infrastructure Aesthetic) */}
          <section className="relative bg-primary text-on-primary py-space-xl overflow-hidden">
            {/* Atmospheric subtle grid lines & glow */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#6ffbbe_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left Hero Copy */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed text-label-sm font-label-sm w-fit uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                    <span>
                      // PRACTICE 05 // ENTERPRISE FOUNDATIONS
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-primary tracking-tight font-bold">
                    {" Digital & Cloud Engineering "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                    {" Secure platforms, resilient APIs, and cloud-native architectures engineered for national scale, zero-trust security, and uncompromising operational uptime across government and enterprise. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm pt-2">
                    <a className="inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:bg-secondary-fixed-dim transition-all duration-200" href="#engineering-matrix">
                      {" Consult Cloud Architects "}
                      <span className="material-symbols-outlined text-[18px] ml-2">
                        arrow_forward
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-on-primary-fixed-variant transition-all duration-200" href="#sovereign-stack">
                      {" Explore Engineering Matrix "}
                    </a>
                  </div>
                  {/* Proof Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md">
                    <div className="bg-primary-container/60 p-3 rounded-lg">
                      <span className="block font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                        99.98%
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        Uptime SLA
                      </span>
                    </div>
                    <div className="bg-primary-container/60 p-3 rounded-lg">
                      <span className="block font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                        Zero-Trust
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        mTLS Security Mesh
                      </span>
                    </div>
                    <div className="bg-primary-container/60 p-3 rounded-lg">
                      <span className="block font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                        Tier III
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        {"Nairobi & Konza Redundancy"}
                      </span>
                    </div>
                    <div className="bg-primary-container/60 p-3 rounded-lg">
                      <span className="block font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                        K8s Native
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        Microservices Architecture
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Hero Visual: Telemetry / Datacenter Node View */}
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-primary-container">
                    <img className="w-full h-52 object-cover" data-alt="A futuristic hyper-secure Tier III data center corridor illuminated with cold teal and emerald fiber-optic server racks, showing network engineers inspecting low-latency national cloud infrastructure in Nairobi, sharp contrast with dark forest green tones and glowing telemetry indicators." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8cz-PxF-L6X4ufHRB8_RHTnsbDWxuu9PanL1gDGJlNQF2Yp_mV6sdpbUCQPjC3K2cmA8AzR8_4FC_sSVlYex5WPjGYwrRmEt2BVysym4fOVlHRkBfEOaczfe3vHzkPn-UW9wQyhvZhgyXCF1b9JZYuURCStqQpkqYj3OqwbeH9q-9JRW6IU7JXE_7y4WKt_xtbmaB7kgBM7LmuXukSObVYhTQrAQeCj4BwuT4zNiYz-lfhdfXsrU5" />
                    <div className="p-space-md bg-tertiary-container flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                          Live Infrastructure Telemetry
                        </span>
                        <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary-fixed-dim">
                          <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
                          {" Active Peer: KIXP Nairobi "}
                        </span>
                      </div>
                      {/* Live Node Diagnostics */}
                      <div className="space-y-2 pt-2 text-on-tertiary-container font-label-md text-label-md">
                        <div className="flex justify-between items-center py-1.5 px-2.5 rounded bg-tertiary">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                              hub
                            </span>
                            {" Cluster Topology "}
                          </span>
                          <span className="text-on-tertiary font-semibold">
                            Multi-AZ (Nairobi + Konza)
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 px-2.5 rounded bg-tertiary">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                              speed
                            </span>
                            {" Ingress Latency "}
                          </span>
                          <span className="text-secondary-fixed font-semibold">
                            {"< 4ms EA Regional IXP"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 px-2.5 rounded bg-tertiary">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                              verified_user
                            </span>
                            {" API Gateway Security "}
                          </span>
                          <span className="text-on-tertiary font-semibold">
                            WAF + Rate Limiter + mTLS
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 px-2.5 rounded bg-tertiary">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                              timeline
                            </span>
                            {" Operational SLA "}
                          </span>
                          <span className="text-secondary-fixed font-semibold">
                            99.98% Guaranteed
                          </span>
                        </div>
                      </div>
                      {/* Sparkline telemetry illustration */}
                      <div className="pt-2">
                        <div className="flex justify-between font-label-sm text-label-sm text-tertiary-fixed-dim pb-1">
                          <span>
                            Packet Throughput (Gbps)
                          </span>
                          <span>
                            Peak 48.2 Gbps
                          </span>
                        </div>
                        <svg className="w-full h-8 text-secondary-fixed" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
                          {" "}
                          <path d="M0 35 L30 30 L60 32 L90 15 L120 22 L150 8 L180 20 L210 12 L240 18 L270 5 L300 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          {" "}
                          <path d="M0 35 L30 30 L60 32 L90 15 L120 22 L150 8 L180 20 L210 12 L240 18 L270 5 L300 12 L300 40 L0 40 Z" fill="currentColor" fillOpacity="0.12" />
                          {" "}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 2. CORE ENGINEERING PILLARS (Clean Card Architecture) */}
          <section className="py-space-xl bg-surface-container-lowest" id="engineering-matrix">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Framework Matrix
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
                    Core Engineering Pillars
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">
                  {" Industrial-grade technical standards designed for high-concurrency transactional loads, mission-critical public services, and regulatory-mandated security postures. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Pillar 01 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        01
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        developer_board
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Platform & Custom Product Engineering"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Custom software development for government MDAs, commercial banks, and high-growth institutions executed with clean architecture patterns and rigorous enterprise rigor. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm">
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Clean Architecture
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Domain-Driven
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Event-Driven
                    </span>
                  </div>
                </div>
                {/* Pillar 02 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        cable
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"API & Enterprise Systems Integration"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Bridging legacy core banking stacks, ERPs (SAP, Oracle), judicial registries, and national payment switches with secure, ultra-high-throughput transactional APIs. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm">
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      OpenAPI / REST
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      gRPC Protocols
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Kafka ESB
                    </span>
                  </div>
                </div>
                {/* Pillar 03 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        03
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        cloud_sync
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"Cloud-Native Architecture & DevSecOps"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Deploying containerized, self-healing sovereign infrastructures with automated SAST/DAST vulnerability gates, automated secret rotation, and zero-downtime canary pipelines. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm">
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Kubernetes
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Terraform IaC
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      CI/CD Gates
                    </span>
                  </div>
                </div>
                {/* Pillar 04 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        04
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        security_update_good
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                      {"24/7 Managed Evolution & Site Reliability"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      {" Round-the-clock infrastructure telemetry, distributed tracing, automated failover drills, proactive patching, and strict SLO/SLA management across sovereign topologies. "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-space-sm">
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      SRE Playbooks
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Observability
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-secondary font-label-sm text-label-sm rounded">
                      Automated Failover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 3. THE SOVEREIGN CLOUD STACK (Architectural Tier Hierarchy) */}
          <section className="py-space-xl bg-surface-container-high/40" id="sovereign-stack">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  {"Data Residency & Governance"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
                  The Sovereign Cloud Stack
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {" Engineered explicitly to align with the Kenya Data Protection Act (DPA 2019) and regional cross-border data transfer mandates. Complete control over cryptographic boundaries and infrastructure execution. "}
                </p>
              </div>
              <div className="space-y-space-md">
                {/* Tier 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <span className="px-3 py-1.5 rounded-lg bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold whitespace-nowrap">
                      TIER 04
                    </span>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        Mission-Critical Application Services
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                        {" Citizen-facing portals, high-throughput financial switches, healthcare interoperability hubs, and verifiable credential validation endpoints engineered for sub-second responses. "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary bg-surface-container-low px-3 py-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-[16px]">
                      task_alt
                    </span>
                    <span>
                      Sub-second Concurrency
                    </span>
                  </div>
                </div>
                {/* Tier 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <span className="px-3 py-1.5 rounded-lg bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold whitespace-nowrap">
                      TIER 03
                    </span>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {"Zero-Trust Security Mesh & mTLS Identity"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                        {" Deep integration with RCFI Root CA infrastructure, providing cryptographically verified workload identities, fine-grained service mesh policies, and hardware-secured token distribution. "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary bg-surface-container-low px-3 py-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                    <span>
                      RCFI CA Root Anchored
                    </span>
                  </div>
                </div>
                {/* Tier 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <span className="px-3 py-1.5 rounded-lg bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold whitespace-nowrap">
                      TIER 02
                    </span>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {"Secure Sovereign Cloud & Container Orchestration"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                        {" Hardened Kubernetes (CIS Benchmarked), sovereign Virtual Private Clouds (VPC), automated image signing, and software bill of materials (SBOM) scanning before deployment. "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary bg-surface-container-low px-3 py-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-[16px]">
                      lock
                    </span>
                    <span>
                      CIS Level 2 Hardened
                    </span>
                  </div>
                </div>
                {/* Tier 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <span className="px-3 py-1.5 rounded-lg bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold whitespace-nowrap">
                      TIER 01
                    </span>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {"In-Country Physical & Datacenter Infrastructure"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                        {" Tier III redundant physical facilities situated in Nairobi and Konza Technopolis. Dedicated FIPS 140-2 Level 3 Hardware Security Modules (HSMs) ensuring physical key protection within Kenyan borders. "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary bg-surface-container-low px-3 py-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-[16px]">
                      domain_verification
                    </span>
                    <span>
                      FIPS 140-2 Level 3 HSM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 4. ENTERPRISE SECTORS SUPPORTED */}
          <section className="py-space-xl bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Institutional Impact
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
                  Enterprise Sectors Supported
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Sector 1 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-40 object-cover" data-alt="Government administration building and digital governance dashboard interface in Kenya with modern architecture and green lighting, representing secure public registry systems." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZard_jo1FOp_hZxBOaEDYM6Aoqdre25rKmTT8sE43gpJ5jmlnPlhXOgIcRVCdzI2H-5r3Yh5C_w_yZUkOmphybkQRocyLnjsqJPHGgK2RRMHRlOQW5GxFjL4TwEGRFX0DC9C2Y4Tz_3WaWty8s-YWnOwbHWAJ6FNz6KDEQa8UyPtziUIsNL-3WkKCKq23K94NsKI17zapO4UxMyqcD2ukL_2SSuYPab6nY5YNVNKqPpjonJzsFWy" />
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                        {"Government & Sovereign Portals"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                        {" National registry integrations, high-assurance digital IDs, and citizen service gateways engineered for fault tolerance. "}
                      </p>
                    </div>
                    <ul className="font-label-md text-label-md text-secondary space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Civil Registration Integrations "}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Judicial Registry Platforms "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sector 2 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-40 object-cover" data-alt="High-speed fintech financial transaction telemetry display showing real-time switches, mobile money rails, and banking security visualization in Nairobi." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9amfqmh9SMcT7OYLllNbrg0CUMRAFhFtJwkG9xq2x-nkh9BbJdPYWgcABAbclWNZ5mKGChB93QlXK2zZh50kZr6kdJ_o5dxWOG-3Q9kHw7IuKR_fKE0Z5yMFPUui_XCEyUVfI7iKkhGo6ZKDOvzzBCZa347WswcuTAxzDPXMre25fev-2yHI7iYVjbevMoNexCaxfRnlw9cU0-7fXuY1WGws4X7IfamEhTxC7Ya7d5WDQ7H5eeld" />
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                        {"Banking, FinTech & Switches"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                        {" High-volume transaction engines, core banking middleware, instant payment switches, and automated reconciliation pipelines. "}
                      </p>
                    </div>
                    <ul className="font-label-md text-label-md text-secondary space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" ISO 20022 Financial Standards "}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Core Banking Connectors "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sector 3 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-40 object-cover" data-alt="Modern clinical health data exchange network in Africa with doctors and technicians viewing electronic medical records on secured tablets and large analytics screens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUvCngLBdq0OYELbcj6kFvozDMdKUgkClEp7fcrN3PX8WeAvMLVGCdLDhrbN1mujgyqYnagjjvwFXMbHhcfKlw-IC79IzlUnWhN2Bih93yS-6x7-q6bbgoWdwB482DdOBehfwj-Yu3ofmzFrw6RGh2HQhuOrfkYiIqL739etaDaICrxP5QD2UyDlkYDlOghjny3F35b1hMWenADCFhqa9chohgHyLKneCHEZshpjZiYjslSvoH7ubE" />
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                        {"Healthcare & Public Health"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                        {" Scalable FHIR-compliant health data exchanges, regional clinic interconnects, and strict patient data residency enforcement. "}
                      </p>
                    </div>
                    <ul className="font-label-md text-label-md text-secondary space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" HL7 / FHIR Interoperability "}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" DPA Patient Privacy Compliance "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sector 4 */}
                <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <img className="w-full h-40 object-cover" data-alt="Telecommunications engineering operations center in East Africa with large screen video walls monitoring network throughput and high-availability enterprise services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVtRFrcuzb56NXp6PdCQww3CyT4pH_91EpzA16NmCx3oquVMHPwZcbb7FLnTZu4GRJLugYX_nvAORLazop--OEqnPP9hjHbKaYj8Zf-_Jttgztv0J23YA7w9a4P30XYVS8ouD62LKdMIOyz7LRhS6xdE91W2bHJv2FP8Fq0SETKItOZISWapwT473IWnrgNDRv90LZ-KY-Jk2AQf_R1mR7-9s5zTZCfdFuRRCpsPXPin3DwwfcErUk" />
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold mb-2">
                        {"Telco & Conglomerates"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                        {" Enterprise automation, billing gateway integrations, and customer self-service backends serving tens of millions of users. "}
                      </p>
                    </div>
                    <ul className="font-label-md text-label-md text-secondary space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" High-Concurrency Gateways "}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Automated Service Provisioning "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 5. ACTION CTA: Technical Consultation */}
          <section className="py-space-xl bg-tertiary text-on-tertiary">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="bg-primary-container p-space-lg lg:p-space-xl rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed" />
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                      Technical Architecture Advisory
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                    {" Bring us your engineering bottleneck and we'll architect the solution. "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    {" Schedule an architectural review with our principal engineers. We audit legacy constraints, define zero-trust migration paths, and engineer scalable sovereign cloud deployments. "}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm shrink-0 w-full sm:w-auto">
                  <a className="inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-6 py-3.5 rounded-lg shadow-sm hover:bg-secondary-fixed-dim transition-all" data-path="book-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    {" Book Cloud Advisory "}
                    <span className="material-symbols-outlined text-[18px] ml-2">
                      calendar_month
                    </span>
                  </a>
                  <Link className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-lg hover:bg-on-primary-fixed-variant transition-all" data-path="contact" href="/contact/">
                    {" Direct RFQ / Scope Submission "}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-tertiary text-on-tertiary">
        <div className="max-w-7xl mx-auto px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl">
            <div className="lg:col-span-1 flex flex-col gap-space-md">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-tertiary tracking-tight">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-tertiary-container">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-tertiary-container">
                Enterprise-grade digital trust infrastructure, certified cybersecurity, and pan-African institutional systems.
              </p>
              <div className="flex flex-col gap-space-xs font-label-sm text-label-sm text-secondary-fixed">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  CAK Licensed ECSP (TL/E-CSP 00014)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Practices & Services"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                    {"Digital Trust & PKI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                    {"Cybersecurity & Assurance"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-health-governance" href="/services/digital-health-governance/">
                    Digital Health Governance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                    {"Data, Analytics & AI"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                    {"Digital & Cloud Engineering"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                Products
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                    Elano
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="verify-document" href="/verify/">
                    Document Validator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Academy & Insights"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="academy" href="/academy/">
                    RCFI Academy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="insights" href="/insights/">
                    The Trust Layer
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="impact-stories" href="/impact/">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="knowledge-hub" href="/insights/">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="sovereignty-series" href="/insights/">
                    Sovereignty Series
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="newsroom" href="/insights/">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-tertiary font-semibold">
                {"Trust & Compliance"}
              </span>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-tertiary-container">
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                    CA Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                    Trust Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="privacy-policy" href="/privacy/">
                    Kenya DPA Compliance
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="cps-cp" href="/trust/">
                    {"CPS & CP Documentation"}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary-fixed transition-colors" data-path="security-advisories" href="/trust/">
                    Security Advisories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-space-md border-t border-on-tertiary-container/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-tertiary-container">
            <span>
              5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
            </span>
            <span>
              © 2026 RCFI - Reprodrive Center for Innovation Limited. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
