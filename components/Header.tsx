import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Block */}
        <div>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Parinay Oils
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/manufacturing-quality">Manufacturing &amp; Quality</Link>
            </li>
            <li>
              <Link href="/applications">Applications &amp; Industries</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Utility Links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>Language</span>
          <span>Search</span>
        </div>
      </div>
    </header>
  )
}
