import { useState } from "react";
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
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="max-w-8xl mt-4 flex mx-20 items-center justify-between rounded-lg px-6 py-4 shadow-lg transition-all duration-300">
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-lg opacity-50 blur-2xl pointer-events-none animate-pulse" />

        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="relative text-xl font-bold tracking-wide transition-transform duration-300 hover:scale-105"
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
              className="relative text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 transition-all duration-300 hover:rotate-12"
            aria-label="Theme Toggle"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <button className="rounded-lg border px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
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
