import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../Hooks/useItems'
import Button from '../SharedAndUtils/Button'
import Item from '../SharedAndUtils/Item'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import HomeBanner from '../SharedAndUtils/HomeBanner'
import Review from '../SharedAndUtils/Review'
import AboutUs from './AboutUs'
export default function Home() {
    const [items, loading] = useItems()
    return (
        <div>
            <HomeBanner />
            <div>
                <h1 className="text-xl xl:text-4xl border-b-red-500 border-b-4 text-red-600 w-3/4 mx-auto text-center my-5 mt-10 font-semibold">Some Of Our Products</h1>
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
                            : items.slice(0, 6).map(item => <Item key={item._id} title={item.title} quantity={item.quantity} supplier={item.supplier} desc={item.desc} id={item._id} img={item.img1} />)
                    }
                </div>
                <Link to='/inventory'><Button classes='w-1/2 mt-5 text-gray-50 bg-gray-800' btnText='Manage Inventories'></Button></Link>
            </div>

            <AboutUs />
            <Review />
        </div>
    )
}
