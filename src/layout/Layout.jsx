import state from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'

import { AiFillGithub } from "react-icons/ai";
import Link from 'next/link';

import style from "./test.model.css";
const Layout = ({ children }) => {

    const snap = useSnapshot(state);

    return (
        <>
            {children}
            <footer className={`py-8 border-t ${style.background}`} style={{ color: snap.color }}>

                <div className="container mx-auto">
                    <div className="inner flex justify-between">
                        <p className='lg:text-lg font-medium'>
                            Alper Koşay &copy; Tüm Hakları Saklıdır.
                        </p>

                        <div className="social">
                            <a href={"https://github.com/Awoked"} target='_blank' >
                                <AiFillGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Layout