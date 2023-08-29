import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Preview = ({ show, setShow }) => {
    const { view } = useSelector((state) => state.page)
    const { template } = useSelector((state) => state.template)
    return (
        <div className={`md:h-full h-screen no-scrollbar  bg-bground pt-10 
        justify-start  flex  flex-row w-full ${show ? "md:pr-10" : "md:pr-10"}  relative ${view === "w-screen" ? "" : "justify-center"} items-center`}>
            {
                view === "w-screen" ?
                    <Link target="_blank" rel="noopener noreferrer" className='absolute pl-10 top-2 text-center w-max  font-roboto-flex cursor-pointer hover:underline' to={template}>Click here to open in new tab</Link>
                    : <></>
            }
            <div className={`${view === "w-screen" ? "" : "flex"} no-scrollbar  rounded-lg   items-center justify-center h-full w-full ${show ? "md:w-4/5" : "md:w-full"}  
             pl-5  overflow-y-auto scale-95`}>
                <iframe

                    className={`${view} no-scrollbar overflow-y-scroll h-full  rounded-lg
                    `}
                    src={template}
                    title="Web Browser" />
            </div>

        </div>
    )
}

export default Preview