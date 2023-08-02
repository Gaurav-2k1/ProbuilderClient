import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import img from "../../assets/Images/heroimg.png"
// Import Swiper styles
import "swiper/css"
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination"
import "../../index.css"
// Icons
// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

// Get apiFunction and the endpoint
// import { apiConnector } from "../../services/apiConnector"
// import { ratingsEndpoints } from "../../services/apis"
const templates = [
  {
    url: img
  },
  {
    url: img
  },
  {
    url: img
  }, {
    url: img
  }
]
function TemplateSlider() {
  // const [reviews, setReviews] = useState([])
  // const truncateWords = 15

  // useEffect(() => {
  //   ;(async () => {
  //     const { data } = await apiConnector(
  //       "GET",
  //       ratingsEndpoints.REVIEWS_DETAILS_API
  //     )
  //     if (data?.success) {
  //       setReviews(data?.data)
  //     }
  //   })()
  // }, [])

  // console.log(reviews)

  return (
    <div className="">
      <div className="h-full w-screen">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier:3,
          }}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full"

        >
          {
            templates.map((data, i) => {
              return (
                <SwiperSlide key={i} className="">
                  <img src={data.url} alt="" className="w-min h-min object-contain" />
                </SwiperSlide>
              )
            })
          }


          {/* <div className="swiper-pagination"></div> */}

          {/* {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })} */}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default TemplateSlider
