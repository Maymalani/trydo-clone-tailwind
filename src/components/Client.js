import React from 'react'
import image1 from '../assests/asset 22.png'
import image2 from '../assests/asset 23.png'
import image3 from '../assests/asset 24.png'
import image4 from '../assests/asset 25.png'

const Client = () => {
    const Images = [image1, image2, image3, image4];
    return (
        <>
            <section className='py-20' id='client'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center place-content-center gap-12'>
                        {
                            Images.map((val,ind) => {
                                return(
                                    <img src={val} key={ind} alt="Images" className='object-cover aspect-square hover:scale-110' />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client
