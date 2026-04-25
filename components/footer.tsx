import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Proposal', href: '/proposal' },
  { label: 'Privacy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/vktech-logo.png"
                alt="VKTech logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-[#00C8E8]">VK</span>
                <span className="text-white">TECH</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Modern websites and intelligent systems for growing businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Navigation</p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-[#00C8E8] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Contact</p>
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
            <p className="text-sm">Greenville, SC — Upstate South Carolina</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; 2025 VKTech Service LLC &middot; Trading as VKTech LLC
          </p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#00C8E8]" aria-hidden="true" />
            <p className="text-xs text-white/40">Greenville, SC</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
