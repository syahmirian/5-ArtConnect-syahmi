import Hero from "../components/Hero";
import ArtistCommunity from "../components/ArtistCommunity";
import OurArtistVisualArt from "../components/OurArtistVisualArt";
import ArtistProfiles from "../components/ArtistProfiles";
import FeaturedArtists from "../components/FeaturedArtists";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#111111]">
      {/* HERO + SEMUA SECTION HOMEPAGE */}
      <Hero />
      <ArtistCommunity />
      <OurArtistVisualArt />
      <ArtistProfiles />
      <FeaturedArtists />
      <Footer />
    </div>
  );
}
