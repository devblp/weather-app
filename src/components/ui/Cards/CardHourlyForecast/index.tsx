import React from 'react'

interface Props {
  hour: string;
  temperature: string;
  code: number
}

export default function CardHourlyForecast({ hour, temperature, code }: Props) {
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
    <div className='flex justify-between items-center w-full h-14 bg-[#302F4A] border-[#3C3B5E] border-[1px] rounded-[10px] p-4'>
      <div className='flex items-center'>
        <div>
          <img src={weatherIcons[code]} alt={weatherIcons[code]} className='w-10' />
        </div>
        <div>
          <p>{hour}</p>
        </div>
      </div>
      <div>
        <p>{Math.floor(Number(temperature))}°</p>
      </div>
    </div>
  )
}
