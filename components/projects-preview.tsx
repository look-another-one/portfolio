"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Logo } from "./logo"

const projects = [
  {
    id: 1,
    title: "GenzPy",
    tags: ["Python", "CLI", "Tool"],
  },
  {
    id: 2,
    title: "Reminder to Look at You",
    tags: ["Productivity", "Web App"],
  },
]

export function ProjectsPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-primary mb-12"
        >
          My projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/projects" className="block">
                <div className="flex items-baseline gap-4">
                  <span className="text-primary text-xl md:text-2xl font-bold">
                    {project.id}.
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-10 md:ml-12">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-muted-foreground text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center"
        >
          <div className="mr-4">
            <svg
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2L2 46H10L14 36H26L30 46H38L20 2Z"
                stroke="#26d9c7"
                strokeWidth="2.5"
                fill="none"
              />
              <path
                d="M16 28L20 16L24 28"
                stroke="#26d9c7"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 group"
          >
            <span className="text-lg font-medium">See more projects</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
