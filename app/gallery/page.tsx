'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  { title: 'Color Transformation', description: 'Vibrant burgundy highlights', category: 'color', image: '🎨' },
  { title: 'Blonde Balayage', description: 'Sun-kissed blonde transformation', category: 'color', image: '✨' },
  { title: 'Modern Pixie Cut', description: 'Short & chic styling', category: 'cut', image: '✂️' },
  { title: 'Long Layers', description: 'Volume & movement', category: 'cut', image: '💇' },
  { title: 'Curly Hair Care', description: 'Defined curls & texture', category: 'treatment', image: '🌊' },
  { title: 'Sleek Straight', description: 'Keratin treatment result', category: 'treatment', image: '🪮' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-amber-800 text-lg">
            See the transformations we've created for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-amber-50">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{item.image}</div>
                    <p className="text-amber-800 font-semibold">{item.category.toUpperCase()}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-end">
                  <div className="w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for Real Photos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-amber-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Replace with Real Photos</h2>
          <p className="text-amber-800 mb-4">
            To add real photos to this gallery, replace the emoji placeholders with actual image paths:
          </p>
          <code className="bg-white p-4 rounded inline-block text-left text-sm font-mono">
            &lt;Image src="/photos/haircut-1.jpg" alt="..." /&gt;
          </code>
        </motion.div>
      </div>
    </div>
  )
}
