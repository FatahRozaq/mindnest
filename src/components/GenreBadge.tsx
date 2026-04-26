const colorMap: Record<string, string> = {
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
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {genre}
    </span>
  );
}
