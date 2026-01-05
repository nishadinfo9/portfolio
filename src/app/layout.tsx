import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nishad Hasan - Frontend Developer',
    template: '%s | Nishad Hasan',
  },
  description:
    'Frontend Developer crafting exceptional user experiences with modern web technologies. Specialized in React, Next.js, and creating pixel-perfect applications.',
  keywords: [
    'Nishad Hasan',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'UI/UX Developer',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Nishad Hasan' }],
  creator: 'Nishad Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishadhasan.dev',
    title: 'Nishad Hasan - Frontend Developer',
    description:
      'Frontend Developer crafting exceptional user experiences with modern web technologies.',
    siteName: 'Nishad Hasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishad Hasan - Frontend Developer',
    description:
      'Frontend Developer crafting exceptional user experiences with modern web technologies.',
    creator: '@nishadhasan',
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
