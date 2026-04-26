/**
 * MindNest Setup Script
 * Jalankan dengan: node setup.js
 * Script ini akan membuat semua file dan folder yang diperlukan.
 */

const fs = require("fs");
const path = require("path");

const root = __dirname;

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(filePath, content) {
  const dir = path.dirname(filePath);
  mkdirp(dir);
  fs.writeFileSync(filePath, content, "utf8");
  console.log("✓ Created:", filePath.replace(root, ""));
}

// ─────────────────────────────────────────────
// src/types/book.ts
// ─────────────────────────────────────────────
write(
  path.join(root, "src/types/book.ts"),
  `export interface Book {
  /** ID unik buku */
  id: string;
  /** Slug untuk URL halaman detail, contoh: "atomic-habits" */
  slug: string;
  /** Judul buku */
  title: string;
  /** Nama pengarang */
  author: string;
  /** ISBN-13 buku (13 digit, tanpa tanda hubung) */
  isbn13: string;
  /** URL gambar cover buku. Bisa URL eksternal atau path lokal (/images/books/...) */
  coverImage: string;
  /** Deskripsi singkat untuk kartu buku (maks. ~150 karakter) */
  shortDescription: string;
  /** Deskripsi lengkap untuk halaman detail (setiap elemen = satu paragraf) */
  fullDescription: string[];
  /** Link afiliasi pembelian buku */
  affiliateLink: string;
  /** Daftar genre/kategori buku */
  genre: string[];
  /** Tahun pertama kali diterbitkan */
  publishYear: number;
  /** Rating buku (skala 1.0 – 5.0) */
  rating: number;
  /** Harga tampilan (opsional), contoh: "Rp 95.000" */
  price?: string;
  /** Jumlah halaman buku (opsional) */
  pages?: number;
}
`
);

