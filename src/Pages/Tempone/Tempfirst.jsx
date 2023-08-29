import React, { useEffect, useState } from 'react'
import About from '../../templates/tempfirst/components/About'
import Achievements from '../../templates/tempfirst/components/Achievements'
import Contact from '../../templates/tempfirst/components/Contact'
import Education from '../../templates/tempfirst/components/Education'
import Experience from '../../templates/tempfirst/components/Experience'
import Hero from '../../templates/tempfirst/components/Hero'
import Navbar from '../../templates/tempfirst/components/Navbar'
import Projects from '../../templates/tempfirst/components/Projects'
import Skills from '../../templates/tempfirst/components/Skills'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getUserDetails } from '../../services/operations/profileAPI'
import { socket } from '../../components/common/Socket'
import "../../templates/tempfirst/style.css"
import { getUser } from '../../services/approved/ApprovedUser'
const Tempfirst = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)
    var location = useLocation()
    // const { token } = useSelector((state) => state.auth)
    const [tuser, setTUser] = useState(user)
    const [authuser, setAuthuser] = useState(true)
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
                dispatch(getUserDetails(token, navigate))
            }
        }
        else if (location.pathname === `/web/${id}`) {
            setAuthuser(false)
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
    // const getuser = async () => {
    //     try {
    //         setLoading(true)
    //         let re = await getUserDetails(token)
    //         console.log(re)
    //         setTUser(re)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log("ERROR MESSAGE - ", error.message)
    //     }

    // }




    // console.log()
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const skillSection = document.getElementById('Skill');
    //         const projectSection = document.getElementById('project');
    //         const contactSection = document.getElementById('contact');
    //         const experienceSection = document.getElementById('experience');
    //         const yOffset = window.pageYOffset;

    //         if (yOffset >= projectSection.offsetTop && yOffset < skillSection.offsetTop) {
    //             window.location.hash = 'project';
    //         } else if (yOffset >= skillSection.offsetTop && yOffset < experienceSection.offsetTop) {
    //             window.location.hash = 'Skill';
    //         }
    //         else if (yOffset >= experienceSection.offsetTop && yOffset < contactSection.offsetTop) {
    //             window.location.hash = 'experience';
    //         }
    //         else if (yOffset >= experienceSection.offsetTop && yOffset < contactSection.offsetTop) {
    //             window.location.hash = 'experience';
    //         }

    //         else {
    //             window.location.hash = '';
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <>

            {
                loading ? <div className=' w-screen h-screen bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div> :
                    <>
                        {
                            authuser ?
                                <>
                                    {
                                        user ? <>
                                            <Navbar user={tuser ? tuser : user} />
                                            <div className='back'>
                                                <Hero user={tuser ? tuser : user} />
                                                <div className='pt-28 px-10 md:px-0 md:pt-0 flex items-center flex-col'>
                                                    <About user={tuser ? tuser : user} />
                                                    <Projects user={tuser ? tuser : user} />
                                                    <Skills user={tuser ? tuser : user} />
                                                    <Experience user={tuser ? tuser : user} />
                                                    <Education user={tuser ? tuser : user} />
                                                    <Achievements user={tuser ? tuser : user} />
                                                </div>
                                            </div>


                                            <Contact user={tuser ? tuser : user} />
                                        </> : <>
                                            <div className=' w-screen h-screen bg-gray-400 flex items-center justify-center'><div className='spinner'></div></div>
                                        </>
                                    }
                                </> : <>
                                    {
                                        tuser ? <>
                                            <Navbar user={tuser ? tuser : user} />
                                            <Hero user={tuser ? tuser : user} />
                                            <div className='back pt-28 px-10 md:px-0 md:pt-0'>
                                                <About user={tuser ? tuser : user} />
                                                <Projects user={tuser ? tuser : user} />
                                                <Skills user={tuser ? tuser : user} />
                                                <Experience user={tuser ? tuser : user} />
                                                <Education user={tuser ? tuser : user} />
                                                <Achievements user={tuser ? tuser : user} />
                                            </div>
                                            <Contact user={tuser ? tuser : user} />
                                        </> : <div className='w-screen bg-gray-400 h-screen flex items-center justify-center text-12xl font-mono'>
                                            No Page Found
                                        </div>
                                    }
                                </>


                        }

                    </>

            }



        </>)
}

export default Tempfirst


