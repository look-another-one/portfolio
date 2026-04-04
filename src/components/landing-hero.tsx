import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import FadeUp from "@/animation/fade-up";
import HeroImg from "@/public/images/hero.png";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-10">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Abdull Manan
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                AI Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am an AI Engineer specializing in building intelligent systems
                and high-performance applications. Skilled in{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">Linux</span>,{" "}
                <span className="font-semibold text-accent">Bash</span>, and
                experienced in{" "}
                <span className="font-semibold text-accent">Nix</span> and{" "}
                <span className="font-semibold text-accent">MySQL</span>
              </div>
            </FadeUp>
          </AnimatePresence>

          <FadeUp key="hero-image" duration={0.6} delay={0.3}>
            <div className="pointer-events-auto hidden shrink-0 md:block">
              <Image
                src={HeroImg}
                alt="Abdull Manan"
                width={320}
                height={320}
                priority
                className="rounded-2xl object-cover shadow-2xl ring-2 ring-accent/30"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}
