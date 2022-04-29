import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [user, Loading] = useAuthState(auth)
    return (
        <header className='p-4 container mx-auto'>
            <nav className='hidden md:flex items-center justify-between'>
                <Link to='/'><h1 style={{ fontFamily: 'Lavishly Yours' }} className="text-5xl text-gray-900 font-semibold tracking-wide">Gadgets Heaven</h1></Link>
                <ul className='flex items-center justify-center space-x-4'>
                    <Link to='/inventory'><h2 className="text-xl">Inventory</h2></Link>


                    {
                        user ? <>
                            <Button onClick={() => signOut(auth)} btnText='Login' />
                        </> : <>
                            <Link to='/login'><Button btnText='Login' /></Link>
                            <Link to='/register'><Button btnText='Register' classes='bg-slate-800 text-white hover:bg-transparent hover:text-gray-800' /></Link>
                        </>
                    }
                </ul>
            </nav>

            <nav>
                <div className="md:hidden flex items-center justify-around">
                    <Link to='/'><h3 style={{ fontFamily: 'Lavishly Yours' }} className="text-2xl">Gadgest Heaven</h3></Link>
                    <i onClick={() => setOpen(!open)} className='bi bi-list text-gray-900'></i>
                </div>
                <ul className={`${open ? 'flex' : 'hidden'} flex-col justify-center items-center`}>
                    <Link to='/inventory'>Inventory</Link>
                    <Link to='/myorder'>My Orders</Link>
                    <Link to='/blogs'>Blogs</Link>
                </ul>
            </nav>
        </ header >
    )
}
