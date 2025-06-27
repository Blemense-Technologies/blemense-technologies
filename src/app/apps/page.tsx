'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { HiChevronRight, HiMagnifyingGlass, HiTag, HiClock, HiCube, HiSparkles } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fadeInUp, staggerContainer, staggerItem, cardHover, magneticButton } from '@/lib/animations'

// App data based on the footer navigation
const featuredApps = [
  {
    id: 'salestracker',
    name: 'SalesTracker',
    icon: '📊',
    tagline: 'Advanced Sales Analytics Platform',
    description: 'Comprehensive sales tracking and analytics solution designed to help businesses monitor performance, track leads, and optimize their sales processes with real-time insights.',
    category: 'Analytics',
    status: 'Live',
    features: ['Real-time Analytics', 'Lead Management', 'Performance Tracking', 'Custom Reports'],
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    href: '/apps/salestracker',
    gradient: 'from-blue-500 to-purple-600',
    accentColor: 'text-blue-400'
  },
  {
    id: 'invoicegenie',
    name: 'InvoiceGenie',
    icon: '🧾',
    tagline: 'Smart Invoice Management System',
    description: 'AI-powered invoice generation and management platform that automates billing processes, tracks payments, and provides detailed financial insights for businesses.',
    category: 'Finance',
    status: 'Live',
    features: ['Auto Invoice Generation', 'Payment Tracking', 'Tax Calculations', 'Client Management'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe API'],
    href: '/apps/invoicegenie',
    gradient: 'from-green-500 to-emerald-600',
    accentColor: 'text-green-400'
  }
]

const utilityApps = [
  {
    id: 'emic',
    name: 'EMI Calculator',
    icon: '💰',
    tagline: 'Advanced EMI & Loan Calculator',
    description: 'Comprehensive EMI calculation tool with detailed amortization schedules, comparison features, and financial planning insights.',
    category: 'Finance',
    status: 'Live',
    features: ['EMI Calculations', 'Amortization Schedule', 'Loan Comparison', 'Payment Planning'],
    tech: ['React', 'JavaScript', 'Chart.js'],
    href: '/apps/emic',
    gradient: 'from-orange-500 to-red-600',
    accentColor: 'text-orange-400'
  },
  {
    id: 'quicknote',
    name: 'QuickNote',
    icon: '📋',
    tagline: 'Smart Note-Taking Solution',
    description: 'Intelligent note-taking application with advanced organization features, collaboration tools, and seamless synchronization across devices.',
    category: 'Productivity',
    status: 'Live',
    features: ['Rich Text Editor', 'Tag Organization', 'Real-time Sync', 'Collaboration Tools'],
    tech: ['React', 'Firebase', 'PWA', 'Service Workers'],
    href: '/apps/quicknote',
    gradient: 'from-purple-500 to-pink-600',
    accentColor: 'text-purple-400'
  },
  {
    id: 'hike-calculator',
    name: 'Hike Calculator',
    icon: '📈',
    tagline: 'Salary Increment Analysis Tool',
    description: 'Professional salary hike calculator with detailed analysis, comparison metrics, and career growth insights for informed decision making.',
    category: 'Career',
    status: 'Live',
    features: ['Salary Analysis', 'Increment Tracking', 'Market Comparison', 'Growth Projections'],
    tech: ['Vue.js', 'JavaScript', 'Local Storage'],
    href: '/apps/hike-calculator',
    gradient: 'from-teal-500 to-cyan-600',
    accentColor: 'text-teal-400'
  }
]

const categories = ['All', 'Analytics', 'Finance', 'Productivity', 'Career']

const AppCard = ({ app, index }: { app: any, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={app.href}>
        <motion.div
          className="glass-card p-8 rounded-3xl cursor-pointer overflow-hidden relative"
          variants={cardHover}
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          {/* Background gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />
          
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">{app.status}</span>
            </motion.div>
          </div>

          {/* App icon */}
          <motion.div
            className="text-6xl mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {app.icon}
          </motion.div>

          {/* App info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
              <p className={`text-sm font-medium ${app.accentColor} mb-3`}>{app.tagline}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{app.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <HiSparkles className="w-4 h-4" />
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {app.features.slice(0, 3).map((feature: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                  >
                    {feature}
                  </span>
                ))}
                {app.features.length > 3 && (
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10">
                    +{app.features.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Tech stack */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <HiCube className="w-4 h-4" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {app.tech.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primaryTheme/20 text-primaryTheme text-xs rounded border border-primaryTheme/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <HiTag className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">{app.category}</span>
              </div>
              <motion.div
                className="flex items-center gap-2 text-primaryTheme"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-medium">Explore</span>
                <HiChevronRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function Apps() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Combine all apps
  const allApps = [...featuredApps, ...utilityApps]

  // Filter apps
  const filteredApps = allApps.filter(app => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Structured data for apps
  const appsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blemense Technologies Apps",
    "description": "Explore our collection of innovative web applications and tools",
    "url": "https://blemense.tech/apps",
    "publisher": {
      "@type": "Organization",
      "name": "Blemense Technologies",
      "logo": "https://blemense.tech/Logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allApps.map((app, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": app.name,
        "description": app.description,
        "applicationCategory": app.category,
        "operatingSystem": "Web Browser",
        "url": `https://blemense.tech${app.href}`
      }))
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appsStructuredData)
        }}
      />

      <motion.div
        className="min-h-screen bg-black relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primaryTheme/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-secondaryTheme/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          variants={staggerItem}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primaryTheme/20 border border-primaryTheme/30 text-primaryTheme"
                whileHover={{ scale: 1.05 }}
              >
                <HiCube className="w-5 h-5" />
                <span className="text-sm font-medium">Our Applications</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-white">Innovative </span>
                <span className="bg-gradient-to-r from-primaryTheme to-secondaryTheme bg-clip-text text-transparent">
                  Apps
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover our collection of powerful web applications designed to streamline your workflow, 
                enhance productivity, and solve real-world problems with cutting-edge technology.
              </p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
                variants={staggerContainer}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
              >
                {[
                  { number: "5+", label: "Live Apps" },
                  { number: "1000+", label: "Active Users" },
                  { number: "99.9%", label: "Uptime" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primaryTheme">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 pb-12"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primaryTheme text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Apps Section */}
        {selectedCategory === 'All' && (
          <motion.section
            className="relative px-4 sm:px-6 lg:px-8 pb-20"
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <h2 className="text-4xl font-bold text-white mb-4">Featured Applications</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Our flagship applications designed for enterprise-level performance and user experience
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {featuredApps.map((app, index) => (
                  <AppCard key={app.id} app={app} index={index} />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* All Apps Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 pb-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedCategory === 'All' ? 'All Applications' : `${selectedCategory} Apps`}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </motion.div>

            {filteredApps.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApps.map((app, index) => (
                  <AppCard key={app.id} app={app} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-20"
                variants={fadeInUp}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No apps found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 