import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.querySelector(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };
const [isHomeVisible, setIsHomeVisible] = useState(true);

useEffect(() => {
  const home = document.getElementById("home");

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsHomeVisible(entry.isIntersecting);
    },
    { threshold: 0.3 },
  );

  if (home) observer.observe(home);

  return () => observer.disconnect();
}, []);
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isHomeVisible ? "bg-transparent" : "bg-dark/30 backdrop-blur-lg"
      }`}
    >
      <nav className=" text-body max-w-8xl  flex mx-20 items-center justify-between rounded-lg px-6 py-4 transition-all duration-300">
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-lg opacity-50 blur-2xl pointer-events-none animate-pulse" />

        {/* Logo / Name */}
        <motion.a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="
            relative
            inline-block
            text-2xl
            font-bold
            tracking-wide
            bg-gradient-to-r
            from-accent
            via-white
            to-secondary-accent
            bg-[length:250%_100%]
            bg-clip-text
            text-transparent
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 0.8 },
            backgroundPosition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        >
          Anudeepthi
        </motion.a>
        {/* Desktop Navigation */}
        <motion.div
          className="hidden items-center gap-8 md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`relative text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 ${activeSection === item.href ? "text-dark px-2 py-1 rounded-xl bg-accent/50 " : ""}`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="group p-2 transition-all duration-300 hover:rotate-30 cursor-pointer"
            aria-label="Theme Toggle"
          >
            {darkMode ? (
              <Sun
                size={18}
                className="transition-colors duration-300 group-hover:text-accent"
              />
            ) : (
              <Moon
                size={18}
                className="transition-colors duration-300 group-hover:text-accent"
              />
            )}
          </button> */}

          {/* CTA */}
          <button
            className="rounded-lg border px-2 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-accent/50 hover:border-border-hover hover:text-dark"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Hire Me
          </button>
        </motion.div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 mx-4 rounded-3xl border backdrop-blur-md p-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="transition-all duration-300 hover:translate-x-1"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                Theme
              </button>

              <button className="rounded-lg border px-5 py-3">Hire Me</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
