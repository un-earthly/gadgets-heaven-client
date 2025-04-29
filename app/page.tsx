'use client'
import BackgroundGradient from '../components/shared/BackgroundGradient'
import Header from '../components/shared/header'
import Hero from '../components/shared/hero'
import FeaturedProducts from '../components/shared/FeaturedProducts'
import AvailableServices from '../components/shared/AvailableServices'
import PersonalizedRecommendations from '../components/shared/PersonalizedRecommendations'
import ClientReviews from '../components/shared/ClientReviews'
import TechSupport from '../components/shared/TechSupport'
import UpcomingServices from '../components/shared/UpcomingServices'
import Newsletter from '../components/shared/Newsletter'
import Footer from '../components/shared/Footer'
import FloatingButtons from '../components/shared/FloatingButtons'

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <BackgroundGradient />
            <div className="sticky z-50 backdrop-blur-xl top-0">
                <Header />
            </div>
            <Hero />
            <div className="relative z-10">
                <FeaturedProducts />
                <AvailableServices />
                <PersonalizedRecommendations />
                <ClientReviews />
                <TechSupport />
                <UpcomingServices />
                <Newsletter />
            </div>
            <Footer />
            <FloatingButtons />
        </main>
    )
}