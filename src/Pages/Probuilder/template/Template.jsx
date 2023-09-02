import React, { useEffect, useState, CSSProperties } from 'react'
import { FiFilter } from "react-icons/fi"
import { getTemplate } from '../../../services/approved/Template'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import ClipLoader from "react-spinner"

const filter = [
    "Software Engineer",
    "UI/UX Designer",
    "Dentist",
    "Data Scientist",
    "AI Engineer",
    "Fresher/Student"
]
const Template = () => {
    const [template, setTemplate] = useState([])
    const [inputtag, setInputtag] = useState("")
    const [tag, settag] = useState([])
    const [loading, setLoading] = useState(false)
    const getTemplateData = async () => {

        try {
            setLoading(true)
            let temp = await getTemplate()
            setTemplate(temp.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (inputtag.trim() !== '') {
            settag([...tag, inputtag]);
            setInputtag('');
        }

    };
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    const removeitem = (data) => {
        const updatedItems = tag.filter((item) => item !== data);

        settag(updatedItems)
    }
    useEffect(() => {
        getTemplateData()
    }, [])
    return (
        <div className='w-full h-full bg-white px-4 pt-2 py-10'>
            <div className='w-full h-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[70vh] md:h-full relative rounded-lg'>
                <div className='w-full h-full bg-black absolute top-0 left-0 z-8 rounded-lg'>
                    <div className='w-full h-full bg-black relative top-0 left-0 z-8 rounded-lg overflow-hidden' >
                        <div className='blur-xl  md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#bcff2430] via-[#57FF3B] to-[#2BF719] absolute md:bottom-20 md:left-44 z-9' />
                        <div className='md:blur-xl blur-3xl w-52 h-52  top-0 left-0 md:w-32 md:h-32 rounded-full bg-gradient-to-l from-[#8400FF] via-[#A9FB22] to-[#E2EAFF] absolute md:top-10 md:left-72 z-9' />
                        <div className='blur-xl md:w-20 md:h-20 rounded-full bg-gradient-to-t from-[#FFF5F5] via-[#DA755F] to-[#D6E1FF] absolute md:top-14 md:right-80 z-9' />
                        <div className=' md:blur-xl blur-3xl w-44 h-44  bottom-0 right-0 md:w-40 md:h-40 rounded-full bg-gradient-to-t from-[#8400FF] via-[#03007E] to-[#0039CC] absolute md:bottom-10 md:right-20 z-9' />
                    </div>
                </div>
                <div className='w-full h-full rounded-lg  gap-3 flex flex-col items-center justify-center   absolute top-0 left-0 z-10 '>
                    <p className='bg-gradient-to-r from-[#FFFFFC] to-[#9EA5FF] text-transparent bg-clip-text 
                    text-[30px] md:text-[42px] font-DMSans font-bold text-center md:w-3/5 leading-[44px] '>
                        "Discover Your Professional Edge with our Captivating Templates
                    </p>
                    <p className=' text-sm md:text-lg  w-4/5 md:w-2/5 text-center font-DMSans mt-5 leading-6 text-[#838894]'>Unlock Your Portfolio's Full Potential with our Diverse and Exquisite Template Collection. From Sleek and Modern Designs to Timeless and Classic Styles, Discover the Perfect Showcase for Your Unique Talents and Professional Journey</p>

                    <div className='w-min bg-transparent px-10 mt-5 text-mid py-2 border border-solid border-icob rounded-3xl font-DMSans cursor-pointer hover:scale-105 delay-105 transition-all ease-in'>
                        Explore
                    </div>

                </div>
            </div>
            <div className='my-4 w-full  flex items-center  flex-col md:flex-row mt-10' >
                <form className='relative border border-solid border-[#00000021] w-full rounded-lg' onSubmit={handleSubmit}>
                    <BsSearch className='text-icob font-bold text-lg absolute left-4 top-[35%] md:top-[35%]' />

                    <input placeholder='Search templates by profession or style.......'
                        className='py-4 pl-10 md:pl-14 placeholder:text-[#00000080] md:placeholder:text-lg placeholder:text-sm placeholder:font-DMSans
     bg-white text-black w-full focus:outline-none  
    placeholder:font-bold border-opacity-90
    font-DMSans'
                        type='text'
                        value={inputtag}
                        onChange={(event) => setInputtag(event.target.value)}

                    />
                </form>


                <div className='md:absolute right-10 flex md:flex-row flex-wrap gap-2 my-3 justify-center'>
                    {
                        tag.map((data, i) => {
                            return (
                                <SearchTag key={i} data={data} removeitem={removeitem} />

                            )
                        })
                    }
                    {/* <SearchTag />
                    <SearchTag />
                    <SearchTag /> */}
                </div>
            </div>
            <div className='flex flex-col '>
                <div className='flex flex-row text-lg font-DMSans text-black items-center gap-3 font-bold'><FiFilter className='t' /> Preferences</div>
                <div className='flex flex-col md:flex-row w-full h-full gap-3'>
                    <div className='md:w-1/5 w-full flex h-full flex-col mt-5 py-3 gap-4 border border-solid border-[#00000021] rounded-lg px-4'>
                        {
                            filter.map((data, i) => {
                                return (
                                    <Tags key={i} data={data} />

                                )
                            })
                        }

                    </div>
                    <div className='w-full md:w-4/5 flex h-full flex-wrap mt-5 py-3 justify-around gap-3 border border-solid border-[#00000021] rounded-lg px-4'>
                        {
                            loading ?
                               <div className='spinner'></div> :
                                <>
                                    {
                                        template.map((data, i) => {
                                            return (
                                                <TemplateCard key={i} url={data.preview} n={i + 1} />

                                            )
                                        })
                                    }
                                    {
                                        template.map((data, i) => {
                                            return (
                                                <TemplateCard key={i} url={data.preview} n={i + 1} />

                                            )
                                        })
                                    }
                                    {
                                        template.map((data, i) => {
                                            return (
                                                <TemplateCard key={i} url={data.preview} n={i + 1} />

                                            )
                                        })
                                    }
                                </>
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchTag = ({ data, removeitem }) => {
    return (<div className='flex flex-row md:px-4 md:py-2 px-2 py-1 items-center gap-2 hover:bg-[#0C268C] cursor-pointer bg-icob rounded-3xl'>
        <p className='text-white font-DMSans md:text-[14px] text-sm'>{data}</p>
        <RxCross2 className='text-mid  text-white hover:text-black' onClick={() => {
            removeitem(data)
        }} />
    </div>)
}

const Tags = ({ data }) => {
    return (
        <div class="flex items-center gap-3">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-icob bg-white border-icob rounded
             focus:bg-icob dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-checkbox" className="ml-2 text-lg font-medium font-DMSans text-gray-900 dark:text-gray-300">{data}</label>
        </div>
    )
}

const TemplateCard = ({ url, n }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col rounded-lg m-2 md:m-4'>
            <img src={url} alt='' className='md:w-[322px] md:h-[195px] w-full h-full object-cover rounded-lg hover:brightness-50 delay-109 transition-all ease-linear 
            border-[#0000002b] border-solid border cursor-pointer'  />
            <div className='group'>
                <div className={`px-5 py-2
        group-hover:text-white group-hover:border-white group-hover:bg-bground text-black border-black 
        bg-white text-sm font-normal
         border border-solid font-DMSans rounded-3xl w-max mt-5
          flex flex-row cursor-pointer items-center  delay-100 transition-all ease-in`} onClick={() => {
                        navigate("/dashboard/builder")
                    }}>Go with site
                    <HiOutlineArrowNarrowRight className={`text-2xl pl-2  delay-100 transition-all ease-in  group-hover:text-white text-icob`} />
                </div>
            </div>


        </div>
    )
}

export default Template