import { siteConfig } from '@/lib/site'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',

  '@id': `${siteConfig.url}/#person`,

  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  description: siteConfig.description,

  image: `${siteConfig.url}/profile.webp`,

  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
  },

  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',

  '@id': `${siteConfig.url}/#website`,

  name: 'Nishad Hasan Portfolio',
  url: siteConfig.url,

  author: {
    '@id': `${siteConfig.url}/#person`,
  },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />
    </>
  )
}