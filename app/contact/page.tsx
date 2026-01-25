import Link from 'next/link'
import InquiryForm from './InquiryForm'

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* SECTION 1 — ORIENTATION */}
        <section style={{ paddingTop: '2rem', paddingBottom: '2rem', marginBottom: '2rem', borderBottom: '1px solid #e5e5e5' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>&gt;</span>
            <span>Contact Us</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ margin: '0 0 1rem 0', fontSize: '2rem', fontWeight: '600' }}>
            Contact Us / Export Desk
          </h1>
        </section>

        {/* SECTION 2 — CORPORATE HEADQUARTERS */}
        <section style={{ display: 'flex', paddingTop: '1rem', paddingBottom: '3rem', gap: '4rem' }}>
          {/* LEFT — Address & Hours */}
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
              Corporate Headquarters
            </h2>

            {/* Registered Office Address */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Registered Office
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                [Registered Office Address]
              </p>
            </div>

            {/* Plant / Factory Address */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Manufacturing Facility
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                [Plant / Factory Address]
              </p>
            </div>

            {/* Map Placeholder */}
            <div style={{ 
              marginBottom: '1.5rem', 
              backgroundColor: '#f5f5f5', 
              border: '1px solid #ddd',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888'
            }}>
              [Map Placeholder]
            </div>

            {/* Business Hours */}
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Business Hours
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                Monday – Friday: 9:00 AM – 6:00 PM (IST)
              </p>
              <p style={{ margin: '0.25rem 0 0 0', lineHeight: '1.7', color: '#555', fontSize: '0.875rem' }}>
                Indian Standard Time (UTC+5:30)
              </p>
            </div>
          </div>

          {/* RIGHT — Departmental Directory */}
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
              Departmental Directory
            </h2>

            {/* Domestic Sales */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '3px solid #333' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Domestic Sales
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#555', fontSize: '0.875rem' }}>
                [Contact Name]<br />
                [Contact Details]
              </p>
            </div>

            {/* International Exports */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '3px solid #333' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                International Exports
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#555', fontSize: '0.875rem' }}>
                [Contact Name]<br />
                [Contact Details]
              </p>
            </div>

            {/* Procurement / Purchase */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '3px solid #333' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                Procurement / Purchase
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#555', fontSize: '0.875rem' }}>
                [Contact Details]
              </p>
            </div>

            {/* General Inquiry */}
            <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderLeft: '3px solid #333' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: '500' }}>
                General Inquiry
              </h3>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#555', fontSize: '0.875rem' }}>
                [Contact Details]
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — INQUIRY INTERFACE */}
        <section style={{ padding: '2.5rem 0 3rem 0', backgroundColor: '#fafafa', marginTop: '1rem', borderTop: '1px solid #e5e5e5' }}>
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
            Inquiry
          </h2>
          <p style={{ margin: '0 0 2rem 0', lineHeight: '1.7', color: '#555', maxWidth: '600px' }}>
            For product information, sourcing details, or business-related questions, please contact Parinay Oils through the official inquiry channel. Detailed responses are provided based on inquiry scope and relevance.
          </p>

          {/* Inquiry Form */}
          <InquiryForm />
        </section>
    </div>
  )
}
