'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronRight, HiMagnifyingGlass, HiCalendarDays, HiClock, HiTag, HiEye, HiHeart } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Microsoft from '../../../public/microsoft.jpg'
import ReactNative from '../../../public/react-native-sdk.png'
import Xd from '../../../public/xd.png'


// Enhanced blog data with more fields
const featuredBlog = {
    id: 'featured-1',
    coverImg: '/images/blog-01.png',
    authorImg: '/images/ojal.jpg',
    authorName: 'Ojal Sharnagat',
    title: 'Why Custom Websites Are the Future-Proof Choice for Serious Businesses',
    excerpt: 'Discover why investing in a custom-built website by professional developers creates lasting value, superior performance, and competitive advantages that template solutions simply cannot match.',
    publishedTime: '2024-01-22T09:00:00Z',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['Custom Development', 'Business Growth', 'Web Strategy', 'Future-Proofing'],
    views: 3456,
    likes: 287,
    featured: true
}

const blogs: Array<{
    id: number;
    coverImg: any;
    title: string;
    author: string;
    authorImg: string;
    excerpt: string;
    description: string;
    publishedTime: string;
    modifiedTime: string;
    readTime: string;
    category: string;
    tags: string[];
    views: number;
    likes: number;
    slug: string;
}> = [
    // Additional blogs will be added later
]

const categories = [
    'All',
    'Web Development',
    'AI & Technology',
    'Tech News',
    'Mobile Development',
    'Design Tools',
    'Backend Development',
    'Frontend Development'
]

export default function Blogs() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [sortBy, setSortBy] = useState('newest')

    // Filter and sort blogs
    const filteredBlogs = useMemo(() => {
        let filtered = blogs.filter(blog => {
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
            return matchesSearch && matchesCategory
        })

        // Sort blogs
        switch (sortBy) {
            case 'newest':
                filtered.sort((a, b) => new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime())
                break
            case 'oldest':
                filtered.sort((a, b) => new Date(a.publishedTime).getTime() - new Date(b.publishedTime).getTime())
                break
            case 'popular':
                filtered.sort((a, b) => b.views - a.views)
                break
            case 'trending':
                filtered.sort((a, b) => b.likes - a.likes)
                break
        }

        return filtered
    }, [searchQuery, selectedCategory, sortBy])

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffTime = Math.abs(now.getTime() - date.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        if (diffDays === 1) return '1 day ago'
        if (diffDays < 7) return `${diffDays} days ago`
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }

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
        "blogPost": [...blogs, featuredBlog].map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt || (blog as any).description || '',
            "author": {
                "@type": "Person",
                "name": (blog as any).author || (blog as any).authorName || ''
            },
            "datePublished": blog.publishedTime,
            "dateModified": (blog as any).modifiedTime || blog.publishedTime,
            "publisher": {
                "@type": "Organization",
                "name": "Blemense Technologies"
            },
            "url": `https://blemense.tech/blogs/${(blog as any).slug || blog.id}`,
            "keywords": blog.tags.join(', ')
        }))
    }

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogStructuredData)
                }}
            />
            
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                {/* Hero Section with Enhanced Featured Blog */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
                    <div className="relative container mx-auto px-4 py-16 lg:py-24">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                                <span className="text-gradient-modern">Tech Insights</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Discover the latest trends, insights, and innovations shaping the future of technology
                            </p>
                        </div>

                        {/* Featured Article */}
                        <div className="max-w-6xl mx-auto">
                            <Link href="/blogs/custom-websites-future-proof-business">
                                <div className="glass-card rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    <div className="relative h-64 lg:h-96 overflow-hidden">
                                        <Image
                                            src={featuredBlog.coverImg}
                                            alt={featuredBlog.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                                                {featuredBlog.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                            {featuredBlog.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                            {featuredBlog.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center">
                                                    <Image
                                                        src={featuredBlog.authorImg}
                                                        alt={featuredBlog.authorName}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full mr-3"
                                                    />
                                                    <div>
                                                        <p className="text-white font-semibold">{featuredBlog.authorName}</p>
                                                        <div className="flex items-center text-gray-400 text-sm">
                                                            <HiClock className="w-4 h-4 mr-1" />
                                                            {featuredBlog.readTime}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="magnetic-btn text-white font-semibold px-6 py-3 rounded-full">
                                                Read Article
                                                <HiChevronRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                                            <div className="flex items-center space-x-6 text-gray-400">
                                                <div className="flex items-center">
                                                    <HiEye className="w-4 h-4 mr-1" />
                                                    {featuredBlog.views.toLocaleString()}
                                                </div>
                                                <div className="flex items-center">
                                                    <HiHeart className="w-4 h-4 mr-1" />
                                                    {featuredBlog.likes}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {featuredBlog.tags.slice(0, 2).map((tag, index) => (
                                                    <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Filter and Search Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="glass-card rounded-2xl p-6 mb-12">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-md">
                                <HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                                />
                            </div>

                            {/* Category Filters */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        className={`rounded-full px-4 py-2 text-sm transition-all ${
                                            selectedCategory === category
                                                ? 'magnetic-btn text-white'
                                                : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
                                        }`}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>

                            {/* Sort Options */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="popular">Most Popular</option>
                                <option value="trending">Trending</option>
                            </select>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog) => (
                            <article key={blog.id} className="modern-card rounded-2xl overflow-hidden group cursor-pointer">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={blog.coverImg}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
                                        <div className="flex items-center">
                                            <HiEye className="w-4 h-4 mr-1" />
                                            {blog.views > 1000 ? `${(blog.views/1000).toFixed(1)}k` : blog.views}
                                        </div>
                                        <div className="flex items-center">
                                            <HiHeart className="w-4 h-4 mr-1" />
                                            {blog.likes}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gradient transition-all">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <Image
                                                src={blog.authorImg}
                                                alt={blog.author}
                                                width={32}
                                                height={32}
                                                className="rounded-full mr-3"
                                            />
                                            <div>
                                                <p className="text-white text-sm font-medium">{blog.author}</p>
                                                <div className="flex items-center text-gray-500 text-xs">
                                                    <HiCalendarDays className="w-3 h-3 mr-1" />
                                                    {formatDate(blog.publishedTime)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <HiClock className="w-4 h-4 mr-1" />
                                            {blog.readTime}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {blog.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 rounded-lg transition-all">
                                        Read More
                                        <HiChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* No Results State */}
                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                            <Button 
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('All')
                                }}
                                className="magnetic-btn text-white px-6 py-3"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}

                    {/* Load More Section */}
                    {filteredBlogs.length > 0 && (
                        <div className="text-center mt-16">
                            <Button className="magnetic-btn text-white px-8 py-4 text-lg">
                                Load More Articles
                                <HiChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
