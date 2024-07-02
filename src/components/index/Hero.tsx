import Link from "next/link";
import ID from "@/components/index/icon/IDflag";
import Card from "@/components/shared/Card";
import { SiDiscord, SiGithub, SiTwitter, SiKofi } from "react-icons/si";
import { GrMailOption } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function Hero() {
  return (
    <main className="rounded-xl max-w-3xl m-auto w-full py-4 px-4 flex flex-col justify-between bg-jefferson-dark drop-shadow-2xl shadow-2xl">
      <section className="flex flex-col justify-center space-y-4 text-white/80">
        <h1 className="text-4xl font-bold">Hi, I&apos;m RJ Jefferson</h1>
        <span>
          I&apos;m a self-taught developer from Indonesia{" "}
          <ID className="inline" /> , currently studying independently on{" "}
          <Link
            href="https://cs50.harvard.edu/x/2024/"
            target="_blank"
            aria-label="HarvardX CS50s Introduction to Computer Science"
            className="transition-all underline decoration-1 decoration-jefferson-light underline-offset-4 hover:decoration-jefferson-main text-jefferson-light hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-main"
          >
            CS50x
          </Link>{" "}
          ,{" "}
          <Link
            href="https://zerotomastery.io"
            target="_blank"
            aria-label="Zero To Mastery Academy"
            className="transition-all underline decoration-1 decoration-jefferson-light underline-offset-4 hover:decoration-jefferson-main text-jefferson-light hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-main"
          >
            Zero To Mastery Academy
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.youtube.com/watch?v=2ZLl8GAk1X4&t=3s&pp=ygUoZGF0YSBzdHJ1Y3R1cmUgYW5kIGFsZ29yaXRobSBmcmVlY29kZWNhcA%3D%3D"
            target="_blank"
            aria-label="FreeCodeCamp DSA"
            className="transition-all underline decoration-1 decoration-jefferson-light underline-offset-4 hover:decoration-jefferson-main text-jefferson-light hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-main"
          >
            Data Structures and Algorithm
          </Link>{" "}
          (FreeCodeCamp) .
        </span>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
          You can reach me out on:
        </h2>
        <ul className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            icon={GrMailOption}
            title="Email"
            body="jefferson@jeffersonrj.com"
            href="mailto:jefferson@jeffersonrj.com"
            iconHexColor="#171515"
          />
          <Card
            icon={SiGithub}
            title="Github"
            body="@jeffersonrj14"
            href="https://github.com/jeffersonrj14"
            iconHexColor="#171515"
          />
          <Card
            icon={SiDiscord}
            title="Discord"
            body="@jeffersonrj14"
            href="https://discordapp.com/users/606481557615542273"
            iconHexColor="#002bff"
          />
          <Card
            icon={SiTwitter}
            title="Twitter"
            body="@jeffersonrj14"
            href="https://twitter.com/jeffersonrj14"
            iconHexColor="#1DA1F2"
          />
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Project
        </h2>
        <ul className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            icon={CiGlobe}
            title="Personal Website"
            body="Next.js + JS + Tailwind + Framer Motion"
            href="https://jeffersonrj.com"
            iconHexColor="#235cb8"
          />
          <Card
            icon={FaTools}
            title="Blog + Utils"
            body="Astro + TS + SolidJS + Tailwind + PNPM"
            href="https://hi.jeffersonrj.com"
            iconHexColor="#000"
          />
          <Card
            icon={HiLink}
            title="Links"
            body="Next.js + TS + Tailwind + Framer Motion"
            href="https://links.jeffersonrj.com"
            iconHexColor="#254F1A"
          />
          <Card
            icon={LiaLaptopCodeSolid}
            title="Projects"
            body="Vite + React + TS + Tailwind"
            href="https://projects.jeffersonrj.com"
            iconHexColor="#138ba5"
          />
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Support me
        </h2>
        <ul className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            icon={SiKofi}
            title="Ko-Fi"
            body="@jeffersonrj14"
            href="https://ko-fi.com/jeffersonrj14"
            iconHexColor="#FF5E5B"
          />
        </ul>
      </section>
    </main>
  );
}

export default Hero;
