import React from 'react'
import logoLight from '../assests/asset 28.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <section className='bg-[#1d1d24] text-[#c6c9d8]'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='flex flex-wrap justify-center sm:justify-between items-center py-5 gap-5 sm:gap-0'>
                            <NavLink className='flex items-center'>
                                <img src={logoLight} alt="Trydo Logo" className='w-[166px] h-[60px]' />
                            </NavLink>
                            <div className='flex gap-x-3'>
                                <NavLink className='border-[1px] border-[#c6c9d8] w-12 grid place-items-center h-12 rounded-full hover:bg-[#f9004d] hover:text-white hover:border-[#f9004d]'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </NavLink>
                                <NavLink className='border-[1px] border-[#c6c9d8] w-12 grid place-items-center h-12 rounded-full hover:bg-[#f9004d] hover:text-white hover:border-[#f9004d]'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </NavLink>
                                <NavLink className='border-[1px] border-[#c6c9d8] w-12 grid place-items-center h-12 rounded-full hover:bg-[#f9004d] hover:text-white hover:border-[#f9004d]'>
                                    <i className="fa-brands fa-instagram"></i>
                                </NavLink>
                                <NavLink className='border-[1px] border-[#c6c9d8] w-12 grid place-items-center h-12 rounded-full hover:bg-[#f9004d] hover:text-white hover:border-[#f9004d]'>
                                    <i className="fa-brands fa-twitter"></i>
                                </NavLink>
                            </div>
                        </div>
                        <hr className="border-[#FFFFFF12]" />
                        <p className='w-full py-3 flex justify-center items-center text-[16px] text-center'>
                            <span>Copyright © {year} Rainbow-Themes. All Rights Reserved.</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
