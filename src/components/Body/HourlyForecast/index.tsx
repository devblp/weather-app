import BtnHourlyForecast from '@/components/ui/Buttons/BtnHourlyForecast'
import CardHourlyForecast from '@/components/ui/Cards/CardHourlyForecast'
import React from 'react'

export default function HourlyForecast() {
  return (
    <div className='w-full h-full bg-[#262540] rounded-[20px]'>
      <div className='flex flex-col gap-3 p-6'>
        <div className='flex justify-between items-center'>
          <div>
            <p>Hourly forecast</p>
          </div>
          <div>
            <BtnHourlyForecast />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <CardHourlyForecast />
          <CardHourlyForecast />
          <CardHourlyForecast />
          <CardHourlyForecast />
          <CardHourlyForecast />
          <CardHourlyForecast />
          <CardHourlyForecast />
        </div>
      </div>
    </div>
  )
}
