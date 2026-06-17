import { TypeAnimation } from "react-type-animation";

const ROLES = [
  "< Software Engineer />",
  2000,
  "< Full Stack Engineer />",
  2000,
  "< Backend Engineer />",
  2000,
  "< React Developer />"
];
export default function RolesTyping() {
  return (
    <TypeAnimation
      sequence={ROLES}
      wrapper="span"
      speed={40}
      deletionSpeed={10}
      repeat={Infinity}
      cursor={true}
      className="text-4xl font-bold text-accent"
    />
  );
}
