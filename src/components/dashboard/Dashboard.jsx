import React, { useState } from 'react'
import SideForm from './SideForm';
import Preview from './Preview';
import AuthNav from '../common/drawer/AuthNav';

const Dashboard = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <AuthNav />
            <div className=' flex flex-row h-screen w-full'>
                <SideForm show={show} setShow={setShow} />
                <Preview show={show} setShow={setShow} />
            </div>
        </div>

    )
}

export default Dashboard;