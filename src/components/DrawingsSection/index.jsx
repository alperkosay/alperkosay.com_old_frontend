import Image from 'next/image'
import React, { useState } from 'react';
import MyGallery from './MyGallery';





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

    return (
        <section id='cizimlerim' className='py-8'>
            <div className="section-title flex gap-3 items-center">
                <h1>Çizimlerim</h1>
                <Image src={"/images/peepodraw.gif"} width={64} height={64} alt='peepo draw' />
            </div>


            <MyGallery photos={drawingsData} />
        </section>
    )
}

export default DrawingsSection