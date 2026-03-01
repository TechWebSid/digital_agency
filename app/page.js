import Capabilities from "@/components/Capabilities"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import SelectedWork from "@/components/SelectedWork"

export const metadata = {
  title: "TechWebSid - Website Developer in Lucknow",
  description:
    "TechWebSid is a digital engineering studio in Lucknow, India providing website development and software solutions.",
}

export default function Page() {
  return (
    <main className="bg-[#0B0B0F] text-white">

      {/* Hidden SEO H1 */}
      <h1 className="sr-only">
        TechWebSid – Website Developer in Lucknow, India
      </h1>

      <Hero />
      <Capabilities />
      <SelectedWork />
      <Process />

    {/* ================= SEO CONTENT SECTION ================= */}
      <section className="relative py-40 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Vertical Accent Line (Awwwards staple) */}
          <div className="hidden lg:block w-[1px] h-80 bg-gradient-to-b from-indigo-500 via-indigo-500/10 to-transparent" />

          <div className="flex-1">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tighter mb-12">
              Engineering the <br />
              <span className="italic font-serif text-indigo-400 lowercase">Digital Landscape</span> <br />
              of India.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <p className="text-white/60 text-xl font-light leading-relaxed">
                TechWebSid is a premier digital agency in <span className="text-white">Lucknow</span>, 
                architecting high-performance ecosystems. We bridge the gap between complex software logic 
                and cinematic user experiences for brands in <span className="text-indigo-300">Uttar Pradesh</span>, and beyond.
              </p>
              
              <div className="space-y-6">
                <p className="text-white/40 leading-relaxed font-light">
                  We specialize in <span className="text-white/70 uppercase tracking-widest text-xs">Next.js / WebGL / Full-Stack</span>. 
                  Our SEO-first methodology ensures that businesses in <span className="text-white/70">Uttar Pradesh</span> don't 
                  just exist online—they dominate the search rankings through superior performance and 
                  Zero Layout Shift (CLS) engineering.
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
              <p className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Capabilities</p>
              <h2 className="text-5xl font-light tracking-tighter">Core Services</h2>
            </div>
            <p className="hidden md:block text-white/10 font-mono text-[10px] tracking-[0.8em] uppercase mb-2">
              [ Engine_v0.2 ]
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            {/* Service 1: Large Card */}
            <div className="md:col-span-8 group relative p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 backdrop-blur-3xl transition-all duration-700 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div>
                <span className="text-white/20 font-mono text-sm">01</span>
                <h3 className="text-4xl font-light mt-6 tracking-tight group-hover:italic transition-all duration-500">Website Development in Lucknow</h3>
              </div>
              <p className="text-white/40 max-w-md text-lg font-light leading-relaxed relative z-10">
                Custom, responsive Next.js architectures designed for extreme performance, 
                SEO dominance, and high-frequency conversion.
              </p>
            </div>

            {/* Service 2: Small Card */}
            <div className="md:col-span-4 group relative p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-indigo-500/30 backdrop-blur-3xl transition-all duration-700 min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">02</span>
                <h3 className="text-3xl font-light mt-6 tracking-tight">UI/UX & <br/> Interface Design</h3>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Modern, motion-driven user experiences that feel intuitive and cinematic.
              </p>
            </div>

            {/* Service 3: Small Card */}
            <div className="md:col-span-5 group relative p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">03</span>
                <h3 className="text-3xl font-light mt-6 tracking-tight">Software Development in UP</h3>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Scalable business software and digital infrastructure engineered for growth across India.
              </p>
            </div>

            {/* Service 4: Large Card */}
            <div className="md:col-span-7 group relative p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 backdrop-blur-3xl transition-all duration-700 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-white/20 font-mono text-sm">04</span>
                <h3 className="text-4xl font-light mt-6 tracking-tight">Full Stack Engineering</h3>
              </div>
              <p className="text-white/40 max-w-md text-lg font-light leading-relaxed">
                Complete backend and frontend engineering solutions. From database architecture 
                to interactive frontends.
              </p>
              {/* Animated Arrow Icon */}
              <div className="absolute bottom-12 right-12 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-indigo-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TechWebSid",
            url: "https://techwebsid.in",
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