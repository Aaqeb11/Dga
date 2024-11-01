import Image from "next/image";
import { data } from "@/data/IntroSection";
import HeroSlide from "@/components/HeroSlide";

export default function Home() {

  return (
    <main className="lg:mt-[110px] mt-[70px]">
      <section className="relative w-full lg:h-[80vh] h-[77vh] ">
        <HeroSlide data={data} />
      </section>
    </main>
  );
}
