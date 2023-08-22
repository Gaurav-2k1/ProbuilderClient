import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Navbar = ({ user }) => {
    const [show, setshow] = useState(false)
    const menu = [
        {
            name: "Home",
            link: "/#Home"
        },
        {
            name: "About",
            link: "#About"
        },
        {
            name: "Experience",
            link: "#Experience"
        },
        {
            name: "Skills",
            link: "#Skills"
        },
        {
            name: "Project",
            link: "#Project"
        }
        ,
    ]
    return (
        <header>
            <nav className='flex flex-row w-full h-min  justify-between  md:px-0 px-3 md:justify-around items-center py-3 md:py-5 
            bg-tertiary m-0 fixed top-0 z-40 '>
                <div className='text-white font-semibold text-2xl font-serif '>
                    <Link href="/">{user?.firstName + " " + user?.lastName}</Link>
                </div>
                <ul className='hidden md:flex flex-row md:w-1/3 justify-between gap-2'>
                    {
                        menu.map((data, i) => {
                            return (
                                <li key={i} className='hover:text-slate-500  delay-100 text-white font-semibold text-lg cursor-pointer'>
                                    <Link to={data.link}>{data.name}</Link>
                                </li>
                            )
                        })
                    }

                    {/* <li className='hover:text-slate-500  delay-100 text-white font-semibold text-lg cursor-pointer'><Link href="#About">About</Link></li>
                    <li className='hover:text-slate-500  delay-100 text-white font-semibold text-lg cursor-pointer'><Link href="#Project">Projects</Link></li>
                    <li className='hover:text-slate-500  delay-100 text-white font-semibold text-lg cursor-pointer'><Link href="#Experience">Experience</Link></li> */}
                </ul>
                <div className='inline-block md:hidden cursor-pointer'>
                    {
                        show ? <RxCross1 className="text-white text-2xl md:hidden inline-block delay-75 ease-linear" onClick={() => setshow(false)} />
                            : <GiHamburgerMenu className="text-white text-2xl md:hidden inline-block  delay-75 ease-linear"
                                onClick={() => setshow(true)}
                            />
                    }
                </div>
                <div className='hidden md:inline-block p-3 bg-red-600 rounded-3xl text-white font-semibold cursor-pointer hover:bg-red-800 delay-150 ease-in'
                    onClick={() => {
                        window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

                    }}>
                    Download CV
                </div>
            </nav>
            {
                show ? <div className={`flex flex-col fixed w-min h-max px-5 py-5 gap-4 z-50 top-10 right-0 
                bg-tertiary opacity-95 delay-100 ease-in transition-all rounded-bl-lg`}>
                    {menu.map((data, i) => {
                        return (
                            <li key={i} className='hover:text-slate-500  delay-100
                         text-white font-semibold text-sm cursor-pointer list-none'>
                                <Link href={data.link} onClick={() => {
                                    setshow(false)
                                }}>{data.name}</Link>
                            </li>
                        )
                    })}
                    <div className='text-sm w-max inline-block p-2 bg-red-600 rounded-3xl
                 text-white font-semibold cursor-pointer hover:bg-red-800 delay-150 ease-in'
                        onClick={() => {
                            window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');

                        }}>
                        Download CV
                    </div>
                </div> : <></>
            }

        </header>
    )
}

export default Navbar