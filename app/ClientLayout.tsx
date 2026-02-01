'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      {children}
    </>
  );
}
