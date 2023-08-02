import React from 'react'
import ab1 from "../../../assets/temp/ab1.png"
import ab2 from "../../../assets/temp/ab2.png"
const About = () => {
    return (
        <div className='h-full md:min-h-screen w-screen bg-white'>
            <div className='relative'>
                <div className='w-1/2 md:bg-gradient-to-r bg-gradient-to-b from-[#8400FF] via-[#A9FB22]  to-[#E2EAFF] absolute -top-96 right-0 md:-top-32 z-0 h-full md:-left-96 blur-3xl' />
                <div className='relative h-[80vh] md:h-[60vh] w-full flex flex-col items-center justify-around'>
                    <p className='bg-gradient-to-r from-[#000] to-[#FF5959]  text-transparent  
                        bg-clip-text font-DMSans text-[30px] md:text-[40px] font-bold w-full md:w-3/5 text-center '>Empowering Your Professional Journey with Stunning Portfolio Websites</p>
                    <p className='text-base w-full font-medium text-[#000000ad] md:w-3/5 text-center font-DMSans'>Unlock Your Portfolio's Full Potential with our Diverse and Exquisite Template Collection. From Sleek and Modern Designs to Timeless and Classic Styles, Discover the Perfect Showcase for Your Unique Talents and Professional Journey</p>
                    <div className='px-3 py-2 bg-[#353434] rounded-lg'><p className='bg-gradient-to-r from-[#A2E711] to-[#F9FFED] text-transparent text-[30px] 
                        bg-clip-text font-bold font-DMSans '>Probuilder</p></div>
                </div>

            </div>
            <div className='w-full h-full px-5 py-5'>
                <div className='aboutimgs bg-center h-full w-full  md:w-full md:h-[90vh] md:py-10 flex flex-col items-start justify-evenly md:px-20 py-10 px-5'>
                    <div className='flex flex-col md:gap-6 w-full md:w-1/3 rounded-lg'>
                        <p className='text-[30px] md:text-[42px] font-DMSans font-bold bg-gradient-to-r from-[#0FA927] to-[#02FF2B] text-transparent 
                        bg-clip-text w-min '>Vision</p>
                        <p className='text-base md:text-lg font-DMSans '>At ProBuilder, we believe that every professional deserves a platform to stand out.</p>
                    </div>
                    <div className='flex flex-col md:gap-6 w-full md:w-1/3'>
                        <p className='text-[30px] md:text-[42px] font-DMSans font-bold bg-gradient-to-r from-[#0FA927] to-[#02FF2B] text-transparent 
                        bg-clip-text w-min '>Mission</p>
                        <p className='text-base md:text-lg font-DMSans '>Our mission is to provide you with the tools and inspiration to craft an exceptional online portfolio that reflects your unique story and accomplishments. We are committed to fostering creativity, innovation, and success for all our users</p>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full py-5 md:min-h-[40vh] items-center'>
                    <p className='bg-gradient-to-r from-[#000] to-[#FF5959]  text-transparent  
                        bg-clip-text font-DMSans text-[30px] md:text-[40px] font-bold w-full md:w-3/5 text-center '>Empowering Your Professional Journey with Stunning Portfolio Websites</p>
                    <p className='text-base w-full font-medium text-[#000000ad] md:w-2/5 text-center font-DMSans'>Unlock Your Portfolio's Full Potential with our Diverse and Exquisite Template Collection. From Sleek and Modern Designs to Timeless and Classic Styles, Discover the Perfect Showcase for Your Unique Talents and Professional Journey</p>
                </div>
                <div className='flex flex-col w-full h-full gap-3 md:h-full md:min-h-[60vh] items-center bg-[#1E0000] justify-evenly py-10 px-5'>
                    <p className='text-[30px] text-center md:text-[42px] font-DMSans font-bold '>
                        Unleashing Engineers' Potential
                    </p>
                    <div className='text-white text-base font-DMSans text-center'>
                        <span className='text-[#8FD221] pr-2'>NoCode Portfolio Builder</span>for Dream-Career Presentations. Create Your Visual Identity, Impress Recruiters, and Land Your Dream Job with Ease!"
                    </div>
                    <div className='flex flex-col md:flex-row  w-full md:w-3/5 h-full gap-3 justify-center mt-5'>
                        <img src={ab1} alt='' className='w-full md:w-1/3 object-contain '/>
                        <img src={ab2} alt='' className='w-full md:w-1/3 object-contain '/>
                    </div>
                </div>
            </div>


        </div>)
}

export default About