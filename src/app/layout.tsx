import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generalData } from './data/general'

export const metadata: Metadata = {
  title: generalData.name + " - CV",
  description: 'Template by James Harrison - (https://github.com/jamesharrison0799)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-20'>{children}</body>
    </html>
  )
}
