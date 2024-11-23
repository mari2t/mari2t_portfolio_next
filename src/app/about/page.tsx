"use client";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const profiles = [
    {
      title: "😄Current Status",
      profileItems: [
        "I am currently job hunting. ",
        "I took the Applied Information Technician exam in October 2024.",
        "Recently I am interested in generative AI topics. ",
        "I’ve subscribed to AI services and actively use them.",
      ],
    },
    {
      title: "💼Work Experience",
      profileItems: [
        "I've been working in quality control for about 10 years.",
        "I majored in engineering at university.",
        "I have promoted operational efficiency through the use of VBA and Python.",
      ],
    },
    {
      title: "📜Certifications",
      profileItems: [
        "AWS Certified Cloud Practitioner (2024)",
        "Fundamental Information Technology Engineer Examination (2021)",
        "TOEIC Score: 865 (2019)",
        "Japan Chamber of Commerce and Industry Bookkeeping Grade 3 (2016)",
      ],
    },
    {
      title: "💻Programming Journey",
      profileItems: [
        "Started learning in May 2022 to improve work efficiency.",
        "Often use VBA for work efficiency improvements.",
        "Have experience with Python for video and image processing.",
      ],
    },
    {
      title: "🔍Web Technologies",
      profileItems: [
        "Started learning JavaScript in September 2022.",
        "Focusing on JavaScript and TypeScript, while also trying other languages.",
        "Have used AWS services like S3, EC2, and RDS several times.",
      ],
    },
    {
      title: "✨Interests",
      profileItems: [
        "Travel: I enjoy exploring unfamiliar towns and cities. I have visited every prefecture in Japan.",
        "Investing: I engage in stock investments focusing on perks and dividends.",
        "Reading: I often turn to books when I face challenges.",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="w-64 h-64 relative">
        <Image
          src="/img/plofilePic.jpg"
          alt="Profile Picture"
          width={256}
          height={256}
          className="rounded-full"
        />

        <div className="flex justify-center space-x-4 mt-4">
          <IconContext.Provider value={{ color: "#adb4b9", size: "1.6em" }}>
            <Link href="https://github.com/mari2t">
              <FaGithub />
            </Link>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "#adb4b9", size: "1.6em" }}>
            <Link href="https://twitter.com/gussuri49neru">
              <BsTwitter />
            </Link>
          </IconContext.Provider>
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
        {profiles.map((section, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {section.profileItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
