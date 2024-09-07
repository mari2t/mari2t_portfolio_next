import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-gray-800">
                <Link href="/">My Portfolio</Link>
              </div>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-800 hover:text-blue-600"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="text-gray-800 hover:text-blue-600"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-800 hover:text-blue-600"
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">{children}</main>
        <footer className="bg-white shadow-md mt-8">
          <div className="container mx-auto px-6 py-4 text-center text-gray-600">
            © 2024 Mari2t. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
