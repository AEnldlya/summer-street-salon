'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    text: 'I came in stressed about my hair. Left feeling like a new person. The team really takes time to understand what you want.',
    rating: 5,
    service: 'Hair Color & Cut'
  },
  {
    name: 'Michael Rodriguez',
    text: 'Best haircut I\'ve had in years. The attention to detail is incredible. Highly recommend!',
    rating: 5,
    service: 'Men\'s Grooming'
  },
  {
    name: 'Jessica Park',
    text: 'The keratin treatment changed my life. My hair is so smooth and manageable now. Worth every penny!',
    rating: 5,
    service: 'Keratin Treatment'
  },
  {
    name: 'David Thompson',
    text: 'Professional, friendly, and talented. They really know how to work with different hair types.',
    rating: 5,
    service: 'Professional Haircut'
  },
]

export function TestimonialsSection() {
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
      className="py-20 px-6 bg-white"
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
            What Our Clients Say
          </h2>
          <p className="text-amber-800 text-sm xs:text-base md:text-lg font-light px-4">
            Join thousands of happy customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-4 xs:p-6 bg-white border border-amber-200 hover:shadow-lg hover:border-amber-400 transition-all duration-300"
            >
              {/* Rating */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-amber-700">{testimonial.rating}/5 STARS</span>
              </div>

              {/* Quote */}
              <p className="text-amber-900 text-lg mb-6 italic font-light">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-amber-200 pt-4">
                <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                <p className="text-sm text-amber-700">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-amber-50 to-white p-6 xs:p-8 border border-amber-300 mx-4 xs:mx-0">
            <div className="text-4xl xs:text-5xl font-bold text-amber-900 mb-2">4.9 OUT OF 5</div>
            <div className="text-amber-900 font-semibold mb-2">Based on 247 reviews</div>
            <p className="text-amber-800 font-light text-sm xs:text-base">See all reviews on Google & Facebook</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
