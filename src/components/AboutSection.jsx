import { FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0A090D] text-white py-20 px-6 flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="relative flex justify-center md:justify-start">

          
          <div className="bg-[#5A2EFF] w-[320px] h-[420px]"></div>
          <img
            src="/hero2.png"
            alt="VR User"
            className="
              absolute 
              left-[220.54px] 
              top-[10.3px] 
              w-[814.68px] 
              h-[500.4px] 
              object-contain 
              hidden 
              md:block
            "
          />

          <img
            src="/hero2.png"
            alt="VR User"
            className="
              absolute
              top-[-40px]
              w-[814.68px]
              h-[500.4px]
              object-contain
              md:hidden
            "
          />
        </div>
        <div>
          <h2 className="text-[42px] sm:text-[55px] font-extrabold leading-tight text-center md:text-left">
            About <br /> Company
          </h2>

          <p className="mt-6 text-[15px] text-gray-300 leading-relaxed max-w-[480px] text-center md:text-left mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            ut curabitur leo. Sed maecenas tristique tincidunt eros. Vestibulum
            tincidunt sit risus consequat quam amet aliquet.
          </p>

          <div className="flex md:block justify-center">
            <button className="mt-20 ml-50 inline-flex items-center gap-3 px-6 py-3 bg-[#5A2EFF] hover:bg-[#61587c] transition rounded-none font-semibold">
              We’re Hiring
              <FiArrowRight className="text-[20px]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
