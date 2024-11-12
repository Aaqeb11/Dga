"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface SlideItem {
  image: string;
  text: string;
}

interface HeroSlideProps {
  data: SlideItem[];
}

const HeroSlide: React.FC<HeroSlideProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, data.length);
    buttonRefs.current = buttonRefs.current.slice(0, data.length);

    gsap.from(textRef.current, {
      yPercent: -20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, [data.length]);

  const handleSlideChange = (index: number) => {
    if (index === activeIndex) return;

    gsap.to(imageRefs.current[activeIndex], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(buttonRefs.current[activeIndex], {
      scale: 1,
      backgroundColor: 'transparent',
      color: '#ffffff',
      duration: 0.3,
    });

    gsap.to(imageRefs.current[index], {
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
    });

    gsap.to(buttonRefs.current[index], {
      scale: 1.1,
      backgroundColor: '#ffffff',
      color: '#000000',
      duration: 0.3,
    });

    gsap.to(textRef.current, {
      yPercent: 20,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(textRef.current, {
          yPercent: -20,
          duration: 0,
          onComplete: () => {
            gsap.to(textRef.current, {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      },
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      handleSlideChange(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <Image
            src={item.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex items-center justify-center z-10 w-[70vw]">
          <h1
            ref={textRef}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center"
          >
            {data[activeIndex].text}
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 flex md:items-center items-end justify-center md:justify-start z-20 p-4">
        <div className="flex flex-row md:flex-col gap-4 md:gap-[4vh]">
          {data.map((_, index) => (
            <button
              key={index}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => handleSlideChange(index)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded- border-2 border-white font-light
                transition-all duration-300 hover:scale-110
                ${
                  index === activeIndex 
                    ? 'bg-white text-black scale-110' 
                    : 'bg-transparent text-white'
                }`}
            >
              {(index + 1).toString().padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlide;