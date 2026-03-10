'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ scale: 1, translateY: 0 })

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.min(1, Math.max(-0.5, (window.innerHeight - rect.top) / (window.innerHeight * 1.5)))
      
      // Transform based on scroll: scale shrinks, translate moves up
      const scale = 1 - scrollProgress * 0.15
      const translateY = scrollProgress * 50
      
      setTransform({ scale, translateY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden"
      style={{ 
        transform: `scale(${transform.scale}) translateY(${transform.translateY}px)`,
        transformOrigin: 'center center',
        willChange: 'transform'
      }}
    >
      {/* Background hero images with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/50 to-amber-700/60"></div>
        <Image
          src="https://images.unsplash.com/photo-1521746727202-7d02bca39249?w=1600&h=900&fit=crop"
          alt="Professional salon styling"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Accent elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold text-white mb-4 xs:mb-6 leading-tight tracking-tight drop-shadow-lg">
            Transform Your Look
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base xs:text-lg md:text-2xl text-amber-50 mb-8 xs:mb-12 font-light drop-shadow-md px-4"
        >
          Expert hair care, cuts & color styling • Boston's #1 rated salon
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col xs:flex-row gap-4 justify-center px-4"
        >
          <Link
            href="/booking"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full xs:w-auto text-center"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/gallery"
            className="px-6 py-3 border-2 border-amber-200 text-white font-semibold hover:bg-amber-700/30 transition-all duration-300 backdrop-blur-sm w-full xs:w-auto text-center"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        >
          <div className="bg-white/10 backdrop-blur-sm px-4 py-3 xs:px-6">
            <div className="text-3xl xs:text-4xl font-bold text-amber-300">4.9</div>
            <div className="text-amber-50 text-xs xs:text-sm">247 Reviews</div>
          </div>
          <div className="w-px h-12 bg-amber-300/40"></div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-3 xs:px-6">
            <div className="text-3xl xs:text-4xl font-bold text-amber-300">15+</div>
            <div className="text-amber-50 text-xs xs:text-sm">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-amber-300/40 hidden xs:block"></div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-3 xs:px-6">
            <div className="text-3xl xs:text-4xl font-bold text-amber-300">2000+</div>
            <div className="text-amber-50 text-xs xs:text-sm">Happy Clients</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-100 text-center"
        >
          <div className="text-sm mb-3 font-light tracking-wide">SCROLL TO EXPLORE</div>
          <div className="text-2xl">v</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
