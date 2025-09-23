import React from 'react'
import BtnHeader from '../ui/Buttons/BtnHeader'

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

export default function Header({ setUnits, units }: Props) {
  return (
    <div className='flex justify-between items-center pt-12 w-full'>
      <div className='flex items-center gap-4'>
        <div><img src="/logo.png" alt="logo" /></div>
        <div><h1 className='text-2xl max-sm:text-[16px] font-bold'>Weather Now</h1></div>
      </div>
      <div>
        <BtnHeader setUnits={setUnits} units={units} />
      </div>
    </div>
  )
}
