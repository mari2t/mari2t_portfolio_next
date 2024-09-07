"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(`/${newLocale}${pathname}`);
    });
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-2 py-1 rounded ${
          locale === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => switchLocale("en")}
        disabled={isPending}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded ${
          locale === "ja" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => switchLocale("ja")}
        disabled={isPending}
      >
        JA
      </button>
    </div>
  );
}
