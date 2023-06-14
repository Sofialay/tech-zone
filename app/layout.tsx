import './globals.css'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/globalstyles'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Zone',
  description: 'Project made only for practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle/>
      <body className={montserrat.className}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
