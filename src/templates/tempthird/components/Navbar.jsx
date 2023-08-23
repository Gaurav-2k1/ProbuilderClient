import React from 'react'

const Navbar = ({ user }) => {
  return (
    <div className='flex flex-row w-full h-min border border-solid justify-between border-[#00000010] items-center px-2 py-1 md:px-4 md:py-2'>
      <p className='md:text-3xl text-lg font-DMSans text-[#512121] font-bold'>{(user?.firstName && user?.lastName) ? (user?.firstName + " " + user?.lastName) : "Alexander Hales"}</p>
      <div className='rounded-2xl w-max bg-[#A67800] text-white text-lg cursor-pointer font-DMSans px-2 py-1 hover:scale-105 delay-110 transition-all ease-in'
        onClick={() => {
          window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

        }}>Download CV</div>
    </div>
  )
}

export default Navbar