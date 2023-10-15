import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const index = () => {
    const {data} = useSession();
    return (
        <main>
            {
JSON.stringify(data)
            }
            <section className='min-h-screen'>
                <div className="container">
                    <div className="flex items-center justify-center flex-col h-screen">
                        <div className='flex justify-center mb-8'>
                            <h1 className='text-2xl font-bold'>
                                Authentication
                            </h1>
                        </div>
                        <button
                            className='py-4 px-8 border rounded-md '
                            onClick={() => { signIn() }}
                        >
                            Login
                        </button>
                        <button
                            className='py-4 px-8 border rounded-md '
                            onClick={() => { signOut() }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default index