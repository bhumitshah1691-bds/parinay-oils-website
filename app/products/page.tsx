import Link from 'next/link'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <>
      {/* SECTION 1 — ORIENTATION */}
      <section className="bg-neutral-off-white" style={{ padding: '2.5rem 0 2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <Link href="/" style={{ color: '#666', transition: 'color 150ms ease' }} className="hover:text-brand-green">Home</Link>
            {' > '}
            <span>Products</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: '#0f3d28' }}>Products</h1>
          <p style={{ margin: 0, color: '#555', maxWidth: '800px', lineHeight: 1.7 }}>
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
                backgroundColor: '#f8f7f4',
                border: '1px solid #e5e5e5',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8e8e8' }}>
                <Image
                  src="/products/castor-oil.jpg"
                  alt="Castor Oil"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
                {/* Status Label */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
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
                  Manufactured
                </div>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#0f3d28' }}>Castor Oil</h2>

                <p style={{ marginBottom: '0.5rem', color: '#555', fontSize: '0.875rem' }}>
                  <strong>Category:</strong> Vegetable Oil (Industrial / Pharmaceutical / Technical use)
                </p>

                <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#444' }}>
                  Castor Oil is a vegetable oil obtained from the seeds of the castor plant through controlled processing. The product is supplied for use in downstream manufacturing where stable physical properties and reliable supply are required.
                </p>

                <Link
                  href="/products/castor-oil"
                  style={{
                    display: 'inline-block',
                    padding: '0.625rem 1.25rem',
                    backgroundColor: '#1a5a3c',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    transition: 'background-color 150ms ease',
                  }}
                  className="hover:bg-brand-green-dark"
                >
                  View Product Details
                </Link>
              </div>
            </div>

            {/* Castor Seed Card */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#f8f7f4',
                border: '1px solid #e5e5e5',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8e8e8' }}>
                <Image
                  src="/products/castor-seed.jpg"
                  alt="Castor Seed"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
                {/* Status Label */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
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

                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#0f3d28' }}>Castor Seed</h2>

                <p style={{ marginBottom: '0.5rem', color: '#555', fontSize: '0.875rem' }}>
                  <strong>Category:</strong> Oilseed (Agricultural commodity)
                </p>

                <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#444' }}>
                  Castor Seed is an agricultural commodity sourced for use in downstream industrial processing. The product is offered to buyers engaged in processing or extraction activities.
                </p>

                <Link
                  href="/products/castor-seed"
                  style={{
                    display: 'inline-block',
                    padding: '0.625rem 1.25rem',
                    backgroundColor: '#1a5a3c',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    transition: 'background-color 150ms ease',
                  }}
                  className="hover:bg-brand-green-dark"
                >
                  View Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ADDITIONAL CONTEXT */}
      <section className="bg-neutral-light-green" style={{ padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '1.5rem 2rem', 
            borderRadius: '6px',
            border: '1px solid #e5e5e5'
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
