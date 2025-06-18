import React from 'react'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import Microsoft from '../../../public/microsoft.jpg'
import ReactNative from '../../../public/react-native-sdk.png'
import Xd from '../../../public/xd.png'
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

const sotw = {
    coverImg: '/sotw.jpeg',
    authorImg: '',
    authorName: 'Muskan Jaiswal',
    title: 'How AI would change the world',
}

const blogs = [
    {
        index: 1,
        coverImg: Microsoft,
        title: 'Microsoft to lay off in Q3',
        author: 'Ojal Sharnagat',
        description: 'In a move to optimize resources, tech titan Microsoft announced a restructuring effort. The plan involves letting go of approximately 1,000 employees across various departments.',
        publishedTime: '2024-01-15T10:00:00Z',
        modifiedTime: '2024-01-15T10:00:00Z',
        slug: 'microsoft-layoffs-q3-2024',
        tags: ['Microsoft', 'Tech News', 'Corporate']
    },
    {
        index: 2,
        coverImg: ReactNative,
        title: 'React Native 22.2.1 offers Offline integration',
        author: 'Ritesh Jangir',
        description: 'In a surprise keynote address, the React Native team unveiled a revolutionary update: built-in, first-class native offline integration. This long-awaited feature eliminates the need for third-party.',
        publishedTime: '2024-01-12T14:30:00Z',
        modifiedTime: '2024-01-12T14:30:00Z',
        slug: 'react-native-offline-integration',
        tags: ['React Native', 'Mobile Development', 'Updates']
    },
    {
        index: 3,
        coverImg: Xd,
        title: 'Adobe XD to overtake Figma in 2025',
        author: 'Prathmesh Gaidhane',
        description: 'In a move that will reshape the design software landscape, Adobe today announced a definitive agreement to acquire Figma, the leading web-based design platform.',
        publishedTime: '2024-01-10T09:15:00Z',
        modifiedTime: '2024-01-10T09:15:00Z',
        slug: 'adobe-xd-figma-2025',
        tags: ['Adobe XD', 'Figma', 'Design Tools']
    },
]

export default function Blogs() {
    // Structured data for blog posts
    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blemense Technologies Blog",
        "description": "Latest insights on technology, software development, and industry trends",
        "url": "https://blemense.tech/blogs",
        "publisher": {
            "@type": "Organization",
            "name": "Blemense Technologies",
            "logo": "https://blemense.tech/Logo.png"
        },
        "blogPost": blogs.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.description,
            "author": {
                "@type": "Person",
                "name": blog.author
            },
            "datePublished": blog.publishedTime,
            "dateModified": blog.modifiedTime,
            "publisher": {
                "@type": "Organization",
                "name": "Blemense Technologies"
            },
            "url": `https://blemense.tech/blogs/${blog.slug}`,
            "keywords": blog.tags.join(', ')
        }))
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogStructuredData)
                }}
            />
            
            <div className='mt-8 px-4'>
                <div className="flex flex-col lg:flex-row gap-x-24 w-fit mx-auto">
                    <div className="h-[325px] lg:h-fit lg:w-[650px] rounded-3xl bg-gradient-to-r from-gray-900 via-gray-950 to-black overflow-hidden relative">
                        <Image
                            src={sotw.coverImg}
                            height={900}
                            width={900}
                            quality={100}
                            alt="Story of the Week"
                            className="h-[325px] lg:w-[650px] lg:h-[650px] rounded-3xl object-cover opacity-70"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <div className='absolute top-6'>
                                <h1 className="text-white text-xl lg:text-3xl font-semibold">Story of the Week</h1>
                            </div>
                            <div>
                                <h2 className="text-white text-lg lg:text-2xl font-bold mb-4">
                                    {sotw.title}
                                </h2>
                                <div className="flex items-center w-full lg:w-fit lg:gap-x-48 justify-between text-white">
                                    <span className="mr-2">{sotw.authorName}</span>
                                    <div className="flex items-center gap-x-3 cursor-pointer">
                                        <span className='text-white'>Read blog</span>
                                        <div className='rounded-full bg-white p-1 text-black'>
                                            <HiChevronRight className='h-3 w-3' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-9 lg:mt-0 w-fit grid gap-y-6">
                        {
                            blogs.map((blog, index) => (
                                <article key={blog.index} className="lg:flex w-full lg:min-h-[180px] dark:bg-bgDark dark:border-[1.25px] dark:border-borderDark h-fit lg:max-w-[570px] rounded-3xl gap-x-3 p-4 lg:p-4.5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                    <Image
                                        src={blog.coverImg}
                                        alt={`${blog.title} - ${blog.author}`}
                                        height={150}
                                        width={150}
                                        quality={100}
                                        className="w-full lg:w-[150px] lg:h-[150px] rounded-xl mr-4"
                                    />
                                    <div className='mt-4 lg:mt-0'>
                                        <div className='mb-4'>
                                            <h2 className="text-lg font-semibold">
                                                {blog.title}
                                            </h2>
                                            <p className="text-sm text-subtitle dark:text-subtitleDark mt-2">
                                                {blog.description}
                                            </p>
                                        </div>
                                        <div className='flex items-center gap-x-3 font-semibold'>
                                            <span className='text-sm text-subtitle dark:text-subtitleDark'>by {blog.author}</span>
                                            <div className='rounded-full h-1 w-1 bg-subtitle dark:bg-subtitleDark'></div>
                                            <time className="text-sm text-subtitle dark:text-subtitleDark">3 days ago</time>
                                        </div>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
