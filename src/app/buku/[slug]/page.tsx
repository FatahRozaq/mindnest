import { notFound } from "next/navigation";
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
  const pageUrl = `${siteUrl}/buku/${book.slug}`;

  return {
    title: book.title,
    description: book.shortDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "book",
      url: pageUrl,
      title: `${book.title} – MindNest`,
      description: book.shortDescription,
      images: [{ url: book.coverImage, alt: `Sampul buku ${book.title}` }],
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} – MindNest`,
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
        url: `${siteUrl}/buku/${book.slug}`,
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
            item: `${siteUrl}/buku/${book.slug}`,
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
                alt={`Sampul buku ${book.title}`}
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
            {/*
            <div className="mt-4">
              <StarRating rating={book.rating} />
            </div>
            */}

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
              {/* <p className="text-xs text-forest-300 max-w-sm leading-relaxed">
                * Tautan di atas merupakan tautan afiliasi. Kami mungkin mendapatkan
                komisi kecil jika Anda melakukan pembelian, tanpa biaya tambahan bagi Anda.
              </p> */}
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
