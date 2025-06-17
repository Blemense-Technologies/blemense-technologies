type Service = {
    title: string;
    description: string;
    icon: string;
    category: 'development' | 'design' | 'consulting' | 'marketing';
    features: string[];
    gradientClass: string;
};

export const serviceData: Service[] = [
    {
        title: "Software Development",
        description: "Build the backbone of your digital future with cutting-edge software solutions that drive growth, innovation, and scalability.",
        icon: "💻",
        category: "development",
        features: ["Custom Applications", "API Development", "Cloud Solutions", "Mobile Apps"],
        gradientClass: "bg-gradient-to-br from-primaryTheme/20 to-secondaryTheme/20",
    },
    {
        title: "UI/UX Design",
        description: "Create stunning, user-centric experiences that captivate audiences and drive meaningful interactions with your brand.",
        icon: "🎨",
        category: "design",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
        gradientClass: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Website Development",
        description: "Craft responsive, high-performance websites that showcase your brand and deliver exceptional user experiences across all devices.",
        icon: "🌐",
        category: "development",
        features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"],
        gradientClass: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Digital Marketing",
        description: "Amplify your brand's reach with data-driven marketing strategies that generate leads, boost conversions, and maximize ROI.",
        icon: "📈",
        category: "marketing",
        features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
        gradientClass: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Database Management",
        description: "Optimize your data infrastructure with expert database solutions that ensure security, performance, and scalability.",
        icon: "🗄️",
        category: "development",
        features: ["Data Architecture", "Performance Tuning", "Security", "Migration"],
        gradientClass: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    },
    {
        title: "Tech Consulting",
        description: "Navigate complex technology decisions with expert guidance on architecture, implementation, and digital transformation strategies.",
        icon: "🔧",
        category: "consulting",
        features: ["Technology Strategy", "Architecture Review", "Digital Transformation", "Innovation Roadmap"],
        gradientClass: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
    {
        title: "Business Consulting",
        description: "Accelerate your business growth with strategic consulting services that optimize operations, enhance efficiency, and drive success.",
        icon: "📊",
        category: "consulting",
        features: ["Strategy Planning", "Process Optimization", "Market Analysis", "Growth Solutions"],
        gradientClass: "bg-gradient-to-br from-teal-500/20 to-blue-500/20",
    },
    {
        title: "AI & Machine Learning",
        description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions for your business.",
        icon: "🤖",
        category: "development",
        features: ["Predictive Analytics", "Automation", "NLP Solutions", "Computer Vision"],
        gradientClass: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
    },
    {
        title: "Graphics Design",
        description: "Transform your brand identity with compelling visual designs that communicate your message effectively and leave lasting impressions.",
        icon: "🎭",
        category: "design",
        features: ["Brand Identity", "Logo Design", "Print Materials", "Digital Graphics"],
        gradientClass: "bg-gradient-to-br from-rose-500/20 to-orange-500/20",
    }
];

export const serviceCategories = {
    development: {
        name: "Development",
        description: "Building robust, scalable solutions",
        icon: "⚡",
        color: "from-primaryTheme to-blue-500"
    },
    design: {
        name: "Design",
        description: "Creating beautiful user experiences",
        icon: "🎨",
        color: "from-pink-500 to-purple-500"
    },
    consulting: {
        name: "Consulting",
        description: "Strategic guidance for growth",
        icon: "💡",
        color: "from-secondaryTheme to-orange-500"
    },
    marketing: {
        name: "Marketing",
        description: "Amplifying your digital presence",
        icon: "📢",
        color: "from-green-500 to-emerald-500"
    }
};
