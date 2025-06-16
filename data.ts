import { BookOpen, Clock, FileText, HeadphonesIcon, MessageCircle, Package, PlayCircle, Smartphone, Trophy, Truck, Video, Wrench, Zap, Shield, PenToolIcon, Cpu, LucideIcon } from "lucide-react";

type DealType = "time-limited" | "bundle" | "clearance";

type Category = {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
}

type Service = {
    id: number;
    name: string;
    description: string;
    price: string;
    duration: string;
}

type ServiceCategory = {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    services: Service[];
}

type NewArrival = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    releaseDate: string;
    arrivalDate: string;
    category: string;
    preorderAvailable: boolean;
}

export const stats = [
    {
        value: "5K+",
        label: "Products",
        icon: Package,
        gradient: "from-orange-500 to-orange-600",
        darkGradient: "dark:from-orange-400 dark:to-orange-500"
    },
    {
        value: "24/7",
        label: "Support",
        icon: Clock,
        gradient: "from-orange-400 to-orange-500",
        darkGradient: "dark:from-orange-300 dark:to-orange-400"
    },
    {
        value: "99%",
        label: "Satisfaction",
        icon: Trophy,
        gradient: "from-orange-600 to-orange-700",
        darkGradient: "dark:from-orange-500 dark:to-orange-600"
    }
];

export const products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 199.99,
        image: "/smart-watch.png",
        badge: "Best Seller",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 149.99,
        image: "/smart-watch.png",
        badge: "New",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Smartphone",
        price: 699.99,
        image: "/smart-watch.png",
        badge: "Featured",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Laptop",
        price: 999.99,
        image: "/smart-watch.png",
        badge: "Limited Stock",
        rating: 4.6,
    }
];

export const recommendations = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise-cancelling, 30-hour battery life",
        image: "/smart-watch.png",
        tag: "Trending Now",
        match: "98% Match",
        price: 199.99,
    },
    {
        id: 2,
        name: "Smart Home Hub",
        description: "Control all your smart devices",
        image: "/smart-watch.png",
        tag: "Popular Picks",
        match: "95% Match",
        price: 149.99,
    },
    {
        id: 3,
        name: "Fitness Tracker",
        description: "Track your health and workouts",
        image: "/smart-watch.png",
        tag: "Just for You",
        match: "92% Match",
        price: 89.99,
    },
    {
        id: 4,
        name: "Portable Charger",
        description: "20000mAh, fast charging",
        image: "/smart-watch.png",
        tag: "Trending Now",
        match: "90% Match",
        price: 49.99,
    },
];

export const services = [
    {
        icon: Truck,
        title: "Delivery & Shipping",
        description: "Quick delivery options like same-day shipping or free delivery on orders over $100.",
        link: "/delivery",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        icon: Smartphone,
        title: "Gadget Customization",
        description: "Personalization services (engraving, bundle options).",
        link: "/customization",
        gradient: "from-orange-400 to-orange-500"
    },
    {
        icon: Wrench,
        title: "Expert Installation",
        description: "Set-up assistance for home tech systems.",
        link: "/installation",
        gradient: "from-orange-600 to-orange-700"
    }
];

export const supportOptions = [
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Learn how to set up and use your new gadgets with our easy-to-follow video tutorials.",
        buttonText: "Watch Tutorials",
        stats: "500+ tutorials",
        action: "/tutorials",
        IconBg: PlayCircle,
        gradient: "from-orange-500 to-orange-600"
    },
    {
        icon: FileText,
        title: "Troubleshooting Guides",
        description: "Find solutions to common tech issues with our comprehensive troubleshooting guides.",
        buttonText: "View Guides",
        stats: "1000+ articles",
        action: "/guides",
        IconBg: BookOpen,
        gradient: "from-orange-400 to-orange-500"
    },
    {
        icon: MessageCircle,
        title: "Live Chat Support",
        description: "Get real-time assistance from our expert support team through our live chat service.",
        buttonText: "Start Chat",
        stats: "24/7 support",
        action: "/chat",
        IconBg: HeadphonesIcon,
        gradient: "from-orange-600 to-orange-700"
    }
];

export const upcomingServices = [
    {
        title: "AI-Powered Tech Support",
        icon: "🤖",
        description: "Get instant help with our new AI assistant.",
        status: "Coming Soon",
        availableFrom: "March 2025",
        stats: "24/7 Support",
        buttonText: "Join Waitlist"
    },
    {
        title: "VR Setup Workshop",
        icon: "🥽",
        description: "Learn how to set up and optimize your VR system.",
        status: "Registration Open",
        availableFrom: "April 2025",
        stats: "2 Hour Session",
        buttonText: "Register Now"
    },
    {
        title: "Smart Home Integration",
        icon: "🏠",
        description: "Connect all your smart devices seamlessly.",
        status: "Beta Testing",
        availableFrom: "May 2025",
        stats: "Full Setup",
        buttonText: "Learn More"
    },
    {
        title: "Tech Recycling Program",
        icon: "♻️",
        description: "Responsibly dispose of your old gadgets.",
        status: "Coming Soon",
        availableFrom: "June 2025",
        stats: "Free Service",
        buttonText: "Get Notified"
    },
    {
        title: "Custom PC Building",
        icon: "🖥️",
        description: "Design and build your dream gaming rig.",
        status: "Waitlist Open",
        availableFrom: "July 2025",
        stats: "Custom Build",
        buttonText: "Join Waitlist"
    }
];

