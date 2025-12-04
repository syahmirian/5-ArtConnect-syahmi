import bg from "../assets/hero-bg.png";
import layer1 from "../assets/layer1.png";
import layer2 from "../assets/layer2.png";
import heroMain from "../assets/hero-main.png";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
          {/* Background */}
          <img src={bg} className="w-full h-full object-cover" />

          {/* DARK GRADIENT so text is readable */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ================ IMAGE STACK — EXACT LIKE FIGMA ================ */}

          {/* Layer 1 (foto besar kiri bawah) */}
          <div className="absolute left-[6%] top-[28%] w-[260px] h-[330px] rounded-xl overflow-hidden shadow-xl shadow-black/50 rotate-[-3deg]">
            <img src={layer1} className="w-full h-full object-cover" />
          </div>

          {/* Layer 2 (foto kecil agak miring) */}
          <div className="absolute left-[16%] top-[10%] w-[220px] h-[300px] rounded-xl overflow-hidden shadow-xl shadow-black/50 rotate-[4deg]">
            <img src={layer2} className="w-full h-full object-cover" />
          </div>

          {/* Layer 3 (foto utama wajah bunga) */}
          <div className="absolute left-[26%] top-[18%] w-[260px] h-[310px] rounded-xl overflow-hidden shadow-xl shadow-black/70 rotate-[-1deg]">
            <img src={heroMain} className="w-full h-full object-cover" />
          </div>

          {/* ================ TEXT RIGHT SIDE ================ */}
          <div className="absolute right-[10%] top-[30%] max-w-md">
            <h1 className="text-[48px] md:text-[60px] font-extrabold leading-[1.0]">
              ARTIST <br /> ART <br /> CONNECT
            </h1>
            <p className="mt-5 text-base text-neutral-200">
              Discover the best work from modern visual artists,  
              from illustration to contemporary art.
            </p>
          </div>
        </div>

        {/* Thin line */}
        <div className="mt-8 h-[2px] w-full bg-neutral-500/40"></div>
      </div>
    </section>
  );
}
