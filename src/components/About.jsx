import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { Briefcase, Brain } from "lucide-react";
import EngineeringMindset from "./EngineeringMindset";

export default function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact size={24} /> },
        { name: "JavaScript", icon: <SiJavascript size={24} /> },
        { name: "TypeScript", icon: <SiTypescript size={24} /> },
        { name: "Redux", icon: <SiRedux size={24} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={24} /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={24} /> },
        { name: "Express", icon: <SiExpress size={24} /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={24} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={24} /> },
        { name: "GitHub", icon: <SiGithub size={24} /> },
        { name: "Docker", icon: <SiDocker size={24} /> },
        { name: "AWS", icon: <SiDocker size={24} /> },
      ],
    },
  ];

  return (
    <section id="about" className="relative min-h-screen px-6 py-24">
      {/* Glow Effects */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-20">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] opacity-60">
            About Me
          </p>

          <h2 className="text-5xl font-bold">
            Building products that users enjoy.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {/* 1:1 ABOUT */}
          <div className="rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
            <h3 className="mb-6 text-2xl font-semibold">Who I Am</h3>

            <p className="leading-relaxed opacity-80">
              I'm a Full Stack Engineer specializing in the MERN stack with
              around 1.5 years of experience building modern web applications. I
              enjoy creating scalable, accessible, and user-friendly digital
              products.
            </p>

            <p className="mt-5 leading-relaxed opacity-80">
              My work includes developing reusable UI components, integrating
              APIs, improving performance, fixing accessibility issues, and
              delivering responsive experiences across devices.
            </p>

            <p className="mt-5 leading-relaxed opacity-80">
              I’m passionate about writing clean code, continuously learning,
              and building solutions that create real business value.
            </p>
          </div>

          {/* 1:2 EXPERIENCE */}
          <div className="rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2">
            <Briefcase size={32} />

            <h3 className="mt-6 text-xl font-semibold">Experience</h3>

            <p className="mt-5 text-6xl font-bold">1.5+</p>

            <p className="mt-2 opacity-70">
              Years of professional experience building production-grade web
              applications.
            </p>

            <div className="mt-8 border-t pt-5">
              <p className="text-sm opacity-70">Frontend Development</p>

              <p className="text-sm opacity-70">Full Stack Engineering</p>

              <p className="text-sm opacity-70">Accessibility Compliance</p>
            </div>
          </div>

          {/* 2:1 SKILLS */}
          <div className="rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
            <h3 className="mb-8 text-2xl font-semibold">
              Skills & Technologies
            </h3>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border p-5 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="mb-5 font-semibold">{group.title}</h4>

                  <div className="grid grid-cols-2 gap-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-300 hover:-translate-y-1"
                      >
                        {skill.icon}

                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2:2 CREATIVE CARD */}
          <div className="rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2">
            <Brain size={32} />

            <h3 className="mt-6 text-xl font-semibold">Currently Exploring</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border p-3">
                Advanced React Patterns
              </div>

              <div className="rounded-xl border p-3">System Design</div>

              <div className="rounded-xl border p-3">TypeScript Deep Dive</div>

              <div className="rounded-xl border p-3">
                Scalable Architectures
              </div>
            </div>

            <div className="mt-8 border-t pt-5">
              <p className="text-sm opacity-70">
                Learning something new every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <EngineeringMindset />
    </section>
  );
}
