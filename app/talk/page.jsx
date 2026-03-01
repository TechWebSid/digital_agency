import GlobalCanvas from '@/components/GlobalCanvas'
import DirectChannels from '@/components/talk/DirectChannels'
import SignalInitiation from '@/components/talk/SignalInitiation'
import TalkHero from '@/components/talk/TalkHero'
import React from 'react'


const page = () => {
  return (
       <main className="bg-[#05070c] text-white overflow-x-hidden">
    
      <TalkHero />
      <SignalInitiation />
      <DirectChannels />
    </main>
  )
}

export default page