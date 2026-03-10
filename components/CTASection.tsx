'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ scale: 1, translateY: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      
      // Calculate scroll progress
      const scrollProgress = Math.min(1, Math.max(-0.5, (window.innerHeight - rect.top) / (window.innerHeight * 1.5)))
      
      // Reduce animation intensity on mobile
      const scaleIntensity = isMobile ? 0.02 : 0.05
      const translateIntensity = isMobile ? 15 : 40
      
      // Transform: scale and translate
      const scale = 0.98 + scrollProgress * scaleIntensity
      const translateY = (1 - scrollProgress) * translateIntensity
      
      setTransform({ scale, translateY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-r from-amber-800 via-amber-900 to-amber-950"
      style={{
        transform: `scale(${transform.scale}) translateY(${transform.translateY}px)`,
        transformOrigin: 'center center',
        willChange: 'transform'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-4 xs:mb-6 tracking-tight px-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-amber-50 mb-8 xs:mb-12 max-w-2xl mx-auto font-light px-4">
            Book your appointment today and get 20% off your first visit
          </p>

          <div className="flex flex-col xs:flex-row gap-4 justify-center px-4">
            <Link
              href="/booking"
              className="px-6 xs:px-8 py-3 xs:py-4 bg-amber-500 hover:bg-amber-600 text-amber-900 font-bold transition-colors transform hover:scale-105 duration-300 w-full xs:w-auto text-center"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+16173459300"
              className="px-6 xs:px-8 py-3 xs:py-4 border-2 border-amber-300 text-amber-100 font-bold hover:bg-amber-700 hover:border-white transition-colors transform hover:scale-105 duration-300 w-full xs:w-auto text-center"
            >
              Call (617) 345-9300
            </a>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 xs:mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 text-amber-50 px-4"
        >
          <div>
            <div className="font-semibold">Monday - Friday</div>
            <div className="text-amber-200 font-light">9:00 AM - 7:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Saturday</div>
            <div className="text-amber-200 font-light">10:00 AM - 6:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Sunday</div>
            <div className="text-amber-200 font-light">11:00 AM - 5:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Walk-Ins Welcome</div>
            <div className="text-amber-200 font-light">Subject to availability</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
