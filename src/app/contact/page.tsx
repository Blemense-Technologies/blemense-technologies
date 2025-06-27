"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Contactform from '@/components/contact-form'
import { sectionEntrance } from '@/lib/animations'

const contactInfo = [
  {
    title: 'Email',
    value: 'hello@blemense.tech',
    description: 'Drop us a line anytime'
  },
  {
    title: 'Phone',
    value: '+91 9730031956',
    description: 'Call us during business hours'
  },
  {
    title: 'Address',
    value: 'India',
    description: 'We serve clients globally'
  },
  {
    title: 'Response Time',
    value: '24 Hours',
    description: 'We typically respond within a day'
  }
];

export default function Contact() {
  // Structured data for contact page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Blemense Technologies",
    "description": "Get in touch with Blemense Technologies for software development services",
    "url": "https://blemense.tech/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Blemense Technologies",
      "url": "https://blemense.tech",
      "logo": "https://blemense.tech/Logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9730031956",
        "contactType": "customer service",
        "email": "hello@blemense.tech",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData)
        }}
      />
      
      <motion.div 
        className='mt-32 px-5 lg:px-0 min-h-screen'
        initial="hidden"
        animate="visible"
        variants={sectionEntrance}
      >
        <div className="w-fit mx-auto">
          {/* Header Section */}
          <motion.div 
            className='w-fit mx-auto mb-16'
            variants={sectionEntrance}
          >
            <h1 className="text-2xl text-center font-bold mb-3">
              Let's <span className="text-primaryTheme">Connect</span> and <span className="text-secondaryTheme">Collaborate</span>
            </h1>
            <p className="text-sm text-center text-subtitle dark:text-subtitleDark mb-8">
              Ready to bring your ideas to life? We're here to help you every step of the way.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={sectionEntrance}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white text-center"
                variants={sectionEntrance}
                custom={index}
              >
                <h3 className="font-semibold mb-2 text-primaryTheme dark:text-secondaryTheme">
                  {info.title}
                </h3>
                <p className="font-medium mb-1">
                  {info.value}
                </p>
                <p className="text-xs text-subtitle dark:text-subtitleDark">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <motion.section
            variants={sectionEntrance}
            className="mb-16"
          >
            <Contactform />
          </motion.section>

          {/* Additional Information Section */}
          <motion.div 
            className="text-center mb-16"
            variants={sectionEntrance}
          >
            <h2 className="text-xl font-semibold mb-4">
              Why <span className="text-primaryTheme">Choose</span> Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white">
                <h3 className="font-semibold mb-2 text-secondaryTheme dark:text-primaryTheme">
                  Expert Team
                </h3>
                <p className="text-sm text-subtitle dark:text-subtitleDark">
                  Our experienced developers deliver high-quality solutions tailored to your needs.
                </p>
              </div>
              <div className="p-6 rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white">
                <h3 className="font-semibold mb-2 text-secondaryTheme dark:text-primaryTheme">
                  Fast Delivery
                </h3>
                <p className="text-sm text-subtitle dark:text-subtitleDark">
                  We pride ourselves on delivering projects on time without compromising quality.
                </p>
              </div>
              <div className="p-6 rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-bgDark dark:border-[1.5px] dark:border-borderDark bg-white">
                <h3 className="font-semibold mb-2 text-secondaryTheme dark:text-primaryTheme">
                  24/7 Support
                </h3>
                <p className="text-sm text-subtitle dark:text-subtitleDark">
                  Our support team is always available to help you with any questions or issues.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
} 