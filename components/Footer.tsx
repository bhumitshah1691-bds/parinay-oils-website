import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ 
      padding: '3rem 3rem 2.5rem', 
      borderTop: '1px solid #e0e0e0', 
      marginTop: 'auto',
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        gap: '4rem',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Company Information Placeholder */}
        <div style={{ flex: '1 1 30%' }}>
          <h4 style={{ 
            margin: '0 0 1rem 0',
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
          }}>Company Information</h4>
          <p style={{ 
            margin: 0,
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}>[Company info placeholder]</p>
        </div>

        {/* Navigation Links */}
        <div style={{ flex: '1 1 35%' }}>
          <h4 style={{ 
            margin: '0 0 1rem 0',
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
          }}>Navigation</h4>
          <ul style={{ 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.625rem 2rem',
          }}>
            <li><Link href="/" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Home</Link></li>
            <li><Link href="/about" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>About Us</Link></li>
            <li><Link href="/products" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Products</Link></li>
            <li><Link href="/manufacturing-quality" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Manufacturing &amp; Quality</Link></li>
            <li><Link href="/applications" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Applications &amp; Industries</Link></li>
            <li><Link href="/sustainability" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Sustainability</Link></li>
            <li><Link href="/insights" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Insights</Link></li>
            <li><Link href="/contact" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links Placeholder */}
        <div style={{ flex: '1 1 20%' }}>
          <h4 style={{ 
            margin: '0 0 1rem 0',
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
          }}>Legal</h4>
          <ul style={{ 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}>
            <li style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>[Privacy Policy placeholder]</li>
            <li style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>[Terms of Use placeholder]</li>
            <li style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>[Disclaimer placeholder]</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
