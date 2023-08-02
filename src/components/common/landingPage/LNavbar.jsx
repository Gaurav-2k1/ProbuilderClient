import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from '../../../data/navbar-links'
const LNavbar = () => {

    // const { token } = useSelector((state) => state.auth)
    // const { user } = useSelector((state) => state.profile)
    const [show, setshow] = useState(false)

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='flex  flex-row h-16 py-4 w-screen  items-center justify-between bg-[#fff] px-5 
        z-50 border-b border-[#5E5E5E] border-opacity-80 border-solid relative'>
            <div className='text-3xl font-MuseoModerno navhead font-bold cursor-pointer 
        '>
                <Link to="/">Probuilder</Link>
            </div>
            <div className='flex justify-around flex-row h-min  items-center bg-[#fff]'>
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6">{NavbarLinks.map((link, index) => (
                        <li key={index}>

                            <Link to={link?.path}>
                                <p
                                    className={`font-DMSans text-lg  ${matchRoute(link?.path)
                                        ? "text-icob font-bold"
                                        : "text-[#5E5E5E] font-normal"
                                        }`}
                                >
                                    {link.title}
                                </p>
                            </Link>

                        </li>
                    ))}
                    </ul>
                </nav>



            </div>
            <div className='hidden md:flex flex-row gap-3 items-center '>


                <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-white gap-2 cursor-pointer
                border border-gray-400 border-solid border-opacity-80 '>
                    <Link to="/login" className='text-lg text-black font-DMSans'>Login</Link>
                </div>
                <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-icob gap-2 cursor-pointer'>
                    <Link to="/signup" className='text-lg  text-white font-DMSans'>Signup</Link>

                </div>
            </div>
            {
                show ? <div className={`
                flex flex-col fixed bg-white w-full h-full px-5 z-40 top-0 right-0 
                bg-tertiary  delay-100 ease-in transition-all rounded-bl-lg items-center justify-evenly py-28`}>
                    {NavbarLinks.map((data, i) => {
                        return (
                            <li key={i} className='hover:text-slate-500  
                            delay-100
                         text-black font-semibold font-roboto-flex cursor-pointer list-none text-2xl'>
                                <Link href={data.link} onClick={() => {
                                    setshow(false)
                                }}>{data.title}</Link>
                            </li>
                        )
                    })}
                    <div className='flex md:hidden flex-col gap-3 items-center '>


                        <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-white gap-2 cursor-pointer
                border border-gray-400 border-solid border-opacity-80 '>
                            <Link to="/login" className='text-lg text-black font-DMSans'>Login</Link>
                        </div>
                        <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-icob gap-2 cursor-pointer'>
                            <Link to="/signup" className='text-lg  text-white font-DMSans'>Signup</Link>

                        </div>
                    </div>

                    {/* <div className='text-sm w-max inline-block px-4 py-2 bg-red-600 rounded-lg
                 text-white font-semibold cursor-pointer hover:bg-red-800 delay-150 ease-in'
                        onClick={() => {
                            window.open("https://drive.google.com/file/d/1xXZyOjCi9xBoAb3i8w8nrAGANpro9ahB/view?usp=sharing", '_blank', 'noopener,noreferrer');

                        }}>
                        Download CV
                    </div> */}
                </div> : <></>
            }
            {
                !show ? <GiHamburgerMenu className='text-icob text-lg block md:hidden cursor-pointer'
                    onClick={() => setshow(true)}
                /> : <RxCross1 className="text-icob text-2xl md:hidden inline-block delay-75 ease-linear z-50 fixed top-10 right-10 cursor-pointer" onClick={() => setshow(false)} />

            }

        </div>

    )
}

export default LNavbar