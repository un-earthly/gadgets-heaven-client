import React from 'react'
import Button from '../SharedAndUtils/Button'

export default function Contact() {
    return (
        <form className="md:w-1/2 mt-4 rounded-md mx-auto shadow-md p-5">
            <div className="w-full mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-800  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <Button btnText='Send' classes='block w-full' />
            </div>
        </form>
    )
}
