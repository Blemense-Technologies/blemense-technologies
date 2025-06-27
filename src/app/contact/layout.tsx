import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Blemense Technologies",
  description: "Contact Blemense Technologies for your software development needs. Reach out to discuss your project requirements and get expert tech solutions.",
  keywords: [
    "contact",
    "get in touch",
    "software development consultation",
    "project inquiry",
    "tech support",
    "business inquiry",
    "development services",
    "contact form",
    "reach out",
    "consultation",
    "project discussion"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | Blemense Technologies",
    description: "Contact Blemense Technologies for your software development needs. Reach out to discuss your project requirements and get expert tech solutions.",
    type: "website",
    url: "https://blemense.tech/contact",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Blemense Technologies",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with Blemense Technologies",
    description: "Contact Blemense Technologies for your software development needs. Reach out to discuss your project requirements.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://blemense.tech/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 