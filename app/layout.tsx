import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gaurav Kumar",
  description: "Portfolio of Gaurav Kumar",
  icons: {
    icon: "/favicon.jpg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return ( 
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <link rel="icon" href="/favicon.jpg" type="image/jpg" />
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'