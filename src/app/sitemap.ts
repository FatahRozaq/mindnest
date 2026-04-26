import { MetadataRoute } from "next";
import { books } from "@/data/books";

const siteUrl = "https://mindnest.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const bookEntries: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${siteUrl}/buku/${book.slug}`,
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
