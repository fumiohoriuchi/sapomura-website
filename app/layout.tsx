import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'サポ村.com - サポーター村を作る会',
  description: 'サポーターが作るサポーターのためのサポーターによるツアー。安全安心で安くて楽しい日本代表応援ツアー。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
