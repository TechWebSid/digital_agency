import StudioHero from "@/components/studio/StudioHero"
import StudioPhilosophy from "@/components/studio/StudioPhilosophy"
import StudioPrinciples from "@/components/studio/StudioPrinciples"

export const metadata = {
  title: "About Our Studio | Digital Agency in Lucknow",
  description:
    "TechWebSid is a digital engineering studio based in Lucknow, Uttar Pradesh. We specialize in high-performance website development, software systems and modern digital architecture.",
  alternates: {
    canonical: "https://techwebsid.in/studio",
  },
}

export default function Page() {
  return (
    <main className="bg-[#07090f] text-white overflow-x-hidden">

      {/* Hidden SEO H1 */}
      <h1 className="sr-only">
        TechWebSid Studio – Digital Engineering Agency in Lucknow, Uttar Pradesh
      </h1>

      <StudioHero />
      <StudioPhilosophy />
      <StudioPrinciples />

      {/* SEO Authority Section */}
      <section className="relative py-32 px-6 lg:px-24 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8">
          A Digital Studio Built in{" "}
          <span className="italic text-indigo-400">
            Lucknow, Uttar Pradesh
          </span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-6">
          TechWebSid is a performance-driven digital agency operating from
          Lucknow. We engineer scalable web applications, modern software
          systems and cinematic digital experiences for brands across
          Uttar Pradesh and India.
        </p>

        <p className="text-white/40 leading-relaxed">
          Our studio combines full-stack development, UI/UX precision and
          SEO-focused architecture to build high-performance digital
          products that convert and scale.
        </p>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "TechWebSid",
            url: "https://techwebsid.in/studio",
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