import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ route ,user}) => {
    console.log(route)
    const menu = [
        {
            name: "About",
            path: `${route}#about`,
            id: "about"
        },


        {
            name: "Project",
            path: `${route}#project`,
            id: "project"

        },

        {
            name: "Experience",
            path: `${route}#experience`,
            id: "experience"

        },

        {
            name: "Contact",
            path: `${route}#contact`,
            id: "contact"

        },

    ]
    const location = useLocation()
    // const [activeSection, setActiveSection] = useState(null);

    const matchRoute = (route) => {

        // if (matchPath({ path: route.path }, location.pathname + location.hash)) {
        //     setActiveSection(route.id)
        // }
        return (matchPath({ path: route.path }, location.pathname + location.hash))
    }

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const sections = document.querySelectorAll('section');
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop + 100; // Adjust this offset as needed
    //             const sectionBottom = sectionTop + section.clientHeight;
    //             console.log(scrollPosition, sectionTop, sectionBottom)
    //             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    //                 console.log(section.id)

    //                 setActiveSection(section.id);
    //             }
    //         });

    //     };


    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <div className='flex flex-col w-[60px] h-screen items-center bg-black fixed z-50 '>
            <div className=' cursor-pointer my-4 w-[50px] h-[50px] grid place-items-center bg-[#111] rounded-lg'>
                <HashLink
                    to="#top"
                    scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: "start" })}>
                    <p className='font-black text-[32px] font-DMSans'>{user?.firstName.slice(0,1)}
                        <span className='text-3xl text-[#98BBFF]'>.</span></p>
                </HashLink>

            </div>
            <div className='flex flex-col h-screen w-full items-center'>
                {
                    menu.map((data, i) => {
                        return (
                            <div className=' hover:bg-[#111] h-full w-full justify-center items-center flex cursor-pointer bg-black relative '
                                key={i}>
                                <HashLink
                                    to={data.path}
                                    scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: "start" })}
                                >
                                    <p className='-rotate-90 font-DMSans text-[20px] font-normal' >{data.name}</p>
                                </HashLink>

                                <div className={`w-[1px] h-full   ${matchRoute(data)? "bg-white" : ""} absolute right-0`}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Navbar