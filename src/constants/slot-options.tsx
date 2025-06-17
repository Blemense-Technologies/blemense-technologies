export const timeSlotOptions = [
    { 
        value: "morning-early", 
        label: "Early Morning (9:00 AM - 10:30 AM)",
        icon: "🌅",
        availability: "high",
        description: "Perfect for strategic discussions"
    },
    { 
        value: "morning-late", 
        label: "Late Morning (10:30 AM - 12:00 PM)",
        icon: "☀️",
        availability: "medium",
        description: "Ideal for technical consultations"
    },
    { 
        value: "afternoon-early", 
        label: "Early Afternoon (1:00 PM - 2:30 PM)",
        icon: "🌤️",
        availability: "high",
        description: "Great for project planning"
    },
    { 
        value: "afternoon-late", 
        label: "Late Afternoon (2:30 PM - 4:00 PM)",
        icon: "🌆",
        availability: "medium",
        description: "Best for design reviews"
    },
    { 
        value: "evening", 
        label: "Evening (4:00 PM - 5:30 PM)",
        icon: "🌇",
        availability: "low",
        description: "Suitable for quick consultations"
    },
];

export const concernOptions = [
    { 
        value: "software-development", 
        label: "Software Development",
        icon: "💻",
        color: "from-blue-500 to-cyan-500",
        description: "Custom applications, APIs, cloud solutions"
    },
    { 
        value: "ui-ux-design", 
        label: "UI/UX Design",
        icon: "🎨",
        color: "from-purple-500 to-pink-500",
        description: "User experience, interface design, prototyping"
    },
    { 
        value: "website-development", 
        label: "Website Development",
        icon: "🌐",
        color: "from-green-500 to-teal-500",
        description: "Responsive websites, e-commerce, CMS"
    },
    { 
        value: "digital-marketing", 
        label: "Digital Marketing",
        icon: "📈",
        color: "from-orange-500 to-red-500",
        description: "SEO, social media, content strategy"
    },
    { 
        value: "ai-ml", 
        label: "AI & Machine Learning",
        icon: "🤖",
        color: "from-violet-500 to-purple-500",
        description: "Automation, predictive analytics, NLP"
    },
    { 
        value: "tech-consulting", 
        label: "Tech Consulting",
        icon: "🔧",
        color: "from-yellow-500 to-orange-500",
        description: "Architecture review, digital transformation"
    },
    { 
        value: "business-consulting", 
        label: "Business Consulting",
        icon: "📊",
        color: "from-indigo-500 to-blue-500",
        description: "Strategy planning, process optimization"
    },
    { 
        value: "graphics-design", 
        label: "Graphics Design",
        icon: "🎭",
        color: "from-pink-500 to-rose-500",
        description: "Brand identity, logos, marketing materials"
    },
    { 
        value: "other", 
        label: "Other Services",
        icon: "💡",
        color: "from-gray-500 to-gray-700",
        description: "Custom requirements and special projects"
    }
];

export const urgencyOptions = [
    {
        value: "asap",
        label: "ASAP (Within 1-2 weeks)",
        icon: "🚨",
        color: "text-red-400"
    },
    {
        value: "urgent",
        label: "Urgent (Within 1 month)",
        icon: "⚡",
        color: "text-orange-400"
    },
    {
        value: "normal",
        label: "Normal (Within 2-4 months)",
        icon: "📅",
        color: "text-blue-400"
    },
    {
        value: "flexible",
        label: "Flexible (No rush)",
        icon: "🌱",
        color: "text-green-400"
    }
];

export const meetingTypes = [
    {
        value: "video-call",
        label: "Video Call",
        icon: "📹",
        description: "Face-to-face discussion via Zoom/Teams"
    },
    {
        value: "phone-call",
        label: "Phone Call",
        icon: "📞",
        description: "Voice conversation at your convenience"
    },
    {
        value: "in-person",
        label: "In-Person Meeting",
        icon: "🤝",
        description: "Meet at our office or your location"
    },
    {
        value: "email-consultation",
        label: "Email Consultation",
        icon: "📧",
        description: "Detailed discussion via email exchange"
    }
];