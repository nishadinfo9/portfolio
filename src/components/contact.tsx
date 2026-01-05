'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profile from '@/../public/profile.png'
import Image from 'next/image'
import toast from 'react-hot-toast'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          formData,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          (response: any) => {
            console.log('SUCCESS!', response.status, response.text)
            toast.success('message sent successfully')
          },
          (error: any) => {
            console.log('FAILED...', error)
            toast.error('message sending failed')
          }
        )
    } catch (error: any) {
      console.log(error)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nishadinfo9',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/me-nishadhasan',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:info.nishadhasan@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              Contact
            </motion.h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Side - Profile & Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-8"
            >
              {/* Profile Card */}
              <div className="mb-8 flex items-center gap-4">
                <div className="relative">
                  <Image
                    className="flex h-16 w-16 items-center justify-center rounded-full border text-2xl font-bold"
                    height={100}
                    width={100}
                    src={profile}
                    alt="profile"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nishad Hasan</h3>

                  <div className="font-md  flex w-24 items-center gap-1 rounded-full border border-green-500 bg-green-100 px-2 py-1 text-center text-sm font-medium text-green-500 dark:bg-green-500 dark:bg-opacity-20">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <p>Available</p>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col justify-center gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/80 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-muted"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <span className="sr-only">{link.name}</span>

                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                      {link.name}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold">Send me a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send
                    <Send className="h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
