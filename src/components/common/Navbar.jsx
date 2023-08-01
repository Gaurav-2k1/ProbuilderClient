import React from 'react'

import AuthNav from './drawer/AuthNav'
import LNavbar from './landingPage/LNavbar'
import { Link, useLocation, } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { token } = useSelector((state) => state.auth)
    var location = useLocation()
    console.log(location.pathname)
    // const { userid } = useParams()
    const id = location.pathname.split("/").at(-1)

    console.log(id)
    return (
        <>
            {
                location.pathname === "/dashboard/tempone" || location.pathname === `/web/${id}` ? <></> :
                    <div className='flex  flex-row h-16 py-4 w-screen  items-center bg-[#222222] px-5 
        z-50'>
                        <div className='text-3xl font-MuseoModerno navhead font-bold cursor-pointer
            w-1/4'>
                            <Link to="/">Probuilder</Link>
                        </div>

                        {
                            token ? <AuthNav /> :
                                <LNavbar />
                        }

                    </div>

            }
        </>

    )
}


export default Navbar