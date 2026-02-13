import Link from 'next/link';
import Image from 'next/image';
import InquiryForm from './InquiryForm';

export default function ContactPage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/facility/warehouse.jpg" alt="Parinay Oils operations" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 max-w-[800px] mx-auto">
          <nav className="mb-3 sm:mb-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Contact Us</span>
          </nav>
          <h1 className="text-white mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto">
            For product information, sourcing details, or business-related questions, please contact Parinay Oils through the official inquiry channel.
          </p>
        </div>
      </section>

      {/* SECTION 2 — COMPANY INFORMATION */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f3d28' }}>
                Looking for Product Information?
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', margin: 0 }}>
                Visit our product pages for detailed specifications and documentation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/products/castor-oil" className="btn btn-outline">
                Castor Oil
              </Link>
              <Link href="/products/castor-seed" className="btn btn-outline">
                Castor Seed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
