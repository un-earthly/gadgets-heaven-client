import { BookOpen, Clock, FileText, HeadphonesIcon, MessageCircle, Package, PlayCircle, Smartphone, Trophy, Truck, Video, Wrench } from "lucide-react";

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
]

export
        const products = [
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


export
        const upcomingServices = [
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
                        stats: "Premium Service",
                        buttonText: "Join Waitlist"
                },
        ]