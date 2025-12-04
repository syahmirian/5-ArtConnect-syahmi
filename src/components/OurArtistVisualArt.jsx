import artist1 from "../assets/1.png";
import artist2 from "../assets/2.png";
import artist3 from "../assets/3.png";
import artist4 from "../assets/4.png";

const artists = [artist1, artist2, artist3, artist4];

export default function OurArtistVisualArt() {
  return (
    <section className="bg-[#4a4039] text-white py-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Label kecil */}
        <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">
          |Visual Artist|
        </p>

        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          OUR ARTIST VISUAL
          <br />
          ART
        </h2>

        {/* Garis bawah */}
        <div className="w-32 h-[2px] bg-white mt-4 mb-10 mx-auto" />

        {/* Avatar bulat */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {artists.map((img, i) => (
            <div
              key={i}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white/10 border border-white/20 shadow-lg"
            >
              <img
                src={img}
                alt={`Artist ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
