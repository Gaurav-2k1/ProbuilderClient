import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { detaildata } from '@/data/other';
const Achievement = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        swipeToSlide: true,


    };
    return (
        <div
            className='flex flex-col w-full
            bg-primary h-max py-10 md:px-4 relative overflow-hidden '>
            <div className='text-2xl md:my-10 text-center text-white'>
                Achievement & Responsibilities
            </div>
            <Slider {...settings} className="md:px-10 mt-5 
                self-center flex flex-row px-2
                justify-items-center relative w-full md:w-4/5">
                <ReqBox name={detaildata.achievement} title="Achievement" />
                <ReqBox name={detaildata.awards} title="Awards" />
                <ReqBox name={detaildata.responsibilities} title="Professional Summary" />

            </Slider>


        </div>
    )
}
const ReqBox = ({ name, title }) => {
    return (
        <div className='
         px-3 py-2  bg-secondary 
        rounded-lg text-black text-sm 
        md:text-lg 
        w-full 
        md:w-3/5 
        md:ml-56
        text-left
        h-min
        flex flex-col 
        self-center
        
        '>
            <div className='my-2 text-sm md:text-3xl font-semibold'>
                {title}
            </div>
            <ul className='mx-4'>
                {

                    name.map((data, i) => {
                        return (
                            <li key={i} className='list-disc my-2'>
                                <div className='flex flex-col text-xs md:text-lg '>
                                    {data}
                                </div>
                            </li>

                        )
                    })

                }
            </ul>

        </div>
    )
}

export default Achievement