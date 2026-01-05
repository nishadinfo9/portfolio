'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import DownloadResumeButton from './DownloadResumeButton'

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

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // Animate name with split text effect
    if (nameRef.current) {
      const nameText = nameRef.current.textContent || ''
      nameRef.current.innerHTML = nameText
        .split('')
        .map(
          (char, i) =>
            `<span class="inline-block" style="transform: translateY(100px); opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        )
        .join('')

      tl.to(nameRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      })
    }

    // Animate title
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      )
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
    }
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="container z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Heading with GSAP Animation */}
          <div className="space-y-6">
            <h1
              ref={nameRef}
              className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl"
            >
              Nishad Hasan
            </h1>

            <p
              ref={titleRef}
              className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl"
            >
              Frontend Developer
            </p>

            <p
              ref={subtitleRef}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Building interactive, high-performance web applications with
              <span className="font-semibold text-[#61DAFB]"> React </span> and
              <span className="font-semibold text-[#06B6D4]">
                {' '}
                Tailwind CSS{' '}
              </span>
              for seamless user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                My Projects
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button variant="outline" size="lg" className="group">
              <DownloadResumeButton />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full border border-border/40 bg-background/80 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-muted"
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

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          onClick={scrollToAbout}
          className="group absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </motion.div>
        </motion.button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-r from-primary/10 to-muted/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-muted/10 to-primary/10 blur-3xl"
        />
      </div>
    </section>
  )
}
