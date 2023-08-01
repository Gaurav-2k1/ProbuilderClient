import React from 'react'
import SideForm from './SideForm';
import Preview from './Preview';

const Dashboard = () => {
    return (
        <div className=' flex flex-row h-screen w-full'>
            <SideForm />
            <Preview />
        </div>
    )
}

export default Dashboard;