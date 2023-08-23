import React from 'react'
import Tempone from "../../assets/temp/tempone.png"
import Temptwo from "../../assets/temp/temptwo.png"
import Tempthree from "../../assets/temp/tempthree.png"
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../slices/templateSlice'
const TemplateDrawer = () => {
    return (
        <div className='absolute top-12 right-0
          z-50 delay-110 transition-all ease-linear'>
            <div className='flex flex-col  overflow-y-auto p-2 bg-primary border-x border-b border-white  border-solid min-h-[100px] max-h-[40vh]'>

                <TemplateBox url={Tempone} link="/template/tempone" />
                <TemplateBox url={Temptwo} link="/template/temptwo" />
                <TemplateBox url={Tempthree} link="/template/tempthree" />

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