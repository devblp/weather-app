import CardDailyForecast from '@/components/ui/Cards/CardDailyForecast'
import React from 'react'

interface Data {
  daily: {
    temperature_2m_max: string[];
    temperature_2m_min: string[];
    time: string[];
    weather_code: string[];
  }
}


interface Props {
  data: Data | undefined;
}

export default function DailyForecast({ data }: Props) {
  const Dailys = data?.daily.time.map((e, index) => {
    const date = new Date(e)
    const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

    return <CardDailyForecast
      key={index}
      day={dayName}
      max={data.daily.temperature_2m_max[index]}
      min={data.daily.temperature_2m_min[index]}
      code={data.daily.weather_code[index]}
    />
  })
  return (
    <div className='flex flex-wrap gap-2.5'>
      {Dailys}
    </div>
  )
}
