import React from 'react';
import { Video, FileText, MessageCircle, ArrowRight, PlayCircle, BookOpen, HeadphonesIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";

const TechSupport = () => {
    const supportOptions = [
        {
            icon: Video,
            title: "Video Tutorials",
            description: "Learn how to set up and use your new gadgets with our easy-to-follow video tutorials.",
            buttonText: "Watch Tutorials",
            stats: "500+ tutorials",
            action: "/tutorials",
            IconBg: PlayCircle
        },
        {
            icon: FileText,
            title: "Troubleshooting Guides",
            description: "Find solutions to common tech issues with our comprehensive troubleshooting guides.",
            buttonText: "View Guides",
            stats: "1000+ articles",
            action: "/guides",
            IconBg: BookOpen
        },
        {
            icon: MessageCircle,
            title: "Live Chat Support",
            description: "Get real-time assistance from our expert support team through our live chat service.",
            buttonText: "Start Chat",
            stats: "24/7 support",
            action: "/chat",
            IconBg: HeadphonesIcon
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-orange-500 font-medium">Need Help?</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Tech Tutorials & Support
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get the help you need with our comprehensive support options
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportOptions.map((option, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-orange-100 rounded-full opacity-50 transition-transform group-hover:scale-150 duration-500" />

                            <CardHeader className="text-center relative">
                                <div className="rounded-full bg-orange-100 w-20 h-20 mx-auto flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                                    <option.icon className="h-10 w-10 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold">{option.title}</h3>
                            </CardHeader>

                            <CardContent className="text-center relative space-y-4">
                                <p className="text-gray-600">
                                    {option.description}
                                </p>
                                <div className="flex items-center justify-center text-sm text-orange-500">
                                    <option.IconBg className="h-4 w-4 mr-2" />
                                    {option.stats}
                                </div>
                            </CardContent>

                            <CardFooter className="justify-center relative">
                                <Button
                                    className="bg-orange-500 hover:bg-orange-600 text-white group-hover:pl-6 group-hover:pr-4 transition-all"
                                >
                                    {option.buttonText}
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Can&apos;t find what you&apos;re looking for?
                    </p>
                    <Button
                        variant="outline"
                        className="hover:bg-orange-50 hover:text-orange-600"
                    >
                        Contact Our Support Team
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TechSupport;