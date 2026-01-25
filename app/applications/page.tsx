import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ApplicationsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '2rem' }}>
        {/* SECTION 1 — ORIENTATION */}
        <section style={{ marginBottom: '2rem' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            {' > '}
            <span>Applications & Industries</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Applications & Industries</h1>

          {/* Scope / Context Description */}
          <p style={{ color: '#555', maxWidth: '800px' }}>
            Industry-level application areas for Castor Oil and Castor Seed. Applications listed are indicative only. Final application validation is the responsibility of the buyer.
          </p>
        </section>

        {/* SECTION 2 — INFORMATION ARCHITECTURE */}
        <section style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
          {/* SIDEBAR */}
          <aside style={{ width: '250px', flexShrink: 0 }}>
            {/* Sub-navigation */}
            <nav style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                On This Page
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#industry-application-areas" style={{ color: '#333', textDecoration: 'none' }}>Industry Application Areas</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#product-industry-mapping" style={{ color: '#333', textDecoration: 'none' }}>Product to Industry Mapping</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#usage-clarification" style={{ color: '#333', textDecoration: 'none' }}>Usage Clarification</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#inquiry" style={{ color: '#333', textDecoration: 'none' }}>Inquiry</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, maxWidth: '800px' }}>
            {/* Content Block A: Industry Application Areas */}
            <article id="industry-application-areas" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Industry Application Areas</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>Industries Served:</p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Industrial manufacturing</li>
                <li>Pharmaceuticals</li>
                <li>Cosmetics & personal care</li>
                <li>Lubricants</li>
                <li>Paints & coatings</li>
                <li>Chemicals</li>
                <li>Agriculture-related processing</li>
              </ul>
              <p style={{ lineHeight: 1.7 }}>
                Application listings are indicative and non-exhaustive.
              </p>
            </article>

            {/* Content Block B: Product to Industry Mapping */}
            <article id="product-industry-mapping" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Product to Industry Mapping</h2>
              
              <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>
                <strong>Castor Oil:</strong>
              </p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li>Industrial manufacturing</li>
                <li>Pharmaceuticals</li>
                <li>Cosmetics & personal care</li>
                <li>Lubricants</li>
                <li>Paints & coatings</li>
                <li>Chemicals</li>
              </ul>

              <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>
                <strong>Castor Seed:</strong>
              </p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem' }}>
                <li>Industrial processing</li>
                <li>Agricultural commodity trading</li>
                <li>Oil extraction and downstream processing</li>
              </ul>
            </article>

            {/* Content Block C: Usage Clarification */}
            <article id="usage-clarification" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Usage Clarification</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                Applications listed on this page are provided for general reference only. Product performance, suitability, and regulatory compliance depend on specific use cases, formulations, and destination market requirements.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Buyers are responsible for validating end-use suitability and ensuring compliance with applicable regulations.
              </p>
            </article>

            {/* Content Block D: Inquiry */}
            <article id="inquiry" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Inquiry</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                For application-specific questions or additional technical information, please contact Parinay Oils through the official inquiry channel.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Detailed guidance is provided based on product scope and destination requirements.
              </p>
            </article>
          </div>
        </section>

        {/* SECTION 3 — RELATED CONTEXT */}
        <section style={{ borderTop: '1px solid #ccc', paddingTop: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Related Information</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '2rem' }}>
            <li>
              <Link href="/products/castor-oil" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Castor Oil — Product Details
              </Link>
            </li>
            <li>
              <Link href="/products/castor-seed" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Castor Seed — Product Details
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
