'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-98 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Summer Street
          <span className="text-yellow-600">Hair</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-800 hover:text-yellow-700 font-semibold transition text-sm">Home</Link>
          <Link href="/#services" className="text-gray-800 hover:text-yellow-700 font-semibold transition text-sm">Services</Link>
          <Link href="/gallery" className="text-gray-800 hover:text-yellow-700 font-semibold transition text-sm">Gallery</Link>
          <Link href="/about" className="text-gray-800 hover:text-yellow-700 font-semibold transition text-sm">About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-yellow-700 font-semibold transition text-sm">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:block px-6 py-2 bg-gray-900 hover:bg-yellow-700 text-white font-semibold rounded transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-50 border-t border-gray-200 p-4"
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-gray-900 hover:text-yellow-700 font-semibold">Home</Link>
            <Link href="/#services" className="text-gray-900 hover:text-yellow-700 font-semibold">Services</Link>
            <Link href="/gallery" className="text-gray-900 hover:text-yellow-700 font-semibold">Gallery</Link>
            <Link href="/about" className="text-gray-900 hover:text-yellow-700 font-semibold">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-yellow-700 font-semibold">Contact</Link>
            <Link
              href="/booking"
              className="block px-6 py-2 bg-gray-900 text-white font-semibold rounded text-center hover:bg-yellow-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
