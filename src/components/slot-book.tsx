"use client"
import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { timeSlotOptions, concernOptions, urgencyOptions, meetingTypes } from '@/constants/slot-options';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  cardHover,
  blurReveal
} from '@/lib/animations';

type BookingStep = 1 | 2 | 3;

interface BookingData {
    name: string;
    email: string;
    company: string;
    phone: string;
    date: string;
    timeSlot: string;
    concern: string;
    urgency: string;
    meetingType: string;
    projectDescription: string;
    budget: string;
}

const steps = [
    {
        id: 1,
        title: "Personal Details",
        description: "Tell us about yourself",
        icon: "👤"
    },
    {
        id: 2,
        title: "Meeting Preferences",
        description: "Choose your preferred time and type",
        icon: "📅"
    },
    {
        id: 3,
        title: "Project Details",
        description: "Share your project requirements",
        icon: "📋"
    }
];

const StepIndicator = ({ currentStep, step }: { currentStep: BookingStep, step: typeof steps[0] }) => {
    const isActive = currentStep === step.id;
    const isCompleted = currentStep > step.id;

    return (
        <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isActive 
                            ? 'bg-gradient-to-r from-primaryTheme to-secondaryTheme text-white' 
                            : 'bg-gray-700 text-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                {isCompleted ? (
                    <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                ) : (
                    <span>{isActive ? step.icon : step.id}</span>
                )}
                
                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-secondaryTheme"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                )}
            </motion.div>
            
            <div className="hidden md:block">
                <motion.h3 
                    className={`font-semibold ${isActive ? 'text-white' : 'text-gray-400'}`}
                    animate={{ color: isActive ? '#ffffff' : '#9ca3af' }}
                    transition={{ duration: 0.3 }}
                >
                    {step.title}
                </motion.h3>
                <p className="text-sm text-gray-500">{step.description}</p>
            </div>
        </motion.div>
    );
};

const FormField = ({ label, children, required = false }: { label: string, children: React.ReactNode, required?: boolean }) => {
    return (
        <motion.div 
            className="space-y-3"
            variants={staggerItem}
        >
            <Label className="block text-sm font-medium text-gray-300">
                {label} {required && <span className="text-red-400">*</span>}
            </Label>
            {children}
        </motion.div>
    );
};

