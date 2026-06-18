import { Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    period: "2025 - Present",
    role: "Engineer",
    company: "Veltris",
    current: true,
    description:
      "Developing high-performance React applications, implementing WCAG accessibility standards, and designing scalable component-based UI architectures.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Tailwind",
      "REST APIs",
    ],
    achievements: [
      "Enhanced accessibility standards by implementing WCAG guidelines across key user interfaces.",
      "Developed a scalable component architecture with reusable, responsive, and interactive React components.",
      "Improved application performance through lazy loading, code splitting, React.memo, useMemo, useCallback, and optimized state management, resulting in faster load times and smoother UI interactions.",
    ],
  },
  {
    period: "2023 - 2025",
    role: "Associate Engineer",
    company: "Veltris",
    current: false,
    description:
      "Designed and developed scalable backend services and RESTful APIs using Node.js, Express.js, MongoDB, and MySQL, with a strong focus on performance, security, and maintainability.",

    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],

    achievements: [
      "Developed and maintained RESTful APIs to support frontend applications and third-party integrations.",
      "Implemented secure authentication, authorization, and input validation mechanisms to protect application data.",
      "Designed scalable backend architectures and optimized database queries to improve application performance and reliability.",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-40 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] opacity-60 mb-3"
          >
            Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            Professional Journey
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-light-border" />

          <div className="space-y-16">
            {experiences.map((exp) => (
              <div
                key={`${exp.role}-${exp.company}`}
                className="relative flex gap-8"
              >
                {/* Timeline Marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="
                      h-8
                      w-8
                      rounded-full
                      border-2
                      border-background
                      bg-accent
                      shadow-lg
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  {/* Date */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-sm opacity-60 mb-3"
                  >
                    <Calendar size={14} />
                    {exp.period}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                      group
                      rounded-3xl
                      border
                      border-light-border
                      bg-card/50
                      text-dark
                      backdrop-blur-md
                      p-8
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-accent/40
                      hover:shadow-2xl
                    "
                  >
                    {/* Role + Company */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">{exp.role}</h3>

                        {exp.current && (
                          <span
                            className="
                              rounded-full
                              bg-green-500
                              border
                              border-green-500
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-dark
                            "
                          >
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-lg opacity-70">{exp.company}</p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="leading-relaxed opacity-80 mb-8"
                    >
                      {exp.description}
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-wrap gap-3 mb-8"
                    >
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            rounded-full
                            border
                            border-light-border
                            px-3
                            py-1
                            text-sm
                            transition-colors
                           hover:border-accent/40
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>

                    {/* Contributions */}
                    <div>
                      <motion.h4
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 font-semibold mb-4"
                      >
                        <Sparkles size={16} />
                        Key Contributions
                      </motion.h4>

                      <motion.ul
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3"
                      >
                        {exp.achievements.map((item) => (
                          <li key={item} className="flex gap-3 opacity-80">
                            <span className="text-accent mt-[2px]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
