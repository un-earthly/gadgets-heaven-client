import React from 'react'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import Experiment from '../SharedAndUtils/Experiment'
import useItems from '../Hooks/useItems'
import { SkeletonTheme } from 'react-loading-skeleton'
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-10 xl:p-7">
        {
          items.map(item => <Experiment itemData={item} />)
        }

      </div>
  )
}
