import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../Hooks/useItems'
import Button from '../SharedAndUtils/Button'
import Item from '../SharedAndUtils/Item'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import HomeBanner from '../SharedAndUtils/HomeBanner'
export default function Home() {
    const [items, loading] = useItems()
    return (
        <div>
            <HomeBanner />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:p-10'>
                {
                    loading ?
                        <SkeletonTheme baseColor="#ccc" highlightColor="#eee">
                            <MySkeleton />
                            <MySkeleton />
                            <MySkeleton />
                            <MySkeleton />
                            <MySkeleton />
                            <MySkeleton />
                        </SkeletonTheme>
                        : items.slice(0, 6).map(item => <Item key={item._id} title={item.title} desc={item.desc} id={item._id} img={item.img1} />)
                }
            </div>
            <Link to='/inventory'><Button classes='w-1/2' btnText='Show All'></Button></Link>
        </div>
    )
}
