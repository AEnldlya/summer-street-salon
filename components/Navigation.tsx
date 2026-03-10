'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-amber-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-amber-900">
          Summer Street
          <span className="text-amber-700">Hair</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-amber-900 hover:text-amber-700 font-semibold transition">Home</Link>
          <Link href="/#services" className="text-amber-900 hover:text-amber-700 font-semibold transition">Services</Link>
          <Link href="/gallery" className="text-amber-900 hover:text-amber-700 font-semibold transition">Gallery</Link>
          <Link href="/about" className="text-amber-900 hover:text-amber-700 font-semibold transition">About</Link>
          <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-semibold transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:block px-6 py-2 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-900"
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
          className="md:hidden bg-amber-50 border-t border-amber-200 p-4"
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-amber-900 hover:text-amber-700 font-semibold">Home</Link>
            <Link href="/#services" className="text-amber-900 hover:text-amber-700 font-semibold">Services</Link>
            <Link href="/gallery" className="text-amber-900 hover:text-amber-700 font-semibold">Gallery</Link>
            <Link href="/about" className="text-amber-900 hover:text-amber-700 font-semibold">About</Link>
            <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-semibold">Contact</Link>
            <Link
              href="/booking"
              className="block px-6 py-2 bg-amber-800 text-white font-semibold rounded text-center"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
