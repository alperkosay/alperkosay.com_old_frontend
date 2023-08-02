import state from '@/store'
import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import { AiFillGithub } from "react-icons/ai";
import Link from 'next/link';
import Preloader from '@/components/Preloader';

const Layout = ({ children }) => {
    const snap = useSnapshot(state);

    useEffect(() => {
        setTimeout(() => {
            state.loading = false;
        }, 1000);
    }, [])


    return (
        <>
            {snap.loading && <Preloader />}
            {children}
            <footer className={`py-8 border-t footer-background`} style={{ color: snap.color }}>

                <div className="container mx-auto">
                    <div className="inner flex gap-y-6 flex-wrap items-center justify-between">
                        <p className='lg:text-lg font-medium'>
                            Alper Koşay 2023 &copy; Tüm Hakları Saklıdır.
                        </p>

                        <div className="social flex gap-3">
                            <a
                                href={"https://github.com/Awoked"}
                                target='_blank'
                                className='w-max flex hover:opacity-90'
                            >
                                <AiFillGithub size={28} />
                            </a>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )

}

export default Layout