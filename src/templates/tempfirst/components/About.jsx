import React from 'react'
import about from "../assets/aboutimg.png"
const About = ({ user }) => {
    return (
        <div className='flex flex-col-reverse md:flex-row w-full h-full py-10'>
            <div className='md:w-1/2 w-full  flex justify-center 
            items-center p-5 relative'>
                <div className='
                    border border-blueviolet-100 
                    border-opacity-80 border-solid flex 
                    items-center 
                    justify-center p-3 h-96'>
                    <img src={about}
                        className='w-full h-full object-contain'
                        alt=''

                    />
                </div>


            </div>
            <div className='flex flex-col md:w-1/2 w-full gap-5'>
                <p className='mt-10 text-12xl font-mono'>About Me</p>
                <p className='md:w-2/3 w-full font-roboto-flex text-base'>
                    {user?.profile.about}
                </p>

            </div>
        </div>
    )
}

export default About