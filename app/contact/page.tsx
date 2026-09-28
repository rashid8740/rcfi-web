import type { Metadata } from "next";
import Link from "next/link";
import PageScripts from "@/components/PageScripts";
import { scripts } from "./scripts";
import "@/styles/pages/contact/page.css";
import "@/styles/pages/contact/late.css";
import PartnersNavMenu from "@/components/PartnersNavMenu";

export const metadata: Metadata = { title: "Contact | RCFI Technology" };

export default function ContactPage() {
  return (
    <div className="rcfi-contact" style={{ display: "contents" }}>
      <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-primary-container text-on-primary h-10 px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between font-label-sm text-label-sm">
            <div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  ISO 27001 Certified
                </span>
              </div>
              <span className="text-on-primary-container hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  CAK Licensed ECSP
                </span>
              </div>
              <span className="text-on-primary-container hidden sm:inline">
                •
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                <span>
                  Kenya DPA Compliant
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-on-primary-container">
                mail
              </span>
              <a className="text-on-primary hover:text-secondary-fixed transition-colors" href="mailto:info@rcfi.co.ke">
                info@rcfi.co.ke
              </a>
            </div>
          </div>
        </div>
        <div className="h-20 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-full px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
            <div className="flex items-center gap-space-md">
              <img alt="RCFI Logo" className="h-8 w-auto object-contain" src="/brand/rcfi-mark.svg" />
              <div className="hidden xl:flex flex-col border-l border-outline-variant pl-space-sm">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold leading-none">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Reprodrive Center for Innovation Limited
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center h-full gap-space-lg" data-active-classes="text-primary font-title-md border-b-2 border-secondary">
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
              <PartnersNavMenu className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" />
              <Link aria-current="page" className="h-full flex items-center transition-colors text-primary font-title-md border-b-2 border-secondary" data-path="about" href="/about/">
                About
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="careers" href="/careers/">
                Careers
              </Link>
              <Link className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-space-md">
              <a className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-30 bg-surface min-h-[calc(100vh-28rem)]">
        <div className="flex flex-col w-full">
          {/* Atmospheric Deep Pine Hero Section */}
          <section className="relative bg-primary text-on-primary overflow-hidden pb-16 pt-8 md:pb-20">
            {/* Ambient Technical Grid Overlay & Radial Glows */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <pattern height="48" id="tech-grid" patternUnits="userSpaceOnUse" width="48">
                    {" "}
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6cf8bb" strokeWidth="0.75" />
                    {" "}
                    <circle cx="0" cy="0" fill="#6cf8bb" r="1.5" />
                    {" "}
                  </pattern>
                  {" "}
                </defs>
                {" "}
                <rect fill="url(#tech-grid)" height="100%" width="100%" />
                {" "}
              </svg>
            </div>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-secondary-container/15 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary-container/40 rounded-full blur-[90px] pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              {/* Breadcrumb / System Mode Indicator */}
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary-fixed mb-space-lg">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container/80 text-secondary-fixed">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  {" Direct Communication & Support "}
                </span>
                <span className="text-tertiary-fixed-dim">
                  /
                </span>
                <span className="text-tertiary-fixed-dim">
                  Institutional Liaison
                </span>
              </div>
              {/* Main Hero Narrative */}
              <div className="max-w-4xl">
                <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight mb-space-md">
                  {" Let's talk about your digital transformation "}
                </h1>
                <p className="font-body-lg text-body-lg text-tertiary-fixed max-w-3xl leading-relaxed mb-space-xl">
                  {" Book a live session on our calendar for demos, sales, or support — or send us a message and we'll reply within one business day. "}
                </p>
                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
                  <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-secondary-container text-on-secondary-container font-headline-sm text-title-md hover:bg-secondary-fixed transition-colors shadow-lg shadow-secondary-container/20" href="https://meet.rcfi.co.ke/" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[20px]">
                      calendar_month
                    </span>
                    <span>
                      Book a Meeting
                    </span>
                  </a>
                  <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-tertiary-container text-on-primary font-title-md text-title-md hover:bg-primary-container transition-colors" href="mailto:info@rcfi.co.ke">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      mail
                    </span>
                    <span>
                      info@rcfi.co.ke
                    </span>
                  </a>
                </div>
                {/* Trust Indicator SLA Badges */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-lg border-t border-tertiary-container/60 font-label-md text-label-md text-tertiary-fixed-dim">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      timer
                    </span>
                    <span>
                      Response within 1 business day
                    </span>
                  </div>
                  <span className="text-tertiary-container">
                    •
                  </span>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      verified_user
                    </span>
                    <span>
                      CAK ECSP Encrypted Channels
                    </span>
                  </div>
                  <span className="text-tertiary-container">
                    •
                  </span>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      terminal
                    </span>
                    <span>
                      {"Direct Engineering & Advisory Access"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Split Panel Core Architecture: Contact Form + Institutional Cards */}
          <section className="w-full bg-surface py-14 lg:py-20 -mt-6">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Column 1: Interactive Primary Contact Form (7 Cols) */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
                  <div className="mb-space-lg">
                    <span className="inline-flex items-center px- space-xs py-1 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs">
                      {" Inquiry & Direct Dispatch "}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-xs">
                      {" Send us a message "}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Fields marked with an asterisk (*) are mandatory. We typically respond within 24 business hours. "}
                    </p>
                  </div>
                  <form className="space-y-space-md" id="contactForm" data-rcfi-onsubmit="event.preventDefault(); handleFormSubmit();">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      {/* Full Name */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="fullName">
                          {" Full name "}
                          <span className="text-error">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <input className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm" id="fullName" placeholder="e.g. Christine Mutiso" required type="text" />
                        </div>
                      </div>
                      {/* Email Address */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="email">
                          {" Email address "}
                          <span className="text-error">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <input className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm" id="email" placeholder="name@organization.co.ke" required type="email" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      {/* Phone Number */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="phone">
                          {" Phone number "}
                          <span className="text-error">
                            *
                          </span>
                        </label>
                        <div className="relative flex">
                          <span className="inline-flex items-center px-3 bg-surface-container-low text-on-surface-variant font-label-md text-label-md rounded-l-lg select-none">
                            {" 🇰🇪 +254 "}
                          </span>
                          <input className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-r-lg font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm" id="phone" placeholder="712 345 678" required type="tel" />
                        </div>
                      </div>
                      {/* Organization */}
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="organization">
                          {" Organization "}
                        </label>
                        <input className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm" id="organization" placeholder="Company, Ministry, or Institution name" type="text" />
                      </div>
                    </div>
                    {/* Subject / Interest Selection */}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="interest">
                        {" I'm interested in "}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <select className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm appearance-none cursor-pointer" id="interest" required defaultValue="">
                          <option disabled value="">
                            Select an area of interest...
                          </option>
                          <option value="General inquiry">
                            General inquiry
                          </option>
                          <option value="Request a demo">
                            Request a demo
                          </option>
                          <option value="CertySign">
                            CertySign
                          </option>
                          <option value="Elano">
                            Elano
                          </option>
                          <option value="Prezio">
                            Prezio
                          </option>
                          <option value="Health Security / Cybersecurity">
                            Health Security / Cybersecurity
                          </option>
                          <option value="Health security partnership">
                            Health security partnership
                          </option>
                          <option value="Partnership">
                            Partnership
                          </option>
                          <option value="Technical support">
                            Technical support
                          </option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined text-[20px]">
                          {" expand_more "}
                        </span>
                      </div>
                    </div>
                    {/* Message Textarea */}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="message">
                        {" Message "}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <textarea className="w-full p-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-low transition-colors shadow-sm resize-y" id="message" placeholder="Tell us about your requirements, project scope, or inquiry..." required rows={4} defaultValue="" />
                    </div>
                    {/* Data Protection & Consent */}
                    <div className="bg-surface-container-low p-4 rounded-lg">
                      <label className="flex items-start gap-space-xs cursor-pointer">
                        <input className="mt-1 w-4 h-4 rounded text-primary accent-primary cursor-pointer" id="consent" required type="checkbox" />
                        <span className="font-body-md text-body-md text-on-surface-variant leading-snug select-none">
                          {" I agree that RCFI Technology may contact me about this inquiry by email and SMS, and that my details will be handled securely in line with our privacy practices. "}
                          <span className="text-error">
                            *
                          </span>
                          {" "}
                        </span>
                      </label>
                    </div>
                    {/* Submission CTA */}
                    <div>
                      <button className="w-full group flex items-center justify-center gap-space-xs py-3.5 px-space-lg rounded-lg bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary transition-all shadow-md active:scale-[0.99]" id="submitBtn" type="submit">
                        <span>
                          Send Message
                        </span>
                        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                    {/* Encryption & Security Verification Footnote */}
                    <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          lock
                        </span>
                        <span>
                          TLS 1.3 / EAL4+ Verified Transmission
                        </span>
                      </div>
                      <span className="text-primary font-semibold">
                        Kenya Data Protection Act 2019 Compliant
                      </span>
                    </div>
                  </form>
                  {/* Dynamic Success Message Banner (Hidden by default) */}
                  <div className="hidden mt-space-md p-space-md bg-secondary-fixed/20 text-on-surface rounded-lg" id="formSuccessMessage">
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        check_circle
                      </span>
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Message Dispatched Successfully
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" Thank you for contacting RCFI Technology. Our institutional client engineering desk has logged your request and will follow up within one business day. "}
                    </p>
                  </div>
                </div>
                {/* Column 2: Direct Channels & Operational Touchpoints (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  {/* Card 1: Schedule Online */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start justify-between gap-space-xs mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-10 h-10 rounded-lg bg-secondary-container/40 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[22px]">
                            event_available
                          </span>
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md text-primary font-bold">
                            Schedule online
                          </h3>
                          <span className="font-label-sm text-label-sm text-secondary font-semibold">
                            Real-time calendar sync
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                        Active
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      {" Demo, sales, support, partnership, or onboarding — pick a time at meet.rcfi.co.ke "}
                    </p>
                    <a className="inline-flex items-center gap-space-xs font-title-md text-title-md text-secondary hover:text-primary transition-colors" href="https://meet.rcfi.co.ke/" rel="noopener noreferrer" target="_blank">
                      <span>
                        Book a Meeting
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                  {/* Card 2: Email Us */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-space-xs mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[22px]">
                            outgoing_mail
                          </span>
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md text-primary font-bold">
                            Email us
                          </h3>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Institutional inbox
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Monitored
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg mb-space-sm">
                      <a className="font-headline-sm text-title-md text-primary font-semibold hover:underline" href="mailto:info@rcfi.co.ke">
                        {" info@rcfi.co.ke "}
                      </a>
                      <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" data-rcfi-onclick="navigator.clipboard.writeText('info@rcfi.co.ke'); alert('Email address copied to clipboard');" title="Copy email to clipboard" type="button">
                        {" Copy "}
                      </button>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {" We reply within one business day "}
                    </p>
                  </div>
                  {/* Card 3: Visit Us */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-space-xs mb-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">
                          corporate_fare
                        </span>
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md text-primary font-bold">
                          Visit us
                        </h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Nairobi HQ • Kenya Data Sovereignty
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 mb-space-sm">
                      <div className="font-title-md text-title-md text-on-surface font-semibold">
                        Hifadhi House, 5th Floor
                      </div>
                      <div className="font-body-md text-body-md text-on-surface-variant">
                        Along ICD Road, Nairobi, Kenya · By appointment
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        verified
                      </span>
                      {" Physical Security Tier-III Perimeter "}
                    </div>
                  </div>
                  {/* Card 4: Office Hours */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[22px]">
                            schedule
                          </span>
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md text-primary font-bold">
                            Office hours
                          </h3>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            East Africa Time (EAT / UTC+3)
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                        {" Open Now "}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body-md text-body-md pt-space-xs border-t border-surface-container-high">
                      <span className="text-on-surface-variant font-medium">
                        Monday – Friday
                      </span>
                      <span className="text-primary font-bold">
                        8:30 AM – 5:30 PM
                      </span>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
                      {" Available during East Africa business hours "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Location & Institutional Trust Banner (HQ Preview & Strategic Presence) */}
          <section className="w-full bg-surface-container-low py-14">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 sm:p-8 lg:p-10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                  {/* Geographical & Infrastructure Scope */}
                  <div className="lg:col-span-6 space-y-space-md">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm mb-space-xs">
                        <span className="material-symbols-outlined text-[14px]">
                          pin_drop
                        </span>
                        {" National Coverage & Governance "}
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                        {" Operating at the core of Kenya's digital infrastructure "}
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Located strategically at Hifadhi House along the Inland Container Depot (ICD) transit corridor in Nairobi, RCFI maintains resilient data sovereign connections, redundant fiber links, and cryptographic infrastructure governing public-key systems across East Africa. "}
                    </p>
                    {/* Quick Credential Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                      <div className="bg-surface-container-low p-space-sm rounded-lg">
                        <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                          47
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Counties Reach
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg">
                        <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                          ECSP
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Licensed Operations
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg">
                        <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                          FIPS 140-2
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          In-House HSM Vault
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs pt-space-xs font-label-md text-label-md text-primary">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        verified_user
                      </span>
                      <span>
                        Audited under the Communications Authority of Kenya (CAK) Framework
                      </span>
                    </div>
                  </div>
                  {/* Interactive Map Container */}
                  <div className="lg:col-span-6">
                    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner bg-surface-container">
                      {/* Location Map Component via data-location */}
                      <div className="w-full h-full bg-cover bg-center" data-location="Hifadhi House, ICD Road, Nairobi, Kenya" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq07B6ePayf4g61FmhIQ7jIqI6rV7OrMp2rYtVBi8ACuwnflDcBGVArm9he5oO8Kx_s5WkS8beimvUMVS38BOY2qaSSAw0sjy4NX-BJCXzWgInfxO_1TLicwpJcQ_dB9miYaQOZLQsT6v-ZOmqqMYq7eyt4fi3GTEzcI7WIIxzM4mrhxZpFho5_jxvvGImby42OFcgnO9rXUrVyIMwSp3sm4MDtZO1NlB84tGqayXFvAdlPEIEHC1n')" }} />
                      {/* Map Floating Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-primary/90 text-on-primary backdrop-blur-sm p-space-sm rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                            location_on
                          </span>
                          <div className="font-label-sm text-label-sm">
                            <span className="font-bold text-on-primary">
                              Hifadhi House, 5th Fl.
                            </span>
                            {" "}
                            <span className="text-tertiary-fixed-dim ml-1">
                              ICD Road, Nairobi
                            </span>
                          </div>
                        </div>
                        <a className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold hover:bg-secondary-fixed transition-colors" href="https://maps.google.com/?q=Hifadhi+House+ICD+Road+Nairobi" rel="noopener noreferrer" target="_blank">
                          {" Directions "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Script for form interactivity & feedback */}
        </div>
      </main>
      <footer className="w-full bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div>
              <div className="flex items-center gap-space-xs mb-space-md">
                <span className="font-headline-sm text-headline-sm text-primary-fixed tracking-tight font-bold">
                  RCFI
                </span>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">
                  • Technology
                </span>
              </div>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-space-lg leading-relaxed">
                Reprodrive Center for Innovation Limited is a licensed telecommunications, cybersecurity, and digital trust solutions provider delivering institutional-grade systems across Africa.
              </p>
              <div className="flex items-center gap-space-sm">
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    public
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    hub
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    smart_display
                  </span>
                </a>
                <a className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">
                    podcasts
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                Products
              </h4>
              <ul className="space-y-space-sm">
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="certysign" href="/products/certysign/">
                    CertySign PKI
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="elano" href="/products/elano/">
                    Elano Cloud Suite
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="prezio" href="/products/prezio/">
                    Prezio Financial Gateway
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="health-security" href="/health-security/">
                    Health Security Engine
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                Company
              </h4>
              <ul className="space-y-space-sm">
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="home" href="/">
                    Home
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="about" href="/about/">
                    About Us
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="updates" href="/insights/">
                    {"Updates & Press"}
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="careers" href="/careers/">
                    Careers
                  </Link>
                </li>
                <li className="leading-none">
                  <Link className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="contact" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li className="leading-none">
                  <a className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-on-primary transition-colors" data-path="book-a-meeting" href="https://meet.rcfi.co.ke/" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md">
                {"Contact & Regulatory"}
              </h4>
              <div className="flex flex-col gap-space-sm font-body-md text-body-md text-tertiary-fixed-dim mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed shrink-0">
                    location_on
                  </span>
                  <span>
                    5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed shrink-0">
                    mail
                  </span>
                  <a className="hover:text-on-primary transition-colors" href="mailto:info@rcfi.co.ke">
                    info@rcfi.co.ke
                  </a>
                </div>
              </div>
              <div className="pt-space-sm border-t border-tertiary-container flex flex-wrap gap-space-xs">
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  ISO 27001
                </span>
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  CAK ECSP
                </span>
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm">
                  Kenya DPA
                </span>
              </div>
            </div>
          </div>
          <div className="pt-space-md border-t border-tertiary-container flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-tertiary-fixed-dim">
            <div>
              © 2026 Reprodrive Center for Innovation Limited. All rights reserved.
            </div>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="/privacy/">
                Privacy Policy
              </Link>
              <Link className="hover:text-on-primary transition-colors" data-path="terms-of-service" href="/terms/">
                Terms of Service
              </Link>
              <Link className="hover:text-on-primary transition-colors" data-path="compliance-portal" href="/trust/">
                Compliance Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <PageScripts scripts={scripts} />
    </div>
  );
}
