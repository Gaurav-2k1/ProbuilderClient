import React from 'react'

const Opdata = ({ colo, title, desc, i }) => {
    return (
        <div className={`flex flex-col w-full ${i === 3 ? "w-2/3" : "w-1/3"}`}>
            <p className={`text-lg font-DMSans w-max font-semibold ${colo}`}>{title}</p>
            <p className='text-base w-full font-medium text-[#000000ad]'>{desc}</p>
        </div>
    )
}

export default Opdata