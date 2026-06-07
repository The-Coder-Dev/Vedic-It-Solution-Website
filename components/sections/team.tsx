"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ashish Mishra",
    role: "Founder & CEO",
    image: "/team/ashish.png",
  },
  {
    id: 2,
    name: "Ashwani Sharma",
    role: "Graphic Designer",
    image: "/team/Ashwani.webp"
  },
  {
    id: 3,
    name: "Praduymn Goyal",
    role: "Growth Strategist",
    image: "/team/pradyumn.png"
  },
  {
    id: 4,
    name: "Mohit Kaushik",
    role: "Ad Expert",
    image: "/team/mohit.jpeg"
  },
  {
    id: 5,
    name: "Dev Sharma",
    role: "Web Developer",
    image: "/team/dev.webp"
  }
]

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const hoverVariants = {
    initial: { y: 0 },
    hover: { y: -8 }
  }

  return (
    <section className='w-full min-h-screen relative py-20 md:py-32'>
      <div className="w-full mx-auto max-w-345 px-7 md:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-16 md:mb-14"
        >
          <p className="text-black uppercase font-semibold text-sm md:text-base">
            <span className="text-primary">[ </span>
            meet the team
            <span className="text-primary"> ]</span>
          </p>
          <h1 className='text-5xl md:text-7xl text-primary font-bold mt-6 mb-4'>
            <span className='font-[dm_serif] italic'>Our Talented</span><br />
            <span className='text-neutral-900 uppercase'>Creative Minds</span>
          </h1>
          <p className='text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed'>
            A diverse team of experts dedicated to transforming your vision into reality. Each member brings unique skills and passion to every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-5 gap-6 md:gap-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
            >
              <motion.div
                variants={hoverVariants}
                initial="initial"
                whileHover="hover"
                className="group h-full"
              >
                {/* Card Container */}
                <div className="relative rounded-lg overflow-hidden bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <motion.div
                    variants={imageVariants}
                    className="relative w-full h-130 md:h-84 overflow-hidden bg-muted"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                      onError={(e) => {
                        // Fallback for missing images
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23333' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23666' text-anchor='middle' dy='.3em'%3ETeam Member%3C/text%3E%3C/svg%3E"
                      }}
                    />
                    
                  </motion.div>

                  {/* Info Section */}
                  <div className="p-4 md:p-5 grow flex flex-col justify-between">
                    <div>
                      <h3 className='text-lg md:text-base lg:text-lg font-semibold text-black group-hover:text-primary transition-colors duration-300'>
                        {member.name}
                      </h3>
                      <p className='text-sm text-secondary font-semibold mt-1 mb-3'>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Accent Line */}
                  {/* <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * member.id }}
                    className="h-1 bg-linear-to-r from-primary to-secondary origin-left"
                  /> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className='text-muted-foreground max-w-2xl mx-auto mb-8'>
            Join our team or let's collaborate on your next project. We're always excited to work with visionary brands and ambitious entrepreneurs.
          </p>
          <Button asChild>
            <Link href="/">Get in touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Team