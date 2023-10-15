import { Chivo_Mono } from 'next/font/google';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import DrawingsSection from '@/components/DrawingsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Head from 'next/head';
import ContactSection from '@/components/ContactSection';

const chivo_mono = Chivo_Mono({ subsets: ['latin'] })

export default function Home({ sectionsData, serverStatus, errorMessage }) {


	if (!serverStatus) {
		console.log("error", errorMessage)
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


export async function getServerSideProps() {

	try {
		const response = await fetch(`${process.env.API_BASE_URL}/sectionss`);
		const data = await response.json();

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