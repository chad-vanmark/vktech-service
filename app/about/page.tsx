import type { Metadata } from 'next'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'About — VK Tech Service',
  description:
    'Enterprise-grade development for businesses in Upstate SC. Built the systems behind Mars M&M\'s and 9Round Kickboxing. Now building for Greenville.',
}

const BOOKING_URL = 'https://calendly.com/vktech-service/free-website-proposal'

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
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-4">About VK Tech Service</p>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance leading-tight mb-6">
                  Enterprise experience. Built for your business.
                </h1>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
                  I&apos;ve built for Mars and 9Round. Now I&apos;m building for Greenville.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
                  Most web developers learned their craft building small sites. I learned mine rebuilding systems for Mars Inc. and designing the technology infrastructure behind an international fitness franchise. Now I bring that same standard to businesses in Upstate South Carolina.
                </p>
                <p className="text-[#00C8E8] font-medium">
                  Based in Greenville, SC, serving Upstate South Carolina.
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

        {/* ── What I've built ── */}
        <section className="bg-[#1A2332] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-16 max-w-xl">
                What I&apos;ve built
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-6">

              {/* M&M's Configurator */}
              <ScrollReveal>
                <div className="flex flex-col gap-5 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-white">Mars M&amp;M&apos;s Configurator</h3>
                  <p className="text-[#94A3B8] leading-relaxed max-w-[720px]">
                    The M&amp;M&apos;s custom candy configurator at mms.com lets millions of customers design their own M&amp;M&apos;s, custom colors, custom text, photos printed on individual candies, personalized packaging. I was brought in to perform the lift-and-shift migration of the existing system and was involved across all stages of the full microservices architecture rebuild that followed. This is a high-traffic, consumer-facing application for one of the world&apos;s most recognized candy brands.
                  </p>
                  <a
                    href="https://www.mms.com/en-us/configurator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C8E8] hover:gap-3 transition-all duration-200 self-start"
                  >
                    See it live at mms.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>

              {/* 9Round */}
              <ScrollReveal delay={100}>
                <div className="flex flex-row gap-0 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] overflow-hidden hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] transition-all duration-300">
                  <div className="flex flex-col gap-5 p-8" style={{ flex: '1 1 0', minWidth: 0 }}>
                    <h3 className="font-heading text-xl font-bold text-white">9Round Kickboxing, Workout Display System</h3>
                    <p className="text-[#94A3B8] leading-relaxed">
                      9Round is an international kickboxing franchise with hundreds of locations across the US and globally. I designed and built the complete technology infrastructure behind their in-gym workout display system, from the ground up.
                    </p>
                    <p className="text-[#94A3B8] leading-relaxed">
                      That meant selecting the hardware, building the display app running on gym PCs, designing the backend architecture, building the trainer content management system for uploading and scheduling daily workouts, building the real-time owner dashboard for monitoring all locations, and building the machine pairing system so franchise owners could connect and track each screen remotely. Nine screens per gym, each running a different station workout, automatically updated every day.
                    </p>
                    <p className="text-[#94A3B8] leading-relaxed">
                      The result was significant enough that 9Round announced it publicly. In 2023, 9Round launched 24/7 locations, gyms that operate without on-site trainers. That model is only possible because of the display system.
                    </p>
                    <p className="text-[#94A3B8] leading-relaxed">
                      The system is still live and running in gyms today.
                    </p>
                    <a
                      href="https://www.prnewswire.com/news-releases/9round-kickboxing-revamps-offerings--benefits-for-franchise-owners-301977207.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C8E8] hover:gap-3 transition-all duration-200 self-start"
                    >
                      Read the PR Newswire announcement <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div style={{ flex: '0 0 340px', position: 'relative', overflow: 'hidden' }} className="hidden md:block">
                    <img
                      src="/9round-display-system.jpg"
                      alt="9Round Kickboxing workout display system"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '11.5% center' }}
                    />
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Why this matters ── */}
        <section className="relative bg-[#0F1923] py-24">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-8 max-w-xl">
                Why this matters for your business
              </h2>
              <div className="max-w-3xl flex flex-col gap-5">
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  Those projects required getting every technical decision right. Architecture, performance, reliability, user experience. None of it was optional. When you are building for Mars or a global franchise, good enough is not a standard.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  That is the standard I bring to every project I take on, whether it is a Fortune 500 candy brand or a business in Greenville.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  You are not hiring someone who learned web development last year. You are getting a decade of real engineering experience applied to your business, at a price that makes sense for where you are.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Who you are working with ── */}
        <section className="bg-[#1A2332] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-8 max-w-xl">
                Who you are working with
              </h2>
              <div className="max-w-3xl flex flex-col gap-5">
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  I am Chad VanMark, based in Greenville, SC. I started VK Tech Service to do one thing: build websites and systems that actually work for the businesses that need them most, local businesses in Upstate SC that deserve the same quality of work as the enterprise clients I have spent a decade building for.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  Every project I take on, I build myself. No outsourcing, no junior developers, no handoffs. When you work with VK Tech Service, you work with me.
                </p>
              </div>
            </ScrollReveal>
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
                Ready to talk about your project?
              </h2>
              <p className="text-[#94A3B8] text-lg mb-10 max-w-md mx-auto">
                Whether you need a website that gets your phone ringing or a custom system built from the ground up, I would like to hear about it.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#00C8E8] px-9 py-4 text-base font-semibold text-[#0F1923] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_32px_rgba(0,200,232,0.4)] hover:gap-3"
              >
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </a>
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
