import React from 'react'
import { BsSearch } from 'react-icons/bs'
import hero from "../../../assets/Images/heroimg.png"
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
            <div className='w-full h-[60vh] mainhero pt-14 flex flex-col items-center'>
                <p className='herotext text-[40px] font-DMSans font-bold'>
                    Build Your Professional Portfolio in Minutes
                </p>
                <p className='text-lg w-2/5 text-center font-DMSans mt-5 text-[#838894]'>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                <div className='w-2/5 pt-10 relative '>
                    <BsSearch className='text-[#333] text-base absolute left-3 bottom-3' />
                    <input className='bg-white text-black font-DMSans rounded-lg w-full py-2 px-2 pl-10 placeholder:font-DMSans placeholder:text-base placeholder:text-[#333]' placeholder='Search templates by profession or style.' />
                </div>
                <div className='mt-3 w-min flex flex-row gap-3 '>
                    {
                        tags.map((data, i) => {
                            return (
                                <p key={i} className='min-w-max px-2 py-2 bg-[#1E0000] rounded-lg font-DMSans'>{data.title}</p>
                            )
                        })
                    }
                </div>

            </div>
            <div className='flex flex-row mt-10 w-full items-center'>
                <div className='flex flex-col w-1/2 px-10'>
                    <p className=' font-bold font-DMSans text-black text-[40px] w-[70%] leading-9'>Experience the immense potential of our

                        <span className='bg-gradient-to-b from-[#7E7584] via-[#AF2DFF]  to-[#AF2DFF ] text-transparent bg-clip-text text-[40px] font-bold pl-3'>
                             powerful tool </span></p>

                    <div className='text-black text-lg font-DMSans font-medium mt-2 w-3/4'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect of your portfolio. From stunning visuals to seamless navigation, our tool ensures your unique personality and professional achievements shine through with every click.</div>
                </div>
                <div className='w-1/2'>
                    <img src={hero} alt='' className='w-[623px] h-[350px] object-contain' />
                </div>/
            </div>
        </div>

    )
}

export default Hero