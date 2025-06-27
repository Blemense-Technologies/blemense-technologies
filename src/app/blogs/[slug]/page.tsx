import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLeft, HiCalendarDays, HiClock, HiEye, HiHeart, HiShare } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'

// Blog data - in a real app, this would come from a CMS or database
const blogData = {
    'custom-websites-future-proof-business': {
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
        content: `
        <div class="prose prose-lg prose-invert max-w-none">
            <p class="lead">In today's digital landscape, your website is often the first impression potential customers have of your business. While the temptation to choose quick, cheap alternatives like template-based solutions or DIY website builders is understandable, serious businesses that prioritize long-term success are increasingly recognizing the unmatched value of custom-built websites.</p>

            <h2>The Template Trap: Why One-Size-Fits-All Doesn't Fit Anyone</h2>
            <p>Template-based websites and DIY builders like Wix, Squarespace, or WordPress themes might seem appealing initially. They promise quick setup, low costs, and instant gratification. However, they come with significant limitations that become apparent as your business grows:</p>

            <h3>Limited Customization and Brand Identity</h3>
            <p>Templates are designed to appeal to the masses, which means your website will inevitably look similar to thousands of others. This lack of uniqueness undermines your brand identity and makes it difficult to stand out in competitive markets. Custom websites, on the other hand, are built from the ground up to reflect your unique brand personality, values, and business objectives.</p>

            <h3>Performance Bottlenecks</h3>
            <p>Most templates come loaded with features and code that you don't need, creating unnecessary bloat that slows down your website. Studies show that a one-second delay in page load time can result in a 7% reduction in conversions. Custom websites are built with only the necessary code and features, ensuring optimal performance and faster loading times.</p>

            <h3>SEO Limitations</h3>
            <p>Search engine optimization is crucial for online visibility, but templates often have built-in SEO limitations. They may use inefficient code structures, duplicate content across multiple sites using the same template, or lack the flexibility to implement advanced SEO strategies. Custom websites are built with SEO best practices from the ground up, giving you a competitive advantage in search rankings.</p>

            <h2>The Custom Advantage: Building for Tomorrow</h2>
            <p>When you invest in a custom website built by experienced developers and designers, you're not just buying a website – you're investing in a digital asset that grows with your business. Here's why custom development is the future-proof choice:</p>

            <h3>Scalability and Flexibility</h3>
            <p>Custom websites are built with your future in mind. As your business grows and evolves, your website can adapt accordingly. Need to integrate with a new CRM system? Want to add e-commerce functionality? Planning to expand internationally with multi-language support? Custom websites can accommodate these changes seamlessly without requiring a complete rebuild.</p>

            <h3>Superior User Experience</h3>
            <p>User experience (UX) is not an afterthought in custom development – it's the foundation. Every element, from navigation flow to interactive components, is designed specifically for your target audience. This results in higher engagement rates, lower bounce rates, and improved conversion rates.</p>

            <h3>Advanced Security</h3>
            <p>Security breaches can be devastating for businesses. Template-based websites are common targets for hackers because their vulnerabilities are well-known and widely exploited. Custom websites implement tailored security measures and don't share the common vulnerabilities that plague popular templates and plugins.</p>

            <h3>Ownership and Control</h3>
            <p>With custom development, you own every line of code. You're not locked into a platform's ecosystem or subject to their changing terms of service, pricing models, or feature limitations. This ownership provides long-term stability and control over your digital presence.</p>

            <h2>The Technology Advantage</h2>
            <p>Modern custom websites leverage cutting-edge technologies that simply aren't available in template solutions:</p>

            <h3>Progressive Web App (PWA) Capabilities</h3>
            <p>Custom websites can be built as Progressive Web Apps, providing app-like experiences directly in the browser. This includes offline functionality, push notifications, and installation on users' devices – features that can significantly enhance user engagement.</p>

            <h3>Advanced Analytics and Tracking</h3>
            <p>While templates offer basic analytics, custom websites can implement sophisticated tracking systems that provide deep insights into user behavior, conversion paths, and business performance metrics tailored to your specific KPIs.</p>

            <h3>API Integrations and Automation</h3>
            <p>Custom websites can seamlessly integrate with your existing business tools, from customer relationship management systems to inventory management platforms. This integration enables automation workflows that can significantly improve operational efficiency.</p>

            <h2>The ROI Reality: Investment vs. Cost</h2>
            <p>While custom websites require a higher upfront investment, they deliver superior return on investment over time:</p>

            <h3>Lower Total Cost of Ownership</h3>
            <p>Template-based solutions often come with hidden costs: monthly subscription fees, premium plugins, transaction fees, and the eventual cost of rebuilding when you outgrow the platform. Custom websites have no ongoing platform fees and provide better long-term value.</p>

            <h3>Higher Conversion Rates</h3>
            <p>The superior user experience and performance of custom websites typically result in conversion rates that are 2-3 times higher than template-based sites. For most businesses, this improvement in conversion rates pays for the development cost within the first year.</p>

            <h3>Competitive Advantage</h3>
            <p>In markets where most competitors are using similar templates, a custom website provides immediate differentiation. This competitive advantage is difficult to quantify but often translates directly into market share and revenue growth.</p>

            <h2>Choosing the Right Development Partner</h2>
            <p>The success of your custom website project largely depends on choosing the right development partner. Here's what to look for:</p>

            <h3>Technical Expertise</h3>
            <p>Look for agencies or developers with proven expertise in modern web technologies, including responsive design, performance optimization, and security best practices. They should be able to explain their technical approach in terms you understand.</p>

            <h3>Strategic Thinking</h3>
            <p>The best development partners don't just code – they think strategically about your business goals and how your website can support them. They should ask probing questions about your business, target audience, and long-term objectives.</p>

            <h3>Ongoing Support</h3>
            <p>Websites require ongoing maintenance, updates, and optimization. Choose a partner who offers long-term support and has a track record of maintaining client relationships beyond the initial launch.</p>

            <h2>The Future is Custom</h2>
            <p>As the digital landscape becomes increasingly competitive, businesses that rely on generic, template-based solutions will find themselves at a significant disadvantage. The future belongs to companies that invest in custom digital experiences tailored to their unique value propositions and customer needs.</p>

            <p>Custom website development is not just about having a prettier website – it's about building a digital foundation that supports your business growth, provides competitive advantages, and adapts to changing market conditions. For businesses serious about their online presence and long-term success, custom development isn't just an option – it's an imperative.</p>

            <h2>Making the Decision</h2>
            <p>The choice between template and custom development ultimately comes down to how seriously you take your business's digital future. If you're looking for a quick, temporary solution, templates might suffice. But if you're building a business that will compete and thrive in the digital economy, custom development is the clear choice.</p>

            <p>Remember, your website is not just a marketing tool – it's a business asset. Like any significant business asset, it deserves proper investment, strategic planning, and professional execution. The question isn't whether you can afford to invest in custom development, but whether you can afford not to.</p>

            <p>Partner with experienced developers who understand both technology and business strategy. Invest in a custom website that reflects your brand, serves your customers, and grows with your ambitions. Your future self – and your bottom line – will thank you.</p>
        </div>
        `
    }
}

