import React from 'react'
import { Metadata } from 'next'
import AboutContent from './about-content'

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Values",
  description: "Learn about Blemense Technologies - our journey, mission, values, and the passionate team building innovative software solutions for businesses worldwide.",
  keywords: [
    "about blemense technologies",
    "our story",
    "company mission",
    "software development company",
    "tech company values",
    "innovation team",
    "our journey",
    "company culture",
    "technology experts",
    "software solutions provider"
  ],
  openGraph: {
    title: "About Us - Our Story, Mission & Values | Blemense Technologies",
    description: "Discover the story behind Blemense Technologies, our mission to innovate, and the values that drive our passionate team to create exceptional software solutions.",
    type: "website",
    url: "https://blemense.tech/about",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Blemense Technologies - Our Story and Mission",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Our Story, Mission & Values",
    description: "Discover the story behind Blemense Technologies and our mission to create innovative software solutions.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://blemense.tech/about",
  },
};

export default function About() {
    return <AboutContent />
} 