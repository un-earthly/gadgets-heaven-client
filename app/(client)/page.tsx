'use client'

import AvailableServices from "@/components/shared/AvailableServices"
import BackgroundGradient from "@/components/shared/BackgroundGradient"
import ClientReviews from "@/components/shared/ClientReviews"
import FeaturedProducts from "@/components/shared/FeaturedProducts"
import FloatingButtons from "@/components/shared/FloatingButtons"
import Header from "@/components/shared/header"
import Hero from "@/components/shared/hero"
import Newsletter from "@/components/shared/Newsletter"
import PersonalizedRecommendations from "@/components/shared/PersonalizedRecommendations"
import TechSupport from "@/components/shared/TechSupport"
import UpcomingServices from "@/components/shared/UpcomingServices"
import { Footer } from "react-day-picker"


export default function Home() {
    return (
        <div className="min-h-screen relative">
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
        </div>)
}