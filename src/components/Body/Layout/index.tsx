"use client"
import React, { useEffect, useState } from 'react'
import MainForecast from '../MainForecast'
import HourlyForecast from '../HourlyForecast'
import DiethylForecast from '../DiethylForecast'
import DailyForecast from '../DailyForecast'

interface IPdata {
    city: string;
    country_name: string;
    latitude: string;
    longitude: string
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

export default function Layout() {
    const [IPdata, setIPdata] = useState<IPdata>()
    const [data, setData] = useState<Data>()

    useEffect(() => {
        (async () => {
            const res = await fetch("https://ipapi.co/json")
            const data = await res.json()
            setIPdata(data)
            handelW(data.latitude, data.longitude)
        })()
    }, [])
    const handelW = async (latitude: string, longitude: string) => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,apparent_temperature,is_day,relative_humidity_2m,wind_speed_10m,precipitation,rain,temperature_2m&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=weather_code,temperature_2m`)
        const data = await res.json()
        setData(data)
        console.log(data)
    }
    return (
        <div className='flex max-lg:flex-col gap-10 w-full pb-20'>
            <div className='w-[65%] max-lg:w-full'>
                <MainForecast data={data} IPdata={IPdata} />
                <DiethylForecast
                    precipitation={data?.current?.precipitation}
                    relative_humidity_2m={data?.current?.relative_humidity_2m}
                    wind_speed_10m={data?.current?.wind_speed_10m}
                    temperature_2m={data?.current.temperature_2m}
                />
                <DailyForecast data={data} />
            </div>
            <div className='w-[35%] max-lg:w-full'>
                <HourlyForecast data={data} />
            </div>
        </div>
    )
}
