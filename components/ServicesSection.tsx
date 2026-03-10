'use client'

import { motion } from 'framer-motion'

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
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <span className="text-2xl font-bold text-purple-600">{service.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>⏱</span>
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
          <p className="text-gray-600 mb-6">
            First-time clients: <span className="font-bold text-purple-600">20% off</span> any service
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
