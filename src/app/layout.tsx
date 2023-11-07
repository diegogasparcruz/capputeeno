import { Header } from '@/components/ui'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { saira } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Capputeno',
  description: 'Catálogo da loja',
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        <main className="flex-1 px-40 py-8">{children}</main>
      </body>
    </html>
  )
}