// ─────────────────────────────────────────────
// src/data/books.ts
// ─────────────────────────────────────────────
write(
  path.join(root, "src/data/books.ts"),
  `// =============================================================
// 📚 DATA BUKU MINDNEST
// =============================================================
//
// CARA MENAMBAH BUKU BARU:
//   1. Salin blok objek di bawah (dari { hingga },)
//   2. Tempel setelah objek buku terakhir (sebelum ] penutup)
//   3. Ubah semua nilai sesuai buku yang ingin ditambahkan
//   4. Pastikan nilai "slug" unik dan tidak ada yang sama
//
// CARA MENGUBAH GAMBAR COVER:
//   - URL online  : "https://covers.openlibrary.org/b/isbn/ISBN13-L.jpg"
//   - Lokal       : Simpan gambar di /public/images/books/
//                   Lalu gunakan "/images/books/nama-file.jpg"
//
// CATATAN PENTING:
//   - slug        : huruf kecil + tanda hubung, tanpa spasi
//                   (digunakan sebagai bagian URL: /buku/[slug])
//   - rating      : angka desimal antara 1.0 sampai 5.0
//   - affiliateLink : ganti dengan link afiliasi milik Anda
//   - price       : opsional, tulis "Rp 95.000" atau hapus baris ini
//   - pages       : opsional, isi jumlah halaman atau hapus baris ini
// =============================================================

import { Book } from "@/types/book";

export const books: Book[] = [

  // ──────────────────────────────────────────────────────────────
  // BUKU 1
  // ──────────────────────────────────────────────────────────────
  {
    // ID unik (angka berurutan)
    id: "1",

    // Slug URL — harus unik, huruf kecil, pisah dengan tanda hubung
    slug: "atomic-habits",

    // Judul buku
    title: "Atomic Habits",

    // Nama pengarang
    author: "James Clear",

    // ISBN-13 (tanpa tanda hubung)
    isbn13: "9780735211292",

    // URL gambar cover — ganti jika ingin menggunakan gambar lain
    coverImage: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",

    // Deskripsi singkat (tampil di kartu, idealnya 1-2 kalimat)
    shortDescription:
      "Panduan praktis membangun kebiasaan kecil yang menghasilkan perubahan luar biasa dalam hidup Anda.",

    // Deskripsi lengkap (tampil di halaman detail)
    fullDescription: [
      "Atomic Habits karya James Clear adalah panduan teruji untuk membangun kebiasaan baik sekaligus menghancurkan kebiasaan buruk. Clear mengungkap bahwa perubahan besar tidak datang dari satu lompatan besar, melainkan dari perbaikan 1% setiap harinya yang terakumulasi menjadi hasil luar biasa.",
      "Buku ini memperkenalkan Four Laws of Behavior Change: membuat kebiasaan baik menjadi (1) jelas, (2) menarik, (3) mudah, dan (4) memuaskan—serta cara membalik hukum-hukum tersebut untuk menghilangkan kebiasaan buruk. Diperkaya dengan penelitian ilmiah, kisah atlet olimpiade, musisi, dan CEO terkemuka, buku ini memberikan kerangka kerja praktis yang bisa langsung diterapkan dalam kehidupan sehari-hari.",
    ],

    // Link afiliasi — ganti dengan link afiliasi Anda sendiri
    affiliateLink: "https://www.tokopedia.com/search?q=atomic+habits+james+clear",

    // Genre/kategori buku (bisa lebih dari satu)
    genre: ["Pengembangan Diri", "Produktivitas"],

    // Tahun pertama diterbitkan
    publishYear: 2018,

    // Rating (1.0 – 5.0)
    rating: 4.8,

    // Harga tampilan (opsional — hapus baris ini jika tidak ingin ditampilkan)
    price: "Rp 95.000",

    // Jumlah halaman (opsional — hapus baris ini jika tidak diketahui)
    pages: 320,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 2
  // ──────────────────────────────────────────────────────────────
  {
    id: "2",
    slug: "sang-alkemis",
    title: "Sang Alkemis",
    author: "Paulo Coelho",
    isbn13: "9780062315007",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    shortDescription:
      "Novel filosofis tentang perjalanan seorang gembala muda menemukan harta sejati dan makna hidup.",
    fullDescription: [
      "Sang Alkemis (The Alchemist) karya Paulo Coelho adalah salah satu novel paling berpengaruh di dunia, telah diterjemahkan ke lebih dari 80 bahasa. Buku ini mengikuti Santiago, seorang gembala muda asal Andalusia yang bermimpi menemukan harta karun di Piramida Mesir.",
      "Dalam perjalanannya yang penuh rintangan, Santiago bertemu dengan para bijak, pedagang, dan sang Alkemis yang mengajarkan bahwa semesta selalu bersekongkol membantu mereka yang dengan sepenuh hati mengejar 'Legenda Pribadi'-nya. Novel ini merupakan perpaduan indah antara petualangan, spiritualitas, dan filsafat hidup yang mengajarkan pentingnya mendengarkan hati nurani dan tidak menyerah pada impian.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=sang+alkemis+paulo+coelho",
    genre: ["Fiksi", "Inspirasi", "Sastra"],
    publishYear: 1988,
    rating: 4.7,
    price: "Rp 85.000",
    pages: 208,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 3
  // ──────────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "sapiens",
    title: "Sapiens: Riwayat Singkat Umat Manusia",
    author: "Yuval Noah Harari",
    isbn13: "9780062316097",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    shortDescription:
      "Petualangan intelektual menelusuri 70.000 tahun sejarah umat manusia—dari batu api hingga revolusi digital.",
    fullDescription: [
      "Sapiens karya Yuval Noah Harari adalah karya monumental yang menelusuri perjalanan Homo sapiens sejak 70.000 tahun lalu hingga hari ini. Harari mengajak pembaca memahami bagaimana manusia—makhluk biasa di rantai makanan—bisa menaklukkan bumi dan menciptakan peradaban yang kompleks.",
      "Buku ini menjawab pertanyaan-pertanyaan besar: Apa yang membuat manusia begitu unik dibanding spesies lain? Bagaimana bahasa, agama, uang, dan negara terbentuk? Mengapa Revolusi Pertanian disebut 'penipuan terbesar dalam sejarah'? Dan ke mana arah umat manusia selanjutnya?",
      "Ditulis dengan gaya yang jenaka namun mendalam, Sapiens berhasil membuat sejarah dan antropologi menjadi bacaan yang tidak bisa diletakkan sebelum selesai.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=sapiens+yuval+noah+harari",
    genre: ["Sejarah", "Non-Fiksi", "Sains"],
    publishYear: 2011,
    rating: 4.6,
    price: "Rp 110.000",
    pages: 443,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 4
  // ──────────────────────────────────────────────────────────────
  {
    id: "4",
    slug: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    isbn13: "9781612680194",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    shortDescription:
      "Apa yang diajarkan orang kaya kepada anak mereka tentang uang—yang tidak diajarkan di sekolah.",
    fullDescription: [
      "Rich Dad Poor Dad adalah buku keuangan pribadi paling laris sepanjang masa yang telah mengubah cara jutaan orang memandang uang dan investasi. Robert Kiyosaki membandingkan pola pikir dua ayah: 'Ayah Miskin' (ayah kandungnya yang berpendidikan tinggi namun selalu berjuang finansial) dan 'Ayah Kaya' (ayah temannya yang tidak tamat SMA namun menjadi salah satu orang terkaya di Hawaii).",
      "Buku ini mengajarkan pentingnya membedakan aset dan liabilitas, membangun sumber penghasilan pasif, dan berpikir seperti investor—bukan karyawan. Kiyosaki menantang anggapan bahwa pendidikan tinggi dan pekerjaan tetap adalah jalan menuju kebebasan finansial, dan mendorong pembaca untuk 'membuat uang bekerja untuk Anda, bukan Anda yang bekerja untuk uang'.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=rich+dad+poor+dad+kiyosaki",
    genre: ["Keuangan", "Bisnis", "Pengembangan Diri"],
    publishYear: 1997,
    rating: 4.5,
    price: "Rp 88.000",
    pages: 207,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 5
  // ──────────────────────────────────────────────────────────────
  {
    id: "5",
    slug: "ikigai",
    title: "Ikigai: Rahasia Hidup Bahagia dan Panjang Umur",
    author: "Héctor García & Francesc Miralles",
    isbn13: "9780143130727",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
    shortDescription:
      "Filosofi Jepang tentang menemukan tujuan hidup yang menjadi rahasia panjang umur dan kebahagiaan.",
    fullDescription: [
      "Ikigai—dalam bahasa Jepang berarti 'alasan untuk bangkit di pagi hari'—adalah konsep yang telah menjadi rahasia panjang umur dan kebahagiaan warga Okinawa, wilayah dengan konsentrasi centenarian (orang berusia 100 tahun lebih) tertinggi di dunia.",
      "Héctor García dan Francesc Miralles menghabiskan waktu bersama para tetua Okinawa untuk mengungkap rahasia mereka: tetap aktif, makan secukupnya, memiliki komunitas yang erat (moai), dan yang paling penting—menemukan ikigai masing-masing, yaitu titik pertemuan antara apa yang Anda cintai, apa yang Anda kuasai, apa yang dibutuhkan dunia, dan apa yang bisa Anda peroleh.",
      "Buku ini bukan hanya tentang umur panjang, melainkan tentang menjalani hidup yang penuh makna dan kegembiraan.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=ikigai+hector+garcia",
    genre: ["Gaya Hidup", "Pengembangan Diri", "Filosofi"],
    publishYear: 2016,
    rating: 4.4,
    price: "Rp 79.000",
    pages: 194,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 6
  // ──────────────────────────────────────────────────────────────
  {
    id: "6",
    slug: "deep-work",
    title: "Deep Work: Aturan untuk Fokus yang Sukses",
    author: "Cal Newport",
    isbn13: "9781455586691",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    shortDescription:
      "Kemampuan bekerja dalam konsentrasi mendalam adalah keahlian langka dan paling berharga di era modern.",
    fullDescription: [
      "Di era notifikasi tanpa henti dan media sosial yang tiada jeda, kemampuan untuk benar-benar fokus menjadi semakin langka—dan semakin berharga. Cal Newport, profesor ilmu komputer di Georgetown University, berargumen bahwa 'Deep Work' (kerja mendalam) adalah kemampuan superkuat yang memisahkan yang biasa dari yang luar biasa.",
      "Buku ini dibagi menjadi dua bagian: Mengapa kerja mendalam itu berharga, langka, dan bermakna—dan bagaimana cara melatih serta menjadwalkannya dalam kehidupan sehari-hari. Newport menawarkan strategi konkret: mulai dari filosofi monostik (menutup diri total untuk kerja mendalam) hingga ritualisme harian yang bisa disesuaikan dengan gaya hidup Anda.",
      "Jika Anda merasa semakin sulit berkonsentrasi, buku ini adalah obatnya.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=deep+work+cal+newport",
    genre: ["Produktivitas", "Pengembangan Diri"],
    publishYear: 2016,
    rating: 4.6,
    price: "Rp 92.000",
    pages: 296,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 7
  // ──────────────────────────────────────────────────────────────
  {
    id: "7",
    slug: "the-power-of-now",
    title: "The Power of Now: Panduan Menuju Pencerahan Spiritual",
    author: "Eckhart Tolle",
    isbn13: "9781577314806",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
    shortDescription:
      "Buku transformasional tentang kekuatan hidup di saat ini—bukan di masa lalu atau masa depan.",
    fullDescription: [
      "The Power of Now adalah buku yang telah mengubah jutaan hidup di seluruh dunia. Eckhart Tolle mengajarkan bahwa sumber segala penderitaan manusia adalah kecanduan pada pikiran—khususnya penyesalan tentang masa lalu dan kecemasan tentang masa depan. Kunci kebahagiaan sejati adalah kemampuan hadir sepenuhnya di momen saat ini.",
      "Ditulis dalam format tanya jawab yang mudah dipahami, buku ini membimbing pembaca untuk mengamati pikiran mereka tanpa menjadi pikiran tersebut, menemukan ketenangan batin yang melampaui kondisi eksternal, dan merasakan kedalaman kesadaran yang disebut Tolle sebagai 'Being'.",
      "Meskipun berakar dari tradisi spiritual berbagai budaya, buku ini relevan untuk siapa pun—beragama apa pun—yang ingin menemukan kedamaian sejati di tengah kesibukan dunia modern.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=the+power+of+now+eckhart+tolle",
    genre: ["Spiritualitas", "Pengembangan Diri", "Mindfulness"],
    publishYear: 1997,
    rating: 4.5,
    price: "Rp 89.000",
    pages: 229,
  },

  // ──────────────────────────────────────────────────────────────
  // BUKU 8
  // ──────────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn13: "9780374533557",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    shortDescription:
      "Pemenang Nobel mengungkap dua sistem berpikir manusia dan bagaimana keduanya membentuk keputusan kita.",
    fullDescription: [
      "Daniel Kahneman, psikolog peraih Nobel Ekonomi, membawa pembaca ke dalam perjalanan luar biasa tentang cara kerja pikiran manusia. Buku ini memperkenalkan dua sistem berpikir: Sistem 1 yang bekerja cepat, intuitif, dan emosional—serta Sistem 2 yang lambat, logis, dan deliberatif.",
      "Kahneman menjelaskan bagaimana kedua sistem ini berinteraksi dan mengapa kita sering membuat keputusan yang tidak rasional. Dari heuristik dan bias kognitif, efek framing, hingga kesalahan dalam memprediksi kebahagiaan—buku ini membuka mata tentang betapa sering kita 'salah berpikir' tanpa sadar.",
      "Bukan hanya untuk akademisi, Thinking Fast and Slow memberikan wawasan praktis yang membantu kita membuat keputusan yang lebih baik dalam bisnis, investasi, hubungan, dan kehidupan sehari-hari. Salah satu buku paling berpengaruh dalam psikologi dan ekonomi perilaku.",
    ],
    affiliateLink: "https://www.tokopedia.com/search?q=thinking+fast+and+slow+kahneman",
    genre: ["Psikologi", "Non-Fiksi", "Sains"],
    publishYear: 2011,
    rating: 4.7,
    price: "Rp 120.000",
    pages: 499,
  },

  // ──────────────────────────────────────────────────────────────
  // TAMBAHKAN BUKU BARU DI SINI
  // Salin template di bawah dan isi sesuai buku Anda:
  // ──────────────────────────────────────────────────────────────
  //
  // {
  //   id: "9",                    // Ganti dengan ID berikutnya
  //   slug: "judul-buku-baru",    // Ganti dengan slug unik
  //   title: "Judul Buku Baru",
  //   author: "Nama Pengarang",
  //   isbn13: "9780000000000",    // Ganti dengan ISBN-13 yang benar
  //   coverImage: "https://covers.openlibrary.org/b/isbn/9780000000000-L.jpg",
  //   shortDescription: "Deskripsi singkat buku (1-2 kalimat).",
  //   fullDescription: ["Paragraf pertama deskripsi lengkap.", "Paragraf kedua (opsional)."],
  //   affiliateLink: "https://www.tokopedia.com/search?q=judul+buku+baru",
  //   genre: ["Genre 1", "Genre 2"],
  //   publishYear: 2024,
  //   rating: 4.5,
  //   price: "Rp 99.000",         // Opsional — hapus jika tidak perlu
  //   pages: 300,                 // Opsional — hapus jika tidak diketahui
  // },
];
`
);

