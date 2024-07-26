import React from 'react'
import about from "../assests/asset 2.jpeg"

const About = () => {
    return (
        <>
            <section className='py-20 bg-[#f6f6f6] font-poppins' id='about'>
                <div className='container'>
                    <div className='flex flex-wrap justify-center items-center'>
                        <img src={about} className='rounded-lg w-full md:w-[35%] mb-5 md:mb-0 h-auto object-cover' alt="" />
                        <div className='flex flex-col w-full md:w-[65%] pl-0 md:pl-16'>
                            <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] text-[#1f1f25] font-[800]'>About Us</h2>
                            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#717173] my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <span>alteration</span> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                            <h3 className='text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#1f1f25] font-[500] my-5'>Who We Are</h3>
                            <p className='text-[18px] text-[#717173]'>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default About
