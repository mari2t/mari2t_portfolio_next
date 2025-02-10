"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const t = useTranslations("AboutPage");

  const profileSections = [
    "currentStatus",
    "workExperience",
    "certifications",
    "programmingJourney",
    "webTechnologies",
    "interests",
  ];

  return (
    <div className="flex flex-col items-center space-y-12">
      <h1 className="text-2xl font-bold text-center">{t("title")}</h1>
      <div className="w-48 h-48 relative">
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
        </div>
      </div>

      <div className="w-full max-w-2xl">
        {profileSections.map((section) => (
          <div key={section} className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              {t(`sections.${section}.title`)}
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              {t
                .raw(`sections.${section}.items`)
                .map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
