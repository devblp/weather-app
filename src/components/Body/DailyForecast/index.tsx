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
  const Dailys = data?.daily?.time?.map((e, index) => {
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

  const Loading = Array.from({ length: 7 }).map((_, index) => (
    <div key={index} className='flex flex-col justify-between items-center bg-[#262540] border-[#3C3B5E] border-[1px] w-full h-[165px] rounded-[13px] p-3'></div>
  ))

  return (
    <div className='mt-8'>
      <p className='pb-3 font-semibold text-2xl'>Daily forecast</p>
      <div className='flex gap-2 max-sm:overflow-x-scroll max-sm:scroll-smooth w-full custom-scrollbar snap-x snap-m '>
        {data ? Dailys : Loading}
      </div>
    </div>
  )
}
