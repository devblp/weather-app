import React from 'react'
import Layout from './Layout'


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
  units: Units
  setServer: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Body({ units, setServer }: Props) {
  return <Layout units={units} setServer={setServer} />
}
