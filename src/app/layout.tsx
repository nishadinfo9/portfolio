import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './global.css'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://nishadhasan.vercel.app'

export const metadata: Metadata = {

  verification: {
    google: 'googlee042da91d3e6ed12.html',
  },

  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Nishad Hasan | Frontend Developer',
    template: '%s | Nishad Hasan',
  },

  description:
    'Nishad Hasan is a Frontend Developer specializing in React, Next.js, TypeScript, and modern web application development.',

  applicationName: 'Nishad Hasan Portfolio',

  authors: [
    {
      name: 'Nishad Hasan',
      url: SITE_URL,
    },
  ],

  creator: 'Nishad Hasan',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Nishad Hasan Portfolio',
    title: 'Nishad Hasan | Frontend Developer',
    description:
      'Explore the portfolio of Nishad Hasan, a Frontend Developer specializing in React, Next.js, and TypeScript.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nishad Hasan | Frontend Developer',
    description:
      'Frontend Developer specializing in React, Next.js, and TypeScript.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
