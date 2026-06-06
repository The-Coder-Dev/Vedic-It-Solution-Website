
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import TestimonialSection from '@/components/sections/TestimonialSection'

const Homepage = () => {

 

  return (
    <main className='h-auto w-full'>
      <Hero />
      {/* <NumberStats /> */}
      <Services />
      <TestimonialSection />
    </main>
  )
}

export default Homepage