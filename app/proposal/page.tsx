import type { Metadata } from 'next'
import { CheckCircle, MapPin, Shield, Code2, Clock } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollReveal from '@/components/scroll-reveal'
import CalendlyEmbed from './calendly-embed'

export const metadata: Metadata = {
  title: 'Free Website Proposal — VKTech',
  description:
    'Book a free 20-minute call. We\'ll research your business and build a working demo of your new site before the call — no cost, no commitment.',
}

const steps = [
  { num: '1', label: 'Book a 20-minute call' },
  { num: '2', label: 'We research your business and build a working demo' },
  { num: '3', label: 'We walk you through it on the call' },
  { num: '4', label: 'If you love it, we talk price' },
]

const trust = [
  { icon: MapPin, text: 'Local business' },
  { icon: Shield, text: 'No agency markup' },
  { icon: Code2, text: 'Real developer' },
  { icon: Clock, text: '10+ years experience' },
]

export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative bg-[#0F1923] pt-36 pb-16 overflow-hidden">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">Free &amp; No Obligation</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white text-balance max-w-2xl leading-tight mb-4">
                Get your free website proposal
              </h1>
              <p className="text-[#94A3B8] text-lg max-w-xl">
                {"Pick a time below and we'll build a working demo of your new site before the call — no cost, no commitment."}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-[#0F1923] py-20">
          <div className="mx-auto max-w-[1480px] px-16">
            <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-12 items-start">

              {/* Left: Info */}
              <div className="flex flex-col gap-10">
                <ScrollReveal>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-white mb-6">What to expect</h2>
                    <ol className="flex flex-col gap-4">
                      {steps.map((step) => (
                        <li key={step.num} className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00C8E8] shrink-0">
                            <span className="text-xs font-bold text-[#0F1923]">{step.num}</span>
                          </div>
                          <span className="text-[#94A3B8] leading-relaxed pt-1">{step.label}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="rounded-lg bg-[#1E2A3A] border border-[#00C8E8]/12 border-l-4 border-l-[#00C8E8] p-6 flex flex-col gap-4">
                    <h3 className="text-xs font-bold text-[#00C8E8] uppercase tracking-widest">Why VKTech</h3>
                    {trust.map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-[#00C8E8] shrink-0" aria-hidden="true" />
                        <span className="text-sm text-[#94A3B8]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#64748B]">Prefer to reach out first?</p>
                    <a
                      href="mailto:Chad@vktechservice.com"
                      className="text-sm font-semibold text-[#00C8E8] hover:underline underline-offset-2"
                    >
                      Chad@vktechservice.com
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Calendly embed */}
              <ScrollReveal>
                <div className="rounded-lg bg-[#1E2A3A] border border-[#00C8E8]/12 overflow-hidden">
                  <CalendlyEmbed />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
