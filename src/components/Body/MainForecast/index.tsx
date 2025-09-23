import Image from 'next/image';
import React from 'react'

interface IPdata {
  city: string;
  country: string;
}

interface Data {
  current: {
    apparent_temperature: string;
    time: string;
    weather_code: number;
    is_day: number;
  }
}

interface Props {
  data: Data | undefined;
  IPdata: IPdata | undefined;
}

export default function MainForecast({ data, IPdata }: Props) {
  const date = new Date(data?.current?.time || "")
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
    <div className={`relative flex max-sm:flex-col ${data ? "justify-between" : "justify-center"} max-sm:justify-center items-center  rounded-[20px] w-full h-72 p-6`}>
      <Image src="DesktopHeroBg.svg" alt="Desktop-Hero-Bg" className='absolute w-full h-full left-0 -z-50 max-sm:hidden' width={100} height={100} />
      <Image src="MobileHeroBg.svg" alt="Desktop-Hero-Bg" className='absolute w-full h-full left-0 top-0 -z-50 hidden max-sm:flex' width={100} height={100} />
      {data ? (
        <>
          <div className='flex max-sm:items-center flex-col gap-2'>
            <p className='text-[28px] font-bold'>{IPdata?.city}, {IPdata?.country}</p>
            <p className='text-[18px]'>{formatted}</p>
          </div>
          <div className='flex max-sm:items-center items-center gap-5'>
            <img src={weatherIcons[data?.current?.weather_code || 0]} alt={weatherIcons[data?.current?.weather_code || 0]} className='w-28' />
            <p className='text-[80px] font-bold'>{Math.floor(Number(data?.current?.apparent_temperature))}°</p>
          </div>
        </>
      ) : (
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <p className='text-[16px] font-medium'>Loading...</p>
        </div>
      )}

    </div>
  )
}
