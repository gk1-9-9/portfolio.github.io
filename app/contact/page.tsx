"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoadingAnimation } from "@/components/loading-animation"
import { Footer } from "@/components/footer"
import { MapPin, Mail, Phone, Send, MessageSquare, User, AtSign, Instagram } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setFormStatus("success")
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        console.error("Form submission error:", data.message)
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    } finally {
      setSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000)
    }
  }

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <div
      className="min-h-screen bg-silver dark:bg-navy text-slate-900 dark:text-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff10' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-700 dark:text-slate-300 mb-12"
          >
            I'd love to hear from you. Whether you have a question, project inquiry, or just want to say hello!
          </motion.p>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl -z-10"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="md:col-span-2"
              >
                <div className="bg-white/10 dark:bg-navy-light/10 backdrop-blur-sm rounded-xl p-6 border border-gold/10 h-full">
                  <h2 className="text-2xl font-bold mb-6 text-gold">Contact Information</h2>

                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 dark:bg-navy-light/5 border border-gold/10"
                    >
                      <div className="p-3 rounded-full bg-gold/10 text-gold">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <a
                          href="mailto:bt22cse001@iiitn.ac.in"
                          className="text-slate-700 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors"
                        >
                          bt22cse001@iiitn.ac.in
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 dark:bg-navy-light/5 border border-gold/10"
                    >
                      <div className="p-3 rounded-full bg-gold/10 text-gold">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <a
                          href="tel:+918882104355"
                          className="text-slate-700 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors"
                        >
                          +91 8882104355
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 dark:bg-navy-light/5 border border-gold/10"
                    >
                      <div className="p-3 rounded-full bg-gold/10 text-gold">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Location</h3>
                        <p className="text-slate-700 dark:text-slate-300">Nagpur, Maharashtra, India</p>
                      </div>
                    </motion.div>

                    <div className="p-6 rounded-lg bg-white/5 dark:bg-navy-light/5 border border-gold/10">
                      <h3 className="font-bold mb-4 text-center">Connect on Social Media</h3>
                      <div className="flex justify-center gap-6">
                        <motion.a
                          whileHover={{ y: -5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          href="https://github.com/gk1-9-9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </motion.a>

                        <motion.a
                          whileHover={{ y: -5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          href="https://www.linkedin.com/in/gkgauravkumar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </motion.a>

                        <motion.a
                          whileHover={{ y: -5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          href="mailto:bt22cse001@iiitn.ac.in"
                          className="p-3 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </motion.a>

                        <motion.a
                          whileHover={{ y: -5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          href="https://www.instagram.com/gk_1.9.9/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                        >
                          <Instagram className="h-6 w-6" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-3"
              >
                <div className="bg-white/10 dark:bg-navy-light/10 backdrop-blur-sm rounded-xl p-6 border border-gold/10 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gold">Send a Message</h2>
                    <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-gold" />
                    </div>
                  </div>

                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400"
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400"
                    >
                      There was an error sending your message. Please try again.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gold" />
                          <label htmlFor="name" className="font-medium">
                            Name
                          </label>
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white/5 border-gold/20 focus:border-gold/50"
                          disabled={submitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AtSign className="h-4 w-4 text-gold" />
                          <label htmlFor="email" className="font-medium">
                            Email
                          </label>
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-white/5 border-gold/20 focus:border-gold/50"
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gold" />
                        <label htmlFor="subject" className="font-medium">
                          Subject
                        </label>
                      </div>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="bg-white/5 border-gold/20 focus:border-gold/50"
                        disabled={submitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gold" />
                        <label htmlFor="message" className="font-medium">
                          Message
                        </label>
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        required
                        className="bg-white/5 border-gold/20 focus:border-gold/50"
                        disabled={submitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold/90 text-navy rounded-full group" 
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Office Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 rounded-xl overflow-hidden h-64 md:h-80 relative"
            >
              <Image
                src="/Mountain-hero.png?height=400&width=1200"
                alt="Office space"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}  // Shifts the image down
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Let's create something amazing together</h3>
                  <p className="max-w-2xl">Ready to bring your ideas to life? I'm just a message away.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}