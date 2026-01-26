'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        // Slow parallax: background moves at 40% of scroll speed
        const scrollY = window.scrollY;
        const parallaxOffset = scrollY * 0.4;
        backgroundRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url(/hero/home-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* Subtle Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground Content - Static, No Animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Primary Headline - Largest Text on Site */}
        <h1 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-white leading-tight tracking-tight mb-6">
          Manufacturers and Suppliers of Castor Oil and Castor Seed
        </h1>

        {/* Supporting Statement */}
        <p className="text-xl md:text-lg sm:text-base text-white/90 mb-10 max-w-2xl mx-auto">
          Serving domestic and international markets with consistent quality and supply.
        </p>

        {/* Primary CTA - Solid Brand Green */}
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-brand-green text-white font-medium text-lg rounded hover:bg-brand-green-dark transition-colors duration-200"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
