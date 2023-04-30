import { Elastic, Expo, Power4, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {

    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    if (inView && !isInView) {
        setIsInView(true);
    }

    const sectionTitle = useRef(null);
    const description = useRef(null);


    useEffect(() => {

        const tl = gsap.timeline();
        tl.fromTo(sectionTitle.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: sectionTitle.current,
                    start: "top 100%",
                    end: "top 60%",
                    scrub: true,
                },
                duration: 3,
                ease: Expo.easeInOut,

            }
        )
        tl.fromTo(description.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: .6,
                ease: Power4.easeInOut,
                scrollTrigger: {
                    trigger: description.current,
                    scrub: true,
                    start: "top 100%",
                    end: "top 40%",
                }
            }
        )


    }, []);






    return (
        <section ref={ref} className='py-8 about-section'>
            <div ref={sectionTitle} className="section-title">
                <h1>
                    Kimim ben?
                </h1>
            </div>
            <div className="container mx-auto">
                <div ref={description} className="about-description">
                    <p>
                        Ben Alper Koşay, 17 yaşındayım, İstanbul&apos;da yaşıyorum ve 12. sınıf meslek lisesi öğrencisiyim.
                        Lise 10. sınıf ile başlayan yazılım serüvenimde hem sektörden hem de kişisel olarak pek çok tecrübe kazandım.
                        Lafla övünmektense yaptıklarımla övünmeyi tercih eden biriyim.
                        Hobilerimden bahsetmem gerekirse, <Link href={"#cizimlerim"} className='link-v1'>çizim</Link> yapmaktan ve müzik dinlemekten keyif alıyorum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;