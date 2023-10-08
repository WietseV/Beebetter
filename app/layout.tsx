import Banner from './banner'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bee Better',
  description: 'Every day we have the chance to improve.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-stone-200 min-h-screen">
      <Banner/>
      <div className={inter.className}>{children}</div>
    </html>
  )
}
