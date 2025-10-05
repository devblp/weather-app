import Image from "next/image";
import React from "react";

interface IPdata {
  city: string;
  country_name: string;
  latitude: string;
  longitude: string;
}

interface Data {
  current: {
    apparent_temperature: string;
    time: string;
    weather_code: number;
    is_day: number;
  };
}

interface CityData {
  city: string;
  land: string;
}

interface Props {
  data?: Data;
  IPdata?: IPdata;
  loading: boolean;
  cityData?: CityData;
}

export default function MainForecast({ data, IPdata, loading, cityData }: Props) {
  const date = new Date(data?.current?.time || "");
  const formatted = data?.current?.time
    ? new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
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
    63: "Rain.png",
    80: "Showers.png",
    71: "Snow.png",
    95: "Thunderstorms.png",
  };

  const weatherIcon = weatherIcons[data?.current?.weather_code || 0] || "Sunny.png";
  const cityName = cityData?.city || IPdata?.city || "_";
  const countryName = cityData?.land || IPdata?.country_name || "_";
  const temperature = data?.current?.apparent_temperature
    ? `${Math.floor(Number(data.current.apparent_temperature))}°`
    : "_";

  return (
    <div
      className={`relative flex max-sm:flex-col ${!loading ? "justify-between" : "justify-center"
        } max-sm:justify-center items-center rounded-[20px] w-full h-72 p-6`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-50 rounded-2xl overflow-hidden">
        <Image
          src="DesktopHeroBg.svg"
          alt="Desktop background"
          fill
          className="object-cover hidden sm:block"
        />
        <Image
          src="MobileHeroBg.svg"
          alt="Mobile background"
          fill
          className="object-cover block sm:hidden"
        />
      </div>

      {/* Weather Info */}
      {!loading ? (
        <>
          <div className="flex max-sm:items-center flex-col gap-2">
            <p className="text-[28px] font-bold">
              {cityName}, {countryName}
            </p>
            <p className="text-[18px]">{formatted}</p>
          </div>

          <div className="flex max-sm:items-center items-center gap-5">
            <img
              src={weatherIcon}
              alt={`Weather icon for code ${data?.current?.weather_code}`}
              className="w-28"
            />
            <p className="text-[80px] font-bold">{temperature}</p>
          </div>
        </>
      ) : (
        // Loading animation
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>
          <p className="text-[16px] font-medium">Loading...</p>
        </div>
      )}
    </div>
  );
}
