"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface LanguageSwitcherProps {
  closeMenu?: () => void; // メニューを閉じる関数
}

export default function LanguageSwitcher({ closeMenu }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPath);
    if (closeMenu) closeMenu(); // 言語切り替え後にメニューを閉じる
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("ja")}
        disabled={locale === "ja"}
        className={`px-3 py-1 border rounded-lg transition duration-300 ${
          locale === "ja"
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => switchLanguage("en")}
        disabled={locale === "en"}
        className={`px-3 py-1 border rounded-lg transition duration-300 ${
          locale === "en"
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        English
      </button>
    </div>
  );
}
