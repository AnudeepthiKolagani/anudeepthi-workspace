import { Send, ArrowUpRight, Mail } from "lucide-react";

import { SiGithub, SiMedium } from "react-icons/si";
import { motion } from "motion/react";
import "./ContactSection.css";

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
export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Glow Effects */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            Let's Build Something Great
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl opacity-70"
          >
            Whether you have a project idea, a freelance opportunity, or simply
            want to connect, I'm always open to meaningful conversations.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex overflow-hidden rounded-full p-px mb-8"
        >
          {/* Rotating Beam */}
          <div className="absolute inset-0 animate-border-beam">
            <div className="h-full w-100 bg-accent blur-lg" />
          </div>

          {/* Content */}
          <span
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
            Open to Freelance & Full-Time Roles
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <ContactCard
              icon={<SiGithub size={28} />}
              title="LinkedIn"
              subtitle="Professional network"
              href="https://www.linkedin.com/in/anudeepthi-kolagani/"
            />

            <ContactCard
              icon={<SiGithub size={28} />}
              title="GitHub"
              subtitle="Projects & contributions"
              href="https://github.com/AnudeepthiKolagani"
            />

            <ContactCard
              icon={<SiMedium size={28} />}
              title="Medium"
              subtitle="Articles & insights"
              href="https://medium.com/@AnudeepthiKolagani"
            />

            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              subtitle="Reach me directly"
              href="mailto:anudeepthi.kolagani@gmail.com"
            />
          </div>

          {/* RIGHT */}
          <div
            className="
              rounded-3xl
              border
              border-light-border
              p-8
              backdrop-blur-sm
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-2xl font-semibold text-accent"
            >
              Send a Message
            </motion.h3>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-2xl
                  border
                   border-light-border
                  bg-transparent
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-2xl
                  border
                   border-light-border
                  bg-transparent
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  rounded-2xl
                  border
                   border-light-border
                  bg-transparent
                  px-5
                  py-4
                  outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                   border-light-border
                  bg-transparent
                  px-5
                  py-4
                  outline-none
                "
              />

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  bg-accent
                  text-primary
                  cursor-pointer
                "
              >
                Send Message
                <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, subtitle, href }) {
  return (
    <motion.a
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-light-border
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:bg-accent
        hover:text-primary 

      "
    >
      <div className="flex items-center gap-5">
        <div className="rounded-2xl border p-4">{icon}</div>

        <div>
          <h4 className="font-semibold">{title}</h4>

          <p className="text-sm opacity-80">{subtitle}</p>
        </div>
      </div>

      <ArrowUpRight
        size={22}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </motion.a>
  );
}
