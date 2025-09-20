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
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,apparent_temperature,is_day,wind_speed_10m,relative_humidity_2m,temperature_2m,wind_direction_10m&timezone=auto&temperature_unit=fahrenheit`)
        const data = await res.json()
        setData(data)
        console.log(data)
    }
    return (
        <div className='flex max-lg:flex-col gap-10 w-full pb-20'>
            <div className='w-[65%] max-lg:w-full'>
                <MainForecast data={data} IPdata={IPdata} />
                <DiethylForecast />
                <DailyForecast />
            </div>
            <div className='w-[35%] max-lg:w-full'>
                <HourlyForecast />
            </div>
        </div>
    )
}
