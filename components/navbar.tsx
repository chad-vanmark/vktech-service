'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Proposal', href: '/proposal' },
]

const BOOKING_URL = 'https://calendly.com/vktech-service/free-website-proposal'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#00C8E8]/20'
          : 'border-b border-transparent'
      }`}
      style={{
        background: 'rgba(15, 25, 35, 0.80)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none" aria-label="VKTech home">
          <Image
            src="/images/vktech-logo.png"
            alt="VKTech logo"
            width={34}
            height={34}
            className="rounded-sm"
            priority
          />
          <span className="font-heading text-lg font-bold tracking-wide leading-none">
            <span className="text-[#00C8E8]">VK</span>
            <span className="text-white">TECH</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium pb-0.5 transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#00C8E8] active'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#00C8E8] px-4 py-2 text-sm font-semibold text-[#0F1923] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,200,232,0.4)] hover:bg-[#00C8E8]/90"
          >
            Book Free Proposal
          </a>

          <button
            className="md:hidden text-white/80 p-1 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-[#00C8E8]/10 px-6 pb-6 pt-4"
          style={{ background: 'rgba(15, 25, 35, 0.97)' }}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-base font-semibold tracking-wide transition-colors ${
                  pathname === link.href ? 'text-[#00C8E8]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-[#00C8E8] px-5 py-3 text-sm font-semibold text-[#0F1923]"
            >
              Book Free Proposal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
