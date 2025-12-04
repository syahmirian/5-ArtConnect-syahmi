// src/data/artists.js
import rose from "../assets/4.png";
import marco from "../assets/2.png";
import ayla from "../assets/1.png";
import kim from "../assets/3.png";

// DATA UTAMA ARTIST
export const artists = [
  {
    id: "rose",
    name: "Rose Annie M.",
    role: "Specialized in modern surrealism & expressive portrait art.",
    image: rose,
    // tambahan buat halaman detail:
    tagline: "Specialized in modern surrealism & expressive portrait art.",
    years: "5+ Years",
    circle: "Canvas Circle",
    bestArtDescription:
      "A collection of expressive surrealist portraits that blend reality with dreamlike colors and textures.",
  },
  {
    id: "marco",
    name: "Marco Silva",
    role: "Digital illustrator & concept artist for creative projects.",
    image: marco,
    tagline:
      "Digital illustrator & concept artist who brings cinematic scenes to life.",
    years: "7+ Years",
    circle: "Concept Studio",
    bestArtDescription:
      "Dynamic digital illustrations and concept art developed for various creative projects and visual campaigns.",
  },
  {
    id: "ayla",
    name: "Ayla Reiko",
    role: "Fine art painter with minimalist & emotional themes.",
    image: ayla,
    tagline:
      "Fine art painter with minimalist compositions and emotional storytelling.",
    years: "5 Years",
    circle: "Canvas Circle",
    bestArtDescription:
      "Minimalist fine art pieces that focus on emotion, silence, and subtle visual narratives.",
  },
  {
    id: "kim",
    name: "Kim Sejeong",
    role: "Contemporary artist mixing colors, culture, and character.",
    image: kim,
    tagline:
      "Contemporary artist mixing bold colors, culture, and unique character design.",
    years: "6+ Years",
    circle: "Color Studio",
    bestArtDescription:
      "Colorful contemporary artworks that merge portrait, culture, and graphic elements in a unique style.",
  },
];

// FUNGSI HELPER UNTUK DETAIL PAGE
export function getArtistById(id) {
  return artists.find((artist) => artist.id === id);
}
