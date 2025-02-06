"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoVuejs,
  BiLogoJavascript,
} from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbBrandSvelte } from "react-icons/tb";
import { SiRubyonrails, SiShadcnui } from "react-icons/si";
const projects = [
  {
    title: "analog_timer",
    overview: "Analog Timer",
    useTech: "Typescript,Next,Tailwind CSS,Shadcn",
    creationday: "2024/11/19",
    imgUrl: "/img/imgAnalogTimer.png",
    githubUrl: "https://github.com/mari2t/rainbow_analog_timer",
  },
  {
    title: "alcohol_calculator_next",
    overview: "Alcohol Calculator",
    useTech: "Typescript,Next,Tailwind CSS",
    creationday: "2024/8/18",
    imgUrl: "/img/imgAlcoholCalculatorNext.png",
    githubUrl: "https://github.com/mari2t/alcohol_calculator_next",
  },
  {
    title: "ruby-kids-todo",
    overview: "Kids TODO App",
    useTech: "RubyOnRails",
    creationday: "2024/1/27",
    imgUrl: "/img/imgRuby-kids-todo.png",
    githubUrl: "https://github.com/mari2t/ruby-kids-todo",
  },
];

const skills = [
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-400" size="2em" />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="text-blue-600" size="2em" />,
  },
  { name: "React", icon: <BiLogoReact className="text-blue-400" size="2em" /> },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="text-black" size="2em" />,
  },
];

type TechIconProps = {
  techName: string;
};

const TechIcon = ({ techName }: TechIconProps) => {
  return (
    <div className="inline-block mr-2">
      {techName === "Typescript" && (
        <BiLogoTypescript className="text-blue-800" size="1.6em" />
      )}
      {techName === "React" && (
        <BiLogoReact className="text-blue-800" size="1.6em" />
      )}
      {techName === "Tailwind CSS" && (
        <BiLogoTailwindCss className="text-blue-800" size="1.6em" />
      )}
      {techName === "Next" && (
        <TbBrandNextjs className="text-blue-800" size="1.6em" />
      )}
      {techName === "Vue" && (
        <BiLogoVuejs className="text-blue-800" size="1.6em" />
      )}
      {techName === "API" && <TbApi className="text-blue-800" size="1.6em" />}
      {techName === "JavaScript" && (
        <BiLogoJavascript className="text-blue-800" size="1.6em" />
      )}
      {techName === "Svelte" && (
        <TbBrandSvelte className="text-blue-800" size="1.6em" />
      )}
      {techName === "RubyOnRails" && (
        <SiRubyonrails className="text-blue-800" size="1.6em" />
      )}
      {techName === "Shadcn" && (
        <SiShadcnui className="text-blue-800" size="1.6em" />
      )}
    </div>
  );
};
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to My Portfolio
      </h1>

      <div className="max-w-2xl mx-auto">
        {/* Self-introduction Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Mari2t</h2>
          <div className="flex flex-col items-center">
            <Image
              src="/img/plofilePic.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <p className="text-gray-700 mb-4">
              I am currently job hunting. 💻 <br />I took the Applied
              Information Technician exam in October 2024. <br />
              Recently I am interested in generative AI topics. <br /> I’ve
              subscribed to related services and actively use them.
            </p>
            <Link
              href="/about"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View More About Me
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">My Skills</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-2 justify-center"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/skills"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View All Skills
            </Link>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.imgUrl}
                  alt={project.overview}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.overview}
                </h3>
                <div className="flex mb-2">
                  {project.useTech.split(",").map((tech, index) => (
                    <TechIcon key={index} techName={tech.trim()} />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">
                  Created: {project.creationday}
                </p>
                <a
                  href={project.githubUrl}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/portfolio"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View More Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
