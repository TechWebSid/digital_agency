import Capabilities from "@/components/Capabilities"
import GlobalCanvas from "@/components/GlobalCanvas"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import SelectedWork from "@/components/SelectedWork"

export default function Page() {
  return (
    <main className="bg-[#0B0B0F] text-white">
 
      <Hero />
      <Capabilities/>
      <SelectedWork/>
      <Process/>
    </main>
  )
}