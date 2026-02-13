import Link from 'next/link';
import Image from 'next/image';

export default function CastorSeedPage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/products/castor-seed.jpg" alt="Castor Seed" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 max-w-[800px] mx-auto">
          <nav className="mb-3 sm:mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">&gt;</span>
            <span>Castor Seed</span>
          </nav>
          <span className="badge badge-light mb-3 inline-block">Traded / Sourced</span>
          <h1 className="text-white mb-3 sm:mb-4">Castor Seed</h1>
          <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto">
            Oilseed (Agricultural commodity) for industrial and commercial processing.
          </p>
        </div>
      </section>

      {/* SECTION 1b — Product Classification */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="info-card max-w-2xl">
            <div className="grid gap-2 sm:grid-cols-2">
              <p style={{ margin: 0 }}><strong>Product Category:</strong> Oilseed (Agricultural commodity)</p>
              <p style={{ margin: 0 }}><strong>HS Code:</strong> Available on request</p>
              <p style={{ margin: 0 }}><strong>Origin:</strong> India</p>
              <p style={{ margin: 0 }}><strong>Sourcing Model:</strong> Procured from approved suppliers based on quality and grading criteria</p>
              <p style={{ margin: 0 }}><strong>Intended Use:</strong> Industrial and commercial processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT OVERVIEW */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Product Overview
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. Parinay Oils supplies Castor Seed through a structured sourcing model focused on consistency, grading, and supply reliability.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                The product is offered to buyers engaged in processing or extraction activities. Application suitability and regulatory compliance requirements are determined by the buyer.
              </p>
              <Link href="/manufacturing-quality" className="btn btn-outline">
                Learn About Quality & Compliance
              </Link>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Sourcing and storage"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUALITY & GRADING */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Quality grading process"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Quality & Grading
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                    Quality Parameters
                  </h3>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.9' }}>
                    <li>Seed size</li>
                    <li>Moisture content</li>
                    <li>Foreign matter</li>
                    <li>Damaged seeds</li>
                    <li>Oil content (indicative)</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                    Grading & Inspection
                  </h3>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.9' }}>
                    <li>Grading based on agreed parameters</li>
                    <li>Inspection criteria defined at order</li>
                    <li>Third-party inspection on request</li>
                  </ul>
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
                Detailed specifications and technical data are available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PACKAGING & LOGISTICS */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Packaging & Logistics
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div className="info-card-light">
                  <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                    Packaging Options
                  </h3>
                  <ul style={{ color: '#444', paddingLeft: '1.25rem', margin: 0, lineHeight: '1.8' }}>
                    <li>Jute bags</li>
                    <li>PP bags</li>
                    <li>Bulk packaging (subject to order)</li>
                  </ul>
                </div>
                <div className="info-card-light">
                  <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                    Handling & Storage
                  </h3>
                  <ul style={{ color: '#444', paddingLeft: '1.25rem', margin: 0, lineHeight: '1.8' }}>
                    <li>Store in dry, ventilated area</li>
                    <li>Protect from moisture</li>
                    <li>Follow commodity practices</li>
                  </ul>
                </div>
              </div>

              <div className="info-card-light">
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Logistics
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', color: '#333', marginBottom: '0.25rem', fontSize: '0.875rem' }}>MOQ</p>
                    <p style={{ color: '#555', margin: 0 }}>Available on request</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#333', marginBottom: '0.25rem', fontSize: '0.875rem' }}>Incoterms</p>
                    <p style={{ color: '#555', margin: 0 }}>FOB, CIF, EXW</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#333', marginBottom: '0.25rem', fontSize: '0.875rem' }}>Loading Ports</p>
                    <p style={{ color: '#555', margin: 0 }}>Indian ports</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/company/about.jpg"
                alt="Packaging and logistics"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DOCUMENTS & INQUIRY */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Documents Column */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Documents
              </h2>
              
              <div className="info-card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
                  Available Documents
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  <li>Quality inspection report (where applicable)</li>
                  <li>Weight and packing list</li>
                  <li>Certificate of Origin (if required)</li>
                  <li>Third-party inspection certificate (on request)</li>
                </ul>
                <p style={{ fontSize: '0.875rem', opacity: 0.85, marginBottom: '1.5rem' }}>
                  Documentation prepared in line with shipment terms and destination requirements.
                </p>
                <a
                  href="/docs/castor-seed-technical-overview.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-light"
                  style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
                >
                  Download Technical Overview
                </a>
              </div>
              
              <p style={{ fontSize: '0.8rem', opacity: 0.7, fontStyle: 'italic' }}>
                Technical overview provided for general reference only. Detailed specifications shared upon inquiry.
              </p>
            </div>

            {/* Inquiry Column */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Inquiry
              </h2>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                For sourcing details, quality parameters, pricing, or shipment-related inquiries, please contact Parinay Oils through the official inquiry channel.
              </p>
              
              <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '2rem' }}>
                All inquiries are evaluated based on availability, order volume, and destination requirements.
              </p>
              
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
