import React, { useEffect, useState } from 'react'
import SideForm from './SideForm';
import Preview from './Preview';
import AuthNav from '../common/drawer/AuthNav';
import { IoIosArrowBack } from "react-icons/io"
import TemplateDrawer from './TemplateDrawer';
import { getPublishedData } from '../../services/approved/ApprovedUser';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplateRoute } from '../../services/approved/Template';
import { setTemplate, setTemplatetitle } from '../../slices/templateSlice';

const Dashboard = () => {
    const [show, setShow] = useState(true)
    const [drawer, setDrawer] = useState(false)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const getData = async () => {

        try {

            let data = await getPublishedData(token)
            let template = {
                template: data.data.template
            }
            let temp = await getTemplateRoute(template)
            dispatch(setTemplate(temp.data.link))
            dispatch(setTemplatetitle(temp.data.title))

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        token && getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    return (
        <div>
            <AuthNav />
            <div className=' flex flex-col h-full md:flex-row md:h-screen w-full relative'>
                <SideForm show={show} setShow={setShow} />
                <Preview show={show} setShow={setShow} />
                <div className='absolute top-0 right-0 min-w-6 max-w-full h-[100vh] flex flex-row '>
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