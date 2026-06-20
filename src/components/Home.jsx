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
  const homeRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const section = homeRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Home section is not visible
        if (!entry.isIntersecting) {
          const video = videoRef.current;

          if (video) {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        threshold: 0.5, // 50% of home should be visible
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section
      id="home"
      ref={homeRef}
      className="relative w-full min-h-screen py-20 lg:py-5  overflow-visible lg:overflow-hidden bg-black"
    >
      <div className="block lg:hidden">
        {" "}
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          className=" hidden
            lg:block
            absolute
            inset-0
            w-full
            h-full
            object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[60%_center] bg-black"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag
      </video>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" relative
          flex
          flex-col
          lg:flex-row
          min-h-screen
          items-center
          justify-center
          px-5
          md:px-10
          lg:px-20
          gap-10"
      >
        {/* LEFT SECTION - 30% */}
        <motion.div
          className="z-10 w-full lg:w-5/12 space-y-6"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Hey, I'm <span className="font-bold">Anudeepthi</span>
          </motion.h1>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="text-xl flex items-center gap-2 "
          >
            <RolesTyping />
          </motion.div>

          {/* Description */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I don't just build features —
              <span className="font-semibold text-foreground pl-1">
                I take ownership of outcomes.
              </span>
            </p>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Over the last 3+ years, I've worked across the stack using{" "}
              <span className="font-bold">
                React, Node.js, MongoDB, MySQL, Redis, and AWS,
              </span>{" "}
              turning requirements into scalable products, designing reliable
              systems.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I've spent the last 3 years building systems that are designed{" "}
              <span className="font-bold">
                not only to work today, but to scale tomorrow.
              </span>
            </p>
          </motion.div>

          {/* TODO: ACTION BUTTONS */}
          {/* <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-primary font-semibold text-dark group flex items-center gap-2 rounded-lg border px-6 py-3 transition-all duration-300 hover:translate-x-1 cursor-pointer"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <button className="text-primary font-semibold flex items-center gap-2 rounded-lg border px-6 py-3 transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-primary hover:text-dark">
              Download Resume
              <Download size={18} />
            </button>
          </motion.div> */}
        </motion.div>
        {/* Right Side: Play Video Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          onClick={toggleVideo}
          className="w-full lg:w-7/12 flex justify-center lg:justify-end items-center gap-3"
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 hover: cursor-pointer group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-primary ml-0.5 md:ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-primary text-sm md:text-base font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer">
            {!isPlaying || isMuted ? "Play Reel" : "Pause"}
          </span>
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 w-full">
          <SkillsTicker />
        </div>
      </motion.div>
    </section>
  );
}
