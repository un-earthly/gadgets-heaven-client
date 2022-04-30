import React from 'react'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import Item from '../SharedAndUtils/Item'
import useItems from '../Hooks/useItems'
import { SkeletonTheme } from 'react-loading-skeleton'
export default function Inventory() {
  const [items, loading] = useItems()

  return (
    loading ? <SkeletonTheme baseColor='black' highlightColor='darkgray'>
      <div className='grid  grid-cols-1 md:grid-cols-3 gap-8'>
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
      </div>
    </SkeletonTheme> :
      <div className='grid grid-cols-1 md:grid-cols-3  mx-auto'>{

        items.map(item => <Item img={item.img1} desc={item.desc} title={item.title} id={item._id} key={item._id} />)
      }</div>
  )
}
