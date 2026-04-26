import Link from "next/link";
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
      href={`/buku/${book.slug}`}
      className="group flex h-full flex-row overflow-hidden rounded-xl border border-cream-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:ring-offset-2 sm:flex-col"
      aria-label={`Lihat detail buku ${book.title} oleh ${book.author}`}
    >
      {/* ── Cover Image ───────────────────────── */}
      {/* Mobile: fixed width on left; Desktop: full width on top */}
      <div className="w-28 flex-shrink-0 sm:w-full">
        <BookCoverImage
          src={book.coverImage}
          alt={`Sampul buku ${book.title}`}
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
