import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
const TemplateCard = ({ url, n }) => {
    return (
        <div className='flex flex-col rounded-lg'>
            <img src={url} alt='' className='md:w-[424px] md:h-[233px] w-full h-full object-cover rounded-lg hover:brightness-50 delay-109 transition-all ease-linear' />
            <div className={`px-5 py-2
            ${n % 2 === 0 ? "text-white border-white bg-bground" : " text-black border-black bg-white"}
             border  border-solid font-DMSans rounded-2xl w-max mt-5 flex flex-row cursor-pointer items-center hover:underline delay-109 transition-all ease-linear`}>Go with site
                <AiOutlineArrowRight className={`text-lg pl-1    ${n % 2 === 0 ? "text-white " : " text-black "}`} />
            </div>
        </div>
    )
}

export default TemplateCard