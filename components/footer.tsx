import Link from 'next/link'
import Image from 'next/image'

const navCol1 = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

const navCol2 = [
  { label: 'Proposal', href: '/proposal' },
  { label: 'Privacy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#080F16] text-white/60 overflow-hidden">
      {/* Subtle grid bg */}
      <div className="footer-grid-bg" aria-hidden="true" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00C8E8]/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 select-none" aria-label="VKTech home">
              <Image
                src="/images/vktech-logo.png"
                alt="VKTech logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="font-heading text-lg font-bold tracking-wide leading-none">
                <span className="text-[#00C8E8]">VK</span>
                <span className="text-white">TECH</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-white/50">
              Modern websites and intelligent systems for growing businesses in Upstate South Carolina.
            </p>
          </div>

          {/* Nav — two columns */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Pages</p>
              {navCol1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-[#00C8E8] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">&nbsp;</p>
              {navCol2.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-[#00C8E8] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">Contact</p>
            <a
              href="mailto:Chad@vktechservice.com"
              className="text-sm hover:text-[#00C8E8] transition-colors duration-200"
            >
              Chad@vktechservice.com
            </a>
            <a
              href="https://www.vktechservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#00C8E8] transition-colors duration-200"
            >
              www.vktechservice.com
            </a>
            <p className="text-sm text-white/40">Greenville, SC &mdash; Upstate South Carolina</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/8 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} VKTech Service LLC &middot; Trading as VKTech LLC
          </p>
          <p className="text-xs text-white/30">
            Built with care in Upstate SC
          </p>
        </div>
      </div>
    </footer>
  )
}
