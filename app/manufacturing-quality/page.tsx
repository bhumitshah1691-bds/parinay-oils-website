import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ManufacturingQualityPage() {
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
            <span>Manufacturing & Quality</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Manufacturing & Quality</h1>

          {/* Scope / Context Description */}
          <p style={{ color: '#555', maxWidth: '800px' }}>
            Manufacturing capabilities and quality controls for Castor Oil supplied by Parinay Oils. 
            This page applies only to Castor Oil. No processing or manufacturing claims apply to Castor Seed.
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
                  <a href="#manufacturing-overview" style={{ color: '#333', textDecoration: 'none' }}>Manufacturing Overview</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#process-flow" style={{ color: '#333', textDecoration: 'none' }}>Process Flow</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#quality-control" style={{ color: '#333', textDecoration: 'none' }}>Quality Control & Assurance</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#certifications" style={{ color: '#333', textDecoration: 'none' }}>Certifications & Compliance</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#sourcing-reference" style={{ color: '#333', textDecoration: 'none' }}>Sourcing & Quality Discipline</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#inquiry" style={{ color: '#333', textDecoration: 'none' }}>Inquiry</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, maxWidth: '800px' }}>
            {/* Content Block A: Manufacturing Overview */}
            <article id="manufacturing-overview" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Manufacturing Overview</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                Parinay Oils manufactures Castor Oil through a controlled process designed to support consistent output and suitability for industrial and commercial use. Manufacturing activities are focused on maintaining process discipline, material traceability, and adherence to defined quality parameters.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Raw material sourcing, processing, and finished product handling are managed to align with internal quality procedures and applicable regulatory expectations.
              </p>
            </article>

            {/* Content Block B: Process Flow */}
            <article id="process-flow" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Manufacturing Process Flow</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>Process Stages:</p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Raw material receipt and inspection</li>
                <li>Cleaning and preparation</li>
                <li>Oil extraction and processing</li>
                <li>Filtration and clarification</li>
                <li>Quality checks during processing</li>
                <li>Finished product storage and dispatch</li>
              </ul>
              <p style={{ lineHeight: 1.7 }}>
                Detailed process parameters are maintained internally and are available on request where appropriate.
              </p>
            </article>

            {/* Content Block C: Quality Control & Assurance */}
            <article id="quality-control" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quality Control & Assurance</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                Quality control is integrated across key stages of the manufacturing process to ensure consistency and conformity with defined specifications. Checks are conducted on raw materials, in-process batches, and finished products prior to dispatch.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Testing parameters, acceptance criteria, and documentation practices are defined internally and aligned with customer and regulatory requirements. Product-specific test reports are provided where applicable.
              </p>
            </article>

            {/* Content Block D: Certifications & Compliance */}
            <article id="certifications" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Certifications & Compliance</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                <strong>Certifications:</strong>
              </p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Available on request</li>
              </ul>
              <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>
                <strong>Regulatory Compliance:</strong>
              </p>
              <ul style={{ lineHeight: 1.7, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Manufacturing and supply activities are conducted in accordance with applicable local and export regulations</li>
                <li>Product-specific compliance information is shared based on destination country requirements</li>
              </ul>
              <p style={{ lineHeight: 1.7 }}>
                Certification scope and validity are confirmed at the time of inquiry.
              </p>
            </article>

            {/* Content Block E: Sourcing & Quality Discipline (Reference) */}
            <article id="sourcing-reference" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sourcing & Quality Discipline (Reference)</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                Castor Seed supplied by Parinay Oils is sourced through external suppliers and is not processed or manufactured in-house. Sourcing is managed through defined quality and grading criteria agreed at the time of procurement.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Quality checks for traded materials are limited to inspection and documentation as applicable. Manufacturing controls described on this page do not apply to traded products.
              </p>
            </article>

            {/* Content Block F: Inquiry */}
            <article id="inquiry" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Inquiry</h2>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                For manufacturing capabilities, quality controls, or compliance-related information, please contact Parinay Oils through the official inquiry channel.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Specific documentation and clarifications are shared based on product scope and destination requirements.
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
              <Link href="/applications" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Applications & Industries
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
