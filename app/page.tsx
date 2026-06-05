import Hero from '@/components/sections/Hero'
import NumberStats from '@/components/sections/NumberStats'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen  w-full'>
      <Hero />
      <NumberStats />
    </main>
  )
}

export default page