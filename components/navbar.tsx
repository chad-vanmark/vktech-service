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

const BOOKING_URL = 'https://calendly.com/vktech-service'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E2A3A]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#1E2A3A]'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none" aria-label="VKTech home">
          <Image
            src="/images/vktech-logo.png"
            alt="VKTech logo"
            width={36}
            height={36}
            className="rounded-sm"
            priority
          />
          <span className="text-xl font-bold tracking-tight leading-none">
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
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#00C8E8]'
                  : 'text-white/80 hover:text-white'
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
            className="hidden md:inline-flex items-center gap-1 rounded bg-[#00C8E8] px-4 py-2 text-sm font-semibold text-[#1E2A3A] transition-all duration-200 hover:bg-[#00C8E8]/90 hover:shadow-[0_0_16px_rgba(0,200,232,0.4)]"
          >
            Book Free Proposal
          </a>

          <button
            className="md:hidden text-white p-1"
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
        <div className="md:hidden bg-[#1E2A3A] border-t border-white/10 px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-1 transition-colors ${
                  pathname === link.href ? 'text-[#00C8E8]' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded bg-[#00C8E8] px-4 py-3 text-sm font-semibold text-[#1E2A3A]"
            >
              Book Free Proposal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
