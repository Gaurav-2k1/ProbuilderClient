import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate, setTemplatetitle } from '../../slices/templateSlice'
import { getTemplate } from '../../services/approved/Template'
const TemplateDrawer = ({ onMouseLeave }) => {
    const [template, setTemplate] = useState([])
    const [loading, setLoading] = useState(true)

    const getTemplateData = async () => {
        try {
            let temp = await getTemplate()
            setTemplate(temp.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getTemplateData()
    }, [])
    return (
        <div className='
          z-50 delay-110 transition-all ease-linear'>
            <div className='flex flex-col p-2 bg-primary border-x border-b border-white  border-solid max-h-[100vh] w-full overflow-auto no-scrollbar'
                onMouseLeave={onMouseLeave}>
                {
                    loading ? <div className=' w-full h-full bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div> : <>
                        {
                            template.map((data, i) => {
                                return (
                                    <TemplateBox key={i} url={data.preview} link={data.link} title={data.title} />

                                )
                            })
                        }
                        

                    </>
                }


            </div>

        </div>
    )
}

const TemplateBox = ({ url, link, title }) => {
    const dispatch = useDispatch()
    const { template } = useSelector((state) => state.template)
    console.log(template, link)

    return (
        <div className={`w-[300px] h-[160px] border-lg my-4  
        delay-110 ease-in transition-all cursor-pointer relative ${template === link ? "border-4 border-icob  border-solid" :
                "border border-black  border-solid"} group`}
            onClick={() => {
                dispatch(setTemplate(link))
                dispatch(setTemplatetitle(title))
            }}>
            <img src={url} alt='' className='object-fill  group-hover:brightness-50' />
            <p className='bg-white text-black rounded-2xl px-3 py-1 absolute top-[40%] left-[40%] hidden group-hover:block delay-110 transition-all ease-in'>
                {template === link ? "In use" : "use"}
            </p>
        </div>
    )
}
export default TemplateDrawer