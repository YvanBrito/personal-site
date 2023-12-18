import { HamburguerMenu } from '@/components'
import { headers } from 'next/headers'
import '@/styles/globals.css'
import '@/styles/highlight.css'
import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
  title: 'Yvan Brito - Frontend Developer',
  description: 'Yvan Brito Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const lang = headersList.get('x-lang') === '/pt' ? 'pt' : 'en'
  return (
    <html lang={lang === 'en' ? 'en-US' : 'pt-BR'}>
      <body>
        <header className="flex items-center justify-between h-14 w-4/5 mx-auto py-3">
          <Link href={lang === 'en' ? '/' : '/pt'}>YB</Link>
          <HamburguerMenu lang={lang} />
        </header>
        {children}
        <footer className="mt-10 h-8"></footer>
        {/*eslint-disable-next-line @next/next/no-before-interactive-script-outside-document*/}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
