
const About = ({ user }) => {

  return (
    <div id='About' className="h-full w-full bg-secondary py-5">
      <h1 className="md:text-4xl text-2xl text-black text-center py-4 nd:py-20" >About Me</h1>
      <div className="flex  flex-col md:flex-row justify-around px-2">
        {/* <div className="w-full md:w-1/2 md:h-full flex flex-col items-center">
          <div className='w-1/2 md:w-2/3 h-full bg-slate-600  rounded-full p-2 md:-rotate-2 md:flex md:flex-col md:items-center md:p-4'>
            <Image src={imga} className='overflow-hidden  w-full rounded-full ' alt="" />
          </div>
        </div> */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start md:pl-10 py-5'>
          {/* <h1 className='text-white text-2xl'>Palash Daroker</h1>
          <span className='text-white border-2 border-solid border-slate-500  w-full text-center md:w-max p-2 bg-slate-600 rounded-lg'>
            Power BI Developer
          </span> */}
          <span className='text-black md:text-base text-sm  w-full md:w-2/3 md:min-w-full h-min text-left px-2'>
            {user?.profile?.about}
          </span>
          <div className='text-white bg-primary md:w-min w-full text-center py-2 px-4 rounded-lg hover:bg-slate-600 delay-50 transition-all cursor-pointer
            ' onClick={() => {
              window.open(user?.profile?.resume, '_blank', 'noopener,noreferrer');
            }}>
            Resume
          </div>
        </div>
      </div>
    </div>
  )
}

export default About