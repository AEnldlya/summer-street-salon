'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo size calculation (shrinks from h-12 to h-8 as you scroll)
  const logoSize = Math.max(32, 48 - scrollY * 0.05)
  const navPadding = Math.max(12, 20 - scrollY * 0.1)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-amber-100 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center" style={{ paddingTop: navPadding, paddingBottom: navPadding }}>
        {/* Logo - Shrinks on scroll */}
        <Link href="/" className="font-bold text-amber-900 transition-all" style={{ fontSize: Math.max(16, 24 - scrollY * 0.02) }}>
          <div className="flex items-center gap-2">
            <div 
              className="rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold transition-all"
              style={{ width: logoSize, height: logoSize, fontSize: logoSize * 0.4 }}
            >
              S
            </div>
            <span className="hidden sm:inline">Summer Street</span>
            <span className="text-amber-600">Hair</span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-amber-900 hover:text-amber-700 font-semibold transition text-sm">Home</Link>
          <Link href="/#services" className="text-amber-900 hover:text-amber-700 font-semibold transition text-sm">Services</Link>
          <Link href="/gallery" className="text-amber-900 hover:text-amber-700 font-semibold transition text-sm">Gallery</Link>
          <Link href="/about" className="text-amber-900 hover:text-amber-700 font-semibold transition text-sm">About</Link>
          <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-semibold transition text-sm">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:block px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
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
          className="md:hidden bg-amber-50 border-t border-amber-100 p-4"
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-amber-900 hover:text-amber-700 font-semibold">Home</Link>
            <Link href="/#services" className="text-amber-900 hover:text-amber-700 font-semibold">Services</Link>
            <Link href="/gallery" className="text-amber-900 hover:text-amber-700 font-semibold">Gallery</Link>
            <Link href="/about" className="text-amber-900 hover:text-amber-700 font-semibold">About</Link>
            <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-semibold">Contact</Link>
            <Link
              href="/booking"
              className="block px-6 py-2 bg-amber-700 text-white font-semibold rounded-lg text-center hover:bg-amber-800 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
