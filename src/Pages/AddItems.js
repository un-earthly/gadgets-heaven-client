import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Button from '../SharedAndUtils/Button';
import { SERVER_URL } from '../SharedAndUtils/urls';

export default function AddItems() {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const onSubmit = data => {
        axios.post(`${SERVER_URL}/additem`, data)
            .then(res => {
                res.data && navigate('/myitems')
            })
    };
    return (
        <div className='bg-white shadow-md md:w-1/2 sm:w-3/4 mx-auto rounded px-8 pt-16 pb-8 xl:mb-4 space-y-7 xl:mt-16'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl text-center">Add Items</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="email">
                    <span>Email</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" value={user.email} {...register("email")} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="title">
                    <span>Title</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text" placeholder="Title" {...register("title", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="img">
                    <span>Image URL</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="img1" type="text" placeholder="Image URL" {...register("img1", { required: true })} />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="img2" type="text" placeholder="Image URL" {...register("img2", { required: true })} />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="img3" type="text" placeholder="Image URL" {...register("img3", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="desc">
                    <span>Description</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="desc" type="text" placeholder="Description" {...register("desc", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="brand">
                    <span>Brand</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="brand" type="text" placeholder="Brand" {...register("brand", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="price">
                    <span>Price</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price" type="number" placeholder="Price" {...register("price", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="dist">
                    <span>Distributor</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="dist" type="text" placeholder="Distributor" {...register("distributor", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="category">
                    <span>Category</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category" type="text" placeholder="Category" {...register("category", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="supplier">
                    <span>Supplier</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="supplier" type="text" placeholder="Supplier" {...register("supplier", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="quantity">
                    <span>Quantity</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity" type="number" placeholder="Quantity" {...register("quantity", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="target">
                    <span>Target</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="target" type="number" placeholder="Target" {...register("target", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="sold">
                    <span> Sold</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sold" type="number" placeholder="Sold All Time" {...register("sold", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="lastMonthSold">
                    <span>Lastmonth Sold</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastMonthSold" type="number" placeholder="Lastmonth Sold" {...register("lastMonthSold", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="ratings">
                    <span>Ratings</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ratings" type="number" placeholder="Ratings" {...register("ratings", { required: true })} />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="platform">
                    <span>Platform</span>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="platform" type="text" placeholder="Platform" {...register("platform", { required: true })} />
                </label>
                <Button btnText='Submit' />
            </form>
        </div>
    )
}