const CustomSelect = ({ 
    placeholder, 
    options, 
    value, 
    onChange, 
    showIcons = false,
    showDescriptions = false 
}: { 
    placeholder: string, 
    options: any[], 
    value: string, 
    onChange: (value: string) => void,
    showIcons?: boolean,
    showDescriptions?: boolean
}) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="glass-card border border-white/10 backdrop-blur-xl">
                <SelectGroup>
                    {options.map((option, index) => (
                        <SelectItem 
                            key={index} 
                            value={option.value}
                            className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                {showIcons && option.icon && (
                                    <span className="text-lg">{option.icon}</span>
                                )}
                                <div>
                                    <div className="font-medium">{option.label}</div>
                                    {showDescriptions && option.description && (
                                        <div className="text-xs text-gray-400 mt-1">{option.description}</div>
                                    )}
                                </div>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default function SlotBook() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [currentStep, setCurrentStep] = useState<BookingStep>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const [bookingData, setBookingData] = useState<BookingData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        date: '',
        timeSlot: '',
        concern: '',
        urgency: '',
        meetingType: '',
        projectDescription: '',
        budget: ''
    });

    const updateBookingData = (field: keyof BookingData, value: string) => {
        setBookingData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep((prev) => (prev + 1) as BookingStep);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => (prev - 1) as BookingStep);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return bookingData.name && bookingData.email && bookingData.company;
            case 2:
                return bookingData.date && bookingData.timeSlot && bookingData.concern && bookingData.meetingType;
            case 3:
                return bookingData.projectDescription && bookingData.urgency;
            default:
                return false;
        }
    };

    if (isSubmitted) {
        return (
            <motion.section 
                ref={containerRef}
                className="relative py-16 md:py-24 lg:py-32 p-4 overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="space-y-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="text-8xl"
                            variants={staggerItem}
                            animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🎉
                        </motion.div>
                        
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-white"
                            variants={staggerItem}
                        >
                            Booking Confirmed!
                        </motion.h2>
                        
                        <motion.p 
                            className="text-gray-300 max-w-2xl mx-auto"
                            variants={staggerItem}
                        >
                            Thank you for booking a consultation with us! We'll reach out to you within 24 hours to confirm your appointment details.
                        </motion.p>
                        
                        <motion.button
                            className="magnetic-btn px-8 py-4 rounded-full text-white font-semibold"
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setIsSubmitted(false);
                                setCurrentStep(1);
                                setBookingData({
                                    name: '', email: '', company: '', phone: '', date: '', timeSlot: '',
                                    concern: '', urgency: '', meetingType: '', projectDescription: '', budget: ''
                                });
                            }}
                        >
                            Book Another Slot
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        );
    }

    return (
        <motion.section 
            ref={containerRef}
            className="relative py-16 md:py-24 lg:py-32 p-4 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-primaryTheme/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center space-y-6 mb-16"
                    variants={blurReveal}
                >
                    <motion.h2 
                        className="text-2xl text-white md:text-4xl lg:text-5xl font-bold leading-tight"
                        variants={fadeInUp}
                    >
                        <span className="font-bold text-gradient-modern">Book Your Consultation</span> Today!
                    </motion.h2>
                    
                    <motion.p 
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Schedule a personalized consultation with our experts to discuss your unique needs, explore tailored solutions, and take the first step toward achieving your business goals.
                    </motion.p>
                </motion.div>

                {/* Step Indicators */}
                <motion.div 
                    className="flex justify-center md:justify-between items-center mb-12 max-w-2xl mx-auto"
                    variants={staggerContainer}
                >
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <motion.div variants={staggerItem}>
                                <StepIndicator currentStep={currentStep} step={step} />
                            </motion.div>
                            {index < steps.length - 1 && (
                                <motion.div 
                                    className="hidden md:block flex-1 h-0.5 bg-gray-700 mx-4"
                                    variants={staggerItem}
                                >
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primaryTheme to-secondaryTheme"
                                        initial={{ width: "0%" }}
                                        animate={{ 
                                            width: currentStep > step.id ? "100%" : "0%" 
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* Form Container */}
                <motion.div 
                    className="modern-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Step 1: Personal Details */}
                            {currentStep === 1 && (
                                <motion.div 
                                    className="space-y-8"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.h3 
                                        className="text-2xl font-bold text-white mb-6"
                                        variants={staggerItem}
                                    >
                                        👤 Personal Details
                                    </motion.h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Full Name" required>
                                            <Input
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={bookingData.name}
                                                onChange={(e) => updateBookingData('name', e.target.value)}
                                                className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30"
                                            />
                                        </FormField>

                                        <FormField label="Email Address" required>
                                            <Input
                                                type="email"
                                                placeholder="your.email@company.com"
                                                value={bookingData.email}
                                                onChange={(e) => updateBookingData('email', e.target.value)}
                                                className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30"
                                            />
                                        </FormField>

                                        <FormField label="Company Name" required>
                                            <Input
                                                type="text"
                                                placeholder="Your company name"
                                                value={bookingData.company}
                                                onChange={(e) => updateBookingData('company', e.target.value)}
                                                className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30"
                                            />
                                        </FormField>

                                        <FormField label="Phone Number">
                                            <Input
                                                type="tel"
                                                placeholder="+1 (555) 123-4567"
                                                value={bookingData.phone}
                                                onChange={(e) => updateBookingData('phone', e.target.value)}
                                                className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30"
                                            />
                                        </FormField>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Meeting Preferences */}
                            {currentStep === 2 && (
                                <motion.div 
                                    className="space-y-8"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.h3 
                                        className="text-2xl font-bold text-white mb-6"
                                        variants={staggerItem}
                                    >
                                        📅 Meeting Preferences
                                    </motion.h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField label="Preferred Date" required>
                                            <Input
                                                type="date"
                                                value={bookingData.date}
                                                onChange={(e) => updateBookingData('date', e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="glass-card h-14 px-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30"
                                            />
                                        </FormField>

                                        <FormField label="Time Slot" required>
                                            <CustomSelect
                                                placeholder="Select your preferred time"
                                                options={timeSlotOptions}
                                                value={bookingData.timeSlot}
                                                onChange={(value) => updateBookingData('timeSlot', value)}
                                                showIcons={true}
                                                showDescriptions={true}
                                            />
                                        </FormField>

                                        <FormField label="Service Interest" required>
                                            <CustomSelect
                                                placeholder="What service are you interested in?"
                                                options={concernOptions}
                                                value={bookingData.concern}
                                                onChange={(value) => updateBookingData('concern', value)}
                                                showIcons={true}
                                                showDescriptions={true}
                                            />
                                        </FormField>

                                        <FormField label="Meeting Type" required>
                                            <CustomSelect
                                                placeholder="How would you like to meet?"
                                                options={meetingTypes}
                                                value={bookingData.meetingType}
                                                onChange={(value) => updateBookingData('meetingType', value)}
                                                showIcons={true}
                                                showDescriptions={true}
                                            />
                                        </FormField>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Project Details */}
                            {currentStep === 3 && (
                                <motion.div 
                                    className="space-y-8"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.h3 
                                        className="text-2xl font-bold text-white mb-6"
                                        variants={staggerItem}
                                    >
                                        📋 Project Details
                                    </motion.h3>
                                    
                                    <div className="space-y-6">
                                        <FormField label="Project Description" required>
                                            <textarea
                                                placeholder="Tell us about your project, goals, and requirements..."
                                                value={bookingData.projectDescription}
                                                onChange={(e) => updateBookingData('projectDescription', e.target.value)}
                                                rows={4}
                                                className="w-full glass-card p-4 border border-white/10 hover:border-secondaryTheme/50 transition-all duration-300 focus:ring-2 focus:ring-secondaryTheme/30 resize-none rounded-xl"
                                            />
                                        </FormField>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField label="Project Urgency" required>
                                                <CustomSelect
                                                    placeholder="When do you need this completed?"
                                                    options={urgencyOptions}
                                                    value={bookingData.urgency}
                                                    onChange={(value) => updateBookingData('urgency', value)}
                                                    showIcons={true}
                                                />
                                            </FormField>

                                            <FormField label="Estimated Budget">
                                                <CustomSelect
                                                    placeholder="What's your budget range?"
                                                    options={[
                                                        { value: "under-2l", label: "Under ₹2,00,000" },
                                                        { value: "2l-5l", label: "₹2,00,000 - ₹5,00,000" },
                                                        { value: "5l-15l", label: "₹5,00,000 - ₹15,00,000" },
                                                        { value: "15l-30l", label: "₹15,00,000 - ₹30,00,000" },
                                                        { value: "30l-50l", label: "₹30,00,000 - ₹50,00,000" },
                                                        { value: "over-50l", label: "Over ₹50,00,000" },
                                                        { value: "discuss", label: "Let's discuss" }
                                                    ]}
                                                    value={bookingData.budget}
                                                    onChange={(value) => updateBookingData('budget', value)}
                                                />
                                            </FormField>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <motion.div 
                        className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700/50"
                        variants={staggerItem}
                    >
                        <motion.button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                currentStep === 1 
                                    ? 'opacity-50 cursor-not-allowed text-gray-500' 
                                    : 'glass-card text-white border border-white/20 hover:border-secondaryTheme/50'
                            }`}
                            whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
                            whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
                        >
                            ← Previous
                        </motion.button>

                        <motion.div className="text-center">
                            <p className="text-sm text-gray-400">
                                Step {currentStep} of {steps.length}
                            </p>
                        </motion.div>

                        {currentStep < 3 ? (
                            <motion.button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    isStepValid()
                                        ? 'magnetic-btn text-white'
                                        : 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-400'
                                }`}
                                whileHover={isStepValid() ? { scale: 1.05 } : {}}
                                whileTap={isStepValid() ? { scale: 0.95 } : {}}
                            >
                                Next →
                            </motion.button>
                        ) : (
                            <motion.button
                                onClick={handleSubmit}
                                disabled={!isStepValid() || isSubmitting}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    isStepValid() && !isSubmitting
                                        ? 'magnetic-btn text-white'
                                        : 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-400'
                                }`}
                                whileHover={isStepValid() && !isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={isStepValid() && !isSubmitting ? { scale: 0.95 } : {}}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Booking...
                                    </div>
                                ) : (
                                    'Book Consultation 🚀'
                                )}
                            </motion.button>
                        )}
                    </motion.div>
                </motion.div>

                {/* Additional Info */}
                <motion.div 
                    className="text-center mt-12"
                    variants={fadeInUp}
                >
                    <motion.p 
                        className="text-sm text-gray-500 max-w-2xl mx-auto"
                        variants={staggerItem}
                    >
                        <span className="text-secondaryTheme">📝 Note:</span> Our team will review your submission and contact you within 24 hours to confirm your appointment. Response time may vary based on slot availability and current demand.
                    </motion.p>
                    
                    <motion.div 
                        className="flex justify-center items-center gap-4 mt-6"
                        variants={staggerItem}
                    >
                        <span className="text-xs text-gray-600">Trusted by 100+ companies</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="text-secondaryTheme text-sm"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: i * 0.1 }}
                                >
                                    ⭐
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
