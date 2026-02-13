import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/company/about.jpg" alt="Parinay Oils operations" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 max-w-[800px] mx-auto">
          <nav className="mb-3 sm:mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-white mb-3 sm:mb-4">About Parinay Oils</h1>
          <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto">
            Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and Castor Seed.
          </p>
        </div>
      </section>

      {/* SECTION 2 — COMPANY OVERVIEW */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="master-content">
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#444', marginBottom: '1rem' }}>
                The company operates with a focus on process discipline, supply reliability, and alignment with buyer-specific requirements.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#444' }}>
                Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and trading arrangements. The company&apos;s operations are structured to support domestic and export-oriented business engagements.
              </p>
            </div>
            <div className="master-visual">
              <Image src="/company/about.jpg" alt="Parinay Oils operations" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOUNDER MESSAGE */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Leadership & Vision
              </h2>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Parinay Oils operates with an emphasis on consistency, regulatory awareness, and transactional clarity. Business engagements are managed with defined processes covering sourcing, manufacturing, documentation, and communication.
              </p>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Operational decisions are guided by buyer requirements, product scope, and destination-specific considerations.
              </p>

              <div className="info-card-light" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Operating Principles
                </h3>
                <ul style={{ color: '#555', paddingLeft: '1.25rem', margin: 0 }}>
                  <li>Process discipline and consistency</li>
                  <li>Regulatory awareness and compliance</li>
                  <li>Transactional clarity and documentation</li>
                  <li>Buyer-aligned communication</li>
                </ul>
              </div>
            </div>
            {/* Visual Column - Leadership Photos */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}>
                {/* Paridhi Singh Solanki - Founder & MD */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: '1 1 180px',
                  minWidth: '140px',
                  maxWidth: '220px'
                }}>
                  <div style={{ 
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3 / 4',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f0',
                    boxShadow: '0 12px 40px rgba(15, 61, 40, 0.12), 0 0 0 1px rgba(15, 61, 40, 0.06)'
                  }}>
                    <Image
                      src="/raw_assets/company/paridhi.jpg.jpeg"
                      alt="Paridhi Singh Solanki, Founder & MD of Parinay Oils"
                      fill
                      sizes="(max-width: 768px) 45vw, 220px"
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                  </div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0f3d28', margin: '0.75rem 0 0', textAlign: 'center' }}>
                    Paridhi Singh Solanki
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#555', margin: '0.25rem 0 0', textAlign: 'center' }}>
                    Founder & MD
                  </p>
                </div>
                {/* Vinay Dubey - Director */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: '1 1 180px',
                  minWidth: '140px',
                  maxWidth: '220px'
                }}>
                  <div style={{ 
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3 / 4',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f0',
                    boxShadow: '0 12px 40px rgba(15, 61, 40, 0.12), 0 0 0 1px rgba(15, 61, 40, 0.06)'
                  }}>
                    <Image
                      src="/raw_assets/company/vinay.jpg.jpeg"
                      alt="Vinay Dubey, Director of Parinay Oils"
                      fill
                      sizes="(max-width: 768px) 45vw, 220px"
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                  </div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0f3d28', margin: '0.75rem 0 0', textAlign: 'center' }}>
                    Vinay Dubey
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#555', margin: '0.25rem 0 0', textAlign: 'center' }}>
                    Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BUSINESS ACTIVITIES & SCOPE */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Processing facility"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Business Activities & Scope
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>
                  Core Activities
                </h3>
                <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Manufacturing of Castor Oil</li>
                  <li>Trading and sourcing of Castor Seed</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>
                  Operational Scope
                </h3>
                <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Domestic supply</li>
                  <li>Export-oriented supply based on buyer requirements</li>
                </ul>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                Business activities are conducted in alignment with applicable regulations and defined internal processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMPLIANCE & RESPONSIBILITY */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Compliance & Responsibility
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Compliance Focus
                </h3>
                <ul style={{ color: '#444', paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Adherence to applicable trade and supply regulations</li>
                  <li>Alignment with customer and destination-specific requirements</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Responsibility Scope
                </h3>
                <ul style={{ color: '#444', paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.9' }}>
                  <li>Product scope clarity (manufactured vs traded)</li>
                  <li>Accurate documentation and disclosure</li>
                  <li>Defined communication channels for business inquiries</li>
                </ul>
              </div>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Warehouse operations"
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
                Get in Touch
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.95 }}>
                For company-related information, business scope clarification, or compliance-related questions, please contact Parinay Oils through the official inquiry channel.
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
