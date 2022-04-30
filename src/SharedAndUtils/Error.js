import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className='flex items-center justify-center flex-col mt-14'>

            <h1 className="text-4xl text-red-600 p-14">
                Sorry Cant Found What You're looking for
            </h1>
            <img src="https://i.pinimg.com/originals/49/e9/d6/49e9d662d2f99e8d945c8b21bd2cde85.gif" alt="" />
            <Link className='border rounded-full px-4 py-2 border-gray-700' to='/'>Back To Home</Link>
        </div>
    )
}
