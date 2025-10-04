import React from "react";
import BtnHeader from "../ui/Buttons/BtnHeader";

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
  setUnits: React.Dispatch<React.SetStateAction<Units>>;
  units: Units;
}

export default function Header({ setUnits, units }: Props) {
  return (
    <header className="flex justify-between items-center pt-12 w-full">
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Weather Now Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl max-sm:text-[16px] font-bold">Weather Now</h1>
      </div>

      {/* Units toggle */}
      <BtnHeader setUnits={setUnits} units={units} />
    </header>
  );
}
