import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (

        <footer className="p-4 bg-white mt-10 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022  <a href="https://github.com/un-earthly" className="hover:underline">Alamin</a><br /> All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <Link className='mr-4 hover:text-gray-200 md:mr-6 duration-500' to='/'>
                    About
                </Link>
                <Link className='mr-4 hover:text-gray-200 md:mr-6 duration-500' to='/'>
                    Privacy Policy
                </Link>
                <Link className='mr-4 hover:text-gray-200 md:mr-6 duration-500' to='/'>
                    Licensing

                </Link>
                <Link className='mr-4 hover:text-gray-200 md:mr-6 duration-500' to='/'>
                    Contact
                </Link>
            </ul>
        </footer>

    )
}
