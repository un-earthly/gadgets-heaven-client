import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useItemDetails from '../Hooks/useItemDetails'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useForm } from 'react-hook-form';
import Button from './Button';
import handleDelivary from '../Hooks/useDeliveryBtn';
import axios from 'axios';
import { SERVER_URL } from './urls';
export default function ItemsDetail() {
    const { id } = useParams()
    const [item] = useItemDetails(id)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.put(`${SERVER_URL}/addquanity/${id}`, { quantity: data.quantity })
    };
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">

                        <Carousel interval='1500' showThumbs={false} autoPlay={true} showIndicators={false} infiniteLoop={true} showStatus={false} >
                            <div>
                                <img className='object-cover' src={item.img1} alt='' />
                            </div>
                            <div>
                                <img className='object-cover' src={item.img3} alt='' />
                            </div>
                            <div>
                                <img className='object-cover' src={item.img2} alt='' />
                            </div>
                        </Carousel>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">{item.brand}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{item.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                Ratings: <span className="text-gray-600 ml-3">{item.ratings}</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">{item.desc}</p>

                        <p>Quantity In Stock: {item.quantity}</p>
                        <p>Supplier: {item.supplier}</p>
                        <p>Distributor: {item.distributor}</p>
                        <p>Target Per Month: {item.target}</p>
                        <p>Sold All Times: {item.sold}</p>
                        <p>Sold in Last Month: {item.lastMonthSold || item.target}</p>
                        <p>Platform: {item.platform}</p>
                        <p>Category: {item.category}</p>
                        <div className="flex">
                            <p className="title-font font-medium text-2xl text-gray-900">{item.price}</p>
                            <button onClick={() => handleDelivary(item._id)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delivered</button>
                        </div>
                        <form className='mt-6 flex items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                            <input className="shadow appearance-none border border-gray-800 border-r-transparent rounded-r-none rounded py-2 md:text-xl md:px-3 px-1 text-gray-700 leading-tight sm:flex-grow focus:outline-none focus:shadow-outline" type="number"{...register("quantity")} placeholder='Please Re stock amount' />
                            <Button classes='block md:text-xl px-2 py-1 rounded-l-none' btnText='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
