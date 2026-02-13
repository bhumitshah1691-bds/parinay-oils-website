'use client'
import { useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Factory, Beaker, Leaf, Droplets, FlaskConical, Palette, Heart, CheckCircle2 } from 'lucide-react'

// Scroll animation hook
function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function HomePage() {
  useScrollAnimation()

  return (
    <Fragment>

      {/* ═══════════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden p-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility/processing.jpg"
            alt="Parinay Oils facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/65" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 mx-auto">
          <span className="section-label text-[#C8960C] fade-up">India-Based Manufacturer & Exporter</span>

          <h1 className="text-white max-w-full sm:max-w-[640px] mt-3 mb-6 fade-up fade-up-delay-1"
              style={{textShadow: '0 2px 20px rgba(0,0,0,0.3)'}}>
            Castor Oil Manufacturing & Trade
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-full sm:max-w-[500px] mb-8 sm:mb-10 leading-relaxed fade-up fade-up-delay-2">
            Supplying quality castor oil and castor seeds for domestic and global markets with process discipline and supply reliability.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 fade-up fade-up-delay-3">
            <Link href="/contact" className="btn btn-primary text-base px-6 sm:px-8 py-3 sm:py-3.5 text-center justify-center">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn btn-white text-base px-6 sm:px-8 py-3 sm:py-3.5 text-center justify-center">
              View Products
            </Link>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="relative z-10 bg-[#C8960C] py-3 sm:py-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
            {['Gujarat, India', 'ISO Process Controls', 'Export Ready', 'Est. 2020'].map((item, i) => (
              <span key={i} className="text-[#1A1A1A] text-[0.65rem] sm:text-[0.72rem] font-semibold tracking-[0.1em] uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ABOUT */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{background: 'var(--color-bg)'}}>
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text first in DOM = shows first on mobile */}
            <div className="order-1">
              <span className="section-label fade-up">Who We Are</span>
              <h2 className="heading-decorated mt-2 mb-8 fade-up fade-up-delay-1">About Parinay Oils</h2>
              <p className="text-[#4A4A4A] text-base mb-5 fade-up fade-up-delay-2">
                Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and Castor Seed. The company operates with a focus on process discipline, supply reliability, and alignment with buyer-specific requirements.
              </p>
              <p className="text-[#4A4A4A] text-base mb-8 fade-up fade-up-delay-2">
                Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and trading arrangements.
              </p>
              <Link href="/about" className="btn btn-outline fade-up fade-up-delay-3">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            {/* Image */}
            <div className="order-2 fade-up fade-up-delay-2">
              <div className="img-frame">
                <Image
                  src="/company/about.jpg"
                  alt="Parinay Oils facility"
                  width={600}
                  height={420}
                  className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PRODUCTS */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{background: 'var(--color-surface-2)'}}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="section-label fade-up">What We Supply</span>
            <h2 className="mt-2 mb-4 fade-up fade-up-delay-1">Our Products</h2>
            <p className="text-[#7A7A7A] max-w-[480px] mx-auto fade-up fade-up-delay-2">
              We supply two core products serving industrial and commercial applications worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                image: '/products/castor-oil.jpg',
                badge: 'Manufactured',
                badgeColor: 'bg-[#2D6A2F] text-white',
                title: 'Castor Oil',
                points: ['Manufactured product', 'Industrial and commercial applications', 'Detailed specifications available'],
                href: '/products/castor-oil',
                delay: 'fade-up-delay-1'
              },
              {
                image: '/products/castor-seed.jpg',
                badge: 'Traded / Sourced',
                badgeColor: 'bg-[#C8960C] text-[#1A1A1A]',
                title: 'Castor Seed',
                points: ['Traded and sourced product', 'Agricultural commodity', 'Quality and grading details available'],
                href: '/products/castor-seed',
                delay: 'fade-up-delay-2'
              }
            ].map((product, i) => (
              <div key={i} className={`card fade-up ${product.delay}`} style={{borderTop: '3px solid var(--color-brand-green)'}}>
                <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                  <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-8">
                  <h3 className="mb-4">{product.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[#4A4A4A]">
                        <CheckCircle2 size={16} className="text-[#2D6A2F] flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href={product.href} className="btn btn-outline text-sm px-6 py-2.5">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* MANUFACTURING — DARK SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{background: 'var(--color-surface-dark)', color: 'var(--color-text-inverse)', padding: '56px 0'}}>
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="section-label fade-up">Process & Quality</span>
              <h2 className="text-white mt-2 mb-6 fade-up fade-up-delay-1">Manufacturing & Quality</h2>
              <p className="text-white/75 text-base mb-6 leading-relaxed fade-up fade-up-delay-2">
                Parinay Oils manufactures Castor Oil through controlled processes designed to support consistent quality and supply reliability. Manufacturing and quality controls are applied in alignment with defined internal procedures and applicable regulatory expectations.
              </p>
              <Link href="/manufacturing-quality" className="btn btn-gold fade-up fade-up-delay-3">
                View Manufacturing Process <ArrowRight size={16} />
              </Link>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-8 border-t border-white/10 fade-up fade-up-delay-3">
                {[
                  { label: 'Process Controlled', icon: '⚙️' },
                  { label: 'Quality Assured', icon: '✓' },
                  { label: 'Export Ready', icon: '🌐' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p className="text-white/70 text-xs font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up fade-up-delay-2">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/facility/warehouse.jpg"
                  alt="Warehouse facility"
                  width={600}
                  height={420}
                  className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* LEADERSHIP / FOUNDERS */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{background: 'var(--color-surface-2)'}}>
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label fade-up">Our Team</span>
            <h2 className="mt-2 fade-up fade-up-delay-1">Leadership & Vision</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center sm:items-start max-w-[600px] mx-auto">
            {[
              {
                image: '/raw_assets/company/paridhi.jpg.jpeg',
                name: 'Paridhi Singh Solanki',
                title: 'Founder & Managing Director',
                delay: 'fade-up-delay-1'
              },
              {
                image: '/raw_assets/company/vinay.jpg.jpeg',
                name: 'Vinay Dubey',
                title: 'Director',
                delay: 'fade-up-delay-2'
              }
            ].map((person, i) => (
              <div key={i} className={`w-full max-w-[220px] sm:max-w-[260px] fade-up ${person.delay}`}>
                <div className="rounded-2xl overflow-hidden border-2 border-[#E5E0D5] shadow-lg"
                     style={{aspectRatio: '3/4', position: 'relative'}}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-[#1A1A1A]">{person.name}</h4>
                  <p className="text-sm text-[#7A7A7A] mt-1">{person.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-up fade-up-delay-3">
            <Link href="/about" className="btn btn-outline">
              Learn About Our Company <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* INDUSTRIES */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{background: 'var(--color-bg)'}}>
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label fade-up">Applications</span>
            <h2 className="mt-2 mb-4 fade-up fade-up-delay-1">Industries We Serve</h2>
            <p className="text-[#7A7A7A] max-w-[440px] mx-auto fade-up fade-up-delay-2">
              Products supplied by Parinay Oils are used across multiple industry segments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: Factory, label: 'Industrial Manufacturing' },
              { icon: Beaker, label: 'Pharmaceuticals' },
              { icon: Heart, label: 'Cosmetics & Personal Care' },
              { icon: Droplets, label: 'Lubricants' },
              { icon: Palette, label: 'Paints & Coatings' },
              { icon: FlaskConical, label: 'Chemicals' },
              { icon: Leaf, label: 'Agricultural Processing' },
              { icon: Factory, label: 'Export Markets' },
            ].map((item, i) => {
              const delayClass = ['fade-up-delay-1', 'fade-up-delay-2', 'fade-up-delay-3', 'fade-up-delay-4'][i % 4]
              return (
              <div
                key={i}
                className={`fade-up ${delayClass} flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl border border-[#E5E0D5] bg-white cursor-default group transition-all duration-300 hover:border-[#2D6A2F] hover:shadow-lg`}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110"
                     style={{background: 'rgba(45,106,47,0.1)'}}>
                  <item.icon size={20} className="text-[#2D6A2F] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A1A] leading-tight">{item.label}</span>
              </div>
            )
            })}
          </div>

          <div className="text-center mt-12 fade-up">
            <Link href="/applications" className="btn btn-outline">
              View Applications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA BANNER */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'var(--color-brand-green)',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 10px)',
          padding: '56px 0'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] text-center">
          <span className="section-label text-[#C8960C] fade-up">Get In Touch</span>
          <h2 className="text-white mt-2 mb-4 sm:mb-5 max-w-[540px] mx-auto fade-up fade-up-delay-1">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-white/75 text-sm sm:text-base max-w-[420px] mx-auto mb-8 sm:mb-10 leading-relaxed fade-up fade-up-delay-2">
            For product information, sourcing details, or business enquiries, contact Parinay Oils through our official inquiry channel.
          </p>
          <Link href="/contact" className="btn btn-white text-base px-8 sm:px-10 py-3.5 sm:py-4 fade-up fade-up-delay-3">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </Fragment>
  )
}
