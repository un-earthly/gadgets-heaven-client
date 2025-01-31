
import Hero from './components/shared/hero'
import AvailableServices from './components/shared/AvailableServices'
import Footer from './components/shared/Footer'
import UpcomingServices from './components/shared/UpcomingServices'
import ClientReviews from './components/shared/ClientReviews'
import FeaturedProducts from './components/shared/FeaturedProducts'
import TechSupport from './components/shared/TechSupport'
import Newsletter from './components/shared/Newsletter'
import PersonalizedRecommendations from './components/shared/PersonalizedRecommendations'
import Header from './components/shared/header'

export default function Home() {
    return (
        <main className="min-h-screen bg-orange-100">
            <Header />
            <Hero />
            <AvailableServices />
            <UpcomingServices />
            <ClientReviews />
            <FeaturedProducts />
            <TechSupport />
            <PersonalizedRecommendations />
            <Newsletter />
            <Footer />
        </main>
    )
}
