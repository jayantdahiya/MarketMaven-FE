import React from 'react'
import { MainCard } from './Card'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex justify-center w-full max-w-md'>
        <MainCard />
      </div>
    </div>
  )
}

export default page