import Link from 'next/link';
import Image from 'next/image';

export default function CastorOilPage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/products/castor-oil.jpg" alt="Castor Oil" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 max-w-[800px] mx-auto">
          <nav className="mb-3 sm:mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">&gt;</span>
            <span>Castor Oil</span>
          </nav>
          <span className="badge badge-light mb-3 inline-block">Manufactured</span>
          <h1 className="text-white mb-3 sm:mb-4">Castor Oil</h1>
          <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto">
            Vegetable Oil for Industrial, Pharmaceutical and Technical applications.
          </p>
        </div>
      </section>

      {/* SECTION 1b — Product Classification */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="info-card max-w-2xl">
            <div className="grid gap-2 sm:grid-cols-2">
              <p style={{ margin: 0 }}><strong>Product Category:</strong> Vegetable Oil (Industrial / Pharmaceutical / Technical use)</p>
              <p style={{ margin: 0 }}><strong>HS Code:</strong> Available on request</p>
              <p style={{ margin: 0 }}><strong>CAS Number:</strong> Available on request</p>
              <p style={{ margin: 0 }}><strong>Manufacturing Location:</strong> Ahmedabad, Gujarat, India</p>
              <p style={{ margin: 0 }}><strong>Intended Use:</strong> Industrial and commercial applications</p>
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
                Castor Oil is a vegetable oil obtained from the seeds of the castor plant through controlled processing. At Parinay Oils, Castor Oil is manufactured using a process focused on consistency, safety, and suitability for industrial and commercial applications.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                The product is supplied for use in downstream manufacturing where stable physical properties and reliable supply are required. Final application suitability and regulatory approvals are the responsibility of the buyer.
              </p>
              <Link href="/manufacturing-quality" className="btn btn-outline">
                Learn About Manufacturing Process
              </Link>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Manufacturing process"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SPECIFICATIONS STRUCTURE */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Quality control"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Technical Specifications
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                    Specification Parameters
                  </h3>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.9' }}>
                    <li>Appearance</li>
                    <li>Color</li>
                    <li>Odor</li>
                    <li>Acid Value</li>
                    <li>Moisture Content</li>
                    <li>Iodine Value</li>
                    <li>Saponification Value</li>
                    <li>Hydroxyl Value</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                    Specification Details
                  </h3>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.9' }}>
                    <li>All values provided in Technical Data Sheet (TDS)</li>
                    <li>Test methods per applicable standards</li>
                    <li>Documentation available on request</li>
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
                    <li>ISO Tank</li>
                    <li>Flexi Tank</li>
                    <li>Steel Drums</li>
                    <li>HDPE Drums</li>
                  </ul>
                </div>
                <div className="info-card-light">
                  <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                    Handling & Storage
                  </h3>
                  <ul style={{ color: '#444', paddingLeft: '1.25rem', margin: 0, lineHeight: '1.8' }}>
                    <li>Store in cool, dry place</li>
                    <li>Away from direct sunlight</li>
                    <li>Keep containers sealed</li>
                    <li>Follow industrial safety practices</li>
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
                  <li>Technical Data Sheet (TDS)</li>
                  <li>Material Safety Data Sheet (MSDS)</li>
                  <li>Certificate of Analysis (CoA)</li>
                </ul>
                <p style={{ fontSize: '0.875rem', opacity: 0.85, marginBottom: '1.5rem' }}>
                  Documentation is provided for each shipment where applicable.
                </p>
                <a
                  href="/docs/castor-oil-technical-overview.pdf"
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
                For product specifications, pricing, samples, or export-related inquiries, please contact Parinay Oils through the official inquiry channel.
              </p>
              
              <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '2rem' }}>
                Business inquiries are reviewed based on product availability, order volume, and destination requirements.
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
