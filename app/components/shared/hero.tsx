import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section
            className="relative h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/computer-laptop-mobile-phone-digital-tablet-pc-yellow-office-desk-banner_118047-5431.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* <div className="container ml-auto z-10 text-right pr-32 ">
                <p className="text-white -mb-2">Welcome to</p>
                <h1 className="text-4xl md:text-6xl font-bold text-orange-400 mb-8">Gadgets Heaven</h1>
                <p className="text-lg md:text-xl text-orange-200">Your One-Stop Gadgets Shop & Service Hub</p>
                <p className="md:text-lg text-white">
                    Shop the latest gadgets or get expert services like installation, repair, and more.
                </p>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/shop">Shop Now</Link>
                </Button>
            </div> */}
            <div className="container ml-auto z-10 text-right pr-32">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="inline-block text-orange-200 text-lg font-medium">Discover the Future Today</span>
                        <h1 className="text-5xl md:text-7xl font-bold">
                            <span className="text-white">Welcome to</span>
                            <br />
                            <span className="text-orange-400">Gadgets Heaven</span>
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl text-orange-200 font-medium">
                            Your Premier Tech Paradise
                        </p>
                        <div className="space-y-2">
                            <p className="text-lg text-white/90">
                                Experience cutting-edge technology with our curated collection of premium gadgets
                            </p>
                            <p className="text-lg text-white/80">
                                Expert installation • Professional repairs • 24/7 tech support
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end space-x-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8"
                        >
                            <Link href="/shop">Explore Now</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-orange-100 text-orange-600 hover:bg-orange-200/10"
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

