import Link from 'next/link'

export default function CastorOilPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* SECTION 1 — PRODUCT IDENTIFICATION */}
        <section style={{ paddingTop: '2rem', paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #e5e5e5' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666' }}>Home</Link>
            {' > '}
            <Link href="/products" style={{ color: '#666' }}>Products</Link>
            {' > '}
            <span>Castor Oil</span>
          </nav>

          {/* Product Title */}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Castor Oil</h1>

          {/* Product Classification */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Product Category:</strong> Vegetable Oil (Industrial / Pharmaceutical / Technical use)
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>HS Code:</strong> Available on request
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>CAS Number:</strong> Available on request
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Manufacturing Location:</strong> Ahmedabad, Gujarat, India
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Intended Use:</strong> Industrial and commercial applications
            </p>
          </div>

          {/* Status Label */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#2563eb',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '4px',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Manufactured
          </div>
        </section>

        {/* SECTION 2 — TECHNICAL SPECIFICATIONS */}
        <section style={{ paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* LEFT CONTENT — 2/3 */}
            <div style={{ flex: 2 }}>
              {/* Product Overview */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Product Overview</h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                Castor Oil is a vegetable oil obtained from the seeds of the castor plant through controlled processing. At Parinay Oils, Castor Oil is manufactured using a process focused on consistency, safety, and suitability for industrial and commercial applications.
              </p>
              <p style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                The product is supplied for use in downstream manufacturing where stable physical properties and reliable supply are required. Final application suitability and regulatory approvals are the responsibility of the buyer.
              </p>

              {/* Technical Specifications */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technical Specifications</h2>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Specification Parameters:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Appearance</li>
                <li>Color</li>
                <li>Odor</li>
                <li>Acid Value</li>
                <li>Moisture Content</li>
                <li>Iodine Value</li>
                <li>Saponification Value</li>
                <li>Hydroxyl Value</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Specification Details:</strong>
              </p>
              <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                <li>All specification values are provided in the Technical Data Sheet (TDS)</li>
                <li>Test methods and tolerances are defined per applicable standards</li>
                <li>Documentation available on request</li>
              </ul>

              {/* Packaging Options */}
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Packaging & Handling</h2>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Packaging Options:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>ISO Tank</li>
                <li>Flexi Tank</li>
                <li>Steel Drums</li>
                <li>HDPE Drums</li>
              </ul>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Handling & Storage:</strong>
              </p>
              <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Store in a cool, dry place away from direct sunlight</li>
                <li>Containers should be kept sealed when not in use</li>
                <li>Handling should follow standard industrial safety practices</li>
              </ul>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Packaging availability and suitability depend on order quantity and destination requirements.
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
                <li>Technical Data Sheet (TDS)</li>
                <li>Material Safety Data Sheet (MSDS)</li>
                <li>Certificate of Analysis (CoA)</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>
                Documentation is provided for each shipment where applicable. Additional compliance documents may be shared based on destination country requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OPERATIONAL CONTEXT (For Castor Oil: Manufacturing) */}
        <section style={{ marginBottom: '2.5rem', padding: '2rem', backgroundColor: '#fafafa', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Manufacturing Process</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            Castor Oil is manufactured at our facility in Ahmedabad, Gujarat, India using a process focused on consistency, safety, and suitability for industrial and commercial applications.
          </p>
          <Link
            href="/manufacturing-quality"
            style={{
              display: 'inline-block',
              color: '#2563eb',
              textDecoration: 'underline',
            }}
          >
            Learn more about Manufacturing & Quality →
          </Link>
        </section>

        {/* SECTION 4 — LOGISTICS */}
        <section style={{ paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #e5e5e5' }}>
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
              <p style={{ marginBottom: '1rem' }}>Indian ports (specific port based on shipment requirements)</p>
            </div>
          </div>
          
          <p style={{ color: '#666' }}>
            Delivery timelines and logistics arrangements are finalized based on order specifications and destination.
          </p>
        </section>

        {/* SECTION 5 — INQUIRY (No form per instructions) */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Inquiry</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            For product specifications, pricing, samples, or export-related inquiries, please contact Parinay Oils through the official inquiry channel.
          </p>
          <p style={{ color: '#666' }}>
            Business inquiries are reviewed based on product availability, order volume, and destination requirements.
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
    </div>
  )
}
