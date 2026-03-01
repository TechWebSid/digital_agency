import DirectChannels from "@/components/talk/DirectChannels"
import SignalInitiation from "@/components/talk/SignalInitiation"
import TalkHero from "@/components/talk/TalkHero"

export const metadata = {
  title: "Contact TechWebSid | Website Developer in Lucknow",
  description:
    "Get in touch with TechWebSid – a digital agency in Lucknow, Uttar Pradesh specializing in website development and software solutions.",
  alternates: {
    canonical: "https://techwebsid.in/talk",
  },
}

export default function Page() {
  return (
    <main className="bg-[#05070c] text-white overflow-x-hidden">

      {/* Hidden SEO H1 */}
      <h1 className="sr-only">
        Contact TechWebSid – Digital Agency in Lucknow, Uttar Pradesh
      </h1>

      <TalkHero />
      <SignalInitiation />
      <DirectChannels />

      {/* ================= SEO AUTHORITY SECTION ================= */}
      <section className="relative py-32 px-6 lg:px-24 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8">
          Let's Build Something Powerful in{" "}
          <span className="italic text-indigo-400">
            Lucknow & Uttar Pradesh
          </span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-6">
          TechWebSid provides professional website development, custom
          software solutions, and full-stack engineering services for
          businesses in Lucknow, Hardoi, Sitapur and across Uttar Pradesh.
        </p>

        <p className="text-white/40 leading-relaxed">
          Whether you need a high-performance website, scalable digital
          infrastructure, or a modern UI/UX system, our engineering-driven
          approach ensures speed, security, and SEO optimization.
        </p>
      </section>

      {/* ================= STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "TechWebSid",
            url: "https://techwebsid.in/talk",
            areaServed: "Uttar Pradesh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          }),
        }}
      />

    </main>
  )
}