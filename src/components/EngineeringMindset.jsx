import { Zap, Layers3, ShieldCheck, Workflow, Circle } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Performance Across the Stack",
    description: [
      "Optimize frontend rendering performance",
      "Apply code splitting and lazy loading strategies",
      "Improve backend response time and query efficiency",
      "Use caching to reduce redundant computations",
    ],
  },
  {
    icon: Layers3,
    title: "Scalable System Design",
    description: [
      "Design reusable and modular frontend components",
      "Build APIs that support future expansion",
      "Structure backend services for independent scaling",
      "Keep architecture flexible for evolving requirements",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Security First",
    description: [
      "Implement input validation and error handling",
      "Design secure authentication and authorization flows",
      "Ensure safe data handling across services",
      "Follow best practices for API security",
    ],
  },
  {
    icon: Workflow,
    title: "Clean End-to-End Engineering",
    description: [
      "Maintain clear separation between UI, logic, and data layers",
      "Write reusable and predictable code structures",
      "Design consistent API contracts between frontend and backend",
      "Focus on maintainability over quick fixes",
    ],
  },
];
export default function EngineeringMindset() {
  return (
    <section id="mindset" className="relative pt-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-20">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60">
            Engineering Mindset
          </p>

          <h2 className="text-5xl font-bold">Principles Behind Every Build</h2>
        </div>

        <div className="relative flex flex-row gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const isDown = index % 2 !== 0;

            return (
              <div
                key={item.title}
                className={`relative flex ${isDown ? "mt-20" : "mb-20"}`}
              >
                {/* Card */}
                <div
                  className={`
                    group
                    w-full
                    max-w-2xl
                    rounded-xl
                    border
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                  ${!isDown ? "bg-accent text-dark" : ""}`}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className="
                        rounded-2xl
                        border
                        p-3
                        transition-transform
                        duration-300
                        group-hover:rotate-6
                      "
                    >
                      <Icon
                        size={24}
                        className={` ${!isDown ? "bg-accent text-dark" : ""}`}
                      />
                    </div>

                    <h3
                      className={`text-xl font-semibold ${isDown ? "text-accent" : ""}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* bullet points */}
                  <div className="space-y-2 text-sm ">
                    {item.description.map((desc, i) => (
                      <div
                        key={i}
                        className="flex items-center  gap-2"
                      >
                        <Circle
                          size={10}
                          className={` ${!isDown ? "fill-dark" : "fill-accent"}`}
                        />
                        <span>{desc}</span>
                      </div>
                    ))}
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
