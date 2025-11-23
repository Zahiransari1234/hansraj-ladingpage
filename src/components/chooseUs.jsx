import React from "react";

export default function ChooseUs() {
  return (
    <div className="bg-[#5D41D7] text-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-8 gap-10">

        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Why <br /> choose <br /> us
          </h1>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-200 leading-6 md:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
            curabitur leo. Sed maecenas tristique tincidunt eros. Vestibulum tincidunt sit
            risus consequat quam amet aliquet.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/hero3.png"
            className="w-full max-w-[450px] sm:max-w-[500px] h-auto rounded-lg shadow-xl object-cover bg-gray-900"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}
