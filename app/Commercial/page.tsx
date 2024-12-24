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
      <section className=" min-h-screen flex flex-col items-center md:mt-[30vh] ">
        <h1 className="text-5xl font-medium justify-center items-center mb-[10vh]">Commercial <span className="text-green-600">Projects</span></h1>
        <NewComponent/>
        <NewComponent/>
        <NewComponent/>
      </section>
    </main>
  );
}