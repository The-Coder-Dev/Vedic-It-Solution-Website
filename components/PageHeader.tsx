import Image from 'next/image'
import React from 'react'

interface PageHeaderProps {
    className? : string,
    title: string
}

const PageHeader = ({className, title} : PageHeaderProps) => {
  return (
    <section className='w-full h-60 md:h-100 relative'>

        <div className="z-6 absolute inset-0  mx-auto max-w-345 flex items-end px-8 py-7">
            <h1 className='text-white font-bold uppercase text-3xl md:text-6xl'>{title}</h1>
        </div>

            <div className='z-3 absolute inset-0 bg-black/40' />
        <Image 
            src={"/hero.png"} fill className='object-cover' alt='pageheaeder'
        />
    </section>
  )
}

export default PageHeader