"use client"
import React, {  useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

const Tile = ({ title, placeholdertext, iconp, inp, icons, children }) => {

    const [active, setActive] = useState(false)

    return (
        <div className='flex flex-col '>
            <div className='flex flex-row px-4 py-4 items-center justify-between
        border-t border-opacity-80  border-bground border-solid
        bg-[#222] cursor-pointer'  onClick={() => setActive(!active)}>
                <p className='text-base font-semibold font-MuseoModerno'>{title}</p>
                {
                    active ? <IoIosArrowUp className='cursor-pointer text-white rounded-full
            border border-white border-solid p-1' size={20}

                    /> :
                        <IoIosArrowDown className='cursor-pointer text-white rounded-full
            border border-white border-solid p-1' size={20}

                        />
                }
            </div>
            <div className={`gap-2 w-full h-min px-5  ${!active && "hidden"}
             bg-[#222] `}>
                {
                    children
                }


            </div>
        </div>


    )
}

export default Tile