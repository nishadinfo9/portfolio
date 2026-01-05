'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js & Tailwind CSS',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Tailwind CSS, ShadCN & Figma',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast Loading, Web Optimization',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Git, GitHub',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <div className="mx-auto h-1 w-12 rounded-full bg-primary" />
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>

              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I’m a Frontend Developer with experience building
                  production-ready dashboard and admin panel applications. I
                  focus on writing clean, maintainable code and creating simple,
                  user-friendly interfaces using modern frontend tools. I mainly
                  work with React, Tailwind CSS, and Redux Toolkit, and I’m
                  currently learning Next.js to grow into a full-stack
                  developer.
                </p>

                <ul className="list-disc space-y-1 pl-5">
                  <li>Built real-world dashboard and admin panel features</li>
                  <li>
                    Strong frontend foundation with basic backend knowledge
                  </li>
                  <li>Acquiring skills to become a full-stack developer</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
