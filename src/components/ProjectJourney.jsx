import { Link, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Lucy Platform",
    description:
      "Developed scalable React-based interfaces, integrated APIs, improved accessibility compliance, and optimized application performance.",

    tech: ["React", "JavaScript", "Redux", "Tailwind", "REST APIs"],

    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    impact: "WCAG accessibility improvements",
  },

  {
    id: "02",
    title: "Developer Portfolio",
    description:
      "A modern portfolio showcasing projects, engineering principles, animations, accessibility, and responsive design.",

    tech: ["React", "Vite", "Tailwind", "Framer Motion"],

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    impact: "95+ Lighthouse performance score",
  },

  {
    id: "03",
    title: "Task Management Platform",
    description:
      "Built a productivity-focused application with role-based access, reusable components, and scalable architecture.",

    tech: ["MERN", "MongoDB", "Node.js", "Express"],

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    impact: "Reusable scalable architecture",
  },
];

export default function ProjectJourney() {
  return (
    <section id="projects" className="relative overflow-hidden py-32 px-6">
      {/* Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-20">
        {/* Heading */}
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60">
            Selected Work
          </p>

          <h2 className="text-5xl font-bold">
            Projects That Define My Journey
          </h2>
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
    <div
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
        <div
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
          <div className="absolute bg-accent text-dark bottom-6 left-6 rounded-2xl border p-4 backdrop-blur-md">
            <p className="text-sm">Impact</p>

            <p className="font-semibold">{project.impact}</p>
          </div>
        </div>

        {/* Floating Project Number */}
        {/* <div className="absolute -top-6 -right-6 rounded-full border px-6 py-3 text-xl font-bold backdrop-blur-md">
          {project.id}
        </div> */}
      </div>

      {/* Content */}
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-60">
          Featured Project
        </p>

        <h3 className="mb-6 text-4xl font-bold text-accent">{project.title}</h3>

        <p className="mb-8 max-w-xl leading-relaxed opacity-80">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8 flex flex-wrap gap-3">
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
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
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
              text-dark
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
              hover:text-dark
              cursor-pointer
            "
          >
            GitHub
            <Link size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
