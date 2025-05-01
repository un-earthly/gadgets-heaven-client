import React from 'react';
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { recommendations } from '@/data';


const PersonalizedRecommendations = () => {
    return (
        <section className="py-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 
                        dark:bg-orange-950/50 text-orange-600 dark:text-orange-300 
                        rounded-full text-sm font-medium">
                        <Sparkles className="h-4 w-4" />
                        Tailored for You
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Personalized Recommendations
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover products handpicked based on your preferences and browsing history
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendations.map((product) => (
                        <Card
                            key={product.id}
                            className="group relative overflow-hidden border-0 
                                bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                                hover:shadow-xl hover:shadow-orange-500/10 
                                transition-all duration-300"
                        >
                            <CardHeader className="pt-8">
                                <div className="relative">
                                    {/* Product Image Container */}
                                    <div className="relative h-48 flex items-center justify-center 
                                        before:absolute before:inset-0 before:bg-gradient-to-t 
                                        before:from-transparent before:to-orange-50/20 
                                        dark:before:to-orange-950/10 before:rounded-2xl">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                            className="object-contain group-hover:scale-110 
                                                transition-transform duration-500 ease-out"
                                        />
                                    </div>
                                    {/* Tag Badge */}
                                    <Badge
                                        className="absolute top-2 right-2 bg-gradient-to-r 
                                            from-orange-500 to-orange-600 dark:from-orange-600 
                                            dark:to-orange-700 text-white border-0"
                                    >
                                        {product.tag}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 
                                            dark:text-gray-100 group-hover:text-orange-600 
                                            dark:group-hover:text-orange-400 transition-colors">
                                            {product.name}
                                        </h3>
                                        <Badge variant="outline"
                                            className="bg-green-50 dark:bg-green-950/30 
                                            text-green-700 dark:text-green-400 
                                            border-green-200 dark:border-green-800 shrink-0">
                                            {product.match}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r 
                                        from-orange-600 to-orange-500 dark:from-orange-400 
                                        dark:to-orange-300 bg-clip-text text-transparent">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <Star className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                        hover:text-orange-600 dark:hover:text-orange-400 
                                        transition-all duration-300"
                                >
                                    <Link href={`/product/${product.id}`}
                                        className="flex items-center justify-between">
                                        View Details
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                        className="bg-white/50 dark:bg-zinc-900/50 hover:bg-orange-50 
                            dark:hover:bg-orange-950/50 hover:text-orange-600 
                            dark:hover:text-orange-400 border-orange-200 
                            dark:border-orange-800/30 transition-all duration-300"
                    >
                        <Link href="/recommendations" className="flex items-center gap-2">
                            View All Recommendations
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PersonalizedRecommendations;