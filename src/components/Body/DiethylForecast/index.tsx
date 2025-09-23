import CardDiethylForecast from '@/components/ui/Cards/CardDiethylForecast';
import React from 'react'

interface Units {
  temperature: {
    c: boolean;
    f: boolean;
  };
  windSpeed: {
    kmh: boolean;
    mph: boolean;
  };
  precipitation: {
    mm: boolean;
    in: boolean;
  }
}

interface Props {
  precipitation?: number;
  relative_humidity_2m?: number;
  wind_speed_10m?: number;
  temperature_2m?: number;
  units: Units
}

export default function DiethylForecast({ precipitation, relative_humidity_2m, wind_speed_10m, temperature_2m, units }: Props) {
  return (
    <div className='flex max-sm:flex-wrap gap-5 max-sm:gap-2 w-full max-sm:mt-7'>
      <CardDiethylForecast title="Feels Like" value={`${temperature_2m ? `${Math.floor(Number(temperature_2m))}°` : `_`}`} />
      <CardDiethylForecast title="Humidity" value={`${relative_humidity_2m ? `${relative_humidity_2m}%` : `_`}`} />
      <CardDiethylForecast title="Wind" value={`${wind_speed_10m ? `${Math.floor(Number(wind_speed_10m))} ${units.windSpeed.mph ? "mph" : "km/h"}` : `_`}`} />
      <CardDiethylForecast title="precipitation" value={`${precipitation ? `${precipitation} ${units.precipitation.in ? "in" : "mm"}` : precipitation === 0 ? `${precipitation} ${units.precipitation.in ? "in" : "mm"}` : `_`}`} />
    </div>
  )
}
