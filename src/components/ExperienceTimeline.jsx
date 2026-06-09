import { Calendar, Sparkles } from "lucide-react";

const experiences = [
  {
    period: "2024 - Present",
    role: "Frontend Developer",
    company: "Lucy Platform",
    current: true,

    description:
      "Developing modern React applications, enhancing accessibility, and building scalable UI systems.",

    skills: ["React", "Redux", "JavaScript", "Tailwind", "REST APIs"],

    achievements: [
      "Improved WCAG accessibility compliance",
      "Created reusable component libraries",
      "Optimized frontend performance",
    ],
  },

  {
    period: "2023 - 2024",
    role: "Full Stack Engineer",
    company: "Project Experience",

    current: false,

    description:
      "Designed and developed full-stack solutions using the MERN stack with a focus on maintainability.",

    skills: ["React", "Node.js", "MongoDB", "Express"],

    achievements: [
      "Developed end-to-end applications",
      "Implemented secure APIs",
      "Built scalable architecture",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 px-6">
      {/* Glow */}
      <div className="absolute left-20 top-20 h-80 w-80 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-20">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] opacity-60">
            Experience
          </p>

          <h2 className="text-5xl font-bold">My Professional Journey</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              border-l
              lg:block
            "
          />

          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;

            return (
              <div key={exp.role} className="relative mb-24">
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-12
                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    border
                    lg:block
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      animate-ping
                      opacity-40
                    "
                  />
                </div>

                {/* Card */}
                <div
                  className={`
                    lg:w-[46%]
                    ${isRight ? "lg:ml-auto" : ""}
                  `}
                >
                  <div
                    className="
                      rounded-3xl
                      border
                      p-8
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                    "
                  >
                    {/* Top Row */}
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-accent">
                          {exp.role}
                        </h3>

                        <p className="mt-2 opacity-70">{exp.company}</p>
                      </div>

                      {exp.current && (
                        <span
                          className="
                            rounded-full
                            border
                            border-green-500
                            px-3
                            py-1
                            text-xs
                            bg-green-300
                            text-dark
                          "
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {/* Period */}
                    <div className="mb-6 flex items-center gap-2 opacity-70">
                      <Calendar size={16} />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="mb-8 leading-relaxed opacity-80">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-8 flex flex-wrap gap-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            rounded-full
                            border
                            px-3
                            py-1
                            text-sm
                            border-light-border
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 font-semibold">
                        <Sparkles size={16} />
                        Key Contributions
                      </h4>

                      <ul className="space-y-3">
                        {exp.achievements.map((item) => (
                          <li key={item} className="opacity-80">
                            → {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
