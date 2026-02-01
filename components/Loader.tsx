'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageWrapper = imageRef.current;

    if (!container || !imageWrapper) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // Set initial state
    gsap.set(imageWrapper, {
      scale: 0.8,
      opacity: 0,
    });

    gsap.set(container, {
      opacity: 1,
    });

    // Animation sequence
    tl
      // Fade in and scale up the image with organic easing
      .to(imageWrapper, {
        scale: 1.1,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      })
      // Fade out the entire loader
      .to(container, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/raw_assets/loader/frame_01.jpg"
          alt=""
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </div>
  );
}
