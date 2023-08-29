import React from 'react'

const Experience = ({ user }) => {
  return (
    <div className='flex flex-col w-full h-full md:px-32 pt-10' id='experience'>
      <p className='text-center text-lg font-mono'>Check my Experience</p>
      <p className='text-center text-base font-roboto-flex mt-5'>Lets see how much experienc eis  - you want it right</p>
      <div className='flex flex-col  md:px-10 items-center justify-center mt-11'>
        {
          user?.experience.length > 0 ?
            user.experience.map((data, i) => {
              return (
                <ExpRow key={i}
                  title={data.title}
                  employer={data.employer}
                  startDate={data.startDate}
                  endDate={data.endDate}
                  description={data.description}
                  location={data.location}
                />
              )

            }) :
            <div className='flex flex-col  md:px-10 items-center justify-center mt-11'>
              <ExpRow />
              <ExpRow />
              <ExpRow />
              <ExpRow />
            </div>
        }

      </div>


    </div>)
}

export default Experience;

const ExpRow = ({ title, employer, startDate, endDate, description, location }) => {
  let ed = new Date(endDate)
  let sd = new Date(startDate)
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const diffMonths = (ed.getFullYear() - sd.getFullYear()) * 12 +
    (ed.getMonth() - sd.getMonth());
  return (
    <div className='flex flex-col md:flex-row w-full md:w-3/4 relative'>
      <div className='flex flex-row justify-between md:flex-col w-full md:w-1/4 
      max-h-max
      items-end p-4
      md:justify-center
      border border-solid border-blueviolet-100 
      border-opacity-60'>
        <p className='font-roboto-flex'>{startDate ? monthNames[sd.getMonth()] + " " + sd.getFullYear() + " - " + monthNames[ed.getMonth()] + " " + ed.getFullYear() : "August 2017 -August 2018"}</p>
        <p className='font-roboto-flex'>({diffMonths}m)</p>
      </div>
      <div className='absolute bg-blueviolet-100 w-5 rounded-full left-[24%] h-5 top-[45%] hidden md:block'></div>
      <div className='flex flex-col w-full md:w-3/4 border border-solid 
      border-blueviolet-100 border-opacity-60
      p-4 gap-4 '>
        <p className='text-3xl font-roboto-flex'>{title ? title : "System Architect"}</p>
        <span className='flex flex-row gap-4'>
          <p className='text-base font-roboto-flex'>{employer ? employer : " Zerodha Incorporation"}</p>
          <p className='text-base font-roboto-flex'>• {location ? location : "Bengaluru, Karnataka India"} </p>
        </span>
        <p className='text-base font-roboto-flex leading-6'>
          {location ? description : "Revolutionised the way Amazon resolves post ordering customers issues, like damaged or defective item, late delivery etc. Simplified the platform customer service agents [CSAs] use to engage with Amazon`s Retail and Digital customers."}
        </p>
      </div>
    </div>
  )
}