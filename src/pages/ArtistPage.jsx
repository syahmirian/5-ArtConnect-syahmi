// src/pages/ArtistPage.jsx
import OurArtistVisualArt from "../components/OurArtistVisualArt";
import ArtistProfiles from "../components/ArtistProfiles";
import FeaturedArtists from "../components/FeaturedArtists";
import Footer from "../components/Footer";

export default function ArtistPage() {
  return (
    <div className="bg-[#111111] min-h-screen text-white">
      {/* TOP TITLE (opsional, biar kayak page title) */}
      <section className="pt-20 pb-10 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-2">
            Visual Artist
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Artist Visual Art
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover inspiring visual artists, explore their portfolios, and
            learn more about their stories behind each artwork.
          </p>
        </div>
      </section>

      {/* SECTION: strip coklat + avatar bulat (komponen yang sudah ada) */}
      <OurArtistVisualArt />

      {/* SECTION: daftar artis (card biography) */}
      <ArtistProfiles />

      {/* SECTION: Our Featured Artists (4 gambar + See More) */}
      <FeaturedArtists />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