export const deals = [
    {
        id: 1,
        name: "Flash Sale",
        type: "time-limited" as DealType,
        endsAt: "2024-03-20",
        products: [
            {
                id: 101,
                name: "Wireless Charger",
                originalPrice: 49.99,
                discountedPrice: 29.99,
                image: "/products/wireless-charger.jpg",
                discount: 40
            },
            {
                id: 102,
                name: "Bluetooth Speaker",
                originalPrice: 89.99,
                discountedPrice: 59.99,
                image: "/products/bluetooth-speaker.jpg",
                discount: 33
            }
        ]
    },
    {
        id: 2,
        name: "Bundle Deals",
        type: "bundle" as DealType,
        products: [
            {
                id: 201,
                name: "Home Office Bundle",
                items: ["Wireless Keyboard", "Mouse", "Webcam"],
                originalPrice: 199.99,
                bundlePrice: 149.99,
                image: "/products/home-office-bundle.jpg",
                savings: 50
            }
        ]
    },
    {
        id: 3,
        name: "Clearance",
        type: "clearance" as DealType,
        products: [
            {
                id: 301,
                name: "Previous Gen Smartwatch",
                originalPrice: 199.99,
                discountedPrice: 99.99,
                image: "/products/smartwatch-prev.jpg",
                discount: 50
            }
        ]
    }
];

export const categories: Category[] = [
    {
        id: 1,
        name: "Smartphones & Tablets",
        description: "Latest mobile devices and accessories",
        icon: Smartphone
    },
    {
        id: 2,
        name: "Computing",
        description: "Laptops, desktops, and components",
        icon: Cpu
    },
    {
        id: 3,
        name: "Accessories",
        description: "Essential add-ons for your devices",
        icon: Shield
    },
    {
        id: 4,
        name: "Custom Solutions",
        description: "Tailored tech solutions for your needs",
        icon: PenToolIcon
    }
];

export const serviceCategories: ServiceCategory[] = [
    {
        id: 1,
        name: "Repair Services",
        description: "Professional device repair and maintenance",
        icon: Wrench,
        services: [
            {
                id: 101,
                name: "Screen Repair",
                description: "Expert screen replacement for phones and tablets",
                price: "From $79",
                duration: "1-2 hours"
            },
            {
                id: 102,
                name: "Battery Replacement",
                description: "Restore your device's battery life",
                price: "From $49",
                duration: "30 mins"
            },
            {
                id: 103,
                name: "Water Damage Repair",
                description: "Recovery services for water-damaged devices",
                price: "From $99",
                duration: "24-48 hours"
            }
        ]
    },
    {
        id: 2,
        name: "Setup & Installation",
        description: "Expert setup and configuration services",
        icon: Zap,
        services: [
            {
                id: 201,
                name: "Smart Home Setup",
                description: "Complete smart home device installation",
                price: "From $149",
                duration: "2-3 hours"
            },
            {
                id: 202,
                name: "PC Build Service",
                description: "Custom PC assembly and testing",
                price: "From $199",
                duration: "3-4 hours"
            },
            {
                id: 203,
                name: "Network Installation",
                description: "Home or office network setup",
                price: "From $129",
                duration: "1-2 hours"
            }
        ]
    }
];

export const newArrivals: NewArrival[] = [
    {
        id: 1,
        name: "Next-Gen Gaming Console",
        description: "Experience gaming like never before with 8K support and ray tracing",
        price: 499.99,
        image: "/products/gaming-console.jpg",
        releaseDate: "2024-03-15",
        arrivalDate: "2024-03-15",
        category: "Gaming",
        preorderAvailable: true
    },
    {
        id: 2,
        name: "Smart Home Hub Pro",
        description: "Control your entire home with advanced AI capabilities",
        price: 299.99,
        image: "/products/smart-hub.jpg",
        releaseDate: "2024-03-10",
        arrivalDate: "2024-03-10",
        category: "Smart Home",
        preorderAvailable: false
    },
    {
        id: 3,
        name: "Ultra-Light Laptop",
        description: "Powerful performance in an ultra-portable design",
        price: 1299.99,
        image: "/products/laptop.jpg",
        releaseDate: "2024-03-01",
        arrivalDate: "2024-03-01",
        category: "Computing",
        preorderAvailable: true
    }
]; 