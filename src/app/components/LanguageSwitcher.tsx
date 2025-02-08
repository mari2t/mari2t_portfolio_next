"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale(); // 現在の言語を取得
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`; // `/ja/...` → `/en/...`
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("ja")}
        disabled={locale === "ja"}
        className={`p-2 border rounded ${
          locale === "ja" ? "bg-gray-300" : "bg-white"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => switchLanguage("en")}
        disabled={locale === "en"}
        className={`p-2 border rounded ${
          locale === "en" ? "bg-gray-300" : "bg-white"
        }`}
      >
        English
      </button>
    </div>
  );
}