// ─────────────────────────────────────────────
// src/app/globals.css
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/globals.css"),
  `@import "tailwindcss";

@theme {
  /* ── Font families ─────────────────────────── */
  --font-serif: var(--font-playfair), Georgia, serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;

  /* ── Warna Cream (latar belakang hangat) ────── */
  --color-cream-50: #fdfcfa;
  --color-cream-100: #f7f4ef;
  --color-cream-200: #ede8de;
  --color-cream-300: #ddd5c8;

  /* ── Warna Forest Green (warna utama) ────────── */
  --color-forest-50: #eff5f2;
  --color-forest-100: #d1e5dc;
  --color-forest-200: #9dccba;
  --color-forest-300: #6bad97;
  --color-forest-400: #4a7766;
  --color-forest-500: #2d4a3e;
  --color-forest-600: #1e3329;
  --color-forest-700: #152720;

  /* ── Warna Gold (aksen) ─────────────────────── */
  --color-gold: #b8924a;
  --color-gold-light: #d4af71;
  --color-gold-dark: #8b6b30;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-cream-100);
  font-family: var(--font-sans);
}

/* ── Custom Scrollbar ───────────────────────────── */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: var(--color-cream-100);
}
::-webkit-scrollbar-thumb {
  background: var(--color-forest-200);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-forest-400);
}
`
);

