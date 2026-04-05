import { SiMysql, SiLinux, SiNixos, SiGnubash } from "react-icons/si";
import { MdLanguage } from "react-icons/md";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import PythonSvg from "@/public/icons/python.svg";

// Tools
import GitSvg from "@/public/icons/git.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Tech Stack",
    skills: [
      { name: "Python", icon: PythonSvg },
      { name: "Linux", icon: SiLinux },
      { name: "Bash", icon: SiGnubash },
      { name: "Nix", icon: SiNixos },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: GitSvg },
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
    ],
  },
  {
    sectionName: "Languages",
    skills: [
      { name: "Urdu (Native)", icon: MdLanguage },
      { name: "English (Fluent)", icon: MdLanguage },
      { name: "Arabic (Learning)", icon: MdLanguage },
    ],
  },
];
