"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function About() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="text-primary">Abdull Manan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground leading-relaxed"
        >
          I turn ideas into intelligent systems. Whether I&apos;m building machine learning pipelines, designing AI-powered applications, or engineering scalable backend solutions, I bring a deep focus on performance, clarity, and real-world impact to everything I create.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed"
        >
          Explore my latest{" "}
          <Link href="/projects" className="text-primary hover:underline">
            projects
          </Link>
          {" "}showcasing my expertise in Python.
        </motion.p>
      </div>
    </section>
  )
}
