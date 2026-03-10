import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const poppins = Poppins({ weight: ['400', '600', '700', '800'], subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Summer Street Hair Studio | Boston\'s Premier Salon',
  description: 'Expert hair care, cuts, color & styling. 4.9★ rated. New clients: 20% off first visit. Book now.',
  keywords: 'salon, hair salon boston, haircut, color, styling, professional',
  openGraph: {
    title: 'Summer Street Hair Studio',
    description: 'Boston\'s most trusted salon for cuts, color, and styling',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'LocalBusiness',
              'name': 'Summer Street Hair Studio',
              'image': '/og-image.jpg',
              'description': 'Professional hair salon in Boston',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '125 Summer Street',
                'addressLocality': 'Boston',
                'addressRegion': 'MA',
                'postalCode': '02110',
                'addressCountry': 'US'
              },
              'telephone': '(617) 345-9300',
              'url': 'https://summerststreethair.com',
              'priceRange': '$$',
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.9',
                'ratingCount': '247'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
