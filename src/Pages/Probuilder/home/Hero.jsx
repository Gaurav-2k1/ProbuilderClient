import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import hero from "../../../assets/Images/heroimg.png"
import herosec from "../../../assets/Images/herosec.png"
import TemplateSlider from '../../../components/common/ReviewSlider'
import TemplateCard from '../../../components/template/TemplateCard'
import temp1 from "../../../assets/temp/temp1.png"
import temp2 from "../../../assets/temp/temp2.png"
import temp3 from "../../../assets/temp/temp3.png"
import temp4 from "../../../assets/temp/temp4.png"
import temp5 from "../../../assets/temp/temp5.png"
import de1 from "../../../assets/temp/de1.png"
import de2 from "../../../assets/temp/de2.png"
import de3 from "../../../assets/temp/de3.png"
import last from "../../../assets/temp/last.png"
import SeeMore from '../../../components/common/landingPage/SeeMore'
import Opdata from '../../../components/common/landingPage/Opdata'
import { getTemplate } from '../../../services/approved/Template'
import { useNavigate } from 'react-router-dom'
const tags = [
    {
        title: "scienist"
    },
    {
        title: "engineer"
    }
    , {
        title: "software developer"
    }, {
        title: "data analyst"
    }, {
        title: "student"
    }
]

const templates = [
    {
        url: hero
    }, {
        url: temp1
    }, {
        url: temp2
    }, {
        url: temp3
    }, {
        url: temp4
    }, {
        url: temp5
    }
]

