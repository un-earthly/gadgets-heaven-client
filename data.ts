import { BookOpen, Clock, FileText, HeadphonesIcon, MessageCircle, Package, PlayCircle, Smartphone, Trophy, Truck, Video, Wrench, Zap, Shield, PenToolIcon, Cpu, LucideIcon, Settings, ArrowUpCircle } from "lucide-react";

type DealType = "time-limited" | "bundle" | "clearance";

const TEST_IMAGE = "/laptop.jpg";
export type Category = {
    id: number;
    name: string;
    description: string;
    image: string;
}

export type ProductVariant = {
    id: string;
    name: string;
    value: string;
    price?: number; // Additional price for this variant
    stock: number;
    image?: string;
}

export type ProductSpecification = {
    name: string;
    value: string;
    category: string;
}

export type ProductReview = {
    id: number;
    userId: number;
    userName: string;
    userImage: string;
    rating: number;
    title: string;
    comment: string;
    date: string;
    verified: boolean;
    helpful: number;
    images?: string[];
}

export type ProductQuestion = {
    id: number;
    userId: number;
    userName: string;
    question: string;
    date: string;
    answer?: {
        text: string;
        date: string;
        answeredBy: string;
    };
}

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    brand: string;
    stock: number;
    rating: number;
    reviewCount: number;
    variants?: {
        [key: string]: ProductVariant[];
    };
    specifications: ProductSpecification[];
    features: string[];
    tags: string[];
    availability: 'in-stock' | 'out-of-stock' | 'pre-order' | 'discontinued';
    shippingInfo: {
        freeShipping: boolean;
        estimatedDays: number;
        weight: number;
    };
    warranty: string;
    returnPolicy: string;
    relatedProducts: number[];
    priceHistory?: {
        date: string;
        price: number;
    }[];
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
        description: "Latest flagship phone with advanced camera system, featuring a 108MP triple camera setup, 5G connectivity, and all-day battery life.",
        price: 999.99,
        originalPrice: 1199.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Smartphones",
        brand: "TechPro",
        stock: 15,
        rating: 4.8,
        reviewCount: 324,
        variants: {
            color: [
                { id: "black", name: "Color", value: "Midnight Black", stock: 8, image: TEST_IMAGE },
                { id: "blue", name: "Color", value: "Ocean Blue", stock: 4, image: TEST_IMAGE },
                { id: "white", name: "Color", value: "Pearl White", stock: 3, image: TEST_IMAGE }
            ],
            storage: [
                { id: "128gb", name: "Storage", value: "128GB", stock: 10 },
                { id: "256gb", name: "Storage", value: "256GB", price: 100, stock: 5 },
                { id: "512gb", name: "Storage", value: "512GB", price: 200, stock: 2 }
            ]
        },
        specifications: [
            { name: "Display", value: "6.7-inch OLED", category: "Display" },
            { name: "Processor", value: "A17 Pro Chip", category: "Performance" },
            { name: "RAM", value: "8GB", category: "Performance" },
            { name: "Camera", value: "108MP Triple Camera", category: "Camera" },
            { name: "Battery", value: "4500mAh", category: "Battery" },
            { name: "OS", value: "iOS 17", category: "Software" }
        ],
        features: [
            "5G Connectivity",
            "Wireless Charging",
            "Face ID",
            "Water Resistant (IP68)",
            "Night Mode Photography",
            "4K Video Recording"
        ],
        tags: ["flagship", "5g", "camera", "premium"],
        availability: "in-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 2,
            weight: 0.2
        },
        warranty: "1 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [2, 5, 6],
        priceHistory: [
            { date: "2024-01-01", price: 1199.99 },
            { date: "2024-02-01", price: 1099.99 },
            { date: "2024-03-01", price: 999.99 }
        ]
    },
    {
        id: 2,
        name: "Pro Gaming Laptop",
        description: "High-performance gaming laptop with RTX 4080 graphics, Intel i9 processor, and advanced cooling system for ultimate gaming experience.",
        price: 1999.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Laptops",
        brand: "GameForce",
        stock: 8,
        rating: 4.7,
        reviewCount: 156,
        variants: {
            ram: [
                { id: "16gb", name: "RAM", value: "16GB DDR5", stock: 5 },
                { id: "32gb", name: "RAM", value: "32GB DDR5", price: 300, stock: 3 }
            ],
            storage: [
                { id: "1tb", name: "Storage", value: "1TB NVMe SSD", stock: 6 },
                { id: "2tb", name: "Storage", value: "2TB NVMe SSD", price: 400, stock: 2 }
            ]
        },
        specifications: [
            { name: "Display", value: "17.3-inch 144Hz", category: "Display" },
            { name: "Processor", value: "Intel Core i9-13900H", category: "Performance" },
            { name: "Graphics", value: "NVIDIA RTX 4080", category: "Performance" },
            { name: "RAM", value: "16GB DDR5", category: "Performance" },
            { name: "Storage", value: "1TB NVMe SSD", category: "Storage" },
            { name: "Weight", value: "2.8kg", category: "Physical" }
        ],
        features: [
            "RGB Backlit Keyboard",
            "Advanced Cooling System",
            "Thunderbolt 4",
            "Wi-Fi 6E",
            "High Refresh Rate Display",
            "Premium Audio System"
        ],
        tags: ["gaming", "high-performance", "rtx", "laptop"],
        availability: "in-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 3,
            weight: 3.5
        },
        warranty: "2 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [1, 4, 3]
    },
    {
        id: 3,
        name: "Wireless Headphones",
        description: "Premium noise-cancelling headphones with 30-hour battery life, superior sound quality, and comfortable over-ear design.",
        price: 299.99,
        originalPrice: 349.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Audio",
        brand: "SoundMax",
        stock: 20,
        rating: 4.9,
        reviewCount: 892,
        variants: {
            color: [
                { id: "black", name: "Color", value: "Matte Black", stock: 12 },
                { id: "white", name: "Color", value: "Pearl White", stock: 5 },
                { id: "blue", name: "Color", value: "Navy Blue", stock: 3 }
            ]
        },
        specifications: [
            { name: "Driver Size", value: "40mm", category: "Audio" },
            { name: "Frequency Response", value: "20Hz - 20kHz", category: "Audio" },
            { name: "Battery Life", value: "30 hours", category: "Battery" },
            { name: "Charging Time", value: "2 hours", category: "Battery" },
            { name: "Weight", value: "250g", category: "Physical" },
            { name: "Connectivity", value: "Bluetooth 5.2", category: "Connectivity" }
        ],
        features: [
            "Active Noise Cancellation",
            "Quick Charge (5min = 2hrs)",
            "Multi-device Pairing",
            "Touch Controls",
            "Voice Assistant Support",
            "Foldable Design"
        ],
        tags: ["wireless", "noise-cancelling", "premium", "audio"],
        availability: "in-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 1,
            weight: 0.5
        },
        warranty: "2 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [6, 1, 5]
    },
    {
        id: 4,
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support, ray tracing, and exclusive game library. Experience gaming like never before.",
        price: 499.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Gaming",
        brand: "PlayMax",
        stock: 5,
        rating: 4.6,
        reviewCount: 1247,
        variants: {
            storage: [
                { id: "500gb", name: "Storage", value: "500GB SSD", stock: 3 },
                { id: "1tb", name: "Storage", value: "1TB SSD", price: 100, stock: 2 }
            ]
        },
        specifications: [
            { name: "CPU", value: "Custom 8-core AMD Zen 2", category: "Performance" },
            { name: "GPU", value: "Custom RDNA 2", category: "Performance" },
            { name: "RAM", value: "16GB GDDR6", category: "Performance" },
            { name: "Storage", value: "500GB NVMe SSD", category: "Storage" },
            { name: "Resolution", value: "Up to 4K", category: "Display" },
            { name: "Frame Rate", value: "Up to 120fps", category: "Display" }
        ],
        features: [
            "4K Gaming",
            "Ray Tracing",
            "120fps Support",
            "Backward Compatibility",
            "Quick Resume",
            "Smart Delivery"
        ],
        tags: ["gaming", "console", "4k", "next-gen"],
        availability: "in-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 2,
            weight: 4.2
        },
        warranty: "1 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [2, 1, 6]
    },
    {
        id: 5,
        name: "Smart Watch",
        description: "Advanced fitness tracking and notifications with heart rate monitoring, GPS, and 7-day battery life.",
        price: 249.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Wearables",
        brand: "FitTech",
        stock: 12,
        rating: 4.5,
        reviewCount: 567,
        variants: {
            size: [
                { id: "40mm", name: "Size", value: "40mm", stock: 7 },
                { id: "44mm", name: "Size", value: "44mm", stock: 5 }
            ],
            band: [
                { id: "sport", name: "Band", value: "Sport Band", stock: 8 },
                { id: "leather", name: "Band", value: "Leather Band", price: 50, stock: 4 }
            ]
        },
        specifications: [
            { name: "Display", value: "1.4-inch AMOLED", category: "Display" },
            { name: "Battery Life", value: "7 days", category: "Battery" },
            { name: "Water Resistance", value: "5ATM", category: "Durability" },
            { name: "Sensors", value: "Heart Rate, GPS, Accelerometer", category: "Health" },
            { name: "Connectivity", value: "Bluetooth 5.0, Wi-Fi", category: "Connectivity" },
            { name: "Weight", value: "45g", category: "Physical" }
        ],
        features: [
            "Heart Rate Monitoring",
            "GPS Tracking",
            "Sleep Tracking",
            "Workout Detection",
            "Smart Notifications",
            "Water Resistant"
        ],
        tags: ["smartwatch", "fitness", "health", "wearable"],
        availability: "in-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 2,
            weight: 0.1
        },
        warranty: "1 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [1, 3, 6]
    },
    {
        id: 6,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with long battery life, premium sound quality, and comfortable fit for all-day wear.",
        price: 159.99,
        images: [TEST_IMAGE, TEST_IMAGE, TEST_IMAGE],
        category: "Audio",
        brand: "SoundMax",
        stock: 0,
        rating: 4.4,
        reviewCount: 423,
        variants: {
            color: [
                { id: "black", name: "Color", value: "Midnight Black", stock: 0 },
                { id: "white", name: "Color", value: "Pearl White", stock: 0 }
            ]
        },
        specifications: [
            { name: "Driver Size", value: "12mm", category: "Audio" },
            { name: "Battery Life", value: "8hrs + 24hrs case", category: "Battery" },
            { name: "Charging", value: "USB-C + Wireless", category: "Battery" },
            { name: "Water Resistance", value: "IPX4", category: "Durability" },
            { name: "Connectivity", value: "Bluetooth 5.2", category: "Connectivity" },
            { name: "Weight", value: "5g each", category: "Physical" }
        ],
        features: [
            "True Wireless",
            "Active Noise Cancellation",
            "Transparency Mode",
            "Touch Controls",
            "Wireless Charging Case",
            "Voice Assistant Support"
        ],
        tags: ["wireless", "earbuds", "portable", "audio"],
        availability: "out-of-stock",
        shippingInfo: {
            freeShipping: true,
            estimatedDays: 5,
            weight: 0.1
        },
        warranty: "1 Year Limited Warranty",
        returnPolicy: "30-day return policy",
        relatedProducts: [3, 1, 5]
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
        rating: 4.8,
        category: "Audio",
        stock: 15
    },
    {
        id: 2,
        name: "Smart Home Hub",
        description: "Control all your smart devices",
        image: "/smart-watch.png",
        tag: "Popular Picks",
        match: "95% Match",
        price: 149.99,
        rating: 4.5,
        category: "Smart Home",
        stock: 8
    },
    {
        id: 3,
        name: "Fitness Tracker",
        description: "Track your health and workouts",
        image: "/smart-watch.png",
        tag: "Just for You",
        match: "92% Match",
        price: 89.99,
        rating: 4.6,
        category: "Wearables",
        stock: 20
    },
    {
        id: 4,
        name: "Portable Charger",
        description: "20000mAh, fast charging",
        image: "/smart-watch.png",
        tag: "Trending Now",
        match: "90% Match",
        price: 49.99,
        rating: 4.7,
        category: "Accessories",
        stock: 0
    },
];

export const services = [
    {
        id: "1",
        icon: Wrench,
        title: "Repair Services",
        description: "Professional repair services for all your gadgets",
        link: "/services/repair",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        id: "2",
        icon: Settings,
        title: "Maintenance",
        description: "Regular maintenance to keep your devices running smoothly",
        link: "/services/maintenance",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        id: "3",
        icon: ArrowUpCircle,
        title: "Upgrades",
        description: "Hardware and software upgrades for better performance",
        link: "/services/upgrade",
        gradient: "from-orange-500 to-orange-600"
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
        buttonText: "Join Waitlist",
        link: "/waitlist"
    },
    {
        title: "VR Setup Workshop",
        icon: "🥽",
        description: "Learn how to set up and optimize your VR system.",
        status: "Registration Open",
        availableFrom: "April 2025",
        stats: "2 Hour Session",
        buttonText: "Register Now",
        link: "/events/register"
    },
    {
        title: "Smart Home Integration",
        icon: "🏠",
        description: "Connect all your smart devices seamlessly.",
        status: "Beta Testing",
        availableFrom: "May 2025",
        stats: "Full Setup",
        buttonText: "Learn More",
        link: "/services/smart-home-integration"
    },
    {
        title: "Tech Recycling Program",
        icon: "♻️",
        description: "Responsibly dispose of your old gadgets.",
        status: "Coming Soon",
        availableFrom: "June 2025",
        stats: "Free Service",
        buttonText: "Get Notified",
        link: "/events/register"
    },
    {
        title: "Custom PC Building",
        icon: "🖥️",
        description: "Design and build your dream gaming rig.",
        status: "Waitlist Open",
        availableFrom: "July 2025",
        stats: "Custom Build",
        buttonText: "Join Waitlist",
        link: "/waitlist"
    }
];

export type Deal = {
    id: number;
    name: string;
    type: DealType;
    endsAt: string;
    products: Product[];
    bundles?: {
        id: number;
        name: string;
        items: string[];
        originalPrice: number;
        bundlePrice: number;
        savings: number;
    }[]; // Optional for non-bundle deals
};

export const deals: Deal[] = [
    {
        id: 1,
        name: "Flash Sale",
        type: "time-limited",
        endsAt: "2025-09-30T23:59:59Z",
        products: [
            {
                id: 101,
                name: "Smartphone X",
                description: "Latest model with advanced features",
                price: 699,
                originalPrice: 799,
                images: [TEST_IMAGE],
                category: "Electronics",
                brand: "BrandX",
                stock: 50,
                rating: 4.5,
                reviewCount: 120,
                specifications: [],
                features: ["5G", "128GB Storage"],
                tags: ["smartphone", "electronics"],
                availability: "in-stock",
                shippingInfo: {
                    freeShipping: true,
                    estimatedDays: 3,
                    weight: 0.5,
                },
                warranty: "1 Year Limited Warranty",
                returnPolicy: "30-day return policy",
                relatedProducts: [],
            },
        ],
    },
    {
        id: 2,
        name: "Bundle Deals",
        type: "bundle",
        endsAt: "2025-10-15T23:59:59Z",
        products: [],
        bundles: [
            {
                id: 201,
                name: "Home Office Setup",
                items: ["Desk", "Chair", "Lamp"],
                originalPrice: 500,
                bundlePrice: 400,
                savings: 100,
            },
        ],
    },
    {
        id: 3,
        name: "Clearance Sale",
        type: "clearance",
        endsAt: "2025-09-25T23:59:59Z",
        products: [
            {
                id: 301,
                name: "Old Model Laptop",
                description: "Clearance sale - limited stock available",
                price: 299,
                originalPrice: 499,
                images: [TEST_IMAGE],
                category: "Computers",
                brand: "BrandY",
                stock: 5,
                rating: 4.2,
                reviewCount: 80,
                specifications: [],
                features: ["Clearance", "Limited Stock"],
                tags: ["laptop", "clearance"],
                availability: "in-stock",
                shippingInfo: {
                    freeShipping: true,
                    estimatedDays: 5,
                    weight: 2,
                },
                warranty: "No Warranty",
                returnPolicy: "Final sale - no returns",
                relatedProducts: [],
            },
        ],
    },
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

// Product-specific reviews
export const productReviews: { [productId: number]: ProductReview[] } = {
    1: [
        {
            id: 1,
            userId: 101,
            userName: "Alex Johnson",
            userImage: "/men.jpg",
            rating: 5,
            title: "Amazing camera quality!",
            comment: "The camera on this phone is incredible. Night mode photos look professional, and the zoom quality is outstanding. Battery lasts all day even with heavy usage.",
            date: "2024-03-15",
            verified: true,
            helpful: 24,
            images: ["/review1.jpg", "/review2.jpg"]
        },
        {
            id: 2,
            userId: 102,
            userName: "Sarah Chen",
            userImage: "/women.jpg",
            rating: 4,
            title: "Great phone, minor issues",
            comment: "Love the display and performance. Only complaint is it gets a bit warm during gaming sessions. Overall very satisfied with the purchase.",
            date: "2024-03-10",
            verified: true,
            helpful: 18
        }
    ],
    3: [
        {
            id: 3,
            userId: 103,
            userName: "Mike Wilson",
            userImage: "/men.jpg",
            rating: 5,
            title: "Best headphones I've owned",
            comment: "The noise cancellation is phenomenal. I can work in complete silence even in a busy office. Sound quality is crisp and bass is perfect.",
            date: "2024-03-12",
            verified: true,
            helpful: 32
        }
    ]
};

// Product Q&A
export const productQuestions: { [productId: number]: ProductQuestion[] } = {
    1: [
        {
            id: 1,
            userId: 201,
            userName: "David Kim",
            question: "Does this phone support wireless charging?",
            date: "2024-03-14",
            answer: {
                text: "Yes, it supports both wireless charging and reverse wireless charging for other devices.",
                date: "2024-03-14",
                answeredBy: "TechPro Support"
            }
        },
        {
            id: 2,
            userId: 202,
            userName: "Lisa Park",
            question: "What's the difference between the 128GB and 256GB models?",
            date: "2024-03-13",
            answer: {
                text: "The main difference is storage capacity. Both models have the same performance, camera, and features. The 256GB model is better if you take lots of photos/videos or download many apps.",
                date: "2024-03-13",
                answeredBy: "TechPro Support"
            }
        }
    ],
    2: [
        {
            id: 3,
            userId: 203,
            userName: "Gaming Pro",
            question: "Can this laptop run the latest AAA games at max settings?",
            date: "2024-03-11",
            answer: {
                text: "Yes, with the RTX 4080 and i9 processor, this laptop can handle all current AAA games at maximum settings in 1440p, and most games at high settings in 4K.",
                date: "2024-03-11",
                answeredBy: "GameForce Support"
            }
        }
    ]
};

export const reviews = [
    {
        id: 1,
        customerName: "Emily Chen",
        customerImage: "/women.jpg",
        productName: "Sony WH-1000XM4",
        productImage: "/smart-watch.png",
        productType: "Product",
        rating: 5,
        review: "These headphones are absolutely amazing! The noise cancellation is top-notch, and the sound quality is incredible. Battery life exceeds expectations, lasting well over 30 hours. The companion app offers great customization options.",
        purchaseDate: "2024-03-15",
        verifiedPurchase: true,
        helpfulVotes: 24,
        category: "Audio",
        price: 349.99
    },
    {
        id: 2,
        customerName: "James Wilson",
        customerImage: "/men.jpg",
        productName: "iPhone Screen Repair",
        productImage: "/smart-watch.png",
        productType: "Service",
        rating: 4,
        review: "Quick and professional service. My iPhone screen was replaced within 2 hours. The technician was knowledgeable and explained the process. Only giving 4 stars because the price was a bit high, but the quality is undeniable.",
        purchaseDate: "2024-03-10",
        verifiedPurchase: true,
        helpfulVotes: 12,
        category: "Repair Services",
        price: 199.99
    },
    {
        id: 3,
        customerName: "Sarah Miller",
        customerImage: "/women.jpg",
        productName: "MacBook Pro M3",
        productImage: "/smart-watch.png",
        productType: "Product",
        rating: 5,
        review: "The M3 MacBook Pro is a powerhouse! As a video editor, the performance is mind-blowing. Projects that used to take hours now render in minutes. The display is gorgeous, and the battery life is exceptional.",
        purchaseDate: "2024-03-08",
        verifiedPurchase: true,
        helpfulVotes: 18,
        category: "Laptops",
        price: 1999.99
    },
    {
        id: 4,
        customerName: "Michael Brown",
        customerImage: "/men.jpg",
        productName: "Smart Home Installation",
        productImage: "/smart-watch.png",
        productType: "Service",
        rating: 5,
        review: "Professional installation of my entire smart home system. The team was punctual, knowledgeable, and helped me understand how to use everything. They even helped me set up all my automations. Excellent service!",
        purchaseDate: "2024-03-05",
        verifiedPurchase: true,
        helpfulVotes: 15,
        category: "Installation Services",
        price: 499.99
    },
    {
        id: 5,
        customerName: "Lisa Zhang",
        customerImage: "/women.jpg",
        productName: "iPad Pro 12.9",
        productImage: "/smart-watch.png",
        productType: "Product",
        rating: 4,
        review: "The iPad Pro is fantastic for digital art and note-taking. The M2 chip handles everything I throw at it with ease. The only minor complaint is the price, but the quality justifies it. The display is absolutely stunning.",
        purchaseDate: "2024-03-01",
        verifiedPurchase: true,
        helpfulVotes: 21,
        category: "Tablets",
        price: 1099.99
    }
]