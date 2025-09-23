import BtnHourlyForecast from '@/components/ui/Buttons/BtnHourlyForecast'
import CardHourlyForecast from '@/components/ui/Cards/CardHourlyForecast'
import { time } from 'console';
import React, { useState } from 'react'

interface Data {
  daily: {
    time: string[];
  };
  hourly: {
    temperature_2m: string[];
    time: string[];
    weather_code: string[];
  }
}

interface Props {
  data: Data | undefined
}

export default function HourlyForecast({ data }: Props) {
  const [numDay, setNumDay] = useState<Number>(0)
  const Hourly = data?.hourly?.time?.map((e, index) => {

    const dateDailyTime = new Date(data.daily.time[Number(numDay)]).toDateString()
    const datehourlyTime = new Date(e).toDateString()
    if (dateDailyTime === datehourlyTime) {
      const hour = new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(new Date(e))
      const temperature = data.hourly.temperature_2m[index]
      const code = data.hourly.weather_code[index]
      return <CardHourlyForecast key={index} hour={hour} temperature={temperature} code={Number(code)} />
    }
  })
  const loading = Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className='flex justify-between items-center w-full h-14 bg-[#302F4A] border-[#3C3B5E] border-[1px] rounded-[10px] p-4'></div>
  ))
  return (
    <div className='w-full h-full bg-[#262540] rounded-[20px]'>
      <div className='flex flex-col gap-3 p-6'>
        <div className='flex justify-between items-center'>
          <div>
            <p>Hourly forecast</p>
          </div>
          <div>
            <BtnHourlyForecast setNumDay={setNumDay} numDay={numDay} />
          </div>
        </div>
        <div className='flex flex-col gap-4 overflow-y-scroll h-[590px] custom-scrollbar'>
          {data ? Hourly : loading}
        </div>
      </div>
    </div>
  )
}
