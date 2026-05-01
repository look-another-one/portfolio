"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ContactForm } from "@/components/contact-form"
import { MapPin } from "lucide-react"

/* ─── Social link data ─────────────────────────────────── */
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/look-another-one",
    color: "#6e7681",
    glow: "rgba(110,118,129,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullmanan/",
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://www.x.com/abdull__manan",
    color: "#e7e9ea",
    glow: "rgba(231,233,234,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L2.25 2.25h6.896l4.259 5.63 5.839-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/look-another-one",
    color: "#26a5e4",
    glow: "rgba(38,165,228,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/letsdoshitt/",
    color: "#e1306c",
    glow: "rgba(225,48,108,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/abX8uftrAj",
    color: "#5865f2",
    glow: "rgba(88,101,242,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/abdullmanan.dev",
    color: "#1877f2",
    glow: "rgba(24,119,242,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

/* ─── Individual branch node ───────────────────────────── */
function BranchNode({
  link,
  index,
  side,
}: {
  link: (typeof socialLinks)[0]
  index: number
  side: "left" | "right"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${side === "right" ? "flex-row" : "flex-row-reverse"} gap-0`}
      style={{ marginBottom: "2rem" }}
    >
      {/* Horizontal branch line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
        style={{
          transformOrigin: side === "right" ? "left" : "right",
          background: `linear-gradient(${side === "right" ? "90deg" : "270deg"}, ${link.color}88, ${link.color}22)`,
        }}
        className="w-16 sm:w-20 h-[2px] flex-shrink-0"
      />

      {/* Knot dot on trunk */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.08 }}
        style={{ background: link.color, boxShadow: `0 0 8px 2px ${link.glow}` }}
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
      />

      {/* Social card */}
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: side === "right" ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, delay: index * 0.08 + 0.15, ease: "easeOut" }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.97 }}
        style={
          {
            "--glow": link.glow,
            "--accent": link.color,
            borderColor: `${link.color}44`,
          } as React.CSSProperties
        }
        className="
          group flex items-center gap-3 px-4 py-3 rounded-xl
          bg-secondary/60 backdrop-blur-sm border
          hover:border-[var(--accent)] hover:bg-secondary/90
          transition-all duration-300 cursor-pointer
          shadow-sm hover:shadow-[0_0_18px_var(--glow)]
          min-w-[140px] sm:min-w-[160px]
        "
      >
        <span style={{ color: link.color }} className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
          {link.icon}
        </span>
        <span className="text-sm font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors duration-200">
          {link.label}
        </span>
        {/* Arrow */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200"
          style={{ color: link.color }}
        >
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </div>
  )
}

/* ─── Tree component ───────────────────────────────────── */
function SocialTree() {
  const rootRef = useRef(null)
  const isRootInView = useInView(rootRef, { once: true })

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Root label */}
      <motion.div
        ref={rootRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isRootInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="relative z-10 flex flex-col items-center mb-6"
      >
        {/* Root orb */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-primary/50 bg-secondary shadow-[0_0_24px_rgba(var(--primary-rgb,132,90,253),0.35)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
          </svg>
        </div>
        <span className="mt-2 text-xs font-medium text-muted-foreground tracking-wider uppercase">Find Me On</span>
      </motion.div>

      {/* Trunk + branches layout */}
      <div className="relative w-full max-w-lg">
        {/* Vertical trunk */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isRootInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
        />

        {/* Branches */}
        <div className="flex flex-col pt-2 pb-8">
          {socialLinks.map((link, i) => (
            <BranchNode
              key={link.label}
              link={link}
              index={i}
              side={i % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? Reach out through any of my socials or send a direct message below.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Gujrat, Pakistan</span>
          </div>
        </motion.div>

        {/* Main layout */}
        <div className="flex flex-col xl:flex-row gap-16 items-start justify-center">
          {/* Left — Tree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg mx-auto xl:mx-0"
          >
            <SocialTree />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden xl:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-border to-transparent"
          />

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full flex justify-center xl:justify-start"
          >
            {/* Form section header */}
            <div className="w-full max-w-md">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-1">Send a Message</h2>
                <p className="text-sm text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
