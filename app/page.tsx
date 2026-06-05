import Hero from '@/components/sections/Hero'
import NumberStats from '@/components/sections/NumberStats'
import Services from '@/components/Services'
import TestimonialSection from '@/components/TestimonialSection'

const page = () => {
  return (
    <main className='h-auto w-full'>
      <Hero />
      <NumberStats />
      <Services />
      <TestimonialSection />
    </main>
  )
}

export default page