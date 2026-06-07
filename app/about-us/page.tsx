import PageHeader from '@/components/PageHeader'
import Team from '@/components/sections/team'
import { Rocket } from 'lucide-react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>
      <PageHeader title='About us' />
      <section className='w-full h-auto'>
        <div className="w-full mx-auto max-w-345 flex flex-col md:flex-row md:gap-20 items-center px-8 py-10 md:py-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-3 pb-10">
              <h1 className='text-3xl md:text-6xl font-bold text-black uppercase'>Where innovation meets<span className='text-primary font-[dm_serif] italic'> digital excellence</span></h1>
              <p className='text-md text-neutral-700 '>At Vedic IT Solutions, we combine creativity, technology, and strategic thinking to help businesses thrive in the digital world. From digital marketing and branding to website development and design, we create solutions that drive growth, build trust, and deliver measurable results.</p>

              <div className="mt-9 flex flex-col gap-7">
                <h3 className='text-xl font-semibold border-l-4 pl-4 border-l-primary'>Our Foundation built on three core principles: </h3>
                {/* Grids Labels */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-primary rounded-md p-5">
                    <h1 className='text-white text-lg font-semibold'>Clarity before creavity</h1>
                  </div>

                  <div className="bg-primary rounded-md p-5">
                    <h1 className='text-white text-lg font-semibold'>Data before decisions</h1>
                  </div>

                  <div className="bg-primary rounded-md p-5">
                    <h1 className='text-white text-lg font-semibold'>Results before recognition</h1>
                  </div>
                </div>
                <p className=''>While many agencies focus on vanity metrics like likes and followers, we focus on  ROI, lead quality, conversion rate, and long-term brand positioning.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 h-80 md:h-140 relative rounded-md overflow-hidden">
            <Image
              src={"/ctaBg.png"} alt="image" fill className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className='w-full h-fit'>
        <div className="w-full mx-auto max-w-345 px-8 pb-13">
          <div className="w-full grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="flex flex-col items-start justify-between p-8 bg-neutral-100 border-t-4 border-t-primary">
              <div className="flex flex-col items-start gap-6">
                <div className="p-5 bg-primary text-white">
                  <Rocket size={28} />
                </div>

                <h1 className='text-4xl font-semibold'>Our Mission</h1>

                <p>To demonstrate advanced technology for creative agencies and tech startups providing the precision of big-data tools with the soul of a boutique design house.</p>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full mt-8">
                <div className="">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-primary" />
                    <h4 className='font-semibold'>Precision</h4>
                  </div>

                  <div className="flex gap-2 items-center mt-3">
                    <div className="w-2 h-2 bg-primary" />
                    <h4 className='font-semibold'>Scalable</h4>
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-primary" />
                    <h4 className='font-semibold'>Ethical AI</h4>
                  </div>

                  <div className="flex gap-2 items-center mt-3">
                    <div className="w-2 h-2 bg-primary" />
                    <h4 className='font-semibold'>Creative</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-3">
              <div className="bg-primary p-8 gap-10 flex-1 flex flex-col justify-between relative">
                <div className="space-y-4">
                  <h1 className='text-white text-4xl font-semibold'>Our Vision</h1>
                  <p className='text-neutral-200'>To become the global benchmark for technical excellence where every digital presence is intelligent, human-centric design.</p>
                </div>

                <h1 className='text-white/10 text-9xl font-bold absolute -bottom-5 -right-4'>2026</h1>
              </div>

              <div className="w-full flex gap-3 h-50">
                  <div className="w-full p-5 bg-red-900 text-white flex items-center justify-center">Speed</div>
                  <div className="w-full p-5 bg-neutral-300 text-black flex items-center justify-center">Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full h-auto'>
        <div className="mx-auto max-w-345">
          <Team />
        </div>
      </section>
    </>
  )
}

export default AboutUs

