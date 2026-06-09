import { Zap, Layers3, ShieldCheck, Workflow } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Build responsive experiences through code splitting, lazy loading, memoization, and efficient rendering.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Create reusable components and maintainable systems that can evolve as products grow.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility Matters",
    description:
      "Develop inclusive interfaces with WCAG compliance, semantic HTML, and keyboard navigation.",
  },
  {
    icon: Workflow,
    title: "Clean Engineering",
    description:
      "Write predictable, testable code with clear abstractions and strong separation of concerns.",
  },
];

export default function EngineeringMindset() {
  return (
    <section id="mindset" className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60">
            Engineering Mindset
          </p>

          <h2 className="text-5xl font-bold">Principles Behind Every Build</h2>
        </div>

        <div className="relative">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`relative mb-20 flex ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                {/* Connection Line */}
                {index !== principles.length - 1 && (
                  <div
                    className={`
                      absolute top-full
                      ${isRight ? "right-28" : "left-28"}
                      h-20 border-l-2 border-dashed opacity-40
                    `}
                  />
                )}

                {/* Card */}
                <div
                  className="
                    group
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                  "
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
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="leading-relaxed opacity-75">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
