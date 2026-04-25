import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VKTech — Modern Websites & AI Systems for Growing Businesses',
  description:
    'VKTech builds fast, professional websites and intelligent backend systems for local businesses in Upstate South Carolina. Book your free website proposal today.',
  generator: 'VKTech',
  keywords: [
    'web development',
    'Greenville SC',
    'Upstate South Carolina',
    'local business website',
    'AI integration',
    'tech consulting',
  ],
  openGraph: {
    title: 'VKTech — Modern Websites & AI Systems for Growing Businesses',
    description:
      'Real developer. Real results. Book a free website proposal with VKTech — serving Upstate South Carolina.',
    url: 'https://www.vktechservice.com',
    siteName: 'VKTech',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
