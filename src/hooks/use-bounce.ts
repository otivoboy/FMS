'use client';

import { useEffect, useRef } from 'react';

type UseBounceOptions = {
  enabled?: boolean;
};

export const useBounce = (
  btnRef: React.RefObject<HTMLDivElement>,
  shadowRef: React.RefObject<HTMLDivElement>,
  options: UseBounceOptions = { enabled: true }
) => {
  const { enabled } = options;
  const animationFrameId = useRef<number>();
  const y = useRef(0);
  const vy = useRef(0);

  const gravity = 0.9;
  const damping = 0.65;
  const initialVelocity = -15;
  const resetDelay = 800;
  const maxHeight = -120;

  useEffect(() => {
    if (!enabled) {
      // Reset styles if disabled
      if (btnRef.current) btnRef.current.style.transform = 'translateY(0px)';
      if (shadowRef.current) {
        shadowRef.current.style.transform = 'translateX(-50%) scale(1)';
        shadowRef.current.style.opacity = '0';
      }
      return;
    }

    vy.current = initialVelocity;

    const bounce = () => {
      if (!btnRef.current || !shadowRef.current) {
        animationFrameId.current = requestAnimationFrame(bounce);
        return;
      }

      vy.current += gravity;
      y.current += vy.current;

      if (y.current < maxHeight) {
        y.current = maxHeight;
        vy.current = 0;
      }

      if (y.current > 0) {
        y.current = 0;
        vy.current = -vy.current * damping;

        if (Math.abs(vy.current) < 2) {
          setTimeout(() => {
            if(enabled) vy.current = initialVelocity;
          }, resetDelay);
        }
      }

      // Apply bounce transform
      btnRef.current.style.transform = `translateY(${y.current}px)`;

      // Shadow animations
      const scale = 1 - Math.min(0.3, -y.current / 400);
      const opacity = 0.3 + Math.max(0, y.current / 150);
      shadowRef.current.style.transform = `translateX(-50%) scale(${scale})`;
      shadowRef.current.style.opacity = opacity.toString();

      animationFrameId.current = requestAnimationFrame(bounce);
    };

    animationFrameId.current = requestAnimationFrame(bounce);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [btnRef, shadowRef, enabled]);
};