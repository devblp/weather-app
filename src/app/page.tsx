"use client"
import APIerror from "@/components/APIerror";
import Body from "@/components/Body";
import Header from "@/components/Header";
import HeaderText from "@/components/HeaderText";
import { useState } from "react";

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

export default function Home() {
  const [server, setServer] = useState(true)
  const [units, setUnits] = useState<Units>({
    temperature: {
      c: true,
      f: false,
    },
    windSpeed: {
      kmh: true,
      mph: false,
    },
    precipitation: {
      mm: true,
      in: false,
    }
  })

  return (
    <div className="flex flex-col gap-16 justify-center items-center px-29 max-2xl:px-20 max-lg:px-7 w-full">
      {/* Header */}
      <Header setUnits={setUnits} units={units} />

      {server ? (
        <>
          {/* Header Text */}
          <HeaderText />
          {/* Body */}
          <Body units={units} setServer={setServer} />
        </>
      ) : (
        <APIerror />
      )}

    </div>
  );
}
