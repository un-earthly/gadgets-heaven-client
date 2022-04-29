import React from 'react'
import useItems from '../Hooks/useItems'
import Item from '../SharedAndUtils/Item'
export default function Home() {
    const [items] = useItems()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>{
            items.map(item => <Item key={item._id} img={item.img1} />)
        }</div>
    )
}
