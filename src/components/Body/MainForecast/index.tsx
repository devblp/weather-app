"use client"
import React, { useEffect, useState } from 'react'

interface IPdata {
  city: string;
  country_name: string
}

export default function MainForecast() {
  const [IPdata, setIPdata] = useState<IPdata>()
  useEffect(() => {
    (async () => {
      const res = await fetch("https://ipapi.co/json")
      const data = await res.json()
      setIPdata(data)
    })()
  }, [])
  return (
    <div className='flex max-sm:flex-col justify-between items-center bg-[#4658D9] rounded-[20px] w-full h-72 p-6'>
      <div className='flex max-sm:items-center flex-col gap-2'>
        <p className='text-[28px] font-bold'>{IPdata?.city}, {IPdata?.country_name}</p>
        <p className='text-[18px]'>Tuesday, Aug 5, 2025</p>
      </div>
      <div className='flex max-sm:items-center items-center gap-5'>
        <img src="/Sunny.png" alt="" />
        <p className='text-8xl '>20°</p>
      </div>
    </div>
  )
}
