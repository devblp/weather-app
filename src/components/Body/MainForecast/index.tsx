import React from 'react'

interface IPdata {
  city: string;
  country_name: string
}

interface Data {
  current: {
    apparent_temperature: string;
    time: string;
    weather_code: number
  }
}

interface Props {
  data: Data | undefined;
  IPdata: IPdata | undefined;
}

export default function MainForecast({ data, IPdata }: Props) {
  const date = new Date(data?.current.time || "")
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formatted = data?.current?.time
    ? new Intl.DateTimeFormat("en-US", options).format(date)
    : "";
  const weatherIcons: Record<number, string> = {
    0: "Sunny.png",
    1: "PartlyCloudy.png",
    2: "PartlyCloudy.png",
    3: "Overcast.png",
    45: "Fog.png",
    48: "Fog.png",
    51: "Drizzle.png",
    61: "Rain.png",
    71: "Snow.png",
    95: "Thunderstorms.png",
  };
  return (
    <div className='flex max-sm:flex-col justify-between items-center bg-[#4658D9] rounded-[20px] w-full h-72 p-6'>
      <div className='flex max-sm:items-center flex-col gap-2'>
        <p className='text-[28px] font-bold'>{IPdata?.city}, {IPdata?.country_name}</p>
        <p className='text-[18px]'>{formatted}</p>
      </div>
      <div className='flex max-sm:items-center items-center gap-5'>
        <img src={weatherIcons[data?.current?.weather_code || 0]} alt={weatherIcons[data?.current?.weather_code || 0]} className='w-28' />
        <p className='text-[80px] font-bold'>{Math.floor(Number(data?.current?.apparent_temperature))}°</p>
      </div>
    </div>
  )
}
