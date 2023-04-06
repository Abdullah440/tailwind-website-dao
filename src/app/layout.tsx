import './globals.css'
import Header from '@/components/layout/header'

export const metadata = {
  title: 'PIAIC - Panaverse DAO',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/* Header */}
      <Header/>
        
        {children}</body>
    </html>
  )
}
