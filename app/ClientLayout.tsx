'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';

const STORAGE_KEY = 'parinay_loader_seen';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check sessionStorage only after mount to avoid hydration mismatch
    const hasSeenLoader = sessionStorage.getItem(STORAGE_KEY);
    if (!hasSeenLoader) {
      setShowLoader(true);
    }
    setMounted(true);
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setShowLoader(false);
  };

  // Always render children to avoid layout shift and hydration issues
  // Loader renders as a fixed overlay above content
  return (
    <>
      {mounted && showLoader && <Loader onComplete={handleLoaderComplete} />}
      {children}
    </>
  );
}
