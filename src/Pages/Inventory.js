import React, { useEffect, useState } from 'react'
import MySkeleton from '../SharedAndUtils/MySkeleton'
import InventoryItems from '../SharedAndUtils/InventoryItems'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import Button from '../SharedAndUtils/Button'
import axios from 'axios'
import { SERVER_URL } from '../SharedAndUtils/urls'
export default function Inventory() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagesCount, setPagesCount] = useState(0)
  const [activePage, setActivePage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  useEffect(() => {
    axios.get(`${SERVER_URL}/product/list?pageSize=${pageSize}&activePage=${activePage}`)
      .then(res => {
        setItems(res.data.data)
        setLoading(false)
      })
  }, [items, activePage, pageSize])
  useEffect(() => {
    axios.get(`${SERVER_URL}/utility/page_count`)
      .then(res => setPagesCount(Math.ceil(res.data.data / pageSize)))
  }, [pageSize])
  return (
    loading ? <SkeletonTheme baseColor="#ccc" highlightColor="#eee">

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:p-4 mx-auto'>
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
            items.map(item => <InventoryItems key={item._id} itemData={item} />)
          }
        </div>
        <Link to='/additems'><Button btnText='Add New Item' classes='w-1/2 mt-5' /></Link>
        <div className='mx-auto flex items-center justify-center mt-6 space-x-2'>{
          [...Array(pagesCount).keys()].map(page => <button
            key={page}
            className={`px-2 border block border-red-500 ${activePage === page ? 'pageActive' : ''}`}
            onClick={() => { setActivePage(page) }}
          >
            {(page + 1)}
          </button>)

        }
          <select className='outline-none bg-red-500 py-1 px-1 text-white' onClick={e => setPageSize(e.target.value)}>
            <option selected value='20'>20</option>
            <option value='10'>10</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
          <div> <p>{pageSize} items per page</p></div>
        </div>
      </>
  )
}
