"use client"
import React, { useState } from 'react'

export default function SearchBar() {
  const [searche, setSearche] = useState("")
  const [items, setItesm] = useState([])
  return (
    <div className=' '>
      <div className='flex max-sm:flex-col justify-center items-center gap-4 pb-12'>
        {/* box serche */}
        <div className='relative w-2/5 max-lg:w-full'>
          <input value={searche} onChange={(e) => setSearche(e.target.value)} type="text" name="" id="" placeholder='Search for a place...' className='bg-[#262540] h-14 w-full rounded-[10px] px-10' />
          <div className='absolute top-1/2 left-5 -translate-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <div className={`absolute duration-200  ${searche ? `opacity-100 translate-y-0` : `opacity-0 translate-y-7`} left-0 top-18 w-full h-fit bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[14px]`}>
            <ul>
              {items.map((e, index) => (
                <li className={`flex justify-between py-2 hover:bg-[#302F4A] active::bg-red-500 w-full h-fit px-3 rounded-[10px]`} key={index}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* serch btn */}
        <div className='max-sm:w-full'>
          <button type="submit" className='bg-[#4658D9] w-24 max-sm:w-full h-14 rounded-[10px] active:bg-[#4658D9]/50 text-[15px]'>
            Search
          </button>
        </div>

      </div>

    </div>
  )
}
