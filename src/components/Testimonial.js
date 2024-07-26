import React, { useState } from 'react'
import blqQuote from '../assests/asset 34.png';
import blqQuote1 from '../assests/asset 35.png';
import Testimonial1 from '../assests/asset 9.jpeg';
import Testimonial2 from '../assests/asset 10.jpeg';
import Testimonial3 from '../assests/asset 11.jpeg';
import Testimonial4 from '../assests/asset 12.jpeg';
import Testimonial5 from '../assests/asset 13.jpeg';
import Testimonial6 from '../assests/asset 14.jpeg';
import Testimonial7 from '../assests/asset 15.jpeg';
import Testimonial8 from '../assests/asset 16.jpeg';

const Testimonial = () => {



    const texts = [
        {
            id: 1,
            name: "AKLIMA",
            img: Testimonial1,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: true
        },
        {
            id: 2,
            name: "Fatima asrafy",
            img: Testimonial2,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 3,
            name: "Jannt tumpa",
            img: Testimonial3,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 4,
            name: "johns due",
            img: Testimonial4,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 5,
            name: "john doe",
            img: Testimonial5,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 6,
            name: "amar orthi",
            img: Testimonial6,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 7,
            name: "fatima ma",
            img: Testimonial7,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
        {
            id: 8,
            name: "jon cummins",
            img: Testimonial8,
            role: "COO",
            comapany: "AMERIMAR ENTERPRISES, INC.",
            active: false
        },
    ]

    const [userData, setUserData] = useState(texts[0])

    const click = (user) => {
        setUserData(user);
    }

    return (
        <>
            <section className='py-20 font-poppins bg-[#f6f6f6]' id='testimonial'>
                <div className='container'>
                    <div className='relative'>
                        <img src={blqQuote} alt="blq" className='hidden md:block absolute left-3 -z-[5]' />
                        <img src={blqQuote1} alt="blq" className='hidden md:block absolute right-3 -z-[5]' />
                        <div className='flex flex-col items-center z-10'>
                            <div className='w-full md:w-4/5 mb-10'>
                                <p className='text-[18px] md:text-[24px] lg:text-[32px] font-medium text-center text-[#18181b]'>{`" ${userData.name} , The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original. "`}</p>
                                <p className='text-center mt-5 uppercase'>
                                    {userData.name} - <span className='text-[gray]'>{userData.role}, {userData.comapany}</span>
                                </p>
                            </div>
                            <div className='w-[60%] m-auto md:w-[50%] lg:w-[40%] grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center'>
                                {
                                    texts.map((val, ind) => {
                                        return (
                                            <img key={ind} src={val.img} alt={val.name} className='w-full h-full cursor-pointer' onClick={() => click(val)} title={val.name}/>
                                        )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
