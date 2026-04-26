import Link from "next/link";
import { BookOpenIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-700 text-forest-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-white">
              <BookOpenIcon className="h-5 w-5 text-gold-light" />
              <span className="font-serif text-lg font-bold">MindNest</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-forest-300">
              Kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah
              perspektif hidupmu. Setiap buku adalah petualangan baru.
            </p>
            <p className="mt-4 text-xs text-forest-400">
              * Beberapa tautan di situs ini merupakan tautan afiliasi. Kami
              mendapat komisi kecil dari setiap pembelian yang dilakukan
              melalui tautan tersebut, tanpa biaya tambahan bagi Anda.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest-300">
              Tautan
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-gold-light focus:outline-none focus:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#koleksi-buku" className="transition hover:text-gold-light focus:outline-none focus:underline">
                  Koleksi Buku
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-600 pt-6 text-center text-xs text-forest-400">
          © {year} MindNest. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
