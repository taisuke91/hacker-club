import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "東大Hacker研究会 | Tokyo University Hacker Club",
  description: "サイバーセキュリティ、情報戦、CTF、ハッカソンに挑戦する東京大学の技術サークル",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "東大Hacker研究会 | Tokyo University Hacker Club",
    description: "サイバーセキュリティ、情報戦、CTF、ハッカソンに挑戦する東京大学の技術サークル",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "東大Hacker研究会 | Tokyo University Hacker Club",
    description: "サイバーセキュリティ、情報戦、CTF、ハッカソンに挑戦する東京大学の技術サークル",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
