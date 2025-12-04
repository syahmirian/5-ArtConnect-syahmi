import { useParams, useNavigate } from "react-router-dom";
import { getArtistById } from "../data/artists";
import FeaturedArtists from "../components/FeaturedArtists";

// Gambar-gambar dummy, silakan ganti dengan aset sesuai Figma
import hero1 from "../assets/artist-illustration.png";
import hero2 from "../assets/artist-fineart.png";
import hero3 from "../assets/artist-digital.png";

export default function ArtistDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = getArtistById(id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl">Artist not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white">
      {/* HERO SECTION */}
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[2fr,3fr] gap-10 items-center">
          {/* LEFT: collage images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={hero1}
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={hero2}
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={hero3}
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-300">
              Visual Artist
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Discover Inspiring Voices in Visual Art
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Explore curated artworks, meet talented artists like{" "}
              <span className="font-semibold">{artist.name}</span>, and immerse
              yourself in a world of contemporary visual expression.
            </p>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-5 py-2 rounded-full bg-white text-black text-sm font-medium shadow-md hover:bg-gray-200 transition"
            >
              ← Back to Artists
            </button>
          </div>
        </div>
      </section>

      {/* SHORT PROFILE CARD SECTION */}
      <section className="bg-[#f5eee7] text-[#222] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            Profile
          </p>
          <h2 className="text-center text-3xl font-extrabold mb-10">
            Short Profile
          </h2>

          <div className="bg-[#4a4039] text-white rounded-[32px] px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Portrait */}
            <div className="w-40 h-48 rounded-[28px] overflow-hidden flex-shrink-0 border border-white/20">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">{artist.name}</h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {artist.tagline}
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-xs md:text-sm">
                <div>
                  <p className="uppercase tracking-[0.2em] text-white/60">
                    Years
                  </p>
                  <p className="font-semibold">{artist.years}</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.2em] text-white/60">
                    Canvas Circle
                  </p>
                  <p className="font-semibold">{artist.circle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST ART FROM THE ARTIST */}
      <section className="bg-[#f5eee7] text-[#222] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[2fr,3fr] gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Best Art From The Artist
            </h2>
            <p className="text-sm md:text-base text-[#555] leading-relaxed max-w-md">
              {artist.bestArtDescription}
            </p>
          </div>

          {/* Circle + square image */}
          <div className="flex gap-5 justify-center md:justify-end">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md border border-white">
              <img
                src={hero2}
                alt="Best art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-[32px] overflow-hidden shadow-md">
              <img
                src={hero3}
                alt="Best art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXHIBITION SECTION */}
      <section className="bg-[#4a4039] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
            Exhibition
          </p>
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-3">
            The Exhibition Partice Of
            <br />
            The Artist
          </h2>
          <p className="text-center text-sm md:text-base text-white/70 max-w-xl mx-auto">
            Highlights of art exhibition participation that the artist has
            joined in various galleries and creative spaces.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={hero1}
                alt="Exhibition 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={hero2}
                alt="Exhibition 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={hero3}
                alt="Exhibition 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR FEATURED ARTISTS (SECTION TERAKHIR SAMA PERSIS) */}
      <FeaturedArtists />
    </div>
  );
}
