import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Summer Street Hair</h3>
            <p className="text-gray-400 text-sm">
              Boston's premier salon providing expert hair care since 2009. 4.9★ rated by over 247 happy clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-purple-400">Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-purple-400">Book Now</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Hair Cuts & Styling</li>
              <li>Hair Color & Highlights</li>
              <li>Keratin Treatments</li>
              <li>Hair Care & Extensions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-3">
              <strong className="text-white">Address:</strong><br />
              125 Summer Street<br />
              Boston, MA 02110
            </p>
            <p className="text-gray-400 text-sm mb-3">
              <strong className="text-white">Phone:</strong><br />
              <a href="tel:+16173459300" className="hover:text-purple-400">(617) 345-9300</a>
            </p>
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Email:</strong><br />
              <a href="mailto:info@summerststreethair.com" className="hover:text-purple-400">info@summerst.com</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Summer Street Hair Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Google</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
