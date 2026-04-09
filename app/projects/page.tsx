"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

const projects = [
  {
    title: "GenzPy",
    description: "A Python-based CLI tool tailored for the Gen Z developer — fast, expressive, and built with modern scripting in mind.",
    images: [
      "/genzpy.png",
    ],
    sourceUrl: "https://github.com/look-another-one/genzpy",
  },
  {
    title: "Reminder to Look at You",
    description: "A conceptual application designed to remind users to look at themselves and practice mindfulness during long work sessions.",
    images: [
      "/reminder-to-look-at-you.png",
    ],
    sourceUrl: "https://github.com/look-another-one/reminder-to-look-at-you",
  },
]

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground">
            Here are some of the projects I&apos;d like to share
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              images={project.images}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>

        {/* Building New Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            I am currently building new projects and learning backend development to expand my skill set beyond frontend.
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit my github to see some of the latest projects{" "}
            <a
              href="https://github.com/look-another-one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Github
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
