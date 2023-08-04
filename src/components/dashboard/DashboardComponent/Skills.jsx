import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5"
const Skills = () => {
    const [Technical, setTechnical] = useState([])
    const [Softwares, setSoftware] = useState([])
    const [Interpersonal, setInterPersonal] = useState([])
    console.log(Technical)
    return (
        <div className='flex flex-col w-full'>
            <SkillTile skill="Technical Skills" arr={Technical} setarr={setTechnical} />
            <SkillTile skill="Softwares" arr={Softwares} setarr={setSoftware} />
            <SkillTile skill="Interpersonal Skills" arr={Interpersonal} setarr={setInterPersonal} />
        </div>
    )
}

export default Skills

const SkillTile = ({ skill, arr, setarr }) => {

    const [Skills, setSkill] = useState({
        name: "",
        exp: ""
    })
    const [tech, settech] = useState([])

    const di = () => {
        const { name, exp } = Skills;

        const slexp = exp.slice(0, 2)
        setarr((prevArray) => [...prevArray, { name, exp: slexp }]);

        setSkill({
            name: '',
            exp: ''
        })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSkill((prevObject) => ({ ...prevObject, [name]: value }));
    };
    return <div className='flex flex-col w-full py-2'>
        <p className='text-basse font-DMSans '>{skill}</p>
        <div className='flex flex-row h-full w-full gap-1 relative border border-solid border-[#ffffff2b] bg-primary rounded-sm'>
            <input name='name' placeholder='Add any skill you have' type='text' className='w-full py-3 rounded-md bg-primary placeholder:text-[#ffffff2b]
         placeholder:font-DMSans placeholder:text-sm pl-1 text-base font-DMSans' value={Skills.name} onChange={handleInputChange} />
            <div className='absolute right-1 bottom-1 flex-row flex gap-1'>
                <select name='exp' className=' rounded-md select p-2 text-sm font-DMSans border border-solid border-[#ffffff2b] bg-bground'
                    value={Skills.exp} onChange={handleInputChange}>
                    <option className='text-base font-DMSans'>0%</option>
                    <option className='text-base font-DMSans'>10%</option>
                    <option className='text-base font-DMSans'>20%</option>
                    <option className='text-base font-DMSans'>30%</option>
                    <option className='text-base font-DMSans'>40%</option>
                    <option className='text-base font-DMSans'>50%</option>
                    <option className='text-base font-DMSans'>60%</option>
                    <option className='text-base font-DMSans'>70%</option>
                    <option className='text-base font-DMSans'>80%</option>
                    <option className='text-base font-DMSans'>90%</option>
                    <option className='text-base font-DMSans'>100%</option>
                </select>
                <IoAddSharp className='bg-icob rounded-sm p-2 w-10 h-10 text-white cursor-pointer hover:brightness-75' onClick={di} />
            </div>

        </div>
        <div className='flex flex-wrap mt-3 gap-3'>
            {

                arr.map((data, i) => {
                    return (
                        <div key={i} className={`min-w-14 w-max bg-black  h-min px-4 py-1 font-DMSans rounded-2xl relative cursor-pointer`}>
                            {data.name}
                            <div
                                style={{ width: `${data.exp}%` }}
                                className={`absolute h-full bg-icob py-1 top-0 left-0 ${data.exp > 80 ? "rounded-2xl" : "rounded-l-2xl"}  opacity-60`}></div></div>
                    )
                })
            }
        </div>

    </div>
}