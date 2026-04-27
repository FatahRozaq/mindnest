export interface Book {
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
  rating: number; // rating property
  /** Harga tampilan (opsional), contoh: "Rp 95.000" */
  price?: string;
  /** Jumlah halaman buku (opsional) */
  pages?: number;
}
