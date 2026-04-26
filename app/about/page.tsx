import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layers, MapPin, Server } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'About — VKTech',
  description:
    'VKTech is a real developer — not an agency. 10+ years of backend development and complex systems architecture, now serving local businesses in Upstate South Carolina.',
}

const BOOKING_URL = 'https://calendly.com/vktech-service/free-website-proposal'

const differentiators = [
  {
    icon: Layers,
    title: 'Technical depth',
    body: 'Most web designers don\'t know backend. Most backend devs don\'t do websites. VKTech does both — so you get a site that looks right and performs like real software.',
  },
  {
    icon: MapPin,
    title: 'Local and accountable',
    body: 'You can call, meet in person, and get a real answer. Not a ticket number. Not an offshore support queue.',
  },
  {
    icon: Server,
    title: 'We host what we build',
    body: 'We don\'t hand it off to a third party and walk away. We keep it running, keep it updated, and fix it when something breaks.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Header ── */}
        <section className="relative bg-[#0F1923] pt-36 pb-24 overflow-hidden">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div
            className="absolute top-0 right-0 pointer-events-none"
            aria-hidden="true"
            style={{
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(0,200,232,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-4">About VKTech</p>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance leading-tight mb-6">
                  A real developer, not an agency.
                </h1>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
                  10+ years of backend development and complex system architecture. Spent years doing contract work for businesses — building the systems behind the scenes that power serious companies.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
                  Now bringing that same technical depth to local businesses who deserve more than a drag-and-drop template and a support ticket.
                </p>
                <p className="text-[#00C8E8] font-medium">
                  Based in Greenville, SC &mdash; serving Upstate South Carolina.
                </p>
              </ScrollReveal>

              {/* Headshot placeholder */}
              <ScrollReveal delay={100}>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                    {/* Rotating conic gradient ring */}
                    <div className="headshot-ring" aria-hidden="true" />
                    <div className="headshot-ring-mask" aria-hidden="true" />
                    {/* Avatar content */}
                    <div
                      className="relative z-10 w-full h-full rounded-full bg-[#00C8E8]/5 flex items-center justify-center overflow-hidden"
                      style={{ boxShadow: '0 0 32px rgba(0,200,232,0.2)' }}
                      aria-label="Founder headshot placeholder"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 opacity-30" aria-hidden="true">
                          <path d="M12 18 L32 62 L40 46" stroke="#00C8E8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M40 46 L68 18" stroke="#00C8E8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M40 46 L68 62" stroke="#00C8E8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-white/25 font-medium">Photo coming soon</span>
                      </div>
                    </div>
                    {/* Outer halo rings */}
                    <div className="absolute -inset-5 rounded-full border border-[#00C8E8]/8 pointer-events-none" aria-hidden="true" />
                    <div className="absolute -inset-10 rounded-full border border-[#00C8E8]/4 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── What makes VKTech different ── */}
        <section className="bg-[#1A2332] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-16 max-w-xl">
                What makes VKTech different
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="flex flex-col gap-5 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded bg-[#00C8E8]/10 border border-[#00C8E8]/20 self-start">
                      <item.icon className="w-4 h-4 text-[#00C8E8]" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-[#94A3B8] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="relative bg-[#162130] py-16 overflow-hidden shimmer-bar">
          <div className="relative mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0">
                <div className="flex flex-col gap-1 md:pr-16">
                  <p className="font-heading text-[48px] font-bold leading-none text-[#00C8E8]">10+</p>
                  <p className="text-sm text-[#94A3B8]">Years of development experience</p>
                </div>
                <div className="hidden md:block w-px h-14 bg-white/10" aria-hidden="true" />
                <div className="flex flex-col gap-1 md:px-16">
                  <p className="font-heading text-[48px] font-bold leading-none text-[#00C8E8]">Full-stack</p>
                  <p className="text-sm text-[#94A3B8]">Frontend, backend, infrastructure, and AI</p>
                </div>
                <div className="hidden md:block w-px h-14 bg-white/10" aria-hidden="true" />
                <div className="flex flex-col gap-1 md:pl-16">
                  <p className="font-heading text-[48px] font-bold leading-none text-[#00C8E8]">Greenville, SC</p>
                  <p className="text-sm text-[#94A3B8]">Serving Upstate South Carolina</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative py-28"
          style={{
            background: 'radial-gradient(ellipse at center, #1A2B3C 0%, #0F1923 65%)',
          }}
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <div className="inline-block w-10 h-px bg-[#00C8E8] mb-10" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-6 max-w-xl mx-auto">
                Ready to build something that actually works?
              </h2>
              <p className="text-[#94A3B8] text-lg mb-10 max-w-md mx-auto">
                {"Book a free proposal call. We'll show you what's possible before you commit to anything."}
              </p>
              <Link
                href="/proposal"
                className="inline-flex items-center gap-2 rounded bg-[#00C8E8] px-9 py-4 text-base font-semibold text-[#0F1923] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_32px_rgba(0,200,232,0.4)] hover:gap-3"
              >
                Book Your Free Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-6 text-sm text-white/35 tracking-wide">
                No credit card &nbsp;&middot;&nbsp; No commitment &nbsp;&middot;&nbsp; Response within 24 hours
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
