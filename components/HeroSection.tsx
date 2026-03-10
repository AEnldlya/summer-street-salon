'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-yellow-50 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Transform Your Look
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 font-light"
        >
          Expert hair care, cuts & color styling • Boston's #1 rated salon
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/booking"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border-2 border-gray-400 text-gray-800 font-semibold rounded hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center items-center gap-8"
        >
          <div>
            <div className="text-4xl font-bold text-gray-900">4.9★</div>
            <div className="text-gray-600 text-sm">247 Reviews</div>
          </div>
          <div className="w-px h-12 bg-yellow-400"></div>
          <div>
            <div className="text-4xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-yellow-400"></div>
          <div>
            <div className="text-4xl font-bold text-gray-900">2000+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
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
          className="text-gray-700 text-center"
        >
          <div className="text-sm mb-2 font-light">Scroll to explore</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
