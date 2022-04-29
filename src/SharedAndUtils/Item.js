import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Item({ img, title, desc, id }) {
    return (
        <div className="max-w-sm w-full h-full lg:flex items-center justify-center">
            <div className="border bg-white rounded-lg p-4 leading-normal flex md:items-center md:justify-center flex-col md:flow-row">
                <div className="md:h-80 md:w-80 w-30 h-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src={img} className='w-full h-full object-contain' alt="" />
                </div>
                <div className="mb-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title.length > 20 ? title.slice(0, 30) + '...' : title}</div>
                    <p className="text-gray-700 text-base">{desc.length > 20 ? desc.slice(0, 120) + '...' : desc}</p>
                    <Link to={`/inventory/${id}`}><Button classes='block w-full mt-4' btnText='Show Details'></Button></Link>
                </div>
            </div>
        </div>
    )
}
