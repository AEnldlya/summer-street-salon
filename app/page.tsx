import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { GallerySection } from '@/components/GallerySection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTASection } from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
