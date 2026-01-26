import Link from 'next/link';
import Image from 'next/image';
import InquiryForm from './InquiryForm';

export default function ContactPage() {
  return (
    <>
      {/* SECTION 1 — CONTACT HEADER */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '400px' }}>
              <Image
                src="/facility/warehouse.jpg"
                alt="Parinay Oils operations"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              {/* Breadcrumb */}
              <nav style={{ marginBottom: '1.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 0.5rem' }}>&gt;</span>
                <span>Contact Us</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Contact Us
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                For product information, sourcing details, or business-related questions, please contact Parinay Oils through the official inquiry channel.
              </p>

              {/* Contact Details Card */}
              <div className="info-card">
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      Phone
                    </p>
                    <a href="tel:+918866099050" style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}>
                      +91 88660 99050
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      Email
                    </p>
                    <a href="mailto:parinaytrade@gmail.com" style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}>
                      parinaytrade@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPANY INFORMATION */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Address */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Corporate Headquarters
              </h2>
              
              <div className="info-card-light" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Registered Office
                </h3>
                <p style={{ color: '#444', margin: 0, lineHeight: '1.8' }}>
                  <strong>Parinay Go India LLP</strong><br />
                  114, 1st/F, Shri Ghantakarna Mall,<br />
                  Near Ghantakarna Market, Sarangpur,<br />
                  Ahmedabad, Gujarat – 380001, India
                </p>
              </div>

              <div className="info-card-light">
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Business Hours
                </h3>
                <p style={{ color: '#444', margin: 0, lineHeight: '1.8' }}>
                  Monday – Friday: 9:00 AM – 6:00 PM (IST)<br />
                  <span style={{ color: '#666', fontSize: '0.875rem' }}>
                    Indian Standard Time (UTC+5:30)
                  </span>
                </p>
              </div>
            </div>

            {/* Export Desk */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Export Desk
              </h2>
              
              <div className="info-card-light" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  International Inquiries
                </h3>
                <p style={{ color: '#444', margin: 0, lineHeight: '1.8' }}>
                  For export-related inquiries, pricing, documentation, and logistics coordination.
                </p>
              </div>

              <div className="info-card-light" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Domestic Sales
                </h3>
                <p style={{ color: '#444', margin: 0, lineHeight: '1.8' }}>
                  For domestic supply inquiries and bulk orders within India.
                </p>
              </div>

              <div className="info-card-light">
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  General Inquiry
                </h3>
                <p style={{ color: '#444', margin: 0, lineHeight: '1.8' }}>
                  For product information and general business inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INQUIRY FORM */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left - Form Introduction */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Send an Inquiry
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Please fill out the form with your inquiry details. Our team will review your request and respond based on inquiry scope and relevance.
              </p>
              <p style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
                Detailed responses are provided for product specifications, pricing, and business-related questions.
              </p>
            </div>

            {/* Right - Form */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '2rem', 
              borderRadius: '8px',
            }}>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RELATED LINKS */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light" style={{ padding: '3rem 0' }}>
        <div className="master-container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f3d28' }}>
                Looking for Product Information?
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', margin: 0 }}>
                Visit our product pages for detailed specifications and documentation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/products/castor-oil" className="btn-secondary">
                Castor Oil
              </Link>
              <Link href="/products/castor-seed" className="btn-secondary">
                Castor Seed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
