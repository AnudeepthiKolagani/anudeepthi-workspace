const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TailwindCSS",
  "Git",
  "Docker",
  "AWS",
  "REST APIs",
];

export default function SkillsTicker() {
  return (
    <div className="mx-20 absolute bottom-1 left-0 overflow-hidden border rounded-lg backdrop-blur-md">
      <div className="skills-track flex">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-4 my-4 whitespace-nowrap rounded-full border px-5 py-2 text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
