import CardDailyForecast from '@/components/ui/Cards/CardDailyForecast'
import React from 'react'

export default function DailyForecast() {
  return (
    <div className='flex flex-wrap gap-2.5'>
      <CardDailyForecast />
      <CardDailyForecast />
      <CardDailyForecast />
      <CardDailyForecast />
      <CardDailyForecast />
      <CardDailyForecast />
      <CardDailyForecast />
    </div>
  )
}
