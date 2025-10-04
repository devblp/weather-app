import React from "react";
import { motion } from "framer-motion";
import CardDailyForecast from "@/components/ui/Cards/CardDailyForecast";

interface Data {
  daily: {
    temperature_2m_max: (string | number)[];
    temperature_2m_min: (string | number)[];
    time: string[];
    weather_code: (string | number)[];
  };
}

interface Props {
  data?: Data;
}

export default function DailyForecast({ data }: Props) {
  // 🌤️ Build daily cards
  const Dailys = data?.daily?.time?.map((e, index) => {
    const date = new Date(e);
    const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex-shrink-0 snap-start w-28 sm:w-32 md:w-36 lg:w-40 xl:w-36"
      >
        <CardDailyForecast
          day={dayName}
          max={data.daily.temperature_2m_max[index].toString()}
          min={data.daily.temperature_2m_min[index].toString()}
          code={data.daily.weather_code[index].toString()}
        />
      </motion.div>
    );
  });

  // ⏳ Loading skeleton cards
  const Loading = Array.from({ length: 7 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col justify-between items-center bg-[#262540] border-[#3C3B5E] border-[1px] w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-[165px] rounded-[13px] p-3 animate-pulse flex-shrink-0 snap-start"
    >
      <div className="w-12 h-4 bg-[#3C3B5E] rounded"></div>
      <div className="w-8 h-8 bg-[#3C3B5E] rounded-full"></div>
      <div className="w-16 h-4 bg-[#3C3B5E] rounded"></div>
    </div>
  ));

  return (
    <div className="mt-8">
      <p className="pb-3 font-semibold text-2xl text-white" aria-label="Daily forecast">
        Daily forecast
      </p>

      <div className="flex gap-3 overflow-x-auto scroll-smooth w-full snap-x snap-mandatory p-1 custom-scrollbar">
        {data ? Dailys : Loading}
      </div>
    </div>
  );
}
