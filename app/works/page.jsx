import WorksHero from "@/components/WorksHero"
import WorksShowcase from "@/components/WorksShowcase"
import WorksLabProcess from "@/components/WorksLabProcess"

export const metadata = {
  title: "Portfolio | Website Development in Lucknow & Uttar Pradesh",
  description:
    "Explore TechWebSid's portfolio of high-performance websites, software systems and digital products engineered in Lucknow, Uttar Pradesh.",
  alternates: {
    canonical: "https://techwebsid.in/works",
  },
}

export default function WorksPage() {
  return (
    <main className="bg-[#05070c] text-white overflow-x-hidden">

      {/* Hidden SEO H1 */}
      <h1 className="sr-only">
        TechWebSid Portfolio – Website & Software Development in Lucknow, Uttar Pradesh
      </h1>

      <WorksHero />
      <WorksShowcase />
      <WorksLabProcess />

      {/* ================= LANDSCAPE AUTHORITY SECTION ================= */}
      <section className="relative py-40 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          <div className="hidden lg:block w-[1px] h-80 bg-gradient-to-b from-indigo-500 via-indigo-500/10 to-transparent" />

          <div className="flex-1">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tighter mb-12">
              Engineering the <br />
              <span className="italic font-serif text-indigo-400 lowercase">
                Digital Landscape
              </span>{" "}
              of India.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <p className="text-white/60 text-xl font-light leading-relaxed">
                TechWebSid is a digital agency in{" "}
                <span className="text-white">Lucknow</span>, architecting
                high-performance ecosystems. We bridge complex software
                engineering and cinematic user experiences for businesses
                across <span className="text-indigo-300">Uttar Pradesh</span>.
              </p>

              <div className="space-y-6">
                <p className="text-white/40 leading-relaxed font-light">
                  Specializing in{" "}
                  <span className="text-white/70 uppercase tracking-widest text-xs">
                    Next.js / WebGL / Full-Stack
                  </span>
                  , we build systems optimized for SEO dominance,
                  performance engineering and zero layout shift (CLS).
                </p>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-hover:text-indigo-400 transition-colors">
                    Systems Active 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES BENTO GRID ================= */}
      <section className="relative py-40 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-20">
            <div>
              <p className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">
                Capabilities
              </p>
              <h2 className="text-5xl font-light tracking-tighter">
                Core Services
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-4">

            <div className="md:col-span-8 group relative p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 backdrop-blur-3xl transition-all duration-700 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">01</span>
                <h3 className="text-4xl font-light mt-6 tracking-tight">
                  Website Development in Lucknow
                </h3>
              </div>
              <p className="text-white/40 max-w-md text-lg font-light leading-relaxed">
                Custom Next.js architectures engineered for speed,
                SEO optimization and high-conversion performance.
              </p>
            </div>

            <div className="md:col-span-4 group relative p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">02</span>
                <h3 className="text-3xl font-light mt-6 tracking-tight">
                  UI/UX & Interface Design
                </h3>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Motion-driven, modern interfaces crafted for engagement.
              </p>
            </div>

            <div className="md:col-span-5 group relative p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">03</span>
                <h3 className="text-3xl font-light mt-6 tracking-tight">
                  Software Development in Uttar Pradesh
                </h3>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Scalable digital systems and enterprise-grade web applications.
              </p>
            </div>

            <div className="md:col-span-7 group relative p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 backdrop-blur-3xl transition-all duration-700 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">04</span>
                <h3 className="text-4xl font-light mt-6 tracking-tight">
                  Full Stack Engineering
                </h3>
              </div>
              <p className="text-white/40 max-w-md text-lg font-light leading-relaxed">
                End-to-end backend and frontend architecture from database
                design to interactive UI systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "TechWebSid",
            url: "https://techwebsid.in/works",
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