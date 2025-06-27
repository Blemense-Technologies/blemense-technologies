'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import GradientButton from '@/components/gradientButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { sectionEntrance, staggerContainer, staggerItem, cardHover } from '@/lib/animations'

const coreValues = [
    {
        icon: "🚀",
        title: "Innovation First",
        description: "We embrace cutting-edge technologies and creative solutions to solve complex problems and stay ahead of industry trends."
    },
    {
        icon: "🤝",
        title: "Client Partnership",
        description: "We build long-term relationships with our clients, understanding their vision and working together to achieve exceptional results."
    },
    {
        icon: "🎯",
        title: "Quality Excellence",
        description: "Every line of code, every design element, and every solution we deliver meets the highest standards of quality and performance."
    },
    {
        icon: "🌱",
        title: "Continuous Growth",
        description: "We foster a culture of learning, experimentation, and personal development for our team and our clients."
    },
    {
        icon: "🌍",
        title: "Global Impact",
        description: "Our solutions reach across borders, creating positive impact for businesses and communities worldwide."
    },
    {
        icon: "⚡",
        title: "Agile Excellence",
        description: "We deliver fast, efficient, and adaptive solutions that evolve with your business needs and market changes."
    }
];

const milestones = [
    {
        year: "2023",
        title: "Foundation",
        description: "Blemense Technologies was founded with a vision to democratize access to high-quality software development."
    },
    {
        year: "2024",
        title: "Rapid Growth",
        description: "Successfully delivered multiple projects and established our reputation for quality and reliability in the software development industry."
    },
    {
        year: "2025",
        title: "Innovation & Expansion",
        description: "Continuing to push boundaries with next-generation solutions, expanding our services, and building long-term client partnerships."
    }
];

const teamStats = [
    {
        number: "50+",
        label: "Projects Delivered",
        description: "Successfully completed projects across various industries"
    },
    {
        number: "20+",
        label: "Happy Clients",
        description: "Satisfied clients who trust us with their technology needs"
    },
    {
        number: "2+",
        label: "Years Experience",
        description: "Years of delivering innovative software solutions"
    },
    {
        number: "24/7",
        label: "Support Available",
        description: "Round-the-clock support for our clients worldwide"
    }
];

const whyChooseUs = [
    {
        title: "Technical Excellence",
        description: "Our team stays current with the latest technologies and best practices, ensuring your solutions are built with modern, scalable architectures.",
        highlight: "Latest Tech Stack"
    },
    {
        title: "Business Understanding",
        description: "We don't just code – we understand business needs and translate them into technical solutions that drive real results.",
        highlight: "Business-Focused"
    },
    {
        title: "Transparent Process",
        description: "From initial consultation to final delivery, we maintain clear communication and provide regular updates on project progress.",
        highlight: "Clear Communication"
    },
    {
        title: "Long-term Partnership",
        description: "We build lasting relationships with our clients, providing ongoing support, maintenance, and evolution of your software solutions.",
        highlight: "Ongoing Support"
    }
];

