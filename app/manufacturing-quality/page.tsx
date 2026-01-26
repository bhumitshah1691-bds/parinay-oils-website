import Link from 'next/link';
import Image from 'next/image';

export default function ManufacturingQualityPage() {
  return (
    <>
      {/* SECTION 1 — PAGE HEADER */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual" style={{ minHeight: '450px' }}>
              <Image
                src="/facility/processing.jpg"
                alt="Manufacturing facility"
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
                <span>Manufacturing & Quality</span>
              </nav>

              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Manufacturing & Quality
              </h1>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Manufacturing capabilities and quality controls for Castor Oil supplied by Parinay Oils.
              </p>
              
              <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
                This page applies only to Castor Oil. No processing or manufacturing claims apply to Castor Seed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MANUFACTURING OVERVIEW */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Manufacturing Overview
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Parinay Oils manufactures Castor Oil through a controlled process designed to support consistent output and suitability for industrial and commercial use. Manufacturing activities are focused on maintaining process discipline, material traceability, and adherence to defined quality parameters.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Raw material sourcing, processing, and finished product handling are managed to align with internal quality procedures and applicable regulatory expectations.
              </p>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/warehouse.jpg"
                alt="Raw material handling"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROCESS FLOW */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/company/about.jpg"
                alt="Manufacturing process"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Manufacturing Process Flow
              </h2>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Process Stages:
              </p>
              
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.0625rem', lineHeight: '2', marginBottom: '1.5rem' }}>
                <li>Raw material receipt and inspection</li>
                <li>Cleaning and preparation</li>
                <li>Oil extraction and processing</li>
                <li>Filtration and clarification</li>
                <li>Quality checks during processing</li>
                <li>Finished product storage and dispatch</li>
              </ul>
              
              <p style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
                Detailed process parameters are maintained internally and are available on request where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — QUALITY CONTROL */}
      {/* Background: Light Neutral */}
      <section className="master-section bg-section-light">
        <div className="master-container">
          <div className="master-grid-reverse">
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Quality Control & Assurance
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Quality control is integrated across key stages of the manufacturing process to ensure consistency and conformity with defined specifications. Checks are conducted on raw materials, in-process batches, and finished products prior to dispatch.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Testing parameters, acceptance criteria, and documentation practices are defined internally and aligned with customer and regulatory requirements.
              </p>
              
              <div className="info-card-light">
                <h3 style={{ fontSize: '1rem', color: '#0f3d28', marginBottom: '0.75rem' }}>
                  Certifications & Compliance
                </h3>
                <ul style={{ color: '#444', paddingLeft: '1.25rem', margin: 0, marginBottom: '1rem', lineHeight: '1.8' }}>
                  <li>Certifications: Available on request</li>
                  <li>Manufacturing per applicable local and export regulations</li>
                  <li>Compliance information shared based on destination requirements</li>
                </ul>
              </div>
            </div>
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/facility/processing.jpg"
                alt="Quality control"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOURCING REFERENCE */}
      {/* Background: White */}
      <section className="master-section bg-section-white">
        <div className="master-container">
          <div className="master-grid">
            {/* Visual Column */}
            <div className="master-visual">
              <Image
                src="/products/castor-seed.jpg"
                alt="Castor seed sourcing"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content Column */}
            <div className="master-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f3d28' }}>
                Sourcing & Quality Discipline
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                Castor Seed supplied by Parinay Oils is sourced through external suppliers and is not processed or manufactured in-house. Sourcing is managed through defined quality and grading criteria agreed at the time of procurement.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: '#444' }}>
                Quality checks for traded materials are limited to inspection and documentation as applicable. Manufacturing controls described on this page do not apply to traded products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INQUIRY CTA */}
      {/* Background: Brand Green */}
      <section className="master-section bg-section-brand" style={{ padding: '4rem 0' }}>
        <div className="master-container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '3rem'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                Need More Information?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', opacity: 0.95 }}>
                For manufacturing capabilities, quality controls, or compliance-related information, please contact Parinay Oils through the official inquiry channel.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary-light">
                Contact Us
              </Link>
              <Link href="/products/castor-oil" className="btn-primary-light" style={{ backgroundColor: 'transparent', border: '2px solid #ffffff' }}>
                View Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
