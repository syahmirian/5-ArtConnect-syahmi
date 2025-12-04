import featured1 from "../assets/footer1.png";
import featured2 from "../assets/footer2.png";
import featured3 from "../assets/footer3.png";
import featured4 from "../assets/footer4.png";

export default function FeaturedArtists() {
  return (
    <section className="bg-[#f5eee7] py-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* KIRI – GRID 4 GAMBAR */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md mx-auto md:mx-0">
          <img
            src={featured1}
            alt="Featured artwork 1"
            className="w-full h-40 md:h-52 object-cover rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
          />
          <img
            src={featured2}
            alt="Featured artwork 2"
            className="w-full h-40 md:h-52 object-cover rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
          />
          <img
            src={featured3}
            alt="Featured artwork 3"
            className="w-full h-40 md:h-52 object-cover rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
          />
          <img
            src={featured4}
            alt="Featured artwork 4"
            className="w-full h-40 md:h-52 object-cover rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* KANAN – TITLE, DESKRIPSI, BUTTON */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#222]">
            Our Featured Artists
          </h2>

          <p className="text-sm md:text-base text-gray-700 max-w-md mb-8 leading-relaxed">
            Explore a diverse array of talented artists with various styles and
            backgrounds in the world of contemporary art.
          </p>

          <button className="inline-block px-10 py-3 rounded-xl bg-[#6d5c52] text-white font-semibold text-sm md:text-base shadow-lg hover:bg-[#5a4c45] transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
