"use client"
import React from 'react'
import { PiCloudArrowUpThin } from 'react-icons/pi'

const CustomButton = () => {
    return (
        <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' type='submit'>
            <PiCloudArrowUpThin size={20} className='text-white ' />
            <p className='text-lg font-MuseoModerno'>Save</p>

        </button>)
}

export default CustomButton