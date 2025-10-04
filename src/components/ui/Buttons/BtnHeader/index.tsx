"use client";
import React, { useState } from "react";

interface Units {
    temperature: { c: boolean; f: boolean };
    windSpeed: { kmh: boolean; mph: boolean };
    precipitation: { mm: boolean; in: boolean };
}

interface Props {
    setUnits: React.Dispatch<React.SetStateAction<Units>>;
    units: Units;
}

export default function BtnHeader({ setUnits, units }: Props) {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            title: "Temperature",
            id: "temperature",
            items: [
                { name: "Celsius (°C)", id: "c", status: units.temperature.c },
                { name: "Fahrenheit (°F)", id: "f", status: units.temperature.f },
            ],
        },
        {
            title: "Wind Speed",
            id: "windSpeed",
            items: [
                { name: "km/h", id: "kmh", status: units.windSpeed.kmh },
                { name: "mph", id: "mph", status: units.windSpeed.mph },
            ],
        },
        {
            title: "Precipitation",
            id: "precipitation",
            items: [
                { name: "Millimeters (mm)", id: "mm", status: units.precipitation.mm },
                { name: "Inches (in)", id: "in", status: units.precipitation.in },
            ],
        },
    ];

    const handleSelectUnits = (menuId: keyof Units, itemId: string) => {
        setUnits((prev) => ({
            ...prev,
            [menuId]: Object.keys(prev[menuId]).reduce((acc, key) => {
                acc[key] = key === itemId;
                return acc;
            }, {} as Record<string, boolean>),
        }));
    };

    return (
        <div className="relative h-fit z-50">
            {/* Dropdown Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-center items-center gap-2 w-28 h-11 bg-[#262540] active:bg-[#262540]/80 rounded-[10px]"
            >
                <span>Units</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                >
                    <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                </svg>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute p-3 right-0 mt-3 w-[214px] h-fit bg-[#262540] border-[#3C3B5E] border-[1px] rounded-[10px] shadow-lg transition-all duration-200 ease-in-out
        ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}`}
            >
                {menuItems.map((menu, i) => (
                    <div className="pt-5" key={i}>
                        <p className="font-medium text-[15px] text-[#ACACB7] pb-2">
                            {menu.title}
                        </p>
                        <ul>
                            {menu.items.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => handleSelectUnits(menu.id as keyof Units, item.id)}
                                    className={`flex justify-between py-2 w-full h-fit px-3 rounded-[10px] mb-1 cursor-pointer hover:bg-[#302F4A] ${item.status ? "bg-[#302F4A]" : ""
                                        }`}
                                >
                                    {item.name}
                                    {item.status && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="#8f96ff"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.59,0L104,136.23l-36.69-35.6a16,16,0,0,0-22.58.05l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24a.6.6,0,0,1,.08.08l42.35,41.09a8,8,0,0,0,11.19,0L208.06,56,232,79.6Z"></path>
                                        </svg>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
