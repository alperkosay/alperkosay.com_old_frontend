import React, { useEffect, useRef, useState } from 'react'
import { Bounce, Elastic, Expo, Power4, gsap } from 'gsap';
import SkillCard from './SkillCard';

import styles from "./skills.module.css";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {


    const [skillsData, setSkillsData] = useState([

        {
            name: "HTML",
            level: 95,
            detail: "Semantic HTML ve Seo uyumu hakkında yeterli bilgiye sahibim."
        },

        {
            name: "CSS",
            level: 95,
            detail: "Temiz ve okunabilir css yazabilirim ama Scss tercihimdir."
        },
        {
            name: "SCSS / SASS",
            level: 95,
            detail: "Mixin ve fonksiyonları kullanarak daha az kod daha çok iş prensibinde çalışabiliyorum."
        },



        {
            name: "Tailwind CSS",
            level: 90,
            detail: "Bu web projesinde ve diğer tüm React projelerimde kullanmaktayım."
        },

        {
            name: "Bootstrap",
            level: 90,
            detail: "Her ne kadar artık Tailwind CSS kullansamda, gerek olduğu sürece tamamen bootstrap ile proje çıkartabilirim."
        },

        {
            name: "Javascript",
            level: 90,
            detail: "Front-end için kodu spagettiye çevirmeden yazabilirim, ayrıca jQuery gibi kütüphanelere'de hakimim. "

        },
        {
            name: "TypeScript",
            level: 20,
            detail: "Yeni başladım ama yakında tüm projelerimde kullanmayı düşünüyorum."

        },

        {
            name: "React",
            level: 80,
            detail: "6 aydan uzun bir süredir React öğrenmekteyim."
        },

        {
            name: "NextJS",
            level: 80,
            detail: "React Framework'ü olan NextJS' i, Seo uyumlu ve Full-stack projelerimde kullanıyorum."
        },
        {
            name: "MySQL",
            level: 80,
            detail: "Fullstack Projelerimde NextJS ile birlikte kullanmaktayım."
        },

        {
            name: "NodeJS",
            level: 60,
            detail: "Node.js, Express, Mysql, Sequelize gibi kütüphaneler kullanarak api yazabilirim. Genelde NextJS'de api yazıyorum."
        },

    ]);




    useEffect(() => {

        gsap.fromTo(".skills-section .section-title",
            {
                opacity: 0,
                scale: .9
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.3,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".skills-section .skills-description",
                    toggleActions: "restart none none none",
                    start: "top 100%",
                    end: "bottom 70%",
                    scrub: true
                }
            }
        )
        gsap.fromTo(".skills-section .skills-description",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: .6,
                delay: 0.3,
                ease: Power4,
                scrollTrigger: {
                    trigger: ".skills-section .skills-description",

                    toggleActions: "restart none none none",
                    start: "top 100%",
                    end: "bottom 70%",
                }
            }
        )

        gsap.fromTo(".skill-card",
            {
                scale: .95,
                opacity: 0,
                y: -60,
                x: -100
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                x: 0,
                stagger: .20,
                duration: 2,
                delay: .2,
                ease: Elastic.easeInOut,
                scrollTrigger: {
                    trigger: ".skills-section",
                    toggleActions: "restart none none none",
                    start: "top 100%",
                    end: "bottom 90%",
                },
            }
        )

    }, []);

    return (
        <section className={`min-h-screen skills-section py-10 ${styles.background}`}>
            <div className="section-title">
                <h2>
                    Yeteneklerim

                </h2>
            </div>

            <div className="container mx-auto">

                <div className="skills-description">

                    <p className='text-center'>
                        {"Hala öğrenme aşamasındayım ama kim değil ki? :)"}
                    </p>

                </div>

                <div className="skills-grid-wrapper py-8 pb-20 pt-20 grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-16 gap-14 xl:gap-x-24 2xl:gap-x-40">

                    {
                        skillsData &&
                        skillsData.map((skill, index) => (
                            <SkillCard
                                key={index}
                                skillName={skill.name}
                                skillLevel={skill.level}
                                skillDetail={skill.detail}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default SkillsSection