import React from 'react'

import LNavbar from './landingPage/LNavbar'
import { useLocation, } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { template } = useSelector((state) => state.template)

    var location = useLocation()
    console.log(location.pathname)
    // const { userid } = useParams()

    console.log(template)
    return (
        <>
            {
                location.pathname === "/" ||
                    location.pathname === `/about` ||
                    location.pathname === "/contact" ||
                    location.pathname === "/template" ||
                    location.pathname === "/login" ||
                    location.pathname === "/signup" ||
                    location.pathname === "/verify-email" ||
                    location.pathname === "/forgot-password" ||
                    location.pathname === "/update-password/" 
                    ?
                    <>  {
                        <LNavbar />
                    }</> :
                    <>

                    </>

            }
        </>

    )
}


export default Navbar