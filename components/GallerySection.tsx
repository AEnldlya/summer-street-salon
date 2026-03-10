'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  {
    title: 'Color Transformation',
    description: 'Vibrant burgundy highlights',
    category: 'color'
  },
  {
    title: 'Blonde Balayage',
    description: 'Sun-kissed blonde transformation',
    category: 'color'
  },
  {
    title: 'Modern Pixie Cut',
    description: 'Short & chic styling',
    category: 'cut'
  },
  {
    title: 'Long Layers',
    description: 'Volume & movement',
    category: 'cut'
  },
  {
    title: 'Curly Hair Care',
    description: 'Defined curls & texture',
    category: 'treatment'
  },
  {
    title: 'Sleek Straight',
    description: 'Keratin treatment result',
    category: 'treatment'
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            See the transformations we've created for our clients
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'cut', 'color', 'treatment'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-600'
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
              viewport={{ once: true }}
              className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-gray-700 font-semibold">Professional Photo</div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full p-4 text-white"
                >
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
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
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
