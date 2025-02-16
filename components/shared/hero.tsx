import Link from "next/link"
import { Button } from "../ui/button"

const Hero = () => {
    return (
        <section
            className="relative min-h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/computer-laptop-mobile-phone-digital-tablet-pc-yellow-office-desk-banner_118047-5431.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 dark:bg-opacity-95"></div>
            <div className="mx-auto container z-10">
                <div className="max-w-full md:max-w-[80%] lg:max-w-[70%] ml-auto text-center md:text-right space-y-4 md:space-y-6">
                    <div className="space-y-2">
                        <span className="inline-block text-orange-200 dark:text-orange-300 text-base md:text-lg font-medium">
                            Discover the Future Today
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                            <span className="text-white dark:text-gray-100">Welcome to</span>
                            <br className="hidden md:block" />
                            <span className="text-orange-400 dark:text-orange-300">Gadgets Heaven</span>
                        </h1>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        <p className="text-lg sm:text-xl md:text-2xl text-orange-200 dark:text-orange-300 font-medium">
                            Your Premier Tech Paradise
                        </p>
                        <div className="space-y-2">
                            <p className="text-base md:text-lg text-white/90 dark:text-gray-200">
                                Experience cutting-edge technology with our curated collection of premium gadgets
                            </p>
                            <p className="text-base md:text-lg text-white/80 dark:text-gray-300">
                                Expert installation • Professional repairs • 24/7 tech support
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium px-6 md:px-8"
                        >
                            <Link href="/shop">Explore Now</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto bg-orange-100 dark:bg-transparent text-orange-600 dark:text-orange-300 hover:bg-orange-200/10 dark:hover:bg-orange-950/50 border-orange-500 dark:border-orange-600"
                        >
                            <Link href="/services">Our Services</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero