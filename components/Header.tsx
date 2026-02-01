'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 0',
        backgroundColor: 'transparent',
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 3rem',
        }}
      >
        {/* Logo Block */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src="/raw_assets/logos/logo-primary.png"
            alt="Parinay Oils"
            style={{
              height: '76px',
              width: 'auto',
              display: 'block',
              mixBlendMode: 'darken',
            }}
          />
        </Link>

        {/* Primary Navigation */}
        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            <li>
              <Link
                href="/"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-white"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/manufacturing-quality"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-white"
              >
                Manufacturing
              </Link>
            </li>
            <li>
              <Link
                href="/applications"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-white"
              >
                Applications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'all 150ms ease',
                }}
                className="hover:bg-white/25"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
