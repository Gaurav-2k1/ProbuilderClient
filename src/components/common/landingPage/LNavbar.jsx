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
        <div className='flex justify-between flex-row h-min w-3/4 items-center bg-[#222222] px-5 py-4
    '>
           
            <nav className="hidden md:block">
                <ul className="flex gap-x-6">{NavbarLinks.map((link, index) => (
                    <li key={index}>
                        {link.title === "Catalog" ? (
                            <>
                                <div
                                    className={`group relative font-mono text-lg flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                                        ? "text-yellow-25"
                                        : "text-richblack-25"
                                        }`}
                                >
                                    <p>{link.title}</p>
                                    <BsChevronDown />
                                    {/* <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 bg-white transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded"></div>
                                        {loading ? (
                                            <p className="text-center">Loading...</p>
                                        ) : subLinks.length ? (
                                            <>
                                                {subLinks
                                                    ?.filter(
                                                        (subLink) => subLink?.courses?.length > 0
                                                    )
                                                    ?.map((subLink, i) => (
                                                        <Link
                                                            to={`/catalog/${subLink.name
                                                                .split(" ")
                                                                .join("-")
                                                                .toLowerCase()}`}
                                                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50 font-mono"
                                                            key={i}
                                                        >
                                                            <p>{subLink.name}</p>
                                                        </Link>
                                                    ))}
                                            </>
                                        ) : (
                                            <p className="text-center">No Courses Found</p>
                                        )}
                                    </div> */}
                                </div>
                            </>
                        ) : (
                            <Link to={link?.path}>
                                <p
                                    className={`font-mono text-lg ${matchRoute(link?.path)
                                        ? "text-yellow-25"
                                        : "text-richblack-25"
                                        }`}
                                >
                                    {link.title}
                                </p>
                            </Link>
                        )}
                    </li>
                ))}
                </ul>
            </nav>

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