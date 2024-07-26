import React from 'react'
import member1 from '../assests/asset 3.jpeg';
import member2 from '../assests/asset 4.jpeg';
import member3 from '../assests/asset 5.jpeg';
import member4 from '../assests/asset 6.jpeg';
import member5 from '../assests/asset 7.jpeg';
import member6 from '../assests/asset 8.jpeg';

const Team = () => {

    const team = [
        {
            name: "Jone Due",
            img: member1,
            role: "Sr. Web Developer"
        },
        {
            name: "Fatima Asrafi",
            img: member2,
            role: "Front End Engineer"
        },
        {
            name: "AI Amin Bali",
            img: member3,
            role: "Sr. Graphic Designer"
        },
        {
            name: "Jone Due",
            img: member4,
            role: "Sr. Web Developer"
        },
        {
            name: "Fatima Asrafi",
            img: member5,
            role: "Front End Engineer"
        },
        {
            name: "AI Amin Bali",
            img: member6,
            role: "Sr. Graphic Designer"
        },

    ]

    return (
        <>
            <section className='py-20 font-poppins' id='team'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='w-full md:w-1/2 mb-10'>
                            <h2 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] text-[#1f1f25] font-[800]'>Skilled Team</h2>
                            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#717173] my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                            {
                                team.map((val, ind) => {
                                    return (
                                        <div className='relative group' key={ind}>
                                            <img src={val.img} className='brightness-[0.43] rounded-md' alt="slide1" />
                                            <div className='w-full h-full hidden group-hover:flex absolute z-[200] top-0 left-0 text-left flex-col justify-between p-10'>
                                                <div className='flex gap-5 text-white'>
                                                    <i className="hover:scale-150 ease-in-out delay-75 transition-all fa-brands fa-facebook-f"></i>
                                                    <i className="hover:scale-150 ease-in-out delay-75 transition-all fa-brands fa-linkedin-in"></i>
                                                    <i className="hover:scale-150 ease-in-out delay-75 transition-all fa-brands fa-twitter"></i>
                                                </div>
                                                <div>
                                                    <h2 className='text-white text-[20px] lg:text-[24px] font-[500] mb-2'>{val.name}</h2>
                                                    <p className='text-[12px] lg:text-[14px] text-[#c6c9d8]'>{val.role}</p>
                                                </div>
                                            </div>
                                            <div className='absolute hidden group-hover:block overlay rounded-md w-full top-0 bottom-0 left-0 right-0 z-[100] opacity-40'></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
