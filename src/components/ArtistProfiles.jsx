import rose from "../assets/4.png";
import marco from "../assets/2.png";
import ayla from "../assets/1.png";
import kim from "../assets/3.png";

const artists = [
  {
    name: "Rose Annie M.",
    role: "Specialized in modern surrealism & expressive portrait art.",
    image: rose,
  },
  {
    name: "Marco Silva",
    role: "Digital illustrator & concept artist for creative projects.",
    image: marco,
  },
  {
    name: "Ayla Reiko",
    role: "Fine art painter with minimalist & emotional themes.",
    image: ayla,
  },
  {
    name: "Kim Sejeong",
    role: "Contemporary artist mixing colors, culture, and character.",
    image: kim,
  },
];

export default function ArtistProfiles() {
  return (
    <section className="bg-[#f5eee7] text-[#222] py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Meet the Artist ArtConnect
          </h2>
          <p className="text-sm md:text-base text-[#555] max-w-2xl mx-auto leading-relaxed">
            A platform to connect, discover, and support the work of talented
            artists across various visual art categories.
          </p>
        </div>

        {/* GRID CARD 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="flex items-center gap-6 bg-[#ecf0ff] rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] px-6 py-5"
            >
              {/* FOTO */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-gray-300 flex-shrink-0">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEKS + BUTTON */}
              <div className="flex-1 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">
                    {artist.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#555] leading-relaxed">
                    {artist.role}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-full bg-[#4a4039] text-xs md:text-sm text-white font-medium shadow-md hover:opacity-90 transition">
                    Biography
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
