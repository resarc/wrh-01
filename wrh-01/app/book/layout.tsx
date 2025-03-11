'use client'
import { Worker } from '@react-pdf-viewer/core';

import HomeButton from '@/app/components/HomeButton'

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative left-[50px] w-[calc(100vw-50px)]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" />

      <HomeButton />
      {children}
    </main>
  )
}
