import Image from "next/image";
import Link from "next/link";

const tracks = [
  { name: "Web Development", image: "/tracks/spiderman.png", color: "bg-[#FDF4CE]" },
  { name: "Cyber Security", image: "/tracks/fury.png", color: "bg-[#FFE4E6]" },
  { name: "Artificial Intelligence", image: "/tracks/vision.png", color: "bg-[#D0F2FE]" },
  { name: "Cloud Computing", image: "/tracks/iron_man.png", color: "bg-[#DCFCE7]" },
  { name: "Open Source", image: "/tracks/drstrange.png", color: "bg-[#CFFAFE]" },
  { name: "Startup", image: "/tracks/thor.png", color: "bg-[#E0E7FF]" },
  { name: "DevOps", image: "/tracks/drdoom.png", color: "bg-[#FEF08A]" },
  { name: "Mobile Development", image: "/tracks/ultron.png", color: "bg-[#FCE7F3]" },
];

export default function TracksCarouselSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Moving Carousel */}
        <div className="w-full lg:w-1/2 overflow-hidden relative py-4">
          <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicate tracks array for seamless infinite scroll */}
            {[...tracks, ...tracks].map((track, i) => (
              <div key={i} className="flex-none w-1/3 sm:w-1/4 lg:w-1/3 px-2 sm:px-3">
                <div className={`relative aspect-[3/4] rounded-3xl flex items-end justify-center pb-4 ${track.color} overflow-hidden shadow-xl border border-black/5 group`}>
                  <Image 
                    src={track.image} 
                    alt={track.name} 
                    fill 
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-110 drop-shadow-xl p-2" 
                  />
                  {/* Name overlay */}
                  <div className="relative z-10 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-akira tracking-widest uppercase text-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {track.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade edges to blend into background */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF7EE] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF7EE] to-transparent z-20 pointer-events-none" />
        </div>

        {/* Right Column: Text Content (Modeled after image) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 lg:pl-8">
          
          {/* Top Tag */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-sm gap-2">
            <span className="text-[#F5B82A] text-lg leading-none">★</span>
            <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-widest">
              What To Expect
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-akira font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.95]">
            5 DAYS <br className="hidden sm:block" /> 
            <span className="text-[#185c37]">20+ TRACKS</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
            Immerse yourself in a diverse array of technical sessions, hands-on workshops, and deep dives across the most in-demand fields in technology today.
          </p>

          {/* Button */}
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#185c37] text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#124529] transition-all hover:scale-105 shadow-lg border-2 border-[#185c37] hover:border-black group"
          >
            {/* Icon mimicking a cart or schedule */}
            <div className="bg-white rounded-full p-1 text-[#185c37] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            Explore Tracks
          </Link>

        </div>
      </div>
    </section>
  );
}
