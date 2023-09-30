'use client'

import Nav from './components/nav'
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThirdwebProvider 
      activeChain={ Sepolia } >
        <Nav />
        {children}
      </ThirdwebProvider>
     </body>    
    </html>
  )
}
