import React from 'react'

import AuthNav from './drawer/AuthNav'
import LNavbar from './landingPage/LNavbar'
import { useLocation, } from 'react-router-dom'
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
                location.pathname === "/template/tempone" || location.pathname === `/web/${id}` || location.pathname === "/dashboard/builder" ? <></> :
                    <>
                        {
                            <LNavbar />
                        }
                    </>

            }
        </>

    )
}


export default Navbar