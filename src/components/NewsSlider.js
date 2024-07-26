import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1Img from '../assests/asset 17.jpeg'
import slide2Img from '../assests/asset 18.jpeg'
import slide3Img from '../assests/asset 19.jpeg'
import slide4Img from '../assests/asset 20.jpeg'

const NewsSlider = () => {
    const slide = [
        {
            img: slide1Img
        },
        {
            img: slide2Img
        },
        {
            img: slide3Img
        },
        {
            img: slide4Img
        },
        {
            img: slide1Img
        },
    ]

    return (
        <>
            <Swiper
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    slide.map((val, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <div className='relative group hover:scale-105 hover:rounded-md'>
                                    <img src={val.img} className='brightness-[0.43] rounded-md' alt="slide1" />
                                    <div className='w-[80%] absolute z-[200] top-[75%] left-[10%] sm:top-[65%] md:top-[50%] lg:top-[50%]  text-left'>
                                        <p className='text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-[#c6c9d8]'>Development</p>
                                        <h2 className='text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[500] my-5'>Getting tickets to the big show</h2>
                                        <button className='px-3 py-1 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                                    </div>
                                    <div className='absolute hidden group-hover:block overlay rounded-md w-full top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default NewsSlider
