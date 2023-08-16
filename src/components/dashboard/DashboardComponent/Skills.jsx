import React, { useEffect, useState } from 'react'
import { IoAddSharp } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { addSkill, getAllSkills } from '../../../services/operations/SkillAPI'
import { socket } from '../../common/Socket'

// import { SKILL_TYPE } from '../../../utils/constants'
const Skills = () => {
    const [skillType, setSkillType] = useState([])
    const { token } = useSelector((state) => state.auth)

    const [Technical, setTechnical] = useState([])
    const [Softwares, setSoftware] = useState([])
    const [Interpersonal, setInterPersonal] = useState([])
    const getSkill = async () => {
        try {
            let skill = await getAllSkills(token)
            setSkillType(skill)
            setTechnical(skill.filter((skill) => skill.skilltype === "Technical"))
            setSoftware(skill.filter((skill) => skill.skilltype === "Software"))
            setInterPersonal(skill.filter((skill) => skill.skilltype === "Interpersonal"))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        socket.on("skilladded", () => {
            getSkill()

        })
        getSkill()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='flex flex-col w-full'>
            <SkillTile skill="Technical Skills" arr={Technical} setarr={setTechnical} type="Technical" skillty={skillType} />
            <SkillTile skill="Softwares" arr={Softwares} setarr={setSoftware} type="Software" skillty={skillType} />
            <SkillTile skill="Interpersonal Skills" arr={Interpersonal} setarr={setInterPersonal} type="Interpersonal" skillty={skillType} />
        </div>
    )
}

export default Skills

const SkillTile = ({ skill, arr, setarr, type }) => {


    const [Skills, setSkill] = useState({
        title: '',
        level: '',
        skilltype: type
    })





    const dispatch = useDispatch()
    // const [tech, settech] = useState([])
    const { token } = useSelector((state) => state.auth)

    const di = () => {
        const { title, level } = Skills;

        const slexp = level.slice(0, 2)
        console.log(token, Skills)
        try {
            setarr((prevArray) => [...prevArray, { title, level: slexp }]);

            dispatch(addSkill(token, Skills))

            setSkill({
                title: '',
                level: '',
                skilltype: type

            })

        } catch (err) {
            console.log(err)
            setSkill({
                title: '',
                level: '',
                skilltype: type

            })
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSkill((prevObject) => ({ ...prevObject, [name]: value }));
    };
    return <div className='flex flex-col w-full py-2'>
        <div className='flex flex-row justify-between my-2'>
            <p className='text-basse font-DMSans '>{skill}</p>
            <div className='w-min rounded-2xl cursor-pointer hover:bg-blueviolet-300 bg-icob text-white font-DMSans px-2'>Save</div>
        </div>
        <div className='flex flex-row h-full w-full gap-1 relative border border-solid border-[#ffffff2b] bg-primary rounded-sm'>
            <input name='title' placeholder='Add any skill you have' type='text' className='w-full py-3 rounded-md bg-primary placeholder:text-[#ffffff2b]
         placeholder:font-DMSans placeholder:text-sm pl-1 text-base font-DMSans' value={Skills.title} onChange={handleInputChange}
            />
            <div className='absolute right-1 bottom-1 flex-row flex gap-1'>
                <select name='level' className=' rounded-md select p-2 text-sm font-DMSans border border-solid border-[#ffffff2b] bg-bground'
                    value={Skills.level} onChange={handleInputChange}>
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

                // eslint-disable-next-line array-callback-return
                arr.map((data, i) => {
                    if (data.skilltype === type) {
                        return (
                            <div key={i} className={`min-w-14 w-max bg-black  h-min px-4 py-1 font-DMSans rounded-2xl relative cursor-pointer`}>
                                {data.title.charAt(0) + data.title.slice(1).toLowerCase()}
                                <div
                                    style={{ width: `${data.level}` }}
                                    className={`absolute h-full bg-icob py-1 top-0 left-0 ${data.level > "80%" ? "rounded-2xl" : "rounded-l-2xl"}  opacity-60`}></div></div>
                        )
                    }
                })
            }
        </div>

    </div>
}