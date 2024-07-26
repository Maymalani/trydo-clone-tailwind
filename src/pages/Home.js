import React from 'react'
import bgImg from "../assests/asset 29.jpeg";
import Service from '../components/Service';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Funfacts from '../components/Funfacts';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import News from '../components/News';
import ContactUs from '../components/ContactUs';
import Client from '../components/Client';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='relative'>
                <img src={bgImg} alt="" className='brightness-[0.43] w-screen h-[500px] sm:h-full object-cover' />
                <div className='w-full absolute top-[50%] left-[50%] font-[300] -translate-x-[50%] -translate-y-[50%] text-center'>
                    <h1 className='gradient text-[30px] sm:text-[40px] md:text-[60px] lg:text-[90px]'>CREATIVE</h1>
                    <p className='text-[#c6c9d8] font-poppins text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] my-3 lg:my-7 px-5 lg:px-52'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
                    <NavLink className='bg-transparent px-8 py-3 border-[2px] text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px] text-[#c6c9d8] font-[500] tracking-wider border-[#c6c9d8] rounded-md hover:bg-[#f9004d] hover:border-[#f9004d] hover:text-white hover:-translate-y-1 delay-150 ease-in-out'>CONTACT US</NavLink>
                </div>
            </section>
            <Service />
            <About />
            <Portfolio />
            <Funfacts />
            <Team />
            <Testimonial />
            <News />
            <ContactUs />
            <Client />
            <Footer />
        </>
    )
}

export default Home
