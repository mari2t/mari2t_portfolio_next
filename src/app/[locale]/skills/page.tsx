"use client";
import { FaPython, FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiAmazonec2,
  SiAwslambda,
  SiAmazons3,
  SiAmazonrds,
  SiAmazonwebservices,
  SiGooglecloud,
  SiRubyonrails,
  SiRuby,
} from "react-icons/si";

const skills = [
  {
    title: "Development Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Ruby", icon: <SiRuby /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "RubyOnRails", icon: <SiRubyonrails /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Version Control Tools",
    skills: [{ name: "Git", icon: <FaGitAlt /> }],
  },
  {
    title: "AWS",
    skills: [
      { name: "EC2", icon: <SiAmazonec2 /> },
      { name: "Lambda", icon: <SiAwslambda /> },
      { name: "S3", icon: <SiAmazons3 /> },
      { name: "RDS", icon: <SiAmazonrds /> },
      { name: "App Runner", icon: <SiAmazonwebservices /> },
    ],
  },
  {
    title: "GCP",
    skills: [
      { name: "Firestore", icon: <SiGooglecloud /> },
      { name: "Authentication", icon: <SiGooglecloud /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{skillGroup.title}</h2>
            <ul className="space-y-2">
              {skillGroup.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="mr-2 text-gray-600">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
