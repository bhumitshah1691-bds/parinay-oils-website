import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Parinay Oils',
  description: 'Parinay Oils Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ClientLayout>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const observer = new IntersectionObserver(
                  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
                  { threshold: 0.1 }
                );
                document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