const Hero = () => {
    const [template, setTemplate] = useState([])
    const navigate = useNavigate()
    const getTemplateData = async () => {
        try {
            let temp = await getTemplate()
            setTemplate(temp.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getTemplateData()
    }, [])
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='w-full h-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[60vh] md:h-full relative rounded-lg'>
                <div className='w-full h-full bg-[#000000] absolute top-0 left-0 z-8 rounded-lg'>
                    <div className='w-full h-full bg-[#00000099] relative top-0 left-0 z-8 rounded-lg'>
                        <div className='blur-xl opacity-75  md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#bcff2430] via-[#57FF3B] to-[#2BF719] absolute md:bottom-20 md:left-44 z-9' />
                        <div className='md:blur-xl blur-3xl opacity-75 w-52 h-52  top-0 left-0 md:w-32 md:h-32 rounded-full bg-gradient-to-l from-[#8400FF] via-[#A9FB22] to-[#E2EAFF] absolute md:top-10 md:left-72 z-9' />
                        <div className='blur-xl md:w-20 opacity-75 md:h-20 rounded-full bg-gradient-to-t from-[#FFF5F5] via-[#DA755F] to-[#D6E1FF] absolute md:top-14 md:right-80 z-9' />
                        <div className=' md:blur-xl opacity-75 blur-3xl w-44 h-44  bottom-0 right-0 md:w-40 md:h-40 rounded-full bg-gradient-to-t from-[#8400FF] via-[#03007E] to-[#0039CC] absolute md:bottom-10 md:right-20 z-9' />
                    </div>
                </div>
                <div className='w-full h-full rounded-lg  gap-3 flex flex-col items-center absolute top-0 left-0 z-10 pt-14'>
                    <p className='bg-gradient-to-r from-[#FFFFFC] to-[#9EA5FF] text-transparent bg-clip-text text-[35px] md:text-[40px] font-DMSans font-bold text-center'>
                        Build Your Professional Portfolio in Minutes
                    </p>
                    <p className='text-lg  w-4/5 md:w-2/5 text-center font-DMSans mt-5  text-[#838894]'>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                    <div className='w-4/5 md:w-2/5 pt-5 relative mt-5'>
                        <BsSearch className='text-icob font-bold text-base absolute left-4 bottom-5' />
                        <input className='bg-white text-black font-DMSans rounded-lg w-full py-4 px-2 pl-11 placeholder:font-DMSans placeholder:text-base placeholder:text-[#333]' placeholder='Search templates by profession or style.' />
                    </div>
                    <div className=' w-full px-2 overflow-x-auto no-scrollbar py-2 md:w-min flex flex-row gap-3 '>
                        {
                            tags.map((data, i) => {
                                return (
                                    <p key={i} className='min-w-max h-max px-2 py-2
                                    text-[14px]
                                     bg-[#420b0b] rounded-lg font-DMSans cursor-pointer hover:scale-105 delay-108 ease-in'>{data.title}</p>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-10 w-full items-center'>
                <div className='flex flex-col w-full md:w-1/2  md:pl-28'>
                    <p className='font-extrabold font-DMSans text-black text-[42px] w-full md:w-[90%] leading-[44px]'>Experience the immense potential of our

                        <span className='bg-gradient-to-t from-[#7E7584] via-[#AF2DFF] to-[#AF2DFF ] text-transparent bg-clip-text text-[40px] font-bold pl-3'>
                            powerful tool </span></p>

                    <div className='text-black text-lg font-DMSans font-normal mt-6 md:w-3/4 leading-6'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect of your portfolio. From stunning visuals to seamless navigation, our tool ensures your unique personality and professional achievements shine through with every click.</div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center '>
                    <img src={hero} alt='' className='w-full h-full mt-5 md:w-[623px] md:h-[350px] object-contain' />
                </div>
            </div>
            <div className='flex flex-col mt-20 w-full items-center md:justify-center'>
                <div className='flex flex-col w-full items-center'>
                    <p className='font-bold font-DMSans text-center text-black text-[30px] md:text-[40px] w-full'>Portfolios that

                        <span className='bg-gradient-to-r from-[#7B1CF2] via-[#7B1CF2]  to-[#FF0202] text-transparent text-[30px] 
                        bg-clip-text md:text-[40px] font-bold pl-3'>
                            recuiters want </span></p>

                    <div className='text-black text-base text-center font-DMSans font-medium mt-2 w-full md:w-1/2'>
                        Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect</div>
                </div>
                <TemplateSlider template={template} />
                {/* <div className='w-1/2'>
                    <img src={hero} alt='' className='w-[623px] h-[350px] object-contain' />
                </div>/ */}
            </div>
            <div className='w-full h-full py-10'>
                <div className='w-full  min-h-[70vh] bg-[#252525] md:flex-row flex-col flex  items-center rounded-lg py-4'>
                    <div className='flex flex-col w-full md:w-1/2 ml-10 md:ml-44 gap-5'>
                        <p className=' font-bold font-DMSans text-white text-[40px] w-full md:w-[80%] leading-[44px]'>Impress Recruiters with Your Professional Excellence
                        </p>

                        <div className='text-white text-[16px] font-DMSans font-medium mt-2 w-full md:w-3/4'>Elevate Your Profile: Leave Recruiters Impressed with Your Standout Portfolio Website</div>
                        <div className='w-max px-6 hover:brightness-90 delay-110 ease-in transition-all py-3 text-white bg-icob mt-5 text-base font-DMSans rounded-3xl cursor-pointer'
                            onClick={() => {
                                navigate("/dashboard/builder")
                            }}>Get Started</div>
                    </div>

                    <div className='w-4/5 md:w-1/2 flex justify-start'>
                        <img src={herosec} alt='' className='w-[623px] h-[350px] object-contain card relative' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-10 md:px-10'>
                <div className='flex items-center flex-col'>
                    <div className="text-4xl font-bold font-DMSans text-black md:pl-10 text-center">
                        Select template that
                        <span className='bg-gradient-to-r from-[#7B1CF2] via-[#7B1CF2]  to-[#FF0202] text-transparent text-[40px] 
                        bg-clip-text md:text-[40px] font-bold pl-3 '>
                            suits </span> you most
                    </div>
                    <div className='text-black text-base font-DMSans font-medium mt-3 w-full md:w-1/2 md:pl-10 text-center'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect</div>
                </div>

                <div className='flex flex-wrap w-full h-full justify-between gap-6 py-5 md:px-10 items-center mt-4'>
                    {
                        templates.map((data, i) => {
                            return (
                                <TemplateCard key={i} url={data.url} n={i + 1} />

                            )
                        })
                    }

                </div>
                <div className='flex flex-wrap w-full h-full justify-between gap-6 py-5 md:px-10 items-center'>
                    {
                        template.map((data, i) => {
                            return (
                                <TemplateCard key={i} url={data.preview} n={i + 1} />

                            )
                        })
                    }

                </div>
            </div>
            <div className='w-full h-full min-h-[50vh] py-10 '>
                <div className='w-full h-full bg-white md:flex-col flex-col flex  items-center rounded-lg py-4  px-4'>
                    <div className="text-4xl text-center font-bold font-DMSans text-black">
                        Things you need is what we
                        <span className='bg-gradient-to-r from-[#7B1CF2] via-[#7B1CF2]  to-[#FF0202] text-transparent text-[30px] 
                        bg-clip-text md:text-[40px] font-bold pl-3'>
                            provide </span>
                    </div>
                    <div className='text-bground text-center text-base font-DMSans font-medium mt-4 w-full md:w-1/3'>Unleash your creativity like never before as our intuitive interface empowers you to effortlessly customize every aspect</div>
                    <div className='flex flex-col md:flex-row w-full h-full mt-10'>
                        <div className='flex flex-col w-full md:w-1/2 md:px-10 py-5 md:h-[50vh] no-scrollbar overflow-y-scroll gap-4
                        md:pl-24'>
                            <SeeMore title="Data-Driven Future Prediction" detail="We go beyond just offering portfolio templates. Our innovative platform incorporates cutting-edge data analysis and predictive insights. Leveraging user behavior and social media trends, we equip our users with a strategic advantage, empowering them to make informed decisions about their online presence and stay ahead of the competition. This data-driven approach sets us apart as a trailblazer in the industry." />
                            <SeeMore title="Seamless Mobile Responsivenes" detail="We go beyond just offering portfolio templates. Our innovative platform incorporates cutting-edge data analysis and predictive insights. Leveraging user behavior and social media trends, we equip our users with a strategic advantage, empowering them to make informed decisions about their online presence and stay ahead of the competition. This data-driven approach sets us apart as a trailblazer in the industry." />
                            <SeeMore title="Dedicated Customer Support and Community" detail="We go beyond just offering portfolio templates. Our innovative platform incorporates cutting-edge data analysis and predictive insights. Leveraging user behavior and social media trends, we equip our users with a strategic advantage, empowering them to make informed decisions about their online presence and stay ahead of the competition. This data-driven approach sets us apart as a trailblazer in the industry." />
                        </div>

                        <div className='flex flex-row gap-2 md:gap-0 w-full md:w-2/5 max-h-3/4'>
                            <div className='flex flex-col w-1/2 md:w-full gap-3'>
                                <img src={de1} alt='' className='w-full h-1/2 md:object-contain object-cover' />
                                <img src={de2} alt='' className='w-full h-1/2 md:object-contain object-cover' />

                            </div>
                            <img src={de3} alt='' className='w-1/2 h-full object-cover md:mx-2 rounded-lg' />

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-[#F5F8FF] p-5 md:p-10'>
                <div className='flex flex-col w-full md:w-2/3'>
                    <div className="text-4xl font-semibold font-DMSans text-black">
                        <span className='bg-gradient-to-r from-[#E7711C] via-[#E7711C]  to-[#00170E] text-transparent text-[30px] 
                        bg-clip-text md:text-[40px] font-bold'>
                            Portfolios </span>a are must in 2023
                    </div>
                    <div className='flex flex-col md:flex-wrap w-full md:w-4/5 h-full mt-5 gap-4 '>
                        <Opdata i={1} colo="text-[#244CEC]" title="Enhanced Job Prospects" desc="A portfolio showcases an engineer's abilities, problem-solving skills, and hands-on experience. This helps in impressing potential employers during job applications and interviews, significantly increasing the chances of getting hired for coveted positions or projects." />
                        <Opdata i={2} colo="text-[#5E5E5E]" title="Career Advancement Opportunities" desc="A well-maintained portfolio can be a powerful tool for engineers to advance their careers. It enables them to present a comprehensive snapshot of their professional journey, demonstrating growth, adaptability, and the ability to take on increasingly complex challenges." />
                        <Opdata i={3} colo="text-[#3A870A]" title="Enhanced Job Prospects" desc="For engineers working independently or in consulting roles, portfolios act as a showcase of their previous projects and expertise. This instills confidence in potential clients and establishes trust, leading to increased project opportunities and potential collaborations. A strong portfolio can also attract higher-value projects and partnerships, contributing to a more successful and fulfilling career trajectory." />
                    </div>
                    <div className='bg-bground px-5 py-2 text-lg font-DMSans w-max rounded-3xl cursor-pointer'>Create Now</div>
                </div>
                <img src={last} alt='' className='w-full h-full md:w-[400px] md:h-[550px] object-contain ' />

            </div>
        </div>

    )
}

export default Hero