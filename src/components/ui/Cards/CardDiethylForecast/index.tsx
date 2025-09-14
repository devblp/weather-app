import React from 'react'

interface Props {
  title: string;
  description: string;
}

export default function CardDiethylForecast() {
  return (
    <div className='flex flex-col justify-between bg-[#262540] w-full h-[118px] rounded-[13px] mt-8 p-4'>
      <div>
        <p className='text-[18px]'>Feels Like</p>
      </div>
      <div>
        <p className='text-[32px]'>18°</p>
      </div>
    </div>
  )
}