export default function AboutContent() {
    // Structured data for organization
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Blemense Technologies",
        "url": "https://blemense.tech",
        "logo": "https://blemense.tech/Logo.png",
        "description": "Innovative software development company specializing in web applications, mobile apps, and digital solutions for businesses worldwide.",
        "foundingDate": "2023",
        "founder": {
            "@type": "Person",
            "name": "Blemense Technologies Team"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9730031956",
            "contactType": "customer service",
            "email": "hello@blemense.tech"
        },
        "sameAs": [
            "https://blemense.tech"
        ],
        "knowsAbout": [
            "Software Development",
            "Web Applications",
            "Mobile App Development",
            "Cloud Solutions",
            "UI/UX Design",
            "Technology Consulting"
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
            
            <motion.div 
                className="min-h-screen"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Hero Section */}
                <motion.section 
                    className="relative overflow-hidden bg-gradient-to-b from-primaryTheme/10 to-transparent dark:from-primaryTheme/5 py-20 lg:py-32 mt-20"
                    variants={sectionEntrance}
                >
                    <div className="absolute inset-0 bg-grid-enhanced opacity-5"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.h1 
                                className="text-4xl lg:text-6xl font-bold mb-6"
                                variants={sectionEntrance}
                            >
                                About <span className="text-primaryTheme">Blemense</span> Technologies
                            </motion.h1>
                            <motion.p 
                                className="text-lg lg:text-xl text-subtitle dark:text-subtitleDark mb-8 leading-relaxed"
                                variants={sectionEntrance}
                            >
                                We're more than just developers – we're digital architects crafting the future of technology. 
                                Our passion for innovation drives us to create software solutions that don't just meet expectations, they exceed them.
                            </motion.p>
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                variants={sectionEntrance}
                            >
                                <GradientButton 
                                    text="Start Your Project" 
                                    onClick={() => window.location.href = '/contact'}
                                />
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="px-8 py-3 rounded-full border-2 border-secondaryTheme text-secondaryTheme hover:bg-secondaryTheme hover:text-white transition-all duration-300"
                                    onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Our Story
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Our Story Section */}
                <motion.section 
                    id="story"
                    className="py-20 lg:py-32 px-6"
                    variants={sectionEntrance}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={sectionEntrance}>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                    Our <span className="text-secondaryTheme">Story</span>
                                </h2>
                                <p className="text-lg text-subtitle dark:text-subtitleDark mb-6 leading-relaxed">
                                    Founded in 2023 with a simple yet powerful vision: to bridge the gap between innovative technology and practical business solutions. 
                                    We started as a small team of passionate developers who believed that great software should be accessible to businesses of all sizes.
                                </p>
                                <p className="text-lg text-subtitle dark:text-subtitleDark mb-8 leading-relaxed">
                                    Today, we've grown into a trusted technology partner for companies worldwide, but our core mission remains unchanged – 
                                    to create exceptional digital experiences that drive real business results.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button 
                                        variant="outline" 
                                        size="lg"
                                        className="border-primaryTheme text-primaryTheme hover:bg-primaryTheme hover:text-white"
                                        onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        See Our Journey
                                    </Button>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="relative"
                                variants={sectionEntrance}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="aspect-square bg-gradient-to-br from-primaryTheme/20 to-secondaryTheme/20 dark:from-primaryTheme/10 dark:to-secondaryTheme/10 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="text-6xl mb-4">🚀</div>
                                            <h3 className="text-2xl font-bold mb-2">Innovation Driven</h3>
                                            <p className="text-subtitle dark:text-subtitleDark">
                                                Transforming ideas into digital reality
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <Separator className="mx-auto w-3/4 bg-gradient-to-r from-transparent via-primaryTheme/20 to-transparent" />

                {/* Mission & Vision Section */}
                <motion.section 
                    className="py-20 lg:py-32 px-6"
                    variants={sectionEntrance}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <motion.div className="text-center mb-16" variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Our <span className="text-primaryTheme">Mission</span> & <span className="text-secondaryTheme">Vision</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                We're driven by a clear purpose and guided by an ambitious vision for the future of technology.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <motion.div variants={cardHover}>
                                <Card className="h-full modern-card border-primaryTheme/20 hover:border-primaryTheme/40 transition-all duration-300">
                                    <CardHeader className="text-center pb-6">
                                        <div className="text-5xl mb-4">🎯</div>
                                        <CardTitle className="text-2xl text-primaryTheme">Our Mission</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-subtitle dark:text-subtitleDark leading-relaxed text-center">
                                            To empower businesses with innovative, scalable, and user-centric software solutions that drive growth, 
                                            efficiency, and competitive advantage in the digital landscape.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={cardHover}>
                                <Card className="h-full modern-card border-secondaryTheme/20 hover:border-secondaryTheme/40 transition-all duration-300">
                                    <CardHeader className="text-center pb-6">
                                        <div className="text-5xl mb-4">🔮</div>
                                        <CardTitle className="text-2xl text-secondaryTheme">Our Vision</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-subtitle dark:text-subtitleDark leading-relaxed text-center">
                                            To be the leading technology partner that transforms how businesses operate, 
                                            creating a world where innovation and efficiency go hand in hand.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <Separator className="mx-auto w-3/4 bg-gradient-to-r from-transparent via-secondaryTheme/20 to-transparent" />

                {/* Core Values Section */}
                <motion.section 
                    className="py-20 lg:py-32 px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <motion.div className="text-center mb-16" variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Our Core <span className="text-primaryTheme">Values</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                These principles guide every decision we make and every solution we create.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreValues.map((value, index) => (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card className="h-full modern-card group hover:border-primaryTheme/30 transition-all duration-300">
                                        <CardHeader className="text-center">
                                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {value.icon}
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primaryTheme transition-colors">
                                                {value.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-subtitle dark:text-subtitleDark text-center leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <Separator className="mx-auto w-3/4 bg-gradient-to-r from-transparent via-primaryTheme/20 to-transparent" />

                {/* Team Stats Section */}
                <motion.section 
                    className="py-20 lg:py-32 px-6 bg-gradient-to-b from-transparent to-primaryTheme/5 dark:to-primaryTheme/3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <motion.div className="text-center mb-16" variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                By the <span className="text-secondaryTheme">Numbers</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                Our achievements speak to our commitment to excellence and client satisfaction.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamStats.map((stat, index) => (
                                <motion.div 
                                    key={index} 
                                    className="text-center"
                                    variants={staggerItem}
                                >
                                    <div className="mb-4">
                                        <div className="text-4xl lg:text-6xl font-bold text-primaryTheme mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-xl font-semibold mb-2">
                                            {stat.label}
                                        </div>
                                        <p className="text-sm text-subtitle dark:text-subtitleDark">
                                            {stat.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <Separator className="mx-auto w-3/4 bg-gradient-to-r from-transparent via-secondaryTheme/20 to-transparent" />

                {/* Our Journey Timeline */}
                <motion.section 
                    id="journey"
                    className="py-20 lg:py-32 px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <motion.div className="text-center mb-16" variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Our <span className="text-primaryTheme">Journey</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                From humble beginnings to global impact – here's how we've grown and evolved.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {milestones.map((milestone, index) => (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card className="h-full modern-card relative overflow-hidden group hover:border-secondaryTheme/30 transition-all duration-300">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primaryTheme to-secondaryTheme"></div>
                                        <CardHeader>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="px-3 py-1 bg-primaryTheme/10 text-primaryTheme rounded-full text-sm font-semibold">
                                                    {milestone.year}
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-secondaryTheme transition-colors">
                                                {milestone.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-subtitle dark:text-subtitleDark leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <Separator className="mx-auto w-3/4 bg-gradient-to-r from-transparent via-primaryTheme/20 to-transparent" />

                {/* Why Choose Us Section */}
                <motion.section 
                    className="py-20 lg:py-32 px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto">
                        <motion.div className="text-center mb-16" variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Why Choose <span className="text-secondaryTheme">Us</span>?
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                We bring a unique combination of technical expertise, business understanding, and genuine care for your success.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {whyChooseUs.map((reason, index) => (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card className="h-full modern-card group hover:border-primaryTheme/30 transition-all duration-300">
                                        <CardHeader>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="px-3 py-1 bg-secondaryTheme/10 text-secondaryTheme rounded-full text-sm font-semibold">
                                                    {reason.highlight}
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primaryTheme transition-colors">
                                                {reason.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-subtitle dark:text-subtitleDark leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Call to Action Section */}
                <motion.section 
                    className="py-20 lg:py-32 px-6 bg-gradient-to-b from-primaryTheme/5 to-secondaryTheme/5 dark:from-primaryTheme/3 dark:to-secondaryTheme/3"
                    variants={sectionEntrance}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto text-center">
                        <motion.div variants={sectionEntrance}>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Ready to Start Your <span className="text-primaryTheme">Journey</span> with Us?
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark mb-8 max-w-3xl mx-auto leading-relaxed">
                                Whether you're looking to build a new application, modernize existing systems, or need strategic technology guidance, 
                                we're here to turn your vision into reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <GradientButton 
                                    text="Get Started Today" 
                                    onClick={() => window.location.href = '/contact'}
                                />
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="px-8 py-3 rounded-full border-2 border-secondaryTheme text-secondaryTheme hover:bg-secondaryTheme hover:text-white transition-all duration-300"
                                    onClick={() => window.location.href = '/careers'}
                                >
                                    Join Our Team
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.div>
        </>
    )
} 