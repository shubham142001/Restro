import React from 'react'
import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[550px] bg-white'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#ff073a"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}
