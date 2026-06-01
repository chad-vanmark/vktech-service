import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Monitor, Search, Bot, Server, Code2, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'VKTech — Modern Websites & AI Systems for Growing Businesses',
  description:
    'VKTech builds fast, professional websites and intelligent backend systems for local businesses in Upstate South Carolina. Book your free website proposal today.',
}

const BOOKING_URL = 'https://calendly.com/vktech-service/free-website-proposal'

const painPoints = [
  {
    number: '01',
    title: 'No website',
    body: 'Your competitors are showing up on Google. You\'re not.',
  },
  {
    number: '02',
    title: 'Outdated site',
    body: 'First impressions happen online. An old site signals an old business.',
  },
  {
    number: '03',
    title: 'Bad SEO',
    body: 'A beautiful site nobody finds is just an expensive digital brochure.',
  },
]

const services = [
  {
    icon: Monitor,
    title: 'Local Business Websites',
    body: 'Custom websites built fast and hosted by us.',
    price: 'Starting at $800',
    href: '/services#websites',
    featured: true,
  },
  {
    icon: Search,
    title: 'Web SEO',
    body: 'Get found on Google by people in your area who are already looking for you.',
    price: 'Starting at $300',
    href: '/services#seo',
    featured: false,
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    body: 'Chatbots, automation, and smart tools that save your team hours every week.',
    price: 'Starting at $1,500',
    href: '/services#ai',
    featured: false,
  },
  {
    icon: Server,
    title: 'Systems & Consulting',
    body: 'Complex backend architecture, AWS infrastructure, and technical strategy.',
    price: '$100–150/hr',
    href: '/services#consulting',
    featured: false,
  },
]

const steps = [
  {
    number: '01',
    title: 'We build your demo',
    body: 'We research your business and build a working prototype before we even talk price.',
  },
  {
    number: '02',
    title: 'You approve the design',
    body: 'Review your site, request changes, and sign off when it\'s right.',
  },
  {
    number: '03',
    title: 'We launch and host it',
    body: 'We handle the domain, hosting, and go-live. You focus on your business.',
  },
]

