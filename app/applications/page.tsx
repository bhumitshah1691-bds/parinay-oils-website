import Link from 'next/link';
import Image from 'next/image';

export default function ApplicationsPage() {
  return (
    <>
      {/* SECTION 1 — PAGE HEADER */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '400px' }}>
              <Image
                src="/company/about.jpg"
                alt="Industrial applications"
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
                <span>Applications & Industries</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Applications & Industries
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Industry-level application areas for Castor Oil and Castor Seed.
              </p>
              
              <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                Applications listed are indicative only. Final application validation is the responsibility of the buyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRIES SERVED */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Industries Served
              </h2>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Products supplied by Parinay Oils are used across multiple industry segments:
              </p>
              
              <ul style={{ 
                color: '#444', 
                paddingLeft: '1.5rem', 
                fontSize: '1.0625rem', 
                lineHeight: '2',
                marginBottom: '1.5rem'
              }}>
                <li>Industrial manufacturing</li>
                <li>Pharmaceuticals</li>
                <li>Cosmetics & personal care</li>
                <li>Lubricants</li>
                <li>Paints & coatings</li>
                <li>Chemicals</li>
                <li>Agriculture-related processing</li>
              </ul>
              
              <p style={{ fontSize: '0.9375rem', color: '#666' }}>
                Application listings are indicative and non-exhaustive.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Industrial manufacturing"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUCT MAPPING */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Castor Oil */}
            <div>
              <span className="badge badge-light" style={{ marginBottom: '1rem' }}>Manufactured</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', marginTop: '0.75rem' }}>
                Castor Oil Applications
              </h2>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '2' }}>
                <li>Industrial manufacturing</li>
                <li>Pharmaceuticals</li>
                <li>Cosmetics & personal care</li>
                <li>Lubricants</li>
                <li>Paints & coatings</li>
                <li>Chemicals</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/products/castor-oil" className="btn-primary-light">
                  View Castor Oil Details
                </Link>
              </div>
            </div>

            {/* Castor Seed */}
            <div>
              <span className="badge badge-light" style={{ marginBottom: '1rem' }}>Traded / Sourced</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', marginTop: '0.75rem' }}>
                Castor Seed Applications
              </h2>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '2' }}>
                <li>Industrial processing</li>
                <li>Agricultural commodity trading</li>
                <li>Oil extraction and downstream processing</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/products/castor-seed" className="btn-primary-light">
                  View Castor Seed Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — USAGE CLARIFICATION */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Product handling"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Usage Clarification
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Applications listed on this page are provided for general reference only. Product performance, suitability, and regulatory compliance depend on specific use cases, formulations, and destination market requirements.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Buyers are responsible for validating end-use suitability and ensuring compliance with applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INQUIRY CTA */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand" style={{ padding: '4rem 0' }}>
        <div className="master-container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '3rem'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                Application Questions?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', opacity: 0.95 }}>
                For application-specific questions or additional technical information, please contact Parinay Oils through the official inquiry channel.
              </p>
            </div>
            <div>
              <Link href="/contact" className="btn-primary-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
