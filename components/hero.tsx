"use client"

import { motion } from "framer-motion"
import Image from "next/image"


export function Hero() {
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              You&apos;re about to <span className="text-primary">regret</span> not hiring me sooner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mt-5 leading-relaxed"
            >
              I&apos;m <span className="text-foreground font-semibold">Abdull Manan</span>. I build AI systems that solve real problems. My salary isn&apos;t a <span className="text-primary font-medium">cost</span> — it&apos;s your best <span className="text-primary font-medium">investment</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted-foreground/60 mt-6 pt-4 border-t border-border italic"
            >
              Source: Trust Me
            </motion.p>
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
