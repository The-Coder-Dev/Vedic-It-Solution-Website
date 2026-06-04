'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const hero = useTransform(scrollYProgress, [0, 1], ["0", "60%"]);
    const about = useTransform(scrollYProgress, [0, 1], ["0", "-1%"])
    return (
        <section className='w-full h-screen relative' ref={ref}>
            <div className="w-full h-full  flex items-end justify-center mx-auto max-w-345 py-20">
                <section className='absolute z-99'>
                    <div className="flex flex-col gap-4 items-center ">

                        <h1 className='text-white text-4xl md:text-6xl uppercase text-center font-semibold'>We help you to<br /> grow your buisness</h1>
                        <p className='text-muted max-w-sm md:max-w-xl text-center'>Your on-demand AI workforce. Automate routine tasks, streamline decision-making, and free your team to focus on what matters most.</p>

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

                </section>

                <Image
                    src={"/hero.png"}
                    fill
                    alt='hero'
                    objectFit='cover'
                    quality={100}
                    priority
                    className='select-none pointer-events-none'
                />
            </div>
        </section>
    )
}

export default Hero