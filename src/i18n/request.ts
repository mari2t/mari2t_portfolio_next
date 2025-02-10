import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type SupportedLocale = (typeof routing.locales)[number]; // "en" | "ja" の型を取得

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as SupportedLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as SupportedLocale, // 型を `"en" | "ja"` に統一,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
