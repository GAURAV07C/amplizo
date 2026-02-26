import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Toaster } from '@/components/ui/sonner'
import { ScrollAura } from '@/components/ScrollAura'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e90ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f2c' },
  ],
}

export const metadata: Metadata = {
  title: 'AMPLIZO - Digital Marketing & Business Solutions',
  description:
    'Grow your business with result-driven digital marketing. Google Ads, SEO, Social Media Marketing, and Lead Generation strategies that convert.',
  generator: 'Next.js',
  keywords: 'digital marketing, google ads, SEO, social media marketing, lead generation, business solutions',
  authors: [{ name: 'AMPLIZO Marketing & Business Solutions' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://amplizo.com',
    siteName: 'AMPLIZO',
    title: 'AMPLIZO - Digital Marketing & Business Solutions',
    description: 'Grow your business with result-driven digital marketing strategies',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <ScrollAura />
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,oklch(0.72_0.18_236_/_0.15),transparent_50%),radial-gradient(circle_at_88%_18%,oklch(0.77_0.17_188_/_0.1),transparent_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,oklch(0.12_0.03_252_/_0.42)_75%,oklch(0.12_0.03_252_/_0.74)_100%)]" />
        </div>
        <Navbar />
        <main className="flex-grow pt-32 md:pt-40">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}

