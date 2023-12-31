import React, { useState } from 'react'
import { FaCloud } from 'react-icons/fa'
// import { GrUndo, GrRedo } from 'react-icons/gr'
import { PiCloudArrowUpThin, PiMonitorLight } from 'react-icons/pi'
import { PiRocketLaunch } from 'react-icons/pi'
import { IoDownloadOutline } from 'react-icons/io5'
import { CiMobile1 } from 'react-icons/ci'
import { HiOutlineDeviceTablet } from 'react-icons/hi'
// import { IoIosArrowDown } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setView } from '../../../slices/pageSlice'
import ProfileDropdown from '../../core/Auth/ProfileDropdown'
import { logout } from '../../../services/operations/authAPI'
import { AiOutlineMenu } from 'react-icons/ai'
import { addTempuser } from '../../../services/approved/Template'
// import TemplateDrawer from '../../dashboard/TemplateDrawer'

const AuthNav = () => {
    // const [size, setsize] = useState(100)
    // const [magniactive, setmactive] = useState(false)
    const [preActive, setPreActive] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { title } = useSelector((state) => state.template)
    const publish = {
        user,
        template:title
    }
    console.log(title)
    const Publish = () => {
        try {
           addTempuser(token, publish)
        } catch (err) {
            console.log(err)
        }
    }
    // const { data: session } = useSession();

    return (
        <div className='flex  flex-row h-16 py-4 w-screen  items-center justify-between bg-[#222222] px-5 
        z-50'>
            <div className='text-[23px] font-MuseoModerno authnavhead font-bold cursor-pointer 
            '>
                <Link to="/">Probuilder</Link>
            </div>
            <div className='flex flex-row w-full  md:ml-20 h-min justify-between items-center'>
                <div className='hidden md:flex flex-row gap-6 '>
                    <div className='text-[15px] font-MuseoModerno '>Home</div>
                    <Link className='text-[15px] font-MuseoModerno ' to="/dashboard/builder">Builder</Link>
                    {/* <div >Builder</div> */}
                    <div className='text-[15px] font-MuseoModerno  flex flex-row items-center gap-2'>
                        <FaCloud size={20}
                            className='text-blue-600' /> Saved</div>
                </div>
                <div className='hidden md:flex flex-row gap-3 '>
                    <div className={`${preActive === 1 ? "bg-icob" : ""} rounded-md p-1  cursor-pointer`}>
                        <PiMonitorLight className='text-white text-2xl' onClick={() => {
                            setPreActive(1)
                            dispatch(setView("w-screen"))
                        }
                        }
                        />
                    </div>
                    <div className={`${preActive === 2 ? "bg-icob" : ""} rounded-md p-1 cursor-pointer`}>
                        <CiMobile1 className='text-white text-2xl' onClick={() => {
                            setPreActive(2)
                            dispatch(setView("w-[375px]"))
                        }} />
                    </div>
                    <div className={`${preActive === 3 ? "bg-icob" : ""} rounded-md p-1 cursor-pointer`}>
                        <HiOutlineDeviceTablet className='text-white text-2xl' onClick={() => {
                            setPreActive(3)
                            dispatch(setView("w-[767px]"))
                        }} />
                    </div>

                </div>
                <div className='hidden md:flex flex-row gap-3 items-center mr-10'>
                    {/* <GrUndo size={20} className='text-white' />
                    <GrRedo size={20} className='text-white' />
                    <div className='flex flex-row bg-[#101010] rounded-md p-1 items-center gap-2 cursor-pointer relative'
                        onClick={() => setmactive(!magniactive)}>
                        <PiMagnifyingGlass className='text-lg text-white' />
                        <p className='text-lg text-white font-MuseoModerno'>{size}%</p>
                        <IoIosArrowDown className='text-lg text-white' />
                        {
                            magniactive && <input type='range' min={0} max={100} value={size} onChange={(e) => {
                                setsize(e.target.value)
                            }} />
                        }
                    </div> */}
                    <div className='rounded-[5px] flex flex-row
                    px-3 py-1 items-center bg-icob gap-2 cursor-pointer'>
                        <PiCloudArrowUpThin size={15} className='text-white ' />
                        <p className='text-[15px] font-MuseoModerno'>Save</p>
                    </div>
                    <div className='rounded-[5px] flex flex-row
                    px-3 py-1 items-center bg-icob gap-2 cursor-pointer' onClick={Publish}>
                        <PiRocketLaunch size={15} className='text-white' />
                        <p className='text-[15px] font-MuseoModerno'>Publish</p>
                    </div>
                    <div className='bg-primary border-[#693C3C] border border-solid cursor-pointer p-2 rounded-[5px] relative '>
                        <IoDownloadOutline size={15} className='text-white' />

                    </div>
                    <>{token !== null && <ProfileDropdown />}
                        <button className="mr-4 md:hidden" onClick={() => {
                            dispatch(logout(navigate))
                        }}>
                            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                        </button>
                    </>


                </div>
            </div>
            <div className='md:hidden block'>{token !== null && <ProfileDropdown />}
                <button className="mr-4 md:hidden hidden" onClick={() => {
                    dispatch(logout(navigate))
                }}>
                    <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>
            </div>

        </div>

    )
}

export default AuthNav