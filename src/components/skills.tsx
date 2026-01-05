'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Frontend Technologies',
    icon: '⚛️',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', level: 40, color: 'from-gray-700 to-gray-900' },
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', level: 10, color: 'from-blue-500 to-blue-700' },
    ],
  },
  {
    title: 'Styling & Design',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-cyan-600' },
      {
        name: 'ShadCN',
        level: 40,
        color: 'from-blue-700 to-blue-900',
      },
      { name: 'Figma', level: 70, color: 'from-red-400 to-red-600' },
      {
        name: 'Responsive Design',
        level: 90,
        color: 'from-indigo-400 to-indigo-600',
      },
    ],
  },
  {
    title: 'Tools & Backend',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 90, color: 'from-gray-600 to-gray-800' },
      { name: 'Node.js', level: 60, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 70, color: 'from-gray-500 to-gray-700' },
      { name: 'MongoDB', level: 60, color: 'from-green-600 to-green-800' },
    ],
  },
]

const technologies = [
  'React',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'ShadCN',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Git',
  'Netlify',
  'Vercel',
  'Figma',
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-6xl"
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
              Skills & Expertise
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
              A comprehensive overview of my technical skills and proficiency
              levels in modern frontend development technologies.
            </motion.p>
          </div>

          {/* Skills Categories */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full border-2 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="text-2xl">{category.icon}</div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-muted">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.2,
                                delay:
                                  categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                ease: 'easeOut',
                              }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${skill.color} relative rounded-full`}
                            >
                              <div className="absolute inset-0 animate-pulse rounded-full bg-white/20" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <h3 className="mb-8 text-2xl font-semibold">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="cursor-default px-4 py-2 text-sm shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
