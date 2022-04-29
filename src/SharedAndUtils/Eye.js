import React, { useState } from 'react'

export default function Eye({ handler, show }) {
    return (
        <i onClick={handler} className={`bi bi-${show ? 'eye-slash' : 'eye'}`}>Show Password</i>
    )
}
