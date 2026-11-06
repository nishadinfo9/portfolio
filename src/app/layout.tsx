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

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    sameAs: [
      'https://github.com/nishadinfo9',
      'https://linkedin.com/in/me-nishad-hasan',
    ],
    '@id': `${SITE_URL}/#person`,
    name: 'Nishad Hasan',
    url: SITE_URL,
    jobTitle: 'Frontend Developer',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Nishad Hasan Portfolio',
    url: SITE_URL,
    description:
      'Personal portfolio of Nishad Hasan, Frontend Developer.',
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
  },
]


export const metadata: Metadata = {


  verification: {
    google: 'h-YZJt6sYVgjHirKUkIsNuXInffVwvjXJnQfYM7GmWc',
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
      images:[
          {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Nishad Hasan - Frontend Developer',
    },
      ]
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
          {jsonLd.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
              }}
            />
          ))}

          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
