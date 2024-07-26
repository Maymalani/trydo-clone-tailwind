import React from 'react'
import NewsSlider from './NewsSlider'

const News = () => {
    return (
        <>
            <section className='py-20 font-poppins' id='blog'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='w-full md:w-1/2 mb-10'>
                            <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] text-[#1f1f25] font-[800]'>Latest News</h2>
                            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#717173] my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <NewsSlider />
                    </div>
                </div>
            </section>
        </>
    )
}

export default News
