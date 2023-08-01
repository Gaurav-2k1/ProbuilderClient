import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Preview = () => {
    const { view } = useSelector((state) => state.page)
    return (
        <div className='h-full no-scrollbar  bg-bground pt-10 
        justify-center flex w-full md:pr-40 relative'>
            {
                view === "w-screen" ?
                    <Link target="_blank" rel="noopener noreferrer" className='absolute top-2 font-roboto-flex cursor-pointer hover:underline' to="/dashboard/tempone">Click here to open desktop view in new tab</Link>
                    : <></>
            }

            <div className={`${view === "w-screen" ? "" : "flex"} no-scrollbar   items-center justify-center h-full w-4/5  pl-5  overflow-y-auto `}>

                <iframe

                    className={`${view} no-scrollbar overflow-y-scroll h-full  rounded-lg `}
                    src="/dashboard/tempone"
                    title="Web Browser" />
                {/* <Tempfirst /> */}
            </div>
        </div>
    )
}

export default Preview