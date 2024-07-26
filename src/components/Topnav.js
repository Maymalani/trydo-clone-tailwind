import React, { useEffect, useState } from 'react'
import logoLight from "../assests/logoLight.png"
import logoBlack from "../assests/logoDark.png"
import { NavLink, useLocation } from 'react-router-dom'

const Topnav = () => {

    const { hash } = useLocation();
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const scrollFun = () => {
        if (document.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    useEffect(() => {
        window.addEventListener('scroll', scrollFun);
    }, []);

    return (
        <>
            <header className={`${scroll ? "bg-white text-black shadow-lg" : "bg-transparent py-5 text-[#c6c9d8]"} flex items-center justify-center fixed top-0 left-0 w-screen z-[1000]`}>
                <div className='container'>
                    <div className='flex items-center justify-between relative'>
                        <NavLink>
                            <img src={scroll ? logoBlack : logoLight} className={`${scroll ? "w-[166px] h-[60px] p-1" : ""}`} alt="" />
                        </NavLink>
                        <nav id='nav' className='gap-x-7 ml-auto mr-10 text-[16px] font-medium font-poppins hidden xl:flex'>
                            <NavLink to="/" className="py-4 hover:text-[#f9004d]">Home</NavLink>
                            <NavLink to="/#service" className="py-4 hover:text-[#f9004d]">Service</NavLink>
                            <NavLink to="/#about" className="py-4 hover:text-[#f9004d]">About</NavLink>
                            <NavLink to="/#portfolio" className="py-4 hover:text-[#f9004d]">Portfolio</NavLink>
                            <NavLink to="/#team" className="py-4 hover:text-[#f9004d]">Team</NavLink>
                            <NavLink to="/#testimonial" className="py-4 hover:text-[#f9004d]">Testimonial</NavLink>
                            <NavLink to="/#blog" className="py-4 hover:text-[#f9004d]">Blog</NavLink>
                            <NavLink to="/#contact" className="py-4 hover:text-[#f9004d]">Contact</NavLink>
                        </nav>
                        <div className='flex items-center gap-x-2'>
                            <button className={`hidden md:block bg-transparent px-4 py-2 border-[1px] ${scroll ? "text-black border-black" : "text-[#c6c9d8] border-[#c6c9d8]"}  rounded-md hover:bg-[#f9004d] hover:border-[#f9004d] hover:text-white`}>Buy Now</button>
                            {
                                show ? <i className="fa-solid fa-xmark fa-xl block xl:hidden" onClick={() => setShow(!show)}></i> : <i className="fa-solid fa-bars fa-xl block xl:hidden" onClick={() => setShow(!show)}></i>
                            }
                        </div>
                        <div className={`${show ? "block" : "hidden"} xl:hidden overflow-y-auto rounded-md absolute top-[62px] left-0 w-full flex flex-col bg-white p-1`}>
                            <NavLink to="/" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 rounded-md">Home</NavLink>
                            <NavLink to="/#service" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 my-1 rounded-md">Service</NavLink>
                            <NavLink to="/#about" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 rounded-md">About</NavLink>
                            <NavLink to="/#portfolio" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 my-1 rounded-md">Portfolio</NavLink>
                            <NavLink to="/#team" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 rounded-md">Team</NavLink>
                            <NavLink to="/#testimonial" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 my-1 rounded-md">Testimonial</NavLink>
                            <NavLink to="/#blog" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 rounded-md">Blog</NavLink>
                            <NavLink to="/#contact" onClick={() => setShow(false)} className="py-1 hover:text-[#f9004d] px-2 my-1 rounded-md">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Topnav
