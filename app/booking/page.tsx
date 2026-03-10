'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'haircut',
    date: '',
    time: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you! We will contact you shortly to confirm your appointment.')
    setFormData({ name: '', email: '', phone: '', service: 'haircut', date: '', time: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white pt-32 pb-12">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-amber-800 text-lg">
            Get 20% off your first visit
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Full Name</label>
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

            {/* Phone */}
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(617) 000-0000"
                className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
              >
                <option value="haircut">Professional Haircut - $45</option>
                <option value="color">Hair Color & Highlights - $85</option>
                <option value="styling">Styling & Blowout - $65</option>
                <option value="treatment">Hair Treatment - $55</option>
                <option value="keratin">Keratin Treatment - $120</option>
                <option value="grooming">Men's Grooming - $35</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Preferred Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="09:30">9:30 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="15:30">3:30 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="16:30">4:30 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-4 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded transition-all duration-300 shadow-lg"
            >
              Confirm Booking
            </motion.button>
          </div>
        </motion.form>

        {/* Hours Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-amber-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Hours</h2>
          <div className="grid grid-cols-2 gap-6 text-amber-800">
            <div>
              <p className="font-semibold">Monday - Friday</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
            <div className="col-span-2">
              <p className="font-semibold">Sunday</p>
              <p>11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
