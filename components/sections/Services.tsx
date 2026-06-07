import { LaptopMinimal, PenTool, Clapperboard , TrendingUp, MousePointerClick, SplinePointer} from 'lucide-react'
import Image from 'next/image'




const Services = () => {
  return (
    <section className='w-full min-h-screen relative'>
        <div className="w-full  mx-auto max-w-345 px-8 py-30 flex flex-col md:flex-row gap-12 relative z-10">
            <div className="w-full">
                <p className="text-white uppercase font-semibold"><span className="text-primary">
                [ {" "}</span>Services<span className="text-primary"> {" "}]
                </span></p>

                <h1 className='text-5xl md:text-7xl text-white uppercase font-semibold mt-10'>Our<br /> Services</h1>
                <p className='text-gray-300 max-w-sm mt-3'>Everything you need to know about our services, process, and what to expect.</p>
            </div>

           {/* Services Section */}
            <div className="w-full flex flex-col gap-10">
        
                    <div className="flex flex-col md:flex-row gap-5 border-b border-b-gray-400/20">
                        <div className="bg-white rounded-full w-fit h-fit mb-5 p-4">
                            <TrendingUp  size="29" className='text-primary'/>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-10 pb-8 ">
                            <h1 className='uppercase text-4xl md:text-5xl font-bold text-white'>Meta Ads</h1>
                            <p className='text-gray-400 max-w-md'>From social media graphics to business presentations, every design serves a purpose.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 border-b border-b-gray-400/20">
                        <div className="bg-white rounded-full w-fit mb-5 h-fit  p-4">
                            <MousePointerClick  size="29" className='text-primary'/>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-10 pb-8 ">
                            <h1 className='uppercase text-4xl md:text-5xl font-bold text-white'>Google Ads</h1>
                            <p className='text-gray-400 max-w-md'>From social media graphics to business presentations, every design serves a purpose.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 border-b border-b-gray-400/20">
                        <div className="bg-white rounded-full w-fit h-fit mb-5 p-4">
                            <SplinePointer  size="29" className='text-primary' /> 
                        </div>
                        <div className="flex flex-col gap-3 md:gap-10 pb-8 ">
                            <h1 className='uppercase text-4xl md:text-5xl font-bold text-white'>Graphic Design</h1>
                            <p className='text-gray-400 max-w-md'>From social media graphics to business presentations, every design serves a purpose.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 border-b border-b-gray-400/20">
                        <div className="bg-white rounded-full w-fit h-fit mb-5 p-4">
                            <LaptopMinimal size="29" className='text-primary' />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-10 pb-8 ">
                            <h1 className='uppercase text-4xl md:text-5xl font-bold text-white'>Website Developement</h1>
                            <p className='text-gray-400 max-w-md'>From social media graphics to business presentations, every design serves a purpose.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5  border-b border-b-gray-400/20">
                        <div className="bg-white rounded-full w-fit mb-5 h-fit p-4">
                            <Clapperboard size="29" className='text-primary' /> 
                        </div>
                        <div className="flex flex-col gap-`3 md:gap-10 pb-8 ">
                            <h1 className='uppercase text-4xl md:text-5xl font-bold text-white'>Video Editing</h1>
                            <p className='text-gray-400 max-w-md'>From social media graphics to business presentations, every design serves a purpose.</p>
                        </div>
                    </div>

                

            </div>




        </div>

        <div className="w-full h-full bg-black/50 absolute inset-0 z-3" />
        <Image src={"/serviceImg.png"} fill className='object-cover' alt='service-img' />
    </section>
  )
}

export default Services