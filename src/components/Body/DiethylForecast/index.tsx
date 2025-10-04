import CardDiethylForecast from "@/components/ui/Cards/CardDiethylForecast";
import React from "react";

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
  };
}

interface Props {
  precipitation?: number;
  relative_humidity_2m?: number;
  wind_speed_10m?: number;
  temperature_2m?: number;
  units: Units;
}

export default function DiethylForecast({
  precipitation,
  relative_humidity_2m,
  wind_speed_10m,
  temperature_2m,
  units,
}: Props) {
  const formatTemperature = (temp?: number) =>
    temp !== undefined ? `${Math.floor(temp)}°` : "_";

  const formatHumidity = (humidity?: number) =>
    humidity !== undefined ? `${humidity}%` : "_";

  const formatWind = (wind?: number) =>
    wind !== undefined
      ? `${Math.floor(wind)} ${units.windSpeed.mph ? "mph" : "km/h"}`
      : "_";

  const formatPrecipitation = (precip?: number) =>
    precip !== undefined
      ? `${precip} ${units.precipitation.in ? "in" : "mm"}`
      : "_";

  return (
    <div className="flex max-sm:flex-wrap gap-5 max-sm:gap-2 w-full max-sm:mt-7">
      <CardDiethylForecast title="Feels Like" value={formatTemperature(temperature_2m)} />
      <CardDiethylForecast title="Humidity" value={formatHumidity(relative_humidity_2m)} />
      <CardDiethylForecast title="Wind" value={formatWind(wind_speed_10m)} />
      <CardDiethylForecast title="Precipitation" value={formatPrecipitation(precipitation)} />
    </div>
  );
}
