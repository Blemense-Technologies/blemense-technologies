'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowLeft, HiDocumentText, HiCurrencyDollar, HiCog, HiChartPie, HiEye, HiDocumentText as HiDocumentReport, HiCloudArrowUp, HiShieldCheck } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    icon: <HiDocumentText className="w-8 h-8" />,
    title: "Auto Invoice Generation",
    description: "Generate professional invoices automatically with customizable templates and branding.",
    benefits: ["Custom templates", "Auto-numbering", "Brand integration", "Bulk generation"]
  },
  {
    icon: <HiCurrencyDollar className="w-8 h-8" />,
    title: "Payment Tracking",
    description: "Track payments, send reminders, and manage overdue invoices with automated workflows.",
    benefits: ["Payment status", "Auto reminders", "Overdue alerts", "Payment history"]
  },
  {
    icon: <HiChartPie className="w-8 h-8" />,
    title: "Tax Calculations",
    description: "Automatic tax calculations with support for multiple tax rates and compliance requirements.",
    benefits: ["Multi-tax support", "Tax reports", "Compliance ready", "Auto calculations"]
  },
  {
    icon: <HiCog className="w-8 h-8" />,
    title: "Client Management",
    description: "Comprehensive client database with contact management and interaction history.",
    benefits: ["Client profiles", "Contact sync", "History tracking", "Communication logs"]
  }
]

const techStack = [
  { name: "Next.js", description: "React framework", color: "text-gray-400" },
  { name: "TypeScript", description: "Type-safe development", color: "text-blue-400" },
  { name: "PostgreSQL", description: "Reliable database", color: "text-blue-500" },
  { name: "Stripe API", description: "Payment processing", color: "text-purple-400" }
]

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for freelancers and small businesses",
    features: ["Up to 10 invoices/month", "Basic templates", "Email support", "Payment tracking"],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "Ideal for growing businesses",
    features: ["Unlimited invoices", "Custom templates", "Priority support", "Advanced reports", "Tax calculations", "Client management"],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Advanced security", "Team collaboration", "API access"],
    cta: "Contact Sales",
    popular: false
  }
]

export default function InvoiceGenie() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [selectedPlan, setSelectedPlan] = useState(1)

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InvoiceGenie",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "AI-powered invoice generation and management platform for businesses",
    "url": "https://blemense.tech/apps/invoicegenie",
    "publisher": {
      "@type": "Organization",
      "name": "Blemense Technologies"
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
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiDocumentText className="w-5 h-5" />
                    <span className="text-sm font-medium">Invoice Management</span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">Invoice</span>
                    <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                      Genie
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    AI-powered invoice generation and management platform that automates billing processes, 
                    tracks payments, and provides detailed financial insights for businesses of all sizes.
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
                    { number: "500+", label: "Businesses" },
                    { number: "$2M+", label: "Invoiced" },
                    { number: "98%", label: "On-time Payments" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-green-400">{stat.number}</div>
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
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  >
                    <HiEye className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/20"
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Invoice Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="space-y-6">
                    {/* Mock Invoice Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg">INVOICE</h3>
                        <p className="text-gray-400 text-sm">#INV-2024-001</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-semibold">PAID</div>
                        <div className="text-gray-400 text-sm">Jan 15, 2024</div>
                      </div>
                    </div>
                    
                    {/* Mock Invoice Details */}
                    <div className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Web Development</span>
                        <span className="text-white">$2,500.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">UI/UX Design</span>
                        <span className="text-white">$1,200.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Consulting</span>
                        <span className="text-white">$800.00</span>
                      </div>
                      <div className="border-t border-white/10 pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-green-400">$4,500.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Mock Payment Status */}
                    <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">Payment Received</span>
                      </div>
                      <span className="text-green-400 text-sm">Via Stripe</span>
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
              <h2 className="text-4xl font-bold text-white mb-4">Smart Invoice Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to streamline your invoicing and get paid faster
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
                >
                  <motion.div
                    className="text-green-400 mb-4"
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
                        <div className="w-1 h-1 bg-green-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees, no surprises.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`glass-card p-8 rounded-3xl relative ${
                    plan.popular ? 'border-2 border-green-500/50' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-green-400">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-1">/{plan.period}</span>}
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <HiShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Streamline Your Invoicing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using InvoiceGenie to get paid faster and manage finances better
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  <HiCloudArrowUp className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/20"
                >
                  Contact Sales
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-4 h-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 