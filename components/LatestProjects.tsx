'use client';
import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

import img1 from "@/public/intro_pic_1.jpg";
import img2 from "@/public/intro_pic_2.jpg";
import img3 from "@/public/intro_pic_3.jpg";
import img4 from "@/public/intro_pic_4.jpg";

interface Project {
  name: string;
  image: StaticImageData;
}

const projects: Project[] = [
  { name: "Chic Living Room", image: img1 },
  { name: "Cozy Seating", image: img2 },
  { name: "Urban Kitchen", image: img3 },
  { name: "Spacious Closet", image: img4 },
];

const LatestProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(handleNext, 4000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [handleNext]);

  const getProjectName = (name: string) => {
    const words = name.split(" ");
    return (
      <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-16">
        <span className="text-white">{words[0]}</span>{" "}
        {words.slice(1).join(" ")}
      </h2>
    );
  };

  return (
    <section id="#" className="py-16 px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-[#264845] sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Design Excellence
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Unveiled
          </h1>
        

        <div className="flex justify-center items-center gap-3 my-4">
          <div className="w-1/4 h-px border-t border-gray-600" />
          <p className="text-gray-600 font-Jost text-sm sm:text-base uppercase tracking-wider">
            Projects
          </p>
          <div className="w-1/4 h-px border-t border-gray-600" />
        </div>

        <p className="text-gray-600 font-Jost text-sm sm:text-lg md:text-xl mt-2 mb-10 mx-auto max-w-3xl">
          Transforming Visions into Stunning Realities. Experience the
          innovation, creativity, and craftsmanship that define our approach to
          exceptional interior design.
        </p>

        {/* Button */}

        <div className="relative rounded-xl mt-14 w-full max-w-4xl mx-auto h-[450px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].name}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="absolute inset-0" />

          <div className="absolute inset-0 flex flex-col justify-around px-8 pt-10 pb-10">
            {getProjectName(projects[currentIndex].name)}
            <div className="flex justify-center space-x-2 mt-6">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`relative w-40 h-24 transition duration-300 ease-in-out ${
                    index === currentIndex ? "border-2 border-white" : ""
                  } rounded-lg overflow-hidden`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 font-Jost flex items-center justify-center bg-black bg-opacity-50 text-white text-sm p-2 text-center">
                    {project.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Up and Down Arrow Navigation */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
            <button
              onClick={handlePrev}
              className="text-white p-2 mb-1 transition duration-200"
              aria-label="Previous Project"
            >
              <span className="inline-block">
                <ChevronUp />
              </span>
            </button>

            {/* Circle Indicators with Loader */}
            <div className="relative flex flex-col space-y-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                  >
                    {index === currentIndex && (
                      <div className="absolute w-5 h-5 rounded-full border-2 border-red-500 animate-loader" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-white p-2 mt-1 transition duration-200"
              aria-label="Next Project"
            >
              <span className="inline-block">
                <ChevronDown />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-loader {
          animation: rotate 1s linear infinite;
          position: absolute;
          top: -8px;
          left: -8px;
          width: 1.5rem;
          height: 1.5rem;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default LatestProjects;