import React from 'react'
import callingImg from '../assests/asset 21.jpeg'

const ContactUs = () => {
    return (
        <>
            <section className='py-20 font-poppins bg-[#f6f6f6]' id='contact'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='w-full rounded-md overflow-hidden'>
                            <img src={callingImg} className='w-full h-full object-cover' alt="Calling" />
                        </div>
                        <div className='w-full flex flex-col'>
                            <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] text-[#1f1f25] font-[800]'>Contact Us</h2>
                            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#717173] my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                            <div className='mt-5'>
                                <input type="text" placeholder='Your Name' className='w-full px-5 py-2 bg-transparent border-[2px] outline-[#f9004d] border-[rgba(0, 0, 0, .1)] rounded-sm' />
                                <input type="text" placeholder='Your Email' className='w-full my-5 px-5 py-2 bg-transparent border-[2px] outline-[#f9004d] border-[rgba(0, 0, 0, .1)] rounded-sm' />
                                <input type="text" placeholder='Your Phone' className='w-full px-5 py-2 bg-transparent border-[2px] outline-[#f9004d] border-[rgba(0, 0, 0, .1)] rounded-sm' />
                                <input type="text" placeholder='Subject' className='w-full my-5 px-5 py-2 bg-transparent border-[2px] outline-[#f9004d] border-[rgba(0, 0, 0, .1)] rounded-sm' />
                                <textarea rows="8" placeholder='Your Message' className='w-full px-5 py-2 bg-transparent border-[2px] outline-[#f9004d] border-[rgba(0, 0, 0, .1)] rounded-sm'></textarea>
                                <button className='uppercase mt-5 px-10 py-3 bg-[#f9004d] text-white border-[2px] border-[#f9004d] hover:bg-white hover:text-[#f9004d] rounded-md'>submit now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
