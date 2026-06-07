"use client"

import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import StatsCard from '../StatsCard'
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from 'react'


const Hero = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const hero = useTransform(scrollYProgress, [0,1], ["0" , "100%"]);
    const Numberstats = useTransform(scrollYProgress, [0,1], ["0" , "1%"]);

    return (
        <section className='w-full h-[200vh] relative' ref={ref}>
            {/* Hero section */}
            <motion.section style={{y: hero}} className='w-full h-screen relative' >
                <div className="w-full h-full flex items-end justify-start mx-auto max-w-345 py-20 relative z-10">
                    <section className='absolute z-99 px-7'>
                        <div className="flex flex-col gap-4 items-start ">

                            <h1 className='text-white text-5xl md:text-8xl uppercase text-left font-semibold'><span className='text-secondary'>More than marketing.</span> <br /> driving growth.</h1>
                            <p className='text-secondary text-md md:text-shadow-md max-w-sm md:max-w-xl text-left'>We help businesses grow through strategic marketing, stunning design, and powerful digital solutions that create lasting impact.</p>

                            <div className="flex gap-3 mt-5">

                                <Button asChild className='rounded-none py-5 px-5'>
                                    <Link href={"/contact-us"}>
                                        Get Started
                                    </Link>
                                </Button>

                                <Button asChild variant={'ghost'} className='text-muted hover:bg-white/9 hover:text-white duration-300 transition-colors rounded-none py-5 px-5'>
                                    <Link href={"/about-us"}>
                                        About Us
                                    </Link>
                                </Button>

                            </div>

                        </div>

                    </section>
                </div>
                <Image
                    src={"/hero.png"}
                    fill
                    alt='hero'
                    quality={100}
                    priority
                    className='select-none pointer-events-none object-cover'
                />
            </motion.section>

            {/* Number Stas  */}
            <motion.section style={{y : Numberstats}} className='w-full h-screen bg-white  '>
                <div className="h-full w-full mx-auto max-w-345 md:py-10 flex justify-between flex-col gap-5">
                    <div className="p-6 mb-30">
                        <div className="border-b pb-8 flex items-center justify-between">
                            <p className="text-black uppercase font-semibold"><span className="text-primary">[ {" "}</span>achievements<span className="text-primary"> {" "}]</span></p>
                            <p className="font-semibold">©2026</p>
                        </div>
                        <h1 className="text-black mt-10 font-semibold uppercase max-w-4xl text-4xl md:text-7xl">Results That Speak for Themselves</h1>
                        <p className="max-w-xl font-xl  mt-3 text-muted-foreground">Delivering record-breaking results backed by powerful metrics and real impact—because great design drives real growth.</p>
                    </div>

                    {/* Grid Cols */}
                    <div className=" grid md:grid-cols-3 gap-3">
                        <StatsCard />
                    </div>
                </div>

            </motion.section>
        </section>
    )
}

export default Hero