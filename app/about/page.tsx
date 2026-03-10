'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            About Summer Street Hair
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Crafting beauty with passion since 2009
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4 font-light">
              Founded in 2009, Summer Street Hair Studio has been Boston's premier destination for professional hair care. What started as a single chair and a dream has grown into a thriving salon trusted by thousands of clients.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              We believe that great hair is more than just a style—it's confidence, self-expression, and a reflection of who you are. Every client who walks through our doors receives personalized attention and expertise.
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We commit to the highest standards in every service we provide.'
              },
              {
                title: 'Care',
                description: 'Your satisfaction and well-being are at the center of everything we do.'
              },
              {
                title: 'Innovation',
                description: 'We stay current with the latest techniques and trends in hair care.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Head Stylist & Founder',
                specialty: 'Color & Balayage',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
              },
              {
                name: 'Jessica Chen',
                role: 'Senior Stylist',
                specialty: 'Cuts & Styling',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
              },
              {
                name: 'Marcus Johnson',
                role: 'Specialist',
                specialty: 'Men\'s Grooming',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Hair Colorist',
                specialty: 'Advanced Coloring',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
              }
            ].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <img 
                  src={person.image}
                  alt={person.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-gray-700 font-semibold mb-2">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.specialty}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-amber-100 mb-8">
            Join thousands of happy clients who trust us with their hair.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-4 bg-white text-amber-900 font-bold rounded hover:bg-amber-50 transition-all duration-300"
          >
            Book Your Appointment
          </a>
        </motion.section>
      </div>
    </div>
  )
}
