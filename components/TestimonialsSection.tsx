'use client'

import { motion } from 'framer-motion'

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg font-light">
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
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg border border-yellow-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 italic font-light">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-yellow-100 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.service}</p>
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
          <div className="inline-block bg-gradient-to-r from-yellow-50 to-white p-8 rounded-lg border border-yellow-200">
            <div className="text-5xl font-bold text-gray-900 mb-2">4.9★</div>
            <div className="text-gray-700 font-semibold mb-2">Based on 247 reviews</div>
            <p className="text-gray-600 font-light">See all reviews on Google & Facebook</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
