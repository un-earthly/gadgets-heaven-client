import { BookOpen, Clock, FileText, HeadphonesIcon, MessageCircle, Package, PlayCircle, Smartphone, Trophy, Truck, Video, Wrench, Zap, Shield, PenToolIcon, Cpu, LucideIcon } from "lucide-react";

type DealType = "time-limited" | "bundle" | "clearance";

const TEST_IMAGE = "/laptop.jpg";
export type Category = {
    id: number;
    name: string;
    description: string;
    image: string;
}

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    stock: number;
}

type Service = {
    id: number;
    name: string;
    description: string;
    price: string;
    duration: string;
    icon: LucideIcon;
}

type ServiceCategory = {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    services: Service[];
    gradient: string;
}

export type NewArrival = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
}

export type NewArrivalsData = {
    featured: NewArrival[];
    latest: NewArrival[];
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


export const categories: Category[] = [
    {
        id: 1,
        name: "Smartphones",
        description: "Latest mobile devices",
        image: TEST_IMAGE
    },
    {
        id: 2,
        name: "Laptops",
        description: "Powerful computing",
        image: TEST_IMAGE
    },
    {
        id: 3,
        name: "Audio",
        description: "Premium sound",
        image: TEST_IMAGE
    },
    {
        id: 4,
        name: "Gaming",
        description: "Gaming gear",
        image: TEST_IMAGE
    }
];

export const products: Product[] = [
    {
        id: 1,
        name: "Ultra HD Smartphone",
        description: "Latest flagship phone with advanced camera system",
        price: 999.99,
        image: TEST_IMAGE,
        category: "Smartphones",
        stock: 15
    },
    {
        id: 2,
        name: "Pro Gaming Laptop",
        description: "High-performance gaming laptop with RTX graphics",
        price: 1999.99,
        image: TEST_IMAGE,
        category: "Laptops",
        stock: 8
    },
    {
        id: 3,
        name: "Wireless Headphones",
        description: "Premium noise-cancelling headphones",
        price: 299.99,
        image: TEST_IMAGE,
        category: "Audio",
        stock: 20
    },
    {
        id: 4,
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support",
        price: 499.99,
        image: TEST_IMAGE,
        category: "Gaming",
        stock: 5
    },
    {
        id: 5,
        name: "Smart Watch",
        description: "Advanced fitness tracking and notifications",
        price: 249.99,
        image: TEST_IMAGE,
        category: "Wearables",
        stock: 12
    },
    {
        id: 6,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with long battery life",
        price: 159.99,
        image: TEST_IMAGE,
        category: "Audio",
        stock: 0
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
                image: TEST_IMAGE,
                discount: 40
            },
            {
                id: 102,
                name: "Bluetooth Speaker",
                originalPrice: 89.99,
                discountedPrice: 59.99,
                image: TEST_IMAGE,
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
                image: TEST_IMAGE,
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
                image: TEST_IMAGE,
                discount: 50
            }
        ]
    }
];

export const serviceCategories = [
    {
        id: 1,
        name: "Repairs & Maintenance",
        description: "Professional repair services for all your devices",
        icon: Wrench,
        gradient: "from-orange-500 to-orange-600",
        services: [
            {
                id: 1,
                name: "Phone Screen Repair",
                description: "Professional screen replacement service",
                price: "$99",
                duration: "1-2 hours",
                icon: Smartphone
            },
            {
                id: 2,
                name: "Laptop Repair",
                description: "Hardware and software repairs",
                price: "$149",
                duration: "24-48 hours",
                icon: Cpu
            },
            {
                id: 3,
                name: "Data Recovery",
                description: "Recover lost or deleted data",
                price: "$199",
                duration: "2-3 days",
                icon: Shield
            }
        ]
    },
    {
        id: 2,
        name: "Installation & Setup",
        description: "Expert installation services for your tech",
        icon: PenToolIcon,
        gradient: "from-orange-400 to-orange-500",
        services: [
            {
                id: 4,
                name: "Smart Home Setup",
                description: "Complete smart home installation",
                price: "$299",
                duration: "4-6 hours",
                icon: Zap
            },
            {
                id: 5,
                name: "Network Installation",
                description: "Home or office network setup",
                price: "$199",
                duration: "2-3 hours",
                icon: Shield
            },
            {
                id: 6,
                name: "Security System",
                description: "Security camera installation",
                price: "$399",
                duration: "4-5 hours",
                icon: Shield
            }
        ]
    }
];

export const newArrivals: NewArrivalsData = {
    featured: [
        {
            id: 1,
            name: "Next-Gen Gaming Console",
            description: "Experience gaming like never before with our latest console featuring 8K graphics and ray tracing",
            price: 499.99,
            image: TEST_IMAGE,
            rating: 4.9
        },
        {
            id: 2,
            name: "Smart Home Hub Pro",
            description: "Control your entire home with this advanced AI-powered hub",
            price: 299.99,
            image: TEST_IMAGE,
            rating: 4.7
        },
        {
            id: 3,
            name: "Pro Wireless Earbuds",
            description: "Premium sound quality with active noise cancellation",
            price: 199.99,
            image: TEST_IMAGE,
            rating: 4.8
        }
    ],
    latest: [
        {
            id: 4,
            name: "4K Drone Camera",
            description: "Capture stunning aerial footage with this lightweight drone",
            price: 699.99,
            image: TEST_IMAGE,
            rating: 4.6
        },
        {
            id: 5,
            name: "Smart Watch Series X",
            description: "Track your health and stay connected with our latest smartwatch",
            price: 349.99,
            image: TEST_IMAGE,
            rating: 4.5
        },
        {
            id: 6,
            name: "Portable Power Bank",
            description: "Fast charging with 20000mAh capacity",
            price: 49.99,
            image: TEST_IMAGE,
            rating: 4.7
        },
        {
            id: 7,
            name: "Wireless Gaming Mouse",
            description: "Ultra-responsive with RGB lighting",
            price: 79.99,
            image: TEST_IMAGE,
            rating: 4.8
        }
    ]
} 