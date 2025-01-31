import { Video, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const TechSupport = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Tech Tutorials & Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <Video className="h-16 w-16 text-orange-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                        <p className="text-gray-600 mb-4">
                            Learn how to set up and use your new gadgets with our easy-to-follow video tutorials.
                        </p>
                        <Button variant="outline">Watch Tutorials</Button>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <FileText className="h-16 w-16 text-orange-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Troubleshooting Guides</h3>
                        <p className="text-gray-600 mb-4">
                            Find solutions to common tech issues with our comprehensive troubleshooting guides.
                        </p>
                        <Button variant="outline">View Guides</Button>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <MessageCircle className="h-16 w-16 text-orange-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
                        <p className="text-gray-600 mb-4">
                            Get real-time assistance from our expert support team through our live chat service.
                        </p>
                        <Button variant="outline">Start Chat</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechSupport

