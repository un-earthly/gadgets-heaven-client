import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function Review() {
    return (
        <div className='md:w-1/2 mx-auto md:p-4 m-4'>
            <h1 className="md:text-4xl text-xl font-semibold text-center my-5 mb-10">What Others Says about us</h1>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} showIndicators={false}>
                <div className='flex items-center justify-center'>

                    <div >
                        <img className='h-20 w-20 rounded-full object-contain' src="https://randomuser.me/api/portraits/women/72.jpg" alt='' />
                    </div>
                    <div>
                        <p id="user_title">The Perfect place to get my buisness up n runnin.</p>
                        <p>-Marcia Hunter</p>
                    </div>
                </div>

                <div className='flex items-center justify-center'>


                    <div >
                        <img className='h-20 w-20 rounded-full object-contain' src="https://randomuser.me/api/portraits/men/2.jpg" alt='' />
                    </div>
                    <div>
                        <p>Clean.loved it!</p>
                        <p>-Derek Williams</p>
                    </div>
                </div>

                <div className='flex items-center justify-center'>


                    <div>
                        <img className='h-20 w-20 rounded-full object-contain' src="https://randomuser.me/api/portraits/women/20.jpg" alt='' />
                    </div>
                    <div>

                        <p>delivered in time.genuine product.</p>
                        <p >-Brandy Ortiz</p>
                    </div>

                </div>
                <div className='flex items-center justify-center'>


                    <div >
                        <img className='h-20 w-20 rounded-full object-contain' src="https://randomuser.me/api/portraits/women/22.jpg" alt='' />
                    </div>
                    <div>
                        <p>Gadgets are great.</p>
                        <p>-Carl Laner</p>

                    </div>
                </div>
            </Carousel>
        </div>



    )
}
