import React from "react";

export default function ProductsSection() {
  const products = [
    { img: "/vr1.png", title: "VR Headset – V16" },
    { img: "/vr2.png", title: "VR Headset – V16" },
    { img: "/vr3.png", title: "VR Headset – V16" },
  ];

  return (
    <section className="bg-[#0A090D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">


        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Our Product</h2>
          <button className="text-gray-300 hover:text-white text-sm">View All</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {products.map((item, index) => (
    <div
      key={index}
      className="bg-white/5 p-4 rounded-lg shadow-md hover:scale-105 transition"
    >
      <img
        src={item.img}
        alt={item.title}
        className="rounded-md w-full h-[180px] object-cover"
      />
      <h3 className="mt-2 font-semibold text-sm">{item.title}</h3>
      <div className="flex items-center space-x-3 mt-1 text-xs">
        <span>❤️ 24</span>
        <span>💬 02</span>
        <span>✈️</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
