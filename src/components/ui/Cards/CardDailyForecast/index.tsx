import React from 'react'
interface Props {
  day: string;
  min: string;
  max: string;
  code: string;
}

export default function CardDailyForecast({ day, min, max, code }: Props) {
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
    <div className='flex flex-col justify-between items-center bg-[#262540] border-[#3C3B5E] border-[1px] w-full h-[165px] rounded-[13px] p-3'>
      <div>
        <p className='text-[18px]'>{day}</p>
      </div>
      <div>
        <img src={weatherIcons[Number(code)]} alt={weatherIcons[Number(code)]} className='w-16' />
      </div>
      <div className='flex gap-5'>
        <div>
          <p className='text-[16px] font-bold'>{Math.floor(Number(min))}°</p>
        </div>
        <div>
          <p className='text-[16px]'>{Math.floor(Number(max))}°</p>
        </div>
      </div>
    </div>
  )
}
