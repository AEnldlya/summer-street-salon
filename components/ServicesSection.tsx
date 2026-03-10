'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const services = [
  {
    name: 'Professional Haircut',
    price: '$45',
    description: 'Expert cut tailored to your hair type and style',
    duration: '45 min'
  },
  {
    name: 'Hair Color & Highlights',
    price: '$85',
    description: 'Premium color treatment with professional dyes',
    duration: '90 min'
  },
  {
    name: 'Styling & Blowout',
    price: '$65',
    description: 'Special event styling for any occasion',
    duration: '60 min'
  },
  {
    name: 'Hair Treatment',
    price: '$55',
    description: 'Deep conditioning and repair treatment',
    duration: '45 min'
  },
  {
    name: 'Keratin Treatment',
    price: '$120',
    description: 'Smooth, frizz-free hair for weeks',
    duration: '120 min'
  },
  {
    name: 'Men\'s Grooming',
    price: '$35',
    description: 'Sharp cuts and beard grooming',
    duration: '30 min'
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ scale: 1, translateY: 0 })

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      
      // Calculate scroll progress
      const scrollProgress = Math.min(1, Math.max(-0.5, (window.innerHeight - rect.top) / (window.innerHeight * 1.5)))
      
      // Transform: scale and translate
      const scale = 0.95 + scrollProgress * 0.05
      const translateY = (1 - scrollProgress) * 40
      
      setTransform({ scale, translateY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-amber-50/50"
      id="services"
      style={{
        transform: `scale(${transform.scale}) translateY(${transform.translateY}px)`,
        transformOrigin: 'center center',
        willChange: 'transform'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-amber-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-amber-800 text-sm xs:text-base md:text-lg max-w-2xl mx-auto font-light px-4">
            We offer a full range of professional hair services using premium products and techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-4 xs:p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 bg-white hover:border-amber-400"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-amber-900">{service.name}</h3>
                <span className="text-2xl font-bold text-amber-700">{service.price}</span>
              </div>
              <p className="text-amber-800 mb-4 text-sm">{service.description}</p>
              <div className="text-sm text-amber-700 flex items-center gap-2">
                <span className="text-xs">TIME</span>
                <span>{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-amber-800 mb-6">
            First-time clients: <span className="font-bold text-amber-700">20% off</span> any service
          </p>
          <a
            href="/booking"
            className="inline-block px-6 xs:px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold transition-colors duration-300"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
