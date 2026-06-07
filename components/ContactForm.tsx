"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Loader2, CheckCircle } from "lucide-react"

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }).max(100, {
    message: "Full name must not be longer than 100 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }).max(100, {
    message: "Subject must not be longer than 100 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message must not be longer than 1000 characters.",
  }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormValues) {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Form submitted:", data)
      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <CheckCircle size={20} className="text-green-600" />
          <div>
            <h4 className="font-semibold text-green-900">Message sent successfully!</h4>
            <p className="text-sm text-green-700">We'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {/* Full Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Full Name
          </label>
          <input
            {...register("fullName")}
            placeholder="John Doe"
            className="px-4 py-3 border border-border rounded-lg bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
          />
          {errors.fullName && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500"
            >
              {errors.fullName.message}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="px-4 py-3 border border-border rounded-lg bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Subject
        </label>
        <input
          {...register("subject")}
          placeholder="Project Inquiry"
          className="px-4 py-3 border border-border rounded-lg bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-500"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Your Message
        </label>
        <textarea
          {...register("message")}
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          className="px-4 py-3 border border-border rounded-lg bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-500"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: isLoading ? 1 : 0.98 }}
        className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>

      {/* Character Count */}
      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24 hours
      </p>
    </form>
  )
}
