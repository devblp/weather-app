import CardDiethylForecast from '@/components/ui/Cards/CardDiethylForecast';
import React from 'react'

interface Props {
  precipitation?: number;
  relative_humidity_2m?: number;
  wind_speed_10m?: number;
  temperature_2m?: number;
}

export default function DiethylForecast({ precipitation, relative_humidity_2m, wind_speed_10m, temperature_2m }: Props) {
  return (
    <div className='flex max-sm:flex-wrap gap-6 max-sm:gap-2 w-full'>
      <CardDiethylForecast title="Feels Like" value={`${Math.floor(Number(temperature_2m))}°`} />
      <CardDiethylForecast title="Humidity" value={`${relative_humidity_2m}%`} />
      <CardDiethylForecast title="Wind" value={`${Math.floor(Number(wind_speed_10m))} km/h`} />
      <CardDiethylForecast title="precipitation" value={`${precipitation} mm`} />
    </div>
  )
}
