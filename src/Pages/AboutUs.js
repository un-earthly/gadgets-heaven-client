import React from 'react'
import { toast } from 'react-toastify'
import Button from '../SharedAndUtils/Button'

export default function AboutUs() {
    return (
        <div className='w-3/4 mx-auto my-20 flex items-center justify-between flex-col md:flex-row'>
            <div className='w-1/2'>
                <h1 className="md:text-5xl text-xl text-center font-bold my-2">About Us</h1>
                <p>The need for flexible and scalable warehousing and distribution solutions is growing as supply chain operators try to overcome labor shortages, increasing costs, and rising consumer demands. At Ryder, whether its finding the perfect location and building a distribution warehouse from the ground up, or managing an existing warehouse, our industry-leading solutions services include engineering processes for continuous improvement, facility design, equipment, labor management, and visibility tools to help you improve efficiency and customer service levels. Additionally, Gadgets Heaven is at the forefront of innovative warehouse automation technologies most applicable to creating and supporting a smart warehouse.</p>
            </div>
            <div className='my-5'>
                <h1 className="text-center text-xl xl:text-3xl font-semibold my-4"> REQUEST A QUICK QUOTE</h1>
                <form className="space-y-5" onSubmit={() => toast('Success')}>
                    <div>
                        <input type="text" className="py-3 px-5 outline-none border border-gray-800  w-full" aria-required="true" aria-invalid="false" required placeholder="First and Last Name" /></div>
                    <div className="">
                        <input type="email" className="py-3 px-5 outline-none border border-gray-800  w-full" aria-required="true" aria-invalid="false" required placeholder="E-mail address" />
                    </div>

                    <div className=""><input type="text" className="py-3 px-5 outline-none border border-gray-800  w-full" aria-invalid="false" required placeholder="Subject" /></div>
                    <div className=""><textarea className="py-3 px-5 outline-none border border-gray-800  w-full" required placeholder="Message"></textarea></div>

                    <Button btnText='Submit' classes='w-full ' />
                </form>
            </div>
        </div>
    )
}
