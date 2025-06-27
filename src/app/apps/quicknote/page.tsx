'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowLeft, HiDocumentText, HiTag, HiCloudArrowUp, HiUsers, HiEye } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    icon: <HiDocumentText className="w-6 h-6" />,
    title: "Rich Text Editor",
    description: "Format your notes with rich text editing capabilities"
  },
  {
    icon: <HiTag className="w-6 h-6" />,
    title: "Tag Organization",
    description: "Organize notes with tags and categories for easy retrieval"
  },
  {
    icon: <HiCloudArrowUp className="w-6 h-6" />,
    title: "Real-time Sync",
    description: "Sync your notes across all devices in real-time"
  },
  {
    icon: <HiUsers className="w-6 h-6" />,
    title: "Collaboration",
    description: "Share and collaborate on notes with team members"
  }
]

export default function QuickNote() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [noteContent, setNoteContent] = useState('Start typing your note here...')

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "QuickNote",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web Browser",
    "description": "Smart note-taking application with collaboration features",
    "url": "https://blemense.tech/apps/quicknote",
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
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiDocumentText className="w-5 h-5" />
                    <span className="text-sm font-medium">Note Taking</span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">Quick</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      Note
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Intelligent note-taking application with advanced organization features, 
                    collaboration tools, and seamless synchronization across all your devices.
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
                    { number: "2K+", label: "Active Users" },
                    { number: "50K+", label: "Notes Created" },
                    { number: "99.8%", label: "Sync Success" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                  >
                    <HiEye className="w-5 h-5 mr-2" />
                    Try QuickNote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                  >
                    View Features
                  </Button>
                </div>
              </motion.div>

              {/* Right Content - Note Interface */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="space-y-6">
                    {/* Mock Note Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">My Project Notes</h3>
                        <p className="text-gray-400 text-sm">Last edited 2 min ago</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Synced</span>
                      </div>
                    </div>
                    
                    {/* Mock Editor */}
                    <div className="space-y-4">
                      <div className="flex gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                        {['B', 'I', 'U', 'H1', 'H2'].map((tool) => (
                          <button
                            key={tool}
                            className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded"
                          >
                            {tool}
                          </button>
                        ))}
                      </div>
                      
                      <div className="min-h-32 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-white">
                          <h4 className="font-semibold mb-2">Project Meeting Notes</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            • Discussed new feature requirements<br/>
                            • Assigned tasks to team members<br/>
                            • Set deadline for next milestone
                          </p>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                              #meeting
                            </span>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                              #project
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Collaboration indicators */}
                    <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-black" />
                          <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-black" />
                        </div>
                        <span className="text-purple-400 text-sm">2 collaborators</span>
                      </div>
                      <span className="text-purple-400 text-sm">Shared</span>
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
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Note-Taking Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to capture, organize, and share your thoughts
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
                    className="text-purple-400 mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Boost Productivity", desc: "Organize thoughts and ideas efficiently", icon: "🚀" },
                { title: "Never Lose Ideas", desc: "Automatic save and cloud backup", icon: "💡" },
                { title: "Work Anywhere", desc: "Access notes from any device, anytime", icon: "🌍" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-8 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Start Taking Better Notes Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users who have improved their productivity with QuickNote
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              >
                <HiCloudArrowUp className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
} 