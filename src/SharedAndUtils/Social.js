import axios from 'axios'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'

export default function Social() {
    const [SignInWithGoogle, user] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname
    if (user) {
        const email = user.user.email
        axios.post('https://guarded-shelf-11836.herokuapp.com/login', { email })
            .then(res => localStorage.setItem('token', res.data.token))
        navigate(from || '/', { replace: true })
    }
    return (
        <div>

            <div className="flex justify-between items-center mt-3">
                <hr className="w-full" />
                <span className="p-2 text-gray-400 mb-1">OR</span>
                <hr className="w-full" />
            </div>
            <button onClick={() => SignInWithGoogle()} className="uppercase h-12 mt-3 text-white w-full rounded duration-500 bg-cyan-800 hover:bg-cyan-900">
                <i className="bi bi-google mr-2">
                </i>
            </button>
        </div>
    )
}
