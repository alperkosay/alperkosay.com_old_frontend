import Image from 'next/image'
import { Chivo_Mono } from 'next/font/google';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import DrawingsSection from '@/components/DrawingsSection';

const chivo_mono = Chivo_Mono({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`${chivo_mono.className} transition-all`}>

      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <DrawingsSection />
    </main>
  )
}
