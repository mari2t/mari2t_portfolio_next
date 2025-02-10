"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            My Portfolio
          </Link>
        </div>

        {/* ハンバーガーメニュー（モバイル用） */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* メニュー（デスクトップ表示） */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/portfolio"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              About Me
            </Link>
          </li>
        </ul>

        {/* 言語スイッチャー（デスクトップ用） */}
        <div className="hidden md:block">
          <LanguageSwitcher closeMenu={() => setMenuOpen(false)} />
        </div>
      </nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/portfolio"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
          </ul>

          {/* 言語スイッチャー（モバイル用） */}
          <div className="p-4 border-t">
            <LanguageSwitcher closeMenu={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
