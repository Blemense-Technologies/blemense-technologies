'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowLeft, HiCalculator, HiCurrencyDollar, HiChartPie, HiDocumentText, HiEye, HiCloudArrowUp } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    icon: <HiCalculator className="w-6 h-6" />,
    title: "EMI Calculations",
    description: "Calculate EMI for loans with different interest rates and tenures"
  },
  {
    icon: <HiChartPie className="w-6 h-6" />,
    title: "Amortization Schedule",
    description: "Detailed payment breakdown for the entire loan duration"
  },
  {
    icon: <HiCurrencyDollar className="w-6 h-6" />,
    title: "Loan Comparison",
    description: "Compare multiple loan options to find the best deal"
  },
  {
    icon: <HiDocumentText className="w-6 h-6" />,
    title: "Payment Planning",
    description: "Plan your finances with detailed payment insights"
  }
]

export default function EMICalculator() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [loanAmount, setLoanAmount] = useState('500000')
  const [interestRate, setInterestRate] = useState('8.5')
  const [tenure, setTenure] = useState('20')

  // Calculate EMI
  const calculateEMI = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12
    const time = parseFloat(tenure) * 12
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)
    return emi.toFixed(0)
  }

  const emi = calculateEMI()
  const totalAmount = (parseFloat(emi) * parseFloat(tenure) * 12).toFixed(0)
  const totalInterest = (parseFloat(totalAmount) - parseFloat(loanAmount)).toFixed(0)

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EMI Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "description": "Advanced EMI and loan calculator with amortization schedules",
    "url": "https://blemense.tech/apps/emic",
    "publisher": {
      "@type": "Organization",
      "name": "Blemense Technologies"
    }
  }

  return (
    <>
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
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiCalculator className="w-5 h-5" />
                    <span className="text-sm font-medium">Financial Calculator</span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">EMI </span>
                    <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                      Calculator
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Comprehensive EMI calculation tool with detailed amortization schedules, 
                    comparison features, and financial planning insights to help you make informed decisions.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 glass-card rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="text-orange-400 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                        <p className="text-gray-400 text-xs">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                >
                  <HiEye className="w-5 h-5 mr-2" />
                  Try Calculator
                </Button>
              </motion.div>

              {/* Right Content - Calculator */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="space-y-6">
                    <h3 className="text-white font-semibold text-lg mb-6">EMI Calculator</h3>
                    
                    {/* Input Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Loan Amount (₹)</label>
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Interest Rate (% per annum)</label>
                        <Input
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Loan Tenure (Years)</label>
                        <Input
                          type="number"
                          value={tenure}
                          onChange={(e) => setTenure(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monthly EMI</span>
                        <span className="text-orange-400 font-bold text-xl">₹{Number(emi).toLocaleString('en-IN')}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Amount</span>
                        <span className="text-white font-semibold">₹{Number(totalAmount).toLocaleString('en-IN')}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Interest</span>
                        <span className="text-red-400 font-semibold">₹{Number(totalInterest).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Principal</span>
                        <span className="text-gray-400">Interest</span>
                      </div>
                      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                          style={{ 
                            width: `${(parseFloat(loanAmount) / parseFloat(totalAmount)) * 100}%` 
                          }}
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${(parseFloat(loanAmount) / parseFloat(totalAmount)) * 100}%` 
                          }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our EMI Calculator?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Make informed financial decisions with our comprehensive loan calculator
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Accurate Calculations", desc: "Precise EMI calculations using standard formulas", icon: "🎯" },
                { title: "Instant Results", desc: "Get results in real-time as you adjust parameters", icon: "⚡" },
                { title: "Multiple Scenarios", desc: "Compare different loan scenarios side by side", icon: "🔍" },
                { title: "Free to Use", desc: "No registration required, completely free calculator", icon: "🆓" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Start Planning Your Finances</h2>
              <p className="text-xl text-gray-300 mb-8">
                Use our EMI calculator to make informed decisions about your loans and investments
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                <HiCloudArrowUp className="w-5 h-5 mr-2" />
                Use Calculator Now
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 