import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/facility/processing.jpg" alt="Parinay Oils production" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 max-w-[800px] mx-auto">
          <nav className="mb-3 sm:mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Products</span>
          </nav>
          <h1 className="text-white mb-3 sm:mb-4">Our Products</h1>
          <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto">
            Parinay Oils supplies castor-based products for industrial and commercial applications. We operate in two distinct capacities: manufacturing Castor Oil, and trading/sourcing Castor Seed.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CASTOR OIL */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
