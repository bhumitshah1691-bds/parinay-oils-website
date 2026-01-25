import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CastorSeedPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, padding: '2rem' }}>
        {/* SECTION 1 — PRODUCT IDENTIFICATION */}
        <section style={{ marginBottom: '3rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666' }}>Home</Link>
            {' > '}
            <Link href="/products" style={{ color: '#666' }}>Products</Link>
            {' > '}
            <span>Castor Seed</span>
          </nav>

          {/* Product Title */}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Castor Seed</h1>

          {/* Product Classification */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Product Category:</strong> Oilseed (Agricultural commodity)
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>HS Code:</strong> Available on request
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Origin:</strong> India
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Sourcing Model:</strong> Procured from approved suppliers based on quality and grading criteria
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Intended Use:</strong> Industrial and commercial processing
            </p>
          </div>

          {/* Status Label — Traded / Sourced */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#059669',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '4px',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Traded / Sourced
          </div>
        </section>

        {/* SECTION 2 — TECHNICAL SPECIFICATIONS */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* LEFT CONTENT — 2/3 */}
            <div style={{ flex: 2 }}>
              {/* Product Overview */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Product Overview</h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. Parinay Oils supplies Castor Seed through a structured sourcing model focused on consistency, grading, and supply reliability.
              </p>
              <p style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                The product is offered to buyers engaged in processing or extraction activities. Application suitability and regulatory compliance requirements are determined by the buyer.
              </p>

              {/* Quality & Grading */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quality & Grading</h2>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Quality Parameters:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Seed size</li>
                <li>Moisture content</li>
                <li>Foreign matter</li>
                <li>Damaged seeds</li>
                <li>Oil content (indicative)</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Grading & Inspection:</strong>
              </p>
              <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                <li>Grading performed based on agreed quality parameters</li>
                <li>Inspection criteria defined at the time of order</li>
                <li>Third-party inspection available on request</li>
              </ul>

              {/* Packaging & Handling */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Packaging & Handling</h2>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Packaging Options:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Jute bags</li>
                <li>PP bags</li>
                <li>Bulk packaging (subject to order requirements)</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Handling & Storage:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Store in a dry, well-ventilated area</li>
                <li>Protect from moisture and contamination</li>
                <li>Handling should follow standard agricultural commodity practices</li>
              </ul>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Packaging format is finalized based on quantity, destination, and buyer requirements.
              </p>
            </div>

            {/* RIGHT AT-A-GLANCE — 1/3 */}
            <div style={{ flex: 1, padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px', height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>At a Glance</h3>
              
              {/* Image Placeholder - Not rendering per instructions */}
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  height: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  borderRadius: '4px',
                  color: '#888',
                }}
              >
                [Product Image Placeholder]
              </div>

              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Available Documents</h4>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li>Quality inspection report (where applicable)</li>
                <li>Weight and packing list</li>
                <li>Certificate of Origin (if required)</li>
                <li>Third-party inspection certificate (on request)</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                Documentation is prepared in line with shipment terms and destination country requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OPERATIONAL CONTEXT (For Castor Seed: Sourcing & Quality Protocol) */}
        <section style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sourcing & Quality Protocol</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            Castor Seed is procured from approved suppliers based on quality and grading criteria. Parinay Oils maintains a structured sourcing model focused on consistency, grading, and supply reliability.
          </p>
          <Link
            href="/manufacturing-quality"
            style={{
              display: 'inline-block',
              color: '#2563eb',
              textDecoration: 'underline',
            }}
          >
            Learn more about Quality & Compliance →
          </Link>
        </section>

        {/* SECTION 4 — LOGISTICS */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Logistics</h2>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Minimum Order Quantity (MOQ):</strong>
              </p>
              <p style={{ marginBottom: '1rem' }}>Available on request</p>
            </div>
            
            <div>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Incoterms Supported:</strong>
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li>FOB</li>
                <li>CIF</li>
                <li>EXW</li>
              </ul>
            </div>
            
            <div>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Loading Ports:</strong>
              </p>
              <p style={{ marginBottom: '1rem' }}>Indian ports (specific port finalized per shipment)</p>
            </div>
          </div>
          
          <p style={{ color: '#666' }}>
            Logistics terms are agreed based on order volume, destination, and packaging format.
          </p>
        </section>

        {/* SECTION 5 — INQUIRY (No form per instructions) */}
        <section style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Inquiry</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            For sourcing details, quality parameters, pricing, or shipment-related inquiries, please contact Parinay Oils through the official inquiry channel.
          </p>
          <p style={{ color: '#666' }}>
            All inquiries are evaluated based on availability, order volume, and destination requirements.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2563eb',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