const trustStats = [
  { value: '10+', label: 'Years of backend experience', icon: Code2 },
  { value: '100%', label: 'Hosting managed by us', icon: Server },
  { value: 'SC', label: 'Local to Upstate South Carolina', icon: MapPin },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-[#0F1923] flex items-center pt-24 pb-20 overflow-hidden">
          {/* Animated grid */}
          <div className="hero-grid-bg" aria-hidden="true" />

          {/* Glow spots */}
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: '-100px',
              left: '-100px',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(0,200,232,0.08) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              bottom: '-80px',
              right: '-80px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-4xl">
              {/* Location badge */}
              <div className="anim-0 inline-flex items-center gap-2 rounded-full border border-[#00C8E8]/25 bg-[#00C8E8]/8 px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C8E8] animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#00C8E8] tracking-wide">Greenville, SC &mdash; Upstate South Carolina</span>
              </div>

              {/* Headline */}
              <h1 className="anim-1 font-heading text-[44px] sm:text-[60px] lg:text-[72px] font-bold leading-[1.05] text-balance mb-6 text-white">
                Modern websites and{' '}
                <span className="text-[#00C8E8]">intelligent systems</span>{' '}
                for growing businesses
              </h1>

              {/* Subheadline */}
              <p className="anim-2 text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-10">
                Real developer. Real results. No templates, no agencies &mdash; just clean code built for your business.
              </p>

              {/* CTAs */}
              <div className="anim-3 flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#00C8E8] px-7 py-3.5 text-base font-semibold text-[#0F1923] transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,200,232,0.35)] hover:bg-[#00C8E8]/90 hover:gap-3"
                >
                  Book Your Free Proposal
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded border border-[#00C8E8]/40 px-7 py-3.5 text-base font-semibold text-[#00C8E8] transition-all duration-200 hover:bg-[#00C8E8]/8 hover:border-[#00C8E8]/70"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>

          {/* Bottom fade into next section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #0F1923)' }}
            aria-hidden="true"
          />
        </section>

        {/* ── Pain Points ── */}
        <section className="bg-[#1A2332] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-20 max-w-xl">
                Every day without a good website is a customer you didn&apos;t get.
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-0 divide-y divide-[#00C8E8]/10">
              {painPoints.map((point, i) => (
                <ScrollReveal key={point.number} delay={i * 150}>
                  <div className="relative group flex items-start gap-8 py-10 pl-4 border-l-2 border-[#00C8E8]">
                    {/* Large faded number */}
                    <span
                      className="absolute left-6 top-1/2 -translate-y-1/2 font-heading font-bold text-[160px] leading-none select-none pointer-events-none"
                      style={{ color: 'rgba(0,200,232,0.06)' }}
                      aria-hidden="true"
                    >
                      {point.number}
                    </span>
                    <div className="relative z-10 flex flex-col gap-2 max-w-xl ml-4 md:ml-20">
                      <h3 className="font-heading text-2xl font-bold text-white">{point.title}</h3>
                      <p className="text-[#94A3B8] text-lg leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-[#1A2332] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">What we do</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-16 max-w-xl">
                Everything your business needs online, done right.
              </h2>
            </ScrollReveal>

            {/* Featured card — full width */}
            <ScrollReveal>
              <Link
                href={services[0].href}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 mb-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded bg-[#00C8E8]/10 border border-[#00C8E8]/20 shrink-0">
                    <Monitor className="w-5 h-5 text-[#00C8E8]" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-xl font-bold text-white">{services[0].title}</h3>
                    <p className="text-[#94A3B8]">{services[0].body}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="rounded-full bg-[#00C8E8]/10 border border-[#00C8E8]/25 px-3 py-1 text-xs font-semibold text-[#00C8E8]">
                    {services[0].price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#00C8E8] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Three-column remaining cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.slice(1).map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 100}>
                  <Link
                    href={service.href}
                    className="group flex flex-col gap-5 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 p-7 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5 h-full"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded bg-[#00C8E8]/10 border border-[#00C8E8]/20 self-start">
                      <service.icon className="w-4 h-4 text-[#00C8E8]" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-heading text-lg font-bold text-white">{service.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{service.body}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="rounded-full bg-[#00C8E8]/10 border border-[#00C8E8]/25 px-2.5 py-0.5 text-xs font-semibold text-[#00C8E8]">
                        {service.price}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00C8E8]/60 group-hover:text-[#00C8E8] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process / How It Works ── */}
        <section id="how-it-works" className="bg-[#0F1923] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">Process</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-20 max-w-xl">
                From proposal to live site in days, not months.
              </h2>
            </ScrollReveal>

            {/* Desktop: horizontal timeline. Mobile: vertical stack */}
            <div className="relative">
              {/* Dashed connector line — desktop only */}
              <div
                className="hidden md:block absolute top-[26px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)]"
                aria-hidden="true"
                style={{
                  height: '1px',
                  borderTop: '1px dashed rgba(0,200,232,0.35)',
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {steps.map((step, i) => (
                  <ScrollReveal key={step.number} delay={i * 150}>
                    <div className="flex flex-col gap-5">
                      {/* Node */}
                      <div className="flex items-center gap-4 md:block">
                        <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#00C8E8] bg-[#0F1923] flex items-center justify-center shrink-0 md:mb-8">
                          <span className="font-heading text-base font-bold text-[#00C8E8]">{step.number}</span>
                        </div>
                        <div className="md:hidden">
                          <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed mt-1">{step.body}</p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-[#94A3B8] leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <section className="relative bg-[#162130] py-16 overflow-hidden shimmer-bar">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
              {trustStats.map((stat, i) => (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center gap-2 md:px-16 ${
                    i < trustStats.length - 1
                      ? 'md:border-r md:border-white/10'
                      : ''
                  }`}
                >
                  <span className="font-heading text-[48px] font-bold leading-none text-[#00C8E8]">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#94A3B8] text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          className="relative py-32"
          style={{
            background: 'radial-gradient(ellipse at center, #1A2B3C 0%, #0F1923 65%)',
          }}
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <div className="inline-block w-10 h-px bg-[#00C8E8] mb-10" aria-hidden="true" />
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance mb-6 max-w-2xl mx-auto">
                Get a free website proposal &mdash; no obligation.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mx-auto mb-10">
                {"We'll research your business, build a working demo of your new site, and show it to you for free. If you love it, we talk price."}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#00C8E8] px-9 py-4 text-base font-semibold text-[#0F1923] transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,200,232,0.4)] hover:bg-[#00C8E8]/90 hover:gap-3"
              >
                Book Your Free Proposal
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
