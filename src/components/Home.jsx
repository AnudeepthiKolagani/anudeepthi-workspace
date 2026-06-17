import { ArrowUpRight, Download } from "lucide-react";
import SkillsTicker from "./SkillsTicker/SkillsTicker";
import RolesTyping from "./RolesTyping";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden px-6"
    >
      {/* Glow Effects */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full blur-3xl opacity-20 animate-pulse" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex min-h-screen mx-20 items-center"
      >
        {/* LEFT SECTION - 30% */}
        <motion.div className="w-full lg:w-5/12 space-y-6" variants={item}>
          <motion.div
            variants={item}
            className="relative inline-flex overflow-hidden rounded-full p-[1px]"
          >
            {/* Rotating Beam */}
            <div className="absolute inset-0 animate-border-beam">
              <div className="h-full w-100 bg-accent blur-lg" />
            </div>

            {/* Content */}
            <span
              variants={item}
              className="
                relative
                z-10
                inline-flex
                rounded-full
                bg-primary
                px-4
                py-2
                text-sm
                tracking-wide
                backdrop-blur-md
              "
            >
              Software Engineer • Full Stack Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hey, I'm <span className="text-accent">Anudeepthi</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="text-xl flex items-center gap-2 "
          >
            I am a
            <RolesTyping />
          </motion.div>

          {/* Description */}
          <motion.div variants={item} className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I don't just build features —
              <span className="font-semibold text-foreground pl-1">
                I take ownership of outcomes.
              </span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Over the last 3+ years, I've worked across the stack using{" "}
              <span className="font-bold">
                React, Node.js, MongoDB, MySQL, Redis, and AWS,
              </span>{" "}
              turning requirements into scalable products, designing reliable
              systems.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I've spent the last 3 years building systems that are designed{" "}
              <span className="font-bold">not only to work today, but to scale tomorrow.</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent font-semibold text-dark group flex items-center gap-2 rounded-lg border px-6 py-3 transition-all duration-300 hover:translate-x-1 cursor-pointer"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <button className="text-accent font-semibold flex items-center gap-2 rounded-lg border px-6 py-3 transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-accent hover:text-dark">
              Download Resume
              <Download size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - 70% */}
        <div className="relative hidden lg:flex lg:w-9/12 items-center justify-center">
          <HeroAnimation />
        </div>

        <SkillsTicker />
      </motion.div>
    </section>
  );
}

function HeroAnimation() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Orbit Ring 1 */}
      <div className="absolute h-[500px] w-[500px] rounded-full border animate-spin [animation-duration:25s]" />

      {/* Orbit Ring 2 */}
      <div className="absolute h-[350px] w-[350px] rounded-full border animate-spin [animation-duration:15s] [animation-direction:reverse]" />

      {/* Center Terminal */}
      <div className="relative w-[420px] rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Header */}
        <div className="flex items-center gap-2 border-b p-4">
          <div className="h-3 w-3 rounded-full border" />
          <div className="h-3 w-3 rounded-full border" />
          <div className="h-3 w-3 rounded-full border" />
        </div>

        {/* Terminal Content */}
        <div className="space-y-4 p-6 font-mono text-sm">
          <p>{">"} npm run build</p>
          <p>{">"} Optimizing application...</p>
          <p>{">"} Generating assets...</p>
          <p>{">"} Build completed successfully</p>
          <p>{">"} Deploying to production...</p>
        </div>
      </div>

      {/* Floating Card 1 */}
      <div className="absolute -left-20 top-16 animate-bounce rounded-2xl border p-5 backdrop-blur-md">
        React.js
      </div>

      {/* Floating Card 2 */}
      <div className="absolute right-0 top-0 animate-pulse rounded-2xl border p-5 backdrop-blur-md">
        Node.js
      </div>

      {/* Floating Card 3 */}
      <div className="absolute bottom-10 -right-10 animate-bounce rounded-2xl border p-5 backdrop-blur-md">
        MongoDB
      </div>

      {/* Floating Card 4 */}
      <div className="absolute -bottom-15 left-0 animate-pulse rounded-2xl border p-5 backdrop-blur-md">
        Express
      </div>
    </div>
  );
}
