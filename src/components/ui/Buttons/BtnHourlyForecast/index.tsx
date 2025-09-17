import React from 'react'

export default function BtnHourlyForecast() {
    return (
        <button className='flex justify-center items-center gap-2 w-28 h-9 bg-[#3C3B5E] active:bg-[#3C3B5E]/80 rounded-[10px]'>
            <div>
                <p>Tuesday</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
                    <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                </svg>
            </div>
        </button>
    )
}
