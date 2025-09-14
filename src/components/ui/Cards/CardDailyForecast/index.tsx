import React from 'react'

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function CardDailyForecast() {
  return (
    <div className='flex flex-col justify-between items-center bg-[#262540] w-full h-[165px] rounded-[13px] mt-8 p-3'>
      <div>
        <p className='text-[18px]'>Tue</p>
      </div>
      <div>
        <img src="Sunny.png" alt="" />
      </div>
      <div className='flex gap-5'>
        <div>
          <p className='text-[16px] font-bold'>18°</p>
        </div>
        <div>
          <p className='text-[16px]'>18°</p>
        </div>
      </div>
    </div>
  )
}
