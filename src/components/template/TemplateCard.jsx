import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
const TemplateCard = ({ url, n }) => {
    return (
        <div className='flex flex-col rounded-lg'>
            <img src={url} alt='' className='md:w-[424px] md:h-[233px] w-full h-full object-cover rounded-lg hover:brightness-50 delay-109 transition-all ease-linear' />
            <div className={`px-5 py-2
            hover:text-white hover:border-white hover:bg-bground text-black border-black 
            bg-white group
             border  border-solid font-DMSans rounded-3xl w-max mt-5 flex flex-row cursor-pointer items-center  delay-100 transition-all ease-in`}>Go with site
                <AiOutlineArrowRight className={`text-lg pl-1  group-hover:text-white text-black`} />
            </div>
        </div>
    )
}

export default TemplateCard