import React from 'react'

const Service = () => {

    const service = [
        {
            iconClass: "fa-brands fa-chromecast",
            title: "Business Strategy"
        },
        {
            iconClass: "fa-solid fa-layer-group",
            title: "Website Development"
        },
        {
            iconClass: "fa-solid fa-user-group",
            title: "Marketing & Reporting"
        },
        {
            iconClass: "fa-solid fa-desktop",
            title: "Mobile App Development"
        },
        {
            iconClass: "fa-solid fa-user-group",
            title: "Marketing & Reporting"
        },
        {
            iconClass: "fa-solid fa-desktop",
            title: "Mobile App Development"
        },
    ]

    return (
        <>
            <section className='py-20 font-poppins' id='service'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            service.map((val, ind) => {
                                return (
                                    <div key={ind} className='flex flex-col py-14 px-11 bg-[#f6f6f6] rounded-xl service group'>
                                        <i className={`${val.iconClass} text-[#f9004d] group-hover:text-white text-[40px]`}></i>
                                        <h2 className='text-[19px] font-poppins font-[500] my-5'>{val.title}</h2>
                                        <p className="text-[18px] text-[#1d1d24] group-hover:text-white opacity-75">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
