import React from 'react'
import projects from '../data/Projects'
import { FiExternalLink } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import po from "../../tempfirst/assets/proj1.png"

const Project = ({ user }) => {
  return (
    <div id="Project" className='h-full md:p-0 px-5 w-full bg-secondary py-5  flex flex-col items-center pt-16'>
      <h1 className="text-black text-3xl text-center my-4">Projects</h1>
      <div className='w-full md:w-4/5  md:h-2/5 flex flex-col '>
        <div className="flex flex-wrap justify-center items-start gap-8 mt-10">
          {
            projects.map((data, i) => {
              return (
                <ProjectCard key={i} id={data.id} url={po} company={data.company} detail={data.projectDetail} />
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ id, company, url, detail }) => {
  const router = useNavigate()

  return (
    <div className=' md:w-80  md:h-96 rounded-2xl py-4 px-3 bg-tertiary z-0 my-5'>
      <div className='w-full h-3/5 relative group'>
        <div className='w-0 group-hover:w-full h-full absolute top-0 bg-secondary opacity-90 z-1 rounded-3xl grid place-items-center
        delay-250 transition-all ease-linear'>
          <span className='text-[0px] text-white  group-hover:text-lg delay-250 transition-all'>
            <FiExternalLink className='text-[0px] text-black group-hover:text-3xl cursor-pointer hover:text-black'
              onClick={() => {
                router.push(`/Details/${id}`)
              }}
            />
          </span>
        </div>
        <img className='w-full h-full  object-cover overflow-hidden rounded-3xl my-2
      cursor-pointer' src={url} alt="" />
      </div>

      <div className='flex flex-col h-1/5 justify-between mt-5'>
        <h2 className='text-lg font-semibold text-white'>{company}</h2>
        <span className='text-sm text-white'>
          {detail.name}
        </span>
      </div>
    </div>
  )
}


export default Project