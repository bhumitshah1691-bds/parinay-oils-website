import Link from 'next/link'

export default function ProductsPage() {
  return (
    <>
      {/* SECTION 1 — ORIENTATION */}
      <section style={{ backgroundColor: '#fafafa', padding: '2.5rem 0 2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666' }}>Home</Link>
            {' > '}
            <span>Products</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Products</h1>
          <p style={{ margin: 0, color: '#666', maxWidth: '800px' }}>
            Parinay Oils supplies castor-based products for industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Products List */}
      <section style={{ backgroundColor: '#ffffff', padding: '3rem 0 4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Castor Oil Card */}
            <div
              style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#f9f9f9',
                border: '1px solid #e8e8e8',
                borderRadius: '6px',
              }}
            >
              {/* Status Label */}
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}
              >
                Manufactured
              </div>

              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Castor Oil</h2>

              <p style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.875rem' }}>
                <strong>Category:</strong> Vegetable Oil (Industrial / Pharmaceutical / Technical use)
              </p>

              <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Castor Oil is a vegetable oil obtained from the seeds of the castor plant through controlled processing. The product is supplied for use in downstream manufacturing where stable physical properties and reliable supply are required.
              </p>

              <Link
                href="/products/castor-oil"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                }}
              >
                View Product Details
              </Link>
            </div>

            {/* Castor Seed Card */}
            <div
              style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#f9f9f9',
                border: '1px solid #e8e8e8',
                borderRadius: '6px',
              }}
            >
              {/* Status Label */}
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#059669',
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}
              >
                Traded / Sourced
              </div>

              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Castor Seed</h2>

              <p style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.875rem' }}>
                <strong>Category:</strong> Oilseed (Agricultural commodity)
              </p>

              <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. The product is offered to buyers engaged in processing or extraction activities.
              </p>

              <Link
                href="/products/castor-seed"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#059669',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                }}
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ADDITIONAL CONTEXT */}
      <section style={{ backgroundColor: '#f5f5f4', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '1.5rem 2rem', 
            borderRadius: '6px',
            border: '1px solid #e8e8e8'
          }}>
            <p style={{ margin: 0, color: '#555', lineHeight: 1.7 }}>
              For detailed specifications, documentation, and inquiry options, please visit individual product pages.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
