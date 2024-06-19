import Link from "next/link";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const TechStack = [
  { name: "Next.js", href: "https://nextjs.org/", icon: <SiNextdotjs /> },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
  },
  {
    name: "Framer Motion",
    href: "https://www.framer.com/motion/",
    icon: <SiFramer />,
  },
];

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto my-4 max-w-[872px] px-4 text-stone-300 md:px-0">
      <p className="pb-2 justify-center text-center">
        &copy; {year}{" "}
        <Link
          href="https://github.com/jeffersonrj14"
          className=" hover:text-jefferson-light"
        >
          RJ Jefferson
        </Link>
      </p>
      <nav role="navigation">
        <ul role="list" className="flex flex-row justify-center gap-2">
          {TechStack.map((tech, index) => (
            <li key={tech.name} className="flex items-center">
              <Link href={tech.href} passHref>
                <span className="flex items-center hover:text-jefferson-light">
                  {tech.icon}
                </span>
              </Link>
              {index < TechStack.length - 1 && (
                <span className="mx-1">&nbsp;&nbsp;+</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;
