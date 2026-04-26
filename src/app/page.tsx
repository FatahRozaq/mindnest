import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { BookOpenIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-600">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-forest-500 opacity-40" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-forest-700 opacity-50" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-forest-500 opacity-10" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-forest-300 bg-forest-500/40 px-4 py-1.5 text-sm text-gold-light backdrop-blur-sm">
            <BookOpenIcon className="h-4 w-4" />
            <span className="font-serif italic">Selamat datang di MindNest</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Temukan Bacaan yang{" "}
            <span className="text-gold-light">Mengubah Perspektifmu</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-forest-100 sm:text-lg leading-relaxed">
            Kurasi buku-buku terpilih untuk memperluas wawasan, memperdalam
            pemahaman, dan menginspirasi perubahan nyata dalam hidupmu.
          </p>
          <a
            href="#koleksi-buku"
            className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-gold-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest-600"
          >
            Jelajahi Koleksi Buku
          </a>
        </div>
      </section>

      {/* ── Book Grid ────────────────────────────── */}
      <section
        id="koleksi-buku"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-forest-600 sm:text-4xl">
            Koleksi Buku Pilihan
          </h2>
          <p className="mt-3 text-base text-forest-400">
            {books.length} buku dikurasi khusus untuk Anda
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Bottom CTA ───────────────────────────── */}
      <section className="bg-forest-50 border-t border-forest-100">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-forest-600 sm:text-3xl">
            Mulai Perjalanan Membacamu Hari Ini
          </h2>
          <p className="mt-4 text-forest-400 leading-relaxed">
            Setiap buku adalah jendela menuju dunia baru. Pilih buku yang
            menarik minatmu dan mulailah perjalanan transformasi.
          </p>
        </div>
      </section>
    </>
  );
}
