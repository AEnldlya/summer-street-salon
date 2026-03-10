import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-amber-900 border-t border-amber-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-amber-50 font-bold text-lg mb-4">Summer Street Hair</h3>
            <p className="text-amber-200 text-sm">
              Boston's premier salon providing expert hair care since 2009. 4.9★ rated by over 247 happy clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li><Link href="/" className="hover:text-amber-100">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-100">Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-amber-100">Book Now</Link></li>
              <li><Link href="/contact" className="hover:text-amber-100">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber-50 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li>Hair Cuts & Styling</li>
              <li>Hair Color & Highlights</li>
              <li>Keratin Treatments</li>
              <li>Hair Care & Extensions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-50 font-bold text-lg mb-4">Contact</h3>
            <p className="text-amber-200 text-sm mb-3">
              <strong className="text-amber-50">Address:</strong><br />
              125 Summer Street<br />
              Boston, MA 02110
            </p>
            <p className="text-amber-200 text-sm mb-3">
              <strong className="text-amber-50">Phone:</strong><br />
              <a href="tel:+16173459300" className="hover:text-amber-100">(617) 345-9300</a>
            </p>
            <p className="text-amber-200 text-sm">
              <strong className="text-amber-50">Email:</strong><br />
              <a href="mailto:info@summerststreethair.com" className="hover:text-amber-100">info@summerst.com</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200 text-sm">
              © 2024 Summer Street Hair Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-amber-200 hover:text-amber-100">Facebook</a>
              <a href="#" className="text-amber-200 hover:text-amber-100">Instagram</a>
              <a href="#" className="text-amber-200 hover:text-amber-100">Google</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
