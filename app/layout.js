import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/SmoothScroll"
import Preloader from "@/components/PreLoader"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "TechWebSid",
  description: "Engineering Digital Presence",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          text-white
        `}
      >
    
        <SmoothScroll>
          <div className="relative min-h-screen bg-gradient-to-b from-[#0d0f1f] via-[#0b0f1a] to-[#090b14] overflow-hidden">

            <Preloader />

            <Navbar />
            <CustomCursor />
            {children}
            <Footer />

          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}