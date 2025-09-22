"use client"
import Link from "next/link"
import Image from "next/image"
import * as motion from "motion/react-client"
import { Sparkles, ShoppingCart, Wrench, ArrowRight } from "lucide-react"
import { stats } from "@/data"
import { DimmedButtonWithArrowLink } from "./DimmedButton"
import HighlightButton from "./HighlightButton"

const Hero = () => {


    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990020,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_50%,#ff990008,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50020,transparent)] dark:bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50008,transparent)]" />
            </div>

            <div className="container mx-auto px-4 h-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 h-full items-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <div className="space-y-2">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 dark:bg-orange-950/50 
                                text-orange-600 dark:text-orange-300 rounded-full text-sm font-medium"
                            >
                                <Sparkles className="w-4 h-4" />
                                Next-Gen Tech Paradise
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}

                                className="text-4xl md:text-5xl lg:text-6xl font-bold 
                                    bg-clip-text text-transparent 
                                    bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
                                    dark:from-orange-400 dark:via-orange-300 dark:to-orange-200 
                                    transition-all duration-300"
                            >
                                Transform Your Digital Lifestyle
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 flex items-center gap-2 justify-center lg:justify-start"
                        >
                            Discover cutting-edge gadgets and smart solutions that seamlessly
                            integrate into your life. Experience the future of technology, today.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <HighlightButton size="lg" isDisabled={false}>
                                <ShoppingCart className="w-5 h-5" />
                                <Link href="/products">Explore Products</Link>
                                <ArrowRight className="w-4 h-4" />
                            </HighlightButton>
                            <DimmedButtonWithArrowLink>
                                <Wrench className="w-5 h-5" />
                                <Link href="/services">View Services</Link>
                                <ArrowRight className="w-4 h-4" />
                            </DimmedButtonWithArrowLink>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 pt-12"
                        >
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ y: 20 }}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 
                                              backdrop-blur-sm border border-orange-100/20 dark:border-orange-900/20 
                                              shadow-lg shadow-orange-100/20 dark:shadow-orange-900/20"
                                >
                                    <div className="absolute -top-4 left-6">
                                        <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.gradient} ${stat.darkGradient}`}>
                                            <stat.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center pt-2">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 
                                                       dark:from-orange-400 dark:to-orange-200 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                                            {stat.label}
                                        </div>
                                        <div className="mt-2 h-1 w-12 mx-auto rounded-full 
                                                       bg-gradient-to-r from-orange-500/50 to-orange-300/50" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative h-[600px] w-full">
                            <Image
                                src="/laptop.jpg"
                                alt="Latest gadgets and devices"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="absolute -z-10 inset-0">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-300/20 dark:bg-orange-800/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero