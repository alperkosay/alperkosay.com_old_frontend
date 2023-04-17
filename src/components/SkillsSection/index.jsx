import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import SkillCard from './SkillCard';

import styles from "./skills.module.css";

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
            detail: "Bu projeyi hazırlarken ve diğer tüm React projelerimde kullanmaktayım."
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
            detail: "Node.js, Express, Mysql, Sequelize gibi kütüphaneler kullanarak api yazabilirim. Genelde NextJS de api yazıyorum."
        },

    ]);

    useEffect(() => {


    }, []);

    return (
        <section className={`min-h-screen skills-section py-10 ${styles.background}`}>
            <div className="section-title">
                <h1>
                    Yeteneklerim
                </h1>
            </div>

            <div className="container mx-auto">

                <div className="skills">

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