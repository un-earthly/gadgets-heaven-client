import React from 'react'

export default function Button({ btnText, classes, handler }) {
    return (
        <button onClick={handler} className={`${classes} border hover:bg-gray-900 duration-500 rounded border-gray-700 text-center md:px-4 md:py-2 hover:text-white block py-1 px-2 mx-auto`}>{btnText}</button>
    )
}
