import illustrationImg from "../assets/artist-illustration.png";
import fineArtImg from "../assets/artist-fineart.png";
import digitalArtImg from "../assets/artist-digital.png";

const categories = [
  { title: "Illustration", image: illustrationImg },
  { title: "Fine Art", image: fineArtImg },
  { title: "Digital Art", image: digitalArtImg },
];

export default function ArtistCommunity() {
  return (
    <section className="bg-[#f5eee7] text-[#222] py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-16">
          <div className="h-[2px] w-48 bg-[#222] mb-6" />
          <h2 className="text-4xl font-extrabold mb-3">
            Meet the Artist Community Now!
          </h2>
          <p className="text-[#555] max-w-2xl leading-relaxed">
            A platform to connect, discover, and support the work of talented artists across various visual art categories.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
          {categories.map((item) => (
            <div key={item.title} className="flex flex-col items-center">

              {/* Card */}
              <div className="w-[260px] h-[230px] rounded-2xl overflow-hidden shadow-xl mb-[-60px] z-20 bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Circle */}
              <div className="w-[300px] h-[300px] bg-[#d8d8dd] rounded-full shadow-md flex items-center justify-center z-10">
                <p className="text-gray-700 italic">{item.title}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
