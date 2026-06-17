import { Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

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
                      border-4
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
                              bg-green-500/15
                              border
                              border-green-500/30
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-green-400
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
                            group-hover:border-accent/40
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
