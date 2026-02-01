'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // Animation sequence
    tl
      // Scale up the image
      .to(image, {
        scale: 1.1,
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
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        ref={imageRef}
        src="/raw_assets/loader/frame_01.jpg"
        alt="Loading"
        style={{
          maxWidth: '60vw',
          maxHeight: '80vh',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