// ─────────────────────────────────────────────
// src/app/layout.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/layout.tsx"),
  `import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://mindnest.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    template: "%s | MindNest",
  },
  description:
    "MindNest adalah kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu. Temukan rekomendasi buku terpercaya dalam berbagai genre.",
  keywords: [
    "rekomendasi buku",
    "buku terbaik",
    "buku pengembangan diri",
    "buku indonesia",
    "buku inspiratif",
    "review buku",
  ],
  authors: [{ name: "MindNest" }],
  creator: "MindNest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "MindNest",
    title: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    description:
      "Kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    description:
      "Kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={\`\${playfair.variable} \${inter.variable}\`}
    >
      <body className="min-h-screen flex flex-col bg-cream-100 font-sans text-forest-700 antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-forest-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:shadow-lg"
        >
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
`
);

// ─────────────────────────────────────────────
// src/app/page.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/page.tsx"),
  `import { books } from "@/data/books";
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
`
);

// ─────────────────────────────────────────────
// src/app/not-found.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/not-found.tsx"),
  `import Link from "next/link";
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
`
);

// ─────────────────────────────────────────────
// src/app/sitemap.ts
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/sitemap.ts"),
  `import { MetadataRoute } from "next";
import { books } from "@/data/books";

const siteUrl = "https://mindnest.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const bookEntries: MetadataRoute.Sitemap = books.map((book) => ({
    url: \`\${siteUrl}/buku/\${book.slug}\`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...bookEntries,
  ];
}
`
);

