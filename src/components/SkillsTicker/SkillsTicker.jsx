import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { FaServer } from "react-icons/fa";

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "REST APIs", icon: FaServer },
];

export default function SkillsTicker() {
  return (
    <div className="absolute bottom-1 left-0 right-0 mx-20 overflow-hidden backdrop-blur-md">
      <div className="skills-track flex w-max">
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="mx-4 my-4 flex items-center gap-2 whitespace-nowrap rounded-full border border-secondary-accent px-7 py-2 text-base"
            >
              <Icon className="text-lg text-accent" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
