"use client"
import React, { useState } from 'react'

export default function BtnHourlyForecast() {
    const [open, setOpen] = useState(false)

    const menuItems = [
        {
            item: "Monday",
            status: false
        },
        {
            item: "Tuesday",
            status: false
        },
        {
            item: "Wednesday",
            status: false
        },
        {
            item: "Thursday",
            status: false
        },
        {
            item: "Friday",
            status: false
        },
        {
            item: "Saturday",
            status: false
        },
        {
            item: "Sunday",
            status: true
        }
    ]
    return (
        <div className=' relative '>
            <button onClick={() => setOpen(!open)} className='flex justify-center items-center gap-2 w-28 h-9 bg-[#3C3B5E] active:bg-[#3C3B5E]/80 rounded-[10px]'>
                <div>
                    <p>{menuItems.map((e)=>e.status? e.item : "")}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
                        <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                </div>
            </button>
            <div
                className={`absolute p-3 right-0 mt-3 w-[214px] h-fit bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[10px] shadow-lg transition-all duration-200 ease-in-out
                                    ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}`}
            >
                <ul>
                    {menuItems.map((e, index) => (

                        <li key={index} className={`flex justify-between py-2 hover:bg-[#302F4A] active::bg-red-500 w-full h-fit px-3 rounded-[10px] ${e.status && `bg-[#302F4A]`} mb-1 cursor-pointer`}>{e.item} </li>

                    ))}
                </ul>
            </div>
        </div>

    )
}
