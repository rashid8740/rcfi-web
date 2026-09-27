import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/insights/page.css";

export const metadata: Metadata = { title: "Insights — The Trust Layer | RCFI Technology" };

export default function InsightsPage() {
  return (
    <div className="rcfi-insights" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary-container text-on-primary border-b border-primary/20 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10 font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="tel:+254202839200">
                +254 (0) 20 283 9200
              </a>
              <span className="text-primary-fixed-dim/40 hidden sm:inline">
                |
              </span>
              <a className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
              <span className="text-primary-fixed-dim/40 hidden md:inline">
                |
              </span>
              <div className="hidden md:flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
                </span>
                <span className="text-surface-container-lowest font-medium">
                  {"Accredited & CAK Licensed ECSP (TL/E-CSP 00014)"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-secondary-fixed transition-colors font-medium" data-path="ca-repository" href="/trust/">
                CA Repository
              </Link>
              <span className="text-primary-fixed-dim/40">
                •
              </span>
              <Link className="hover:text-secondary-fixed transition-colors font-medium" data-path="trust-center" href="/trust/">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
        <nav className="bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30" data-active-classes="text-primary font-bold border-b-2 border-secondary">
          <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-20">
            <div className="flex items-center gap-space-xl">
              <Link className="flex items-center gap-space-sm" data-path="home" href="/">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <div className="hidden lg:flex flex-col text-left">
                  <span className="font-title-md text-title-md font-bold tracking-tight text-primary leading-none">
                    RCFI
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-normal mt-0.5">
                    Reprodrive Center for Innovation Limited
                  </span>
                </div>
              </Link>
              <div className="hidden xl:flex items-center gap-space-lg font-body-md text-body-md">
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="services" href="/services/">
                    Services
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-80">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & PKI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Root CA, e-Signatures & cryptographics"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="cybersecurity-assurance" href="/services/cybersecurity-assurance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Cybersecurity & Assurance"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Threat intel, audit & compliance postures"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-health-governance" href="/services/digital-health-governance/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Governance
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Standards, protocols & interoperability"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="data-analytics-ai" href="/services/data-analytics-ai/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Data, Analytics & AI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Enterprise telemetry & machine intelligence"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-cloud-engineering" href="/services/digital-cloud-engineering/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital & Cloud Engineering"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Sovereign infrastructure & API fabrics"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="products" href="/products/certysign/">
                    Products
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="certysign" href="/products/certysign/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          CertySign
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Enterprise digital trust platform
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="elano" href="/products/elano/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Elano
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Intelligent orchestrator engine
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="prezio" href="/products/prezio/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Prezio
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Governance & verification hub"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="academy" href="/academy/">
                    Academy
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-72">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="academy-overview" href="/academy/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Academy Overview
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Capacities & institutional training"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-health-interoperability" href="/academy/digital-health-interoperability/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Digital Health Interoperability
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"FHIR, HL7 & eHealth models"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="digital-trust-cyber" href="/academy/digital-trust-cyber/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Digital Trust & Cyber"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Offensive & defensive assurance"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="applied-data-ai" href="/academy/applied-data-ai/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          {"Applied Data & AI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Applied engineering curricula
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="modern-engineering" href="/academy/modern-engineering/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Modern Engineering
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Cloud architecture & DevOps"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="executive-briefings" href="/academy/executive-briefings/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Executive Briefings
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Board & executive compliance masterclasses"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link aria-current="page" className="flex items-center py-6 transition-colors text-primary font-bold border-b-2 border-secondary" data-path="insights" href="/insights/">
                    Insights
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="the-trust-layer" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          The Trust Layer
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Institutional perspectives
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="impact-stories" href="/impact/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Impact Stories
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Deployments in production
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="knowledge-hub" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Knowledge Hub
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Documentation & whitepapers"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="the-sovereignty-series" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          The Sovereignty Series
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          National digital assets
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="newsroom" href="/insights/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Newsroom
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Press & official announcements"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="flex items-center py-6 text-on-surface-variant hover:text-primary transition-colors font-medium" data-path="company" href="/about/">
                    Company
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-56">
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_25px_-5px_rgba(11,74,52,0.12)] p-space-sm border border-outline-variant/30 flex flex-col gap-1">
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="about-rcfi" href="/about/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          About RCFI
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Mission & leadership"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="ecosystem" href="/ecosystem/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Ecosystem
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Partners & alliance"}
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="careers" href="/careers/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Careers
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Join our engineers
                        </span>
                      </Link>
                      <Link className="flex flex-col p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item" data-path="contact" href="/contact/">
                        <span className="font-title-md text-body-md font-semibold text-primary group-hover/item:text-secondary">
                          Contact
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Headquarters & desks"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link className="px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors" data-path="verify-a-document" href="/verify/">
                  Verify a Document
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
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
      <main className="w-full pt-[120px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Wire Header */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
                {" "}
                <path d="M0,50 Q250,180 500,80 T1000,120 L1000,400 L0,400 Z" fill="currentColor" />
                {" "}
                <circle cx="200" cy="120" fill="currentColor" filter="blur(80px)" r="140" />
                {" "}
                <circle cx="850" cy="90" fill="currentColor" filter="blur(100px)" r="180" />
                {" "}
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="flex flex-col gap-space-sm max-w-4xl">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm tracking-wide uppercase">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed" />
                  {" Institutional Perspectives • Volume IV "}
                </div>
                <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight font-bold">
                  {" The Trust Layer "}
                  <span className="text-secondary-fixed font-normal">
                    —
                  </span>
                  {" Sovereign Digital Infrastructure "}
                </h1>
                <p className="font-body-lg text-body-lg text-surface-container-low max-w-3xl leading-relaxed mt-2">
                  {" Critical briefings, regulatory telemetry, and engineering perspectives on national public key infrastructure, electronic transaction sovereignty, statutory digital identity, and pan-African clinical interoperability frameworks. "}
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-4 text-primary-fixed-dim font-label-sm text-label-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      verified
                    </span>
                    {" CAK Licensed ECSP Research Desk"}
                  </span>
                  <span className="opacity-40">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      shield
                    </span>
                    {" ISO/IEC 27001 Cryptographic Audits"}
                  </span>
                  <span className="opacity-40">
                    •
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      terminal
                    </span>
                    {" Kenya DPA • Section 31 Protocols"}
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Editorial Lead Story: Hero Dossier */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-space-sm font-semibold flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-secondary rounded-full" />
                  {" Lead Editorial Dossier "}
                </span>
                <span className="text-secondary font-bold">
                  Priority Briefing • Q2 2026
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-space-sm">
                      <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        {"National Identity & PKI"}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed/30 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        ECSP Licensing
                      </span>
                      <span className="text-on-surface-variant font-label-sm text-label-sm ml-2">
                        14 min read • Certified Whitepaper
                      </span>
                    </div>
                    <a className="group block" href="#">
                      <h2 className="font-headline-lg text-headline-lg text-primary font-bold group-hover:text-secondary transition-colors leading-tight">
                        {" Why National Identity Without Licensed PKI Leaves Africa Vulnerable: The Case for Sovereign ECSPs "}
                      </h2>
                    </a>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                      {" Decoupling citizen credential stores from audited, sovereign Root Certificate Authorities creates asymmetric foreign reliance and catastrophic repudiation vectors. Without national Electronic Certification Service Providers (ECSPs) mandated under telecommunication statutes, civil registration databases lack immutable non-repudiation in international trade and judicial proceedings. "}
                    </p>
                  </div>
                  <div className="pt-8 mt-6 bg-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest shadow-sm">
                        <img className="w-full h-full object-cover" data-alt="Portrait of Dr. Kiprop Koech, Kenyan senior security architect in dark professional suit, sharp studio key lighting, subtle forest green backdrop, calm confident executive presence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPrusGmR10rdIa119nt9H0LmCvpgbgb-QDoIXZyye_kgT2ZtHTSvGpaBgC6WkW5W5kRBZqGySsNUfajjBphYZS7DviIePWmJSUz8BocQyAENVgJsjB8JO9qqqhs1hgYEmf402_KRGi8xWBoeJqUIysZCgRRcz_dPZ5BRay-T1lfG615w5mv-iWSBXzuxItHgJxrqvrUNDb761AB7SmvQYTvJrDvZnvO1qKUR-hK8Epy4ez_a4lRKyB" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-bold text-primary">
                          Dr. Kiprop Koech
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Head of Sovereign Trust Architecture • RCFI
                        </span>
                      </div>
                    </div>
                    <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all self-start sm:self-auto shadow-md" href="/insights/">
                      <span>
                        Read Full Dossier
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-primary-container flex flex-col justify-end p-space-lg text-on-primary">
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50" data-alt="High security sovereign server room with green status LED indicators, cryptographic hardware security modules in server racks, ambient deep teal and dark pine light reflection, ultra detailed." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwuoai-uy5YEL9eROafhjZfUDEKM3EH3Q5OagJ79ECJxHfMRnXFDJYZ35X89CD1qEKjn1qSsTGMI0pzL0FAE7kKM4XtC4E1i0pItz9InEk4xtEKe-oHW9S8f2fIpC3pKssvVdYRwpqI5gDFXEjkoFnptJLACyIsIGqMoIsCtFR_ZnqSpYGyU8K-Kjr6IsVaBYEwwKWOfvJFrNhgsp45Kzu8C6MmsiY_eZ2IuIzYGSVMIry1bVyxH4T')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-secondary-fixed font-label-sm text-label-sm">
                      <span>
                        SECURITY LEVEL: TL-4
                      </span>
                      <span>
                        COMMUNICATIONS AUTHORITY LICENSED
                      </span>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md">
                      <div className="font-title-md text-title-md font-bold text-surface-container-lowest">
                        Root Hierarchy Validation Matrix
                      </div>
                      <p className="font-label-md text-label-md text-surface-container-low mt-1">
                        {" Comparative analysis of SHA-384 root trust anchors anchored inside the sovereign territory vs. delegated international root hierarchies. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Editorial Grid / The Sovereignty Series */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4">
                <div>
                  <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      category
                    </span>
                    {" The Sovereignty Series "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                    {" Enterprise Architecture, Cryptography & Health Law "}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    Filter Category:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                    All Research
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer">
                    {"PKI & HSM"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer">
                    eHealth FHIR
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Story 1 */}
                <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 w-full relative overflow-hidden bg-primary">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Abstract legal documents merged with fiber optic digital circuits, representing European GDPR and African data privacy compliance standards, cool emerald and dark green hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKLmQ6OI4fimJrSlMdtkePNM6CkpXu84xX7KDK1At0krzWJGxcJ77ocD6ycOb7FUnqkUDQXYcWRBw9FSQ2lG94fH5Lghd_DtaSRHry4e84uSNobXStCgBjSg-lN_1FeDwuhSG0-4HVkIlliwBhfJQcVYfzB9GLWEnRvlF6fqawaFCAbhDPeLIlMKuJTAfSs4XRo5F9dVq7L5rvhK3uFNMtTicDOf-Y-12mmX9Q_D7QGiGT-9wasPgX" />
                    {" "}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold">
                      Data Protection
                    </span>
                  </div>
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-2">
                        <span>
                          Regulatory Law
                        </span>
                        <span>
                          8 min read
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                        {" Kenya's Data Protection Act (DPA) vs. GDPR: Navigating Cross-Border Health Data Flows under HL7 FHIR "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                        {" How Kenyan Section 48 cross-border processing caveats mandate local cryptographic trust assertions when synchronizing federated FHIR R4 clinical payloads. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        Grace Muthoni, LL.M.
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </div>
                  </div>
                </article>
                {/* Story 2 */}
                <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 w-full relative overflow-hidden bg-primary">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Engineers performing dual custody smart card key ceremony in certified data center white room, high precision security environment, Nairobi server vault setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP9IeQSb-dYwCZ1lCoZW1lytk--HvbHVh8CKt6NOnxtK2GnL8gpv4HxbA2oTYUd9DJPqYOIP-Tu6mxK4xBXpAED_svSQExRA-al0qRAbQHDXgNjzKhDtuXJdZ19w3oL1OZGFzbwZeEXP2gu1TovW1bz1KSovSJM2FCbdsmNIcWt0y07BgqENES7Y4V3shtVupggpRyt-7pbx7bzPzYyuP5mKSHFQ6gleXhRUxl2oHHltcqtN-7kuGH" />
                    {" "}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold">
                      Key Ceremonies
                    </span>
                  </div>
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-2">
                        <span>
                          Infrastructure
                        </span>
                        <span>
                          11 min read
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                        {" Inside Level 3 FIPS 140-2 HSM Operations: Dual-Control Ceremony Protocols in Nairobi "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                        {" Step-by-step walkthrough of air-gapped cryptographic ceremonies, physical Faraday enclosures, and quorum m-of-n secret sharing in licensed sovereign operations. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        RCFI Core Cryptography Lab
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </div>
                  </div>
                </article>
                {/* Story 3 */}
                <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 w-full relative overflow-hidden bg-primary">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Macro photo of encrypted QR codes on digital electronic tax invoices, glowing cryptographic integrity traces, dark clean fintech aesthetic with green neon highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAwKhw7IYDPZt9t5VzGkp-nRcawPnz-qZUtcaST4tiAhJax4clG_UmYnKECvhZxVErmYtDqEP1BJMiH1NO_060f0qAfqADHnhyT_yIlbmuHFKeFyt0jN1dP2p6Y74E6qMNGi-4NzPQs1b8T_8Ac4CJulkZ1usgVMfD0aUjHZubKOmzaRLohmioTJ-BTDK5xzNqjIheSAf-cNArgVa89jHxEqsqQut3Lu66sOsU2ak3k4xohUg0zG4H" />
                    {" "}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold">
                      {"Tax Tech & PKI"}
                    </span>
                  </div>
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-2">
                        <span>
                          Public Finance
                        </span>
                        <span>
                          9 min read
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                        {" The Evolution of e-TIMS: Why Cryptographic Invoice Authentication Is Transforming Public Revenue "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                        {" Examining the mathematical non-repudiation of KRA-compliant electronic invoices and how ECDSA digital signatures mitigate multi-billion fiscal leakage vectors. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        Onyango Otieno, CPA
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </div>
                  </div>
                </article>
                {/* Story 4 */}
                <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 w-full relative overflow-hidden bg-primary">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Futuristic pan-African medical data network with encrypted nodes linking clinical hospital nodes across Nairobi, Kigali and Accra, subtle technical diagrams." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_gk0oWsew1bEMs6_my11gcg287jK_Wa8BILmhdazybahsmcvUXhVF2a_Fn0E5V5P9lUEY2LUY_R1UAjouMD6Cyn_sOzqvc0hC05xmegmnNDF7R2I-_WC-AFWO1vsrRk7i8bP_ol5uGpstuS1AfqILs2lVjkGBZpZSN3e_ceHxSGFoDQKfGCELQ4mhgCEp3WwIP61IwnM6Cq5KC3r0lnuKqi2w9hAhDGNstg5mPwMabs157wR7ktq" />
                    {" "}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold">
                      Digital Health
                    </span>
                  </div>
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-2">
                        <span>
                          Clinical Registry
                        </span>
                        <span>
                          12 min read
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                        {" Decentralized Clinical Registries: Protecting Patient Confidentiality in Pan-African Health Networks "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                        {" Zero-knowledge verification layers applied to patient master indexes across cross-border public health surveillance without violating jurisdictional sovereignty. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        Dr. Amina Abdi, MPH
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Benchmark Whitepaper Section */}
          <section className="w-full bg-tertiary text-on-tertiary py-space-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" fill="none" viewBox="0 0 400 400">
                {" "}
                <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2" />
                {" "}
                <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="2" />
                {" "}
                <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="4" />
                {" "}
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="bg-primary-container rounded-2xl p-space-lg lg:p-space-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="flex-1 flex flex-col gap-space-sm">
                  <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-lowest/10 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      menu_book
                    </span>
                    {" Annual Technical Benchmark • 2026 Edition "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold leading-tight">
                    {" 2026 East Africa Public Key Infrastructure Benchmark Report "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed-dim leading-relaxed max-w-2xl">
                    {" A comprehensive 64-page forensic audit of ECSP licensing regimes, Qualified Certificate utilization rates, HSM migration timelines, and statutory e-signature jurisprudence across Kenya, Uganda, Tanzania, and Rwanda. "}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="flex flex-col p-3 rounded-lg bg-tertiary">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">
                        4 Countries
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        Regulatory Scope
                      </span>
                    </div>
                    <div className="flex flex-col p-3 rounded-lg bg-tertiary">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">
                        142 Banks
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        HSM Implementations
                      </span>
                    </div>
                    <div className="flex flex-col p-3 rounded-lg bg-tertiary">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">
                        100% Legal
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                        Evidence Precedents
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-96 flex flex-col p-space-lg rounded-xl bg-surface-container-lowest text-on-surface shadow-lg">
                  <div className="flex items-center gap-3 mb-space-sm">
                    <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        picture_as_pdf
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-body-lg font-bold text-primary">
                        Download Free PDF
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Version 4.2 • 8.4 MB (No paywall)
                      </span>
                    </div>
                  </div>
                  <form className="flex flex-col gap-3" id="whitepaper-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('whitepaper-form-success').classList.remove('hidden'); this.classList.add('hidden');">
                    <div>
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold block mb-1">
                        Institutional Email
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="ciso@organization.co.ke" required type="email" />
                    </div>
                    <div>
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold block mb-1">
                        Entity / Organization
                      </label>
                      <input className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Ministry, Commercial Bank, or Health Network" required type="text" />
                    </div>
                    <button className="w-full mt-2 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm" type="submit">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      <span>
                        Instant Benchmark Access
                      </span>
                    </button>
                    <span className="font-label-sm text-label-sm text-on-surface-variant text-center mt-1">
                      {" Encrypted under RCFI Sovereign Data Guarantee. "}
                    </span>
                  </form>
                  <div className="hidden p-4 rounded-lg bg-secondary-container text-on-secondary-container flex flex-col gap-2" id="whitepaper-form-success">
                    <div className="flex items-center gap-2 font-title-md text-title-md font-bold">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <span>
                        Access Dispatched
                      </span>
                    </div>
                    <p className="font-body-md text-body-md">
                      {" The benchmark link has been forwarded to your institutional email with cryptographic checksum (SHA-256 verification hash). "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Technical Telemetry & Topic Index */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-4 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                    <h3 className="font-title-md text-title-md font-bold text-primary mb-space-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">
                        verified_user
                      </span>
                      {" Regulatory Compendiums "}
                    </h3>
                    <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
                      <li>
                        <a className="p-2 rounded hover:bg-surface-container-low flex items-center justify-between transition-colors" href="#">
                          <span>
                            Kenya KICA Act (Cap 411A) • PKI
                          </span>
                          <span className="text-secondary font-semibold font-label-sm text-label-sm">
                            Sec 83
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="p-2 rounded hover:bg-surface-container-low flex items-center justify-between transition-colors" href="#">
                          <span>
                            CAK ECSP Guidelines 2024
                          </span>
                          <span className="text-secondary font-semibold font-label-sm text-label-sm">
                            Rev 2
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="p-2 rounded hover:bg-surface-container-low flex items-center justify-between transition-colors" href="#">
                          <span>
                            DPA Registration Directives
                          </span>
                          <span className="text-secondary font-semibold font-label-sm text-label-sm">
                            ODPC
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="p-2 rounded hover:bg-surface-container-low flex items-center justify-between transition-colors" href="#">
                          <span>
                            Digital Health Act 2023 Rules
                          </span>
                          <span className="text-secondary font-semibold font-label-sm text-label-sm">
                            Part IV
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary text-on-primary p-space-md rounded-xl shadow-sm flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-secondary-fixed font-label-sm text-label-sm uppercase font-bold">
                      <span className="material-symbols-outlined text-[16px]">
                        sensors
                      </span>
                      {" Live Trust Telemetry "}
                    </div>
                    <div className="font-title-md text-body-lg font-bold">
                      RCFI Sovereign Root Authority
                    </div>
                    <div className="flex flex-col gap-2 font-label-sm text-label-sm text-surface-container-low">
                      <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2 rounded">
                        <span>
                          CRL Distribution Status
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          100% OPERATIONAL
                        </span>
                      </div>
                      <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2 rounded">
                        <span>
                          OCSP Response Latency
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          18ms (NBO-IXP)
                        </span>
                      </div>
                      <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2 rounded">
                        <span>
                          Hardware Module Standard
                        </span>
                        <span className="text-secondary-fixed font-semibold">
                          FIPS 140-2 Level 3
                        </span>
                      </div>
                    </div>
                    <Link className="text-secondary-fixed font-label-sm text-label-sm hover:underline mt-1 flex items-center gap-1" data-path="ca-repository" href="/trust/">
                      <span>
                        {"Inspect CA Repository & CPS"}
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        chevron_right
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Secondary Articles List */}
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-2">
                    <h3 className="font-title-md text-title-md font-bold text-primary">
                      Archived Institutional Briefings
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Page 1 of 8
                    </span>
                  </div>
                  {/* Item 1 */}
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mb-1">
                        <span className="text-secondary font-bold">
                          POLICY
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          March 2026
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          6 min read
                        </span>
                      </div>
                      <a className="font-title-md text-body-lg font-bold text-primary hover:text-secondary transition-colors" href="#">
                        {" The Evidentiary Admissibility of Advanced Electronic Signatures in the Commercial Courts of Kenya "}
                      </a>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1 line-clamp-2">
                        {" A review of recent rulings by the High Court of Kenya evaluating the burden of proof under the Evidence Act for non-accredited vs accredited ECSP digital certificates. "}
                      </p>
                    </div>
                    <Link className="px-4 py-2 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors whitespace-nowrap self-start sm:self-auto" href="/insights/">
                      {" Read Briefing "}
                    </Link>
                  </div>
                  {/* Item 2 */}
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mb-1">
                        <span className="text-secondary font-bold">
                          CRYPTO
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          February 2026
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          10 min read
                        </span>
                      </div>
                      <a className="font-title-md text-body-lg font-bold text-primary hover:text-secondary transition-colors" href="#">
                        {" Transitioning to Post-Quantum Cryptography: Readiness Guidance for African Financial Telecommunications "}
                      </a>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1 line-clamp-2">
                        {" Evaluating NIST ML-KEM and ML-DSA algorithms within African regional payment switches and clearing architectures before 2030 obsolescence thresholds. "}
                      </p>
                    </div>
                    <Link className="px-4 py-2 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors whitespace-nowrap self-start sm:self-auto" href="/insights/">
                      {" Read Briefing "}
                    </Link>
                  </div>
                  {/* Item 3 */}
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mb-1">
                        <span className="text-secondary font-bold">
                          ARCHITECTURE
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          January 2026
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          7 min read
                        </span>
                      </div>
                      <a className="font-title-md text-body-lg font-bold text-primary hover:text-secondary transition-colors" href="#">
                        {" Securing Regional Open Finance: OAuth 2.0 mTLS Profiles with Kenyan Root Certificates "}
                      </a>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1 line-clamp-2">
                        {" Enforcing bilateral transport-layer cryptographic authentication between tier-1 banking APIs and licensed payment service providers in East Africa. "}
                      </p>
                    </div>
                    <Link className="px-4 py-2 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors whitespace-nowrap self-start sm:self-auto" href="/insights/">
                      {" Read Briefing "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Newsletter / Briefing Subscription Section */}
          <section className="w-full bg-primary py-space-xl text-on-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-space-sm">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed mb-2">
                  <span className="material-symbols-outlined text-[28px]">
                    mark_email_read
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight">
                  {" Subscribe to The Trust Layer Dispatch "}
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-low max-w-xl">
                  {" Join 4,500+ Chief Information Security Officers, Regulators & Technology Leaders receiving our bi-weekly forensic breakdowns of African digital sovereignty. "}
                </p>
                <form className="w-full max-w-xl flex flex-col sm:flex-row gap-2 mt-4" id="newsletter-form" data-rcfi-onsubmit="event.preventDefault(); document.getElementById('newsletter-success').classList.remove('hidden'); this.classList.add('hidden');">
                  <input className="flex-1 h-12 px-4 rounded-full bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-fixed" placeholder="Enter your institutional email address" required type="email" />
                  <button className="h-12 px-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-2" type="submit">
                    <span>
                      Subscribe
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </form>
                <div className="hidden max-w-xl w-full p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed font-label-md text-label-md flex items-center justify-center gap-2" id="newsletter-success">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <span>
                    Subscription verified. You are enrolled in the next sovereign briefing cycle.
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-primary-fixed-dim font-label-sm text-label-sm opacity-80">
                  <span>
                    • Strictly Zero Spam
                  </span>
                  <span>
                    • Regulatory Dispatches Only
                  </span>
                  <span>
                    • Unsubscribe At Any Time
                  </span>
                  <span>
                    • Governed under Kenya DPA 2019
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-tertiary text-surface-container-lowest border-t border-tertiary-container">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-7 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
                <span className="font-title-md text-title-md font-bold text-on-primary">
                  RCFI
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mt-2">
                Enterprise digital infrastructure, sovereign trust models, and interoperability frameworks across Africa.
              </p>
              <div className="mt-4 flex flex-col gap-1 font-label-sm text-label-sm text-tertiary-fixed-dim">
                <span className="text-surface-container-lowest font-semibold">
                  Headquarters:
                </span>
                <span>
                  5th Floor, Hifadhi House, Along ICD Road
                </span>
                <span>
                  Nairobi, Kenya
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                Sovereign Platforms
              </span>
              <div className="flex flex-col gap-2 mt-2">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="certysign" href="/products/certysign/">
                  CertySign Platform
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="elano" href="/products/elano/">
                  Elano Governance Engine
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="prezio" href="/products/prezio/">
                  Prezio Registry
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="digital-trust-pki" href="/services/digital-trust-pki/">
                  National PKI Infrastructure
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="digital-health-governance" href="/services/digital-health-governance/">
                  Health Interoperability Fabric
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Trust & Governance"}
              </span>
              <div className="flex flex-col gap-2 mt-2">
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="ca-repository" href="/trust/">
                  {"CA Repository & CPS"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="trust-center" href="/trust/">
                  {"Security & Trust Center"}
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="verify-a-document" href="/verify/">
                  Document Verification Portal
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="academy-overview" href="/academy/executive-briefings/">
                  RCFI Executive Academy
                </Link>
                <Link className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors" data-path="the-trust-layer" href="/insights/">
                  The Trust Layer Journal
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-body-lg font-semibold text-secondary-fixed">
                {"Accreditation & Compliance"}
              </span>
              <div className="flex flex-col gap-3 mt-2">
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    CAK Licensed ECSP
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    License: TL/E-CSP 00014 (Kenya)
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    ISO/IEC 27001 Certified
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    Information Security Management
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-tertiary-container border border-tertiary-fixed-dim/20 flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-secondary-fixed">
                    Kenya DPA Compliant
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                    Data Protection Act of 2019
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-tertiary-container mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-tertiary-fixed-dim">
            <p>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link className="hover:text-secondary-fixed transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="terms-of-service" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-secondary-fixed transition-colors" data-path="certificate-policy" href="/trust/">
                Certificate Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
