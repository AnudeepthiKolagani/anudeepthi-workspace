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
  SiGithubactions,
  SiWebauthn,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { Clock3, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BiBullseye } from "react-icons/bi";
import { DiMysql, DiRedis } from "react-icons/di";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function About() {
  const toolkit = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact size={20} className="text-accent" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript size={20} className="text-accent" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={20} className="text-accent" />,
        },
        { name: "Redux", icon: <SiRedux size={20} className="text-accent" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss size={20} className="text-accent" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs size={20} className="text-accent" />,
        },
        {
          name: "Express",
          icon: <SiExpress size={20} className="text-accent" />,
        },
        {
          name: "JWT",
          icon: <SiWebauthn size={20} className="text-accent" />,
        },
        {
          name: "Redis",
          icon: <DiRedis size={20} className="text-accent" />,
        },
        {
          name: "BullMQ",
          icon: <BiBullseye size={20} className="text-accent" />,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb size={20} className="text-accent" />,
        },
        {
          name: "MySQL",
          icon: <DiMysql size={20} className="text-accent" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={20} className="text-accent" />,
        },
        // {
        //   name: "Mongoose",
        //   icon: <SiMongoose size={20} className="text-accent" />,
        // },
        // {
        //   name: "Sequelize",
        //   icon: <SiSequelize size={20} className="text-accent" />,
        // },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "Docker",
          icon: <SiDocker size={20} className="text-accent" />,
        },
        {
          name: "AWS",
          icon: <FaAws size={20} className="text-accent" />,
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions size={20} className="text-accent" />,
        },
      ],
    },
  ];

  return (
    <section id="about" className="relative min-h-screen ">
      <motion.div className="px-5 md:px-10 lg:px-20 py-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mb-3 text-sm uppercase tracking-[0.2em] opacity-60"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight "
          >
            Turning Complex Ideas
            <br />
            Into Intuitive Products.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-6 lg:grid-cols-4 lg:grid-rows-1"
        >
          {/* ABOUT */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.2 },
            }}
            className="rounded-3xl border border-light-border p-8 backdrop-blur-sm lg:col-span-3"
          >
            <h3 className="mb-6 text-lg lg:text-2xl font-semibold">Who I Am</h3>

            <p className="leading-relaxed text-sm md:text-lg">
              I enjoy owning problems from idea to production.
            </p>

            <p className="mt-5 leading-relaxed text-sm md:text-lg">
              Over the last 3 years, I've worked across the stack using{" "}
              <span className="text-accent font-semibold">
                React, Next.js, Node.js, MongoDB, Redis, MySQL, and AWS{" "}
              </span>{" "}
              — building products that are designed to remain reliable as they
              grow.
            </p>

            <ul className="mt-6 space-y-4 text-sm md:text-lg">
              <li>
                → I take responsibility for outcomes, not just
                implementation—driving features from requirements to production.
              </li>

              <li>
                → My experience across frontend and backend helps me think in
                systems rather than isolated components.
              </li>

              <li>
                → I've built secure APIs, authentication platforms, asynchronous
                workflows, and scalable React applications that support real
                business operations.
              </li>

              <li>
                → Today, I'm focused on writing software that remains
                maintainable, performant, and scalable long after deployment.
              </li>
            </ul>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-light-border
            p-8
            bg-gradient-to-br
            from-background
            via-background
            to-accent/5
          "
          >
            {/* Grid Pattern */}
            <div
              className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
              bg-[size:20px_20px]
              opacity-30
            "
            />

            {/* Glow */}
            <div
              className="
                absolute
                -right-10
                -top-10
                h-40
                w-40
                rounded-full
                bg-accent/15
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div className="absolute right-[-90px] bottom-[-80px] opacity-[0.05]">
                <Clock3 size={220} strokeWidth={1} />
              </div>
              {/* <Briefcase className="text-accent" size={32} /> */}

              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs opacity-80">2023</span>

                <div className="relative flex-1">
                  <div className="h-[2px] bg-accent/50" />

                  <ArrowRight
                    size={14}
                    className="absolute -right-1 -top-[6px] text-accent/50"
                  />
                </div>

                <span className="text-xs opacity-80">2026 {"(Present)"}</span>
              </div>
              <div className="mt-6">
                <p className="text-7xl font-bold text-accent">3+</p>

                <p className="mt-1 text-sm uppercase tracking-[0.3em] opacity-60">
                  Years Building
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm  leading-relaxed opacity-70">
                Building scalable web applications, backend systems, and
                production-ready products.
              </p>
            </div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            variants={skillsContainerVariants}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="relative overflow-hidden rounded-3xl border border-light-border p-8 lg:col-span-4"
          >
            {/* Background */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    Current Toolkit
                  </p>

                  <h3 className="mt-2 text:lg md:text-2xl font-semibold">
                    Technologies I Build With
                  </h3>
                </div>
              </div>

              <div className="mt-5 lg:mt-10 grid gap-8 md:grid-cols-2">
                {toolkit.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-lg">{section.title}</h4>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="
                          flex flex-row gap-2
                          items-center
                          rounded-full
                          border
                          border-light-border
                          px-3
                          py-1.5
                          text-sm
                          transition-all
                          duration-300
                          hover:border-accent
                          hover:text-accent
                          text-sm
                        "
                        >
                          <span className="">{skill.icon}</span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 border-t border-light-border pt-6">
                <p className="text-sm lg:text-md opacity-70 leading-relaxed">
                  Building modern React applications, scalable backend systems,
                  asynchronous processing workflows, secure authentication
                  platforms, and cloud-ready solutions with a focus on
                  maintainability and long-term reliability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
