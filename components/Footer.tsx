import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{background: '#111810', color: 'rgba(255,255,255,0.6)'}}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/raw_assets/logos/logo-primary.png"
              alt="Parinay Oils"
              width={120}
              height={40}
              className="mb-4 opacity-90 h-9 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed mb-2 text-white/50 max-w-[280px]">
              Manufacturers and Suppliers of Castor Oil and Castor Seed
            </p>
            <p className="text-xs text-white/30">Parinay Go India LLP</p>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-white mb-4 tracking-wide font-sans">Products</h6>
            <ul className="space-y-3">
              {[
                { label: 'Castor Oil', href: '/products/castor-oil' },
                { label: 'Castor Seed', href: '/products/castor-seed' },
                { label: 'All Products', href: '/products' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-white mb-4 tracking-wide font-sans">Company</h6>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Manufacturing & Quality', href: '/manufacturing-quality' },
                { label: 'Applications', href: '/applications' },
                { label: 'Sustainability', href: '/sustainability' },
                { label: 'Insights', href: '/insights' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-white mb-4 tracking-wide font-sans">Contact</h6>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918866099050"
                  className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors py-1">
                  <Phone size={15} className="flex-shrink-0 mt-0.5 text-[#C8960C]" />
                  +91 88660 99050
                </a>
              </li>
              <li>
                <a href="mailto:parinaytrade@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors py-1 break-all">
                  <Mail size={15} className="flex-shrink-0 mt-0.5 text-[#C8960C]" />
                  parinaytrade@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#C8960C]" />
                <span className="leading-relaxed">
                  114, 1st/F, Shri Ghantakarna Mall, Near Ghantakarna Market,
                  Sarangpur, Ahmedabad, Gujarat – 380001, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {currentYear} Parinay Oils. All rights reserved.
          </p>
          <p className="text-xs text-white/30 text-center sm:text-right">
            Created with ❤️ by Prism-IQ
          </p>
        </div>
      </div>
    </footer>
  )
}
