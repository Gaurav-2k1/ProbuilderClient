import React, { useEffect, useState } from 'react'
import Navbar from '../../templates/tempfour/components/Navbar'
import Hero from '../../templates/tempfour/components/Hero'
import About from '../../templates/tempfour/components/About'
import ContactBar from '../../templates/tempfour/components/ContactBar'
import Project from '../../templates/tempfour/components/Project'
import Experience from '../../templates/tempfour/components/Experience'
import Contact from '../../templates/tempfour/components/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getUser } from '../../services/approved/ApprovedUser'
import { getUserDetails } from '../../services/operations/profileAPI'
import { socket } from '../../components/common/Socket'

const TempFour = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)
    var location = useLocation()
    // const { token } = useSelector((state) => state.auth)
    const [tuser, setTUser] = useState(user)
    const [authuser, setAuthuser] = useState(true)
    const [locationp,setlocation] =useState(location.pathname)
    const entry = async (id) => {
        try {
            setLoading(true)
            const data = await getUser(id)

            // console.log(data.data)
            if (data.data?.approved === true) {

                setTUser(data.data)
                document.title = data.data?.firstName + " " + data.data?.lastName
            }
            else {
                setTUser(null)
            }
            setInterval(() => {
                setLoading(false)

            }, [1000])
        } catch (err) {
            console.log(err)
        }

        // console.log(data.data)
    }
    useEffect(() => {
        let id = location.pathname.split("/").at(-1)
        if (location.pathname === "/template/tempone/") {
            if (localStorage.getItem("token")) {
                const token = JSON.parse(localStorage.getItem("token"))
                setlocation(location.pathname)
                dispatch(getUserDetails(token, navigate))
            }
        }
        else if (location.pathname === `/web/${id}`) {
            setAuthuser(false)
            setlocation(location.pathname)

            entry(id)
        }

        socket.on("ProfileUpdate", (updatedUserDetails) => {
            setTUser(updatedUserDetails)
        })

        // entry("64c230300c23abef385031cb")
        // socket.on("connect", () => {
        //     console.log("connected to server")

        // })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {
                loading ? <div className=' w-screen h-screen bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div> :
                    <>
                        {
                            authuser ?
                                <>
                                    {
                                        user ? <>
                                            <div className=''>
                                                <Navbar user={tuser ? tuser : user} route={locationp}/>
                                                <div className='  overflow-y-scroll relative h-full overflow-x-hidden bg-black w-full'>
                                                    <ContactBar user={tuser ? tuser : user} />
                                                    <div className='flex flex-col h-full w-full pl-[60px] scroll-smooth'>
                                                        <Hero user={tuser ? tuser : user} />
                                                        <About user={tuser ? tuser : user} />
                                                        <Project user={tuser ? tuser : user} />
                                                        <Experience user={tuser ? tuser : user} />
                                                        <Contact user={tuser ? tuser : user} />
                                                    </div>

                                                </div>
                                            </div>
                                        </> : <>
                                            <div className=' w-screen h-screen bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div>
                                        </>
                                    }
                                </> : <>
                                    {
                                        tuser ? <>
                                            <div className=''>
                                                <Navbar user={tuser ? tuser : user} route={locationp} />
                                                <div className='  overflow-y-scroll relative h-full overflow-x-hidden bg-black w-full'>
                                                    <ContactBar user={tuser ? tuser : user} />
                                                    <div className='flex flex-col h-full w-full pl-[60px] scroll-smooth'>
                                                        <Hero user={tuser ? tuser : user} />
                                                        <About user={tuser ? tuser : user} />
                                                        <Project user={tuser ? tuser : user} />
                                                        <Experience user={tuser ? tuser : user} />
                                                        <Contact user={tuser ? tuser : user} />
                                                    </div>

                                                </div>
                                            </div>
                                        </> : <div className='w-screen bg-gray-400 h-screen flex items-center justify-center text-12xl font-mono'>
                                            No Page Found
                                        </div>
                                    }
                                </>


                        }

                    </>

            }



        </div>
    )
}

export default TempFour