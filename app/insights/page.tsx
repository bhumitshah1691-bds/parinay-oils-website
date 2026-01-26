import Link from 'next/link';
import Image from 'next/image';

export default function InsightsPage() {
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
                alt="Industry insights"
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
                <span>Insights</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Insights
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Informational content related to products, industry context, and regulatory awareness to support buyer understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONTENT CATEGORIES */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Content Categories
              </h2>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Our insights cover the following categories:
              </p>
              
              <ul style={{ 
                color: '#444', 
                paddingLeft: '1.5rem', 
                fontSize: '1.0625rem', 
                lineHeight: '2',
                marginBottom: '1.5rem'
              }}>
                <li>Product information</li>
                <li>Industry applications</li>
                <li>Regulatory and compliance updates</li>
                <li>Supply chain and trade context</li>
              </ul>
              
              <p style={{ fontSize: '0.9375rem', color: '#666' }}>
                Content is published for general informational purposes only.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Industry knowledge"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ARTICLE FORMAT */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Article resources"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Article Format
              </h2>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Each article entry includes:
              </p>
              
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '2', marginBottom: '1.5rem' }}>
                <li>Article title</li>
                <li>Category</li>
                <li>Publication date</li>
                <li>Brief summary (2–3 lines)</li>
                <li>Reference links (where applicable)</li>
              </ul>
              
              <p style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
                Articles are listed in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — DISCLAIMER */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Content Disclaimer
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Content published under Insights is provided for general informational purposes only. It does not constitute technical advice, regulatory guidance, or professional recommendations.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Readers are responsible for verifying information relevance and applicability based on their specific requirements and jurisdiction.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/products/castor-oil.jpg"
                alt="Product knowledge"
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
                Questions About Our Content?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', opacity: 0.95 }}>
                For questions related to published content or requests for additional information, please contact Parinay Oils through the official inquiry channel.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary-light">
                Contact Us
              </Link>
              <Link href="/products" className="btn-primary-light" style={{ backgroundColor: 'transparent', border: '2px solid #ffffff' }}>
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
