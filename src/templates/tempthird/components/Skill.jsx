import React from 'react'
import con from "../assets/cont.png"
const Skill = ({ user }) => {
    return (
        <div className='w-full h-full mt-5'>
            <div className='flex w-full flex-col md:flex-row my-2 gap-4'>
                <div className={`flex flex-col w-full md:w-3/4 rounded-lg bgp p-5 md:p-10 gap-4 justify-around`}>
                    <SkillSection title="Technologies" sk={user.skills.filter((skill) => skill.skilltype === "Technical")} />
                    <SkillSection title="Softwares" sk={user.skills.filter((skill) => skill.skilltype === "Software")} />
                    <SkillSection title="Interpersonal" sk={user.skills.filter((skill) => skill.skilltype === "Interpersonal")} />
                </div>
                <div className='w-full md:w-1/4  flex flex-col p-2 bg-black justify-between rounded-lg py-4 gap-3'>

                    <img src={con} alt='' className='object-contain h-3/5 self-center' />
                    <p className='text-lg font-bold text-white font-DMSans'>I have the skills & the experience you need ! </p>
                    <p className='rounded-2xl bgp w-max text-black font-bold px-3 py-2 font-DMSans'>Contact Me !</p>
                </div>
            </div>


        </div>)
}

const SkillSection = ({ title, sk }) => {
    return (
        <div className='w-full flex flex-col'>
            <p className='text-[35px] font-DMSans text-black font-bold'>{title}</p>
            <div className='w-3/4 flex flex-wrap gap-3'>
                {
                    sk.map((data, i) => {
                        return (
                            <p key={i} className='text-white px-3 py-1 rounded-3xl bg-[#606060]  hover:bg-[#350707] cursor-pointer font-DMSans text-md font-normal'>{data.title}</p>

                        )
                    })
                }
            </div>
        </div>

    )
}

export default Skill