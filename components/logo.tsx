"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Stylized 'A' logo matching the design */}
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
      </motion.svg>
    </Link>
  )
}
