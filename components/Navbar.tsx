"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

import { X, Menu, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Menubar from "./Menubar"

const navLinks = [
  { title: "Home", url: "/", id: "1" },
  { title: "About Us", url: "/", id: "2" },
  { title: "Services", url: "/", id: "3" },
  { title: "On Board", url: "/", id: "4" },
  { title: "Contact Us", url: "/", id: "5" }
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [onboardOpen, setOnboardOpen] = useState(false);

  return (
    <header className="w-full h-fit absolute inset-x-0 top-0 z-999">
      <nav className="w-full flex items-center justify-between px-3 md:py-8 py-4 mx-auto md:max-w-345">

        <div className="text-white text-xl font-semibold relative">
          <Link href={"/"}>
            <Image src="/logo.png" width={100} height={30} alt="logo" />
          </Link>
        </div>

        <Button className="flex md:hidden cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop menu */}
        <div className="flex gap-3">
          <Menubar />
          <Button asChild className='rounded-none py-5 px-5'>
            <Link href={"/"}>
              Get Started
            </Link>
          </Button>
        </div>


      </nav>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-18 right-3 w-56 rounded-2xl bg-white/20 border-white/20 border backdrop-blur-xl shadow-xl p-4 flex flex-col gap-3 md:hidden"
          >
            {/* Home */}
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:bg-white/13 text-white duration-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg  hover:bg-white/13 text-white duration-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            {/* Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between cursor-pointer px-3 py-2 text-white"
              >
                <span>Services</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden ml-4 flex flex-col"
                  >
                    <Link
                      href="/services/meta-ads"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Meta Ads
                    </Link>

                    <Link
                      href="/services/google-ads"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Google Ads
                    </Link>

                    <Link
                      href="/services/graphic-design"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Graphic Design
                    </Link>

                    <Link
                      href="/services/website-development"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Website Development
                    </Link>

                    <Link
                      href="/services/video-production-editing"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Video Production & Editing
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* On Board */}
            <div>
              <button
                onClick={() => setOnboardOpen(!onboardOpen)}
                className="w-full flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-white/13 rounded-md text-white duration-300 transition-colors"
              >
                <span>On Board</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${onboardOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {onboardOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden ml-4 flex flex-col"
                  >
                    <Link
                      href="/onboard/meta-ads-form"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Meta Ads Form
                    </Link>

                    <Link
                      href="/onboard/social-media-form"
                      className="py-2 text-sm pl-2 rounded-md hover:bg-white/13 text-white duration-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Social Media Form
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg hover:bg-white/13 text-white duration-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar