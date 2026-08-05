"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
