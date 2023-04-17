import { Elastic, Expo, Power4, gsap } from 'gsap';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {

    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    if (inView && !isInView) {
        setIsInView(true);
    }

    useEffect(() => {

        const tl = gsap.timeline();
        tl.fromTo(".about-section .section-title",
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
        tl.fromTo(".about-section .about-description",
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
        <section ref={ref} className='py-8 about-section'>
            <div className="section-title">
                <h1>
                    Kimim ben?
                </h1>
            </div>

            <div className="container mx-auto">
                <div className="about-description">
                    <p>
                        Ben Alper Koşay, 17 yaşımdayım, İstanbulda yaşamaktayım ve 12. sınıf meslek lisesi öğrencisiyim.
                        Lise 10. sınıf ile başlayan yazılım serüvenimde hem sektörden hemde kişisel olarak pek çok tecrübe edindim.
                        Genelde lafla övünmektense bir şeyleri göstererek övünmeyi severim.
                        Hobilerimden bahsetmem gerekirse <Link href={"#cizimlerim"} className='link-v1'>çizim</Link> yapmaktan ve müzik dinlemekten keyif alıyorum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;