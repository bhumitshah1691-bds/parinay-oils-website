import Link from 'next/link'

export default function SustainabilityPage() {
  return (
    <div>
        {/* SECTION 1 — ORIENTATION */}
        <section style={{ padding: '2rem', borderBottom: '1px solid #eee' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>&gt;</span>
            <span>Sustainability</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ margin: '0 0 1rem 0', fontSize: '2rem', fontWeight: '600' }}>
            Sustainability
          </h1>

          {/* Brief scope / context description */}
          <p style={{ margin: 0, color: '#555', maxWidth: '800px' }}>
            Operational practices relevant to manufacturing and sourcing.
          </p>
        </section>

        {/* SECTION 2 — INFORMATION ARCHITECTURE */}
        <section style={{ display: 'flex', padding: '2rem', gap: '3rem' }}>
          {/* SIDEBAR (Left) */}
          <aside style={{ width: '250px', flexShrink: 0 }}>
            {/* Sub-navigation (section anchors) */}
            <nav style={{ marginBottom: '2rem' }}>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
                On This Page
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#operational-practices" style={{ color: '#333', textDecoration: 'none' }}>
                    Operational Practices
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#supply-chain" style={{ color: '#333', textDecoration: 'none' }}>
                    Supply Chain & Sourcing
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#compliance" style={{ color: '#333', textDecoration: 'none' }}>
                    Compliance & Responsibility
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#inquiry" style={{ color: '#333', textDecoration: 'none' }}>
                    Inquiry
                  </a>
                </li>
              </ul>
            </nav>

            {/* Quick Contact */}
            <div>
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
            {/* SECTION 1 — OPERATIONAL PRACTICES */}
            <section id="operational-practices" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Operational Practices
              </h2>
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                Parinay Oils manages manufacturing and sourcing activities with attention to resource usage, waste handling, and operational efficiency. Practices are implemented to support regulatory compliance and responsible operations within the applicable business scope.
              </p>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Sustainability-related practices are integrated into day-to-day operations rather than positioned as standalone initiatives.
              </p>
            </section>

            {/* SECTION 2 — SUPPLY CHAIN & SOURCING CONSIDERATIONS */}
            <section id="supply-chain" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Supply Chain & Sourcing Considerations
              </h2>
              
              <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Sourcing Approach:
              </h3>
              <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                <li>Raw materials sourced through approved suppliers</li>
                <li>Supplier selection considers quality, consistency, and regulatory alignment</li>
              </ul>

              <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Supply Chain Oversight:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                <li>Documentation-based verification</li>
                <li>Periodic review of sourcing practices where applicable</li>
              </ul>
            </section>

            {/* SECTION 3 — COMPLIANCE & RESPONSIBILITY */}
            <section id="compliance" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Compliance & Responsibility
              </h2>
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                Sustainability-related practices are aligned with applicable regulatory requirements and internal operating procedures. Parinay Oils does not represent sustainability claims beyond what can be supported through documentation and operational scope.
              </p>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Compliance responsibilities are managed in accordance with product type, sourcing model, and destination-specific requirements.
              </p>
            </section>

            {/* SECTION 4 — INQUIRY */}
            <section id="inquiry" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Inquiry
              </h2>
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                For sustainability-related practices, sourcing clarification, or compliance questions, please contact Parinay Oils through the official inquiry channel.
              </p>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Information is shared based on relevance, documentation availability, and product scope.
              </p>
            </section>
          </div>
        </section>

        {/* SECTION 3 — RELATED CONTEXT */}
        <section style={{ padding: '2rem', borderTop: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Related Information
          </h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '2rem' }}>
            <li>
              <Link href="/manufacturing-quality" style={{ color: '#333' }}>
                Manufacturing & Quality
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ color: '#333' }}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: '#333' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
    </div>
  )
}
