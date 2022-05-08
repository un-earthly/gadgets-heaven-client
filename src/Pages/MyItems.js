import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import InventoryItems from '../SharedAndUtils/InventoryItems'
import MySkeleton from '../SharedAndUtils/MySkeleton'

export default function MyItems() {

    const [pagesCount, setPagesCount] = useState(0)
    const [activePage, setActivePage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    const [loading, setLoading] = useState(true)
    const email = user.email
    useEffect(() => {
        const getOrders = async () => {
            const url = `https://guarded-shelf-11836.herokuapp.com/byemail?email=${email}&pageSize=${pageSize}&activePage=${activePage}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setLoading(false);
            setMyItems(data);
        }
        getOrders();
    }, [user, myItems, pageSize, activePage, email])

    useEffect(() => {
        axios.get(`https://guarded-shelf-11836.herokuapp.com/pageCountEmail?email=${email}`)
            .then(data => setPagesCount(Math.ceil(data.data.count / pageSize)))
    }, [pageSize, email])
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

            <div className='mx-auto flex flex-wrap space-y-2 items-center justify-center mt-6 space-x-2'>{
                [...Array(pagesCount).keys()].map(page => <button key={page} className={`px-2 border block border-red-500 ${activePage === page ? 'pageActive' : ''}`} onClick={() => { setActivePage(page) }}>{(page + 1)}</button>)

            }
                <select className='outline-none bg-red-500 py-1 px-1 text-white' onClick={e => setPageSize(e.target.value)}>
                    <option value='2'>2</option>
                    <option value='5'>5</option>
                    <option selected value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
                <div> <p>{pageSize} items per page</p></div>
            </div>
        </div>
    )
}
