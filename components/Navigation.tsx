'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Summer Street
          <span className="text-purple-400">Hair</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white hover:text-purple-400 transition">Home</Link>
          <Link href="#services" className="text-white hover:text-purple-400 transition">Services</Link>
          <Link href="/gallery" className="text-white hover:text-purple-400 transition">Gallery</Link>
          <Link href="/about" className="text-white hover:text-purple-400 transition">About</Link>
          <Link href="/contact" className="text-white hover:text-purple-400 transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
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
          className="md:hidden bg-gray-900 border-t border-gray-800 p-4"
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-white hover:text-purple-400">Home</Link>
            <Link href="#services" className="text-white hover:text-purple-400">Services</Link>
            <Link href="/gallery" className="text-white hover:text-purple-400">Gallery</Link>
            <Link href="/about" className="text-white hover:text-purple-400">About</Link>
            <Link href="/contact" className="text-white hover:text-purple-400">Contact</Link>
            <Link
              href="/booking"
              className="block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg text-center"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
