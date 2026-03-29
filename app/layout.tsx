import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pietro Rampazzo - Software Engineer",
  description:
    "Personal website and blog of Pietro Rampazzo. Software engineer passionate about data engineering, open source, and building great products.",
  openGraph: {
    title: "Pietro Rampazzo - Software Engineer",
    description:
      "Personal website and blog of Pietro Rampazzo. Software engineer passionate about data engineering, open source, and building great products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pietro Rampazzo - Software Engineer",
    description:
      "Personal website and blog of Pietro Rampazzo. Software engineer passionate about data engineering, open source, and building great products.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
