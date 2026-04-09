"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const highlightedTech = ["Python", "Node.js", "ReactJS", "Docker", "Kubernetes", "MySQL"]

export function Hero() {
  const renderDescription = () => {
    const text = "I am an AI Engineer specializing in building intelligent systems and high-performance applications. Skilled in Python, Node.js, ReactJS, and experienced in Docker, Kubernetes and MySQL"
    
    let result = text
    highlightedTech.forEach((tech) => {
      result = result.replace(
        new RegExp(`\\b${tech}\\b`, "g"),
        `<span class="text-primary">${tech}</span>`
      )
    })
    
    return result
  }

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight"
            >
              Abdull
              <br />
              Manan
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground mt-4 font-medium"
            >
              AI Engineer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderDescription() }}
            />
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[675px]">
              <Image
                src="/homeprofile.png"
                alt="Abdull Manan - AI Engineer"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
