import React from 'react'
import { useSelector } from 'react-redux'

const Preview = () => {
    const { view } = useSelector((state) => state.page)
    return (
        <div className='h-full no-scrollbar  bg-bground pt-10 
        justify-center flex w-full md:pr-40'>
            <div className={`${view === "w-screen" ? "" : "flex"} no-scrollbar   items-center justify-center h-full w-4/5  pl-5  overflow-y-auto`}>
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