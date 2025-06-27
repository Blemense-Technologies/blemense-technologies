import React from 'react'
import { Metadata } from 'next'
import CareersContent from './careers-content'

export const metadata: Metadata = {
  title: "Careers - Join Our Innovative Tech Team",
  description: "Join Blemense Technologies and be part of an innovative team building next-generation software solutions. Explore career opportunities in software development, design, and tech consulting.",
  keywords: [
    "careers",
    "jobs",
    "software developer jobs",
    "tech careers",
    "remote work",
    "software engineer",
    "web developer jobs",
    "tech company jobs",
    "developer positions",
    "programming jobs",
    "IT careers"
  ],
  openGraph: {
    title: "Careers - Join Our Innovative Tech Team | Blemense Technologies",
    description: "Join Blemense Technologies and be part of an innovative team building next-generation software solutions. Explore exciting career opportunities.",
    type: "website",
    url: "https://blemense.tech/careers",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Blemense Technologies",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Innovative Tech Team",
    description: "Join Blemense Technologies and be part of an innovative team building next-generation software solutions.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://blemense.tech/careers",
  },
};

export default function Careers() {
    return <CareersContent />
}
