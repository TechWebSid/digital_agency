import React from 'react'
import StudioHero from '@/components/studio/StudioHero'
import StudioPhilosophy from '@/components/studio/StudioPhilosophy'
import StudioPrinciples from '@/components/studio/StudioPrinciples'
import GlobalCanvas from '@/components/GlobalCanvas'
const page = () => {
  return (
    <div>
    
      <StudioHero />
      <StudioPhilosophy/>
      <StudioPrinciples/>
    </div>
  )
}

export default page