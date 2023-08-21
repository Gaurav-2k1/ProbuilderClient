import React, { useRef, useState } from 'react'

const Skills = ({ user }) => {
  const [Skilla, setSkilla] = useState(user.skills.filter((skill) => skill.skilltype === "Technical"))

  const active = useRef("Technical")
  const showSkill = (title) => {
    active.current = title
    // console.log(user.skills.filter((skill) => skill.skilltype === "Technical"))
    if (active.current === "Technical") {
      setSkilla(user.skills.filter((skill) => skill.skilltype === "Technical"))

    } else if (active.current === "Software") {
      setSkilla(user.skills.filter((skill) => skill.skilltype === "Software"))

    } else {
      setSkilla(user.skills.filter((skill) => skill.skilltype === "Interpersonal"))

    }
    // console.log(Skilla)
  }

  return (
    <div className='flex flex-col w-full h-full md:px-32 pt-10 '>
      <p className='text-center text-lg font-mono'>Skills i learned over the years</p>
      <p className='text-center text-base font-roboto-flex'>Lets explore my skills </p>
      <div className='flex flex-row mt-10 md:gap-10 gap-2 justify-center'>
        <div className='cursor-pointer p-2 min-w-max  md:p-4 font-mono bg-gray-100 text-white' onClick={
          () => {
            showSkill("Technical")

          }
        }>
          Technical Skills
        </div>
        <div className='cursor-pointer p-2 min-w-max  md:p-4 font-mono bg-gray-100 text-white'
          onClick={
            () => {
              showSkill("Interpersonal")

            }
          }>
          Interpersonal
        </div>
        <div className='cursor-pointer p-2 min-w-max  md:p-4 font-mono bg-gray-100 text-white'
          onClick={
            () => {
              showSkill("Software")

            }
          }>
          Softwares
        </div>
      </div>
      <div className='w-full h-full flex flex-wrap mt-10  justify-center'>
        {
          Skilla.map((data, i) => {
            return (
              <Skillscom key={i} title={data.title} level={data.level} />

            )
          })

        }
        {/* <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom />
        <Skillscom /> */}

      </div>


    </div>)
}

export default Skills;


const Skillscom = ({ title, level }) => {
  return (
    <div className='flex flex-col md:w-1/4 w-1/3 md:m-5 m-3'>
      <p className='text-base font-mono'>{title}</p>
      <div className='w-full bg-gray-100 h-2 rounded-xl mt-2'>
        <div style={{ width: `${level}` }}
          className={`bg-blue-500 h-full  rounded-xl`}></div>
      </div>
    </div>
  )
}