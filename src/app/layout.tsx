import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './global.css'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { siteConfig } from '@/lib/site'
import { JsonLd } from '@/components/seo/json-ld'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  verification: {
    google: 'h-YZJt6sYVgjHirKUkIsNuXInffVwvjXJnQfYM7GmWc',
  },

  title: {
    default: 'Nishad Hasan | Frontend Developer',
    template: '%s | Nishad Hasan',
  },

  description: siteConfig.description,

  applicationName: 'Nishad Hasan Portfolio',

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: 'Nishad Hasan Portfolio',
    title: 'Nishad Hasan | Frontend Developer',
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nishad Hasan - Frontend Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nishad Hasan | Frontend Developer',
    description: siteConfig.description,
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <JsonLd />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
