"use client";

import { useState } from "react";
import APIerror from "@/components/APIerror";
import Body from "@/components/Body";
import Header from "@/components/Header";
import HeaderText from "@/components/HeaderText";

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

export default function Home() {
  const [server, setServer] = useState(true);
  const [units, setUnits] = useState<Units>({
    temperature: { c: true, f: false },
    windSpeed: { kmh: true, mph: false },
    precipitation: { mm: true, in: false },
  });

  return (
    <main className="flex flex-col gap-16 justify-center items-center px-[116px] max-2xl:px-20 max-lg:px-7 w-full">
      {/* Header */}
      <Header setUnits={setUnits} units={units} />

      {server ? (
        <>
          {/* Page Heading */}
          <HeaderText />

          {/* Main Content */}
          <Body units={units} setServer={setServer} />
        </>
      ) : (
        <APIerror />
      )}
    </main>
  );
}
