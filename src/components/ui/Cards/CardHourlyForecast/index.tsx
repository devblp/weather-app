import React from 'react'

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function CardHourlyForecast() {
  return (
    <div className='flex justify-between items-center w-full h-14 bg-[#302F4A] rounded-[10px] p-4'>
      <div className='flex items-center gap-3'>
        <div>
          <img src="Sunny.png" alt="" className='w-5' />
        </div>
        <div>
          <p>3 PM</p>
        </div>
      </div>
      <div>
        <p>20°</p>
      </div>
    </div>
  )
}
