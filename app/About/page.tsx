import Image from "next/image";

import NewComponent from "@/components/NewComponent";

export default function Home() {
  const BackgroundLetter = ({ letter }: { letter: string }) => {
    return (
      
    <span className="md:text-6xl text-6xl lg:text-[225px] 2xl:text-[350px] lg:w-[224px] 2xl:w-[300px] w-16 text-[rgba(105,191,6,0.3)] flex justify-center font-bold">
    {letter}
  </span>
    )
  }
  return (
    <main className="lg:mt-[110px] mt-[70px] relative">
      <section className="relative min-h-screen md:mt-[13vh] ">
        <NewComponent/>
      </section>
    </main>
  );
}