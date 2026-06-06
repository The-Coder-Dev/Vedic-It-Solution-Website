import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="w-full  h-170 z-5 relative ">
            <section className="w-full mx-auto max-w-345 flex flex-col items-start justify-between py-15 px-8 absolute inset-0 z-3">
                <div className="w-full h-full flex flex-col gap-6 justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="text-white"><span>[ </span>Connect with us<span> ]</span></p>
                        <h1 className="text-white text-4xl md:text-6xl">
                            Don't scale harder.
                            <br /> Scale smarter.
                        </h1>
                        <p className="text-muted max-w-lg">
                            AI Supply helps you automate complex workflows, reduce operating
                            costs, and scale faster — without hiring more people.
                        </p>

                        <div className="flex gap-3">
                            <Button asChild className="rounded-none py-5 px-5">
                                <Link href={"/contact-us"}>Get Started</Link>
                            </Button>

                            <Button asChild className="bg-white/20 rounded-none py-5 px-5">
                                <Link href={"/about-us"}>About Us</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-4 items-start justify-between">
                        <Button asChild  className="text-gray-400 hover:text-white text-2xl md:text-4xl" variant='link'>
                            <Link href="mailto:contact@vedicitsolutions.in">
                                contact@vedicitsolutions.in
                            </Link>
                        </Button>
                        <Button asChild  className="text-gray-400 hover:text-white text-2xl md:text-4xl" variant='link'>
                            <Link href="tel:+91-7454803120">
                                +91-7454803120
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full flex items-center mt-14 justify-between">
                    <div className="flex gap-2 items-center jusitfy-center">
                        <h1 className="text-muted/40 text-md ">Vedic IT Solutions</h1>
                        <p className="text-muted/40 text-sm">©2026. All Rights Reserved</p>
                    </div>

                    <div className="flex gap-3 items-center justify-center ">
                        <Link
                            href={"https://www.instagram.com/vedicitsolutions/"}
                            target="_blank"
                        >
                            <div className="bg-white/90 p-2 transition-colors duration-300 rounded-full hover:bg-white/50">
                                <Image
                                    src={"/svg/instagram.svg"}
                                    width={15}
                                    height={16}
                                    alt="instagram"
                                    className=""
                                />
                            </div>
                        </Link>
                        <Link
                            href={"https://www.facebook.com/profile.php?id=61583642414776#"}
                            target="_blank"
                        >
                            <div className="bg-white/90 p-2 transition-colors duration-300 rounded-full hover:bg-white/50">
                                <Image
                                    src={"/svg/facebook.svg"}
                                    width={15}
                                    height={16}
                                    alt="instagram"
                                    className=""
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="w-full bg-black/50 absolute inset-0 z-2" />
            <Image src={"/hero.png"} fill className="object-cover" alt="footerImg" />
        </section>
    );
};

export default Footer;
