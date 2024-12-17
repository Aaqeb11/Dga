
import Expandable from "@/components/Expandable";
import NewSlider from "@/components/NewSlider";

export default function Home() {

  return (
    <main className=" lg:mt-[110px] mt-[70px] relative overflow-hidden">
      <section className="flex flex-col items-center lg:h-[80vh] h-[77vh] ">
        <NewSlider/>
      </section>
    </main>
  );
}