"use client"
import React, { useState } from 'react'

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
    setUnits: React.Dispatch<React.SetStateAction<Units>>
    units: Units
}


export default function BtnHeader({ setUnits, units }: Props) {
    const [open, setOpen] = useState(false)

    const menuItems = [
        {
            title: "Temperature",
            id: "temperature",
            items: [
                {
                    name: "Celsius (°C)",
                    id: "c",
                    staus: units.temperature.c
                },
                {
                    name: "Fahrenheit (°F)",
                    id: "f",
                    staus: units.temperature.f
                }
            ]
        },
        {
            title: "Wind Speed",
            id: "windSpeed",
            items: [
                {
                    name: "km/h",
                    id: "kmh",
                    staus: units.windSpeed.kmh
                },
                {
                    name: "mph",
                    id: "mph",
                    staus: units.windSpeed.mph
                }
            ]
        },
        {
            title: "Precipitation",
            id: "precipitation",
            items: [
                {
                    name: "Millimeters (mm)",
                    id: "mm",
                    staus: units.precipitation.mm
                },
                {
                    name: "Inches (in)",
                    id: "in",
                    staus: units.precipitation.in
                }
            ]
        }
    ]

    const handleSelectUnits = (menuId: keyof Units, itemId: string) => {
        setUnits(prv => {
            const item = Object.keys(prv[menuId]).reduce(
                (acc, key) => ({ ...acc, [key]: false }),
                {}
            )
            return {
                ...prv,
                [menuId]: {
                    ...item,
                    [itemId]: true
                }
            }
        })
    }

    return (
        <div className='relative w-full h-fit z-50'>
            <button onClick={() => setOpen(!open)} className='flex justify-center items-center gap-2 w-28 h-11 bg-[#262540] active:bg-[#262540]/80 rounded-[10px]'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256">
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                    </svg>
                </div>
                <div>
                    <p>Units</p>
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
                <p className='font-medium'>Switch to Imperial</p>
                {menuItems.map((m, index) => (
                    <div className='pt-5' key={index}>
                        <p className='font-medium text-[15px] text-[#ACACB7] pb-2'>{m.title}</p>
                        <ul>
                            {m.items.map((e, index) => (
                                <li onClick={() => handleSelectUnits(m.id as keyof Units, e.id)} className={`flex justify-between py-2 hover:bg-[#302F4A] active::bg-red-500 w-full h-fit px-3 rounded-[10px] ${e.staus && `bg-[#302F4A]`} mb-1 cursor-pointer`} key={index}>
                                    {e.name}
                                    {e.staus && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8f96ff" viewBox="0 0 256 256">
                                        <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.59,0L104,136.23l-36.69-35.6a16,16,0,0,0-22.58.05l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24a.6.6,0,0,1,.08.08l42.35,41.09a8,8,0,0,0,11.19,0L208.06,56,232,79.6Z"></path>
                                    </svg>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div >
    )
}
