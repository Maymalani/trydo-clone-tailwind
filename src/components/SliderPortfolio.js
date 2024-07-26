import React from 'react'
import Slider from 'react-slick'
import slide1Img from '../assests/asset 31.jpeg'
import slide2Img from '../assests/asset 33.jpeg'
import slide3Img from '../assests/asset 32.jpeg'
import slide4Img from '../assests/asset 30.jpeg'

const SliderPortfolio = () => {

    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        initialSlide:0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding:"20px"

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerPadding:"30px"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='slider-container font-poppins overflow-hidden'>
                <Slider {...setting}>
                    <div className='relative hover:scale-105 hover:rounded-md group'>
                        <img src={slide1Img} className='brightness-[0.43] rounded-md' alt="slide1" />
                        <div className='w-[80%] absolute z-[200] top-[50%] left-[10%]'>
                            <p className='text-14px text-[#c6c9d8]'>Development</p>
                            <h2 className='text-white text-[24px] font-[500] my-3'>Getting tickets to the big show</h2>
                            <button className='px-3 py-1 text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                        </div>
                        <div className='absolute hidden group-hover:block overlay rounded-md w-[94.3%] top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                    </div>
                    <div className='relative hover:scale-105 hover:rounded-md group'>
                        <img src={slide2Img} className='brightness-[0.43] rounded-md' alt="slide1" />
                        <div className='w-[80%] absolute z-[200] top-[50%] left-[10%]'>
                            <p className='text-14px text-[#c6c9d8]'>Development</p>
                            <h2 className='text-white text-[24px] font-[500] my-3'>Getting tickets to the big show</h2>
                            <button className='px-3 py-1 text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                        </div>
                        <div className='absolute hidden group-hover:block overlay rounded-md w-[94.3%] top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                    </div>
                    <div className='relative hover:scale-105 hover:rounded-md group'>
                        <img src={slide3Img} className='brightness-[0.43] rounded-md' alt="slide1" />
                        <div className='w-[80%] absolute z-[200] top-[50%] left-[10%]'>
                            <p className='text-14px text-[#c6c9d8]'>Development</p>
                            <h2 className='text-white text-[24px] font-[500] my-3'>Getting tickets to the big show</h2>
                            <button className='px-3 py-1 text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                        </div>
                        <div className='absolute hidden group-hover:block overlay rounded-md w-[94.3%] top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                    </div>
                    <div className='relative hover:scale-105 hover:rounded-md group'>
                        <img src={slide4Img} className='brightness-[0.43] rounded-md' alt="slide1" />
                        <div className='w-[80%] absolute z-[200] top-[50%] left-[10%]'>
                            <p className='text-14px text-[#c6c9d8]'>Development</p>
                            <h2 className='text-white text-[24px] font-[500] my-3'>Getting tickets to the big show</h2>
                            <button className='px-3 py-1 text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                        </div>
                        <div className='absolute hidden group-hover:block overlay rounded-md w-[94.3%] top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                    </div>
                    <div className='relative hover:scale-105 hover:rounded-md group'>
                        <img src={slide3Img} className='brightness-[0.43] rounded-md' alt="slide1" />
                        <div className='w-[80%] absolute z-[200] top-[50%] left-[10%]'>
                            <p className='text-14px text-[#c6c9d8]'>Development</p>
                            <h2 className='text-white text-[24px] font-[500] my-3'>Getting tickets to the big show</h2>
                            <button className='px-3 py-1 text-white border-[1px] border-[#c6c9d8] hover:bg-[#f9004d] hover:border-[#f9004d] rounded-md'>CASE STUDY</button>
                        </div>
                        <div className='absolute hidden group-hover:block overlay rounded-md w-[94.3%] top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default SliderPortfolio
