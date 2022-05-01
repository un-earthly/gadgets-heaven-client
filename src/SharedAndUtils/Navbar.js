import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)
    return (
        <header className='p-4 xl:px-24 mx-auto bg-white sticky top-0 z-50'>
            <nav className='hidden md:flex items-center justify-between'>
                <Link to='/'><h1 className="text-3xl text-gray-900 font-semibold tracking-wide">Gadgets Heaven</h1></Link>
                <ul className='flex items-center justify-center space-x-4'>
                    <NavLink to='/home'><h2>Home</h2></NavLink>
                    <NavLink to='/blogs'><h2>Blogs</h2></NavLink>



                    {
                        user ? <>
                            <NavLink to='/inventory'> Manage Items</NavLink>
                            <NavLink to='/additems'>Add Items</NavLink>
                            <NavLink to='/myitems'>My items</NavLink>
                            <Button handler={() => signOut(auth)} classes='bg-red-500 border-transparent text-gray-200' btnText='Sign Out' />
                        </> : <>
                            <Link to='/login'><Button btnText='Login' /></Link>
                            <Link to='/register'><Button btnText='Register' classes='bg-slate-800 text-white hover:bg-transparent hover:text-gray-800' /></Link>
                        </>
                    }
                </ul>
            </nav>

            <nav>
                <div className="md:hidden flex items-center justify-around">

                    <Link to='/'><h1 className="text-xl text-gray-900 font-semibold tracking-wide">Gadgets Heaven</h1></Link>
                    <i onClick={() => setOpen(!open)} className='bi bi-list text-gray-900'></i>
                </div>
                <ul className={`${open ? 'flex' : 'hidden'} flex-col justify-center items-center`}>
                    <NavLink to='/blogs'>Blogs</NavLink>

                    {
                        user ? <>
                            <NavLink to='/inventory'> Manage Items</NavLink>
                            <NavLink to='/additems'>Add Items</NavLink>
                            <NavLink to='/myitems'>My items</NavLink>
                            <Button handler={() => signOut(auth)} classes='bg-red-500 border-transparent text-gray-200' btnText='Sign Out' />
                        </> : <>
                            <Link to='/login'><Button btnText='Login' /></Link>
                            <Link to='/register'><Button btnText='Register' classes='bg-slate-800 text-white hover:bg-transparent hover:text-gray-800' /></Link>
                        </>
                    }
                </ul>
            </nav>
        </ header >
    )
}
