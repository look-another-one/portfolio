import { SiKubernetes, SiMysql } from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Tools
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Tech Stack",
    skills: [
      { name: "Typescript", icon: TypescriptSvg },
      { name: "React", icon: ReactjsSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "Tailwind", icon: TailwindcssSvg },
      { name: "Node.js", icon: NodejsSvg },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
    ],
  },
];
