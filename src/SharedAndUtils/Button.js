import React from 'react'

export default function Button({ btnText, classes }) {
    return (
        <button className={`${classes} border hover:bg-gray-900 duration-500 rounded border-gray-700 text-center px-4 py-2 hover:text-white block mx-auto`}>{btnText}</button>
    )
}
