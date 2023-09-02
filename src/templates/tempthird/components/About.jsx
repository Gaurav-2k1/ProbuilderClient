import React, { useState } from 'react'

const About = ({ user }) => {
  const [ab, setab] = useState(user?.profile.about.slice(0, 400))
  const sliceAbout = () => {
    setab(user?.profile.about)
  }
  const slicAbout = () => {
    setab(user?.profile.about.slice(0, 400))
  }
  return (
    <div className='w-full h-full rounded-lg bgs text-white flex flex-col items-center py-14 gap-2'>
      <p className='text-[40px] text-center font-bold text-white font-DMSans'>Something About Me</p>
      <p className='w-3/4 text-justify md:text-center mt-4 font-DMSans text-lg hidden md:block'>
        {user?.profile.about ? user?.profile.about : "Claire Williams : Entrepreneurial tech enthusiast with a passion for startups. Co-founder of 'Tournafest' Esports App, securing $400K funding. Led 30+ high-performance teams, driving remarkable growth. Collaborated with diverse startups & corporate ventures. Open-source contributor with 6000+ GitHub stars. IIT Roorkee CS alum, versatile & results-oriented leader. Built 'Tournafest' into a prominent player with 370K+ users & 70K+ tournaments. Expertise spans tech, healthcare, fintech, and deeptech industries."}
      </p>
      <p className='w-3/4 text-justify md:text-center mt-4 font-DMSans text-lg md:hidden'>
        {user?.profile.about ?
          <div>
            {ab}
            <p className={`text-red-500 cursor-pointer hover:underline ${ab.length > 400 ? "hidden" : "block"}`} onClick={sliceAbout}>See More</p>
            <p className={`text-red-500 cursor-pointer hover:underline ${ab.length > 400 ? "block" : "hidden"}`} onClick={slicAbout}>See Less</p>
          </div> : "Claire Williams : Entrepreneurial tech enthusiast with a passion for startups. Co-founder of 'Tournafest' Esports App, securing $400K funding. Led 30+ high-performance teams, driving remarkable growth. Collaborated with diverse startups & corporate ventures. Open-source contributor with 6000+ GitHub stars. IIT Roorkee CS alum, versatile & results-oriented leader. Built 'Tournafest' into a prominent player with 370K+ users & 70K+ tournaments. Expertise spans tech, healthcare, fintech, and deeptech industries."}
      </p>
    </div>
  )
}

export default About