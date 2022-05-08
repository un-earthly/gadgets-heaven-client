import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import InventoryItems from '../SharedAndUtils/InventoryItems'
import MySkeleton from '../SharedAndUtils/MySkeleton'

export default function MyItems() {

    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://guarded-shelf-11836.herokuapp.com/byemail?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setLoading(false)
            setMyItems(data);
        }
        getOrders();
    }, [user, myItems])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:gap-10 xl:p-7">

                {
                    loading ? <>
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                        <MySkeleton />
                    </>
                        :
                        myItems.map(item => <InventoryItems key={item._id} itemData={item} />)
                }
            </div>
        </div>
    )
}
