import Image from "next/image";
import Link from "next/link";

const tracks = [
  { name: "Web Development", image: "/tracks/spiderman.png", color: "bg-[#FDF4CE]", description: "Build scalable and responsive modern web applications." },
  { name: "Product Design", image: "/tracks/witch.png", color: "bg-[#FEE2E2]", description: "Craft intuitive, accessible, and delightful user interfaces and experiences." },
  { name: "Cyber Security", image: "/tracks/fury.png", color: "bg-[#FFE4E6]", description: "Protect systems, networks, and data from digital attacks." },
  { name: "Artificial Intelligence", image: "/tracks/vision.png", color: "bg-[#D0F2FE]", description: "Explore machine learning, neural networks, and AI solutions." },
  { name: "Data Analytics", image: "/tracks/hulk.png", color: "bg-[#DCFCE7]", description: "Uncover actionable insights, analyze metrics, and power data-driven decisions." },
  { name: "Cloud Computing", image: "/tracks/iron_man.png", color: "bg-[#E0E7FF]", description: "Design and manage scalable cloud infrastructure and services." },
  { name: "Open Source", image: "/tracks/drstrange.png", color: "bg-[#CFFAFE]", description: "Contribute to and leverage the power of open-source projects." },
  { name: "Startup", image: "/tracks/thor.png", color: "bg-[#F3E8FF]", description: "Learn to build, launch, and scale successful tech startups." },
  { name: "DevOps", image: "/tracks/drdoom.png", color: "bg-[#FEF08A]", description: "Automate and streamline the software delivery pipeline." },
  { name: "Mobile Development", image: "/tracks/ultron.png", color: "bg-[#FCE7F3]", description: "Create high-performance apps for iOS and Android devices." },
  { name: "Project Management", image: "/tracks/captainamerica.png", color: "bg-[#F5F3FF]", description: "Lead teams, define scope, and ensure successful delivery of tech products." },
];

export default function TracksCarouselSection() {
  return (
    <section className="py-16 sm:py-24 max-w-[100vw] overflow-hidden bg-[#FAF7EE]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 flex flex-col items-center px-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-sm gap-2 mb-6">
            <span className="text-[#F5B82A] text-lg leading-none">★</span>
            <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-widest">
              What To Expect
            </span>
        </div>
        <h2 className="font-akira font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.95]">
          4 MONTHS <br className="hidden sm:block" /> 
          <span className="text-[#185c37]">10+ TRACKS</span>
        </h2>
      </div>

      {/* Full-width Carousel */}
      <div className="w-full relative py-4 flex overflow-hidden group">
        {/* Track Strip 1 */}
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused] will-change-transform">
          {tracks.map((track, i) => (
            <div key={`track-1-${i}`} className="flex-none w-[280px] sm:w-[320px] lg:w-[360px] px-3 sm:px-4">
              <div className={`relative h-[400px] sm:h-[450px] rounded-3xl flex flex-col items-center justify-end p-4 sm:p-6 ${track.color} overflow-hidden shadow-xl border border-black/5 group/card cursor-pointer`}>
                
                {/* Character Image */}
                <div className="absolute inset-x-0 top-0 h-3/5 w-full">
                  <Image 
                    src={track.image} 
                    alt={track.name} 
                    fill 
                    className="object-contain object-bottom transition-transform duration-500 group-hover/card:scale-110 drop-shadow-xl p-4" 
                  />
                </div>
                
                {/* Text Content Card */}
                <div className="relative z-10 w-full bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 mt-auto border border-white/50 transform transition-transform duration-300 group-hover/card:-translate-y-2 text-center shadow-lg">
                  <h3 className="font-akira font-black text-sm sm:text-base text-black tracking-tight uppercase mb-2 line-clamp-1">
                      {track.name}
                  </h3>
                  <p className="text-black/80 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                      {track.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Track Strip 2 (Identical for uninterrupted infinite loop) */}
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused] will-change-transform" aria-hidden="true">
          {tracks.map((track, i) => (
            <div key={`track-2-${i}`} className="flex-none w-[280px] sm:w-[320px] lg:w-[360px] px-3 sm:px-4">
              <div className={`relative h-[400px] sm:h-[450px] rounded-3xl flex flex-col items-center justify-end p-4 sm:p-6 ${track.color} overflow-hidden shadow-xl border border-black/5 group/card cursor-pointer`}>
                
                {/* Character Image */}
                <div className="absolute inset-x-0 top-0 h-3/5 w-full">
                  <Image 
                    src={track.image} 
                    alt={track.name} 
                    fill 
                    className="object-contain object-bottom transition-transform duration-500 group-hover/card:scale-110 drop-shadow-xl p-4" 
                  />
                </div>
                
                {/* Text Content Card */}
                <div className="relative z-10 w-full bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 mt-auto border border-white/50 transform transition-transform duration-300 group-hover/card:-translate-y-2 text-center shadow-lg">
                  <h3 className="font-akira font-black text-sm sm:text-base text-black tracking-tight uppercase mb-2 line-clamp-1">
                      {track.name}
                  </h3>
                  <p className="text-black/80 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                      {track.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Fade edges to blend into background */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7EE] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7EE] to-transparent z-20 pointer-events-none" />
      </div>

      {/* CTA Button placed below carousel */}
      <div className="mt-12 sm:mt-16 flex justify-center px-4">
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#185c37] text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#124529] transition-all hover:scale-105 shadow-lg border-2 border-[#185c37] hover:border-black group"
        >
          <div className="bg-white rounded-full p-1 text-[#185c37] group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
          </div>
          Explore Tracks
        </Link>
      </div>
    </section>
  );
}
