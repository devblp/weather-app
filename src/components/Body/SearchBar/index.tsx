import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex max-sm:flex-col justify-center items-center gap-4 pb-12'>
      {/* box serche */}
      <div className='relative w-2/5 max-lg:w-full'>
        <input type="text" name="" id="" placeholder='Search for a place...' className='bg-[#262540] h-14 w-full rounded-[10px] px-10' />
        <div className='absolute top-1/2 left-5 -translate-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
      </div>
      {/* serch btn */}
      <div className='max-sm:w-full'>
        <button type="submit" className='bg-[#4658D9] w-24 max-sm:w-full h-14 rounded-[10px] active:bg-[#4658D9]/50 text-[15px]'>
          Search
        </button>
      </div>
    </div>
  )
}
