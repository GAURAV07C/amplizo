import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffd700' },
    { media: '(prefers-color-scheme: dark)', color: '#d4af37' },
  ],
}

export const metadata: Metadata = {
  title: 'AMPLIZO - Digital Marketing & Business Solutions',
  description: 'Grow your business with result-driven digital marketing. Google Ads, SEO, Social Media Marketing, and Lead Generation strategies that convert.',
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

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 md:pt-40">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}

