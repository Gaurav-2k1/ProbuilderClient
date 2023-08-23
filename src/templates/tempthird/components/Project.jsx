import React from 'react'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import { BsArrowUpRight } from "react-icons/bs"
const Project = ({ user }) => {
  return (
    <div className=' mt-4 h-full w-full'>
      <div className='w-full h-full  flex flex-wrap gap-3 justify-center' >
        {
          user?.projects.length > 0 ? (
            user.projects.map((data, i) => {
              return (
                <ProjectCard url={i % 2 === 0 ? p1 : p2} key={i} title={data.title} />

              )
            }))
            : <div className='flex flex-wrap mt-10 gap-6 justify-center'>
              <ProjectCard url={p1} />
              <ProjectCard url={p2} />
              <ProjectCard url={p3} />
              <ProjectCard url={p1} />
              <ProjectCard url={p2} />

            </div>
        }

      </div>



    </div>
  )
}

const ProjectCard = ({ url ,title}) => {
  return (
    <div className='md:w-[400px] md:h-[500px] relative rounded-lg group'>

      <img className='object-cover md:w-[400px] md:h-[500px] group-hover:brightness-75 rounded-lg cursor-pointer delay-200 transition-all ease-in' alt='' src={url} />
      <div className='rounded-full p-4 absolute top-5 right-5 bg-[#00000080] z-5 hidden group-hover:block cursor-pointer hover:scale-105'>
        <BsArrowUpRight className='text-white text-2xl' />
      </div>
      <div className='w-11/12 mx-4 h-max absolute bottom-4 left-0 bg-[#00000090] p-4 rounded-lg hidden group-hover:block delay-200 transition-all ease-in'>

        <p className='text-white font-DMSans text-[20px] font-bold'>{title}</p>
        <p className='text-white font-DMSans text-[16px] font-medium'>We updated our Payments page along with the site redesign, and it's now live! Check it out at: https://stripe.com/payments Big props to the whole team but especially Thomas Degry and Nick Jones for, as always, the lovely details on the animations.</p>
      </div>
    </div>

  )
}

export default Project