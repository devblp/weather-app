import React from 'react'

interface Props {
  title: string;
  value: string;
}

export default function CardDiethylForecast({ title, value }: Props) {
  return (
    <div className='flex flex-col justify-between bg-[#262540] border-[#3C3B5E] border-[1px] w-full max-sm:w-[48%] h-[118px] rounded-[13px] mt-8 p-4'>
      <div>
        <p className='text-[18px]'>{title}</p>
      </div>
      <div>
        <p className='text-[32px]'>{value}</p>
      </div>
    </div>
  )
}
