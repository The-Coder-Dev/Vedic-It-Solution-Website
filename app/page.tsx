import Hero from '@/components/sections/Hero'
import NumberStats from '@/components/sections/NumberStats'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <main className='h-auto w-full'>
      <Hero />
      <NumberStats />
    </main>
  )
}

export default page