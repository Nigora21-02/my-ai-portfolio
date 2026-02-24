'use client'
import AvatarModel from '@/components/AvatarModel'

import ChatBox from '@/components/ChatBox'
import ContactmailtoForm from '@/components/ContactmailtoForm'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillSection'
import { useState } from 'react'

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex flex-col text-[var(--text)] rounded-lg">

      <div style={{ background: 'var(--gradient-bg)' }}>
        <div className="text-center max-w-2xl mx-auto space-y-4 p-6 pt-12">
          <h2 className="text-xl font-semibold text-[var(--color-text-main)] border-b-2 border-[var(--color-border)] w-fit mx-auto pb-2">
            Varje projekt jag tar mig an börjar med en tanke: Hur ska detta kännas att använda?
          </h2>

          <p className="text-[var(--color-text-main)] leading-relaxed">
            Jag heter Nigora - frontendutvecklare som bygger broar mellan  <span className="font-semibold text-[var(--color-accent)]">DESIGN,</span> <span className="font-semibold text-[var(--color-accent)]">KOD </span><span>och</span> <span className="font-semibold text-[var(--color-accent)]">AI.</span>
          </p>

          <p className=" text-[var(--color-text-main)] font-medium">
            Jag tänker arkitektur, jobbar nära produkt och levererar struktur som håller.
            Nyfiken? <span className="font-semibold text-[var(--color-accent)]">Dockan</span> berättar mer.
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center text-[var(--color-text)] rounded-xl px-10 py-10 lg:px-10 gap-3.5 ">
          <AvatarModel isSpeaking={isSpeaking} />
          <ChatBox setIsSpeaking={setIsSpeaking} />
        </div>
      </div>
      <SkillsSection />
      <ProjectsSection />
      <ContactmailtoForm />
    </section>
  )
}
