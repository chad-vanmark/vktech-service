import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import BackToTop from './back-to-top'

export const metadata: Metadata = {
  title: 'Privacy Policy — VKTech',
  description:
    'How VKTech Service LLC collects, uses, and protects your information. Plain language, no jargon.',
}

const sections = [
  {
    heading: '1. Information we collect',
    content: (
      <>
        <p className="mb-4">We collect information only when you choose to share it with us:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>
            <span className="font-semibold text-[#1E2A3A]">Booking a call:</span> When you schedule through our Calendly booking link, Calendly collects your name, email address, and any answers you provide to our intake questions (such as your business name and project goals).
          </li>
          <li>
            <span className="font-semibold text-[#1E2A3A]">Contacting us directly:</span> If you email us, we receive your name, email address, and the contents of your message.
          </li>
          <li>
            <span className="font-semibold text-[#1E2A3A]">Website analytics:</span> We use Google Analytics to collect anonymous, aggregated data about how visitors use our site — pages visited, time on site, general location (city/region level), and device type. This data cannot be used to identify you personally.
          </li>
        </ul>
        <p>We do not collect payment information, government IDs, health data, or any other sensitive personal information through this website.</p>
      </>
    ),
  },
  {
    heading: '2. How we use your information',
    content: (
      <>
        <p className="mb-4">We use the information you provide solely to:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>Respond to your inquiry or prepare for your scheduled call</li>
          <li>Deliver the services you have engaged us for</li>
          <li>Send occasional follow-up communications directly related to your project or inquiry</li>
          <li>Improve our website based on anonymous analytics data</li>
        </ul>
        <p>We do not sell, rent, trade, or share your personal information with any third party for marketing or advertising purposes — ever.</p>
      </>
    ),
  },
  {
    heading: '3. Client website hosting',
    content: (
      <>
        <p className="mb-4">VKTech hosts websites for client businesses on managed servers. If you are a visitor to one of those client websites (not this website), the following applies:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>We host the website infrastructure but we are not the data controller for that site&apos;s content or visitor data</li>
          <li>Any personal information you submit through a client&apos;s website (such as a contact form) is received by that business, not by VKTech</li>
          <li>We do not access, read, sell, or use visitor data belonging to our clients&apos; websites for any purpose</li>
          <li>Each client website may have its own privacy policy governing how that business handles your data</li>
        </ul>
        <p>If you have questions about data collected by a business whose website VKTech hosts, please contact that business directly.</p>
      </>
    ),
  },
  {
    heading: '4. Third-party services we use',
    content: (
      <>
        <p className="mb-4">Our website and operations rely on the following third-party tools, each governed by their own privacy policy:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>
            <span className="font-semibold text-[#1E2A3A]">Calendly</span> (appointment scheduling) —{' '}
            <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-[#00C8E8] underline-offset-2 hover:underline">calendly.com/legal/privacy-notice</a>
          </li>
          <li>
            <span className="font-semibold text-[#1E2A3A]">Google Analytics</span> (anonymous website traffic) —{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00C8E8] underline-offset-2 hover:underline">policies.google.com/privacy</a>
          </li>
        </ul>
        <p>We choose tools that are reputable and widely used. We do not use advertising networks, retargeting pixels, or data brokers.</p>
      </>
    ),
  },
  {
    heading: '5. Cookies',
    content: (
      <>
        <p className="mb-4">Our website uses cookies in two ways:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>
            <span className="font-semibold text-[#1E2A3A]">Essential cookies:</span> Required for the site to function. These do not collect personal data.
          </li>
          <li>
            <span className="font-semibold text-[#1E2A3A]">Analytics cookies:</span> Placed by Google Analytics to collect anonymous usage data as described in Section 1. These do not identify you personally.
          </li>
        </ul>
        <p>You can disable or delete cookies through your browser settings. The site will continue to function normally if you do so. We do not display a cookie consent banner because we do not use advertising or tracking cookies that require explicit consent under current US law.</p>
      </>
    ),
  },
  {
    heading: '6. Data retention',
    content: (
      <p>
        We retain contact information (your name and email) for as long as necessary to manage our business relationship with you — typically the duration of a project plus a reasonable follow-up period. Anonymous analytics data is retained per Google Analytics&apos; standard retention settings (14 months by default). You can request deletion of your personal information at any time. See Section 7.
      </p>
    ),
  },
  {
    heading: '7. Your rights',
    content: (
      <>
        <p className="mb-4">Regardless of where you live, you may contact us at any time to:</p>
        <ul className="flex flex-col gap-3 mb-4 pl-5 list-disc marker:text-[#00C8E8]">
          <li>Access the personal information we hold about you</li>
          <li>Correct any information that is inaccurate</li>
          <li>Delete your information from our records</li>
          <li>Opt out of any future communications from us</li>
        </ul>
        <p>
          To exercise any of these rights, email{' '}
          <a href="mailto:services@vktechservice.com" className="text-[#00C8E8] underline-offset-2 hover:underline">services@vktechservice.com</a>
          {' '}with your request. We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    heading: '8. Data security',
    content: (
      <p>
        We take reasonable technical and organizational precautions to protect the information we hold. Our website is served over HTTPS. Calendly and Google Analytics are industry-standard tools with their own security programs. No method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we take this responsibility seriously.
      </p>
    ),
  },
  {
    heading: '9. Children',
    content: (
      <p>
        This website is not directed at children under the age of 13. We do not knowingly collect personal information from minors. If you believe a child has submitted information to us, please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    heading: '10. Changes to this policy',
    content: (
      <p>
        We may update this policy from time to time to reflect changes in our services or legal obligations. The current version will always be available at{' '}
        <a href="https://www.vktechservice.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00C8E8] underline-offset-2 hover:underline">vktechservice.com/privacy</a>
        {' '}with the effective date shown at the top of the page. We will not make material changes without updating that date.
      </p>
    ),
  },
  {
    heading: '11. Contact us',
    content: (
      <address className="not-italic flex flex-col gap-1 text-[#374151]">
        <span className="font-semibold text-[#1E2A3A]">VKTech Service LLC</span>
        <span>Greenville, SC</span>
        <a href="mailto:services@vktechservice.com" className="text-[#00C8E8] underline-offset-2 hover:underline w-fit">services@vktechservice.com</a>
      </address>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Compact hero */}
        <section className="bg-[#1E2A3A] pt-32 pb-14">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00C8E8] mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance leading-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">
              Effective January 1, 2025 &middot; Last updated May 15, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">

            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#00C8E8] transition-colors duration-200 mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
              Back to Home
            </Link>

            {/* Intro paragraph */}
            <p className="text-[#374151] text-[17px] leading-[1.8] mb-12">
              VKTech Service LLC (trading as VKTech LLC) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and what rights you have. We keep it plain and direct — no legal jargon.
            </p>

            {/* Sections */}
            <div className="flex flex-col gap-12">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-[17px] font-semibold text-[#1E2A3A] border-l-[3px] border-[#00C8E8] pl-3 mb-4">
                    {section.heading}
                  </h2>
                  <div className="text-[#374151] text-[17px] leading-[1.8]">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Back to top */}
            <div className="mt-16 pt-8 border-t border-[#E2E8F0]">
              <BackToTop />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
