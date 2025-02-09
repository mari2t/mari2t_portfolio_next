import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">My Portfolio</Link>
          </div>
          <ul className="flex space-x-8">
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
              <Link href="/about" className="text-gray-800 hover:text-blue-600">
                About Me
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
