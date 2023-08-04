import React from 'react'
import SideForm from './SideForm';
import Preview from './Preview';
import AuthNav from '../common/drawer/AuthNav';

const Dashboard = () => {
    return (
        <div>
            <AuthNav/>
            <div className=' flex flex-row h-screen w-full'>
                <SideForm />
                <Preview />
            </div>
        </div>

    )
}

export default Dashboard;