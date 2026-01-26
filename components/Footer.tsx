import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark" style={{ 
      width: '100%',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto',
    }}>
      <div style={{ 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 3rem',
      }}>
        {/* Main Footer Content - 4 Columns */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr 1fr 1.25fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Column 1 - Company Information */}
          <div>
            <h4 style={{ 
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              fontSize: '1.125rem',
              fontWeight: 600,
            }}>
              Parinay Oils
            </h4>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}>
              Manufacturers and Suppliers of Castor Oil and Castor Seed
            </p>
            <div style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              lineHeight: 1.8,
            }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                Parinay Go India LLP
              </p>
              <p style={{ margin: 0 }}>
                114, 1st/F, Shri Ghantakarna Mall,<br />
                Near Ghantakarna Market, Sarangpur,<br />
                Ahmedabad, Gujarat – 380001, India
              </p>
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 style={{ 
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              Products
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
            }}>
              <li>
                <Link href="/products/castor-oil" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Castor Oil
                </Link>
              </li>
              <li>
                <Link href="/products/castor-seed" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Castor Seed
                </Link>
              </li>
              <li>
                <Link href="/products" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 style={{ 
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              Company
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
            }}>
              <li>
                <Link href="/about" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/manufacturing-quality" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Manufacturing & Quality
                </Link>
              </li>
              <li>
                <Link href="/applications" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/sustainability" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/insights" style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }} className="hover:text-white">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 style={{ 
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              Contact
            </h4>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: '0 0 0.25rem 0',
                }}>
                  Phone
                </p>
                <a href="tel:+918866099050" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}>
                  +91 88660 99050
                </a>
              </div>
              <div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: '0 0 0.25rem 0',
                }}>
                  Email
                </p>
                <a href="mailto:parinaytrade@gmail.com" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}>
                  parinaytrade@gmail.com
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/contact" style={{ 
                  display: 'inline-block',
                  padding: '0.625rem 1.25rem',
                  backgroundColor: '#1a5a3c',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'background-color 150ms ease',
                }} className="hover:bg-brand-green-light">
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Copyright */}
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem',
            margin: 0,
          }}>
            © {currentYear} Parinay Oils. All rights reserved.
          </p>

          {/* Attribution */}
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.75rem',
            margin: 0,
          }}>
            Created with ❤️ by Prism-IQ
          </p>
        </div>
      </div>
    </footer>
  );
}
