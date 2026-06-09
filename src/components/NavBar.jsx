import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

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

  return (
    <header className="bg-primary fixed top-0 left-0 z-50 w-full">
      <nav className=" text-body max-w-8xl  flex mx-20 items-center justify-between rounded-lg px-6 py-4 shadow-lg transition-all duration-300">
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-lg opacity-50 blur-2xl pointer-events-none animate-pulse" />

        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="relative text-2xl font-bold tracking-wide transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          Anudeepthi
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`relative text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 ${activeSection === item.href ? "text-accent" : ""}`}
            >
              {console.log({
                activeSection,
                currentHref: item.href,
              })}
              {item.label}
              {/* Underline */}
              <span
                className={`bg-accent
              absolute
              left-0
              -bottom-1
              h-[2px]
              origin-left
              transition-transform
              duration-300
              ${
                activeSection === item.href
                  ? "w-full scale-x-100"
                  : "w-full scale-x-0 group-hover:scale-x-100"
              }
            `}
              />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
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
          </button>

          {/* CTA */}
          <button
            className="rounded-lg border px-5 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-accent hover:text-dark"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Hire Me
          </button>
        </div>

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
