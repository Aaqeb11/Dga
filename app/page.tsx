import Image from "next/image";
import { data } from "@/data/IntroSection";
import HeroSlide from "@/components/HeroSlide";
import About from "@/components/About";
import Expandable from "@/components/Expandable";
import WhyUsSection from "@/components/WhyUsSection";
import Glimplses from "@/components/Glimplses";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const BackgroundLetter = ({ letter }: { letter: string }) => {
    return (
      
    <span className="md:text-6xl text-6xl lg:text-[225px] 2xl:text-[350px] lg:w-[224px] 2xl:w-[300px] w-16 text-gray-100 flex justify-center font-bold">
    {letter}
  </span>
    )
  }
  return (
    <main className="lg:mt-[110px] mt-[70px] relative">
      <section className="relative w-full lg:h-[80vh] h-[77vh]">
        <HeroSlide data={data} />
      </section>

      {/* Positioning the line with negative margin to overlay */}
      <div className=" items-center justify-center w-full px-10 absolute -mt-14 hidden md:flex">
        <div className="h-[19vh] xl:h-[14vh] w-[1px] bg-[#f2d98c]"></div>
      </div>
      <section className="min-h-screen md:min-h-[50vh] lg:min-h-[100vh] 2xl:min-h-[80vh] relative mt-[13vh] mb-8 ">
      <div className="z-0 flex items-center justify-center relative">
        {['A', 'B', 'O', 'U', 'T'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
      </div>
        <div className="relative flex items-center justify-center lg:max-w-[80%] 2xl:max-w-[60%] mx-auto z-20 md:-mt-[14vh] 2xl:-mt-[10vh]  -mt-20 md:flex-row flex-col gap-6 h-full">
          <About/>
        </div>

      </section>
      <div className=" items-center justify-center w-full px-10 absolute -mt-[90px] hidden md:flex z-10" >
        <div className="h-[19vh] xl:h-[14vh] w-[1px] bg-[#f2d98c]"></div>
      </div>
      <section className="min-h-screen relative mt-[40vh] md:mt-0">
      <div className="flex lg:flex-row h-screen flex-col ">
       <Expandable/>
      </div>
    </section>
    <section className=" relative md:mt-[13vh] mt-[30vh]">
    <div className="z-0 flex items-center justify-center relative">
        {['W', 'H', 'Y', 'U', 'S'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
      </div>
        <div className="relative flex items-center justify-between lg:max-w-[80%] 2xl:max-w-[60%] mx-auto z-20 md:-mt-[90px] lg:-mt-[200px] 2xl:-mt-[220px] -mt-20 md:flex-row flex-col gap-6 h-full">
          <WhyUsSection/>
        </div>

      </section>
      <section className="relative min-h-screen md:mt-[13vh] ">
      <div className="z-0 flex items-center justify-center relative">
        {['G', 'L', 'I', 'M', 'P', 'S' , 'E' , 'S'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
        </div>
        <div className="relative flex items-center justify-center  mx-auto z-20 flex-col gap-6  h-full">
      
          <Glimplses/>
        </div>
      </section>
      <section className="relative min-h-screen mt-[13vh] ">
      <div className="z-0 flex items-center justify-center relative">
        {['T', 'E', 'S', 'T', 'M','O', 'N' , 'I','A','L' , 'S'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
        </div>
        <div className="flex items-center justify-center">

        <Testimonials/>
        </div>
      </section>
    </main>
  );
}