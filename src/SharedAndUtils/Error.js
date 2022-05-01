import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className='flex items-center justify-center flex-col mt-14'>

            <h1 className="text-4xl text-red-600 p-14 font-semibold">
                Sorry Could'nt Find What You're looking for
            </h1>
            <img src="favicon.png" className='animate-spin' style={{ animationDuration: '5s' }} alt="" />
            <Link className='border rounded-full px-4 py-2 border-gray-700' to='/'>Back To Home</Link>
        </div>
    )
}
