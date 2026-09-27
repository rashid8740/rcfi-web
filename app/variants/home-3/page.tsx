import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages/variants-home-3/page.css";

export const metadata: Metadata = { title: "Home (variant 3) | RCFI Technology" };

export default function VariantsHome3Page() {
  return (
    <div className="rcfi-variants-home-3" style={{ display: "contents" }}>
      {/* TOP ANNOUNCEMENT & CONTACT BAR (Directly inspired by Top Bar in Image 3) */}
      <aside className="w-full bg-[#052317] text-white/90 text-xs py-2.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Regulatory Badges & Location */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[12px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-lime inline-block animate-pulse" />
              {" ISO 27001 Certified "}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal inline-block" />
              {" CAK Licensed ECSP "}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime inline-block" />
              {" Kenya DPA Compliant "}
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined text-[14px]">
                location_on
              </span>
              {" Hifadhi House, ICD Rd, Nairobi "}
            </span>
          </div>
          {/* Right: Direct Contact & Socials */}
          <div className="flex items-center gap-5 text-[12px]">
            <a className="flex items-center gap-1.5 text-slate-200 hover:text-accent-lime transition-colors" href="mailto:info@rcfi.co.ke">
              <span className="material-symbols-outlined text-[15px] text-accent-lime">
                mail
              </span>
              {" info@rcfi.co.ke "}
            </a>
            <span className="hidden sm:inline-block text-slate-600">
              |
            </span>
            <div className="flex items-center gap-2">
              <a className="w-6 h-6 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                <span className="material-symbols-outlined text-[13px]">
                  public
                </span>
              </a>
              <a className="w-6 h-6 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                <span className="material-symbols-outlined text-[13px]">
                  tag
                </span>
              </a>
              <a className="w-6 h-6 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                <span className="material-symbols-outlined text-[13px]">
                  groups
                </span>
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* MAIN HEADER / NAVBAR (Crisp white with authentic RCFI mosaic logo) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link className="flex items-center gap-3 shrink-0 group" href="/">
            <img alt="RCFI - Reprodrive Center for Innovation" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VctP8IWdv3qWMOpEX83BWo0MQRH0q5B-XkwPEy_oGlLJVWhX1QrF3C0-mxkekFzAWYSDVE5NEBGxjVgruoPgXCgmlAjP2sUtZNF0WP8D9TFV_H66CKFTw4KgSgzleYRPDmvxxOktYNwi_epvO2TKq0O9muOPWmkVdgOpVQ_gz1SspG4gyyEMAEmq1muOwYGjfNitru8XJRtwvltZVfbJTqpLg2nXUGFHPqbEuG-fZk1uywzpRNmM9rXbc" />
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="block text-base font-extrabold tracking-tight text-primary leading-none group-hover:text-emerald-700 transition-colors">
                RCFI
              </span>
              <span className="block text-[10.5px] font-semibold text-slate-400 tracking-wider uppercase">
                Reprodrive Center for Innovation
              </span>
            </div>
          </Link>
          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-slate-600">
            <Link className="text-primary font-bold hover:text-emerald-700 transition-colors" href="/">
              Home
            </Link>
            {" "}
            <a className="hover:text-primary transition-colors" href="#services">
              Services
            </a>
            {" "}
            <a className="hover:text-primary transition-colors" href="#platforms">
              CertySign
            </a>
            {" "}
            <a className="hover:text-primary transition-colors" href="#platforms">
              Elano
            </a>
            {" "}
            <a className="hover:text-primary transition-colors" href="#platforms">
              Prezio
            </a>
            <a className="hover:text-primary transition-colors flex items-center gap-1" href="#health-security">
              {" Health Security "}
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                FHIR
              </span>
            </a>
            <a className="hover:text-primary transition-colors" href="#why-rcfi">
              About
            </a>
            {" "}
            <a className="hover:text-primary transition-colors" href="#contact">
              Contact
            </a>
          </nav>
          {/* Right Action CTA (Rounded Pill matching Image 3) */}
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-emerald-900 text-white font-semibold text-xs transition-all shadow-sm hover:shadow hover:-translate-y-0.5" href="#contact">
              <span className="">
                Book a Meeting
              </span>
              {" "}
              <span className="material-symbols-outlined text-[15px] text-accent-lime">
                arrow_forward
              </span>
            </a>
            <button aria-label="Toggle Navigation Menu" className="xl:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
              {" "}
              <span className="material-symbols-outlined text-[24px]">
                menu
              </span>
              {" "}
            </button>
          </div>
        </div>
      </header>
      <main className="w-full">
        {/* HERO SECTION (Asymmetrical, rounded composition modeled after Image 3 Hero) */}
        <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
          {/* Subtle top dotted pattern from Image 3 */}
          <div className="absolute top-6 left-1/4 -translate-x-1/2 w-48 h-24 opacity-30 pointer-events-none" style={{ "backgroundImage": "radial-gradient(#10b981 1.2px, transparent 1.2px)", "backgroundSize": "14px 14px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy, Pill Badge & Dual CTAs */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Dual-pill badge inspired by the inspiration image's green pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-6">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
                    Kenya's Licensed Certification Provider
                  </span>
                </div>
                {/* Big authoritative headline matching copy deck & visual weight */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-primary leading-[1.15] tracking-tight mb-6">
                  {" Building the "}
                  <span className="text-emerald-700 underline decoration-accent-lime decoration-4 underline-offset-4">
                    Trust Layer
                  </span>
                  {" for Africa's Digital Economy "}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
                  Empower your institution to execute tamper-proof digital transactions, automate governance reporting, and safeguard vital patient data. Engineered under KICA Cap 411A, Kenya Evidence Act Cap 80 Section 106B, and ISO/IEC 27001:2022 standards across East Africa.
                </p>
                {/* CTA button pair (Dark pill with arrow + underline link like inspo) */}
                <div className="flex flex-wrap items-center gap-5 mb-10 w-full sm:w-auto">
                  <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-emerald-900 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group" href="#platforms">
                    <span className="">
                      Explore Products
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-accent-lime transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                  <a className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-emerald-700 transition-colors py-2 border-b-2 border-emerald-600/30 hover:border-emerald-600" href="#services">
                    <span className="">
                      View All Infrastructure Services
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </a>
                </div>
                {/* Trust micro-indicators */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                      verified_user
                    </span>
                    <span className="">
                      FIPS 140-2 Level 3 HSM
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                      shield
                    </span>
                    <span className="">
                      Kenya DPA 2019 Compliant
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                      cloud_done
                    </span>
                    <span className="">
                      ISO/IEC 27001:2022 Certified
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Column: Asymmetric Photo Grid with Rotating Circular Badge & Sparkles */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full max-w-[530px] mx-auto min-h-[460px] sm:min-h-[500px]">
                  {/* Decorative Lime Starbursts / Sparkles from inspiration image */}
                  <div className="absolute -top-3 right-10 text-accent-lime pointer-events-none z-20">
                    <svg fill="currentColor" height="28" viewBox="0 0 24 24" width="28">
                      {" "}
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      {" "}
                    </svg>
                  </div>
                  <div className="absolute bottom-16 right-0 text-emerald-500 pointer-events-none z-20">
                    <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
                      {" "}
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      {" "}
                    </svg>
                  </div>
                  {/* Background Card: Nairobi Sovereign Data Center */}
                  <div className="absolute top-0 right-0 w-[80%] h-[320px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                    <img alt="Nairobi Sovereign Data Center" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-lime text-primary uppercase tracking-wider">
                        Sovereign Vault
                      </span>
                      <p className="text-xs font-semibold mt-1">
                        Nairobi Tier III Infrastructure • FIPS 140-2
                      </p>
                    </div>
                  </div>
                  {/* Foreground Overlapping Card: Digital Health Lab Team */}
                  <div className="absolute bottom-0 left-0 w-[72%] h-[280px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white group z-10">
                    <img alt="African Digital Health Specialists Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/AEtjO1XpMdDQSxRaplsBVZaVBAiGEouMNBZA17HWxTiyiI9wv8NSZIp1rOvB7PeReaZbeORViZWMrOogXFQhiVOO8seY4In92sBReuOz0QaXYtQ41HMav0_DnJnwRKOtt7aqy1Yzq2iVdzkGYQXYPv-lp0Z01Woo0quMh7AJEp2eRt2Dvs7-Zw8elXHyIMNZvA3cf5GA5ry9IMZX6Tl7MK5cy48g4gTwIl6H4zobR5su2acVQuMNXRPEe6yroRM" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white uppercase tracking-wider">
                        Clinical Security Lab
                      </span>
                      <p className="text-xs font-semibold mt-1">
                        {"Health Interoperability & Patient Data Assurance"}
                      </p>
                    </div>
                  </div>
                  {/* Circular Rotating Stamp Badge (Directly matches "HIRE US" stamp badge in Image 3) */}
                  <div className="absolute top-[38%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="relative w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border-2 border-accent-lime/40">
                      {/* Rotating circular SVG text */}
                      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                        {" "}
                        <defs>
                          {" "}
                          <path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" id="badge-circle" />
                          {" "}
                        </defs>
                        {" "}
                        <text fill="#bdf739" fontSize="9.5" fontWeight="700" letterSpacing="2.2">
                          {" "}
                          <textPath href="#badge-circle" startOffset="0%">
                            {" LICENSED ECSP ★ TRUSTED IN AFRICA ★ "}
                          </textPath>
                          {" "}
                        </text>
                        {" "}
                      </svg>
                      {/* Center Icon */}
                      <div className="w-9 h-9 rounded-full bg-accent-lime text-primary flex items-center justify-center font-black">
                        <span className="material-symbols-outlined text-[18px]">
                          verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MARQUEE / TICKER BAR (Directly modeled after dark green asterisk ticker in Image 3) */}
        <section className="w-full bg-[#062417] py-4 overflow-hidden border-y border-emerald-950">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-white text-sm font-bold tracking-wide uppercase">
            <span className="text-slate-200">
              Digital Health Agency
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Konza Technopolis
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Communications Authority of Kenya
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Office of Data Protection Commissioner
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              IntelliSOFT Consulting
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Crown Interactive
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              47 County Governments
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Tier 1 Commercial Banks
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Digital Health Agency
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Konza Technopolis
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Communications Authority of Kenya
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              IntelliSOFT Consulting
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              Crown Interactive
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
            <span className="text-slate-200">
              47 Counties
            </span>
            <span className="text-accent-lime font-black text-base">
              ✻
            </span>
          </div>
        </section>
        {/* ABOUT US / WHY CHOOSE RCFI SECTION (Directly modeled after middle section in Image 3) */}
        <section className="w-full bg-white py-20 lg:py-28 relative" id="why-rcfi">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Main Two-Column Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
              {/* Left: Stacked Dual Photo Composition (Matching Image 3 layout) */}
              <div className="lg:col-span-5 relative">
                <div className="flex flex-col gap-4 max-w-[440px] mx-auto lg:mx-0">
                  {/* Top Photo: Digital Health / Team */}
                  <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group relative">
                    <img alt="RCFI digital health informatics specialists" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AEtjO1XpMdDQSxRaplsBVZaVBAiGEouMNBZA17HWxTiyiI9wv8NSZIp1rOvB7PeReaZbeORViZWMrOogXFQhiVOO8seY4In92sBReuOz0QaXYtQ41HMav0_DnJnwRKOtt7aqy1Yzq2iVdzkGYQXYPv-lp0Z01Woo0quMh7AJEp2eRt2Dvs7-Zw8elXHyIMNZvA3cf5GA5ry9IMZX6Tl7MK5cy48g4gTwIl6H4zobR5su2acVQuMNXRPEe6yroRM" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-primary text-[11px] font-bold shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-emerald-600">
                        health_and_safety
                      </span>
                      {" Healthcare Verified "}
                    </div>
                  </div>
                  {/* Bottom Photo: Sovereign Vault / Hardware HSM */}
                  <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group relative">
                    <img alt="RCFI sovereign data center and HSM server infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AEtjO1VV_uNGw4-p5lwQujZZ3gaFFsM9HZMCRGuKjbHbUJ-sTP3qfv8Y3yaIRraomHZ0intqwYdkCAUvhOe6Y-PYyOguoOeCEdgcJ2tgnC6biUQS8g01Au-QKdcI5L1fG8WW0Zh05S8RjBFT6NShD4cbUSeCRaEmlo9zCeeXZN63YynvbRLqgEWBgRO1VFOIAr26s4jC5kmP6Vj_S1RV9RjVEDCXi-Y4v-wdPG_5feftqXAPomyn9ecjyw0Slg" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary/95 text-accent-lime text-[11px] font-bold shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        lock
                      </span>
                      {" 100% In-Country Sovereign Vault "}
                    </div>
                  </div>
                  {/* Center Stamp Overlay from inspo */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden sm:block z-10">
                    <div className="w-20 h-20 rounded-full bg-accent-lime text-primary p-1 shadow-xl flex flex-col items-center justify-center text-center font-extrabold border-2 border-white">
                      <span className="text-[10px] uppercase leading-tight tracking-tighter">
                        CAK
                      </span>
                      <span className="text-xs leading-none font-black text-emerald-950">
                        LICENSED
                      </span>
                      <span className="text-[9px] uppercase tracking-tighter">
                        ECSP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Content, Heading, Copy Deck, and Progress Percentage Indicators */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Section Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald inline-block" />
                  {" Why Choose RCFI "}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary leading-tight mb-5 tracking-tight">
                  {" Built for Africa, trusted by leaders. "}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Achieve court-admissible legal certainty and frictionless institutional oversight. Tailored for ministries, banks, and healthcare networks, our infrastructure is built on sovereign Kenyan soil in strict adherence to KICA Cap 411A, Kenya Data Protection Act 2019, and ISO/IEC 27001:2022.
                </p>
                {/* Progress Bars with Lime Knob Dots (Directly replicating Image 3 progress bar design) */}
                <div className="w-full space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-800 mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">
                          database
                        </span>
                        Sovereign In-Country Data Residency
                      </span>
                      <span className="text-emerald-800 font-extrabold">
                        100%
                      </span>
                    </div>
                    <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-visible">
                      <div className="h-full bg-primary rounded-full relative" style={{ "width": "100%" }}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-accent-lime border-2 border-primary shadow" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-800 mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">
                          timer
                        </span>
                        {"Platform Uptime SLA & High Availability"}
                      </span>
                      <span className="text-emerald-800 font-extrabold">
                        99.95%
                      </span>
                    </div>
                    <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-visible">
                      <div className="h-full bg-primary rounded-full relative" style={{ "width": "99.95%" }}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-accent-lime border-2 border-primary shadow" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-800 mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">
                          policy
                        </span>
                        Regulatory Compliance (ISO/IEC 27001:2022, CAK, Kenya DPA 2019)
                      </span>
                      <span className="text-emerald-800 font-extrabold">
                        100%
                      </span>
                    </div>
                    <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-visible">
                      <div className="h-full bg-primary rounded-full relative" style={{ "width": "100%" }}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-accent-lime border-2 border-primary shadow" />
                      </div>
                    </div>
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow hover:shadow-md" href="#contact">
                  <span className="">
                    Learn More About Us
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-accent-lime">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* 4-Metric Counter Strip with Pill Separators (Directly matching bottom of Image 3 Middle Section) */}
            <div className="w-full pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1">
                  50K+
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Signatures Verified on CertySign
                </span>
              </div>
              <div className="flex flex-col items-center relative">
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1">
                  10,000+
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Users Served Across Africa
                </span>
              </div>
              <div className="flex flex-col items-center relative">
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1">
                  47
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Kenyan Counties Reached
                </span>
              </div>
              <div className="flex flex-col items-center relative">
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1">
                  4+ Years
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {"Operating & Innovating"}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* PRODUCTS / PLATFORMS SECTION (Dark Forest Green Container matching Image 3 bottom section) */}
        <section className="w-full bg-[#072b1d] text-white py-20 lg:py-28 relative overflow-hidden" id="platforms">
          {/* Subtle angled lines pattern background from Image 3 */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ "background": "repeating-linear-gradient(45deg, #bdf739, #bdf739 1px, transparent 1px, transparent 16px)" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            {/* Header row with title & "View All Platforms" pill button */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-accent-lime text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-lime inline-block" />
                  {" Our Platforms & Ecosystem "}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {" One Ecosystem. Three Platforms. "}
                </h2>
                <p className="text-slate-300 text-base mt-3 leading-relaxed">
                  {" Complete digital transformation solutions designed to work seamlessly together or stand alone. "}
                </p>
              </div>
              <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-xs transition-all shrink-0 shadow-lg" href="#contact">
                <span className="">
                  View All Platforms
                </span>
                <span className="material-symbols-outlined text-[16px] text-emerald-700">
                  arrow_forward
                </span>
              </a>
            </div>
            {/* 3 Product Cards Grid (Replicating the 3-card structure from Image 3 with highlighted lime card) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Card 1: CertySign (Digital Trust Platform - Deep Pine) */}
              <div className="bg-[#0b3827] rounded-3xl p-7 border border-emerald-800/40 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="h-44 rounded-2xl bg-gradient-to-br from-emerald-950 to-primary p-5 flex flex-col justify-between mb-6 border border-emerald-700/30 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-accent-lime/20 text-accent-lime text-[11px] font-extrabold tracking-wide">
                        CAK LICENSED
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-800/60 flex items-center justify-center text-accent-lime">
                        <span className="material-symbols-outlined text-[18px]">
                          verified
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-emerald-400">
                        Digital Trust Platform
                      </span>
                      <h3 className="text-2xl font-black text-white">
                        CertySign
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    Kenya's licensed CAK digital signing, PKI, and document certification platform. Legally recognized under KICA Cap 411A and admissible under Kenya Evidence Act Cap 80 Section 106B with RFC 3161 trusted timestamps.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Digital Signature Certificates (Class 1, 2 & 3)"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        e-TIMS Electronic Invoice Authentication
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        Trusted Timestamping Authority (TSA)
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        {"e-KYC & Instant Biometric Verification"}
                      </span>
                    </div>
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 text-xs font-bold text-accent-lime hover:text-white transition-colors group" href="#contact">
                  <span className="">
                    Explore CertySign Platform
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
              {/* Card 2: Elano (Highlighted Vibrant Card - Replicating Center Lime Highlight from Image 3) */}
              <div className="bg-accent-lime text-primary rounded-3xl p-7 shadow-2xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 transform scale-100 lg:scale-105 z-10 border-4 border-emerald-900/30">
                <div>
                  <div className="h-44 rounded-2xl bg-[#072b1d] text-white p-5 flex flex-col justify-between mb-6 shadow-md relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-accent-lime text-primary text-[11px] font-black tracking-wide uppercase">
                        Institutional
                      </span>
                      <div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center text-accent-lime">
                        <span className="material-symbols-outlined text-[18px]">
                          account_balance
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-accent-lime">
                        {"Governance & Intelligence"}
                      </span>
                      <h3 className="text-2xl font-black text-white">
                        Elano
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-950 font-medium mb-6 leading-relaxed">
                    Empowering 500+ organizations across government agencies, NGOs, and enterprises to manage strategy, performance, and institutional reporting with absolute auditability.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-emerald-800 text-[18px]">
                        check_circle
                      </span>
                      <span className="">
                        MEARL Framework (Monitoring, Evaluation, Reporting)
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-emerald-800 text-[18px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Strategic Planning & KPI Scorecards"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-emerald-800 text-[18px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Stakeholder & Grant Registry"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-emerald-800 text-[18px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Automated Executive & Statutory Reporting"}
                      </span>
                    </div>
                  </div>
                </div>
                <a className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-primary hover:bg-emerald-900 text-white text-xs font-extrabold transition-all shadow-md group" href="#contact">
                  <span className="">
                    Explore Elano Platform
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-accent-lime transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
              {/* Card 3: Prezio (Business Automation - Deep Pine) */}
              <div className="bg-[#0b3827] rounded-3xl p-7 border border-emerald-800/40 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="h-44 rounded-2xl bg-gradient-to-br from-emerald-950 to-primary p-5 flex flex-col justify-between mb-6 border border-emerald-700/30 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-accent-teal/20 text-accent-teal text-[11px] font-extrabold tracking-wide">
                        ENTERPRISE
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-800/60 flex items-center justify-center text-accent-teal">
                        <span className="material-symbols-outlined text-[18px]">
                          bolt
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-emerald-400">
                        {"Operations & Workflow"}
                      </span>
                      <h3 className="text-2xl font-black text-white">
                        Prezio
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {" Modern business management software that streamlines operations, invoicing, procurement, and team collaboration for fast-growing businesses. "}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        {"e-TIMS Integrated Invoicing & Payments"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        Automated Multi-Tier Approval Chains
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Inventory & Asset Tracking"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="material-symbols-outlined text-accent-lime text-[16px]">
                        check_circle
                      </span>
                      <span className="">
                        {"Real-Time Cashflow & Operational Analytics"}
                      </span>
                    </div>
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 text-xs font-bold text-accent-lime hover:text-white transition-colors group" href="#contact">
                  <span className="">
                    Explore Prezio Platform
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* INFRASTRUCTURE SERVICES GRID */}
            <div className="pt-8 border-t border-emerald-900/60" id="services">
              <div className="mb-10 text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-lime block mb-1">
                  Trust Infrastructure as a Service
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Delivered from Nairobi to Africa
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-[#052115] border border-emerald-800/40 hover:border-accent-lime/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/70 text-accent-lime flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      vpn_key
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    PKI as a Service
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {" Managed certificate lifecycle, automated CRL verification, and instant cryptographic stamping via REST API. "}
                  </p>
                  <span className="text-[11px] font-bold text-accent-lime">
                    Live • CAK Licensed
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-[#052115] border border-emerald-800/40 hover:border-accent-lime/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/70 text-accent-lime flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      memory
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    HSM as a Service
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {" Dedicated FIPS 140-2 Level 3 hardware security partition in Nairobi for sovereign cryptographic key management. "}
                  </p>
                  <span className="text-[11px] font-bold text-accent-teal">
                    Waitlist Open
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-[#052115] border border-emerald-800/40 hover:border-accent-lime/50 transition-all" id="health-security">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/70 text-accent-lime flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      health_and_safety
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {"Health Security & FHIR"}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Clinical system security audits, HL7 FHIR R4 security posture, and patient data compliance alongside IntelliSOFT Consulting and the Digital Health Agency.
                  </p>
                  <span className="text-[11px] font-bold text-accent-lime">
                    Available Nationwide
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-[#052115] border border-emerald-800/40 hover:border-accent-lime/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/70 text-accent-lime flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      terminal
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Custom Engineering
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {" Mission-critical enterprise software, government portals, and custom cryptographic integrations built for high uptime. "}
                  </p>
                  <span className="text-[11px] font-bold text-accent-lime">
                    24/7 Dedicated Teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CLOSING CTA BANNER (Vibrant & Trust-building) */}
        <section className="w-full bg-slate-50 py-16 lg:py-24" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-primary via-[#0a3e2b] to-primary text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
              {/* Decorative starburst in banner */}
              <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-accent-lime/10 blur-3xl pointer-events-none" />
              <div className="absolute top-8 right-12 text-accent-lime opacity-40 hidden sm:block">
                <svg fill="currentColor" height="40" viewBox="0 0 24 24" width="40">
                  {" "}
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  {" "}
                </svg>
              </div>
              <div className="max-w-2xl relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-accent-lime text-primary text-xs font-extrabold uppercase tracking-wider mb-4">
                  {" Get In Touch With RCFI "}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  {" Let's build what Africa trusts. "}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {" Whether you need to integrate legally binding e-signatures, secure patient health records, or upgrade your organizational governance, our team in Nairobi is ready to support you. "}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a className="px-8 py-3.5 rounded-full bg-accent-lime hover:bg-white text-primary font-extrabold text-sm transition-all shadow-md" href="mailto:info@rcfi.co.ke">
                    {" Schedule a Consultation "}
                  </a>
                  <a className="px-6 py-3.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/40 text-white font-bold text-sm transition-all flex items-center gap-2" href="tel:+254700000000">
                    <span className="material-symbols-outlined text-[18px] text-accent-lime">
                      call
                    </span>
                    <span className="">
                      Talk to an Architect
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* RCFI 4-COLUMN CORPORATE FOOTER */}
      <footer className="w-full bg-[#041b12] text-white pt-16 pb-12 border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/40">
            {/* Col 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-lime text-primary flex items-center justify-center font-black">
                  <span className="material-symbols-outlined text-[20px]">
                    hub
                  </span>
                </div>
                <div>
                  <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                    RCFI
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                    Reprodrive Center for Innovation
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                {" Licensed Electronic Certification Services Provider (ECSP) delivering PKI, electronic identity, health cybersecurity, and governance systems built on sovereign African digital infrastructure. "}
              </p>
              <div className="pt-2 flex items-center gap-2.5">
                <a aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>
                </a>
                <a aria-label="Twitter" className="w-8 h-8 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    tag
                  </span>
                </a>
                <a aria-label="Global Web" className="w-8 h-8 rounded-full bg-emerald-950 hover:bg-accent-lime hover:text-primary text-slate-300 flex items-center justify-center transition-all" href="#">
                  <span className="material-symbols-outlined text-[16px]">
                    public
                  </span>
                </a>
              </div>
            </div>
            {/* Col 2: Products (2 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime">
                Platforms
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#platforms">
                    {"CertySign (Digital Trust & PKI)"}
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#platforms">
                    {"Elano (Governance & MEARL)"}
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#platforms">
                    {"Prezio (Operations & e-TIMS)"}
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#health-security">
                    Health Security Lab (FHIR)
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#services">
                    HSM as a Service
                  </a>
                </li>
              </ul>
            </div>
            {/* Col 3: Company (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#why-rcfi">
                    About Us
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#why-rcfi">
                    Why Choose RCFI
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#services">
                    Certifications
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#contact">
                    Careers
                  </a>
                </li>
                <li className="">
                  <a className="hover:text-accent-lime transition-colors" href="#contact">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            {/* Col 4: Contact & Statutory (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime">
                Headquarters
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-accent-lime shrink-0">
                    location_on
                  </span>
                  <span className="">
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-accent-lime shrink-0">
                    mail
                  </span>
                  <a className="hover:text-accent-lime transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-accent-lime shrink-0">
                    schedule
                  </span>
                  <span className="">
                    24/7 Security Operations Center
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Disclaimer & Certifications */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="">
              © 2026 Reprodrive Center for Innovation Limited (RCFI). All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-slate-300">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                CAK Licensed ECSP
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                Kenya DPA Compliant
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                FIPS 140-2 L3
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
