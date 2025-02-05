import { Truck, Smartphone, Wrench, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';


const services = [
    {
        icon: Truck,
        title: "Delivery & Shipping",
        description: "Quick delivery options like same-day shipping or free delivery on orders over $100.",
        link: "/delivery"
    },
    {
        icon: Smartphone,
        title: "Gadget Customization",
        description: "Personalization services (engraving, bundle options).",
        link: "/customization"
    },
    {
        icon: Wrench,
        title: "Expert Installation",
        description: "Set-up assistance for home tech systems.",
        link: "/installation"
    }
];
const AvailableServices = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-orange-500 font-medium">What We Offer</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive support for all your tech needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-lg transition-shadow border-none bg-white/50 backdrop-blur-sm"
                        >
                            <CardHeader>
                                <div className="mx-auto h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                    <service.icon className="h-10 w-10 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <Button variant="link" className="text-orange-500 hover:text-orange-600" asChild>
                                    <Link href={service.link}>
                                        Learn more <ExternalLink className="ml-2 h-4 w-4" />
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
