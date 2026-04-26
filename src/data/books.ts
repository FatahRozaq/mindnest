// =============================================================
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
    coverImage: "/images/books/atomic-habits.png",

    // Deskripsi singkat (tampil di kartu, idealnya 1-2 kalimat)
    shortDescription:
      "Panduan praktis membangun kebiasaan kecil yang menghasilkan perubahan luar biasa dalam hidup Anda.",

    // Deskripsi lengkap (tampil di halaman detail)
    fullDescription: [
      "Atomic Habits karya James Clear adalah panduan teruji untuk membangun kebiasaan baik sekaligus menghancurkan kebiasaan buruk. Clear mengungkap bahwa perubahan besar tidak datang dari satu lompatan besar, melainkan dari perbaikan 1% setiap harinya yang terakumulasi menjadi hasil luar biasa.",
      "Buku ini memperkenalkan Four Laws of Behavior Change: membuat kebiasaan baik menjadi (1) jelas, (2) menarik, (3) mudah, dan (4) memuaskan—serta cara membalik hukum-hukum tersebut untuk menghilangkan kebiasaan buruk. Diperkaya dengan penelitian ilmiah, kisah atlet olimpiade, musisi, dan CEO terkemuka, buku ini memberikan kerangka kerja praktis yang bisa langsung diterapkan dalam kehidupan sehari-hari.",
    ],

    // Link afiliasi — ganti dengan link afiliasi Anda sendiri
    affiliateLink: "https://s.shopee.co.id/3B3mV6GGYK",

    // Genre/kategori buku (bisa lebih dari satu)
    genre: ["Pengembangan Diri", "Produktivitas"],

    // Tahun pertama diterbitkan
    publishYear: 2018,

    // Rating (1.0 – 5.0)
    rating: 4.8,

    // Harga tampilan (opsional — hapus baris ini jika tidak ingin ditampilkan)
    // price: "Rp 108.000",

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
    coverImage: "/images/books/the-alchemist.jpg",
    shortDescription:
      "Novel filosofis tentang perjalanan seorang gembala muda menemukan harta sejati dan makna hidup.",
    fullDescription: [
      "Sang Alkemis (The Alchemist) karya Paulo Coelho adalah salah satu novel paling berpengaruh di dunia, telah diterjemahkan ke lebih dari 80 bahasa. Buku ini mengikuti Santiago, seorang gembala muda asal Andalusia yang bermimpi menemukan harta karun di Piramida Mesir.",
      "Dalam perjalanannya yang penuh rintangan, Santiago bertemu dengan para bijak, pedagang, dan sang Alkemis yang mengajarkan bahwa semesta selalu bersekongkol membantu mereka yang dengan sepenuh hati mengejar 'Legenda Pribadi'-nya. Novel ini merupakan perpaduan indah antara petualangan, spiritualitas, dan filsafat hidup yang mengajarkan pentingnya mendengarkan hati nurani dan tidak menyerah pada impian.",
    ],
    affiliateLink: "https://s.shopee.co.id/8V5ItKnYaV",
    genre: ["Fiksi", "Inspirasi", "Sastra"],
    publishYear: 1988,
    rating: 4.7,
    // price: "Rp 65.000",
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
    coverImage: "/images/books/591701404_sapiens.jpg",
    shortDescription:
      "Petualangan intelektual menelusuri 70.000 tahun sejarah umat manusia—dari batu api hingga revolusi digital.",
    fullDescription: [
      "Sapiens karya Yuval Noah Harari adalah karya monumental yang menelusuri perjalanan Homo sapiens sejak 70.000 tahun lalu hingga hari ini. Harari mengajak pembaca memahami bagaimana manusia—makhluk biasa di rantai makanan—bisa menaklukkan bumi dan menciptakan peradaban yang kompleks.",
      "Buku ini menjawab pertanyaan-pertanyaan besar: Apa yang membuat manusia begitu unik dibanding spesies lain? Bagaimana bahasa, agama, uang, dan negara terbentuk? Mengapa Revolusi Pertanian disebut 'penipuan terbesar dalam sejarah'? Dan ke mana arah umat manusia selanjutnya?",
      "Ditulis dengan gaya yang jenaka namun mendalam, Sapiens berhasil membuat sejarah dan antropologi menjadi bacaan yang tidak bisa diletakkan sebelum selesai.",
    ],
    affiliateLink: "https://s.shopee.co.id/8pi9I49ikx",
    genre: ["Sejarah", "Non-Fiksi", "Sains"],
    publishYear: 2011,
    rating: 4.6,
    // price: "Rp 110.000",
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
    coverImage: "/images/books/rich-dad-poor-dad1.jpg",
    shortDescription:
      "Apa yang diajarkan orang kaya kepada anak mereka tentang uang—yang tidak diajarkan di sekolah.",
    fullDescription: [
      "Rich Dad Poor Dad adalah buku keuangan pribadi paling laris sepanjang masa yang telah mengubah cara jutaan orang memandang uang dan investasi. Robert Kiyosaki membandingkan pola pikir dua ayah: 'Ayah Miskin' (ayah kandungnya yang berpendidikan tinggi namun selalu berjuang finansial) dan 'Ayah Kaya' (ayah temannya yang tidak tamat SMA namun menjadi salah satu orang terkaya di Hawaii).",
      "Buku ini mengajarkan pentingnya membedakan aset dan liabilitas, membangun sumber penghasilan pasif, dan berpikir seperti investor—bukan karyawan. Kiyosaki menantang anggapan bahwa pendidikan tinggi dan pekerjaan tetap adalah jalan menuju kebebasan finansial, dan mendorong pembaca untuk 'membuat uang bekerja untuk Anda, bukan Anda yang bekerja untuk uang'.",
    ],
    affiliateLink: "https://s.shopee.co.id/6AhO7DerjW",
    genre: ["Keuangan", "Bisnis", "Pengembangan Diri"],
    publishYear: 1997,
    rating: 4.5,
    // price: "Rp 68.000",
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
    coverImage: "/images/books/IKIGAI (1).jpg",
    shortDescription:
      "Filosofi Jepang tentang menemukan tujuan hidup yang menjadi rahasia panjang umur dan kebahagiaan.",
    fullDescription: [
      "Ikigai—dalam bahasa Jepang berarti 'alasan untuk bangkit di pagi hari'—adalah konsep yang telah menjadi rahasia panjang umur dan kebahagiaan warga Okinawa, wilayah dengan konsentrasi centenarian (orang berusia 100 tahun lebih) tertinggi di dunia.",
      "Héctor García dan Francesc Miralles menghabiskan waktu bersama para tetua Okinawa untuk mengungkap rahasia mereka: tetap aktif, makan secukupnya, memiliki komunitas yang erat (moai), dan yang paling penting—menemukan ikigai masing-masing, yaitu titik pertemuan antara apa yang Anda cintai, apa yang Anda kuasai, apa yang dibutuhkan dunia, dan apa yang bisa Anda peroleh.",
      "Buku ini bukan hanya tentang umur panjang, melainkan tentang menjalani hidup yang penuh makna dan kegembiraan.",
    ],
    affiliateLink: "https://s.shopee.co.id/50VQj7vQq2",
    genre: ["Gaya Hidup", "Pengembangan Diri", "Filosofi"],
    publishYear: 2016,
    rating: 4.4,
    // price: "Rp 85.000",
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
    coverImage: "/images/books/deep-work1.jpg",
    shortDescription:
      "Kemampuan bekerja dalam konsentrasi mendalam adalah keahlian langka dan paling berharga di era modern.",
    fullDescription: [
      "Di era notifikasi tanpa henti dan media sosial yang tiada jeda, kemampuan untuk benar-benar fokus menjadi semakin langka—dan semakin berharga. Cal Newport, profesor ilmu komputer di Georgetown University, berargumen bahwa 'Deep Work' (kerja mendalam) adalah kemampuan superkuat yang memisahkan yang biasa dari yang luar biasa.",
      "Buku ini dibagi menjadi dua bagian: Mengapa kerja mendalam itu berharga, langka, dan bermakna—dan bagaimana cara melatih serta menjadwalkannya dalam kehidupan sehari-hari. Newport menawarkan strategi konkret: mulai dari filosofi monostik (menutup diri total untuk kerja mendalam) hingga ritualisme harian yang bisa disesuaikan dengan gaya hidup Anda.",
      "Jika Anda merasa semakin sulit berkonsentrasi, buku ini adalah obatnya.",
    ],
    affiliateLink: "https://s.shopee.co.id/7fWBu6eitW",
    genre: ["Produktivitas", "Pengembangan Diri"],
    publishYear: 2016,
    rating: 4.6,
    // price: "Rp 115.000",
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
    coverImage: "/images/books/the-power-of-now.webp",
    shortDescription:
      "Buku transformasional tentang kekuatan hidup di saat ini—bukan di masa lalu atau masa depan.",
    fullDescription: [
      "The Power of Now adalah buku yang telah mengubah jutaan hidup di seluruh dunia. Eckhart Tolle mengajarkan bahwa sumber segala penderitaan manusia adalah kecanduan pada pikiran—khususnya penyesalan tentang masa lalu dan kecemasan tentang masa depan. Kunci kebahagiaan sejati adalah kemampuan hadir sepenuhnya di momen saat ini.",
      "Ditulis dalam format tanya jawab yang mudah dipahami, buku ini membimbing pembaca untuk mengamati pikiran mereka tanpa menjadi pikiran tersebut, menemukan ketenangan batin yang melampaui kondisi eksternal, dan merasakan kedalaman kesadaran yang disebut Tolle sebagai 'Being'.",
      "Meskipun berakar dari tradisi spiritual berbagai budaya, buku ini relevan untuk siapa pun—beragama apa pun—yang ingin menemukan kedamaian sejati di tengah kesibukan dunia modern.",
    ],
    affiliateLink: "https://s.shopee.co.id/5AoqvZIRgT",
    genre: ["Spiritualitas", "Pengembangan Diri", "Mindfulness"],
    publishYear: 1997,
    rating: 4.5,
    // price: "Rp 85.000",
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
    coverImage: "/images/books/thinking-fast-and-slow1.jpg",
    shortDescription:
      "Pemenang Nobel mengungkap dua sistem berpikir manusia dan bagaimana keduanya membentuk keputusan kita.",
    fullDescription: [
      "Daniel Kahneman, psikolog peraih Nobel Ekonomi, membawa pembaca ke dalam perjalanan luar biasa tentang cara kerja pikiran manusia. Buku ini memperkenalkan dua sistem berpikir: Sistem 1 yang bekerja cepat, intuitif, dan emosional—serta Sistem 2 yang lambat, logis, dan deliberatif.",
      "Kahneman menjelaskan bagaimana kedua sistem ini berinteraksi dan mengapa kita sering membuat keputusan yang tidak rasional. Dari heuristik dan bias kognitif, efek framing, hingga kesalahan dalam memprediksi kebahagiaan—buku ini membuka mata tentang betapa sering kita 'salah berpikir' tanpa sadar.",
      "Bukan hanya untuk akademisi, Thinking Fast and Slow memberikan wawasan praktis yang membantu kita membuat keputusan yang lebih baik dalam bisnis, investasi, hubungan, dan kehidupan sehari-hari. Salah satu buku paling berpengaruh dalam psikologi dan ekonomi perilaku.",
    ],
    affiliateLink: "https://s.shopee.co.id/2LUfYRjuWW",
    genre: ["Psikologi", "Non-Fiksi", "Sains"],
    publishYear: 2011,
    rating: 4.7,
    // price: "Rp 148.000",
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
