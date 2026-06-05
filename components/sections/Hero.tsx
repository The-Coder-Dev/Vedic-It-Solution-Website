
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'


const Hero = () => {

    return (
        <section className='w-full h-screen' >
            <div className="w-full h-full  flex items-end justify-center mx-auto max-w-345 py-20">
                <section className='absolute z-99 px-4'>
                    <div className="flex flex-col gap-4 items-center ">

                        <h1 className='text-white text-2xl md:text-6xl uppercase text-center font-semibold'>We help you to<br /> grow your buisness</h1>
                        <p className='text-muted text-sm md:text-shadow-md max-w-sm md:max-w-xl text-center'>Your on-demand AI workforce. Automate routine tasks, streamline decision-making, and free your team to focus on what matters most.</p>

                        <div className="flex gap-3">

                            <Button asChild className='rounded-none py-5 px-5'>
                                <Link href={"/"}>
                                    Get Started
                                </Link>
                            </Button>

                            <Button asChild variant={'ghost'} className='text-muted hover:bg-white/9 hover:text-white duration-300 transition-colors rounded-none py-5 px-5'>
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
                    
                    quality={100}
                    priority
                    className='select-none pointer-events-none object-cover'
                />
            </div>
        </section>
    )
}

export default Hero