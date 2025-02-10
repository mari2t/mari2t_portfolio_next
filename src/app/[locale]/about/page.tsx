"use client";
import { useTranslations } from "next-intl";

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
    <div className="flex flex-col items-center space-y-12 bg-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        {t("title")}
      </h1>

      {/* プロフィールセクション */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {profileSections.map((section) => (
          <div key={section} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {t(`sections.${section}.title`)}
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t
                .raw(`sections.${section}.items`)
                .map((item: string, index: number) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
