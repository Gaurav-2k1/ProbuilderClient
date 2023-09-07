import React from 'react'
import SectionNav from './SectionNav'
import { BsArrowRight } from "react-icons/bs"
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { PiTerminalWindowFill } from "react-icons/pi"
import { AiFillSmile } from "react-icons/ai"
const work = [
  "JavaScript", "TypeScript",
  "HTML", "CSS", "React", "Redux", "NodeJS",
  "Express", "Postgres", "MongoDB",
  "Github", "Jira", "Heroku", "AWS"
]

const fun = [
  "Rust", "Tailwind", "Java", "Spring",
  "Figma", "Whimsical", "Planetscale",
  "GraphQl", "Python", "FastAPI"
]
const About = ({ user }) => {
  return (
    <section className='w-full h-full my-20 pt-20 bg-black px-4  md:px-32' id='about'>
      <SectionNav side={true} name="About" />
      <div className='flex flex-col md:flex-row w-full h-full gap-4'>
        <div className='flex flex-col w-full  md:w-1/2'>
          <p className='font-inter text-[18px] w-full  font-extralight text-[#EBECF3]'>
            {user?.profile.about ? user?.profile.about : "Hey! I'm Bob, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job. I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?). Outside of work, I still love to paint. Any given Sunday you'll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn! I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect"}


          </p>
          <div className='flex flex-row mt-5 gap-4'>
            <p className='font-inter text-[18px]  font-normal text-[#98BBFF] flex flex-row items-center gap-3'>
              MyLinks <BsArrowRight />
            </p>
            <div className='flex flex-row w-max h-full items-center gap-4 '>
              <BsGithub className='text-lg text-white cursor-pointer' onClick={() => {
                window.open(user.social.filter((social) => social.title === "github")[0]?.link, '_blank', 'noopener,noreferrer');

              }} />
              <BsFacebook className='text-lg text-white cursor-pointer'
                onClick={() => {
                  window.open(user.social.filter((social) => social.title === "facebook")[0]?.link, '_blank', 'noopener,noreferrer');

                }}
              />
              <BsLinkedin className='text-lg text-white cursor-pointer'
                onClick={() => {
                  window.open(user.social.filter((social) => social.title === "linkedIn")[0]?.link, '_blank', 'noopener,noreferrer');

                }}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:ml-4  w-full md:w-1/2 h-full gap-3'>
          <SkillSection icon={<PiTerminalWindowFill className='text-3xl text-[#98BBFF]' />} name="Use at work" tag={work} sk={user.skills.filter((skill) => (skill.skilltype === "Technical" || skill.skilltype === "Software"))} />
          <SkillSection icon={<AiFillSmile className='text-3xl text-[#98BBFF]' />} name="Use for fun" tag={fun} sk={user.skills.filter((skill) => skill.skilltype === "Interpersonal")} />
        </div>
      </div>
    </section>
  )
}

const SkillSection = ({ icon, name, tag, sk }) => {
  return (
    <div className='flex flex-col w-full h-max gap-4'>
      <div className='flex flex-row items-center gap-3'>
        {icon}
        <p className='font-inter text-[22px] font-bold w-max text-[#EBECF3]'>{name}</p>
      </div>
      <div className='flex flex-wrap gap-2'>
        {
          sk.length === 0 ?
            tag.map((data, i) => {
              return (
                <p className='w-max rounded-3xl px-4 py-2 bg-[#232323] text-white text-[16px] font-Poppins font-normal' key={i}>{data}</p>

              )
            }) :
            sk.map((data, i) => {
              return (
                <p className='w-max rounded-3xl px-4 py-2 bg-[#232323] text-white text-[16px] font-Poppins font-normal' key={i}>{data.title}</p>

              )
            })
        }
      </div>
    </div>
  )
}

export default About