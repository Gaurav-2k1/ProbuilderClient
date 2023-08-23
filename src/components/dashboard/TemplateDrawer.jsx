import React from 'react'
import Tempone from "../../assets/temp/tempone.png"
import Temptwo from "../../assets/temp/temptwo.png"
import Tempthree from "../../assets/temp/tempthree.png"
import { useDispatch } from 'react-redux'
import { setTemplate } from '../../slices/templateSlice'
const TemplateDrawer = () => {
    return (
        <div className='absolute top-10 right-0
          z-50 delay-110 transition-all ease-linear'>
            <div className='flex flex-col  overflow-y-auto p-2 bg-white min-h-[100px] '>

                <TemplateBox url={Tempone} link="/template/tempone" />
                <TemplateBox url={Temptwo} link="/template/temptwo" />
                <TemplateBox url={Tempthree} link="/template/tempthree" />

            </div>

        </div>
    )
}

const TemplateBox = ({ url, link }) => {
    const dispatch = useDispatch()


    return (
        <div className='w-[300px] h-[150px] bg-red-600 border-lg my-4  hover:brightness-50 delay-110 ease-in transition-all cursor-pointer'
            onClick={() => {
                dispatch(setTemplate(link))
            }}>
            <img src={url} alt='' className='object-cover' />
        </div>
    )
}
export default TemplateDrawer