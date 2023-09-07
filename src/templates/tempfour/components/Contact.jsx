import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-full my-20 py-10 bg-black grid place-items-center px-56'>
            <div className='flex flex-col items-center'>
                <p className='font-black gap-2 text-[56px] leading-[105px] font-Poppins flex flex-row'>
                    Contact <span className='text-[#98BBFF] text-[60px] font-black'>.</span>
                </p>
                <p className='font-inter  text-[18px]  font-extralight w-2/3 text-center'>
                    Shoot me an email if you want to connect! You can also find me on <span className='text-[#98BBFF]'>Linkedin</span> or
                    <span className='text-[#98BBFF]'> Twitter</span>  if that's more your speed.
                </p>
            </div>
        </div>
    )
}

export default Contact