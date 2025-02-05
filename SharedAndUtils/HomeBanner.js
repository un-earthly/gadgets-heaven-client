import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function HomeBanner() {
    return (
        <div className='md:px-24 min-h-[90vh] bg-white'>
            <div className="flex items-center justify-center flex-col lg:flex-row p-4">
                <div className='space-y-6'>
                    <h1 className="md:text-3xl text-xl font-semibold"> Welcome To Gadgets <span className="text-5xl md:text-8xl">Heaven</span></h1>
                    <p>We Are a current most trusted and quality Gadgets importes.we established and serving people for a decade now. Do You have a plan to become a retailer or supplier of quality gadgets?</p>
                    <Link href='/contact'><Button>Lets Have A Chat</Button></Link>
                </div>
                <img src="https://img.freepik.com/free-vector/logistics-concept-illustration_114360-1561.jpg?t=st=1651324289~exp=1651324889~hmac=db3d6ef750d2e042027918966f1dba6edcd10895e7e79432d9a90a45bdf9bd35&w=740" alt="" />
            </div>

        </div>
    )
}
