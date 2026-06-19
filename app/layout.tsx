import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  icons: {
    icon: '/images/vktech-logo.png',
    apple: '/images/vktech-logo.png',
  },
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
    <html lang="en" data-scroll-behavior="smooth" className={`${syne.variable} ${dmSans.variable} bg-[#0F1923]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
