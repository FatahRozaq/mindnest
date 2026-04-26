import Link from "next/link";
import { BookOpenIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-forest-600 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest-600 rounded-lg"
        >
          <BookOpenIcon className="h-6 w-6 text-gold-light" />
          <span className="font-serif text-xl font-bold tracking-wide">
            MindNest
          </span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-6 text-sm font-medium text-forest-100">
            <li>
              <Link
                href="/"
                className="transition hover:text-gold-light focus:outline-none focus:underline"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#koleksi-buku"
                className="transition hover:text-gold-light focus:outline-none focus:underline"
              >
                Koleksi Buku
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
