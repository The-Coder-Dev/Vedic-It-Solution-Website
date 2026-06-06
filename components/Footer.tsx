"use client"
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'
import DecryptedText from './DecryptedText'

const Footer = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ctaSection = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
    const footer = useTransform(scrollYProgress, [0, 1], ["0", "0%"]);

    return (
        <section className='w-full h-[200vh] relative ' ref={ref}>
            {/* Cta */}
            <motion.section style={{ y: ctaSection }} className="w-full  h-screen relative">
                <div className="mx-auto max-w-345 flex py-14 px-8 w-full items-center justify-center h-full relative z-5">
                    <div className=" ">
                        <h1 className='mx-auto  text-gray-300 text-6xl font-semibold uppercase text-left'>Let's Build Something</h1>
                        <DecryptedText
                            className='mx-auto text-white text-9xl font-bold uppercase'
                            text="EXTRA ORDINARY"
                            animateOn='view'
                            revealDirection='start'
                            sequential
                            useOriginalCharsOnly={false}
                            encryptedClassName="encrypted"
                            parentClassName="all-letters"
                        />
                        <div className="">
                            <Button asChild size={"lg"} className='rounded-none py-5 px-5 mt-4 ml-3'>
                                <Link href={"/"}>
                                    Let's Talk
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="">

                    </div>
                </div>
                {/* Background Image */}
                <div className="absolute inset-0 z-3 bg-black/40" />
                <Image src="/ctaBg.png" className="object-cover" fill alt="Cta-image" />
            </motion.section>

            {/* Footer */}
            <motion.section style={{ y: footer }} className='w-full  h-screen bg-amber-700 z-5 relative '>
                <section className='w-full mx-auto max-w-345 flex flex-col items-start justify-between py-15 px-8 absolute inset-0 z-3'>
                    <div className="flex flex-col gap-6">
                        <p className='text-gray-400'>Connect with us</p>
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

            </motion.section>

        </section>
    )
}

export default Footer