'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    title: 'Color Transformation',
    description: 'Vibrant burgundy highlights',
    category: 'color',
    image: 'https://images.unsplash.com/photo-1562322503-7d3b7e7b7d7d?w=500&h=500&fit=crop'
  },
  {
    title: 'Blonde Balayage',
    description: 'Sun-kissed blonde transformation',
    category: 'color',
    image: 'https://images.unsplash.com/photo-1579712514212-97975e83ce5c?w=500&h=500&fit=crop'
  },
  {
    title: 'Modern Pixie Cut',
    description: 'Short & chic styling',
    category: 'cut',
    image: 'https://images.unsplash.com/photo-1587049139290-139cfe06d2e1?w=500&h=500&fit=crop'
  },
  {
    title: 'Long Layers',
    description: 'Volume & movement',
    category: 'cut',
    image: 'https://images.unsplash.com/photo-1582332707712-f432e2d1b448?w=500&h=500&fit=crop'
  },
  {
    title: 'Curly Hair Care',
    description: 'Defined curls & texture',
    category: 'treatment',
    image: 'https://images.unsplash.com/photo-1599653814097-6b85b8b1b13f?w=500&h=500&fit=crop'
  },
  {
    title: 'Sleek Straight',
    description: 'Keratin treatment result',
    category: 'treatment',
    image: 'https://images.unsplash.com/photo-1596093002221-96fd1c8e9d29?w=500&h=500&fit=crop'
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ scale: 1, translateY: 0 })

  const filtered = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

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
      className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/30"
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
