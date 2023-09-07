import React from 'react'
import SectionNav from './SectionNav'

const Experience = ({ user }) => {
    return (
        <section className='w-full h-full my-20 pt-20 bg-black px-4  md:px-56' id='experience'>
            <SectionNav side={true} name="Experience" />
            <div className='flex flex-col gap-10'>
                {
                    user?.experience.length > 0 ?
                        user.experience.map((data, i) => {
                            return (
                                <>
                                    <ExperienceCard key={i}
                                        title={data.title}
                                        employer={data.employer}
                                        startDate={data.startDate}
                                        endDate={data.endDate}
                                        description={data.description}
                                        location={data.location}
                                    />
                                </>

                            )

                        }) :
                        <div className='flex flex-col  md:px-10 items-center justify-center mt-11'>
                            <ExperienceCard key={1}/>
                            <ExperienceCard key={2}/>
                            <ExperienceCard key={3}/>
                            <ExperienceCard key={4}/>
                        </div>
                }

            </div>
        </section>)
}

const ExperienceCard = ({ title, employer, startDate, endDate, description, location }) => {
    let ed = new Date(endDate)
    let sd = new Date(startDate)
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "August", "Sept", "Oct", "Nov", "Dec"
    ];
    const diffMonths = (ed.getFullYear() - sd.getFullYear()) * 12 +
        (ed.getMonth() - sd.getMonth());
    return (
        <div className='flex flex-col w-full gap-3'>
            <div className='flex flex-row items-center justify-between'>
                <p className='font-Poppins text-[18px] md:text-[22px]  font-bold'>{employer ? employer : "Google"}</p>
                <p className='font-Poppins text-[18px]  font-normal'>{startDate ? monthNames[sd.getMonth()] + " " + sd.getFullYear() + " - " + monthNames[ed.getMonth()] + " " + ed.getFullYear() : "August 2017 -August 2018"}</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <p className='font-Poppins text-[18px] md:text-[22px]  font-bold text-[#98BBFF]'>{title ? title : "Software Developer"}</p>
                <p className='font-Poppins text-[18px]  font-normal'>{location ? location : "Atlanta"}</p>
            </div>
            <p className='font-inter text-[18px]  font-extralight text-[#EBECF3]'>
                {location ? description : "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier."}


            </p>
            <div className='flex flex-wrap gap-4 '>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Angular</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Python</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GCP</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GIT</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Github</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>Java</p>
                <p className='text-[#EBECF3] font-Poppins text-[16px] w-max px-3 y-2 bg-[#232323] rounded-3xl'>GoLang</p>
            </div>
        </div>
    )
}
export default Experience