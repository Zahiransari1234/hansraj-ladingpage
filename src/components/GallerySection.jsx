import React from "react";

export default function GallerySection() {
  const gallery = [
    { img: "/g1.png", name: "Jenny Wilson" },
    { img: "/g2.png", name: "Jenny Wilson" },
    { img: "/g3.png", name: "Jenny Wilson" },
  ];

  return (
    <section className="bg-[#0A090D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Our Gallery</h2>
          <button className="text-gray-300 hover:text-white text-sm">View All</button>
        </div>

       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {gallery.map((item, index) => (
    <div
      key={index}
      className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-[200px] object-cover"
      />
      <div className="absolute top-2 left-2 bg-black/60 text-[10px] px-2 py-1 rounded-full">
        {item.name}
      </div>
      <div className="absolute bottom-2 left-2 text-[10px] bg-black/60 px-2 py-1 rounded-full">
        ❤️ 26   💬03
      </div>
    </div>
  ))}
</div>

        <p className="text-center mt-12 text-lg italic">Thank you ! Visit Again</p>
      </div>
    </section>
  );
}
