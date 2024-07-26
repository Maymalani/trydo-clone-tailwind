import React, { useEffect, useState } from 'react'

const ClickToTop = () => {

    const [visible, setVisible] = useState(false);

    const goToTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    const scrollFun = () => {
        if (document.documentElement.scrollTop > 200 || document.scrollTop > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFun);
    }, []);

    return (
        <>
            <button onClick={goToTop} title='Go To Top' className={`${visible ? "block" : "hidden"} w-14 h-14 border-[1px] border-[#f9004d] rounded-full bg-white text-[#f9004d] fixed bottom-4 right-4 z-[1000]`}>
                <i className="fa-solid fa-angle-up"></i>
            </button>
        </>
    )
}

export default ClickToTop
