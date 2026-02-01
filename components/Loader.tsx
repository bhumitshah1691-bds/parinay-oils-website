'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const ringContainer = ringContainerRef.current;
    const core = coreRef.current;
    const burst = burstRef.current;
    const particles = particlesRef.current;
    const flash = flashRef.current;

    if (!container || !ringContainer || !core || !burst || !particles || !flash) return;

    const rings = ringContainer.querySelectorAll('.loader-ring');
    const particleElements = particles.querySelectorAll('.loader-particle');

    // Initial states
    gsap.set(rings, { scale: 0, opacity: 0, rotation: 0 });
    gsap.set(core, { scale: 0, opacity: 0 });
    gsap.set(burst, { scale: 0, opacity: 0 });
    gsap.set(particleElements, { scale: 0, opacity: 0 });
    gsap.set(flash, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // === ACT 1: Genesis (0 → 1.2s) ===
    // Particles fade in like stars awakening
    tl.to(particleElements, {
      scale: 1,
      opacity: 0.6,
      duration: 1.4,
      stagger: {
        each: 0.03,
        from: 'random',
      },
      ease: 'power2.out',
    }, 0);

    // Core ignites
    tl.to(core, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(2)',
    }, 0.4);

    // === ACT 2: The Build (1.0s → 3.0s) ===
    // Rings emerge one by one, each spinning
    tl.to(rings[0], {
      scale: 1,
      opacity: 1,
      rotation: 180,
      duration: 1.2,
      ease: 'power3.out',
    }, 0.8);

    tl.to(rings[1], {
      scale: 1,
      opacity: 1,
      rotation: -120,
      duration: 1.0,
      ease: 'power3.out',
    }, 1.2);

    tl.to(rings[2], {
      scale: 1,
      opacity: 1,
      rotation: 90,
      duration: 0.9,
      ease: 'power3.out',
    }, 1.6);

    // Gentle continuous rotation during hold
    tl.to(rings[0], {
      rotation: 220,
      duration: 1.0,
      ease: 'none',
    }, 2.2);

    tl.to(rings[1], {
      rotation: -160,
      duration: 1.0,
      ease: 'none',
    }, 2.2);

    tl.to(rings[2], {
      rotation: 130,
      duration: 1.0,
      ease: 'none',
    }, 2.2);

    // Core pulses gently during hold
    tl.to(core, {
      scale: 1.15,
      duration: 0.8,
      ease: 'power1.inOut',
    }, 2.4);

    tl.to(core, {
      scale: 1.0,
      duration: 0.6,
      ease: 'power1.inOut',
    }, 3.2);

    // === ACT 3: The Charge (3.2s → 4.0s) ===
    // Core pulses with energy - the build-up
    tl.to(core, {
      scale: 1.5,
      duration: 0.5,
      ease: 'power2.in',
    }, 3.8);

    tl.to(core, {
      scale: 0.8,
      duration: 0.25,
      ease: 'power2.out',
    }, 4.3);

    // Rings accelerate rotation
    tl.to(rings[0], {
      rotation: 400,
      duration: 0.6,
      ease: 'power2.in',
    }, 3.8);

    tl.to(rings[1], {
      rotation: -280,
      duration: 0.6,
      ease: 'power2.in',
    }, 3.8);

    tl.to(rings[2], {
      rotation: 220,
      duration: 0.6,
      ease: 'power2.in',
    }, 3.8);

    // Particles pull inward (the intake)
    tl.to(particleElements, {
      scale: 0.4,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.in',
    }, 4.0);

    // === ACT 4: The Burst (4.4s → 5.2s) ===
    // Quick flash
    tl.to(flash, {
      opacity: 0.85,
      duration: 0.1,
      ease: 'power4.in',
    }, 4.55);

    tl.to(flash, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, 4.65);

    // Core explodes outward
    tl.to(core, {
      scale: 4,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    }, 4.55);

    // Burst ring expands
    tl.to(burst, {
      scale: 1,
      opacity: 1,
      duration: 0.1,
    }, 4.55);

    tl.to(burst, {
      scale: 20,
      opacity: 0,
      duration: 1.0,
      ease: 'power2.out',
    }, 4.65);

    // Rings explode outward
    tl.to(rings, {
      scale: 10,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: 'power2.out',
    }, 4.6);

    // Particles scatter
    tl.to(particleElements, {
      scale: 2.5,
      opacity: 0,
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      duration: 0.8,
      stagger: {
        each: 0.015,
        from: 'random',
      },
      ease: 'power2.out',
    }, 4.6);

    // === ACT 5: Clean Exit (5.2s → 5.6s) ===
    tl.to(container, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
    }, 5.5);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#030303',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Flash overlay */}
      <div
        ref={flashRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#fff',
          zIndex: 100,
          pointerEvents: 'none',
        }}
      />

      {/* Particles */}
      <div
        ref={particlesRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            className="loader-particle"
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Rings Container */}
      <div
        ref={ringContainerRef}
        style={{
          position: 'relative',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Ring 1 - Outermost */}
        <div
          className="loader-ring"
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: `
              0 0 20px rgba(255, 255, 255, 0.1),
              inset 0 0 20px rgba(255, 255, 255, 0.05)
            `,
          }}
        />

        {/* Ring 2 - Middle */}
        <div
          className="loader-ring"
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: `
              0 0 30px rgba(255, 255, 255, 0.15),
              inset 0 0 30px rgba(255, 255, 255, 0.1)
            `,
          }}
        />

        {/* Ring 3 - Inner */}
        <div
          className="loader-ring"
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.7)',
            boxShadow: `
              0 0 40px rgba(255, 255, 255, 0.2),
              inset 0 0 40px rgba(255, 255, 255, 0.15)
            `,
          }}
        />

        {/* Core */}
        <div
          ref={coreRef}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff 0%, rgba(255,255,255,0.8) 50%, transparent 70%)',
            boxShadow: `
              0 0 60px 20px rgba(255, 255, 255, 0.5),
              0 0 100px 40px rgba(255, 255, 255, 0.3),
              0 0 140px 60px rgba(255, 255, 255, 0.1)
            `,
          }}
        />

        {/* Burst ring */}
        <div
          ref={burstRef}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 0 60px 10px rgba(255, 255, 255, 0.6)',
          }}
        />
      </div>

      {/* Radial gradient overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
