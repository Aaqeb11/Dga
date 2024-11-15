
import Glimplses from "@/components/Glimplses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

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
      <section className="relative min-h-screen md:mt-[30vh] ">
      <div className="z-0 flex items-center justify-center relative">
        {['G', 'L', 'I', 'M', 'P', 'S' , 'E' , 'S'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
        </div>
        <div className="relative flex items-center justify-center  mx-auto z-20 flex-col gap-6 w-full  h-full">
      
          <Contact/>
        </div>
      </section>
      <section className="relative min-h-screen mt-[13vh] ">
      <div className="z-0 flex items-center justify-center relative">
        {['T', 'E', 'S', 'T', 'M','O', 'N' , 'I','A','L' , 'S'].map((letter, index) => (
          <BackgroundLetter key={index} letter={letter} />
        ))}
        </div>
        <div className="relative flex items-center justify-center  mx-auto z-20 flex-col gap-6  h-full">
      
          <Testimonials/>
        </div>
      </section>
    </main>
  );
}