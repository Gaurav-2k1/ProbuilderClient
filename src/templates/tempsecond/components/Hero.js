import { FiFacebook } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import hero from "../../tempfirst/assets/heroimage.png"
const Hero = ({ user }) => {

    return (
        <div id='Home' className="h-full md:pt-40 w-full bg-primary py-5 flex md:flex-row flex-col-reverse  items-center justify-items-center">
            <div className="flex flex-col w-full md:w-2/3 items-center">
                <div className=" h-full md:h-3/5 flex flex-col w-4/5 gap-2 ">
                    <span className="md:text-4xl text-2xl text-white">Hello,I`m</span>
                    <span className="md:text-7xl text-2xl font-semibold text-white">{user?.firstName + " " + user?.lastName}</span>
                    <span className="md:text-3xl text-2xl text-white">{user?.profile?.designation}</span>
                    <br />
                    <span className="text-lg text-white">
                        {user?.profile.description}
                    </span>
                    <br />
                    <br />
                    <span className='text-lg text-white'>FIND ME ON</span>
                    <div className='flex flex-row gap-2'>
                        <div className='p-5 bg-slate-900 cursor-pointer rounded-lg hover:bg-slate-950'><FiFacebook fontSize={30} color='white'
                            onClick={() => {
                                window.open("https://www.facebook.com/profile.php?id=100004795360185", '_blank', 'noopener,noreferrer');

                            }}
                        /></div>
                        <div className='p-5 bg-slate-900 cursor-pointer rounded-lg  hover:bg-slate-950'>
                            <FaLinkedinIn fontSize={30} color='white'
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/kundan-kumar-65b59010a/", '_blank', 'noopener,noreferrer');

                                }}
                            /></div>
                        <div className='p-5 bg-slate-900 cursor-pointer rounded-lg  hover:bg-slate-950'>
                            <SiGmail fontSize={30} color='white'
                                onClick={() => {
                                    alert("kundu3811@gmail.com")

                                }} /></div>
                    </div>

                </div>
            </div>
            <div className="w-full md:w-1/2 md:h-full flex flex-col items-center mt-24">
                <div className='w-1/2 md:w-2/3 h-full rounded-full  md:flex md:flex-col md:items-center '>
                    <img src={hero} className='overflow-hidden  w-full  md:w-96 md:h-96 rounded-full shadow-sm shadow-white ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero