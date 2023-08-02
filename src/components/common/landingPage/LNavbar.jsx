import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from '../../../data/navbar-links'
const LNavbar = () => {

    // const { token } = useSelector((state) => state.auth)
    // const { user } = useSelector((state) => state.profile)

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='flex  flex-row h-16 py-4 w-screen  items-center justify-between bg-[#fff] px-5 
        z-50 border-b border-[#5E5E5E] border-opacity-80 border-solid'>
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
            <div className='flex flex-row gap-3 items-center '>


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

        </div>

    )
}

export default LNavbar