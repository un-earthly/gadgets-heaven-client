import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { services } from '@/data';


const AvailableServices = () => {
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
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                        dark:from-orange-400 dark:via-orange-300 dark:to-orange-200">
                        Our Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive support for all your tech needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-0 
                                bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                                hover:shadow-xl hover:shadow-orange-500/10 
                                transition-all duration-300"
                        >
                            {/* Static decorative background circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 
                                bg-orange-100 dark:bg-orange-900/20 rounded-full opacity-50" />

                            <CardHeader className="relative">
                                <div className="relative mx-auto h-20 w-20 mb-4">
                                    {/* Static gradient background */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.gradient} 
                                        opacity-20 transition-opacity`} />
                                    <div className="relative h-full w-full rounded-full bg-orange-100 
                                        dark:bg-orange-900/50 flex items-center justify-center">
                                        {/* Animated icon */}
                                        <service.icon className="h-10 w-10 text-orange-500 
                                            dark:text-orange-400 transform group-hover:scale-125 
                                            transition-transform duration-300 ease-out" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 
                                    text-center group-hover:text-orange-500 
                                    dark:group-hover:text-orange-400 transition-colors">
                                    {service.title}
                                </h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400 text-center">
                                    {service.description}
                                </p>
                            </CardContent>

                            <CardFooter className="justify-center">
                                <Button
                                    variant="ghost"
                                    className="group/btn hover:bg-orange-50 dark:hover:bg-orange-950/50 
                                        text-orange-600 dark:text-orange-400 hover:text-orange-700 
                                        dark:hover:text-orange-300"
                                    asChild
                                >
                                    <Link href={service.link} className="flex items-center gap-2">
                                        Learn more
                                        <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AvailableServices
