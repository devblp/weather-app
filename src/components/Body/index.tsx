import React from 'react'
import SearchBar from './SearchBar'
import Layout from './Layout'
import NoResult from '../NoResult'

export default function Body() {
  return (
    <div className='w-full'>
      <SearchBar />
      <NoResult/>
    </div>
  )
}
