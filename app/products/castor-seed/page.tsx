import Link from 'next/link'
import Image from 'next/image'

export default function CastorSeedPage() {
  return (
    <>
      {/* SECTION 1 — PRODUCT IDENTIFICATION WITH DOMINANT IMAGE */}
      <section className="bg-neutral-off-white">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 3rem 2rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', transition: 'color 150ms ease' }} className="hover:text-brand-green">Home</Link>
            {' > '}
            <Link href="/products" style={{ color: '#666', transition: 'color 150ms ease' }} className="hover:text-brand-green">Products</Link>
            {' > '}
            <span>Castor Seed</span>
          </nav>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
            {/* LEFT — Dominant Product Image */}
            <div style={{ flex: '0 0 45%' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                aspectRatio: '4/3',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#e8e8e8',
              }}>
                <Image
                  src="/products/castor-seed.jpg"
                  alt="Castor Seed"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <p style={{ 
                marginTop: '0.75rem', 
                fontSize: '0.8rem', 
                color: '#888',
                fontStyle: 'italic',
              }}>
                Representational product image
              </p>
            </div>

            {/* RIGHT — Product Identification */}
            <div style={{ flex: 1 }}>
              {/* Status Label — Traded / Sourced */}
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.375rem 0.875rem',
                  backgroundColor: '#1a5a3c',
                  color: '#fff',
                  fontWeight: '600',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}
              >
                Traded / Sourced
              </div>

              <h1 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', color: '#0f3d28' }}>Castor Seed</h1>

              {/* Product Classification */}
              <div style={{ 
                backgroundColor: '#ffffff', 
                padding: '1.25rem 1.5rem', 
                borderRadius: '6px',
                border: '1px solid #e5e5e5',
              }}>
                <p style={{ margin: '0.25rem 0', color: '#444' }}>
                  <strong>Product Category:</strong> Oilseed (Agricultural commodity)
                </p>
                <p style={{ margin: '0.25rem 0', color: '#444' }}>
                  <strong>HS Code:</strong> Available on request
                </p>
                <p style={{ margin: '0.25rem 0', color: '#444' }}>
                  <strong>Origin:</strong> India
                </p>
                <p style={{ margin: '0.25rem 0', color: '#444' }}>
                  <strong>Sourcing Model:</strong> Procured from approved suppliers based on quality and grading criteria
                </p>
                <p style={{ margin: '0.25rem 0', color: '#444' }}>
                  <strong>Intended Use:</strong> Industrial and commercial processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 2 — PRODUCT OVERVIEW */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#0f3d28' }}>Product Overview</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: '#444', maxWidth: '65ch' }}>
            Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. Parinay Oils supplies Castor Seed through a structured sourcing model focused on consistency, grading, and supply reliability.
          </p>
          <p style={{ marginBottom: '0', lineHeight: 1.7, color: '#444', maxWidth: '65ch' }}>
            The product is offered to buyers engaged in processing or extraction activities. Application suitability and regulatory compliance requirements are determined by the buyer.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 3 — QUALITY & GRADING (Specification Structure) */}
      <section className="bg-neutral-light-green">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#0f3d28' }}>Quality & Grading</h2>
          
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
                Quality Parameters:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#444' }}>
                <li>Seed size</li>
                <li>Moisture content</li>
                <li>Foreign matter</li>
                <li>Damaged seeds</li>
                <li>Oil content (indicative)</li>
              </ul>
            </div>
            
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
                Grading & Inspection:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#444' }}>
                <li>Grading performed based on agreed quality parameters</li>
                <li>Inspection criteria defined at the time of order</li>
                <li>Third-party inspection available on request</li>
              </ul>
            </div>
          </div>
          
          <p style={{ color: '#666', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Detailed specifications and technical data are available on request.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 4 — PACKAGING & HANDLING */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#0f3d28' }}>Packaging & Handling</h2>
          
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
                Packaging Options:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#444' }}>
                <li>Jute bags</li>
                <li>PP bags</li>
                <li>Bulk packaging (subject to order requirements)</li>
              </ul>
            </div>
            
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
                Handling & Storage:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#444' }}>
                <li>Store in a dry, well-ventilated area</li>
                <li>Protect from moisture and contamination</li>
                <li>Handling should follow standard agricultural commodity practices</li>
              </ul>
            </div>
          </div>
          
          <p style={{ color: '#666', fontSize: '0.875rem' }}>
            Packaging format is finalized based on quantity, destination, and buyer requirements.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 5 — SOURCING & QUALITY PROTOCOL */}
      <section className="bg-neutral-light-green">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f3d28' }}>Sourcing & Quality Protocol</h2>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: '#444', maxWidth: '65ch' }}>
            Castor Seed is procured from approved suppliers based on quality and grading criteria. Parinay Oils maintains a structured sourcing model focused on consistency, grading, and supply reliability.
          </p>
          <Link
            href="/manufacturing-quality"
            style={{
              display: 'inline-block',
              color: '#1a5a3c',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              transition: 'color 150ms ease',
            }}
            className="hover:text-brand-green-dark"
          >
            Learn more about Quality & Compliance →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 6 — LOGISTICS */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#0f3d28' }}>Logistics</h2>
          
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Minimum Order Quantity (MOQ):
              </p>
              <p style={{ marginBottom: '1.5rem', color: '#444' }}>Available on request</p>
            </div>
            
            <div>
              <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Incoterms Supported:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', color: '#444' }}>
                <li>FOB</li>
                <li>CIF</li>
                <li>EXW</li>
              </ul>
            </div>
            
            <div>
              <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Loading Ports:
              </p>
              <p style={{ marginBottom: '1.5rem', color: '#444' }}>Indian ports (specific port finalized per shipment)</p>
            </div>
          </div>
          
          <p style={{ color: '#666', fontSize: '0.875rem' }}>
            Logistics terms are agreed based on order volume, destination, and packaging format.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 7 — DOCUMENTS (Secondary Actions) */}
      <section className="bg-neutral-light-green">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f3d28' }}>Documents</h2>
          
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '1.5rem 2rem', 
            borderRadius: '6px',
            border: '1px solid #e5e5e5',
            marginBottom: '1rem',
          }}>
            <p style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>
              Available Documents:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', color: '#444' }}>
              <li>Quality inspection report (where applicable)</li>
              <li>Weight and packing list</li>
              <li>Certificate of Origin (if required)</li>
              <li>Third-party inspection certificate (on request)</li>
            </ul>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1.5rem' }}>
              Documentation is prepared in line with shipment terms and destination country requirements.
            </p>
            
            {/* Secondary Document Link */}
            <a
              href="/docs/castor-seed-technical-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                border: '1px solid #1a5a3c',
                color: '#1a5a3c',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 150ms ease',
              }}
              className="hover:bg-brand-green hover:text-white"
            >
              Download Technical Overview (Indicative)
            </a>
          </div>
          
          {/* Mandatory Disclaimer */}
          <p style={{ 
            fontSize: '0.8rem', 
            color: '#666', 
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: '65ch',
          }}>
            Technical overview provided for general reference only. Detailed specifications, certificates, and confirmed parameters are shared upon inquiry.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #e5e5e5' }} />

      {/* SECTION 8 — INQUIRY */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 4rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f3d28' }}>Inquiry</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: '#444', maxWidth: '65ch' }}>
            For sourcing details, quality parameters, pricing, or shipment-related inquiries, please contact Parinay Oils through the official inquiry channel.
          </p>
          <p style={{ color: '#666', marginBottom: '1.5rem', maxWidth: '65ch' }}>
            All inquiries are evaluated based on availability, order volume, and destination requirements.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1a5a3c',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '0.9375rem',
              transition: 'background-color 150ms ease',
            }}
            className="hover:bg-brand-green-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
