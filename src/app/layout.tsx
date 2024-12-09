import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import MetamaskProviderWrapper from "@/components/metamask-provider-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OPSIDE Finance",
  description: "Passive Income | Keep Control",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <MetamaskProviderWrapper>
          {children}
        </MetamaskProviderWrapper>
      </body>
    </html>
  )
}
