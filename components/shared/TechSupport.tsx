import React from 'react';
import { ArrowRight, Star, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { supportOptions } from '@/data';

type SupportOption = {
    icon: LucideIcon;
    title: string;
    description: string;
    buttonText: string;
    stats: string;
    action: string;
    IconBg: LucideIcon;
    gradient: string;
}

const TechSupport = () => {


    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 
                        dark:bg-orange-950/50 text-orange-600 dark:text-orange-300 
                        rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Expert Support
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Tech Tutorials & Support
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get the help you need with our comprehensive support options
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportOptions.map((option, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-0 
                                bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                                hover:shadow-xl hover:shadow-orange-500/10 
                                transition-all duration-300"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 
                                bg-gradient-to-br opacity-20 rounded-full transition-transform 
                                group-hover:scale-150 duration-500 
                                ${option.gradient}"
                            />

                            <CardHeader className="text-center relative">
                                <div className="relative mx-auto mb-4">
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${option.gradient} 
                                        opacity-20 group-hover:opacity-30 transition-opacity blur-xl`} />
                                    <div className="relative h-20 w-20 rounded-full bg-orange-100 
                                        dark:bg-orange-900/50 flex items-center justify-center 
                                        group-hover:scale-105 transition-transform">
                                        <option.icon className="h-10 w-10 text-orange-500 
                                            dark:text-orange-400" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 
                                    group-hover:text-orange-500 dark:group-hover:text-orange-400 
                                    transition-colors">
                                    {option.title}
                                </h3>
                            </CardHeader>

                            <CardContent className="text-center relative space-y-4">
                                <p className="text-gray-600 dark:text-gray-400">
                                    {option.description}
                                </p>
                                <div className="flex items-center justify-center text-sm text-orange-500 
                                    dark:text-orange-400">
                                    <option.IconBg className="h-4 w-4 mr-2" />
                                    {option.stats}
                                </div>
                            </CardContent>

                            <CardFooter className="justify-center relative">
                                <Button
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 
                                        dark:from-orange-600 dark:to-orange-700 
                                        hover:from-orange-600 hover:to-orange-700 
                                        dark:hover:from-orange-500 dark:hover:to-orange-600 
                                        text-white border-0 group-hover:pl-6 group-hover:pr-4 
                                        transition-all"
                                >
                                    {option.buttonText}
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 
                                        group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Can&apos;t find what you&apos;re looking for?
                    </p>
                    <Button
                        variant="outline"
                        className="border-orange-200 dark:border-orange-800 
                            hover:bg-orange-50 dark:hover:bg-orange-950/50 
                            hover:text-orange-600 dark:hover:text-orange-400 
                            text-orange-500 dark:text-orange-400"
                    >
                        Contact Our Support Team
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TechSupport;