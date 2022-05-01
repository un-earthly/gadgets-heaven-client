import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toast'
import Button from './Button'


export default function InventoryItems({ itemData }) {
    const deleteHandler = id => {
        const confirm = window.confirm('Are You Sure?')
        confirm && axios.delete(`https://guarded-shelf-11836.herokuapp.com/delete/${id}`).
            then(
                res => toast('deleted', res.id, 'success'))
    }
    const handleDelivary = id => {

        console.log(id)
        axios.put(`https://guarded-shelf-11836.herokuapp.com/${id}`)
            .then(res => {
                console.log(res.data)
            })


    }
    return (
        <div className="bg-gray-50 text-gray-900 h-[600px] flex rounded-lg relative p-4">

            <div className="h-3/4 absolute top-1/2 -translate-y-1/2 w-1/2 right-0 rounded-xl hidden lg:flex items-center justify-center">
                <img src={itemData.img1} className='h-80' alt="" />
            </div>
            <div className='space-y-4'>
                <div>
                    <p className="text-sm capitalize">{itemData.brand}</p>
                    <h1 className="text-xl font-semibold capitalize">{itemData.title.slice(0, 20) + '...'}</h1>
                    <p className="text-sm">Product Code:{itemData._id}</p>
                </div>
                <p className="text-orange-600 text-xl flex items-center"> Price : <span className='text-4xl font-semibold'> {itemData.price}</span> </p>

                <div>

                    <p className='capitalize'>Distributor: {itemData.distributor}</p>
                    <p className='capitalize'>Supplier: {itemData.supplier}</p>
                    <p className='capitalize'>In Stock: {itemData.quantity} pcs</p>
                </div>

                <div>

                    <p className='capitalize'>overall sold: {itemData.sold} pcs</p>
                    <p className='capitalize'>last Month Sold: {itemData.lastMonthSold} pcs</p>
                    <p className='capitalize'> target for month: {itemData.target}</p>
                </div>
                <div>
                    <p className='capitalize'>Platform / Used For: {itemData.platform}</p>
                    <p className='capitalize'>Category : {itemData.category}</p>
                </div>

                <div >
                    <div className='flex space-x-5'>
                        <Button classes="block w-full" btnText='Delivered' handler={() => handleDelivary(itemData._id)} />
                        <Button handler={() => deleteHandler(itemData._id)} classes="block w-full" btnText='Delete' />
                    </div>
                    <div className='flex space-x-5 mt-4 '>
                        <Link to={`/update/${itemData._id}`}><Button classes='block w-full' btnText='Update'></Button></Link>
                        <Link to={`/inventory/${itemData._id}`}><Button classes='block w-full' btnText='Show Details'></Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
