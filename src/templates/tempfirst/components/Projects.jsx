import React from 'react'
import po from "../assets/proj1.png"
import ps from "../assets/proj2.png"

const Projects = ({ user }) => {
  return (
    <>
      <div className='flex flex-col w-full h-full md:px-32 md:pt-10'>
        <p className='text-center text-lg font-mono'>Projects i built with a motive</p>
        <p className='text-center text-base font-roboto-flex'>Lets have a look at  some of mine awesome projecs i built over the timebeing</p>
        <div className='flex flex-wrap mt-10 gap-6'>
          {
            user?.projects.length > 0 ? (
              user.projects.map((data, i) => {
                return (
                  <ProjectCard src={po} key={i} title={data.title} />

                )
              }))
              : <div className='flex flex-wrap mt-10 gap-6'>
                <ProjectCard src={po} />
                <ProjectCard src={ps} />
                <ProjectCard src={po} />
                <ProjectCard src={ps} />

              </div>
          }

        </div>
      </div>

    </>

  )
}

export default Projects

const ProjectCard = ({ src, title }) => {
  return (
    <div className='relative cursor-pointer'>
      <img src={src} alt=''
        className='brightness-50  w-full h-full md:w-[600px] md:h-[500px]'
       
       
      />
      <div className='absolute bottom-0  flex flex-col w-full h-min px-10	gap-4  pb-5 proj'>
        <p className='text-white text-lg font-mono'>{title ? title : "Designer App"}</p>
        <p className='text-white text-sm md:text-base font-roboto-flex'>Where i can create anything they want ato anythigWhere ie can create anything t
          hey want ato anythig Where ie can create anything they want to anythig</p>
        <div className='flex flex-row gap-3'>
          <div className='cursor-pointer p-4 md:text-lg text-base font-mono bg-gray-100 text-white'>
            Live Demo
          </div>
          <div className='cursor-pointer p-4 md:text-lg text-base font-mono bg-gray-100 text-white'>
            Source Code
          </div>

        </div>
      </div>
    </div>
  )
}