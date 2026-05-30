'use client';

import type { ReactNode, RefObject } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  snapContainerRef: RefObject<HTMLDivElement | null>;
}

/**
 * MainLayout – CSS Scroll Snap Template
 *
 * The outer div is the scroll container with:
 *   scroll-snap-type: y mandatory   → vertical mandatory snap
 *   overflow-y: scroll               → scrollable
 *   height: 100dvh                   → full viewport height (dynamic viewport units for mobile)
 *
 * Each child <section> must use the `snap-section` class (defined in globals.css):
 *   scroll-snap-align: start         → snap to top of each section
 *   scroll-snap-stop: always         → no skipping sections
 *   height: 100dvh                   → each section fills viewport
 */
export default function MainLayout({ children, snapContainerRef }: MainLayoutProps) {
  return (
    <div
      ref={snapContainerRef}
      className="snap-container"
      role="main"
    >
      {children}
    </div>
  );
}
