"use client"

import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import StatsCard from '../StatsCard'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'

const Hero = () => {

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    // Only the background image moves upward — classic parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <>
            {/* ── Hero Section ── */}
            <section ref={heroRef} className='w-full h-screen relative overflow-hidden'>

                {/* Background image with parallax */}
                <motion.div
                    style={{ y: bgY }}
                    className='absolute inset-0 w-full h-full scale-110'
                >
                    <Image
                        src={"/hero.png"}
                        fill
                        alt='hero background'
                        quality={100}
                        priority
                        className='select-none pointer-events-none object-cover'
                    />
                </motion.div>

                {/* Foreground content — positioned at bottom-left */}
                <div className="relative z-10 w-full h-full flex items-end">
                    <div className="w-full mx-auto max-w-345 px-7 pb-16 md:pb-20">
                        <div className="flex flex-col gap-4 items-start max-w-7xl">

                            <h1 className='text-white text-4xl md:text-7xl uppercase text-left font-bold leading-tight'>
                                <span className='text-secondary'>More than marketing.</span>
                                <br />driving growth.
                            </h1>

                            <p className='text-secondary text-sm md:text-base max-w-sm md:max-w-xl text-left'>
                                We help businesses grow through strategic marketing, stunning design, and powerful digital solutions that create lasting impact.
                            </p>

                            <div className="flex gap-3 mt-5">
                                <Button asChild className='rounded-none py-5 px-5'>
                                    <Link href={"/contact-us"}>Get Started</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant={'ghost'}
                                    className='text-muted hover:bg-white/9 hover:text-white duration-300 transition-colors rounded-none py-5 px-5'
                                >
                                    <Link href={"/about-us"}>About Us</Link>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* ── Number Stats Section ── */}
            <section className='w-full bg-white'>
                <div className="w-full mx-auto max-w-345 px-7 md:px-0 py-16 md:py-20 flex flex-col gap-10">

                    <div>
                        <div className="border-b pb-8 flex items-center justify-between">
                            <p className="text-black uppercase font-semibold">
                                <span className="text-primary">[ </span>achievements<span className="text-primary"> ]</span>
                            </p>
                            <p className="font-semibold">©2026</p>
                        </div>
                        <h2 className="text-black mt-10 font-semibold uppercase max-w-4xl text-4xl md:text-7xl">
                            Results That Speak for Themselves
                        </h2>
                        <p className="max-w-xl text-base mt-3 text-muted-foreground">
                            Delivering record-breaking results backed by powerful metrics and real impact—because great design drives real growth.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <StatsCard />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero