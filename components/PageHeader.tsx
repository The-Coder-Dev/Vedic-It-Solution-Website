import Image from 'next/image'
import React from 'react'

interface PageHeaderProps {
    className? : string,
    title: string,
    subtitle?: string,
    description?: string
}

const PageHeader = ({className, title, subtitle, description} : PageHeaderProps) => {
  return (
    <section className='w-full h-120 md:h-100 relative'>

        <div className= {`${className} z-6 absolute inset-0  mx-auto max-w-345 flex flex-col gap-3 items-start justify-end px-8 py-7`}>
            <h1 className='text-white font-bold uppercase text-3xl md:text-6xl'>{title}</h1>
            <p className='text-white font-bold'>{subtitle}</p>
            <p className='text-white'>{description}</p>
        </div>

            <div className='z-3 absolute inset-0 bg-black/40' />
        <Image 
            src={"/hero.png"} fill className='object-cover' alt='pageheaeder'
        />
    </section>
  )
}

export default PageHeader