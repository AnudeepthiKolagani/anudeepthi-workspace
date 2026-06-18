import { Link, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    title: "AI DOC Assistant",
    description:
      "Built an AI-powered document assistant that enables users to upload documents, store them securely in cloud storage, and interact with their content through an intelligent chat interface similar to NotebookLM.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "AWS S3",
    ],

    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    impact: "AI-powered document analysis and retrieval",
    repoLink: "https://github.com/AnudeepthiKolagani/ai-doc-assistant-web.git",
  },
  {
    id: "02",
    title: "Developer Portfolio",
    description:
      "Designed and developed a modern portfolio showcasing projects, engineering practices, accessibility standards, responsive design, and interactive animations.",

    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    impact: "95+ Lighthouse performance score",
    repoLink:""
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

export default function ProjectJourney() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 px-6">
      {/* Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-20">
        {/* Heading */}
        <div className="mb-24 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm uppercase tracking-[0.2em] opacity-60"
          >
            Selected Work
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            Projects That Define My Journey
          </motion.h2>
        </div>

        {/* Projects */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <motion.div
      className={`
        relative
        grid
        gap-12
        items-center
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div className="group relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
      relative
      overflow-hidden
      rounded-3xl
      border
      transition-all
      duration-700
      hover:-translate-y-2
    "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
                h-[450px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
            "
          />

          {/* Impact Card */}
          {/* <div className="absolute bg-accent text-dark bottom-6 left-6 rounded-2xl border p-4 backdrop-blur-md">
            <p className="text-sm">Impact</p>

            <p className="font-semibold">{project.impact}</p>
          </div> */}
        </motion.div>

        {/* Floating Project Number */}
        {/* <div className="absolute -top-6 -right-6 rounded-full border px-6 py-3 text-xl font-bold backdrop-blur-md">
          {project.id}
        </div> */}
      </div>

      {/* Content */}
      <motion.div>
        {/* <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-60">
          Featured Project
        </p> */}

        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold text-accent"
        >
          {project.title}
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-xl leading-relaxed opacity-80"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-light-border
                px-4
                py-2
                text-sm
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              px-6
              py-3
              transition-all
              duration-300
              bg-accent
              text-primary
              cursor-pointer
            "
          >
            Live Demo
            <ExternalLink size={18} />
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              px-6
              py-3
              transition-all
              duration-300
              hover:bg-accent
              hover:text-primary
              cursor-pointer
            "
          >
            GitHub
            <Link size={18} />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
