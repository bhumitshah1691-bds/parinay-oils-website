import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        {/* Company Information Placeholder */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Company Information</h4>
          <p style={{ margin: 0 }}>[Company info placeholder]</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/manufacturing-quality">Manufacturing &amp; Quality</Link></li>
            <li><Link href="/applications">Applications &amp; Industries</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links Placeholder */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Legal</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>[Privacy Policy placeholder]</li>
            <li>[Terms of Use placeholder]</li>
            <li>[Disclaimer placeholder]</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
