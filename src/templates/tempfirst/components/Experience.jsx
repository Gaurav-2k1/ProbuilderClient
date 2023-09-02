import React from 'react'
import Reveal from '../../../components/common/Framer/Reveal';

const Experience = ({ user }) => {
  return (
    <section className='flex flex-col w-full h-full md:px-32 pt-10' id='experience'>
      <p className='headings'>Check My Experience</p>
      <p className='text-center text-base font-roboto-flex mt-5'>Lets see how much experiences  - you want it right</p>
      <div className='flex flex-col  md:px-10 items-center justify-center mt-11'>
        {
          user?.experience.length > 0 ?
            user.experience.map((data, i) => {
              return (
                <>
                  <ExpRow key={i}
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
              <ExpRow key={1} />
              <ExpRow key={2} />
              <ExpRow key={3} />
              <ExpRow key={4} />
            </div>
        }

      </div>


    </section>)
}

export default Experience;

const ExpRow = ({ title, employer, startDate, endDate, description, location }) => {
  let ed = new Date(endDate)
  let sd = new Date(startDate)
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "August", "Sept", "Oct", "Nov", "Dec"
  ];
  const diffMonths = (ed.getFullYear() - sd.getFullYear()) * 12 +
    (ed.getMonth() - sd.getMonth());
  return (
    <div className='flex flex-col md:flex-row w-full md:w-3/4 relative rounded-[8px]'>
      <div className='flex 
      flex-row justify-between md:flex-col 
      w-full md:w-1/4 
      md:pr-5
      max-h-max
      items-end p-4
      md:justify-center
      border border-solid border-icob 
      border-opacity-40 '>
        <Reveal>
          <p className='font-roboto-flex text-[16px]'>{startDate ? monthNames[sd.getMonth()] + " " + sd.getFullYear() + " - " + monthNames[ed.getMonth()] + " " + ed.getFullYear() : "August 2017 -August 2018"}</p></Reveal>
        <Reveal><p className='font-roboto-flex text-[16px]'>({diffMonths}m)</p></Reveal>
      </div>
      {/* <div className='absolute bg-icob w-5 rounded-full left-[24%] md:-translate-x h-5 top-[45%] hidden md:block'></div> */}
      <div className='flex flex-col w-full md:w-3/4 
      md:border-y md:border-r border border-solid 
      border-icob border-opacity-40 
      p-4 gap-2 py-10'>
        <Reveal>
          <p className='text-[18px] font-semibold leading-[29px] font-roboto-flex'>{employer ? employer : " Zerodha Incorporation"}</p></Reveal>
        <Reveal>
          <span className='flex flex-row gap-4 items-center'>
            <p className='text-[18px]  leading-[29px] font-roboto-flex'>{title ? title : "System Architect"}</p>
            •
            <p className='text-[18px]  leading-[29px] font-roboto-flex '>{location ? location : "Bengaluru, Karnataka India"} </p>
          </span></Reveal>
        <Reveal>
          <p className='text-[18px] md:mt-2 font-roboto-flex leading-[29px]'>
            {location ? description : "Revolutionised the way Amazon resolves post ordering customers issues, like damaged or defective item, late delivery etc. Simplified the platform customer service agents [CSAs] use to engage with Amazon`s Retail and Digital customers."}
          </p></Reveal>
      </div>
    </div>
  )
}