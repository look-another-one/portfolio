"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Profile Image with frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Teal frame behind image */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/30 rounded-lg"
                whileHover={{ bg: "primary/50", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] lg:w-[400px] lg:h-[550px] rounded-lg overflow-hidden border-4 border-primary/50 shadow-lg"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                  borderColor: "rgb(16, 185, 129)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/heroProfile.png"
                  alt="Abdull Manan - AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Loading indicator overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-primary">Abdull</span>
              <br />
              <span className="text-primary">Manan</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                I turn ideas into intelligent systems. Whether I&apos;m building machine learning pipelines, designing AI-powered applications, or engineering scalable backend solutions, I bring a deep focus on performance, clarity, and real-world impact to everything I create.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Explore my latest{" "}
                <Link href="/projects" className="text-primary hover:underline">
                  projects
                </Link>{" "}
                showcasing my expertise in Python, React, Typescript, Docker, and AI engineering.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex items-center gap-1">
                {/* Pakistan Flag */}
                <div className="w-8 h-5 relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/4 bg-white" />
                    <div className="w-3/4 bg-[#01411C] flex items-center justify-center">
                      <span className="text-white text-xs">☪</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-foreground font-medium">Gujrat, Pakistan</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
