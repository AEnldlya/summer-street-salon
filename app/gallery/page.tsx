'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  { 
    title: 'Color Transformation', 
    description: 'Vibrant burgundy highlights', 
    category: 'color', 
    image: 'https://images.unsplash.com/photo-1613211503411-b6a662ee9402?w=500&h=600&fit=crop' 
  },
  { 
    title: 'Blonde Balayage', 
    description: 'Sun-kissed blonde transformation', 
    category: 'color', 
    image: 'https://images.unsplash.com/photo-1560264357-8d9766d20768?w=500&h=600&fit=crop' 
  },
  { 
    title: 'Modern Pixie Cut', 
    description: 'Short & chic styling', 
    category: 'cut', 
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop' 
  },
  { 
    title: 'Long Layers', 
    description: 'Volume & movement', 
    category: 'cut', 
    image: 'https://images.unsplash.com/photo-1522335617519-246b2b4da5a9?w=500&h=600&fit=crop' 
  },
  { 
    title: 'Curly Hair Care', 
    description: 'Defined curls & texture', 
    category: 'treatment', 
    image: 'https://images.unsplash.com/photo-1595475237320-ba8428175885?w=500&h=600&fit=crop' 
  },
  { 
    title: 'Sleek Straight', 
    description: 'Keratin treatment result', 
    category: 'treatment', 
    image: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?w=500&h=600&fit=crop' 
  },
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-lg font-light">
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
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />

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


      </div>
    </div>
  )
}
