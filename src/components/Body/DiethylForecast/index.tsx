import CardDiethylForecast from '@/components/ui/Cards/CardDiethylForecast';
import React from 'react'

export default function DiethylForecast() {
  return (
    <div className='flex max-sm:flex-wrap gap-6 max-sm:gap-2 w-full'>
      <CardDiethylForecast />
      <CardDiethylForecast />
      <CardDiethylForecast />
      <CardDiethylForecast />
    </div>
  )
}
