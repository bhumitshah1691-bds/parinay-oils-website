import Link from 'next/link';
import Image from 'next/image';

export default function SustainabilityPage() {
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
                src="/facility/processing.jpg"
                alt="Sustainable operations"
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
                <span>Sustainability</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Sustainability
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Operational practices relevant to manufacturing and sourcing at Parinay Oils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OPERATIONAL PRACTICES */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Operational Practices
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Parinay Oils manages manufacturing and sourcing activities with attention to resource usage, waste handling, and operational efficiency. Practices are implemented to support regulatory compliance and responsible operations within the applicable business scope.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Sustainability-related practices are integrated into day-to-day operations rather than positioned as standalone initiatives.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Operations management"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SUPPLY CHAIN */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/company/about.jpg"
                alt="Supply chain"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Supply Chain & Sourcing
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>
                  Sourcing Approach
                </h3>
                <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Raw materials sourced through approved suppliers</li>
                  <li>Supplier selection considers quality, consistency, and regulatory alignment</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>
                  Supply Chain Oversight
                </h3>
                <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Documentation-based verification</li>
                  <li>Periodic review of sourcing practices where applicable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMPLIANCE */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Compliance & Responsibility
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Sustainability-related practices are aligned with applicable regulatory requirements and internal operating procedures. Parinay Oils does not represent sustainability claims beyond what can be supported through documentation and operational scope.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Compliance responsibilities are managed in accordance with product type, sourcing model, and destination-specific requirements.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/products/castor-seed.jpg"
                alt="Responsible sourcing"
                fill
                style={{ objectFit: 'cover' }}
              />
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
                Questions About Our Practices?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', opacity: 0.95 }}>
                For sustainability-related practices, sourcing clarification, or compliance questions, please contact Parinay Oils through the official inquiry channel.
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
