import React from 'react'
import ach from "../assets/achv.svg"
const Achievements = ({ user }) => {
  return (
    <div className='flex flex-col w-full h-full md:px-32 mt-28 pb-10' id='achiements'>
      <p className='headings'>My Achievements and Accolades</p>
      <p className='text-center text-base font-roboto-flex mt-5'>Some of my goood memeories</p>
      <div className='flex flex-wrap w-full md:gap-6 gap-2 justify-center mt-10'>
        {
          user?.achievements.length > 0 ? (
            user.achievements.map((data, i) => {
              return (
                <AchievementCard title={data.title} key={i}/>
              )
            }))
            : <div className='flex flex-wrap w-full md:gap-6 gap-2 justify-center mt-10'>
              <AchievementCard />
              <AchievementCard />
              <AchievementCard />


            </div>
        }
        {/* <AchievementCard />
        <AchievementCard />
        <AchievementCard /> */}

      </div>


    </div>)
}

export default Achievements

const AchievementCard = ({ title }) => {
  return (
    <div className='flex w-3/4 md:w-1/4 md:h-48 h-28 relative border border-solid border-icob  
    border-opacity-30 rounded-[5px] items-center px-5 '>
      <p className='md:text-[18px] leading-[29px] font-roboto-flex md:w-4/5 w-full'>
        {title ? title : "Achived 1st position in Final year of 2023 Engineering"}
      </p>
      <div className='w-fit h-fit absolute 
      top-0 right-0 flex justify-center md:p-4 p-3
      bg-gray-300 rounded-bl-lg rounded-tr-[5px]'>
        <img
          src={ach}
          alt=""
          className='md:w-6 md:h-6 h-3 w-3 object-contain'

        />
      </div>
    </div>
  )
}