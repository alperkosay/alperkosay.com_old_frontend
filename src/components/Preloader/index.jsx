import React, { useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Preloader = () => {

    return (
        <div className='fixed inset-0 grid place-items-center bg-white z-10'>
            <div>
                <AiOutlineLoading3Quarters
                    size={50}
                    className='animate-spin'
                />
                <p className='text-sm font-medium animate-pulse mt-2'>
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Preloader
