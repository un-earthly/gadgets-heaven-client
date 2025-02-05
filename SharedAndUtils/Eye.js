import React from 'react'

export default function Eye({ handler, show }) {
    return (
        <p onClick={handler}>Show Password <i className={`bi mx-1 bi-${show ? 'eye-slash' : 'eye'}`}>
        </i></p>
    )
}
