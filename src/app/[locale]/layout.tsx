import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export async function generateMetadata({
  params,
}: {
  params: { locale: (typeof routing.locales)[number] };
}): Promise<Metadata> {
  const messages = (await getMessages({ locale: params.locale })) as Record<
    string,
    string
  >;

  return {
    title: messages["metadata.title"] as string,
    description: messages["metadata.description"] as string,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // `locale` が有効か確認
  if (!routing.locales.includes(locale as "en" | "ja")) {
    notFound();
  }

  // ロケールに応じたメッセージを取得
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="container mx-auto px-6 py-4">
            {children}
            <Analytics />
          </main>
          <footer className="bg-white shadow-md mt-8">
            <div className="container mx-auto px-6 py-4 text-center text-gray-600">
              © 2025 Mari2t. All rights reserved.
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
