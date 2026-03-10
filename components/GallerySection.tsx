'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    title: 'Color Transformation',
    description: 'Vibrant burgundy highlights',
    category: 'color',
    image: 'https://images.pexels.com/photos/3622617/pexels-photo-3622617.jpeg?w=500&h=500&fit=crop'
  },
  {
    title: 'Blonde Balayage',
    description: 'Sun-kissed blonde transformation',
    category: 'color',
    image: 'https://images.pexels.com/photos/5062123/pexels-photo-5062123.jpeg?w=500&h=500&fit=crop'
  },
  {
    title: 'Modern Pixie Cut',
    description: 'Short & chic styling',
    category: 'cut',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=500&fit=crop'
  },
  {
    title: 'Long Layers',
    description: 'Volume & movement',
    category: 'cut',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=500&h=500&fit=crop'
  },
  {
    title: 'Curly Hair Care',
    description: 'Defined curls & texture',
    category: 'treatment',
    image: 'https://images.pexels.com/photos/6764035/pexels-photo-6764035.jpeg?w=500&h=500&fit=crop'
  },
  {
    title: 'Sleek Straight',
    description: 'Keratin treatment result',
    category: 'treatment',
    image: 'https://images.pexels.com/photos/3808015/pexels-photo-3808015.jpeg?w=500&h=500&fit=crop'
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ scale: 1, translateY: 0, opacity: 1 })
  const [isMobile, setIsMobile] = useState(false)

  const filtered = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

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
      
      // Calculate visibility based on distance from viewport center
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
      const maxDistance = window.innerHeight / 2 + rect.height / 2
      
      // Opacity fades symmetrically - same fade in as fade out
      const opacity = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance) * 1.2))
      
      // Calculate scroll progress for scale/translate
      const scrollProgress = Math.min(1, Math.max(-0.5, (window.innerHeight - rect.top) / (window.innerHeight * 1.5)))
      
      // Reduce animation intensity on mobile
      const scaleIntensity = isMobile ? 0.02 : 0.05
      const translateIntensity = isMobile ? 15 : 40
      
      // Transform: scale and translate
      const scale = 0.98 + scrollProgress * scaleIntensity
      const translateY = (1 - scrollProgress) * translateIntensity
      
      setTransform({ scale, translateY, opacity })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/30"
      style={{
        transform: `scale(${transform.scale}) translateY(${transform.translateY}px)`,
        opacity: transform.opacity,
        transformOrigin: 'center center',
        willChange: 'transform, opacity'
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
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-amber-800 text-sm xs:text-base md:text-lg px-4">
            See the transformations we've created for our clients
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-2 xs:gap-4 mb-12 flex-wrap px-4">
          {['all', 'cut', 'color', 'treatment'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 xs:px-6 py-2 text-xs xs:text-sm font-semibold transition-all ${
                filter === category
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-amber-900 border border-amber-300 hover:border-amber-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative h-48 xs:h-64 bg-gradient-to-br from-amber-200 to-amber-300 overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Gallery image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full p-4 text-white"
                >
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-amber-100">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/booking"
            className="inline-block px-6 xs:px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold transition-colors duration-300"
          >
            Get Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
