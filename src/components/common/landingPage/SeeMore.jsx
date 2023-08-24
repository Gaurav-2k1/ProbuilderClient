import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs"

const SeeMore = ({title,detail}) => {
    const [show, setShow] = useState(false)
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row text-[16px] text-black md:text-[25px] items-center gap-2 font-bold font-DMSans w-max cursor-pointer' onClick={() => { setShow(!show) }}> {title}
                <BsChevronDown  className={`text-lg text-black font-extrabold ${show ? "":"-rotate-90"} delay-110 transition-all ease-in`} /></div>
            {
                show && <p className='text-[#0000008a] text-base font-DMSans w-3/4'>
                   {detail}
                </p>
            }

        </div>
    )
}

export default SeeMore