import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'

const Navbar = ({ user }) => {
    const location = useLocation()
    let id = location.pathname.split("/").at(-1)

    const menu = [
        {
            name: "Home",
            path: `/template/tempone`
        },

        {
            name: "Skills",
            path: "/path"

        },
        {
            name: "Experience",
            path: "/path"

        },
        {
            name: "Education",
            path: "/path"

        },
        {
            name: "Achiements",
            path: "/path"

        },

        {
            name: "Contact",
            path: "/path"

        },

    ]

    const [show, setshow] = useState(false)
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='flex flex-row items-center 
         justify-between px-10 bg-[#030d1c] h-20 text-white 
         fixed top-0 z-50 w-full '>
            <Link className='md:ml-5 no-underline text-2xl font-mono text-white' href="/">{(user?.firstName && user?.lastName) ? (user?.firstName + " " + user?.lastName) : "Alexander Hales"}</Link>
            <div className=" flex-row md:flex hidden md:gap-5 gap-2">
                {
                    menu.map((m, i) => {
                        return (
                            <Link key={i} to="/" className={`font-normal font-mono no-underline ${matchRoute(m?.path)
                                ? "text-white"
                                : "text-white opacity-30"
                                }`}>
                                {m.name}
                            </Link>
                        )
                    })
                }
                <div className='font-normal font-mono no-underline text-white cursor-pointer'
                    onClick={() => {
                        window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

                    }}>
                    Download CV
                </div>

            </div>
            {
                show ? <div className={`
                flex flex-col fixed back w-full h-full px-5 gap-4 z-40 top-0 right-0
                                bg-tertiary delay-100 ease-in transition-all rounded-bl-lg items-center justify-around py-28`}>
                    {menu.map((data, i) => {
                        return (
                            <li key={i} className='hover:text-slate-500  delay-100
                         text-white font-semibold font-roboto-flex cursor-pointer list-none text-2xl'>
                                <Link href={data.link} onClick={() => {
                                    setshow(false)
                                }}>{data.name}</Link>
                            </li>
                        )
                    })}
                    <div className='text-sm w-max inline-block px-4 py-2 bg-red-600 rounded-lg
                 text-white font-semibold cursor-pointer hover:bg-red-800 delay-150 ease-in'
                        onClick={() => {
                            window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

                        }}>
                        Download CV
                    </div>
                </div> : <></>
            }
            {
                !show ? <GiHamburgerMenu className='text-white text-lg block md:hidden cursor-pointer'
                    onClick={() => setshow(true)}
                /> : <RxCross1 className="text-white text-2xl md:hidden inline-block delay-75 ease-linear z-50 fixed top-10 right-10 cursor-pointer" onClick={() => setshow(false)} />

            }


        </div>
    )
}

export default Navbar