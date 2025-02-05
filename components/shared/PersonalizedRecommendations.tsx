import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Sparkles, ArrowRight } from 'lucide-react';

const recommendations = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise-cancelling, 30-hour battery life",
        image: "https://techterms.com/img/xl/laptop_586.png",
        tag: "Trending Now",
        match: "98% Match",
        price: 199.99,
    },
    {
        id: 2,
        name: "Smart Home Hub",
        description: "Control all your smart devices",
        image: "https://techterms.com/img/xl/laptop_586.png",
        tag: "Popular Picks",
        match: "95% Match",
        price: 149.99,
    },
    {
        id: 3,
        name: "Fitness Tracker",
        description: "Track your health and workouts",
        image: "https://techterms.com/img/xl/laptop_586.png",
        tag: "Just for You",
        match: "92% Match",
        price: 89.99,
    },
    {
        id: 4,
        name: "Portable Charger",
        description: "20000mAh, fast charging",
        image: "https://techterms.com/img/xl/laptop_586.png",
        tag: "Trending Now",
        match: "90% Match",
        price: 49.99,
    },
];

const PersonalizedRecommendations = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-6 w-6 text-orange-500" />
                        <span className="text-orange-500 font-medium">Tailored for You</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Personalized Recommendations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover products handpicked based on your preferences and browsing history
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendations.map((product) => (
                        <Card
                            key={product.id}
                            className="group relative bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <CardHeader className="pt-8">
                                <div className="relative">
                                    <div className="h-48 flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <Badge
                                        className="absolute top-0 right-0 bg-orange-500 hover:bg-orange-600"
                                    >
                                        {product.tag}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-semibold">{product.name}</h3>
                                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                            {product.match}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-600">{product.description}</p>
                                </div>
                                <div className="font-semibold text-lg text-orange-500">
                                    ${product.price.toFixed(2)}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full hover:bg-orange-50 hover:text-orange-600"
                                >
                                    <Link href={`/product/${product.id}`} className="flex items-center justify-between">
                                        View Details
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        asChild
                        variant="outline"
                        className="hover:bg-orange-50 hover:text-orange-600"
                    >
                        <Link href="/recommendations">
                            View All Recommendations
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PersonalizedRecommendations;