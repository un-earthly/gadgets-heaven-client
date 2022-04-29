import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MySkeleton() {
    return (
        <div>
            <Skeleton count={1} height={250} />
            <Skeleton count={1} height={40} />
            <Skeleton count={1} height={105} />
            <Skeleton count={1} height={65} />

        </div>
    )
}
