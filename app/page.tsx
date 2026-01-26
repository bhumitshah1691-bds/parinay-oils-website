import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Keep as-is */}
      <HeroSection />

      {/* SECTION 1 — AUTHORITY / COMPANY IDENTIFICATION */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Industrial processing facility"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                About Parinay Oils
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and Castor Seed. The company operates with a focus on process discipline, supply reliability, and alignment with buyer-specific requirements.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and trading arrangements.
              </p>
              <Link href="/about" className="btn-primary-light">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCTS */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0f3d28' }}>
              Our Products
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              We supply two core products serving industrial and commercial applications worldwide.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {/* Castor Oil Card */}
            <div className="product-card">
              <div className="product-card-image">
                <Image
                  src="/products/castor-oil.jpg"
                  alt="Castor Oil"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="product-card-content">
                <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>Manufactured</span>
                <h3 style={{ fontSize: '1.5rem', color: '#0f3d28', marginTop: '0.75rem' }}>Castor Oil</h3>
                <ul style={{ color: '#555', marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
                  <li>Manufactured product</li>
                  <li>Supplied for industrial and commercial applications</li>
                  <li>Detailed specifications available on product page</li>
                </ul>
                <Link href="/products/castor-oil" className="btn-secondary">
                  View Product Details
                </Link>
              </div>
            </div>

            {/* Castor Seed Card */}
            <div className="product-card">
              <div className="product-card-image">
                <Image
                  src="/products/castor-seed.jpg"
                  alt="Castor Seed"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="product-card-content">
                <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>Traded / Sourced</span>
                <h3 style={{ fontSize: '1.5rem', color: '#0f3d28', marginTop: '0.75rem' }}>Castor Seed</h3>
                <ul style={{ color: '#555', marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
                  <li>Traded and sourced product</li>
                  <li>Supplied as an agricultural commodity for downstream processing</li>
                  <li>Quality and grading details available on product page</li>
                </ul>
                <Link href="/products/castor-seed" className="btn-secondary">
                  View Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MANUFACTURING & PROCESS */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Manufacturing & Quality
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Parinay Oils manufactures Castor Oil through controlled processes designed to support consistent quality and supply reliability. Manufacturing and quality controls are applied in alignment with defined internal procedures and applicable regulatory expectations.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Detailed information on manufacturing practices and quality controls is provided on the Manufacturing & Quality page.
              </p>
              <Link href="/manufacturing-quality" className="btn-primary-light">
                View Manufacturing Process
              </Link>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Warehouse and logistics facility"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOUNDER / LEADERSHIP */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column - Founder Image */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%',
              minHeight: '450px'
            }}>
              <div style={{ 
                position: 'relative',
                width: '320px',
                maxWidth: '100%',
                aspectRatio: '4 / 5',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}>
                <Image
                  src="/company/founder.png"
                  alt="Founder of Parinay Oils"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 22%'
                  }}
                />
              </div>
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Leadership & Vision
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Parinay Oils supports domestic and export-oriented business engagements through defined processes covering documentation, logistics coordination, and communication.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                Trade-related information is shared based on product scope, order requirements, and destination regulations.
              </p>
              <Link href="/about" className="btn-primary">
                Learn About Our Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — APPLICATIONS / INDUSTRIES */}
      {/* Background: White (breathing) */}
      <section className="master-section bg-section-white">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Industries We Serve
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Products supplied by Parinay Oils are used across multiple industry segments, including:
              </p>
              <ul style={{ 
                color: '#444', 
                marginBottom: '2rem', 
                paddingLeft: '1.5rem',
                fontSize: '1.0625rem',
                lineHeight: '2'
              }}>
                <li>Industrial manufacturing</li>
                <li>Pharmaceuticals</li>
                <li>Cosmetics & personal care</li>
                <li>Lubricants</li>
                <li>Paints & coatings</li>
                <li>Chemicals</li>
                <li>Agricultural processing</li>
              </ul>
              <p style={{ fontSize: '0.9375rem', color: '#666', marginBottom: '1.5rem' }}>
                Application details are provided for reference only.
              </p>
              <Link href="/applications" className="btn-primary">
                View Applications
              </Link>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/company/about.jpg"
                alt="Industrial applications"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INQUIRY CTA */}
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
                Ready to Discuss Your Requirements?
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.95 }}>
                For product information, sourcing details, or business-related questions, please contact Parinay Oils through the official inquiry channel.
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
