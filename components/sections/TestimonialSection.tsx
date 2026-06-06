import React from 'react'
import { AnimatedTestimonialsDemo } from '../Testimonials'
import { Badge } from '../ui/badge'

const TestimonialSection = () => {
  return (
    <section className='w-full h-auto '>
        <div className="mx-auto mt-10 max-w-345 flex flex-col md:flex-row items-center justify-center gap-14 px-8 py-10">
            <div className="flex flex-col gap-4 items-baseline">
                <Badge>
                    Trusted by 50+ clients
                </Badge>
                <h1 className='text-4xl font-bold'>Loved by community</h1>
                <p className='text-md max-w-lg'>Don't just take our word for it. See what clients and customers have to say about our services.</p>
            </div>

            <div className="">
                <AnimatedTestimonialsDemo />
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection