import Link from 'next/link';
import React from 'react'

const AboutSection = () => {
    return (
        <section className='py-8'>
            <div className="section-title">
                <h1>
                    Kimim ben?
                </h1>
            </div>

            <div className="container mx-auto">
                <p>
                    Ben Alper Koşay, 17 yaşımdayım, İstanbulda yaşamaktayım ve 12. sınıf meslek lisesi öğrencisiyim.
                    Lise 10. sınıf ile başlayan yazılım serüvenimde hem sektörden hemde kişisel olarak pek çok tecrübe edindim.
                    Genelde lafla övünmektense bir şeyleri göstererek övünmeyi severim.
                    Hobilerimden bahsetmem gerekirse <Link href={"#cizimlerim"} className='link-v1'>çizim</Link> yapmaktan ve müzik dinlemekten keyif alıyorum.
                </p>
            </div>
        </section>
    )
}

export default AboutSection;