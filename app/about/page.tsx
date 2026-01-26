import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — ORIENTATION */}
      <section style={{ backgroundColor: '#fafafa', padding: '2.5rem 0 2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>&gt;</span>
            <span>About Us</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ margin: '0 0 1rem 0', fontSize: '2rem', fontWeight: '600' }}>
            About Parinay Oils
          </h1>

          {/* Brief scope / context description */}
          <p style={{ margin: 0, color: '#555', maxWidth: '800px' }}>
            Factual information about Parinay Oils as a manufacturing and trading entity.
          </p>
        </div>
      </section>

      {/* SECTION 2 — INFORMATION ARCHITECTURE */}
      <section style={{ backgroundColor: '#ffffff', padding: '3rem 0 3.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '4rem' }}>
            {/* SIDEBAR (Left) */}
            <aside style={{ width: '250px', flexShrink: 0 }}>
              {/* Sub-navigation Card */}
              <div style={{ 
                backgroundColor: '#f9f9f9', 
                padding: '1.5rem', 
                borderRadius: '6px',
                border: '1px solid #e8e8e8',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
                  On This Page
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#company-overview" style={{ color: '#333', textDecoration: 'none' }}>
                      Company Overview
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#business-activities" style={{ color: '#333', textDecoration: 'none' }}>
                      Business Activities & Scope
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#operating-principles" style={{ color: '#333', textDecoration: 'none' }}>
                      Operating Principles
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#compliance" style={{ color: '#333', textDecoration: 'none' }}>
                      Compliance & Responsibility
                    </a>
                  </li>
                  <li style={{ marginBottom: '0' }}>
                    <a href="#inquiry" style={{ color: '#333', textDecoration: 'none' }}>
                      Inquiry
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div style={{ 
                backgroundColor: '#f8faf8', 
                padding: '1.5rem', 
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
                  Contact
                </h3>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#555' }}>
                  <Link href="/contact" style={{ color: '#333' }}>
                    Business Inquiries
                  </Link>
                </p>
              </div>
            </aside>

            {/* MAIN CONTENT (Right) */}
            <div style={{ flex: 1, maxWidth: '800px' }}>
              {/* SECTION 1 — COMPANY OVERVIEW */}
              <section id="company-overview" style={{ 
                marginBottom: '2rem', 
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                  Company Overview
                </h2>
                <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                  Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and Castor Seed. The company operates with a focus on process discipline, supply reliability, and alignment with buyer-specific requirements.
                </p>
                <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                  Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and trading arrangements. The company's operations are structured to support domestic and export-oriented business engagements.
                </p>
              </section>

              {/* SECTION 2 — BUSINESS ACTIVITIES & SCOPE */}
              <section id="business-activities" style={{ 
                marginBottom: '2rem',
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                  Business Activities & Scope
                </h2>
                
                <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                  Core Activities:
                </h3>
                <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                  <li>Manufacturing of Castor Oil</li>
                  <li>Trading and sourcing of Castor Seed</li>
                </ul>

                <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                  Operational Scope:
                </h3>
                <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                  <li>Domestic supply</li>
                  <li>Export-oriented supply based on buyer requirements</li>
                </ul>

                <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                  Business activities are conducted in alignment with applicable regulations and defined internal processes.
                </p>
              </section>

              {/* SECTION 3 — OPERATING PRINCIPLES */}
              <section id="operating-principles" style={{ 
                marginBottom: '2rem',
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                  Operating Principles
                </h2>
                <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                  Parinay Oils operates with an emphasis on consistency, regulatory awareness, and transactional clarity. Business engagements are managed with defined processes covering sourcing, manufacturing, documentation, and communication.
                </p>
                <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                  Operational decisions are guided by buyer requirements, product scope, and destination-specific considerations.
                </p>
              </section>

              {/* SECTION 4 — COMPLIANCE & RESPONSIBILITY */}
              <section id="compliance" style={{ 
                marginBottom: '2rem',
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                  Compliance & Responsibility
                </h2>

                <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                  Compliance Focus:
                </h3>
                <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                  <li>Adherence to applicable trade and supply regulations</li>
                  <li>Alignment with customer and destination-specific requirements</li>
                </ul>

                <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                  Responsibility Scope:
                </h3>
                <ul style={{ margin: '0 0 0 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                  <li>Product scope clarity (manufactured vs traded)</li>
                  <li>Accurate documentation and disclosure</li>
                  <li>Defined communication channels for business inquiries</li>
                </ul>
              </section>

              {/* SECTION 5 — INQUIRY */}
              <section id="inquiry" style={{ 
                backgroundColor: '#f8faf8',
                padding: '2rem',
                borderRadius: '6px',
                border: '1px solid #e8e8e8'
              }}>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                  Inquiry
                </h2>
                <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                  For company-related information, business scope clarification, or compliance-related questions, please contact Parinay Oils through the official inquiry channel.
                </p>
                <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                  Requests are addressed based on relevance and information scope.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — RELATED CONTEXT */}
      <section style={{ backgroundColor: '#f5f5f4', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '1.5rem 2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
              Related Information
            </h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '2rem' }}>
              <li>
                <Link href="/products" style={{ color: '#333' }}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/manufacturing-quality" style={{ color: '#333' }}>
                  Manufacturing & Quality
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#333' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
