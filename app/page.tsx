import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Monitor, Search, Bot, Server, CheckCircle, MapPin, Clock, Code2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'VKTech — Modern Websites & AI Systems for Growing Businesses',
  description:
    'VKTech builds fast, professional websites and intelligent backend systems for local businesses in Upstate South Carolina. Book your free website proposal today.',
}

const BOOKING_URL = 'https://calendly.com/vktech-service'

const painPoints = [
  {
    icon: Monitor,
    title: 'No website',
    body: 'Your competitors are showing up on Google. You&apos;re not.',
  },
  {
    icon: Clock,
    title: 'Outdated site',
    body: 'First impressions happen online. An old site signals an old business.',
  },
  {
    icon: Search,
    title: 'Bad SEO',
    body: "A beautiful site nobody finds is just an expensive digital brochure.",
  },
]

const services = [
  {
    icon: Monitor,
    title: 'Local Business Websites',
    body: 'Professional 5–8 page sites built fast and hosted by us. Starting at $800.',
    href: '/services#websites',
  },
  {
    icon: Search,
    title: 'Web SEO',
    body: 'Get found on Google by people in your area who are already looking for you.',
    href: '/services#seo',
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    body: 'Chatbots, automation, and smart tools that save your team hours every week.',
    href: '/services#ai',
  },
  {
    icon: Server,
    title: 'Systems & Consulting',
    body: 'Complex backend architecture, AWS infrastructure, and technical strategy for growing companies.',
    href: '/services#consulting',
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
    body: 'Review your site, request changes, and sign off when it&apos;s right.',
  },
  {
    number: '03',
    title: 'We launch and host it',
    body: 'We handle the domain, hosting, and go-live. You focus on your business.',
  },
]

const trustItems = [
  { icon: Code2, text: '10+ years building backend systems and web applications' },
  { icon: MapPin, text: 'Local to Upstate South Carolina' },
  { icon: Server, text: 'Hosting included — we manage it so you don\'t have to' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen bg-[#1E2A3A] hero-grid flex items-center pt-24 pb-20 overflow-hidden">
          {/* Diagonal accent line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] border-l border-b border-[#00C8E8]/10 rotate-12 translate-x-64 -translate-y-32" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-r border-t border-[#00C8E8]/8 -rotate-12 -translate-x-32 translate-y-16" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8E8]/30 bg-[#00C8E8]/10 px-4 py-1.5 text-xs font-semibold text-[#00C8E8] mb-8 animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C8E8] animate-pulse" />
                Greenville, SC &mdash; Upstate South Carolina
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-balance mb-6 animate-fade-in-up-delay-1">
                Modern websites and intelligent systems for{' '}
                <span className="text-[#00C8E8]">growing businesses</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 animate-fade-in-up-delay-2">
                Real developer. Real results. No templates, no agencies — just clean code built for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#00C8E8] px-6 py-3.5 text-base font-semibold text-[#1E2A3A] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_24px_rgba(0,200,232,0.4)] hover:gap-3"
                >
                  Book Your Free Proposal
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2A3A] text-balance mb-16 max-w-xl">
                Every day without a good website is a customer you didn&apos;t get.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <ScrollReveal key={point.title} delay={i * 100}>
                  <div className="group flex flex-col gap-4 rounded-lg border border-[#E2E8F0] p-8 hover:border-[#00C8E8]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] group-hover:border-[#00C8E8]/40 transition-colors">
                      <point.icon className="w-5 h-5 text-[#1E2A3A]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A3A]">{point.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{point.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">What we do</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2A3A] text-balance mb-16 max-w-xl">
                Everything your business needs online, done right.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 80}>
                  <Link
                    href={service.href}
                    className="group flex flex-col gap-4 rounded-lg bg-white border border-[#E2E8F0] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border-l-4 border-l-[#00C8E8]"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                      <service.icon className="w-5 h-5 text-[#00C8E8]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A3A]">{service.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{service.body}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00C8E8] mt-auto group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2A3A] text-balance mb-16 max-w-xl">
                From proposal to live site in days, not months.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-[#E2E8F0]" aria-hidden="true" />

              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 120} className="relative">
                  <div className="flex flex-col gap-5 p-8 md:pr-12">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1E2A3A] border-2 border-[#00C8E8] z-10 shrink-0">
                        <span className="text-lg font-bold text-[#00C8E8]">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A3A]">{step.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{step.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#1E2A3A] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3 md:px-12">
                  <item.icon className="w-5 h-5 text-[#00C8E8] shrink-0" aria-hidden="true" />
                  <p className="text-white/80 text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1E2A3A] hero-grid py-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <div className="inline-block w-12 h-1 bg-[#00C8E8] mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-5xl font-bold text-white text-balance mb-6 max-w-2xl mx-auto">
                Get a free website proposal &mdash; no obligation.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                {"We'll research your business, build a working demo of your new site, and show it to you for free. If you love it, we talk price. If not, you keep the ideas."}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#00C8E8] px-8 py-4 text-base font-semibold text-[#1E2A3A] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_32px_rgba(0,200,232,0.4)] hover:gap-3"
              >
                Book Your Free Proposal
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-5 text-sm text-white/40">
                Pick a time that works for you. No credit card. No commitment.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
