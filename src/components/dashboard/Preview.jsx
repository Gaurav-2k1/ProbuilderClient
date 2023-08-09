import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Preview = ({ show, setShow }) => {
    const { view } = useSelector((state) => state.page)
    return (
        <div className={`h-full no-scrollbar  bg-bground pt-10 
        justify-start  flex w-full ${show ? "md:pr-10" : "md:pr-10"}  relative `}>
            {
                view === "w-screen" ?
                    <Link target="_blank" rel="noopener noreferrer" className='absolute top-2 text-center w-11/12 left-10 font-roboto-flex cursor-pointer hover:underline' to="/template/tempone">Click here to open desktop view in new tab</Link>
                    : <></>
            }
            <div className={`${view === "w-screen" ? "" : "flex"} no-scrollbar  rounded-lg   items-center justify-center h-full ${show ? "w-4/5" : "w-full"}   pl-5  overflow-y-auto `}>
                <iframe
                    className={`${view} no-scrollbar overflow-y-scroll h-full  rounded-lg `}
                    src="/template/tempone"
                    title="Web Browser" />
                {/* <Tempfirst /> */}
            </div>
        </div>
    )
}

export default Preview