'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import GradientButton from '@/components/gradientButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const benefits = [
    {
        icon: "🚀",
        title: "Innovation Culture",
        description: "Work with cutting-edge technologies and push the boundaries of what's possible. We encourage experimentation, creative problem-solving, and bold ideas that shape the future."
    },
    {
        icon: "📈",
        title: "Career Growth",
        description: "Comprehensive learning programs, mentorship opportunities, certification reimbursements, and clear advancement paths to accelerate your professional development."
    },
    {
        icon: "🌍",
        title: "Global Impact",
        description: "Work on projects that reach clients across the world, gaining exposure to diverse cultures, international best practices, and global market perspectives."
    },
    {
        icon: "🤝",
        title: "Collaborative Environment",
        description: "Join a team that values open communication, mutual respect, and collaborative problem-solving where every voice matters and ideas flourish."
    },
    {
        icon: "🏠",
        title: "Work-Life Balance",
        description: "Flexible working arrangements, remote options, wellness programs, and policies that support your personal life and mental well-being."
    },
    {
        icon: "💰",
        title: "Competitive Package",
        description: "Attractive salary, performance bonuses, equity options, comprehensive health benefits, and additional perks that recognize your valuable contributions."
    }
];

const openPositions = [
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "Lead development of scalable web applications using React, Node.js, and modern technologies.",
        requirements: ["5+ years experience", "React/Node.js expertise", "Team leadership skills"]
    },
    {
        title: "Product Designer",
        department: "Design",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "Create intuitive and beautiful user experiences for our software products and client solutions.",
        requirements: ["3+ years experience", "Figma/Adobe Suite", "User research skills"]
    },
    {
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "Build and maintain robust infrastructure, automate deployments, and ensure system reliability.",
        requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD expertise"]
    },
    {
        title: "Mobile App Developer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "Develop native and cross-platform mobile applications for iOS and Android platforms.",
        requirements: ["React Native/Flutter", "Native development", "App store deployment"]
    }
];

const applicationProcess = [
    {
        step: "1",
        title: "Apply Online",
        description: "Submit your application with resume and cover letter through our careers portal."
    },
    {
        step: "2",
        title: "Initial Screening",
        description: "Our talent team will review your application and conduct an initial phone screening."
    },
    {
        step: "3",
        title: "Technical Assessment",
        description: "Complete a technical challenge or participate in a technical interview relevant to your role."
    },
    {
        step: "4",
        title: "Team Interview",
        description: "Meet with your potential team members and discuss collaboration and culture fit."
    },
    {
        step: "5",
        title: "Final Decision",
        description: "We'll make our decision and provide feedback, hopefully welcoming you to the team!"
    }
];

