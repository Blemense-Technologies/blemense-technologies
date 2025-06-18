import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const defaultMetadata = {
  title: 'Blemense Technologies - Next-Gen Software Development & Tech Solutions',
  description: 'Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services. Transform your business with our innovative tech solutions.',
  image: '/opengraph-image.jpg',
  url: 'https://blemense.tech',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'cloud solutions',
    'React development',
    'Next.js development',
    'custom software',
    'tech consulting',
    'digital transformation',
    'UI/UX design',
    'API development',
    'software company',
    'Blemense Technologies'
  ]
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOProps = {}): Metadata {
  const siteUrl = process.env.SITE_URL || 'https://blemense.tech'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const pageTitle = title 
    ? `${title} | Blemense Technologies`
    : defaultMetadata.title
  const pageDescription = description || defaultMetadata.description
  const pageImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultMetadata.image}`
  const allKeywords = [...defaultMetadata.keywords, ...keywords, ...tags]

  const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: author || 'Blemense Technologies Team' }],
    creator: 'Blemense Technologies',
    publisher: 'Blemense Technologies',
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
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      siteName: 'Blemense Technologies',
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || 'Blemense Technologies',
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@blemensetech',
      site: '@blemensetech',
    },
    alternates: {
      canonical: fullUrl,
    },
    category: 'technology',
  }

  return metadata
}

export function generateOrganizationStructuredData(additionalProperties: any = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blemense Technologies',
    url: 'https://blemense.tech',
    logo: 'https://blemense.tech/Logo.png',
    description: 'Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://linkedin.com/company/blemense-technologies',
      'https://twitter.com/blemensetech',
      'https://github.com/blemense'
    ],
    serviceType: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'Cloud Solutions',
      'Tech Consulting'
    ],
    ...additionalProperties
  }
}

export function generateArticleStructuredData({
  headline,
  description,
  author,
  publishedTime,
  modifiedTime,
  image,
  url,
  keywords = []
}: {
  headline: string
  description: string
  author: string
  publishedTime: string
  modifiedTime: string
  image?: string
  url: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blemense Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://blemense.tech/Logo.png'
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    url: `https://blemense.tech${url}`,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: `https://blemense.tech${image}`
      }
    }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') })
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://blemense.tech${item.url}`
    }))
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blemense Technologies',
    url: 'https://blemense.tech',
    description: 'Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services.',
    publisher: {
      '@type': 'Organization',
      name: 'Blemense Technologies'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://blemense.tech/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function generateServiceStructuredData(services: Array<{
  name: string
  description: string
  provider: string
}>) {
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://blemense.tech',
      serviceType: 'Online'
    }
  }))
} 