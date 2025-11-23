import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function Hero() {
  const socialIcons = [
    { icon: <FaPhoneAlt />, id: "phone" },
    { icon: <FaEnvelope />, id: "email" },
    { icon: <FaMapMarkerAlt />, id: "location" },
    { icon: <FaUser />, id: "user" },
  ];

  const sponsors = ["TIME", "The New York Times", "CNBC", "BBC", "CNBC"];

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url('/hero1.jpg')" }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />


      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center gap-10">


        <div className="flex-1">
          <h1 className="text-xl sm:text-xl md:text-[90px] lg:text-[120px] font-extrabold uppercase leading-[0.9] tracking-wide">
            Business Name
          </h1>

          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition">
              Subscribe
            </button>
            <button className="px-6 py-3 border border-white/50 rounded-sm hover:bg-white hover:text-black transition">
              Message
            </button>
          </div>

         <div className="mt-6 inline-flex gap-4 bg-white/10 backdrop-blur-md p-3 rounded-md w-auto">
  {socialIcons.map(({ icon, id }) => (
    <div
      key={id}
      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg hover:bg-white hover:text-black transition"
    >
      {icon}
    </div>
  ))}
</div>

        </div>

        {/* Right Stats */}
        <div className="hidden md:flex flex-col items-end gap-10">
          <div className="text-right">
            <p className="text-4xl font-bold">2560</p>
            <span className="text-white/60 text-sm">Posts</span>
          </div>

          <div className="text-right">
            <p className="text-4xl font-bold">14k</p>
            <span className="text-white/60 text-sm">Subscribers</span>
          </div>

          {/* Rating Badge */}
          <div className="relative">
            <span className="absolute -right-8 -bottom-8 bg-gradient-to-tr from-yellow-500 to-amber-400 text-black px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
              ⭐ 4.5
            </span>
          </div>
        </div>
      </div>

      {/* Sponsor Strip */}
      <div className="absolute bottom-0 w-full bg-black/70 py-3">
        <div className="max-w-screen-lg mx-auto px-6 flex items-center justify-center md:justify-between gap-4 flex-wrap text-white/60 text-xs tracking-wide">
          {sponsors.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
