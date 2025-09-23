import React, { useEffect, useState } from 'react'
import MainForecast from '../MainForecast'
import HourlyForecast from '../HourlyForecast'
import DiethylForecast from '../DiethylForecast'
import DailyForecast from '../DailyForecast'

interface IPdata {
    city: string;
    country: string;
    lat: string;
    lon: string
}

interface Data {
    current: {
        apparent_temperature: string;
        precipitation: number;
        relative_humidity_2m: number;
        wind_speed_10m: number;
        temperature_2m: number;
        time: string;
        weather_code: number;
        is_day: number;
    };
    daily: {
        temperature_2m_max: string[];
        temperature_2m_min: string[];
        time: string[];
        weather_code: string[];
    };
    hourly: {
        temperature_2m: string[];
        time: string[];
        weather_code: string[];
    }
}

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
    units: Units
}


export default function Layout({ units }: Props) {
  const [IPdata, setIPdata] = useState<IPdata>()
  const [data, setData] = useState<Data>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch("http://ip-api.com/json")
      const json = await res.json()
      setIPdata(json)
    })()
  }, [])

  useEffect(() => {
    if (!IPdata) return
    handleWeather(IPdata.lat, IPdata.lon)
  }, [IPdata, units])

  const handleWeather = async (latitude: string, longitude: string) => {
    setLoading(true)
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,weather_code,apparent_temperature,is_day,relative_humidity_2m,wind_speed_10m,precipitation,rain,temperature_2m&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=weather_code,temperature_2m${
        units.windSpeed.mph ? "&wind_speed_unit=mph" : ""
      }${units.temperature.f ? "&temperature_unit=fahrenheit" : ""}${
        units.precipitation.in ? "&precipitation_unit=inch" : ""
      }`
    )
    const json = await res.json()
    setData(json)
    setLoading(false)
    console.log(json)
  }

//   if(loading)return<div>...loading</div>

  return (
    <div className="flex max-lg:flex-col gap-10 w-full pb-20">
      <div className="w-[65%] max-lg:w-full">
        <MainForecast data={data} IPdata={IPdata} />
        <DiethylForecast
          precipitation={data?.current?.precipitation}
          relative_humidity_2m={data?.current?.relative_humidity_2m}
          wind_speed_10m={data?.current?.wind_speed_10m}
          temperature_2m={data?.current?.temperature_2m}
          units={units}
        />
        <DailyForecast data={data} />
      </div>
      <div className="w-[35%] max-lg:w-full">
        <HourlyForecast data={data} />
      </div>
    </div>
  )
}
