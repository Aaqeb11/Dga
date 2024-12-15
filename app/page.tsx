import Image from "next/image";
import { data } from "@/data/IntroSection";
import HeroSlide from "@/components/HeroSlide";
import About from "@/components/About";
import Expandable from "@/components/Expandable";
import WhyUsSection from "@/components/WhyUsSection";
import Glimplses from "@/components/Glimplses";
import Testimonials from "@/components/Testimonials";
import NewComponent from "@/components/NewComponent";
import NewSlider from "@/components/NewSlider";

export default function Home() {
  const BackgroundLetter = ({ letter }: { letter: string }) => {
    return (
      
    <span className="md:text-6xl text-5xl lg:text-[225px] 2xl:text-[350px] lg:w-[224px] 2xl:w-[300px] w-16 text-[rgba(105,191,6,0.3)] flex justify-center font-bold">
    {letter}
  </span>
    )
  }
  return (
    <main className="lg:mt-[110px] mt-[70px] relative overflow-hidden">
      <section className="relative flex justify-center items-center w-full lg:h-[80vh] h-[77vh] ">
        <NewSlider/>
      </section>
    </main>
  );
}