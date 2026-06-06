'use client';

import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#1E104E]"
      role="main"
    >
      {children}
    </div>
  );
}