// ─────────────────────────────────────────────
// src/app/robots.ts
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/robots.ts"),
  `import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mindnest.id/sitemap.xml",
  };
}
`
);

// ─────────────────────────────────────────────
// src/app/buku/[slug]/page.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/app/buku/[slug]/page.tsx"),
  `import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/data/books";
import { Book } from "@/types/book";
import BookCoverImage from "@/components/BookCoverImage";
import StarRating from "@/components/StarRating";
import GenreBadge from "@/components/GenreBadge";
import { ExternalLinkIcon, ChevronLeftIcon } from "@/components/Icons";

// All slugs are known at build time — disable dynamic params for security & SEO
export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};

  const siteUrl = "https://mindnest.id";
  const pageUrl = \`\${siteUrl}/buku/\${book.slug}\`;

  return {
    title: book.title,
    description: book.shortDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "book",
      url: pageUrl,
      title: \`\${book.title} – MindNest\`,
      description: book.shortDescription,
      images: [{ url: book.coverImage, alt: \`Sampul buku \${book.title}\` }],
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: \`\${book.title} – MindNest\`,
      description: book.shortDescription,
      images: [book.coverImage],
    },
  };
}

function buildJsonLd(book: Book) {
  const siteUrl = "https://mindnest.id";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        name: book.title,
        author: { "@type": "Person", name: book.author },
        isbn: book.isbn13,
        datePublished: book.publishYear.toString(),
        image: book.coverImage,
        description: book.shortDescription,
        inLanguage: "id",
        ...(book.pages && { numberOfPages: book.pages }),
        genre: book.genre.join(", "),
        url: \`\${siteUrl}/buku/\${book.slug}\`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: book.title,
            item: \`\${siteUrl}/buku/\${book.slug}\`,
          },
        ],
      },
    ],
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(book)) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* ── Breadcrumb ─────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-forest-400">
            <li>
              <Link href="/" className="hover:text-forest-600 transition">
                Beranda
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-forest-600 font-medium truncate max-w-[200px] sm:max-w-xs">
              {book.title}
            </li>
          </ol>
        </nav>

        {/* ── Main Content ───────────────────────── */}
        <article className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">

          {/* Cover Image */}
          <aside className="flex flex-col items-center gap-4 md:col-span-1">
            <div className="w-48 sm:w-56 md:w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-black/10">
              <BookCoverImage
                src={book.coverImage}
                alt={\`Sampul buku \${book.title}\`}
                className="w-full"
              />
            </div>

            {/* Price badge (if available) */}
            {book.price && (
              <div className="rounded-full bg-forest-50 border border-forest-100 px-4 py-1.5 text-sm font-semibold text-forest-600">
                {book.price}
              </div>
            )}
          </aside>

          {/* Book Details */}
          <div className="md:col-span-2">

            {/* Genre badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {book.genre.map((g) => (
                <GenreBadge key={g} genre={g} />
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl">
              {book.title}
            </h1>

            {/* Author & meta */}
            <p className="mt-2 text-lg text-forest-500">
              oleh{" "}
              <span className="font-semibold text-forest-600">{book.author}</span>
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-forest-400">
              <span>{book.publishYear}</span>
              {book.pages && (
                <>
                  <span aria-hidden>·</span>
                  <span>{book.pages} halaman</span>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="mt-4">
              <StarRating rating={book.rating} />
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-forest-100" />

            {/* Full description */}
            <div className="space-y-4 text-forest-600 leading-relaxed">
              {book.fullDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-forest-100" />

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                href={book.affiliateLink}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gold-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                Dapatkan Buku Ini
                <ExternalLinkIcon className="h-4 w-4" />
              </a>

              {/* Affiliate disclosure */}
              <p className="text-xs text-forest-300 max-w-sm leading-relaxed">
                * Tautan di atas merupakan tautan afiliasi. Kami mungkin mendapatkan
                komisi kecil jika Anda melakukan pembelian, tanpa biaya tambahan bagi Anda.
              </p>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/#koleksi-buku"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-500 transition hover:text-forest-700 focus:outline-none focus:underline"
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Kembali ke Koleksi Buku
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
`
);

