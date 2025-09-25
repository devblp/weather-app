import React from 'react'
import BtnRetry from '../ui/Buttons/BtnRefresh'

export default function APIerror() {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256">
                    <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z"></path>
                </svg>
            </div>
            <div>
                <p className='text-[52px] max-sm:text-[42px] text-center'>Something went wrong</p>
            </div>
            <div className='text-center w-[60%] max-sm:w-full'>
                <p className='text-[#D4D3D9] text-[20px]'>We couldn’t connect to the server (API error). Please try again in a few moments.</p>
            </div>
            <div>
                <BtnRetry />
            </div>
        </div>
    )
}
