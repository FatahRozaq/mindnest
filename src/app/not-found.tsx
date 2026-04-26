import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-serif text-8xl font-bold text-forest-200">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-forest-600">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-3 max-w-md text-forest-400">
        Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
