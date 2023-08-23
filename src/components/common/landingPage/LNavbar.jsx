import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from '../../../data/navbar-links'
import ProfileDropdown from '../../core/Auth/ProfileDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../services/operations/authAPI'
import { AiOutlineMenu } from 'react-icons/ai'
const LNavbar = () => {

    const { token } = useSelector((state) => state.auth)
    // const { user } = useSelector((state) => state.profile)
    const [show, setshow] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='flex  flex-row h-16  w-screen  items-center justify-between bg-[#fff] px-5 
        z-50 border-b border-[#5E5E5E] border-opacity-80 border-solid relative'>
            <div className='text-3xl font-MuseoModerno navhead font-bold cursor-pointer 
        '>
                <Link to="/">Probuilder</Link>
            </div>
            <div className='flex justify-around flex-row h-full  items-center bg-[#fff]'>
                <nav className="hidden md:block h-full  items-center">
                    <ul className="flex gap-x-6 h-full  items-center">{NavbarLinks.map((link, index) => (
                        <li key={index} >

                            <Link to={link?.path} className='relative'>
                                <p
                                    className={`font-DMSans  text-lg  ${matchRoute(link?.path)
                                        ? "text-icob font-bold"
                                        : "text-[#5E5E5E] font-normal"
                                        }`}
                                >
                                    {link.title}
                                </p>
                                <div className={`hidden md:block absolute top-[37px] rounded-tl-lg rounded-br-lg left-0 w-full h-2 ${matchRoute(link?.path)
                                    ? "bg-icob"
                                    : ""
                                    } delay-110 ease-in transition-all`} ></div>
                            </Link>


                        </li>
                    ))}
                    </ul>
                </nav>



            </div>
            <div className='md:flex hidden'>
                {token !== null ? <ProfileDropdown /> :
                    <div className='hidden md:flex flex-row gap-3 items-center '>
                        <div className='rounded-md flex flex-row px-4 py-1 items-center bg-white gap-2 cursor-pointer border border-gray-400 border-solid border-opacity-80 '>
                            <Link to="/login" className='text-lg text-black font-DMSans'>Login</Link>
                        </div>
                        <div className='rounded-md flex flex-row px-4 py-1 items-center bg-icob gap-2 cursor-pointer'>
                            <Link to="/signup" className='text-lg  text-white font-DMSans'>Signup</Link>

                        </div>
                    </div>}
                <button className="mr-4 md:hidden hidden" onClick={() => {
                    dispatch(logout(navigate))
                }}>
                    <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>
            </div>

            {
                show ? <div className={`
                flex flex-col fixed bg-white w-full h-full px-5 z-40 top-0 right-0 
                  delay-100 ease-in transition-all rounded-bl-lg items-center justify-evenly py-28`}>
                    {NavbarLinks.map((data, i) => {
                        return (
                            <li key={i} className='hover:text-slate-500  
                            delay-100
                         text-black font-semibold font-roboto-flex cursor-pointer list-none text-2xl'>
                                <Link to={data.path} onClick={() => {
                                    setshow(false)
                                }}>{data.title}</Link>
                            </li>
                        )
                    })}

                    <div className='flex md:hidden flex-col gap-3 items-center '>


                        <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-white gap-2 cursor-pointer
                border border-gray-400 border-solid border-opacity-80 ' onClick={() => {
                                setshow(false)
                            }}>
                            <Link to="/login" className='text-lg text-black font-DMSans' >Login</Link>
                        </div>
                        <div className='rounded-md flex flex-row
                px-4 py-1 items-center bg-icob gap-2 cursor-pointer' onClick={() => {
                                setshow(false)
                            }}>
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