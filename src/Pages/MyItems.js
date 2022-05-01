import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import InventoryItems from '../SharedAndUtils/InventoryItems'

export default function MyItems() {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://guarded-shelf-11836.herokuapp.com/byemail?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:gap-10 xl:p-7">
                {
                    myItems.map(item => <InventoryItems key={item._id} itemData={item} />)
                }
            </div>
        </div>
    )
}
