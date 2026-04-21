import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProjectsPreview } from "@/components/projects-preview"
import { Skills } from "@/components/skills"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Skills />
    </>
  )
}
