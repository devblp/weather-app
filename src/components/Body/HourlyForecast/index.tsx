import BtnHourlyForecast from "@/components/ui/Buttons/BtnHourlyForecast";
import CardHourlyForecast from "@/components/ui/Cards/CardHourlyForecast";
import React, { useState } from "react";

interface Data {
  daily: {
    time: string[];
  };
  hourly: {
    temperature_2m: string[];
    time: string[];
    weather_code: string[];
  };
}

interface Props {
  data?: Data;
}

export default function HourlyForecast({ data }: Props) {
  const [numDay, setNumDay] = useState<number>(0);

  const selectedDay = data?.daily?.time[numDay];
  const hourlyForDay = data?.hourly?.time
    .map((timeStr, index) => {
      const dateHourly = new Date(timeStr).toDateString();
      if (selectedDay && new Date(selectedDay).toDateString() === dateHourly) {
        const hour = new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(new Date(timeStr));
        return (
          <CardHourlyForecast
            key={index}
            hour={hour}
            temperature={data.hourly.temperature_2m[index]}
            code={Number(data.hourly.weather_code[index])}
          />
        );
      }
      return null;
    })
    .filter(Boolean); // remove null entries

  const loading = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="flex justify-between items-center w-full h-14 bg-[#302F4A] border-[#3C3B5E] border-[1px] rounded-[10px] p-4 animate-pulse"
    ></div>
  ));

  return (
    <div className="w-full h-full bg-[#262540] rounded-[20px]">
      <div className="flex flex-col gap-3 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-white">Hourly forecast</p>
          <BtnHourlyForecast setNumDay={setNumDay} numDay={numDay} />
        </div>

        {/* Hourly cards */}
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[590px] custom-scrollbar">
          {data ? hourlyForDay : loading}
        </div>
      </div>
    </div>
  );
}
