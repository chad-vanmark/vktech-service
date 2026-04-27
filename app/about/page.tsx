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
                  10+ years of backend development and complex system architecture. Built the systems behind the scenes that power serious companies — from AWS infrastructure to AI integrations to high-traffic web applications.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
                  Now bringing that same technical depth to local businesses who deserve more than a drag-and-drop template and a support ticket.
                </p>
                <p className="text-[#00C8E8] font-medium">
                  Based in Greenville, SC &mdash; serving Upstate South Carolina.
                </p>
              </ScrollReveal>

              {/* Network graph graphic */}
              <ScrollReveal delay={100}>
                <div className="flex justify-center lg:justify-end" aria-hidden="true">
                  <svg
                    viewBox="0 0 420 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-md opacity-90"
                  >
                    <style>{`
                      @keyframes nodePulse {
                        0%, 100% { opacity: 0.9; r: 7; }
                        50% { opacity: 0.4; r: 5; }
                      }
                      @keyframes nodePulseSlow {
                        0%, 100% { opacity: 0.6; r: 5; }
                        50% { opacity: 0.2; r: 3.5; }
                      }
                      @keyframes lineFlicker {
                        0%, 100% { opacity: 0.25; }
                        50% { opacity: 0.08; }
                      }
                      .n1 { animation: nodePulse 3.2s ease-in-out infinite; }
                      .n2 { animation: nodePulse 2.8s ease-in-out infinite 0.4s; }
                      .n3 { animation: nodePulse 3.6s ease-in-out infinite 0.8s; }
                      .n4 { animation: nodePulseSlow 4s ease-in-out infinite 0.2s; }
                      .n5 { animation: nodePulseSlow 3.4s ease-in-out infinite 1s; }
                      .n6 { animation: nodePulse 2.6s ease-in-out infinite 1.4s; }
                      .n7 { animation: nodePulseSlow 3.8s ease-in-out infinite 0.6s; }
                      .n8 { animation: nodePulseSlow 4.2s ease-in-out infinite 1.2s; }
                      .n9 { animation: nodePulse 3s ease-in-out infinite 0.9s; }
                      .l { animation: lineFlicker 4s ease-in-out infinite; }
                      .l2 { animation: lineFlicker 5s ease-in-out infinite 1s; }
                      .l3 { animation: lineFlicker 3.5s ease-in-out infinite 0.5s; }
                    `}</style>

                    {/* Connecting lines */}
                    <line className="l"  x1="210" y1="170" x2="90"  y2="80"  stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l2" x1="210" y1="170" x2="330" y2="80"  stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l"  x1="210" y1="170" x2="80"  y2="260" stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l3" x1="210" y1="170" x2="340" y2="260" stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l2" x1="210" y1="170" x2="210" y2="40"  stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l"  x1="210" y1="170" x2="50"  y2="170" stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l3" x1="210" y1="170" x2="370" y2="170" stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l2" x1="210" y1="170" x2="210" y2="310" stroke="#00C8E8" strokeWidth="1"/>
                    <line className="l"  x1="90"  y1="80"  x2="210" y2="40"  stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l3" x1="330" y1="80"  x2="210" y2="40"  stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l2" x1="90"  y1="80"  x2="50"  y2="170" stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l"  x1="330" y1="80"  x2="370" y2="170" stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l3" x1="80"  y1="260" x2="50"  y2="170" stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l2" x1="340" y1="260" x2="370" y2="170" stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l"  x1="80"  y1="260" x2="210" y2="310" stroke="#00C8E8" strokeWidth="0.5"/>
                    <line className="l3" x1="340" y1="260" x2="210" y2="310" stroke="#00C8E8" strokeWidth="0.5"/>

                    {/* Primary node — center */}
                    <circle className="n1" cx="210" cy="170" r="7" fill="#00C8E8"/>
                    <circle cx="210" cy="170" r="14" fill="none" stroke="#00C8E8" strokeWidth="0.5" opacity="0.2"/>

                    {/* Secondary nodes */}
                    <circle className="n2" cx="90"  cy="80"  r="5" fill="#00C8E8" opacity="0.8"/>
                    <circle className="n3" cx="330" cy="80"  r="5" fill="#00C8E8" opacity="0.8"/>
                    <circle className="n6" cx="80"  cy="260" r="5" fill="#00C8E8" opacity="0.8"/>
                    <circle className="n9" cx="340" cy="260" r="5" fill="#00C8E8" opacity="0.8"/>

                    {/* Tertiary nodes */}
                    <circle className="n4" cx="210" cy="40"  r="4" fill="#00C8E8" opacity="0.5"/>
                    <circle className="n5" cx="50"  cy="170" r="4" fill="#00C8E8" opacity="0.5"/>
                    <circle className="n7" cx="370" cy="170" r="4" fill="#00C8E8" opacity="0.5"/>
                    <circle className="n8" cx="210" cy="310" r="4" fill="#00C8E8" opacity="0.5"/>
                  </svg>
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
