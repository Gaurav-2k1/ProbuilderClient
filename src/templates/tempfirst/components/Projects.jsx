import React from 'react'
import po from "../assets/proj1.png"
import ps from "../assets/proj2.png"

const Projects = ({ user }) => {
  return (
    <>
      <div className='flex flex-col w-full h-full md:px-32 md:pt-10' id="project">
        <p className='text-center text-lg font-mono'>Projects i built with a motive</p>
        <p className='text-center text-base font-roboto-flex'>Lets have a look at  some of mine awesome projecs i built over the timebeing</p>
        <div className='flex flex-wrap mt-10 gap-6 justify-items-center'>
          {
            user?.projects.length > 0 ? (
              user.projects.map((data, i) => {
                return (
                  <ProjectCard src={po} key={i} title={data.title} />

                )
              }))
              : <div className='flex flex-wrap mt-10 gap-6 justify-center'>
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
    <div className='relative cursor-pointer group'>
      <img src={src} alt=''
        className='brightness-50 w-full h-[350px] md:w-[600px] md:h-[500px] '
      />
      <div className='absolute bottom-0 opacity-0  flex flex-col w-full md:w-[600px]  h-min 
                    px-10 md:px-0	gap-4  pb-5 proj  group-hover:opacity-100 delay-110 transition-all ease-linear'>
        <p className='text-white text-lg font-mono px-0 md:px-4'>{title ? title : "Designer App"}</p>
        <p className='text-white text-sm md:text-base font-roboto-flex px-0 md:px-4'>Where i can create anything they want ato anythigWhere ie can create anything t
          hey want ato anythig Where ie can create anything they want to anythig</p>
        <div className='flex flex-row gap-3 px-0 md:px-4'>
          <div className='cursor-pointer md:p-4 p-2 md:text-lg text-base font-mono bg-gray-100 text-white'>
            Live Demo
          </div>
          <div className='cursor-pointer md:p-4 p-2 md:text-lg text-base font-mono bg-gray-100 text-white'>
            Source Code
          </div>

        </div>
      </div>
    </div>
  )
}