// ─────────────────────────────────────────────
// src/components/Icons.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/Icons.tsx"),
  `import { SVGProps } from "react";

export function BookOpenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement> & { filled?: boolean }) {
  const { filled, ...rest } = props;
  return filled ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
    </svg>
  );
}
`
);

// ─────────────────────────────────────────────
// src/components/Header.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/Header.tsx"),
  `import Link from "next/link";
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
`
);

// ─────────────────────────────────────────────
// src/components/Footer.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/Footer.tsx"),
  `import Link from "next/link";
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
`
);

// ─────────────────────────────────────────────
// src/components/BookCoverImage.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/BookCoverImage.tsx"),
  `"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function BookCoverImage({ src, alt, className = "" }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={\`flex aspect-[2/3] w-full flex-col items-center justify-center bg-forest-50 text-forest-300 \${className}\`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="h-16 w-16 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <p className="mt-2 text-xs text-center px-2">{alt}</p>
      </div>
    );
  }

  return (
    <div className={\`relative aspect-[2/3] w-full \${className}\`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
`
);

// ─────────────────────────────────────────────
// src/components/StarRating.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/StarRating.tsx"),
  `import { StarIcon } from "./Icons";

interface Props {
  rating: number;
  showNumber?: boolean;
}

export default function StarRating({ rating, showNumber = true }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={\`Rating: \${rating} dari 5 bintang\`}
      role="img"
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <StarIcon key={\`full-\${i}\`} filled className="h-4 w-4 text-gold" />
        ))}
        {hasHalf && (
          <span className="relative inline-block h-4 w-4">
            <StarIcon filled className="absolute inset-0 h-4 w-4 text-gold [clip-path:inset(0_50%_0_0)]" />
            <StarIcon className="absolute inset-0 h-4 w-4 text-gold/30" />
          </span>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StarIcon key={\`empty-\${i}\`} className="h-4 w-4 text-gold/30" />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-forest-500">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
`
);

