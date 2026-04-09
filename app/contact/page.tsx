"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <section className=" px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out. I&apos;m always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Gujrat, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Social</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/look-another-one"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="https://www.instagram.com/letsdoshitt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="https://discord.gg/abX8uftrAj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
