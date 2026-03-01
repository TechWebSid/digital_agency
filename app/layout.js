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
  metadataBase: new URL("https://techwebsid.in"),

  title: {
    default:
      "TechWebSid – Digital Agency in Lucknow | Website Developer in India",
    template: "%s | TechWebSid",
  },

  description:
    "TechWebSid is a digital engineering studio based in Lucknow, India. We build high-performance websites, modern web applications, and software solutions for businesses in Lucknow, Hardoi, Sitapur and across UP.",

  keywords: [
    "TechWebSid",
    "Digital Agency in Lucknow",
    "Website Developer in Lucknow",
    "Website Developer in Uttar Pradesh",
    "Software Development in UP",
    "Web Development in Hardoi",
    "Web Developer in Sitapur",
    "Software Company in Lucknow",
    "Next.js Developer India",
    "Full Stack Developer Uttar Pradesh",
    "Custom Website Development",
    "High Performance Websites",
  ],

  authors: [{ name: "Siddhartha Srivastava" }],
  creator: "Siddhartha Srivastava",
  publisher: "TechWebSid",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techwebsid.in",
    siteName: "TechWebSid",
    title:
      "TechWebSid – Website Developer in Lucknow | Software Development in Lucknow",
    description:
      "Professional website development, digital engineering and software solutions in Lucknow, Hardoi, Sitapur and across Uttar Pradesh.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "TechWebSid Digital Agency",
      },
    ],
  },

  alternates: {
    canonical: "https://techwebsid.in",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  category: "technology",
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