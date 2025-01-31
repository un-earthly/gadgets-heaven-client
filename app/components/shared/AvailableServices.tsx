import { Truck, Smartphone, Wrench } from 'lucide-react'

const services = [
    {
        icon: Truck,
        title: "Delivery & Shipping",
        description: "Quick delivery options like same-day shipping or free delivery on orders over $100.",
    },
    {
        icon: Smartphone,
        title: "Gadget Customization",
        description: "Personalization services (engraving, bundle options).",
    },
    {
        icon: Wrench,
        title: "Expert Installation",
        description: "Set-up assistance for home tech systems.",
    },
]

const AvailableServices = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <service.icon className="h-16 w-16 text-orange-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AvailableServices
