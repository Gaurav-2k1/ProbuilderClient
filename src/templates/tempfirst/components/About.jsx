import React from 'react'
import about from "../assets/aboutimg.png"
import Reveal from '../../../components/common/Framer/Reveal'
const About = ({ user }) => {
    return (
        <section className='flex flex-col-reverse md:flex-row w-full h-full py-10'>

            <div className='md:w-1/2 w-full  flex justify-center 
            items-center p-5 relative md:pl-52'>

                <div className='
                    border border-icob
                    border-opacity-80 border-solid flex 
                    items-center 
                    justify-center p-3 h-[400px] w-[300px]'>
                    <img src={user?.profile?.image ? user?.profile?.image : about}
                        className='w-full h-full object-contain'
                        alt=''

                    />
                </div>



            </div>


            <div className='flex flex-col  md:w-1/2 w-full gap-5 h-full'>
                <p className='mt-10 md:mt-5 headings text-left'>About Me</p>
                <p className='md:w-2/3 w-full font-roboto-flex text-base'>
                    {user?.profile.about}
                </p>


            </div>
        </section>
    )
}

export default About