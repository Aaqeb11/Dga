import Image from "next/image";
import { data } from "@/data/IntroSection";
import HeroSlide from "@/components/HeroSlide";
import About from "@/components/About";
import Expandable from "@/components/Expandable";

export default function Home() {
  return (
    <main className="lg:mt-[110px] mt-[70px] relative">
      <section className="relative w-full lg:h-[80vh] h-[77vh]">
        <HeroSlide data={data} />
      </section>

      {/* Positioning the line with negative margin to overlay */}
      <div className=" items-center justify-center w-full px-10 absolute -mt-14 hidden md:flex">
        <div className="h-[19vh] w-[1px] bg-[#f2d98c]"></div>
      </div>
      <section className="min-h-screen relative mt-[13vh] mb-10">
        <div className=" z-0 flex items-center justify-center z-0 relative">
          <span className="text-6xl lg:text-[180px] lg:w-[224px] w-16 text-gray-100 flex justify-center font-bold">A</span>
          <span className="text-6xl lg:text-[180px] lg:w-[224px] w-16 text-gray-100 flex justify-center font-bold">B</span>
          <span className="text-6xl lg:text-[180px] lg:w-[224px] w-16 text-gray-100 flex justify-center font-bold">O</span>
          <span className="text-6xl lg:text-[180px] lg:w-[224px] w-16 text-gray-100 flex justify-center font-bold">U</span>
          <span className="text-6xl lg:text-[180px] lg:w-[224px] w-16 text-gray-100 flex justify-center font-bold">T</span>

        </div>
        <div className="flex items-center justify-between lg:w-[80%] mx-auto z-10 md:-mt-[90px] -mt-20 md:flex-row flex-col gap-6 h-full">
          <About/>
        </div>

      </section>
      <div className=" items-center justify-center w-full px-10 absolute -mt-[90px] hidden md:flex z-10" >
        <div className="h-[19vh] w-[1px] bg-[#f2d98c]"></div>
      </div>
      <section className="min-h-screen relative mt-[40vh] md:mt-0">
      <div className="flex md:flex-row h-screen flex-col ">
       <Expandable/>
      </div>
    </section>
    </main>
  );
}