// ─────────────────────────────────────────────
// src/components/GenreBadge.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/GenreBadge.tsx"),
  `const colorMap: Record<string, string> = {
  "Pengembangan Diri": "bg-forest-50 text-forest-600 border-forest-100",
  Produktivitas: "bg-forest-50 text-forest-600 border-forest-100",
  Fiksi: "bg-amber-50 text-amber-700 border-amber-100",
  Inspirasi: "bg-amber-50 text-amber-700 border-amber-100",
  Sastra: "bg-amber-50 text-amber-700 border-amber-100",
  Sejarah: "bg-stone-50 text-stone-600 border-stone-200",
  "Non-Fiksi": "bg-stone-50 text-stone-600 border-stone-200",
  Sains: "bg-sky-50 text-sky-700 border-sky-100",
  Keuangan: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Bisnis: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Gaya Hidup": "bg-pink-50 text-pink-700 border-pink-100",
  Filosofi: "bg-violet-50 text-violet-700 border-violet-100",
  Spiritualitas: "bg-violet-50 text-violet-700 border-violet-100",
  Mindfulness: "bg-violet-50 text-violet-700 border-violet-100",
  Psikologi: "bg-sky-50 text-sky-700 border-sky-100",
};

const defaultColor = "bg-cream-200 text-forest-500 border-cream-300";

interface Props {
  genre: string;
}

export default function GenreBadge({ genre }: Props) {
  const colorClass = colorMap[genre] ?? defaultColor;
  return (
    <span
      className={\`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium \${colorClass}\`}
    >
      {genre}
    </span>
  );
}
`
);

// ─────────────────────────────────────────────
// src/components/BookCard.tsx
// ─────────────────────────────────────────────
write(
  path.join(root, "src/components/BookCard.tsx"),
  `import Link from "next/link";
import { Book } from "@/types/book";
import BookCoverImage from "./BookCoverImage";
import StarRating from "./StarRating";
import GenreBadge from "./GenreBadge";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <Link
      href={\`/buku/\${book.slug}\`}
      className="group flex h-full flex-row overflow-hidden rounded-xl border border-cream-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:ring-offset-2 sm:flex-col"
      aria-label={\`Lihat detail buku \${book.title} oleh \${book.author}\`}
    >
      {/* ── Cover Image ───────────────────────── */}
      {/* Mobile: fixed width on left; Desktop: full width on top */}
      <div className="w-28 flex-shrink-0 sm:w-full">
        <BookCoverImage
          src={book.coverImage}
          alt={\`Sampul buku \${book.title}\`}
          className="h-full sm:h-auto"
        />
      </div>

      {/* ── Content ───────────────────────────── */}
      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <div>
          {/* Genre (show first genre on card) */}
          <div className="mb-2 hidden sm:flex flex-wrap gap-1">
            {book.genre.slice(0, 2).map((g) => (
              <GenreBadge key={g} genre={g} />
            ))}
          </div>

          {/* Title */}
          <h3 className="font-serif text-base font-bold leading-snug text-forest-700 group-hover:text-forest-500 transition sm:text-lg line-clamp-2">
            {book.title}
          </h3>

          {/* Author */}
          <p className="mt-1 text-sm text-forest-400">{book.author}</p>

          {/* Short description — only on desktop */}
          <p className="mt-2 hidden text-sm leading-relaxed text-forest-500 sm:line-clamp-3">
            {book.shortDescription}
          </p>
        </div>

        {/* Rating + Year */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-cream-200">
          <StarRating rating={book.rating} showNumber={false} />
          <span className="text-xs text-forest-300">{book.publishYear}</span>
        </div>
      </div>
    </Link>
  );
}
`
);

// ─────────────────────────────────────────────
// next.config.ts (update with image domains)
// ─────────────────────────────────────────────
write(
  path.join(root, "next.config.ts"),
  `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Open Library (sumber cover buku default)
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/**",
      },
      // Amazon (jika menggunakan cover dari Amazon)
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
`
);

console.log("\\n✅ Semua file berhasil dibuat! Jalankan: npm run dev");
