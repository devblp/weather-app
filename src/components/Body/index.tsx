import React from 'react'
import SearchBar from './SearchBar'
import Layout from './Layout'
// import NoResult from '../NoResult'

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
}

export default function Body({ units }: Props) {
  return (
    <div className='w-full'>
      <SearchBar />
      <Layout units={units} />
    </div>
  )
}
