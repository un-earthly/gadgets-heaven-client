import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useShowPass from '../Hooks/useShowPass';
import Button from '../SharedAndUtils/Button';
import Eye from '../SharedAndUtils/Eye';
import Social from '../SharedAndUtils/Social';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  const [show, setToggle] = useShowPass()
  return (
    <div className='bg-white shadow-md md:w-1/2 w-3/4 mx-auto rounded px-8 pt-16 pb-8 mb-4 space-y-7 mt-16'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-center">Login Now</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="email">
          <span>Email</span>
          <input className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" {...register("email", { required: true })} />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="password">
          <span>Password</span>
          <input className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type={show ? 'text' : 'password'} placeholder="Password" {...register("password", { required: true })} />
        </label>
        <p>
          <Link to='/register'>New Here? Register Now!!</Link>
        </p>
        <p>
          <Eye show={show} handler={setToggle} />
        </p>
        <p>{error?.message}</p>
        <Button btnText='Submit' />
      </form>
      <Social />
    </div>
  )
}
