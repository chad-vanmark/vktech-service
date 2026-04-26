import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Services — VKTech',
  description:
    'Website design, SEO, AI integrations, and technical consulting for local businesses and growing companies in Upstate South Carolina.',
}

const BOOKING_URL = 'https://calendly.com/vktech-service/free-website-proposal'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Page header ── */}
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
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">Services &amp; Pricing</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance max-w-2xl leading-tight">
                Every service you need to compete online.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Local Business Websites ── */}
        <section id="websites" className="bg-[#0F1923] py-24 border-t border-[#00C8E8]/10">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-4">
                A professional website your customers will actually find
              </h2>
              <p className="text-[#94A3B8] text-lg mb-16 max-w-2xl">
                Custom-built. Mobile-first. Hosted by us. No page-builder templates, no recurring platform fees.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Starter */}
              <ScrollReveal delay={0}>
                <div className="flex flex-col gap-6 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-2">Starter</p>
                    <p className="font-heading text-3xl font-bold text-white">$800 <span className="text-lg font-normal text-[#94A3B8]">– $1,200</span></p>
                    <p className="text-[#94A3B8] mt-2 text-sm">Best for: restaurants, contractors, salons, service providers</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      '3–5 custom pages',
                      'Mobile-first, fully responsive',
                      'Contact form',
                      'Google Maps embed',
                      'Basic on-page SEO',
                      'Fast load times',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-[#00C8E8] shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 rounded border border-[#00C8E8]/40 px-5 py-3 text-sm font-semibold text-[#00C8E8] transition-all duration-200 hover:bg-[#00C8E8]/8 hover:gap-3 self-start"
                  >
                    Book a free proposal call <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Standard */}
              <ScrollReveal delay={100}>
                <div className="relative flex flex-col gap-6 rounded-lg bg-[#0F1923] border border-[#00C8E8]/30 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_24px_rgba(0,200,232,0.12)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-[#00C8E8]/15 border border-[#00C8E8]/30 px-3 py-1 text-xs font-semibold text-[#00C8E8]">
                      Most Popular
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-2">Standard</p>
                    <p className="font-heading text-3xl font-bold text-white">$1,500 <span className="text-lg font-normal text-[#94A3B8]">– $2,500</span></p>
                    <p className="text-[#94A3B8] mt-2 text-sm">Best for: businesses that want to grow and be found</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[
                      '5–8 custom pages',
                      'Everything in Starter',
                      'Blog / CMS integration',
                      'SEO-optimised throughout',
                      'Google Analytics setup',
                      'Performance-tuned build',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-[#00C8E8] shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 rounded bg-[#00C8E8] px-5 py-3 text-sm font-semibold text-[#0F1923] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_20px_rgba(0,200,232,0.35)] hover:gap-3 self-start"
                  >
                    Book a free proposal call <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Add-ons */}
            <ScrollReveal>
              <div className="rounded-lg bg-[#1A2332] border border-[#00C8E8]/10 p-8">
                <h3 className="font-heading text-lg font-bold text-white mb-6">Add-ons</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Hosting & maintenance', price: '$30–60/mo' },
                    { label: 'Monthly site maintenance', price: '$50–100/mo' },
                    { label: 'SEO audit', price: '$300–500' },
                  ].map((addon) => (
                    <div key={addon.label} className="flex items-center justify-between gap-4 rounded border border-[#00C8E8]/10 bg-[#0F1923] p-4">
                      <span className="text-sm text-white/70">{addon.label}</span>
                      <span className="text-sm font-semibold text-[#00C8E8] shrink-0">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Growth Services ── */}
        <section id="seo" className="bg-[#1A2332] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-4">
                Growth services
              </h2>
              <p className="text-[#94A3B8] text-lg mb-16 max-w-2xl">
                Once your foundation is solid, these services help you grow faster.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  id: 'web-apps',
                  title: 'Web apps & custom functionality',
                  price: '$3,000 – $8,000',
                  body: 'Custom portals, booking systems, dashboards, and interactive features built to your exact specs.',
                },
                {
                  id: 'ai-chatbot',
                  title: 'AI chatbot / FAQ integration',
                  price: '$1,500 – $3,500',
                  body: 'A trained chatbot that answers customer questions 24/7, captures leads, and hands off to your team when needed.',
                },
                {
                  id: 'seo-retainer',
                  title: 'Ongoing SEO retainer',
                  price: '$500 – $1,200/mo',
                  body: 'Monthly content, technical SEO, and link-building to keep your rankings climbing.',
                },
                {
                  id: 'backend-api',
                  title: 'Backend / API integrations',
                  price: '$100 – $150/hr',
                  body: 'Connect your website to CRMs, payment processors, inventory systems, or any third-party API.',
                },
              ].map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 80}>
                  <div
                    id={item.id}
                    className="flex flex-col gap-4 rounded-lg bg-[#0F1923] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5 transition-all duration-300 h-full"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                      <span className="shrink-0 rounded-full bg-[#00C8E8]/10 border border-[#00C8E8]/25 px-3 py-1 text-xs font-semibold text-[#00C8E8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#94A3B8] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-10 text-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-[#00C8E8]/40 px-6 py-3.5 text-sm font-semibold text-[#00C8E8] transition-all duration-200 hover:bg-[#00C8E8]/8 hover:gap-3"
                >
                  Discuss your project <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Technical Consulting ── */}
        <section id="consulting" className="relative bg-[#0F1923] py-24">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="w-8 h-px bg-[#00C8E8] mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance mb-4">
                Technical consulting
              </h2>
              <p className="text-[#94A3B8] text-lg mb-4 max-w-2xl">
                Systems architecture, AI strategy, AWS optimization &mdash; for companies that need real technical depth.
              </p>
              <p className="text-[#00C8E8] text-base font-medium italic mb-16">
                &ldquo;You&apos;re paying for 10 years of hard-won experience, not just hours.&rdquo;
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Systems architecture review',
                  price: '$1,500 – $3,000',
                  body: 'A thorough audit of your technical stack with a concrete improvement roadmap.',
                },
                {
                  title: 'AI integration strategy',
                  price: '$2,000 – $5,000',
                  body: 'Identify where AI can save your team time and build a phased integration plan.',
                },
                {
                  title: 'AWS cost & architecture audit',
                  price: '$1,000 – $2,500',
                  body: 'Find waste, reduce costs, and ensure your infrastructure is built to scale.',
                },
                {
                  title: 'Fractional CTO / tech advisor',
                  price: '$150 – $250/hr',
                  body: 'On-call technical leadership for companies that need a senior engineer without a full-time hire.',
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="flex flex-col gap-4 rounded-lg bg-[#1A2332] border border-[#00C8E8]/15 border-l-4 border-l-[#00C8E8] p-8 hover:shadow-[0_0_20px_rgba(0,200,232,0.08)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                      <span className="shrink-0 rounded-full bg-[#00C8E8]/10 border border-[#00C8E8]/25 px-3 py-1 text-xs font-semibold text-[#00C8E8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#94A3B8] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-12 text-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[#00C8E8] px-7 py-3.5 text-base font-semibold text-[#0F1923] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_24px_rgba(0,200,232,0.4)] hover:gap-3"
                >
                  Book a free proposal call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
