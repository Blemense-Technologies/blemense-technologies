'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowLeft, HiChartBar, HiUsers, HiCog, HiArrowTrendingUp, HiEye, HiDocumentText, HiCloudArrowUp, HiShieldCheck } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    icon: <HiChartBar className="w-8 h-8" />,
    title: "Real-time Analytics",
    description: "Get instant insights into your sales performance with live dashboards and customizable charts.",
    benefits: ["Live sales tracking", "Custom KPI dashboards", "Performance comparisons", "Trend analysis"]
  },
  {
    icon: <HiUsers className="w-8 h-8" />,
    title: "Lead Management",
    description: "Organize and track your leads through the entire sales funnel with advanced filtering and automation.",
    benefits: ["Lead scoring", "Automated follow-ups", "Pipeline visualization", "Contact management"]
  },
  {
    icon: <HiDocumentText className="w-8 h-8" />,
    title: "Custom Reports",
    description: "Generate detailed reports with advanced filtering options and export capabilities.",
    benefits: ["Automated reporting", "Export to PDF/Excel", "Scheduled reports", "Custom templates"]
  },
  {
    icon: <HiArrowTrendingUp className="w-8 h-8" />,
    title: "Performance Tracking",
    description: "Monitor individual and team performance with comprehensive metrics and goal tracking.",
    benefits: ["Goal setting", "Achievement tracking", "Team comparisons", "Performance alerts"]
  }
]

const techStack = [
  { name: "React", description: "Modern frontend framework", color: "text-blue-400" },
  { name: "Node.js", description: "Scalable backend runtime", color: "text-green-400" },
  { name: "MongoDB", description: "NoSQL database", color: "text-green-500" },
  { name: "Chart.js", description: "Data visualization", color: "text-orange-400" }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sales Manager",
    company: "TechCorp Inc.",
    quote: "SalesTracker transformed our sales process. We saw a 40% increase in conversion rates within the first month.",
    avatar: "/testimonials/anushka.jpg"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    company: "StartupX",
    quote: "The real-time analytics helped us identify bottlenecks in our sales funnel and optimize our approach.",
    avatar: "/testimonials/eo.jpeg"
  }
]

export default function SalesTracker() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [activeFeature, setActiveFeature] = useState(0)

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SalesTracker",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Advanced sales analytics platform for tracking performance and managing leads",
    "url": "https://blemense.tech/apps/salestracker",
    "publisher": {
      "@type": "Organization",
      "name": "Blemense Technologies"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appStructuredData)
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
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
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
        </div>

        {/* Back Button */}
        <motion.div
          className="absolute top-24 left-4 sm:left-8 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/apps">
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <HiArrowLeft className="w-4 h-4 mr-2" />
              Back to Apps
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          variants={staggerItem}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiChartBar className="w-5 h-5" />
                    <span className="text-sm font-medium">Analytics Platform</span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">Sales</span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                      Tracker
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Advanced sales analytics platform designed to help businesses monitor performance, 
                    track leads, and optimize their sales processes with real-time insights and comprehensive reporting.
                  </p>
                </div>

                {/* Key Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isHeroInView ? "visible" : "hidden"}
                >
                  {[
                    { number: "40+", label: "Active Users" },
                    { number: "15K+", label: "Leads Tracked" },
                    { number: "99.9%", label: "Uptime" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={staggerItem}
                  initial="hidden"
                  animate={isHeroInView ? "visible" : "hidden"}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <HiEye className="w-5 h-5 mr-2" />
                    Try Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                  >
                    View Documentation
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - App Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="space-y-6">
                    {/* Mock Dashboard */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">Sales Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Live</span>
                      </div>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-end justify-between p-4 border border-blue-500/30">
                      {[65, 78, 90, 45, 88, 95, 72].map((height, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-gradient-to-t from-blue-500 to-purple-600 rounded-sm w-8"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>

                    {/* Mock Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Sales", value: "$45.2K", change: "+12%" },
                        { label: "Conversions", value: "234", change: "+8%" }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                          <div className="text-gray-400 text-sm">{metric.label}</div>
                          <div className="text-white font-bold text-lg">{metric.value}</div>
                          <div className="text-green-400 text-sm">{metric.change}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to track, analyze, and optimize your sales performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-2xl group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveFeature(index)}
                >
                  <motion.div
                    className="text-blue-400 mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">Built with Modern Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Leveraging cutting-edge technologies for optimal performance and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className={`text-xl font-bold ${tech.color} mb-2`}>{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">What Users Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real feedback from businesses using SalesTracker
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-8 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                      </div>
                      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-card p-12 rounded-3xl"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Sales?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses using SalesTracker to optimize their sales performance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <HiCloudArrowUp className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                >
                  Schedule Demo
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-4 h-4 text-green-400" />
                  <span>30-day free trial</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 