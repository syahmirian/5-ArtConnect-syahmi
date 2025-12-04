const artists = [
  {
    name: "Rose Annie M.",
    role: "Specialized in modern surrealism & expressive portrait art.",
    image: "/artist-rose.png",
  },
  {
    name: "Marco Silva",
    role: "Digital illustrator & concept artist for creative projects.",
    image: "/artist-marco.png",
  },
  {
    name: "Ayla Reiko",
    role: "Fine art painter with minimalist & emotional themes.",
    image: "/artist-ayla.png",
  },
  {
    name: "Kim Sejeong",
    role: "Contemporary artist mixing colors, culture, and character.",
    image: "/artist-kim.png",
  },
];

function ArtistCard({ artist }) {
  return (
    <div className="flex items-center gap-4 bg-[#ecf0ff] rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] px-6 py-5">
      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-300 flex-shrink-0">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{artist.name}</h3>
        <p className="text-xs text-[#555] leading-relaxed">{artist.role}</p>
      </div>
      <button className="px-4 py-2 rounded-full bg-[#4a4039] text-xs text-white font-medium shadow-md hover:opacity-90 transition">
        Biography
      </button>
    </div>
  );
}

export default function ArtistPage() {
  return (
    <main className="bg-[#f5eee7] text-[#222] min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-8 pt-24">
        {/* Title kecil di atas */}
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 text-center mb-2">
          Visual Artist
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
          OUR ARTIST VISUAL ART
        </h1>

        {/* Short profile satu artist */}
        <section className="mb-16 flex justify-center">
          <div className="bg-[#4a4039] text-white rounded-3xl px-8 py-6 w-full max-w-xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-semibold mb-1">Kim Sejeong</h2>
              <p className="text-xs text-gray-200">
                Contemporary artist mixing colors, culture, and character
                through expressive visual storytelling.
              </p>
            </div>
            <button className="mt-2 md:mt-0 px-4 py-2 rounded-full bg-white text-[#4a4039] text-xs font-semibold">
              View Profile
            </button>
          </div>
        </section>

        {/* OTHER ARTIST OF VISUAL ART */}
        <section>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 text-center mb-2">
            Visual Artist
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-center mb-10">
            OTHER ARTIST OF VISUAL ART
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artists.map((a) => (
              <ArtistCard key={a.name} artist={a} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
