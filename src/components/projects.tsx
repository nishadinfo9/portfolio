'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Habits Tracker Dashboard',
    description:
      'Habit Tracker is a web app that lets users create, manage, and track daily habits, visualize streaks, and maintain consistent routines with an intuitive, user-friendly interface.',
    image: '/habitsflow-home.png',
    technologies: [
      'React',
      'Tailwind CSS',
      'ShadCN',
      'swiper',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    github: 'https://github.com/nishadinfo9/Habit_Tracker',
    live: 'https://assignment-10-fullstack.web.app',
    featured: true,
  },
  {
    title: 'Zap Shift Delivery',
    description:
      'Zap Shift is a full-featured courier application in Bangladesh, allowing users to send and track parcels, make secure payments, and manage deliveries with role-based dashboards for Admin, Rider, and User.',
    image: '/zap shift project.png',
    technologies: [
      'React',
      'Tailwind CSS',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    github: 'https://github.com/nishadinfo9/Zap-shift-delivery-projects',
    live: 'https://zap-shift-551aa.web.app',
  },
  {
    title: 'Local Chef Bazaar Food Application',
    description:
      'LocalChefBazaar is an online platform connecting home cooks with customers, allowing users to browse meals, place orders, make secure payments, and track deliveries in real time. It empowers chefs to earn income while offering fresh, homemade food to customers.',
    image: '/local-chef-bazar.png',
    technologies: [
      'React',
      'Tailwind CSS',
      'Stripe',
      'Cloudinary',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    github: 'https://github.com/nishadinfo9/LocalChefBazaar-frontend',
    live: 'https://chef-bazaar.vercel.app',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto h-1 rounded-full bg-primary"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              Recent projects that highlight my frontend skills and design
              approach.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Card className="h-full overflow-hidden border-2 transition-all duration-500 hover:border-primary/20 hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute right-4 top-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="backdrop-blur-sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-16 text-center"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              Interested in working together?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects. Let&apos;s create something amazing
              together.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
