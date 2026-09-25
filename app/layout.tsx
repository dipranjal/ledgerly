import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ledgerly — Personal Finance Manager',
  description: 'A clear, calm workspace for understanding your money, tracking spending, and reaching your goals.',
  generator: 'Ledgerly',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TqCGWMFoo3NIZ5dOM4JGKrF2PQIpKk.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TqCGWMFoo3NIZ5dOM4JGKrF2PQIpKk.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TqCGWMFoo3NIZ5dOM4JGKrF2PQIpKk.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
