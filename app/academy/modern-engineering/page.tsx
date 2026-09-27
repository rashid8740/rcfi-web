import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/academy-modern-engineering/page.css";
import "@/styles/pages/academy-modern-engineering/late.css";

export const metadata: Metadata = { title: "Modern Engineering Programme | RCFI Academy" };

export default function AcademyModernEngineeringPage() {
  return (
    <div className="rcfi-academy-modern-engineering" style={{ display: "contents" }}>
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
                <img alt="Exact replica of the real RCFI logo as shown in the screenshot: A pixelated / tiled mosaic icon on the left with 4 rounded square tiles in forest green and teal forming a dynamic cluster or cross, followed by bold dark green sans-serif uppercase text 'RCFI', and below it in smaller clean sans-serif text 'Reprodrive Center for Innovation Limited'. Clean transparent or white background.. Brand logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
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
          {/* BREADCRUMBS & SYSTEM STATUS BAR */}
          <div className="w-full bg-surface-container-lowest border-none py-space-sm">
            <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-label-md font-label-md">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="/">
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  <span>
                    Home
                  </span>
                </Link>
                <span className="text-outline-variant font-bold">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" data-path="academy" href="/academy/">
                  Academy
                </Link>
                <span className="text-outline-variant font-bold">
                  /
                </span>
                <span className="text-primary font-semibold">
                  Modern Engineering Programme
                </span>
              </nav>
              <div className="flex items-center gap-space-md">
                <div className="flex items-center gap-space-xs px-2.5 py-1 rounded bg-secondary-container/20 text-on-secondary-container">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
                    Admissions Live: Cohort 04 (Q3 2026)
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-1 text-on-surface-variant text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified_user
                  </span>
                  {" "}
                  <span>
                    NITA Accredited CapDev
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* HERO SECTION: SPLIT DARK ARCHITECTURAL BANNER */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl">
            {/* Subtle topological SVG lattice background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="infra-grid" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6cf8bb" strokeWidth="0.8" />
                    {" "}
                    <circle cx="48" cy="0" fill="#6cf8bb" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#infra-grid)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            {/* Soft emerald ambient spotlight */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Left Column: Copy & Value Proposition */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-secondary-fixed font-label-md text-label-md tracking-widest font-semibold uppercase">
                      {"// ACADEMY PROGRAMME 04 // PLATFORM & CLOUD ARCHITECTURE"}
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-surface-bright tracking-tight leading-none">
                    {" Modern Engineering "}
                    <br className="hidden sm:inline" />
                    <span className="text-secondary-fixed">
                      Programme
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-tertiary-fixed max-w-2xl leading-relaxed">
                    {" Engineer like it’s production. Build resilient, distributed telecommunication platforms, master Kubernetes orchestration, sovereign automated infrastructure, GitOps, and sub-millisecond API gateways on genuine Tier-III sovereign hardware. "}
                  </p>
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                    <a className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-colors font-title-md text-title-md font-semibold shadow-md" href="#admissions-workspace">
                      <span>
                        Apply for Cohort 04
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <a className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-surface-bright hover:bg-tertiary-container transition-colors font-title-md text-title-md font-medium" href="#curriculum-breakdown">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      <span>
                        Engineering Curriculum (Syllabus PDF)
                      </span>
                    </a>
                  </div>
                  {/* Trust Badges & Accreditation Standards */}
                  <div className="pt-space-sm flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/80 text-secondary-fixed text-label-sm font-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        cloud_circle
                      </span>
                      <span>
                        CNCF Cloud-Native Patterns
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/80 text-secondary-fixed text-label-sm font-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        dns
                      </span>
                      <span>
                        Tier-III Redundant Konza Lab
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/80 text-secondary-fixed text-label-sm font-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        shield
                      </span>
                      <span>
                        CIS Benchmark L2 Hardened
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/80 text-secondary-fixed text-label-sm font-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        timer
                      </span>
                      <span>
                        99.98% High-Availability SLA
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right Column: Live Kubernetes Cluster & Ingress Telemetry Module */}
                <div className="lg:col-span-5 w-full">
                  <div className="bg-tertiary-container/90 rounded-xl p-space-md shadow-xl text-on-tertiary flex flex-col gap-space-sm">
                    {/* Header bar of simulator */}
                    <div className="flex items-center justify-between bg-primary-container/80 px-3 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-secondary-fixed animate-pulse" />
                        <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-surface-bright">
                          Cluster Telemetry :: Mesh v1.29.3
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary-fixed font-mono">
                        SOVEREIGN-EAST-1
                      </span>
                    </div>
                    {/* Multi-AZ Grid Status */}
                    <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm">
                      <div className="bg-primary/70 p-2.5 rounded-lg flex flex-col gap-1">
                        <div className="flex items-center justify-between text-on-primary-container">
                          <span>
                            Zone: Konza AZ-A
                          </span>
                          <span className="text-secondary-fixed font-mono font-bold">
                            16 Pods
                          </span>
                        </div>
                        <div className="w-full bg-primary-container h-1.5 rounded-full overflow-hidden">
                          <div className="bg-secondary-fixed h-full w-[88%]" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-tertiary-fixed-dim">
                          <span>
                            mTLS Envoy Mesh
                          </span>
                          <span className="text-secondary-fixed">
                            OK (0.84ms)
                          </span>
                        </div>
                      </div>
                      <div className="bg-primary/70 p-2.5 rounded-lg flex flex-col gap-1">
                        <div className="flex items-center justify-between text-on-primary-container">
                          <span>
                            Zone: Nairobi AZ-B
                          </span>
                          <span className="text-secondary-fixed font-mono font-bold">
                            14 Pods
                          </span>
                        </div>
                        <div className="w-full bg-primary-container h-1.5 rounded-full overflow-hidden">
                          <div className="bg-secondary-fixed h-full w-[94%]" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-tertiary-fixed-dim">
                          <span>
                            Active-Active Sync
                          </span>
                          <span className="text-secondary-fixed">
                            Synced
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Terminal Diagnostic Telemetry Console */}
                    <div className="bg-primary rounded-lg p-3 font-mono text-[11px] leading-relaxed text-on-primary-container flex flex-col gap-1 overflow-x-auto shadow-inner">
                      <div className="flex items-center justify-between text-secondary-fixed pb-1">
                        <span>
                          $ rcfi-mesh ctl status --ns telecom-gateway
                        </span>
                        <span className="text-[10px] bg-primary-container px-1.5 py-0.5 rounded text-surface-bright">
                          GitOps: ArgoCD #82f1b
                        </span>
                      </div>
                      <p className="text-surface-bright">
                        {"» ingress-nginx-controller: "}
                        <span className="text-secondary-fixed">
                          UP (148,200 req/s, 0.42ms p99)
                        </span>
                      </p>
                      <p>
                        {"» canary-rollout-v2.14: "}
                        <span className="text-secondary-fixed">
                          TRAFFIC WEIGHT: 25% | ZERO 5XX DETECTED
                        </span>
                      </p>
                      <p>
                        {"» sovereign-kms-vault: "}
                        <span className="text-secondary-fixed">
                          HSM HARDENED (PKCS#11 ACTIVE)
                        </span>
                      </p>
                      <p className="text-tertiary-fixed-dim">
                        » audit-daemon: writing to immutable append-only local storage
                      </p>
                    </div>
                    {/* Live Stats Row inside terminal card */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="bg-primary-container/60 p-2 rounded text-center">
                        <span className="block text-secondary-fixed font-bold font-title-md text-title-md">
                          1.2ms
                        </span>
                        <span className="text-[10px] text-on-primary-container uppercase font-semibold">
                          Edge Ingress
                        </span>
                      </div>
                      <div className="bg-primary-container/60 p-2 rounded text-center">
                        <span className="block text-secondary-fixed font-bold font-title-md text-title-md">
                          Zero
                        </span>
                        <span className="text-[10px] text-on-primary-container uppercase font-semibold">
                          Single Point Fail
                        </span>
                      </div>
                      <div className="bg-primary-container/60 p-2 rounded text-center">
                        <span className="block text-secondary-fixed font-bold font-title-md text-title-md">
                          100%
                        </span>
                        <span className="text-[10px] text-on-primary-container uppercase font-semibold">
                          GitOps State
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Key Stats Bar (Overlapping aesthetic bar) */}
              <div className="mt-space-xl bg-surface-container-lowest text-on-surface rounded-xl p-space-md shadow-lg grid grid-cols-2 md:grid-cols-4 gap-space-md">
                <div className="flex flex-col">
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                    Duration
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    12 Weeks
                  </span>
                  <span className="text-body-md font-body-md text-on-surface-variant">
                    Intensive Deep Dive
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                    Lab Architecture
                  </span>
                  <span className="font-headline-md text-headline-md text-secondary font-bold">
                    100% Bare-Metal
                  </span>
                  <span className="text-body-md font-body-md text-on-surface-variant">
                    Sovereign East Africa Nodes
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                    Cohort Size
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    25 Engineers
                  </span>
                  <span className="text-body-md font-body-md text-on-surface-variant">
                    Strict Peer Mentorship
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                    {"Cred & Output"}
                  </span>
                  <span className="font-headline-md text-headline-md text-secondary font-bold">
                    Prod SRE Cert
                  </span>
                  <span className="text-body-md font-body-md text-on-surface-variant">
                    {"CAK & CNCF Aligned"}
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* LAB PHOTO FEATURE STRIP: IMMERSIVE TELECOM HARDWARE */}
          <section className="w-full bg-surface-container-low py-space-lg">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center">
                <div className="lg:col-span-1 flex flex-col gap-2">
                  <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                    // PHYSICAL SOVEREIGN LABS
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">
                    {" Trained on Live Enterprise Data Center Infrastructure "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Participants do not operate on simulated browser toys. You configure and harden bare metal racks, configure Top-of-Rack switches, and debug distributed clusters running at our Nairobi and Konza carrier facilities. "}
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="relative rounded-xl overflow-hidden shadow-md h-64 group bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern sovereign high-density enterprise server datacenter aisle with racks of humming network switches glowing with bright teal and emerald indicator LEDs, clean cable management trays suspended overhead, and engineers in uniform inspecting equipment in Nairobi." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZrT5DaMp4pUnnMQUgIDAt3r5lEFbxSRftfnWS29M4wEK0eS8eoUrfuiDmt9vK6dP1oLkOI_OqokjNa387ZpfTirCsmUVjmTuKvF5iz2lSIdmzNNKQxidoT6Cmd-aD6hHJ4UJWkXqZm8PISbmmJt3GeSKEfm3mw7yebCyKUzdB-4jUEgesXC7N2qNSsg1ck8oP5qXEceSChU6SiAgsTR7SbJ0y0jrsoz4lXjL6tExV-3dugGdfo5n" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                      <span className="font-label-sm text-label-sm text-secondary-fixed font-mono uppercase">
                        Node Rack: KE-NBO-01
                      </span>
                      <span className="font-title-md text-title-md font-bold text-surface-bright">
                        {"Physical Top-of-Rack BGP Routing & VLANs"}
                      </span>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-md h-64 group bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up architectural detail of dark modern server blades with illuminated optic fiber connections in neon green and cyan, clean metallic server chassis in a secure enterprise telecommunications vault." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDc8HwXd2UffsmhlvYdAv6jjWBw8I4NMnd_5Tlsz4A5Fr96wvSs_d0MOVgpXmO7nJRv1pdbw_ZmIX5R_-Dtiw535pQTiS0WgpqAI6dnbr93d-2nMIxohaKkRXA_2BVeRpKR83v3E0FQd9b5FsHyG3guX2gXZe7ng8oW_WvOlL_KKN01gPMDpeMlVIxsmJHQyg7DDlV7Vdern68eZT7Q1s2N8KBwPqkdeOE2NCEF6LEnaAka4ITX3OZ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                      <span className="font-label-sm text-label-sm text-secondary-fixed font-mono uppercase">
                        Cluster Mesh: KONZA-CORE-02
                      </span>
                      <span className="font-title-md text-title-md font-bold text-surface-bright">
                        {"Hardware Security Modules (HSM) & mTLS Rings"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FOUR CORE ENGINEERING TRACKS */}
          <section className="w-full bg-surface-container-lowest py-space-xl" id="curriculum-breakdown">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  // SYSTEM ARCHITECTURE CURRICULUM
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  {" Four Production-Grade Engineering Tracks "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Engineered by Principal Architects from pan-African payment rails and national critical infrastructure. Every module concludes with an evaluated fault-injection scenario. "}
                </p>
              </div>
              {/* Pathways-style card grid with prominent number badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {/* Track 01 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="font-display-lg text-display-lg text-secondary font-black leading-none tracking-tight">
                      01
                    </span>
                    <span className="px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      Weeks 01 – 03
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Clean Architecture & Domain-Driven Enterprise Design "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Hexagonal architecture, ports-and-adapters pattern, event-driven microservices with Apache Kafka, and strict domain boundaries designed for high-compliance banking, fintech, and telecom backbones. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Practicum Deliverable:
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Decouple an existing monolithic core banking ledger into an outbox-patterned, event-sourced domain service handling idempotent double-entry transactions. "}
                    </p>
                  </div>
                </div>
                {/* Track 02 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="font-display-lg text-display-lg text-secondary font-black leading-none tracking-tight">
                      02
                    </span>
                    <span className="px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      Weeks 04 – 06
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" High-Concurrency APIs & Protocol Engineering "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" gRPC bidirectional streaming, OpenAPI 3.0 contracts, high-throughput REST gateways, distributed Redis caching strategies, token-bucket rate limiting, and multiplexed HTTP/3 transport performance tuning. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Practicum Deliverable:
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Benchmark and optimize a high-volume payment gateway capable of sustaining 25,000 requests/sec with p99 response times below 8 milliseconds. "}
                    </p>
                  </div>
                </div>
                {/* Track 03 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="font-display-lg text-display-lg text-secondary font-black leading-none tracking-tight">
                      03
                    </span>
                    <span className="px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      Weeks 07 – 09
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Kubernetes, Sovereign Cloud & GitOps "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Production-hardened K8s clusters, multi-tenant RBAC, Terraform Infrastructure-as-Code (IaC), ArgoCD continuous delivery, automated canary progressive rollouts, and air-gapped sovereign container registries. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Practicum Deliverable:
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Provision a zero-trust multi-cluster topology across Konza and Nairobi using Terraform, complete with automated GitOps reconciliation and sealed secret management. "}
                    </p>
                  </div>
                </div>
                {/* Track 04 */}
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="font-display-lg text-display-lg text-secondary font-black leading-none tracking-tight">
                      04
                    </span>
                    <span className="px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      Weeks 10 – 12
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      {" Observability, SRE & Resilient Chaos Engineering "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Prometheus metrics instrumentation, Grafana distributed tracing, OpenTelemetry standards, automated multi-region failover drills, and sub-second MTTR incident playbooks with chaos mesh stress tests. "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Practicum Deliverable:
                    </span>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {" Survive a randomized red-team attack and automated simulated fiber cut drill without dropping customer active web sessions or violating SLO budgets. "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* PRODUCTION TESTBED & INTERACTIVE SANDBOX SIMULATOR */}
          <section className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="text-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider">
                    // PRODUCTION TESTBED SIMULATOR
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-surface-bright font-bold">
                    {" Audit-Ready Infrastructure as Code "}
                  </h2>
                  <p className="font-body-md text-body-md text-tertiary-fixed leading-relaxed">
                    {" Examine the sovereign cluster architecture templates utilized throughout the curriculum. Test the built-in parser to run real-time static linting against national security benchmarks. "}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-primary-container p-1 rounded-lg">
                  <button className="px-space-md py-1.5 rounded font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-container transition-all" id="btn-tab-terraform" data-rcfi-onclick="switchSimulatorTab('terraform')">
                    {" Terraform Cluster HCL "}
                  </button>
                  <button className="px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-surface-bright hover:text-secondary-fixed transition-all" id="btn-tab-k8s" data-rcfi-onclick="switchSimulatorTab('k8s')">
                    {" Kubernetes Ingress & mTLS "}
                  </button>
                </div>
              </div>
              {/* Simulator Console Container */}
              <div className="bg-tertiary-container rounded-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Top Toolbar */}
                <div className="bg-primary-container px-space-md py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-error" />
                    <span className="w-3 h-3 rounded-full bg-secondary-container" />
                    <span className="w-3 h-3 rounded-full bg-secondary-fixed" />
                    <span className="ml-2 font-mono text-label-sm text-label-sm text-surface-bright" id="simulator-file-name">
                      cluster-mesh-sovereign.tf
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed text-label-sm font-label-sm font-bold transition-all shadow-sm" id="validate-btn" data-rcfi-onclick="runManifestValidation()">
                      <span className="material-symbols-outlined text-[16px]">
                        play_arrow
                      </span>
                      <span>
                        Validate Manifest
                      </span>
                    </button>
                  </div>
                </div>
                {/* Code Workspace Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Code Editor View (8 cols) */}
                  <div className="lg:col-span-8 p-space-md font-mono text-body-md text-body-md bg-primary/90 text-surface-bright overflow-x-auto min-h-[300px]">
                    <pre className="leading-relaxed" id="code-content-terraform">
                      <code>
                        <span className="text-secondary-fixed">
                          {"module"}
                        </span>
                        {" "}
                        <span className="text-tertiary-fixed">
                          {"\"konza_sovereign_mesh\""}
                        </span>
                        {" {\n  source              = "}
                        <span className="text-tertiary-fixed">
                          {"\"git::https://git.rcfi.co.ke/infra/modules/k8s-mesh.git\""}
                        </span>
                        {"\n  cluster_name        = "}
                        <span className="text-tertiary-fixed">
                          {"\"rcfi-prod-east-01\""}
                        </span>
                        {"\n  compliance_regime   = "}
                        <span className="text-tertiary-fixed">
                          {"\"CAK-TL-ECSP-00014\""}
                        </span>
                        {"\n  hsm_crypto_engine   = "}
                        <span className="text-secondary-fixed">
                          {"true"}
                        </span>
                        {"\n  \n  datacenter_redundancy = {\n    primary_dc   = "}
                        <span className="text-tertiary-fixed">
                          {"\"KONZA-TECHNOPOLIS-DC01\""}
                        </span>
                        {"\n    failover_dc  = "}
                        <span className="text-tertiary-fixed">
                          {"\"NAIROBI-HIFADHI-DC02\""}
                        </span>
                        {"\n    rpo_seconds  = 0\n    rto_seconds  = 3\n  }\n\n  node_pools = {\n    crypto_workers = {\n      instance_count = 6\n      storage_type   = "}
                        <span className="text-tertiary-fixed">
                          {"\"nvme-encrypted-aes256\""}
                        </span>
                        {"\n      air_gapped     = "}
                        <span className="text-secondary-fixed">
                          {"true"}
                        </span>
                        {"\n    }\n  }\n}"}
                      </code>
                    </pre>
                    <pre className="leading-relaxed hidden" id="code-content-k8s">
                      <code>
                        <span className="text-secondary-fixed">
                          {"apiVersion"}
                        </span>
                        {": networking.k8s.io/v1\n"}
                        <span className="text-secondary-fixed">
                          {"kind"}
                        </span>
                        {": Ingress\n"}
                        <span className="text-secondary-fixed">
                          {"metadata"}
                        </span>
                        {":\n  "}
                        <span className="text-secondary-fixed">
                          {"name"}
                        </span>
                        {": telecom-sovereign-gateway\n  "}
                        <span className="text-secondary-fixed">
                          {"annotations"}
                        </span>
                        {":\n    "}
                        <span className="text-tertiary-fixed">
                          {"cert-manager.io/cluster-issuer"}
                        </span>
                        {": "}
                        <span className="text-secondary-fixed">
                          {"\"rcfi-root-ca\""}
                        </span>
                        {"\n    "}
                        <span className="text-tertiary-fixed">
                          {"nginx.ingress.kubernetes.io/auth-tls-verify-client"}
                        </span>
                        {": "}
                        <span className="text-secondary-fixed">
                          {"\"on\""}
                        </span>
                        {"\n    "}
                        <span className="text-tertiary-fixed">
                          {"nginx.ingress.kubernetes.io/auth-tls-secret"}
                        </span>
                        {": "}
                        <span className="text-secondary-fixed">
                          {"\"mesh/rcfi-ca-bundle\""}
                        </span>
                        {"\n"}
                        <span className="text-secondary-fixed">
                          {"spec"}
                        </span>
                        {":\n  "}
                        <span className="text-secondary-fixed">
                          {"ingressClassName"}
                        </span>
                        {": sovereign-nginx\n  "}
                        <span className="text-secondary-fixed">
                          {"tls"}
                        </span>
                        {":\n  - "}
                        <span className="text-secondary-fixed">
                          {"hosts"}
                        </span>
                        {":\n    - "}
                        <span className="text-tertiary-fixed">
                          {"api.trust.rcfi.ke"}
                        </span>
                        {"\n    "}
                        <span className="text-secondary-fixed">
                          {"secretName"}
                        </span>
                        {": rcfi-gateway-mtls-cert"}
                      </code>
                    </pre>
                  </div>
                  {/* Real-Time Compiler / Linter Output (4 cols) */}
                  <div className="lg:col-span-4 bg-tertiary-container/95 p-space-md flex flex-col justify-between">
                    <div className="flex flex-col gap-space-sm">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-secondary-fixed">
                        Automated Policy Linter
                      </span>
                      <div className="flex flex-col gap-2 font-mono text-[11px] text-on-primary-container" id="validation-output">
                        <div className="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright">
                          <span>
                            CIS Benchmark 5.2
                          </span>
                          <span className="text-secondary-fixed font-bold">
                            PASSED
                          </span>
                        </div>
                        <div className="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright">
                          <span>
                            HSM Key Encapsulation
                          </span>
                          <span className="text-secondary-fixed font-bold">
                            VALIDATED
                          </span>
                        </div>
                        <div className="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright">
                          <span>
                            Zero-Trust mTLS Strict
                          </span>
                          <span className="text-secondary-fixed font-bold">
                            ENFORCED
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 bg-primary/40 rounded p-2.5 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                        verified
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed">
                        Sovereign Cloud Spec v4.2 • 0 Anomalies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* WHO IT'S BUILT FOR */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  // TARGET PROFILES
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  {" Engineered for Seasoned Builders Ready for Scale "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" This is an advanced technical accelerator. Admission is competitive and designed specifically for practitioners who already deploy production software. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Profile 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">
                      code
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Software Engineers (Mid → Lead)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Engineers looking to master distributed systems theory, event-driven architectures, and high-concurrency protocols in Go, Rust, and Java. "}
                  </p>
                  <div className="mt-auto pt-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                    {" Typical background: 3+ yrs backend "}
                  </div>
                </div>
                {/* Profile 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">
                      terminal
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    {"DevOps & Cloud Engineers"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Sysadmins and infrastructure practitioners aiming to shift into Kubernetes cluster engineering, GitOps CI/CD, and sovereign bare-metal automation. "}
                  </p>
                  <div className="mt-auto pt-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                    {" Typical background: Linux, Docker, CI/CD "}
                  </div>
                </div>
                {/* Profile 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">
                      account_tree
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Technical Product Architects
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Solution designers who need deep foundational comprehension of high-availability SLAs, disaster-recovery runbooks, and strict data localization laws. "}
                  </p>
                  <div className="mt-auto pt-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                    {" Typical background: Enterprise IT Design "}
                  </div>
                </div>
                {/* Profile 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">
                      hub
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Core Systems Integrators
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Telecommunication engineers, payment switch technicians, and fintech operators integrating mission-critical APIs with external legacy mainframes. "}
                  </p>
                  <div className="mt-auto pt-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                    {" Typical background: ISO 8583, AS2, EDI "}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ADMISSIONS & REGISTRATION WORKSPACE */}
          <section className="w-full bg-surface-container-lowest py-space-xl" id="admissions-workspace">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Left Side: Cohort Details & NITA Seal */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="flex flex-col gap-2">
                    <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                      // ADMISSIONS WORKSPACE
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary font-bold leading-tight">
                      {" Enroll in Cohort 04 "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      {" Applications are reviewed on a rolling basis. All applicants undergo a 45-minute technical evaluation covering basic data structures, Linux primitives, and distributed patterns. "}
                    </p>
                  </div>
                  {/* Cohort Timelines Card */}
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Cohort 04 Schedule
                      </span>
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        Q3 Intake
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                      <span>
                        Application Closes:
                      </span>
                      <span className="font-bold text-on-surface">
                        September 14, 2026
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                      <span>
                        Technical Diagnostic Day:
                      </span>
                      <span className="font-bold text-on-surface">
                        September 21, 2026
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                      <span>
                        First Core Session:
                      </span>
                      <span className="font-bold text-on-surface">
                        October 05, 2026
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-md font-body-md text-on-surface-variant">
                      <span>
                        Format:
                      </span>
                      <span className="font-bold text-secondary">
                        Hybrid (Konza Labs + Remote)
                      </span>
                    </div>
                  </div>
                  {/* NITA & Corporate Rebate Accreditation Seal */}
                  <div className="bg-surface-container rounded-xl p-space-md flex items-center gap-space-md">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-secondary-fixed shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[32px]">
                        workspace_premium
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        NITA Reimbursable Employer Training
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {" Regulated Kenyan organizations can recover up to 100% of tuition costs through the National Industrial Training Authority training levy program (Ref: NITA/TRN/9924). "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Right Side: Application Form */}
                <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-space-xl shadow-lg">
                  <form className="flex flex-col gap-space-md" id="cohort-application-form" data-rcfi-onsubmit="handleFormSubmit(event)">
                    <div className="flex items-center justify-between pb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Candidate Registration
                      </h3>
                      <span className="text-label-sm font-label-sm text-secondary font-mono">
                        STEP 1 OF 2
                      </span>
                    </div>
                    {/* Full Name & Work Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="full-name">
                          Full Name *
                        </label>
                        <input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-secondary" id="full-name" placeholder="e.g. Achieng Odhiambo" required type="text" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="work-email">
                          Professional Email *
                        </label>
                        <input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-secondary" id="work-email" placeholder="a.odhiambo@enterprise.ke" required type="email" />
                      </div>
                    </div>
                    {/* Engineering Experience & Primary Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="experience-level">
                          Seniority / Experience *
                        </label>
                        <select className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-secondary" id="experience-level" required>
                          <option value="">
                            Select Level
                          </option>
                          <option value="mid">
                            Mid-Level Software Engineer (3-5 yrs)
                          </option>
                          <option value="senior">
                            Senior Software Engineer (5-8 yrs)
                          </option>
                          <option value="lead">
                            Staff / Principal / Tech Lead (8+ yrs)
                          </option>
                          <option value="devops">
                            DevOps / Cloud Platform Engineer
                          </option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="primary-stack">
                          Primary Core Language *
                        </label>
                        <select className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-secondary" id="primary-stack" required>
                          <option value="">
                            Select Main Tech
                          </option>
                          <option value="golang">
                            Golang (Microservices / Infra)
                          </option>
                          <option value="java">
                            Java / Kotlin (Spring, Quarkus)
                          </option>
                          <option value="csharp">
                            C# / .NET Core
                          </option>
                          <option value="rust">
                            Rust (Systems / Low Latency)
                          </option>
                          <option value="python">
                            Python (Distributed / Data Systems)
                          </option>
                          <option value="node">
                            TypeScript / Node.js
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* Sponsorship Radio Selector */}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Tuition Sponsorship Model *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <label className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-lowest cursor-pointer hover:bg-surface-container-high transition-colors">
                          <input defaultChecked className="w-4 h-4 text-primary focus:ring-secondary" name="sponsorship" type="radio" value="employer" />
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-semibold text-primary">
                              Employer Sponsored
                            </span>
                            <span className="text-[11px] text-on-surface-variant">
                              Eligible for NITA reimbursement
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-lowest cursor-pointer hover:bg-surface-container-high transition-colors">
                          <input className="w-4 h-4 text-primary focus:ring-secondary" name="sponsorship" type="radio" value="self" />
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-semibold text-primary">
                              Self Funded
                            </span>
                            <span className="text-[11px] text-on-surface-variant">
                              Includes 3-part milestone schedule
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* Technical Objective / Motivation */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="motivation">
                        Primary Platform Objective (Brief)
                      </label>
                      <textarea className="w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-secondary" id="motivation" placeholder="Describe the production scale or distributed challenge you are building or seeking to solve..." rows={3} defaultValue="" />
                    </div>
                    {/* Submit Button & Feedback Note */}
                    <div className="flex flex-col gap-2 pt-space-xs">
                      <button className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md font-semibold flex items-center justify-center gap-2 transition-colors shadow-md" type="submit">
                        <span>
                          Submit Application for Screening
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                      </button>
                      <div className="hidden p-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md text-center font-semibold" id="form-status-msg">
                        {" Application Received! Our admissions director will send your sandbox evaluation invite within 24 hours. "}
                      </div>
                      <span className="text-[11px] text-on-surface-variant text-center">
                        {" Strict adherence to the Kenya Data Protection Act 2019. Candidate data is processed solely for academic vetting. "}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ SECTION: ACADEMIC RIGOR & REQUIREMENTS */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2 text-center items-center">
                <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
                  // FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {" Programme Specifications & Requirements "}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    What is the required weekly time commitment?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" The programme requires 10–12 hours per week. This consists of one 3-hour weekend architectural workshop, twice-weekly asynchronous lab assignments on sovereign nodes, and a bi-weekly live fault-injection drill. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    Do I need prior Kubernetes certification?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" No CKAD or CKA certification is strictly required, but applicants must demonstrate practical fluency in container concepts (Dockerfiles, networking, volume mounts) and Linux command-line diagnostics. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    How does the NITA corporate rebate work?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" RCFI is an approved training institution under the National Industrial Training Authority. Sponsoring employers submit the standard NITA approval forms prior to cohort commencement to reclaim up to 100% of tuition against their monthly training levy contributions. "}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    What certificate is awarded upon completion?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Graduates receive the RCFI Certified Sovereign Site Reliability Engineer (CS-SRE) digital credential, cryptographically signed by RCFI’s licensed Electronic Certification Service Provider (ECSP) Root CA and verifiable on the public ledger. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
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
