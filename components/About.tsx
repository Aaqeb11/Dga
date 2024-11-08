import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
        <div className="flex flex-col justify-evenly p-4 gap-8 w-full"> 
            <div className="flex flex-col ">
              <div className="h-20 w-full"></div>
              <div><span className="text-black text-5xl">Designing</span> <span className="text-5xl text-[#f2d98c]">Dreams</span></div>
            </div>

            <div>
              <p className="md:text-md ">Dipen Gada & Associates, popularly known as DGA, began as a very modest interior design firm. Gradually with time and every project accomplished, DGA evolved from an exclusive interior design firm to a civil and architectural planning firm and attained the position as one of the respectable and admired firms of India.</p>
            </div>

            <div>
              <button className="border-[1px] px-6 py-4 border-black">READ MORE</button>
            </div>
            
          </div>
          <div className="w-full h-full relative">
            <Image
              src="/welcome_img1.png"
              alt="welcome image"
              width={100}
              height={100}
              className="md:w-[40vw] md:-top-[210px] absolute z-10 w-[90vw] left-4 md:left-0"
            />
            
            <Image
              src="/welcome_img2.png"
              alt="welcome image"
              width={100}
              height={100}
              className="md:w-[27vw] md:top-[40px] md:-left-14 absolute z-0 w-[70vw] top-[150px] -left-6"
            />


          </div></>
    )
}

export default About
