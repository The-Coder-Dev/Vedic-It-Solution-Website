import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Snowflake } from 'lucide-react'

const Footer = () => {
    return (
        <section className='w-full h-160 bg-amber-700 relative '>
            <section className='w-full mx-auto max-w-345 flex flex-col items-start justify-between py-15 absolute inset-0 z-3'>
                <div className="flex flex-col gap-6">
                    <p className='text-white'>Get Started</p>
                    <h1 className='text-white text-6xl'>Don't scale harder.<br /> Scale smarter.</h1>
                    <p className='text-muted max-w-lg'>AI Supply helps you automate complex workflows, reduce operating costs, and scale faster — without hiring more people.</p>

                    <div className="flex gap-3">

                        <Button asChild className='rounded-none py-5 px-5'>
                            <Link href={"/"}>
                                Get Started
                            </Link>
                        </Button>

                        <Button asChild className='bg-white/20 rounded-none py-5 px-5'>
                            <Link href={"/"}>
                                About Us
                            </Link>
                        </Button>

                    </div>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div className="flex gap-2 items-center jusitfy-center">
                        <h1 className='text-muted/40 text-md '>
                            Vedic IT Solutions
                            </h1>
                        <p className='text-muted/40 text-sm'>
                             ©2026. All Rights Reserved
                        </p>
                    </div>

                    <div className="flex gap-3 items-center justify-center ">
                        <Link href={"www.instagram.com"}>
                            <div className="bg-white/90 p-2 transition-colors duration-300 rounded-full hover:bg-white/50">
                                <Image src={"/svg/instagram.svg"} width={15} height={16} alt='instagram' className='' />
                            </div>
                        </Link>
                        <Link href={"www.instagram.com"}>
                            <div className="bg-white/90 p-2 transition-colors duration-300 rounded-full hover:bg-white/50">
                                <Image src={"/svg/facebook.svg"} width={15} height={16} alt='instagram' className='' />
                            </div>
                        </Link>
                    </div>
                </div>


            </section>

            <div className='w-full bg-black/50 absolute inset-0 z-2' />
            <Image src={"/hero.png"} fill className='object-cover' alt='footerImg' />

        </section>
    )
}

export default Footer