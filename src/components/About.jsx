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

import { FaAws } from "react-icons/fa";
import { Briefcase, Brain } from "lucide-react";
import EngineeringMindset from "./EngineeringMindset";

export default function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact size={24} className="text-accent" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript size={24} className="text-accent" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={24} className="text-accent" />,
        },
        { name: "Redux", icon: <SiRedux size={24} /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss size={24} className="text-accent" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs size={24} className="text-accent" />,
        },
        {
          name: "Express",
          icon: <SiExpress size={24} className="text-accent" />,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb size={24} className="text-accent" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={24} className="text-accent" />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={24} className="text-accent" /> },
        {
          name: "GitHub",
          icon: <SiGithub size={24} className="text-accent" />,
        },
        {
          name: "Docker",
          icon: <SiDocker size={24} className="text-accent" />,
        },
        { name: "AWS", icon: <FaAws size={24} className="text-accent" /> },
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
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] opacity-60">
            About Me
          </p>

          <h2 className="text-5xl font-bold leading-tight text-accent">
            Turning complex ideas
            <br />
            into intuitive products.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-1">
          {/* 1:1 ABOUT */}
          <div className="rounded-3xl border border-light-border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
            <h3 className="mb-6 text-2xl font-semibold">Who I Am</h3>

            <p className="leading-relaxed  text-base">
              I'm a Full Stack Engineer focused on building fast, accessible,
              and user-centered web applications. With hands-on experience
              across the <span className="text-accent">MERN </span>ecosystem, I
              enjoy transforming ideas into polished digital experiences.
            </p>

            <p className="mt-5 leading-relaxed  text-base">
              My work spans everything from crafting reusable frontend
              architectures and responsive interfaces to integrating APIs and
              optimizing application performance. I care deeply about code
              quality, maintainability, and attention to detail.
            </p>

            <p className="mt-5 leading-relaxed text-base">
              Beyond writing code, I'm driven by continuous learning and solving
              meaningful problems through technology—building products that
              deliver real value for both users and businesses.
            </p>
          </div>

          {/* 1:2 EXPERIENCE */}
          <div className="rounded-3xl border border-light-border  p-8 transition-all duration-500 hover:-translate-y-2">
            <Briefcase size={32} />

            <h3 className="mt-6 text-xl font-semibold">Experience</h3>

            <p className="mt-5 text-6xl font-bold text-accent">3+</p>

            <p className="mt-2 opacity-70">
              Years of professional experience building production-grade web
              applications.
            </p>

            {/* <div className="mt-8 border-t pt-5 text-accent">
              <p className="text-sm opacity-70">Frontend Development</p>

              <p className="text-sm opacity-70">Full Stack Engineering</p>

              <p className="text-sm opacity-70">Accessibility Compliance</p>
            </div> */}
          </div>

          {/* 2:1 SKILLS */}
          <div className="rounded-3xl border border-light-border p-8 transition-all duration-500 hover:-translate-y-2 lg:col-span-3">
            {/* <h3 className="mb-8 text-2xl font-semibold">
              Skills & Technologies
            </h3> */}

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className=" border-r border-secondary-accent p-5 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="mb-5 font-bold text-lg ">{group.title}</h4>

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
          <div className="rounded-3xl border border-light-border p-8 transition-all duration-500 hover:-translate-y-2">
            <Brain size={32} />

            <h3 className="mt-6 text-xl font-semibold text-accent">
              Engineering Mindset Snapshot
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-relaxed opacity-80">
              <p>
                I’m currently thinking in terms of{" "}
                <b>scalability, maintainability, and performance tradeoffs </b>
                rather than just features.
              </p>

              <p>
                I prefer understanding <b>why systems break</b> before learning
                how to build them.
              </p>

              <p>
                My focus is shifting from writing code that works → to systems
                that last.
              </p>
            </div>

            <div className="mt-8 border-t pt-5 text-sm opacity-70">
              How I think is evolving faster than what I know.
            </div>
          </div>
        </div>
      </div>

      <EngineeringMindset />
    </section>
  );
}
