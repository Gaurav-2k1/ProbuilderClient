import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
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
    <section className='flex flex-col w-full h-full md:px-32 pt-10 ' id='Skill'>
      <p className='text-center text-[31px] leading-[74px] font-mono'>Skills i learned over the years</p>
      <p className='text-center text-base font-roboto-flex'>Lets explore my skills </p>
      <div className='flex flex-row mt-10 md:gap-10 gap-2 md:justify-center overflow-x-auto no-scrollbar'>
        <div className={`cursor-pointer p-2 min-w-max opacity-75  md:p-4 font-mono delay-110 ease-in-out transition-all  rounded-md ${active.current === "Technical" ? "border border-solid border-icob" : ""} text-white`} onClick={
          () => {
            showSkill("Technical")

          }
        }>
          Technical Skills
        </div>
        <div className={`cursor-pointer p-2 min-w-max opacity-75  md:p-4 font-mono delay-110 ease-in-out transition-all  rounded-md ${active.current === "Interpersonal" ? "border border-solid border-icob" : ""} text-white`}
          onClick={
            () => {
              showSkill("Interpersonal")

            }
          }>
          Interpersonal
        </div>
        <div className={`cursor-pointer p-2 min-w-max opacity-75  md:p-4 font-mono delay-110 ease-in-out transition-all  rounded-md ${active.current === "Software" ? "border border-solid border-icob" : ""} text-white`}
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


    </section>)
}

export default Skills;


const Skillscom = ({ title, level }) => {
  return (
    <div className='flex flex-col md:w-1/4 w-1/3 md:m-5 m-3 delay-150 ease-linear transition-all'>
      <div className='flex flex-row justify-between'>
        <p className='text-base font-mono'>{title}</p>
        <p className='text-base font-mono'>{level}</p>

      </div>

      <div className='w-full bg-gray-100 h-2 rounded-xl mt-2'>
        <motion.div
          animate={{ width: `${level}` }}
          initial={{ width: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}

          className={`bg-icob h-full  rounded-xl`}></motion.div>
      </div>
    </div>
  )
}