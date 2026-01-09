import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import CountdownSection from "@/components/countdown-section"
import PhotoCarousel from "@/components/photo-carousel"
import VenueSection from "@/components/venue-section"
import DressCodeSection from "@/components/dress-code-section"
import GiftsSection from "@/components/gifts-section"
import GallerySection from "@/components/gallery-section"
import TimelineSection from "@/components/timeline-section"
import RsvpSection from "@/components/rsvp-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <CountdownSection />
      <PhotoCarousel />
      <VenueSection />
      <DressCodeSection />
      <GiftsSection />
      <GallerySection />
      <TimelineSection />
      <RsvpSection />
      <Footer />
    </main>
  )
}
