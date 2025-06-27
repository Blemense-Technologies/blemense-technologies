'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowLeft, HiArrowTrendingUp, HiCalculator, HiChartBar, HiCurrencyDollar, HiEye, HiCloudArrowUp } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    icon: <HiCalculator className="w-6 h-6" />,
    title: "Salary Analysis",
    description: "Analyze your current salary and potential increments"
  },
  {
    icon: <HiArrowTrendingUp className="w-6 h-6" />,
    title: "Increment Tracking",
    description: "Track salary increments over time and career progression"
  },
  {
    icon: <HiChartBar className="w-6 h-6" />,
    title: "Market Comparison",
    description: "Compare your salary with market standards"
  },
  {
    icon: <HiCurrencyDollar className="w-6 h-6" />,
    title: "Growth Projections",
    description: "Project future salary growth based on current trends"
  }
]

export default function HikeCalculator() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [currentSalary, setCurrentSalary] = useState('500000')
  const [hikePercentage, setHikePercentage] = useState('15')
  const [yearsExperience, setYearsExperience] = useState('3')

  const calculatedHike = (parseFloat(currentSalary) * parseFloat(hikePercentage) / 100).toFixed(0)
  const newSalary = (parseFloat(currentSalary) + parseFloat(calculatedHike)).toFixed(0)
  const monthlyIncrease = (parseFloat(calculatedHike) / 12).toFixed(0)

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hike Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Professional salary hike calculator with career analysis tools",
    "url": "https://blemense.tech/apps/hike-calculator",
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
            className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiArrowTrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Career Tool</span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">Hike </span>
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent">
                      Calculator
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Professional salary hike calculator with detailed analysis, comparison metrics, 
                    and career growth insights for informed decision making.
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
                      <div className="text-teal-400 mt-1">
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
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
                >
                  <HiEye className="w-5 h-5 mr-2" />
                  Calculate Hike
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
                    <h3 className="text-white font-semibold text-lg mb-6">Salary Hike Calculator</h3>
                    
                    {/* Input Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Current Annual Salary (₹)</label>
                        <Input
                          type="number"
                          value={currentSalary}
                          onChange={(e) => setCurrentSalary(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Expected Hike (%)</label>
                        <Input
                          type="number"
                          value={hikePercentage}
                          onChange={(e) => setHikePercentage(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="text-gray-300 text-sm mb-2 block">Years of Experience</label>
                        <Input
                          type="number"
                          value={yearsExperience}
                          onChange={(e) => setYearsExperience(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4 p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Hike Amount</span>
                        <span className="text-teal-400 font-bold text-xl">₹{Number(calculatedHike).toLocaleString('en-IN')}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">New Salary</span>
                        <span className="text-white font-semibold">₹{Number(newSalary).toLocaleString('en-IN')}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monthly Increase</span>
                        <span className="text-green-400 font-semibold">₹{Number(monthlyIncrease).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Hike Assessment */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Hike Assessment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Market Standard</span>
                          <span className="text-yellow-400">12-18%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Your Hike</span>
                          <span className={parseFloat(hikePercentage) >= 15 ? "text-green-400" : "text-orange-400"}>
                            {hikePercentage}%
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">
                          {parseFloat(hikePercentage) >= 15 ? "Above average hike!" : "Consider negotiating for better terms"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Plan Your Career Growth</h2>
              <p className="text-xl text-gray-300 mb-8">
                Make informed decisions about salary negotiations and career advancement
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
              >
                <HiCloudArrowUp className="w-5 h-5 mr-2" />
                Start Calculating
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 