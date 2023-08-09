import React, { useEffect, useState } from 'react'
import Hero from './Hero'

const Home = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setInterval(() => setLoading(false), [1000])
    }, [])
    return (
        <>
            {loading ? <div className='w-screen h-screen items-center bg-white flex justify-center'>
                <div className='spinner'/>
            </div> : <div className='min-h-screen w-screen bg-white px-5 pt-8'>
                <Hero />
            </div>

            }
        </>

    )
}

export default Home