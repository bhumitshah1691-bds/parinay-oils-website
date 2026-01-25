import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InsightsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* SECTION 1 — ORIENTATION */}
        <section style={{ padding: '2rem', borderBottom: '1px solid #eee' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>&gt;</span>
            <span>Insights</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ margin: '0 0 1rem 0', fontSize: '2rem', fontWeight: '600' }}>
            Insights
          </h1>

          {/* Brief scope / context description */}
          <p style={{ margin: 0, color: '#555', maxWidth: '800px' }}>
            Share informational content related to products, industry context, and regulatory awareness. Support buyer understanding without advisory positioning.
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
                  <a href="#content-categories" style={{ color: '#333', textDecoration: 'none' }}>
                    Content Categories
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#article-listing-format" style={{ color: '#333', textDecoration: 'none' }}>
                    Article Listing Format
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#content-disclaimer" style={{ color: '#333', textDecoration: 'none' }}>
                    Content Disclaimer
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
            {/* SECTION 1 — CONTENT CATEGORIES */}
            <section id="content-categories" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Content Categories
              </h2>
              
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                Categories:
              </p>
              <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                <li>Product information</li>
                <li>Industry applications</li>
                <li>Regulatory and compliance updates</li>
                <li>Supply chain and trade context</li>
              </ul>

              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Content is published for general informational purposes only.
              </p>
            </section>

            {/* SECTION 2 — ARTICLE LISTING FORMAT */}
            <section id="article-listing-format" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Article Listing Format
              </h2>
              
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                Each article entry includes:
              </p>
              <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                <li>Article title</li>
                <li>Category</li>
                <li>Publication date</li>
                <li>Brief summary (2–3 lines)</li>
                <li>Reference links (where applicable)</li>
              </ul>

              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Articles are listed in reverse chronological order.
              </p>
            </section>

            {/* SECTION 3 — CONTENT DISCLAIMER */}
            <section id="content-disclaimer" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Content Disclaimer
              </h2>
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                Content published under Insights is provided for general informational purposes only. It does not constitute technical advice, regulatory guidance, or professional recommendations.
              </p>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Readers are responsible for verifying information relevance and applicability based on their specific requirements and jurisdiction.
              </p>
            </section>

            {/* SECTION 4 — INQUIRY */}
            <section id="inquiry" style={{ marginBottom: '3rem' }}>
              <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                Inquiry
              </h2>
              <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7', color: '#333' }}>
                For questions related to published content or requests for additional information, please contact Parinay Oils through the official inquiry channel.
              </p>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Responses are provided based on relevance and information availability.
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
              <Link href="/products" style={{ color: '#333' }}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/applications" style={{ color: '#333' }}>
                Applications & Industries
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: '#333' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
