// src/data/artists.js
import artistRose from "../assets/artist-rose.png";
import artistMarco from "../assets/artist-marco.png";
import artistAyla from "../assets/artist-ayla.png";
import artistKim from "../assets/artist-kim.png";

export const artists = [
  {
    id: "rose", // dipakai di URL /artist/rose
    name: "Rose Annie M.",
    role: "Modern surrealism & expressive portrait artist.",
    years: "5+ Years",
    location: "ArtConnect Studio",
    avatar: artistRose,
    heroImage: artistRose, // kalau mau beda, bisa pakai gambar lain
    shortBio:
      "Specialized in modern surrealism and expressive portrait art that blends vivid colors with emotional storytelling.",
    bestArtTitle: "Dreamscape of Colors",
    bestArtDesc:
      "A collection of surreal portraits that capture the emotional depth of the human experience."
  },
  {
    id: "marco",
    name: "Marco Silva",
    role: "Digital illustrator & concept artist.",
    years: "7+ Years",
    location: "Lisbon, Portugal",
    avatar: artistMarco,
    heroImage: artistMarco,
    shortBio:
      "Known for bold compositions and cinematic lighting in digital illustrations for games and films.",
    bestArtTitle: "Neon City Stories",
    bestArtDesc:
      "Illustrations that explore futuristic worlds, neon tones, and layered visual narratives."
  },
  {
    id: "ayla",
    name: "Ayla Reiko",
    role: "Fine art painter with minimalist & emotional themes.",
    years: "5 Years",
    location: "Canvas Circle",
    avatar: artistAyla,
    heroImage: artistAyla,
    shortBio:
      "Her work focuses on quiet emotions, minimal palettes, and subtle textures on large canvases.",
    bestArtTitle: "Silent Horizons",
    bestArtDesc:
      "A series of paintings that explore solitude, calmness, and emotional stillness."
  },
  {
    id: "kim",
    name: "Kim Sejeong",
    role: "Contemporary artist mixing colors, culture, and character.",
    years: "6+ Years",
    location: "Seoul, South Korea",
    avatar: artistKim,
    heroImage: artistKim,
    shortBio:
      "Combines bold color blocking with cultural motifs to create striking visual stories.",
    bestArtTitle: "Fragments of Memory",
    bestArtDesc:
      "Works that blend portraiture with abstract shapes and symbolic patterns."
  }
];