interface BlogPostProps {
    params: {
        slug: string
    }
}

export default function BlogPost({ params }: BlogPostProps) {
    const blog = blogData[params.slug as keyof typeof blogData]

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link href="/blogs">
                        <Button className="magnetic-btn text-white">
                            <HiArrowLeft className="mr-2 w-4 h-4" />
                            Back to Blogs
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
                <div className="relative container mx-auto px-4 py-16">
                    {/* Back Button */}
                    <Link href="/blogs" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
                        <HiArrowLeft className="mr-2 w-4 h-4" />
                        Back to Blogs
                    </Link>

                    {/* Article Header */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                                {blog.category}
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {blog.excerpt}
                            </p>
                            
                            {/* Author and Meta Info */}
                            <div className="flex items-center justify-center space-x-8 mb-8">
                                <div className="flex items-center">
                                    <Image
                                        src={blog.authorImg}
                                        alt={blog.authorName}
                                        width={50}
                                        height={50}
                                        className="rounded-full mr-4"
                                    />
                                    <div className="text-left">
                                        <p className="text-white font-semibold">{blog.authorName}</p>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <HiCalendarDays className="w-4 h-4 mr-1" />
                                            {formatDate(blog.publishedTime)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <HiClock className="w-4 h-4 mr-2" />
                                    {blog.readTime}
                                </div>
                                <div className="flex items-center space-x-4 text-gray-400">
                                    <div className="flex items-center">
                                        <HiEye className="w-4 h-4 mr-1" />
                                        {blog.views.toLocaleString()}
                                    </div>
                                    <div className="flex items-center">
                                        <HiHeart className="w-4 h-4 mr-1" />
                                        {blog.likes}
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex justify-center flex-wrap gap-2 mb-8">
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-12">
                            <Image
                                src={blog.coverImg}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-2xl p-8 lg:p-12">
                        <div 
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                            className="prose prose-lg prose-invert max-w-none"
                        />
                        
                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-400">Share this article:</span>
                                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                                        <HiShare className="w-4 h-4 mr-2" />
                                        Share
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-400">
                                    <div className="flex items-center">
                                        <HiEye className="w-4 h-4 mr-1" />
                                        {blog.views.toLocaleString()}
                                    </div>
                                    <div className="flex items-center">
                                        <HiHeart className="w-4 h-4 mr-1" />
                                        {blog.likes}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Blogs */}
                    <div className="text-center mt-12">
                        <Link href="/blogs">
                            <Button className="magnetic-btn text-white px-8 py-4">
                                <HiArrowLeft className="mr-2 w-4 h-4" />
                                Back to All Blogs
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Generate static params for known blog posts
export async function generateStaticParams() {
    return [
        { slug: 'custom-websites-future-proof-business' }
    ]
} 