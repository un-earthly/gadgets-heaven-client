import React from 'react'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import InventoryItems from '../SharedAndUtils/InventoryItems'
import useItems from '../Hooks/useItems'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import Button from '../SharedAndUtils/Button'
export default function Inventory() {
  const [items, loading] = useItems()

  return (
    loading ? <SkeletonTheme baseColor='black' highlightColor='darkgray'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:p-4 mx-auto'>
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
        <MySkeleton />
      </div>
    </SkeletonTheme>
      :
      <>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-10 xl:p-7">
          {
            items.map(item => <InventoryItems itemData={item} />)
          }
        </div>
        <Link to='/additems'><Button btnText='Add Items' classes='w-1/2' /></Link>
      </>
  )
}
