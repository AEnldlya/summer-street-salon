'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Message submitted:', formData)
    alert('Thank you for reaching out! We will respond shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-amber-800 text-lg">
            We'd love to hear from you. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">📍 Address</h3>
                <p className="text-amber-800">
                  125 Summer Street<br />
                  Boston, MA 02110<br />
                  United States
                </p>
              </div>

              {/* Phone */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">📞 Phone</h3>
                <a href="tel:+16173459300" className="text-amber-800 hover:text-amber-900 font-semibold">
                  (617) 345-9300
                </a>
                <p className="text-amber-700 text-sm mt-2">Available during business hours</p>
              </div>

              {/* Email */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">✉️ Email</h3>
                <a href="mailto:info@summerstathair.com" className="text-amber-800 hover:text-amber-900 font-semibold">
                  info@summerstathair.com
                </a>
              </div>

              {/* Hours */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">🕐 Hours</h3>
                <div className="text-amber-800 space-y-2">
                  <p><span className="font-semibold">Mon-Fri:</span> 9:00 AM - 7:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
