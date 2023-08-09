import React, { useEffect, useState } from 'react'
import ContactDetails from '../components/ContactUsPage/ContactDetails'
import ContactForm from '../components/ContactUsPage/ContactForm'
import frame from "../assets/Images/contact.png"
const Contact = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setInterval(() => setLoading(false), [1000])
    }, [])
    return (
        <>
            {loading ? <div className='w-screen h-screen items-center bg-white flex justify-center'>
                <div className='spinner' />
            </div> : <div className=''>
                <div className='bg-white w-full h-full'>
                    <div className="mx-auto pt-10 md:pt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
                        {/* Contact Details */}

                        <div className="lg:w-[40%] relative">
                            <img
                                src={frame}
                                alt="Pattern"
                                width={558}
                                height={504}
                                loading="lazy"
                                className="rounded-lg absolute top-2 -left-4 z-5 hidden lg:block"
                            />
                            <ContactDetails />

                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-[50%]  mt-5">
                            <ContactForm />
                        </div>
                    </div>

                </div>        </div>

            }
        </>
    )
}

export default Contact