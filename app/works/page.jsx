import WorksHero from "@/components/WorksHero"
import WorksLabProcess from "@/components/WorksLabProcess"
import WorksShowcase from "@/components/WorksShowcase"

export default function WorksPage() {
  return (
    <main className="bg-[#05070c] text-white overflow-x-hidden">
      <WorksHero />
      <WorksShowcase />
      <WorksLabProcess/>
    </main>
  )
}