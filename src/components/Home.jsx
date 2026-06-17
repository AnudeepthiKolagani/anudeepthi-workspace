import { ArrowUpRight, Download } from "lucide-react";
import SkillsTicker from "./SkillsTicker/SkillsTicker";
import RolesTyping from "./RolesTyping";
import { motion } from "motion/react";
import heroVideo from "../assets/hero video/anudeepthi_introduction.mp4";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section
      id="#home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover bg-black"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag
      </video>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex min-h-screen mx-20 items-center"
      >
        {/* LEFT SECTION - 30% */}
        <motion.div
          className="absolute z-0 w-full lg:w-5/12 space-y-6"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="relative inline-flex overflow-hidden rounded-full p-[1px]"
          >
            {/* Rotating Beam */}
            <div className="absolute inset-0 animate-border-beam">
              <div className="h-full w-100 bg-accent blur-lg" />
            </div>

            {/* Content */}
            <span
              variants={item}
              initial="hidden"
              animate="show"
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
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hey, I'm <span className="text-accent">Anudeepthi</span>
          </motion.h1>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="text-xl flex items-center gap-2 "
          >
            I am a
            <RolesTyping />
          </motion.div>

          {/* Description */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
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
              <span className="font-bold">
                not only to work today, but to scale tomorrow.
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
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
        {/* Right Side: Play Video Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 right-0 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying || isMuted ? "Play Reel" : "Pause"}
          </span>
        </div>

        <SkillsTicker />
      </motion.div>
    </section>
  );
}
