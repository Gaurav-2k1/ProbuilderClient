import React from 'react'

const Education = ({ user }) => {
  return (
    <div className='flex flex-col w-full h-full md:px-32 mt-10 md:mt-20' id='education'>
      <p className='headings'>Eduction Time</p>
      <p className='text-center text-base font-roboto-flex mt-5'>This is where i did anything and no one disturbed </p>
      <div className='flex flex-col md:px-10 items-center mt-11'>
        {
          user?.education.length > 0 ?
            user.education.map((data, i) => {
              return (
                <>
                  <EduRow key={i}
                    title={data.title}
                    schoolname={data.schoolname}
                    startDate={data.startDate}
                    endDate={data.endDate}
                    location={data.location}
                  />

                </>



              )

            }) :
            <div className='flex flex-col  md:px-10 items-center justify-center mt-11'>
              <EduRow key={1} />
              <EduRow key={2} />
            </div>
        }

      </div>


    </div>)
}

export default Education;

const EduRow = ({ title, schoolname, startDate, endDate, location }) => {
  let ed = new Date(endDate)
  let sd = new Date(startDate)
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "August", "Sept", "Oct", "Nov", "Dec"
  ];
  const diffMonths = (ed.getFullYear() - sd.getFullYear()) * 12 +
    (ed.getMonth() - sd.getMonth());

  return (
    <div className='flex flex-col md:flex-row w-full md:w-4/5 relative'>
      <div className='flex 
      flex-row justify-between md:flex-col 
      w-full md:w-1/4 
      md:pr-5
      max-h-max
      items-end p-4
      md:justify-center
      border border-solid border-icob 
      border-opacity-40 '>
        <p className='font-roboto-flex text-[16px]'>{startDate ? monthNames[sd.getMonth()] + " " + sd.getFullYear() + " - " + monthNames[ed.getMonth()] + " " + ed.getFullYear() : "August 2017 -August 2018"}</p>
        <p className='font-roboto-flex text-[16px]'>({diffMonths}m)</p>
      </div>
      <div className='flex flex-col w-full md:w-3/4 
      md:border-y md:border-r  border border-solid 
      border-icob border-opacity-40 
      p-4 gap-2 '>
        <p className='text-[18px] font-semibold leading-[29px] font-roboto-flex'>{title ? title : "12th Board HSC"}</p>
        <span className='flex md:flex-row flex-col  gap-4'>

          <p className='text-[18px]  leading-[29px] font-roboto-flex w-max'>{schoolname ? schoolname : "Vasantrao Naik Mahavidyalay"}</p>
          •
          <p className='text-[18px]  leading-[29px] font-roboto-flex'>{location ? location : "Aurangabad, Maharashtra"} </p>
        </span>
        {/* <p className='text-base font-roboto-flex leading-6'>
          {location ? description : "Revolutionised the way Amazon resolves post ordering customers issues, like damaged or defective item, late delivery etc. Simplified the platform customer service agents [CSAs] use to engage with Amazon`s Retail and Digital customers."}
        </p> */}
      </div>
    </div>

  )
}