export default function CareersContent() {
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

    const handleApply = (position: string) => {
        window.open(`mailto:careers@blemense.tech?subject=Application for ${position}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${position} position at Blemense Technologies.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,`, '_blank');
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
            
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-primaryTheme-50 to-white dark:from-bgDark dark:to-bgDark-lighter py-20 lg:py-32">
                    <div className="absolute inset-0 bg-grid-enhanced opacity-5"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                                Shape the <span className="text-gradient">Future</span> with Us
                            </h1>
                            <p className="text-lg lg:text-xl text-subtitle dark:text-subtitleDark mb-8 leading-relaxed">
                                Join a team of passionate innovators building next-generation software solutions. 
                                At Blemense Technologies, your ideas matter, your growth is our priority, and your impact is global.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <GradientButton 
                                    text="View Open Positions" 
                                    onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                                />
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="px-8 py-3 rounded-full border-2 border-primaryTheme text-primaryTheme hover:bg-primaryTheme hover:text-white transition-all duration-300"
                                    onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Learn About Our Culture
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Culture Section */}
                <section id="culture" className="py-20 lg:py-32 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Why Choose <span className="text-primaryTheme">Blemense</span>?
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                We're not just building software – we're building careers, relationships, and a culture where innovation thrives.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="group modern-card hover:border-secondaryTheme/30 transition-all duration-300">
                                    <CardHeader className="text-center">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {benefit.icon}
                                        </div>
                                        <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm leading-relaxed">
                                            {benefit.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Culture Stats */}
                        <div className="bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-3xl p-8 lg:p-12 text-white">
                            <div className="grid md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                                    <div className="text-sm opacity-90">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2">5+</div>
                                    <div className="text-sm opacity-90">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
                                    <div className="text-sm opacity-90">Global Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
                                    <div className="text-sm opacity-90">Employee Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section id="positions" className="py-20 lg:py-32 px-6 bg-gray-50 dark:bg-bgDark-darker">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Current <span className="text-secondaryTheme">Opportunities</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                Explore our open positions and find the perfect role to advance your career with us.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {openPositions.map((position, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <CardTitle className="text-xl mb-2 group-hover:text-primaryTheme transition-colors">
                                                    {position.title}
                                                </CardTitle>
                                                <div className="flex flex-wrap gap-2 text-sm text-subtitle dark:text-subtitleDark">
                                                    <span className="bg-primaryTheme-50 dark:bg-primaryTheme-900 px-3 py-1 rounded-full">
                                                        {position.department}
                                                    </span>
                                                    <span className="bg-secondaryTheme-50 dark:bg-secondaryTheme-900 px-3 py-1 rounded-full">
                                                        {position.location}
                                                    </span>
                                                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                                        {position.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <CardDescription className="text-sm leading-relaxed mb-4">
                                            {position.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-3 text-sm">Key Requirements:</h4>
                                            <ul className="space-y-1">
                                                {position.requirements.map((req, reqIndex) => (
                                                    <li key={reqIndex} className="text-sm text-subtitle dark:text-subtitleDark flex items-center">
                                                        <span className="w-2 h-2 bg-secondaryTheme rounded-full mr-3 flex-shrink-0"></span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button 
                                            onClick={() => handleApply(position.title)}
                                            className="w-full bg-primaryTheme hover:bg-primaryTheme-600 text-white rounded-lg transition-all duration-300 group-hover:bg-secondaryTheme"
                                        >
                                            Apply Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-subtitle dark:text-subtitleDark mb-4">
                                Don't see a role that fits? We're always looking for talented individuals.
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => handleApply("General Application")}
                                className="border-2 border-primaryTheme text-primaryTheme hover:bg-primaryTheme hover:text-white"
                            >
                                Send Us Your Resume
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Application Process Section */}
                <section className="py-20 lg:py-32 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Our Hiring <span className="text-primaryTheme">Process</span>
                            </h2>
                            <p className="text-lg text-subtitle dark:text-subtitleDark max-w-3xl mx-auto">
                                We've designed a transparent and efficient process to help you showcase your skills and get to know our team.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {applicationProcess.map((process, index) => (
                                <div key={index} className="flex items-start mb-8 last:mb-0">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primaryTheme to-secondaryTheme rounded-full flex items-center justify-center text-white font-bold mr-6">
                                        {process.step}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                                        <p className="text-subtitle dark:text-subtitleDark leading-relaxed">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 lg:py-32 px-6 bg-gradient-to-r from-primaryTheme-50 to-secondaryTheme-50 dark:from-bgDark dark:to-bgDark-lighter">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                    Ready to <span className="text-secondaryTheme">Join Us</span>?
                                </h2>
                                <p className="text-lg text-subtitle dark:text-subtitleDark">
                                    Take the next step in your career journey. We'd love to hear from you!
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <Card className="p-8">
                                        <CardHeader className="p-0 mb-6">
                                            <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
                                            <CardDescription>
                                                Have questions about our roles or company culture? We're here to help!
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-primaryTheme-100 dark:bg-primaryTheme-900 rounded-lg flex items-center justify-center mr-4">
                                                        <svg className="w-5 h-5 text-primaryTheme" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Email Us</p>
                                                        <a href="mailto:careers@blemense.tech" className="text-primaryTheme hover:text-secondaryTheme transition-colors">
                                                            careers@blemense.tech
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-secondaryTheme-100 dark:bg-secondaryTheme-900 rounded-lg flex items-center justify-center mr-4">
                                                        <svg className="w-5 h-5 text-secondaryTheme" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Location</p>
                                                        <p className="text-subtitle dark:text-subtitleDark">Remote-First Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card className="p-8">
                                        <CardHeader className="p-0 mb-6">
                                            <CardTitle className="text-2xl mb-4">Quick Application</CardTitle>
                                            <CardDescription>
                                                Submit your details and we'll get back to you within 24 hours.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <form className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label htmlFor="firstName">First Name</Label>
                                                        <Input 
                                                            id="firstName" 
                                                            className="mt-2 rounded-lg border-2 border-gray-200 dark:border-borderDark focus:border-primaryTheme" 
                                                            placeholder="John" 
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="lastName">Last Name</Label>
                                                        <Input 
                                                            id="lastName" 
                                                            className="mt-2 rounded-lg border-2 border-gray-200 dark:border-borderDark focus:border-primaryTheme" 
                                                            placeholder="Doe" 
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input 
                                                        id="email" 
                                                        type="email" 
                                                        className="mt-2 rounded-lg border-2 border-gray-200 dark:border-borderDark focus:border-primaryTheme" 
                                                        placeholder="john@example.com" 
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="position">Position of Interest</Label>
                                                    <Input 
                                                        id="position" 
                                                        className="mt-2 rounded-lg border-2 border-gray-200 dark:border-borderDark focus:border-primaryTheme" 
                                                        placeholder="e.g. Full Stack Developer" 
                                                    />
                                                </div>
                                                <GradientButton 
                                                    text="Submit Application" 
                                                    className="w-full mt-6"
                                                />
                                                <p className="text-xs text-subtitle dark:text-subtitleDark mt-4">
                                                    By submitting, you agree to our terms and conditions and privacy policy.
                                                </p>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
} 