"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
  {
    title: "subscription-management",
    overview: "Subscription Management App",
    useTech: "Typescript,Next,Tailwind CSS",
    creationday: "2023/12/28",
    imgUrl: "/img/imgSubscription-management.png",
    githubUrl: "https://github.com/mari2t/subscription-management",
  },
  {
    title: "action-impact-comparison",
    overview: "Action Comparison App",
    useTech: "Svelte,Tailwind CSS",
    creationday: "2023/11/11",
    imgUrl: "/img/imgActionImpactComparison.png",
    githubUrl: "https://github.com/mari2t/action-impact-comparison",
  },
  {
    title: "mari2t_portfolio",
    overview: "Portfolio Site",
    useTech: "Typescript,Next,Tailwind CSS",
    creationday: "2023/8/14",
    imgUrl: "/img/imgportfoliosite.png",
    githubUrl: "https://github.com/mari2t/mari2t_portfolio",
  },
  {
    title: "TODO everywhere",
    overview: "TODO App",
    useTech: "Typescript,Next,Tailwind CSS,API",
    creationday: "2023/7/9",
    imgUrl: "/img/imgtodoeverywehere.png",
    githubUrl: "https://github.com/mari2t/todo-everywhere",
  },
  {
    title: "YouWearItWell",
    overview: "Weather App",
    useTech: "Next,API",
    creationday: "2023/5/31",
    imgUrl: "/img/imgyouwear.png",
    githubUrl: "https://github.com/mari2t/YouWearItWell",
  },
  {
    title: "TheRestOfYourLife",
    overview: "Remaining Life Time Calculator",
    useTech: "Vue",
    creationday: "2023/5/4",
    imgUrl: "/img/imgtherest.png",
    githubUrl: "https://github.com/mari2t/TheRestOfYourLife",
  },
  {
    title: "Cover-non-DXenvironment-Girl",
    overview: "Meeting Record App",
    useTech: "JavaScript",
    creationday: "2023/3/11",
    imgUrl: "/img/imgcover.png",
    githubUrl: "https://github.com/mari2t/Cover-non-DXenvironment-Girl",
  },
  {
    title: "MySchedule",
    overview: "Scheduling App",
    useTech: "React,Tailwind CSS",
    creationday: "2023/1/29",
    imgUrl: "/img/imgmyschedule.png",
    githubUrl: "https://github.com/mari2t/MySchedule",
  },
  {
    title: "MydidReact_fourSeasons",
    overview: "Activity Record App",
    useTech: "React",
    creationday: "2023/1/3",
    imgUrl: "/img/imgmydid.png",
    githubUrl: "https://github.com/mari2t/MydidReact_fourSeasons",
  },
];

export default function Portfolio() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.useTech.split(",").forEach((tech) => techSet.add(tech.trim()));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return projects;
    return projects.filter((project) =>
      selectedTechs.every((tech) => project.useTech.includes(tech))
    );
  }, [selectedTechs]);

  const handleTechChange = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div className="container mx-auto px-4 4 py-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Portfolios</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filter by Technology:</h2>
        <div className="flex flex-wrap gap-2">
          {allTechs.map((tech) => (
            <label key={tech} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={selectedTechs.includes(tech)}
                onChange={() => handleTechChange(tech)}
              />
              <span className="ml-2">{tech}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
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
              <h2 className="text-xl font-semibold mb-2">{project.overview}</h2>
              <div className="flex flex-wrap mb-2">
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
    </div>
  );
}

type TechIconProps = {
  techName: string;
};

const TechIcon = ({ techName }: TechIconProps) => {
  return (
    <div className="inline-block mr-2 mb-2">
      {techName === "Typescript" && (
        <BiLogoTypescript className="text-blue-800" size="1.6em" />
      )}
      {techName === "React" && (
        <BiLogoReact className="text-blue-800" size="1.6em" />
      )}
      {techName === "Tailwind CSS" && (
        <BiLogoTailwindCss className="text-blue-800" size="1.6em" />
      )}
      {techName === "Shadcn" && (
        <SiShadcnui className="text-blue-800" size="1.6em" />
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
    </div>
  );
};
