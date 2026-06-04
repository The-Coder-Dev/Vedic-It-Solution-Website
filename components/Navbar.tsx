"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

import { X, Menu } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { title: "Home", url: "/", id: "1" },
  { title: "About Us", url: "/", id: "2" },
  { title: "Services", url: "/", id: "3" },
  { title: "On Board", url: "/", id: "4" },
  { title: "Contact Us", url: "/", id: "5" }
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-fit absolute inset-x-0 top-0 z-999">
      <nav className="w-full flex items-center justify-between px-3 md:py-8 py-4 mx-auto md:max-w-345">

        <div className="text-white text-xl font-semibold">
          <Link href={"/"}>
            <h1>Vedic</h1>
          </Link>
        </div>

        <Button className="flex md:hidden" onClick={() => { setIsOpen(!isOpen) }}>
          {isOpen ? <X /> : <Menu />}
        </Button>

        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-4 items-center justify-center  ">
            {navLinks.map((item) => (
              <Button asChild variant={"ghost"} className="text-muted hover:bg-muted/10 hover:text-muted transition-all duration-300 ">
                <Link href={item.url} key={item.id}>
                  {item.title}
                </Link>
              </Button>
            ))}

            <Button asChild className='bg-white/20 rounded-none py-5 px-5'>
              <Link href={"/"}>
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>

      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-18 right-3 w-56 rounded-2xl bg-white backdrop-blur-md shadow-xl p-4 flex flex-col gap-3 md:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="px-3 py-2 rounded-lg hover:bg-primary text-black hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar