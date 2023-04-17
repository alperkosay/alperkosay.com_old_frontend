import React, { useEffect, useRef, useState } from 'react'


import { BiChevronLeft, BiChevronRight, BiCodeAlt } from "react-icons/bi";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';
import { Expo, Power4, gsap } from 'gsap';
import { useSnapshot } from 'valtio';
import store from "../../store"
import { Navigation } from 'swiper';
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
      details: "NextJS, TailwindCSS, Chakra UI, MySql Kullanarak üzerinde çalışmaya devam ettiğim fullstack bir proje. Şuanlık githubda private repository.",
      liveLink: "https://proje3.alperwebapp.online",
      title: "E-Ticaret Projesi",
    }
  ]);

  const snap = useSnapshot(store);

  const sliderNext = useRef(null);
  const sliderPrev = useRef(null);

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
            modules={[Navigation]}
            navigation={{
              nextEl: sliderNext.current,
              prevEl: sliderPrev.current
            }}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
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
            <div className="navigation py-10 flex justify-center gap-3 text-4xl" style={{ color: snap.color }}>
              <button ref={sliderPrev}>
                <BiChevronLeft />
              </button>
              <button ref={sliderNext}>
                <BiChevronRight />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection