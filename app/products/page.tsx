import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <>
      {/* SECTION 1 — PRODUCTS HEADER */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '400px' }}>
              <Image
                src="/facility/processing.jpg"
                alt="Parinay Oils production"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              {/* Breadcrumb */}
              <nav style={{ marginBottom: '1.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 0.5rem' }}>&gt;</span>
                <span>Products</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Our Products
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Parinay Oils supplies castor-based products for industrial and commercial applications.
              </p>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We operate in two distinct capacities: manufacturing Castor Oil, and trading/sourcing Castor Seed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CASTOR OIL */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
                Manufactured
              </span>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#0f3d28', marginTop: '0.5rem' }}>
                Castor Oil
              </h2>
              
              <p style={{ fontSize: '0.9375rem', color: '#666', marginBottom: '1rem' }}>
                <strong>Category:</strong> Vegetable Oil (Industrial / Pharmaceutical / Technical use)
              </p>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Castor Oil is a vegetable oil obtained from the seeds of the castor plant through controlled processing. The product is supplied for use in downstream manufacturing where stable physical properties and reliable supply are required.
              </p>

              <div className="info-card-light" style={{ marginBottom: '2rem' }}>
                <ul style={{ color: '#444', paddingLeft: '1.25rem', margin: 0, lineHeight: '1.9' }}>
                  <li>Manufactured product</li>
                  <li>Supplied for industrial and commercial applications</li>
                  <li>Detailed specifications available on product page</li>
                </ul>
              </div>
              
              <Link href="/products/castor-oil" className="btn-primary">
                View Castor Oil Details
              </Link>
            </div>
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '450px' }}>
              <Image
                src="/products/castor-oil.jpg"
                alt="Castor Oil"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CASTOR SEED */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '450px' }}>
              <Image
                src="/products/castor-seed.jpg"
                alt="Castor Seed"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <span className="badge badge-light" style={{ marginBottom: '1rem' }}>
                Traded / Sourced
              </span>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
                Castor Seed
              </h2>
              
              <p style={{ fontSize: '0.9375rem', opacity: 0.85, marginBottom: '1rem' }}>
                <strong>Category:</strong> Oilseed (Agricultural commodity)
              </p>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. The product is offered to buyers engaged in processing or extraction activities.
              </p>

              <div className="info-card" style={{ marginBottom: '2rem' }}>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: '1.9' }}>
                  <li>Traded and sourced product</li>
                  <li>Supplied as an agricultural commodity for downstream processing</li>
                  <li>Quality and grading details available on product page</li>
                </ul>
              </div>
              
              <Link href="/products/castor-seed" className="btn-primary-light">
                View Castor Seed Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INQUIRY CTA */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light" style={{ padding: '4rem 0' }}>
        <div className="master-container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '3rem'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#0f3d28' }}>
                Need More Information?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#555' }}>
                For detailed specifications, documentation, and inquiry options, please visit individual product pages or contact us directly.
              </p>
            </div>
            <div>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
