import React from 'react'
import MainForecast from '../MainForecast'
import HourlyForecast from '../HourlyForecast'
import DiethylForecast from '../DiethylForecast'
import DailyForecast from '../DailyForecast'

export default function Layout() {
    return (
        <div className='flex max-lg:flex-col gap-10 w-full pb-20'>
            <div className='w-[65%] max-lg:w-full'>
                <MainForecast />
                <DiethylForecast />
                <DailyForecast />
            </div>
            <div className='w-[35%] max-lg:w-full'>
                <HourlyForecast />
            </div>
        </div>
    )
}
