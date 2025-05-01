import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../ui/button"

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-white to-orange-50 dark:from-zinc-950 dark:to-black border-t">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#ffa50010,transparent)]" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">About Us</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Gadgets Heaven is your one-stop shop for all things tech. We provide the latest gadgets and expert
                            services to keep you connected and up-to-date.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About Us", "Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 
                                            dark:hover:text-orange-300 transition-colors duration-200"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">Contact Us</h3>
                        <ul className="space-y-3">
                            {[
                                { icon: MapPin, text: "123 Tech Street, Gadget City, 12345" },
                                { icon: Phone, text: "(123) 456-7890" },
                                { icon: Mail, text: "info@gadgetsheaven.com" }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                    <item.icon className="h-4 w-4 text-orange-500" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">Follow Us</h3>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-orange-100 dark:hover:bg-orange-950/50 
                                        text-zinc-600 dark:text-zinc-400 hover:text-orange-500 
                                        dark:hover:text-orange-300"
                                >
                                    <Icon className="h-5 w-5" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} Gadgets Heaven. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

