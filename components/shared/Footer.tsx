import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-orange-100 dark:bg-black text-orange-400 dark:text-orange-500 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400 dark:text-slate-700">
                            Gadgets Heaven is your one-stop shop for all things tech. We provide the latest gadgets and expert
                            services to keep you connected and up-to-date.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-400 dark:text-slate-700">123 Tech Street, Gadget City, 12345</p>
                        <p className="text-gray-400 dark:text-slate-700">Phone: (123) 456-7890</p>
                        <p className="text-gray-400 dark:text-slate-700">Email: info@gadgetsheaven.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                <Facebook />
                            </a>
                            <a href="#" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                <Twitter />
                            </a>
                            <a href="#" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                <Instagram />
                            </a>
                            <a href="#" className="text-gray-400 dark:text-slate-700 hover:text-orange-400 dark:hover:text-slate-500">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400 dark:text-slate-700">&copy; {new Date().getFullYear()} Gadgets Heaven. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

