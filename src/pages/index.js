import Image from 'next/image'
import { Chivo_Mono } from 'next/font/google';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import DrawingsSection from '@/components/DrawingsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Head from 'next/head';

const chivo_mono = Chivo_Mono({ subsets: ['latin'] })

export default function Home() {

  return (

    <>
      <Head>

        <title>Alper Koşay</title>
        <meta name="description" content="Kişisel portfolyo websitem." />
        <meta name="keywords" content="Alper Koşay, Web Developer, React Developer" />
        <meta name='author' content='Alper Koşay' />
        
      </Head>
      <main className={`${chivo_mono.className} transition-all`}>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DrawingsSection />
      </main>
    </>
  )
}
