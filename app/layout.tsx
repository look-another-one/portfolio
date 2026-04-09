import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Abdull Manan | AI Prompt Engineer',
  description: 'I am an AI Engineer specializing in building intelligent systems and high-performance applications. Skilled in Python, Node.js, ReactJS, and experienced in Docker, Kubernetes and MySQL.',
  keywords: ['AI Engineer', 'Python', 'Node.js', 'ReactJS', 'Docker', 'Kubernetes', 'MySQL', 'Machine Learning'],
  authors: [{ name: 'Abdull Manan' }],
  creator: 'Abdull Manan',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
