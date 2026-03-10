'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const elementCenter = window.innerHeight / 2
      const distanceFromCenter = Math.abs(rect.top - elementCenter)
      const maxDistance = window.innerHeight
      const newOpacity = Math.max(0, 1 - distanceFromCenter / maxDistance)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-r from-amber-800 via-amber-900 to-amber-950 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-amber-50 mb-12 max-w-2xl mx-auto font-light">
            Book your appointment today and get 20% off your first visit
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-amber-900 font-bold rounded-lg transition-colors transform hover:scale-105 duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+16173459300"
              className="px-8 py-4 border-2 border-amber-300 text-amber-100 font-bold rounded-lg hover:bg-amber-700 hover:border-white transition-colors transform hover:scale-105 duration-300"
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-amber-50"
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
