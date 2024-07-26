import React from 'react'
import CountUp from 'react-countup'

const Funfacts = () => {
    return (
        <>
            <section className='py-20 bg-[#f6f6f6] font-poppins' id='facts'>
                <div className='container'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-4xl text-black text-center font-[500]'>Our Fun Facts</h2>
                        <div className='w-full mt-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                            <div className='px-5 flex flex-col justify-center items-center'>
                                <div className='mb-5 text-[#f9004d] font-bold flex justify-center items-start gap-x-1'>
                                    <CountUp className=' text-5xl' start={0} end={199} /><i className="fa-solid fa-plus fa-xl pt-3"></i>
                                </div>
                                <p className='text-[18px] text-[#1d1d24] text-center font-[400]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </div>
                            <div className='px-5 flex flex-col justify-center items-center'>
                                <div className='mb-5 text-[#f9004d] font-bold flex justify-center items-start gap-x-1'>
                                    <CountUp className=' text-5xl' start={0} end={575} /><i className="fa-solid fa-plus fa-xl pt-3"></i>
                                </div>
                                <p className='text-[18px] text-[#1d1d24] text-center font-[400]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </div>
                            <div className='px-5 flex flex-col justify-center items-center'>
                                <div className='mb-5 text-[#f9004d] font-bold flex justify-center items-start gap-x-1'>
                                    <CountUp className=' text-5xl' start={0} end={69} /><i className="fa-solid fa-plus fa-xl pt-3"></i>
                                </div>
                                <p className='text-[18px] text-[#1d1d24] text-center font-[400]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Funfacts
