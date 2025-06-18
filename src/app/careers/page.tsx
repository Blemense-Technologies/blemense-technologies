import React from 'react'
import { Metadata } from 'next'

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

const perks = [
    {
        index: 1,
        label: 'Innovation',
        description: "We're passionate about pushing boundaries and developing cutting-edge software solutions. We believe the best way to achieve this is by fostering a culture of innovation. You'll be encouraged to experiment, take risks, and come up with creative solutions to complex problems."
    },
    {
        index: 2,
        label: 'Growth',
        description: "We offer a comprehensive learning and development program that includes mentorship opportunities with senior developers, access to online courses and training platforms, and tuition reimbursement for relevant certifications and degrees."
    },
    {
        index: 3,
        label: 'Work Environment',
        description: "We believe in creating a positive and collaborative work environment where you feel valued, respected, and supported. We foster a culture of teamwork and open communication, where everyone has a voice and feels comfortable sharing ideas."
    },
    {
        index: 4,
        label: 'Global Clients',
        description: "Our software solutions have a global impact, reaching a diverse range of international clients. Working on projects for a variety of clients across the world exposes you to different cultures, perspectives, and industry best practices."
    },
]

export default function Careers() {
    // Structured data for organization and job postings
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Blemense Technologies",
        "url": "https://blemense.tech",
        "logo": "https://blemense.tech/Logo.png",
        "description": "Leading software development company offering innovative tech solutions",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Blemense Technologies",
            "sameAs": "https://blemense.tech"
        },
        "workLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "benefits": [
            "Innovation-focused culture",
            "Comprehensive learning and development",
            "Positive work environment",
            "Global client exposure",
            "Remote work opportunities",
            "Professional growth"
        ]
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationStructuredData)
                }}
            />
            
            <div className='mt-7 px-5 lg:px-0'>
                <div className="w-fit mx-auto">
                    <div className='w-fit mx-auto'>
                        <h1 className="text-2xl text-center font-bold mb-3">
                            Be a <span className="text-primaryTheme">Part</span> of Our <span className="text-secondaryTheme">Team</span>
                        </h1>
                        <p className="text-sm text-center text-subtitle dark:text-subtitleDark mb-12">
                            Be the difference. We value passionate, responsible minds who build solutions together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {
                            perks.map((perk) => (
                                <div key={perk.index} className="p-6 h-fit rounded-3xl w-full lg:w-[400px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white">
                                    <h2 className="lg:text-lg font-semibold mb-2">{perk.label}</h2>
                                    <p className="text-subtitle dark:text-subtitleDark text-xs lg:text-sm">
                                        {perk.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
