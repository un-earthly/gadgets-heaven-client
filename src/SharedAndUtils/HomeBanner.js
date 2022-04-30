import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function HomeBanner() {
    return (
        <div className='p-6 px-24 bg-white'>
            <div className="min-h-screen flex items-center justify-center">
                <div className='space-y-6'>
                    <h1 className="text-4xl font-semibold"> Welcome To Gadgets Heaven</h1>
                    <p>We Are a current most trusted and quality Gadgets importes.we established and serving people for a decade now. Do You have a plan to become a retailer or supplier of quality gadgets?</p>
                    <Link to='/contact'><Button btnText='Lets Have A Chat' classes="border-cyan-400 hover:bg-cyan-400 text-cyan-400 w-3/4 ml-auto inline mt-5" /></Link>
                </div>
                <img src="https://img.freepik.com/free-vector/logistics-concept-illustration_114360-1561.jpg?t=st=1651324289~exp=1651324889~hmac=db3d6ef750d2e042027918966f1dba6edcd10895e7e79432d9a90a45bdf9bd35&w=740" alt="" />
            </div>

        </div>
    )
}
