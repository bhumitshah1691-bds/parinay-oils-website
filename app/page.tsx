import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <HeroSection />

      {/* SECTION 1 — COMPANY IDENTIFICATION */}
      <section style={{ backgroundColor: '#fafafa', padding: '4rem 0 3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Company Identification
          </h2>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and Castor Seed. The company operates with a focus on process discipline, supply reliability, and alignment with buyer-specific requirements.
            </p>
            <p style={{ lineHeight: '1.7', margin: 0 }}>
              Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and trading arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE PRODUCTS */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Core Products
          </h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Castor Oil Card */}
            <div style={{ 
              flex: 1, 
              backgroundColor: '#f9f9f9',
              padding: '2rem',
              borderRadius: '6px',
              border: '1px solid #e8e8e8'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                Castor Oil:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.7' }}>
                <li>Manufactured product</li>
                <li>Supplied for industrial and commercial applications</li>
                <li>Detailed specifications available on the product page</li>
              </ul>
            </div>
            {/* Castor Seed Card */}
            <div style={{ 
              flex: 1, 
              backgroundColor: '#f9f9f9',
              padding: '2rem',
              borderRadius: '6px',
              border: '1px solid #e8e8e8'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                Castor Seed:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.7' }}>
                <li>Traded and sourced product</li>
                <li>Supplied as an agricultural commodity for downstream processing</li>
                <li>Quality and grading details available on the product page</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MANUFACTURING & QUALITY SNAPSHOT */}
      <section style={{ backgroundColor: '#f5f5f4', padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Manufacturing & Quality Snapshot
          </h2>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Parinay Oils manufactures Castor Oil through controlled processes designed to support consistent quality and supply reliability. Manufacturing and quality controls are applied in alignment with defined internal procedures and applicable regulatory expectations.
            </p>
            <p style={{ lineHeight: '1.7', margin: 0 }}>
              Detailed information on manufacturing practices and quality controls is provided on the Manufacturing & Quality page.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — APPLICATIONS SNAPSHOT */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Applications Snapshot
          </h2>
          <div style={{ 
            backgroundColor: '#f8faf8', 
            padding: '2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Products supplied by Parinay Oils are used across multiple industry segments, including:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              <li>Industrial manufacturing</li>
              <li>Pharmaceuticals</li>
              <li>Cosmetics & personal care</li>
              <li>Lubricants</li>
              <li>Paints & coatings</li>
              <li>Chemicals</li>
              <li>Agricultural processing</li>
            </ul>
            <p style={{ lineHeight: '1.7', margin: 0 }}>
              Application details are provided for reference only.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CREDIBILITY & TRADE READINESS */}
      <section style={{ backgroundColor: '#fafafa', padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Credibility & Trade Readiness
          </h2>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Parinay Oils supports domestic and export-oriented business engagements through defined processes covering documentation, logistics coordination, and communication.
            </p>
            <p style={{ lineHeight: '1.7', margin: 0 }}>
              Trade-related information is shared based on product scope, order requirements, and destination regulations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INQUIRY */}
      <section style={{ backgroundColor: '#f5f5f4', padding: '3.5rem 0 4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Inquiry
          </h2>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              For product information, sourcing details, or business-related questions, please contact Parinay Oils through the official inquiry channel.
            </p>
            <p style={{ lineHeight: '1.7', margin: 0 }}>
              Detailed responses are provided based on inquiry scope and relevance.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
