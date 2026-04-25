"use client"

import { motion } from "framer-motion"

export default function BooksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-primary italic">Books</span>
          </h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"
          />

          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            First Book is <span className="text-foreground">coming Soon</span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="mt-12 inline-flex items-center gap-2 text-primary/60 text-sm font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            STAY TUNED
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
