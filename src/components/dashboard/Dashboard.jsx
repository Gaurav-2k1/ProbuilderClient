import React, { useState } from 'react'
import SideForm from './SideForm';
import Preview from './Preview';
import AuthNav from '../common/drawer/AuthNav';
import { IoIosArrowBack } from "react-icons/io"
import TemplateDrawer from './TemplateDrawer';

const Dashboard = () => {
    const [show, setShow] = useState(true)
    const [drawer, setDrawer] = useState(false)
    return (
        <div>
            <AuthNav />
            <div className=' flex flex-row h-screen w-full relative'>
                <SideForm show={show} setShow={setShow} />
                <Preview show={show} setShow={setShow} />
                <div className='absolute top-0 right-0 min-w-6 max-w-full   h-[90vh] flex flex-row '>
                    <div className='w-4 h-full bg-primary border border-l border-bground flex items-center hover:brightness-105 cursor-pointer'
                        onMouseEnter={() => setDrawer(!drawer)}
                    >
                        <IoIosArrowBack className='text-base text-white ' />

                    </div>
                    <div className='w-full bg-bground' >

                        {
                            drawer && <TemplateDrawer onMouseLeave={() => setDrawer(false)} />
                        }
                    </div>


                </div>


            </div>
        </div>

    )
}

export default Dashboard;