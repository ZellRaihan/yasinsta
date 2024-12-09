import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { generateMetadata } from '@/lib/metadata'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = generateMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}