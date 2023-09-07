import React from 'react'

const SectionNav = ({side,name}) => {
    return (
        <div className={`flex ${side?"flex-row" :"flex-row-reverse"}  items-center gap-5`}>
            <p className='font-black gap-2 text-[40px] md:text-[56px] leading-[105px] font-Poppins flex flex-row'>
                {name} <span className='text-[#98BBFF] md:text-[60px] font-black'>.</span>
            </p>
            <div className='h-[1px] w-full bg-[#EBECF3] opacity-30' />
        </div>
    )
}

export default SectionNav