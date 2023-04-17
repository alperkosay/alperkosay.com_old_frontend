import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import MyGallery from './MyGallery';
import { useInView } from 'react-intersection-observer';
import { Expo, Power4, gsap } from 'gsap';





const DrawingsSection = () => {

    const [drawingsData, setDrawingsData] = useState([
        {
            src: "/images/drawings/1.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/2.jpg",
            width: 24,
            height: 9,
        },
        {
            src: "/images/drawings/3.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/4.jpg",
            width: 24,
            height: 9,
        },
        {
            src: "/images/drawings/5.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/6.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/7.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/8.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/9.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/10.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/11.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/12.jpg",
            width: 4,
            height: 3,
        },
        {
            src: "/images/drawings/13.jpg",
            width: 24,
            height: 9,
        },
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
        tl.fromTo(".drawings-section .section-title",
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
        tl.fromTo(".drawings-section .gallery-wrapper",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.6,
                ease: Power4.easeInOut
            }
        )


    }, [isInView]);



    return (
        <section ref={ref} id='cizimlerim' className='py-8 drawings-section'>
            <div className="section-title flex gap-3 items-center">
                <h1>Çizimlerim</h1>
                <Image src={"/images/peepodraw.gif"} width={64} height={64} alt='peepo draw' />
            </div>

            <div className="gallery-wrapper">

                <MyGallery photos={drawingsData} />
            </div>
        </section>
    )
}

export default DrawingsSection