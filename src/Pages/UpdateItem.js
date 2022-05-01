import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';
import Button from '../SharedAndUtils/Button';

export default function UpdateItem() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axios.put(`https://guarded-shelf-11836.herokuapp.com/update/${id}`, data)
      .then(res => console.log(res))
  }
  const { id } = useParams()
  const [item] = useItemDetails(id)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className='bg-white shadow-md w-full sm:w-3/4 mx-auto rounded px-8 pt-16 pb-8 xl:mb-4 space-y-7 xl:mt-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl text-center">Update Item</h1>
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
              id="price" type="text" placeholder="Price" {...register("price", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="dist">
            <span>Distributor</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dist" type="text" placeholder="Distributor" {...register("dist", { required: true })} />
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
              id="quantity" type="text" placeholder="Quantity" {...register("quantity", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="target">
            <span>Target</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="target" type="text" placeholder="Target" {...register("target", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="sold">
            <span> Sold</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sold" type="text" placeholder="Sold All Time" {...register("sold", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="lastmonthsold">
            <span>Lastmonth Sold</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastmonthsold" type="text" placeholder="Lastmonth Sold" {...register("lastmonthsold", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="ratings">
            <span>Ratings</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ratings" type="text" placeholder="Ratings" {...register("ratings", { required: true })} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="platform">
            <span>Platform</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="platform" type="text" placeholder="Platform" {...register("platform", { required: true })} />
          </label>
          <Button classes='w-full mt-4' btnText='Submit' />
        </form>
      </div>
      <div className='bg-white shadow-md w-full sm:w-3/4 mx-auto rounded px-8 pt-16 pb-8 xl:mb-4 space-y-7 xl:mt-16'>
        <div>
          <h1 className="text-4xl text-center">Previously..</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="title">
            <span>Title</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" value={item.title} />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="img">
            <span>Image URL</span>
            <input
              value={item.img1}
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
            <input
              value={item.img2}
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
            <input
              value={item.img3}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3">
            <span>Description</span>
            <input
              value={item.desc}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3">
            <span>Brand</span>
            <input
              value={item.brand}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3">
            <span>Price</span>
            <input
              value={item.price}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" >
            <span>Distributor</span>
            <input
              value={item.dist}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3">
            <span>Category</span>
            <input
              value={item.category}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category" type="text" placeholder="Category" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" >
            <span>Supplier</span>
            <input
              value={item.supplier}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="quantity">
            <span>Quantity</span>
            <input
              value={item.quantity}

              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="target">
            <span>Target</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.target}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="sold">
            <span> Sold</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.sold}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="lastmonthsold">
            <span>Lastmonth Sold</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.lastmonthsold}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="ratings">
            <span>Ratings</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.ratings}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="platform">
            <span>Platform</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.platform}
            />
          </label>
          <Button classes='w-full mt-4' btnText='Submit' />
        </div>
      </div>
    </div>
  )
}
