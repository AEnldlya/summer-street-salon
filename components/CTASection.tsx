'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Book your appointment today and get 20% off your first visit
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+16173459300"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105 duration-300"
            >
              Call (617) 345-9300
            </a>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white"
        >
          <div>
            <div className="font-semibold">Monday - Friday</div>
            <div className="text-purple-100">9:00 AM - 7:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Saturday</div>
            <div className="text-purple-100">10:00 AM - 6:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Sunday</div>
            <div className="text-purple-100">11:00 AM - 5:00 PM</div>
          </div>
          <div>
            <div className="font-semibold">Walk-Ins Welcome</div>
            <div className="text-purple-100">Subject to availability</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
