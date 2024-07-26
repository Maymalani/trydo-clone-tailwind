import React from 'react'
// import SliderPortfolio from './SliderPortfolio'
import SwiperPortfolio from './SwiperPortfolio'

const Portfolio = () => {
    return (
        <>
            <section className='py-20 font-poppins' id='portfolio'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='w-full md:w-1/2 mb-10'>
                            <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] text-[#1f1f25] font-[800]'>Our Portfolio</h2>
                            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#717173] my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <SwiperPortfolio />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
