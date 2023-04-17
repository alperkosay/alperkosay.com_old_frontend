import React, { useEffect, useState } from 'react'


import { BiCodeAlt } from "react-icons/bi";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';
import { Expo, Power4, gsap } from 'gsap';

const ProjectsSection = () => {

  const [projectsData, setProjectsData] = useState([
    {
      imageUrl: "/images/projects/project-3d.png",
      githubLink: "https://github.com/Awoked/3DTshirtProjesi",
      liveLink: "https://alper-3d-tshirt.netlify.app",
      details: "Three.js ve React kullanarak yaptığım basit bir proje.",
      title: "3D Tshirt Projesi",
    },
    {
      imageUrl: "/images/projects/e-ticaret.png",
      details: "Next.js, TailwindCSS, Chakra UI, MySql Kullanarak üzerinde çalışmaya devam ettiğim fullstack bir proje. Şuanlık githubda private repository.",
      liveLink: "https://proje3.alperwebapp.online",
      title: "E-Ticaret Projesi",
    }
  ]);



  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  if (inView && !isInView) {
    setIsInView(true);
  }

  useEffect(() => {

    const tl = gsap.timeline();
    tl.fromTo(".projects-section .section-title",
      {
        opacity: 0,
        scale: .9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: Expo.easeInOut
      }
    )
    tl.fromTo(".projects-section .projects-wrapper",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: .6,
        ease: Power4.easeInOut
      }
    )


  }, [isInView]);



  return (
    <section ref={ref} className='py-8 projects-section'>

      <div className="section-title items-center gap-2">
        <h1>Projelerim </h1>
        <BiCodeAlt size={32} className='text-blue-600' />
      </div>


      <div className="container mx-auto">
        <div className="projects-wrapper py-8">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {
              projectsData &&
              projectsData.map((project, index) => (

                <SwiperSlide key={index}>

                  <ProjectCard
                    imageUrl={project.imageUrl}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    details={project.details}
                    title={project.title}
                  />

                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection