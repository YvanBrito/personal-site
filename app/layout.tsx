import { HamburguerMenu } from '@/components'
import './globals.css'
import './highlight.css'
import Link from 'next/link'

export const metadata = {
  title: 'Yvan Brito - Frontend Developer',
  description: 'Yvan Brito Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between h-14 w-4/5 mx-auto py-3">
          <Link href="/">YB</Link>
          <HamburguerMenu />
        </header>
        {children}
        <footer className="mt-10 h-8"></footer>
      </body>
    </html>
  )
}
