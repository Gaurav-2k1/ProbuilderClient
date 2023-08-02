import React from 'react'
import { BsSearch } from 'react-icons/bs'
import hero from "../../../assets/Images/heroimg.png"
import herosec from "../../../assets/Images/herosec.png"
import TemplateSlider from '../../../components/common/ReviewSlider'
const tags = [
    {
        title: "scienist"
    },
    {
        title: "engineer"
    }
    , {
        title: "software developer"
    }, {
        title: "data analyst"
    }, {
        title: "student"
    }
]

const Hero = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='w-full h-full md:h-[60vh] gap-6  pb-10 mainhero pt-14 flex flex-col items-center'>
                <p className='herotext text-[35px] md:text-[40px] font-DMSans font-bold text-center'>
                    Build Your Professional Portfolio in Minutes
                </p>
                <p className='text-lg  w-4/5 md:w-2/5 text-center font-DMSans mt-5 text-[#838894]'>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                <div className='w-4/5 md:w-2/5 pt-10 relative '>
                    <BsSearch className='text-[#333] text-base absolute left-3 bottom-3' />
                    <input className='bg-white text-black font-DMSans rounded-lg w-full py-2 px-2 pl-10 placeholder:font-DMSans placeholder:text-base placeholder:text-[#333]' placeholder='Search templates by profession or style.' />
                </div>
                <div className='mt-3 w-full px-2 overflow-x-auto no-scrollbar py-2 md:w-min flex flex-row gap-3 '>
                    {
                        tags.map((data, i) => {
                            return (
                                <p key={i} className='min-w-max px-2 py-2 bg-[#1E0000] rounded-lg font-DMSans'>{data.title}</p>
                            )
                        })
                    }
                </div>

            </div>
            <div className='flex flex-col md:flex-row mt-10 w-full items-center'>
                <div className='flex flex-col w-full md:w-1/2 md:px-10'>
                    <p className=' font-bold font-DMSans text-black text-[40px] w-full md:w-[70%] leading-9'>Experience the immense potential of our

                        <span className='bg-gradient-to-t from-[#7E7584] via-[#AF2DFF] to-[#AF2DFF ] text-transparent bg-clip-text text-[40px] font-bold pl-3'>
                            powerful tool </span></p>

                    <div className='text-black text-lg font-DMSans font-normal mt-2 md:w-3/4'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect of your portfolio. From stunning visuals to seamless navigation, our tool ensures your unique personality and professional achievements shine through with every click.</div>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src={hero} alt='' className='w-full h-full mt-5 md:w-[623px] md:h-[350px] object-contain' />
                </div>
            </div>
            <div className='flex flex-col mt-10 w-full items-center md:justify-center'>
                <div className='flex flex-col w-full items-center'>
                    <p className='font-bold font-DMSans text-center text-black text-[30px] md:text-[40px] w-full'>Portfolios that

                        <span className='bg-gradient-to-r from-[#7B1CF2] via-[#7B1CF2]  to-[#FF0202] text-transparent text-[30px] 
                        bg-clip-text md:text-[40px] font-bold pl-3'>
                            recuiters want </span></p>

                    <div className='text-black text-base text-center font-DMSans font-medium mt-2 w-full md:w-1/2'>
                    Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect</div>
                </div>
                <TemplateSlider />
                {/* <div className='w-1/2'>
                    <img src={hero} alt='' className='w-[623px] h-[350px] object-contain' />
                </div>/ */}
            </div>
            <div className='w-full h-full min-h-[70vh] py-10'>
                <div className='w-full h-full bg-[#252525] md:flex-row flex-col flex  items-center rounded-lg py-4'>
                    <div className='flex flex-col w-full md:w-1/2 px-10'>
                        <p className=' font-bold font-DMSans text-white text-[35px] w-full md:w-[70%] leading-10'>Give Recuiters a plus point at the very start of your contact
                        </p>

                        <div className='text-white text-lg font-DMSans font-medium mt-2 w-full md:w-3/4'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect</div>
                        <div className='w-max px-5 py-2 text-white bg-icob mt-5 text-base font-DMSans rounded-2xl'>Get Started</div>
                    </div>

                    <div className='w-4/5 md:w-1/2'>
                        <img src={herosec} alt='' className='w-[623px] h-[350px] object-contain card relative' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero