import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ img, title, desc, id }) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex items-center justify-center">
            <div className="border bg-white rounded-lg p-4 leading-normal flex md:items-center md:justify-center flex-col md:flow-row">
                <div className="md:h-80 md:w-80 w-30 h-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src={img} className='w-full h-full object-contain' alt="" />
                </div>
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{title.length > 20 ? title.slice(0, 30) + '...' : title}</div>
                    <p className="text-gray-700 text-base">{desc.length > 20 ? desc.slice(0, 120) + '...' : desc}</p>
                    <Link to={`/inventory/${id}`}>Show Details</Link>
                </div>
            </div>
        </div>
    )
}
