import Faqs from '@/components/sections/Faqs'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Team from '@/components/sections/team'
import TestimonialSection from '@/components/sections/TestimonialSection'

const Homepage = () => {

 

  return (
    <main className='h-auto w-full'>
      <Hero />
      {/* <NumberStats /> */}
      <Services />
      <Team />
      <TestimonialSection />
      <Faqs />
    </main>
  )
}

export default Homepage