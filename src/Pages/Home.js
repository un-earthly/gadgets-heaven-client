import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../Hooks/useItems'
import Item from '../SharedAndUtils/Item'
export default function Home() {
    const [items] = useItems()
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:p-10'>{
                items.slice(0, 6).map(item => <Item key={item._id} title={item.title} desc={item.desc} id={item._id} img={item.img1} />)
            }

            </div>
            <Link to='/inventory'><button>Show All</button></Link>
        </>
    )
}
