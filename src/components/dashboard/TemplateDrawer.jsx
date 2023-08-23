import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../slices/templateSlice'
import { getTemplate } from '../../services/approved/Template'
const TemplateDrawer = () => {
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
        <div className='absolute top-12 right-0
          z-50 delay-110 transition-all ease-linear'>
            <div className='flex flex-col  overflow-y-auto p-2 bg-primary border-x border-b border-white  border-solid min-h-[100px] max-h-[40vh]'>
                {
                    loading ? <div className=' w-full h-full bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div> : <>
                        {
                            template.map((data, i) => {
                                return (
                                    <TemplateBox key={i} url={data.preview} link={data.link} />

                                )
                            })
                        }

                    </>
                }


            </div>

        </div>
    )
}

const TemplateBox = ({ url, link }) => {
    const dispatch = useDispatch()
    const { template } = useSelector((state) => state.template)


    return (
        <div className={`w-[300px] h-[200px] border-lg my-4  delay-110 ease-in transition-all cursor-pointer relative ${template === link ? "border-4 border-icob  border-solid" :
            "border border-black  border-solid"}`}
            onClick={() => {
                dispatch(setTemplate(link))
            }}>
            <img src={url} alt='' className='object-cover  group hover:brightness-50' />
            <p className='bg-white text-black rounded-2xl px-3 py-1 absolute top-[40%] left-[40%] hidden group-hover:block delay-110 transition-all ease-in'>
                {template === link ? "In use" : "use"}
            </p>
        </div>
    )
}
export default TemplateDrawer