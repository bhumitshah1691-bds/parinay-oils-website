import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ 
      padding: '1.25rem 3rem', 
      borderBottom: '1px solid #e0e0e0',
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Logo Block */}
        <div style={{ 
          flexShrink: 0,
          marginRight: '3rem',
        }}>
          <Link 
            href="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              fontSize: '1.125rem',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Parinay Oils
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav style={{ flex: 1 }}>
          <ul style={{ 
            display: 'flex', 
            gap: '2rem', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            justifyContent: 'center',
          }}>
            <li>
              <Link href="/" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Home</Link>
            </li>
            <li>
              <Link href="/about" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>About Us</Link>
            </li>
            <li>
              <Link href="/products" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Products</Link>
            </li>
            <li>
              <Link href="/manufacturing-quality" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Manufacturing &amp; Quality</Link>
            </li>
            <li>
              <Link href="/applications" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Applications &amp; Industries</Link>
            </li>
            <li>
              <Link href="/sustainability" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Sustainability</Link>
            </li>
            <li>
              <Link href="/insights" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Insights</Link>
            </li>
            <li>
              <Link href="/contact" style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}>Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Utility Links */}
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem',
          marginLeft: '3rem',
          flexShrink: 0,
          fontSize: '0.875rem',
        }}>
          <span>Language</span>
          <span>Search</span>
        </div>
      </div>
    </header>
  )
}
