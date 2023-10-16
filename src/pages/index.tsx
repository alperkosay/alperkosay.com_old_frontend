import { Chivo_Mono } from 'next/font/google';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import DrawingsSection from '@/components/DrawingsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Head from 'next/head';
import ContactSection from '@/components/ContactSection';
import ErrorSection from '@/components/ErrorSection';
import { SectionData } from '@prisma/client';

import Layout from "@/components/Layout/Layout";

const chivo_mono = Chivo_Mono({ subsets: ['latin'] })


type PageType = {
	sectionsData: SectionData[],
	serverStatus: boolean,
	errorMessage: string
}

export default function Home({ sectionsData, serverStatus, errorMessage }: PageType) {


	if (!sectionsData.length || !serverStatus) {
		return <ErrorSection />
	}

	return (

		<>
			<Head>

				<title>Alper Koşay</title>
				<meta name="description" content="Kişisel portfolyo websitem." />
				<meta name="keywords" content="Alper Koşay, Web Developer, React Developer" />
				<meta name='author' content='Alper Koşay' />

			</Head>
			<main className={`${chivo_mono.className} transition-all`}>
				<HeroSection sectionData={sectionsData?.find(data => data.section === "hero")} />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<DrawingsSection />
				<ContactSection />
			</main>
		</>
	)
}

Home.getLayout = (page: React.ReactNode) =>{
	return (
		<Layout>
			{page}
		</Layout>
	)
}


export async function getServerSideProps() {

	try {
		const response = await fetch(`${process.env.API_BASE_URL}/sections`);
		const data: SectionData[] = await response.json();
		console.log('data', data)
		return {
			props: {
				sectionsData: data,
				serverStatus: response.status === 200
			}
		}
	} catch (error) {
		console.log('error', error)
		return {
			props: {
				serverStatus: false,
			}
		}
	}
}