"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Linux", icon: "🐧" },
  { name: "Bash", icon: "💻" },
  { name: "Nix", icon: "❄️" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git", icon: "📦" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
]

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Decent" },
  { name: "Arabic", level: "Learning" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-8"
        >
          Skills
        </motion.h2>

        {/* Tech Stack */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-4"
          >
            Tech Stack
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 cursor-default"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-4"
          >
            Languages
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 cursor-default"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {lang.name} ({lang.level})
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
