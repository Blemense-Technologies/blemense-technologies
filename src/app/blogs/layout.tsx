import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tech Blog - Latest Insights & Industry News",
  description: "Stay updated with the latest technology trends, software development insights, and industry news. Read expert articles on React, mobile development, and emerging technologies.",
  keywords: [
    "tech blog",
    "technology news",
    "software development blog",
    "React articles",
    "mobile development",
    "tech insights",
    "programming tutorials",
    "industry updates",
    "developer resources"
  ],
  openGraph: {
    title: "Tech Blog - Latest Insights & Industry News | Blemense Technologies",
    description: "Stay updated with the latest technology trends, software development insights, and industry news from Blemense Technologies.",
    type: "website",
    url: "https://blemense.tech/blogs",
    images: [
      {
        url: "/sotw.jpeg",
        width: 1200,
        height: 630,
        alt: "Blemense Technologies Blog",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog - Latest Insights & Industry News",
    description: "Stay updated with the latest technology trends and software development insights.",
    images: ["/sotw.jpeg"],
  },
  alternates: {
    canonical: "https://blemense.tech/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 