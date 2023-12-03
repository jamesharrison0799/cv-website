import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generalData } from './data/general'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
