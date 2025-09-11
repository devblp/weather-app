import React from 'react'
import BtnHeader from '../ui/Buttons/BtnHeader'

export default function Header() {
  return (
    <div className='flex justify-between items-center pt-12 w-full'>
      <div className='flex items-center gap-4'>
        <div><img src="/logo.png" alt="logo" /></div>
        <div><h1 className='text-2xl font-bold'>Weather Now</h1></div>
      </div>
      <div>
        <BtnHeader />
      </div>
    </div>
  )
}
