import React from 'react'

const Navbar = () => {
    const menu = [
        {
            name: "About",
            path: `/template/tempone/`
        },


        {
            name: "Project",
            path: `/template/tempone/#project`

        },

        {
            name: "Experience",
            path: `/template/tempone/#experience`

        },

        {
            name: "Contact",
            path: `/template/tempone/#contact`

        },

    ]
    return (
        <div className='flex flex-col w-[60px] h-screen items-center bg-black fixed z-50 '>
            <div className=' cursor-pointer my-4 w-[50px] h-[50px] grid place-items-center bg-[#111] rounded-lg'>
                <p className='font-black text-[32px] font-DMSans'>G
                <span className='text-3xl text-[#98BBFF]'>.</span></p>
            </div>
            <div className='flex flex-col h-screen w-full items-center'>
                {
                    menu.map((data, i) => {
                        return (
                            <div className=' hover:bg-[#111] h-full w-full justify-center items-center flex cursor-pointer bg-black '>
                                <p className='-rotate-90 font-DMSans text-[20px] font-normal ' key={i}>{data.name}</p>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Navbar