"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Dot follows instantly
  const dotX = useSpring(rawX, { stiffness: 800, damping: 50, mass: 0.3 })
  const dotY = useSpring(rawY, { stiffness: 800, damping: 50, mass: 0.3 })

  // Ring lags behind for trail effect
  const ringX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 })
  const ringY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], label")
      setHovering(!!interactive)
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", handleOver)
    document.documentElement.addEventListener("mouseleave", handleLeave)
    document.documentElement.addEventListener("mouseenter", handleEnter)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", handleOver)
      document.documentElement.removeEventListener("mouseleave", handleLeave)
      document.documentElement.removeEventListener("mouseenter", handleEnter)
    }
  }, [rawX, rawY, visible])

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          borderColor: hovering ? "rgba(38,217,199,0.9)" : "rgba(38,217,199,0.5)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 6 : 5,
          height: hovering ? 6 : 5,
          opacity: hovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
