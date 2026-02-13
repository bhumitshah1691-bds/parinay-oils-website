'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/manufacturing-quality', label: 'Manufacturing' },
  { href: '/applications', label: 'Applications' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isTransparent = isHome && !scrolled
  const navBg = isTransparent
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D5]'
  const textColor = isTransparent ? 'text-white' : 'text-[#1A1A1A]'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[72px]">

          <Link
            href="/"
            className={`flex-shrink-0 font-display font-semibold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/90' : 'text-[#1A1A1A] hover:text-[#2D6A2F]'
            }`}
          >
            Parinay Oils
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 group py-1 ${
                  pathname === link.href ? 'text-[#2D6A2F]' : `${textColor} hover:text-[#2D6A2F]`
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#2D6A2F] rounded-full transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center text-sm font-medium text-white bg-[#2D6A2F] hover:bg-[#245226] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-colors ${textColor} hover:bg-black/10`}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[200] md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[min(280px,85vw)] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D5]">
              <Link href="/" onClick={() => setMenuOpen(false)} className="font-display font-semibold text-xl text-[#1A1A1A]">
                Parinay Oils
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-[#1A1A1A] hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-[#2D6A2F]/10 text-[#2D6A2F]'
                      : 'text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 bg-[#2D6A2F] text-white rounded-full font-medium text-base hover:bg-[#245226] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
