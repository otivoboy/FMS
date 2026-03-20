'use client';

import { useState, useEffect } from 'react';
import { Cog } from 'lucide-react';
import { cn } from '@/lib/utils';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <Cog className="h-12 w-12 text-primary animate-spin" />
    </div>
  );
};

export default Preloader;
