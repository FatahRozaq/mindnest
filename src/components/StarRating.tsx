import { StarIcon } from "./Icons";

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
      aria-label={`Rating: ${rating} dari 5 bintang`}
      role="img"
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <StarIcon key={`full-${i}`} filled className="h-4 w-4 text-gold" />
        ))}
        {hasHalf && (
          <span className="relative inline-block h-4 w-4">
            <StarIcon filled className="absolute inset-0 h-4 w-4 text-gold [clip-path:inset(0_50%_0_0)]" />
            <StarIcon className="absolute inset-0 h-4 w-4 text-gold/30" />
          </span>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gold/30" />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-forest-500">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
