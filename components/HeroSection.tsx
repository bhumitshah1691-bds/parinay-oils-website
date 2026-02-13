'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position to parallax offset (max 8px)
  const parallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    // Trigger animations after 500ms delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Mouse move handler for parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Animation variants
  const contentAnimation = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    ease: 'easeOut' as const,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background Layer - NO ANIMATION */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/raw_assets/hero/hero_bg.mp4.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content Layer with Mouse Parallax */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{
          x: parallaxX,
          y: parallaxY,
          paddingBottom: '8vh',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={contentAnimation}
            transition={transition}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] tracking-tight mb-6"
          >
            Castor Oil Manufacturing & Trade
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={contentAnimation}
            transition={{ ...transition, delay: 0.12 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Supplying quality castor oil and castor seeds for domestic and global markets.
          </motion.p>

        </div>
      </motion.div>

      {/* Subtle bottom gradient for depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
          zIndex: 2,
        }}
      />

    </section>
  );
}
