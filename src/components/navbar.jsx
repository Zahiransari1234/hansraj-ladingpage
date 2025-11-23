import React from "react";

export default function Navbar(){
  return (
    <header className="absolute top-6 left-6 right-6 z-30">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="px-4 py-2 border border-white/20 rounded-md text-sm tracking-wider">
          LOGO
        </div>
      </div>
    </header>
  );
}
