import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      padding: '1rem 0', 
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e8e8e8',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 3rem',
      }}>
        {/* Logo Block */}
        <div style={{ flexShrink: 0 }}>
          <Link 
            href="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#0f3d28',
              fontSize: '1.25rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Parinay Oils
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav>
          <ul style={{ 
            display: 'flex', 
            gap: '2rem', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            alignItems: 'center',
          }}>
            <li>
              <Link 
                href="/" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-brand-green"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-brand-green"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-brand-green"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="/manufacturing-quality" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-brand-green"
              >
                Manufacturing
              </Link>
            </li>
            <li>
              <Link 
                href="/applications" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 150ms ease',
                }}
                className="hover:text-brand-green"
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
                  backgroundColor: '#1a5a3c',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'background-color 150ms ease',
                }}
                className="hover:bg-brand-green-dark"
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
