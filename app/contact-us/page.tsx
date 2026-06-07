"use client"

import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const contactDetails = [
    {
      id: 1,
      icon: Mail,
      title: "Email Us",
      items: ["contact@vedictisolutions.in"]
    },
    {
      id: 2,
      icon: Phone,
      title: "Call Us",
      items: ["+91-7454803120"]
    },
    {
      id: 3,
      icon: MapPin,
      title: "Visit Us",
      items: ["123 Creative Plaza, Tech Park", "New Delhi, India 110001"]
    }
  ]

  return (
    <section className='w-full min-h-screen'>
      <PageHeader title='Contact Us' />

      {/* Main Content */}
      <section className='w-full py-12 md:py-20'>
        <div className="max-w-345 mx-auto px-7 md:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Details - Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6"
            >
              {contactDetails.map((detail) => {
                const IconComponent = detail.icon
                return (
                  <motion.div
                    key={detail.id}
                    variants={itemVariants}
                    className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 bg-card/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded">
                        <IconComponent size={24} className='text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-black mb-2'>{detail.title}</h3>
                        <div className="space-y-1">
                          {detail.items.map((item, idx) => (
                            <p key={idx} className='text-sm text-neutral-600'>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Map Placeholder */}
              <motion.div
                variants={itemVariants}
                className="rounded-lg overflow-hidden h-64 bg-muted border border-border"
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7790933119656!2d77.20215097520933!3d28.612912875690253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd288f1bf215%3A0x9f9e6a8b5e8a8b8b!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form - Right */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border border-border rounded-lg p-8 bg-card/50">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ContactUs