import React from 'react'
import Image from 'next/image'

const Expandable = () => {
    return (
        <>
         <div className="md:w-1/3 w-full  relative md:hover:w-4/5 transition-all duration-300 ease-in-out ">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white text-3xl font-bold">
              Design
            </div>
            </div>
          <Image
            src="/intro_pic_2.jpg"
            alt="residential"
            width={200}
            height={200}
            quality={100}
            className="w-full h-full object-cover "
            />
             <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="md:w-1/3 w-full relative md:hover:w-4/5 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white text-3xl font-bold">
              Design
            </div>
          </div>
          <Image
            src="/intro_pic_2.jpg"
            alt="residential"
            width={200}
            height={200}
            quality={100}
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="md:w-1/3 w-full relative md:hover:w-4/5 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white text-3xl font-bold">
              Design
            </div>
          </div>
          <Image
            src="/intro_pic_2.jpg"
            alt="residential"
            width={200}
            height={200}
            quality={100}
              className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div></>
    )
}

export default Expandable
