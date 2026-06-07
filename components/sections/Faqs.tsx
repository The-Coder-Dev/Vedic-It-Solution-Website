"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer comprehensive digital solutions including Meta Ads, Google Ads, Graphic Design, Website Development, and Video Editing. Our services are designed to help businesses grow and engage with their audience effectively."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Website projects typically take 2-6 weeks, video editing 1-3 weeks, and ad campaigns can be launched within 1-2 weeks. We'll provide a detailed timeline during consultation."
  },
  {
    id: 3,
    question: "Do you provide support after project completion?",
    answer: "Absolutely! We offer ongoing support and maintenance packages for all our services. Whether it's updating your website, optimizing your ads, or creating new content, we're here to help your business succeed."
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: "We offer flexible pricing based on project scope and requirements. We can work with your budget and provide customized quotes. Contact us for a detailed proposal tailored to your needs."
  },
  {
    id: 5,
    question: "Can you work with startups?",
    answer: "Yes! We love working with startups and emerging businesses. We offer competitive packages and can scale services based on your growth. We're committed to helping new ventures establish their digital presence."
  },
  {
    id: 6,
    question: "How do I get started?",
    answer: "Simply reach out to us via our contact page or email. We'll schedule a consultation to understand your goals, discuss your project, and create a customized plan to achieve your objectives."
  }
]

const Faqs = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

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
        ease: "easeOut"
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
        ease: "easeOut"
      }
    }
  }

  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 }
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
          className="mb-16 md:mb-24"
        >
          <p className="text-black uppercase font-semibold text-sm md:text-base">
            <span className="text-primary">[ </span>
            frequently asked questions
            <span className="text-primary"> ]</span>
          </p>
          <h1 className='text-5xl md:text-7xl text-black uppercase font-semibold mt-6 mb-4'>
            Questions?<br />
            <span className='text-black'>We Have Answers</span>
          </h1>
          <p className='text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed'>
            Everything you need to know about our services, pricing, and process. Can't find what you're looking for? <span className='text-secondary font-semibold'>Contact us directly</span>.
          </p>
        </motion.div>

        {/* FAQs Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-4 md:gap-6"
        >
          {faqData.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full text-left cursor-pointer"
              >
                <motion.div
                  className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${
                    activeId === faq.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card/50 hover:border-primary/50 hover:bg-card/80'
                  }`}
                  whileHover={{ translateY: -2 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        activeId === faq.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {faq.question}
                      </h3>
                      <motion.div
                        variants={chevronVariants}
                        animate={activeId === faq.id ? "expanded" : "collapsed"}
                        transition={{ duration: 0.3 }}
                        className='shrink-0 mt-1'
                      >
                        <ChevronDown
                          size={24}
                          className={`transition-colors duration-300 ${
                            activeId === faq.id ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeId === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className='text-muted-foreground leading-relaxed pt-4 border-t border-border/30 mt-4'>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className='text-2xl md:text-3xl font-semibold text-black mb-2'>Still have questions?</h2>
              <p className='text-muted-foreground'>Our team is here to help. Get in touch with us for a personalized consultation.</p>
            </div>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 bg-primary text-primary-foreground font-semibold rounded whitespace-nowrap hover:bg-primary/90 transition-colors duration-300'
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs