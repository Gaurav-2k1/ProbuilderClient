import React, { useState } from 'react'
import { FaCloud } from 'react-icons/fa'
import { GrUndo, GrRedo } from 'react-icons/gr'
import { PiCloudArrowUpThin, PiMagnifyingGlass, PiMonitorLight } from 'react-icons/pi'
import { BsRocketTakeoffFill } from 'react-icons/bs'
import { IoDownloadOutline } from 'react-icons/io5'
import { CiMobile1 } from 'react-icons/ci'
import { HiOutlineDeviceTablet } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setView } from '../../../slices/pageSlice'
import ProfileDropdown from '../../core/Auth/ProfileDropdown'
import { logout } from '../../../services/operations/authAPI'
import { AiOutlineMenu } from 'react-icons/ai'

const AuthNav = () => {
    const [size, setsize] = useState(100)
    const [magniactive, setmactive] = useState(false)
    const [preActive, setPreActive] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)

    // const { data: session } = useSession();



    return (
        <div className='flex  flex-row h-16 py-4 w-screen  items-center justify-between bg-[#222222] px-5 
        z-50'>
            <div className='text-3xl font-MuseoModerno navhead font-bold cursor-pointer 
            '>
                <Link to="/">Probuilder</Link>
            </div>
            <div className='flex flex-row w-3/4 h-min justify-between items-center'>
                <div className='flex flex-row gap-6'>
                    <div className='text-lg font-mono '>Home</div>
                    <Link className='text-lg font-mono ' to="/dashboard/builder">Builder</Link>
                    {/* <div >Builder</div> */}
                    <div className='text-lg font-mono  flex flex-row items-center gap-2'>
                        <FaCloud size={20}
                            className='text-blue-600' /> Saved</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className={`${preActive === 1 ? "bg-icob" : ""} rounded-md p-1  cursor-pointer`}>
                        <PiMonitorLight className='text-white text-3xl' onClick={() => {
                            setPreActive(1)
                            dispatch(setView("w-screen"))
                        }
                        }
                        />
                    </div>
                    <div className={`${preActive === 2 ? "bg-icob" : ""} rounded-md p-1 cursor-pointer`}>
                        <CiMobile1 className='text-white text-3xl' onClick={() => {
                            setPreActive(2)
                            dispatch(setView("w-[400px]"))
                        }} />
                    </div>
                    <div className={`${preActive === 3 ? "bg-icob" : ""} rounded-md p-1 cursor-pointer`}>
                        <HiOutlineDeviceTablet className='text-white text-3xl' onClick={() => {
                            setPreActive(3)
                            dispatch(setView("w-[767px]"))
                        }} />
                    </div>

                </div>
                <div className='flex flex-row gap-3 items-center mr-10'>
                    <GrUndo size={20} className='text-white' />
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
                    </div>
                    <div className='rounded-md flex flex-row
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer'>
                        <PiCloudArrowUpThin size={20} className='text-white ' />
                        <p className='text-lg font-MuseoModerno'>Save</p>
                    </div>
                    <div className='rounded-md flex flex-row
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer'>
                        <BsRocketTakeoffFill size={20} className='text-white' />
                        <p className='text-lg font-MuseoModerno'>Publish</p>
                    </div>
                    <div className='bg-primary border-[#693C3C] border border-solid cursor-pointer p-2 rounded-md'>
                        <IoDownloadOutline size={20} className='text-white' />
                    </div>
                    <>{token !== null && <ProfileDropdown />}
                        <button className="mr-4 md:hidden" onClick={() => {
                            dispatch(logout(navigate))
                        }}>
                            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                        </button>
                    </>
                    {/* {


                    <img src={dp}
                        className='rounded-full' width={40} height={40} alt='dp' />

                } */}

                </div>
            </div>

        </div>

    )
}

export default AuthNav